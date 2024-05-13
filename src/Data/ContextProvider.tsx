import { createContext, useReducer } from "react";

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

// GlobalState
type AuthorState = {
    authors: Author[];
};
type BookState = {
    books: Book[];
};
type ReadState = {
    reads: Read[];
};
export type ReviewState = {
    reviews: Review[];
};

const initialSaveAuthorState: AuthorState = {
    authors: [],
};

const initialSaveReviewState: ReviewState = {
    reviews: [],
};

const initialSaveReadState: ReadState = {
    reads: [],
};

const initialSaveBookState: BookState = {
    books: [],
};

export const SaveReadContext = createContext<{
    readState: ReadState;
    readDispatch: React.Dispatch<Action>;
}>({
    readState: initialSaveReadState,
    readDispatch: () => null,
});

export const SaveReviewContext = createContext<{
    reviewState: ReviewState;
    reviewDispatch: React.Dispatch<Action>;
}>({
    reviewState: initialSaveReviewState,
    reviewDispatch: () => null,
});

export const SaveAuthorContext = createContext<{
    authState: AuthorState;
    authDispatch: React.Dispatch<Action>;
}>({
    authState: initialSaveAuthorState,
    authDispatch: () => null,
});

export const SaveBookContext = createContext<{
    bookState: BookState;
    bookDispatch: React.Dispatch<Action>;
}>({
    bookState: initialSaveBookState,
    bookDispatch: () => null,
});

type Action =
    | { type: "ADD_AUTHOR"; payload: Author }
    | { type: "ADD_BOOK"; payload: Book }
    | { type: "ADD_READ"; payload: Read }
    | { type: "ADD_REVIEW"; payload: Review }
    | { type: "REMOVE_READ"; payload: string }
    | { type: "REMOVE_AUTHOR"; payload: string }
    | { type: "REMOVE_BOOK"; payload: string };

const readReduces = (state: ReadState, action: Action) => {
    switch (action.type) {
        case "ADD_READ":
            return {
                reads: [...state.reads, action.payload],
            };
        case "REMOVE_READ":
            return {
                ...state.reads,
                reads: state.reads.filter((l) => l.id !== action.payload),
            };
        default:
            return state;
    }
};

const authorReduces = (state: AuthorState, action: Action) => {
    switch (action.type) {
        case "ADD_AUTHOR":
            return {
                authors: [...state.authors, action.payload],
            };
        case "REMOVE_AUTHOR":
            return {
                ...state.authors,
                authors: state.authors.filter((l) => l.id !== action.payload),
            };
        default:
            return state;
    }
};
const bookReduces = (state: BookState, action: Action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return {
                books: [...state.books, action.payload],
            };
        case "REMOVE_BOOK":
            return {
                ...state.books,
                books: state.books.filter((l) => l.id !== action.payload),
            };
        default:
            return state;
    }
};

const reviewReduces = (state: ReviewState, action: Action) => {
    switch (action.type) {
        case "ADD_REVIEW":
            return {
                reviews: [...state.reviews, action.payload],
            };
        default:
            return state;
    }
};

type ContextProviderProp = {
    children: React.ReactNode;
};
function ContextProvider({ children }: ContextProviderProp) {
    // här kan vi använda useReducer eller useState

    const [authState, authDispatch] = useReducer(
        authorReduces,
        initialSaveAuthorState
    );
    const [bookState, bookDispatch] = useReducer(
        bookReduces,
        initialSaveBookState
    );
    const [readState, readDispatch] = useReducer(
        readReduces,
        initialSaveReadState
    );
    const [reviewState, reviewDispatch] = useReducer(
        reviewReduces,
        initialSaveReviewState
    );

    return (
        <SaveReadContext.Provider value={{ readState, readDispatch }}>
            <SaveReviewContext.Provider value={{ reviewState, reviewDispatch }}>
                <SaveBookContext.Provider value={{ bookState, bookDispatch }}>
                    <SaveAuthorContext.Provider value={{ authState, authDispatch }}>
                        {children}
                    </SaveAuthorContext.Provider>
                </SaveBookContext.Provider>
            </SaveReviewContext.Provider>
        </SaveReadContext.Provider>
    );
}
export default ContextProvider;
