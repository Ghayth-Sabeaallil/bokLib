import { useContext, useState } from "react";
import "../../Styles/Components/MyLibCom.scss"
import { SaveAuthorContext } from "../../Data/SaveAuthContextProvider/SaveAuthContextProvider";
import SelectDropDown from "../SelectDropDown/SelectDropDown";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Card from "../Card/Card";


const myLibCom = () => {
    let favourite = ["favourite books", "favourite authors", "readen books"];
    const [fav, setFav] = useState<string>("favourite books");
    const { state, dispatch } = useContext(SaveAuthorContext);

    const handleRemove: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        dispatch({ type: "REMOVE", payload: e.currentTarget.id });
    };
    const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setFav(event.target.value);
    };


    return (
        <>

            <main className="container">
                <fieldset className="main-box">
                    <legend className="main-text"><SelectDropDown handleSelectChange={handleSelectChange} items={favourite} value={fav} /></legend>
                    {state?.authors.map((data) => (
                        <NavLink key={uuidv4()} to={`/mylib/${data.id}`}><Card title={data.name} authors={data.id} year={data.year} img_id={data.img} /><button id={data.id} onClick={handleRemove}> Remove</button></NavLink>
                    ))}


                </fieldset>
            </main>
        </>
    )
};
export default myLibCom;