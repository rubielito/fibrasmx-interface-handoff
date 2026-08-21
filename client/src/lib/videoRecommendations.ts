export type RecommendationVideo = {
  id: string;
  title: string;
  creator: string;
  duration: string;
  views: string;
  image: string;
  publishedAt?: string;
  featured?: boolean;
  categories?: string[];
  tags?: string[];
};

export type RecommendationBlock = {
  type: "creator" | "featured";
  title: string;
  videos: RecommendationVideo[];
};

export type RecommendationResult = {
  title: string;
  blocks: RecommendationBlock[];
  flat: RecommendationVideo[];
};

const normalize = (value = "") => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
const DAY = 1000 * 60 * 60 * 24;

const inferCategories = (video: RecommendationVideo) => {
  const text = normalize(`${video.title} ${video.creator}`);
  const categories: string[] = [];
  if (text.includes("sector") || text.includes("industrial") || text.includes("comercial") || text.includes("hotel")) categories.push("sectores");
  if (text.includes("reporte")) categories.push("reportes");
  if (text.includes("distribucion") || text.includes("pagos") || text.includes("rentas")) categories.push("distribuciones");
  if (text.includes("valuacion") || text.includes("cap rate") || text.includes("noi")) categories.push("valuacion");
  if (text.includes("comparar") || text.includes("comparador") || text.includes("herramienta")) categories.push("herramientas");
  return categories.length ? categories : ["fundamentos"];
};

const enrich = (video: RecommendationVideo): Required<Pick<RecommendationVideo, "categories" | "tags">> & RecommendationVideo => ({
  ...video,
  categories: video.categories ?? inferCategories(video),
  tags: video.tags ?? [normalize(video.creator), ...normalize(video.title).split(/\s+/).filter(word => word.length > 5).slice(0, 3)],
});

const overlap = (left: string[] = [], right: string[] = []) => {
  const source = new Set(left.map(normalize));
  return right.reduce((total, item) => total + (source.has(normalize(item)) ? 1 : 0), 0);
};

const popularityScore = (views = "") => {
  const value = Number(views.replace(/[^0-9.]/g, "")) * (views.toLowerCase().includes("k") ? 1000 : 1);
  return Math.min(10, Math.log10(Math.max(value, 1)) * 2);
};

const recencyScore = (publishedAt?: string) => publishedAt ? Math.max(0, 15 - Math.max(0, Date.now() - new Date(publishedAt).getTime()) / DAY / 30) : 0;

export function getRecommendations(currentVideo: RecommendationVideo, catalog: RecommendationVideo[]): RecommendationResult {
  const current = enrich(currentVideo);
  const ranked = catalog.map(enrich).filter(video => video.id !== current.id).map(video => {
    const sameCreator = normalize(video.creator) === normalize(current.creator);
    const score = (sameCreator ? 60 : 0) + overlap(current.categories, video.categories) * 14 + overlap(current.tags, video.tags) * 8 + recencyScore(video.publishedAt) + popularityScore(video.views) + (video.featured ? 5 : 0);
    return { video, score };
  }).sort((left, right) => right.score - left.score);

  const sameCreator = ranked.filter(item => normalize(item.video.creator) === normalize(current.creator)).slice(0, 4).map(item => item.video);
  const related = ranked.filter(item => normalize(item.video.creator) !== normalize(current.creator)).slice(0, 6).map(item => item.video);
  const blocks: RecommendationBlock[] = [];
  if (sameCreator.length) blocks.push({ type: "creator", title: `Más de ${current.creator}`, videos: sameCreator });
  if (related.length) blocks.push({ type: "featured", title: "Relacionados para seguir aprendiendo", videos: related });
  return { title: "También te podría interesar", blocks, flat: blocks.flatMap(block => block.videos) };
}
