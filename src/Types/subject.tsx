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
    key: string,
    name: string
}