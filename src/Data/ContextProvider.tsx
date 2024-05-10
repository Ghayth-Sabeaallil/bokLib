import { createContext, useReducer } from "react";


type Author = {
    id: string;
    name: string;
    img: number;
    year: string
};
type Book = {
    title: string;
    img: number;
    id: string;
    author: string;
};


// GlobalState
type AuthorState = {
    authors: Author[];
};
type BookState = {
    books: Book[];
};


const initialSaveAuthorState: AuthorState = {
    authors: [
    ],
};

const initialSaveBookState: BookState = {
    books: [
    ],
};


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
    | { type: "REMOVE_AUTHOR"; payload: string }
    | { type: "REMOVE_BOOK"; payload: string };


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


type ContextProviderProp = {
    children: React.ReactNode;
};
function ContextProvider({ children }: ContextProviderProp) {
    // här kan vi använda useReducer eller useState


    const [authState, authDispatch] = useReducer(authorReduces, initialSaveAuthorState);
    const [bookState, bookDispatch] = useReducer(bookReduces, initialSaveBookState);




    return (
        <SaveBookContext.Provider value={{ bookState, bookDispatch }}>
            <SaveAuthorContext.Provider value={{ authState, authDispatch }}>
                {children}
            </SaveAuthorContext.Provider>
        </SaveBookContext.Provider>

    );
}


export default ContextProvider;
