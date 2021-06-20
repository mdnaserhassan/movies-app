export interface Movie {
  Language: string;
  Location: string;
  Plot: string;
  Poster: string;
  SoundEffects?: (string)[] | null;
  Stills?: (string)[] | null;
  Title: string;
  imdbID: string;
  listingType: string;
  imdbRating: string;
};
