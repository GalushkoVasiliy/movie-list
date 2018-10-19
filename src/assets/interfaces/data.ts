export interface SingleDataInArray {
    vote_count: number;
    id: number;
    video: boolean;
    vote_average: number;
    title: string;
    popularity: number;
    poster_path: string;
    original_language: string;
    original_title: string;
    genre_ids: number[];
    backdrop_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
}

export interface AllData {
    results: SingleDataInArray[];
    page: number;
    total_results: number;
    dates: {
        maximum: string;
        minimum: string;
    };
    total_pages: number;
}

export interface MetaInterface {
    title: string;
    description: string;
    navigate: string;
}