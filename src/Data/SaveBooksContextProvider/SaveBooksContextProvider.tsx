import { createContext, useReducer } from "react";


type Book = {
    title: string;
    img: string;
    id: string;
};


// GlobalState
type BookState = {
    books: Book[];
};


const initialSaveBooksState: BookState = {
    books: [
    ],
};


export const SaveBooksContext = createContext<{
    state: BookState;
    dispatch: React.Dispatch<Action>;
}>({
    state: initialSaveBooksState,
    dispatch: () => null,
});


type Action =
    | { type: "ADD"; payload: Book }
    | { type: "REMOVE"; payload: string };


const reducer = (state: BookState, action: Action) => {
    switch (action.type) {
        case "ADD":
            return {
                books: [...state.books, action.payload],
            };
        case "REMOVE":
            return state;  // detta ska ändras! Remove fungerar inte
        default:
            return state;
    }
};


type SaveBooksContextProvider = {
    children: React.ReactNode;
};
function SaveBooksContextProvider({ children }: SaveBooksContextProvider) {
    // här kan vi använda useReducer eller useState


    const [state, dispatch] = useReducer(reducer, initialSaveBooksState);


    return (
        <SaveBooksContext.Provider value={{ state, dispatch }}>
            {children}
        </SaveBooksContext.Provider>
    );
}


export default SaveBooksContextProvider;
