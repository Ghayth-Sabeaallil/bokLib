import { createContext, useReducer } from "react";


type Author = {
    id: string;
};


// GlobalState
type AuthorState = {
    authors: Author[];
};


const initialSaveAuthorState: AuthorState = {
    authors: [
    ],
};


export const SaveAuthorContext = createContext<{
    state: AuthorState;
    dispatch: React.Dispatch<Action>;
}>({
    state: initialSaveAuthorState,
    dispatch: () => null,
});


type Action =
    | { type: "ADD"; payload: Author }
    | { type: "REMOVE"; payload: string };


const reducer = (state: AuthorState, action: Action) => {
    switch (action.type) {
        case "ADD":
            return {
                authors: [...state.authors, action.payload],
            };
        case "REMOVE":
            return state;  // detta ska ändras! Remove fungerar inte
        default:
            return state;
    }
};


type SaveAuthContextProvider = {
    children: React.ReactNode;
};
function SaveAuthContextProvider({ children }: SaveAuthContextProvider) {
    // här kan vi använda useReducer eller useState


    const [state, dispatch] = useReducer(reducer, initialSaveAuthorState);


    return (
        <SaveAuthorContext.Provider value={{ state, dispatch }}>
            {children}
        </SaveAuthorContext.Provider>
    );
}


export default SaveAuthContextProvider;
