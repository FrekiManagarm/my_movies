import { Genres, ProductionCompanies } from "./movie";

export interface Serie {
    adult: boolean;
    backdrop_path: string;
    episode_run_time: number[];
    first_air_date: string;
    genres: Genres[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: EpisodeToAir;
    name: string;
    next_episode_to_air: EpisodeToAir;
    networks: Networks[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompanies[];
    seasons: Seasons[];
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;
}

export interface Seasons {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string | null;
    season_number: number;
    vote_average: number;
}

export interface EpisodeToAir {
    id: number;
    name: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    episode_type: string;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
}

export interface Networks {
    id: number;
    name: string;
    logo_path: string;
    origin_country: string;
}