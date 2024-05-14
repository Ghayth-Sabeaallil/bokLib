type Author = {
    id: string;
    name: string;
    img: number;
    year: string;
};
type Book = {
    title: string;
    img: number;
    id: string;
    author: string;
};
type Read = {
    title: string;
    img: number;
    id: string;
    author: string;
};
type Review = {
    rate: number;
    review: string;
    id: string;
    page: string;
};
type Action =
    | { type: "ADD_AUTHOR"; payload: Author }
    | { type: "ADD_BOOK"; payload: Book }
    | { type: "REMOVE_BOOK"; payload: string }
    | { type: "REMOVE_AUTHOR"; payload: string }
    | { type: "ADD_READ"; payload: Read }
    | { type: "ADD_REVIEW"; payload: Review }
    | { type: "REMOVE_READ"; payload: string }