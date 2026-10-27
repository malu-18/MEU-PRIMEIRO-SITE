import { artists } from "./data.js";

const makePlaceholder = (artist, imageData) => {
  const content = document.createElement("span");
  content.className = "gallery-placeholder";
  const monogram = document.createElement("strong");
  monogram.textContent = artist.monogram;
  const caption = document.createElement("span");
  caption.textContent = imageData.caption;
  const status = document.createElement("small");
  status.textContent = "Imagem fornecida";
  content.append(monogram, caption, status);
  return content;
};

const createGalleryItem = (artist, imageData, openModal) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "gallery-item";
  button.setAttribute("aria-label", `Ampliar imagem: ${imageData.alt || imageData.caption}`);

  const placeholder = makePlaceholder(artist, imageData);
  button.append(placeholder);

  if (imageData.image) {
    const image = document.createElement("img");
    image.src = imageData.image;
    image.alt = imageData.alt || imageData.caption;
    image.loading = "lazy";
    image.addEventListener("load", () => placeholder.remove(), { once: true });
    image.addEventListener("error", () => {
      image.remove();
      placeholder.querySelector("small").textContent = "Imagem indisponível";
    }, { once: true });
    image.addEventListener("click", () => openModal(imageData, artist));
    button.append(image);
  }

  button.addEventListener("click", () => openModal(imageData, artist));
  return button;
};

export const initGallery = () => {
  const modal = document.querySelector(".image-modal");
  if (!modal) return;

  const modalImage = modal.querySelector(".modal-image");
  const modalCaption = modal.querySelector(".modal-caption");
  const closeButton = modal.querySelector(".modal-close");
  let previousTrigger = null;

  const openModal = (imageData, artist) => {
    previousTrigger = document.activeElement;
    modalCaption.textContent = imageData.image
      ? `${imageData.caption} · ${imageData.credit}`
      : `${artist.name}: espaço reservado para uma fotografia autorizada. Consulte o README para adicionar a imagem e o crédito.`;
    if (imageData.image) {
      modalImage.src = imageData.image;
      modalImage.alt = imageData.caption;
      modalImage.hidden = false;
    } else {
      modalImage.removeAttribute("src");
      modalImage.alt = "";
      modalImage.hidden = true;
    }
    modal.showModal();
    closeButton.focus();
  };

  document.querySelectorAll("#artist-gallery").forEach((container) => {
    const artistId = document.body.dataset.artistPage;
    const artist = artists[artistId];
    if (artist) container.replaceChildren(...artist.gallery.map((image) => createGalleryItem(artist, image, openModal)));
  });

  document.querySelectorAll("[data-gallery-item]").forEach((element) => {
    const artist = artists[document.body.dataset.artistPage];
    const portrait = artist?.gallery[0];
    element.addEventListener("click", () => {
      if (portrait) openModal(portrait, artist);
    });
    element.tabIndex = 0;
    element.setAttribute("role", "button");
    element.setAttribute("aria-label", "Abrir informações sobre o retrato reservado");
    element.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        element.click();
      }
    });
  });

  closeButton.addEventListener("click", () => modal.close());
  modal.addEventListener("cancel", (event) => {
    event.preventDefault();
    modal.close();
  });
  modal.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.open) {
      event.preventDefault();
      modal.close();
    }
  });
  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
  });
  modal.addEventListener("close", () => previousTrigger?.focus());
};
