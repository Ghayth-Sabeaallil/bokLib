import { createContext, useReducer } from "react";

//GlobalState
export type GlobalState = {
    authors: Author[];
    books: Book[];
    reads: Read[];
    reviews: Review[];
};

//initial
const initialSaveState: GlobalState = {
    authors: [],
    books: [],
    reads: [],
    reviews: [],
};

export const SaveContext = createContext<{
    state: GlobalState;
    dispatch: React.Dispatch<Action>;
}>({
    state: initialSaveState,
    dispatch: () => null,
});


const reduces = (state: GlobalState, action: Action) => {
    switch (action.type) {
        case "ADD_BOOK": {
            return {
                ...state, books: [...state.books, action.payload]
            };
        }
        case "ADD_READ": {
            return {
                ...state, reads: [...state.reads, action.payload]
            };
        }
        case "ADD_AUTHOR":
            return {
                ...state, authors: [...state.authors, action.payload]
            };
        case "ADD_REVIEW": {
            return {
                ...state, reviews: [...state.reviews, action.payload]
            };
        }
        case "REMOVE_BOOK":
            return {
                ...state,
                books: state.books.filter((l) => l.id !== action.payload),
            };
        case "REMOVE_AUTHOR":
            return {
                ...state,
                authors: state.authors.filter((l) => l.id !== action.payload),
            };
        case "REMOVE_READ":
            return {
                ...state,
                reads: state.reads.filter((l) => l.id !== action.payload),
                reviews: state.reviews.filter((l) => l.id !== action.payload),
            };
        default:
            return state;
    }
};

type ContextProviderProp = {
    children: React.ReactNode;
};
function ContextDataProvider({ children }: ContextProviderProp) {
    const [state, dispatch] = useReducer(reduces, initialSaveState);

    return (
        <SaveContext.Provider value={{ state, dispatch }}>
            {children}
        </SaveContext.Provider>
    )
};
export default ContextDataProvider;
