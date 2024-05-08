import { useContext } from "react";
import { SaveAuthorContext } from "../../Data/SaveAuthContextProvider/SaveAuthContextProvider";


const myLibCom = () => {
    const { state } = useContext(SaveAuthorContext);
    console.log(state)

    return (
        <>
            <h1>hello</h1>
        </>
    )
};
export default myLibCom;