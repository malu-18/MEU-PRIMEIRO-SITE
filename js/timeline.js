import { artists, sources } from "./data.js";

const createTimelineItem = (event, artistId) => {
  const item = document.createElement("article");
  item.className = "timeline-item reveal";
  item.dataset.artist = artistId;

  const year = document.createElement("span");
  year.className = "timeline-year";
  year.textContent = event.year;

  const card = document.createElement("div");
  card.className = "timeline-card";
  const title = document.createElement("h3");
  title.textContent = event.title;
  const description = document.createElement("p");
  description.textContent = event.description;
  const meta = document.createElement("div");
  meta.className = "timeline-meta";

  const artist = document.createElement("span");
  artist.className = "timeline-artist";
  artist.textContent = artists[artistId].name;
  const source = document.createElement("a");
  source.className = "timeline-source";
  const reference = sources[event.source];
  source.href = reference?.url ?? artists[artistId].biographyUrl;
  source.target = "_blank";
  source.rel = "noopener noreferrer";
  source.textContent = `Fonte: ${reference?.label ?? "site oficial"}`;
  meta.append(artist, source);
  card.append(title, description, meta);
  item.append(year, card);
  return item;
};

export const initTimeline = () => {
  const container = document.querySelector("#timeline-list");
  if (!container) return;

  const filter = document.querySelector("#timeline-artist");
  const emptyState = document.querySelector("#timeline-empty");
  const pageArtist = document.body.dataset.artistPage;

  const render = () => {
    const filterValue = pageArtist || filter?.value || "all";
    const entries = Object.entries(artists)
      .filter(([artistId]) => filterValue === "all" || artistId === filterValue)
      .flatMap(([artistId, artist]) => artist.timeline.map((event) => ({ artistId, event })))
      .sort((a, b) => Number(a.event.year) - Number(b.event.year));

    container.replaceChildren(...entries.map(({ artistId, event }) => createTimelineItem(event, artistId)));
    if (emptyState) emptyState.hidden = entries.length > 0;
    container.querySelectorAll(".reveal").forEach((item) => item.classList.add("is-visible"));
  };

  filter?.addEventListener("change", render);
  render();
};
