 

export interface Movie {
    adult: boolean;
    backdrop_path: string;
    budget: number;
    genres: Genres[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompanies[];
    release_date: string;
    revenue: number;
    runtime: number;
    status: string;
    tagline: string;
    title: string;
    vidéo: boolean;
    vote_average: number;
    vote_count: number;
}

export interface Genres {
    id: number;
    name: string;
}

export interface ProductionCompanies {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}