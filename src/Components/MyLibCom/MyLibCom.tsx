import { useContext } from "react";
import { SaveAuthorContext } from "../../Data/SaveAuthContextProvider/SaveAuthContextProvider";


const myLibCom = () => {
    const { state, dispatch } = useContext(SaveAuthorContext);

    const handleRemove: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        dispatch({ type: "REMOVE", payload: e.currentTarget.id });
    };

    return (
        <>
            <ul>
                {state.authors.map((m) => {
                    return (
                        <> <li>
                            Name: {m.id}
                        </li>
                            <button id={m.id} onClick={handleRemove}>Remove</button></>
                    );
                })}
            </ul>

        </>
    )
};
export default myLibCom;