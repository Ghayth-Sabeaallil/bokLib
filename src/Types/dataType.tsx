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
    numFound: number,
    docs: Book[],
}
export type Book = {
    author_name: string[],
    first_publish_year: number,
    first_sentence: string[],
    language: string[],
    title: string,
    ratings_average: number,
    cover_i: number,

}
