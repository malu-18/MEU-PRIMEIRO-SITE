import { artists } from "./data.js";
import { initTimeline } from "./timeline.js";
import { initGallery } from "./gallery.js";

const createLink = (url, label, className = "social-link") => {
  const link = document.createElement("a");
  link.className = className;
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = label;
  return link;
};

const createSocialCard = (artist) => {
  const card = document.createElement("article");
  card.className = "social-card";
  const top = document.createElement("div");
  top.className = "social-card-top";
  const avatar = document.createElement("span");
  avatar.className = "social-avatar";
  avatar.setAttribute("aria-hidden", "true");
  avatar.textContent = artist.monogram;
  const titleGroup = document.createElement("div");
  const title = document.createElement("h3");
  title.textContent = artist.name;
  const note = document.createElement("p");
  note.textContent = "Canais e perfis oficiais";
  titleGroup.append(title, note);
  top.append(avatar, titleGroup);
  const links = document.createElement("div");
  links.className = "social-links";
  artist.social.forEach((profile) => links.append(createLink(profile.url, profile.platform)));
  card.append(top, links);
  return card;
};

const createProjectCard = (project) => {
  const card = document.createElement("article");
  card.className = "project-card reveal";
  const art = document.createElement("div");
  art.className = "project-art";
  art.setAttribute("aria-hidden", "true");
  const mark = document.createElement("span");
  mark.className = "project-art-mark";
  mark.textContent = project.artist === "Henrique & Juliano" ? "H&J" : "LS";
  art.append(mark);
  const year = document.createElement("span");
  year.className = "project-year";
  year.textContent = `${project.year} · ${project.artist}`;
  const title = document.createElement("h3");
  title.textContent = project.title;
  const description = document.createElement("p");
  description.textContent = project.note;
  const link = createLink(project.link, "Ouvir ou consultar no canal oficial", "project-link");
  card.append(art, year, title, description, link);
  return card;
};

const createReference = (source) => {
  const item = document.createElement("li");
  const link = createLink(source.url, source.label, "");
  item.append(link);
  return item;
};

const renderProjects = () => {
  const featuredContainer = document.querySelector("#featured-projects");
  if (featuredContainer) {
    const featured = [...artists["henrique-juliano"].projects.slice(-2), artists["luan-santana"].projects[0]];
    featuredContainer.replaceChildren(...featured.map(createProjectCard));
  }

  const artistContainer = document.querySelector("#artist-projects");
  if (artistContainer) {
    const artist = artists[document.body.dataset.artistPage];
    if (artist) artistContainer.replaceChildren(...artist.projects.map(createProjectCard));
  }
};

const renderSocials = () => {
  const homeContainer = document.querySelector("#social-cards");
  if (homeContainer) homeContainer.replaceChildren(...Object.values(artists).map(createSocialCard));

  const artistContainer = document.querySelector("#artist-social-cards");
  if (artistContainer) {
    const artist = artists[document.body.dataset.artistPage];
    if (artist) artistContainer.replaceChildren(createSocialCard(artist));
  }
};

const renderReferences = () => {
  const container = document.querySelector("#artist-references");
  if (!container) return;
  const artist = artists[document.body.dataset.artistPage];
  if (artist) container.replaceChildren(...artist.references.map(createReference));
};

const renderSongs = () => {
  const container = document.querySelector("#artist-songs");
  if (!container) return;
  const artist = artists[document.body.dataset.artistPage];
  if (!artist) return;
  const channel = artist.social.find((profile) => profile.platform === "YouTube");
  container.replaceChildren(...artist.songs.map((song) => {
    const item = document.createElement("li");
    const link = createLink(channel.url, song, "song-link");
    link.setAttribute("aria-label", `Abrir o canal oficial para encontrar ${song}`);
    item.append(link);
    return item;
  }));
};

const initMobileMenu = () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  if (!toggle || !nav) return;

  const close = () => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) close();
  });
};

const initScrollEffects = () => {
  const progress = document.querySelector(".scroll-progress");
  const updateProgress = () => {
    if (!progress) return;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const amount = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progress.style.width = `${Math.min(amount, 100)}%`;
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  const revealItems = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
};

const initCurrentSection = () => {
  const links = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
  const sections = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  if (!sections.length || !("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver((entries) => {
    const active = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!active) return;
    links.forEach((link) => {
      if (link.getAttribute("href") === `#${active.target.id}`) link.setAttribute("aria-current", "location");
      else if (link.getAttribute("aria-current") === "location") link.removeAttribute("aria-current");
    });
  }, { rootMargin: "-25% 0px -65% 0px", threshold: [0, .2, .5] });
  sections.forEach((section) => observer.observe(section));
};

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
initMobileMenu();
initTimeline();
renderProjects();
renderSocials();
renderReferences();
renderSongs();
initGallery();
initScrollEffects();
initCurrentSection();
