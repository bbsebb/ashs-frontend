// Définition des types énumérés en TypeScript, supposant que MediaType est une énumération
enum MediaType {

  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  CAROUSEL_ALBUM = "CAROUSEL_ALBUM",

}

export interface Media {
  id: string;
  mediaType: MediaType;
  mediaUrl: string; // En TypeScript, les URLs sont généralement représentées par des strings
  username: string;
  caption: string;
  timestamp: string; // ISO 8601 string representation for dates
  permalink: string;
  thumbnailUrl: string;
  children: Media[]; // Si Media peut avoir des enfants de son propre type
}
