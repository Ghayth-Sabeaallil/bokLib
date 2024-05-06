//type
export type Subject = {
    name: string,
    work_count: string,
    works: Works[];
};

export type Works = {
    key: string,
    title: string,
    cover_id: number,
    subjects: string[],
    authors: Author[],
    first_publish_year: number,
}

export type Author = {
    name: string
}

export type Search = {
    numFound: number | undefined,
    key: string,
    docs: Book[],
}
export type Book = {
    author_name: string[],
    author_key: string[],
    first_publish_year: number,
    first_sentence: string[],
    language: string[],
    title: string,
    ratings_average: number,
    cover_i: number,
    number_of_pages_median: number;
    key?: string;
}


export interface BookDetails {
    title: string,
    first_publish_date: string,
    latest_revision: number;
    subjects: string[],
    description: Description & String[],
    authors?: AuthorDetails[],
    covers: number[],
    number_of_pages?: number
}

export interface Description {
    value: string,
}

export type AuthorDetails = {
    author?: AuthorKey,
}
export type AuthorKey = {
    key?: string,
}

export type Authors = {
    name: string,
    birth_date: string,
    wikipedia: string,
    location: string,
    photo: number[],
}

export interface BookRate {
    summary: Summary
}
export interface Summary {
    average: number;
}