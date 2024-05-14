import { useContext, useState } from "react";
import "../../Styles/Components/MyLibCom.scss"
import SelectDropDown from "../SelectDropDown/SelectDropDown";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Card from "../Card/Card";
import medelRates from "../../Utils/medelRates";
import medelPages from "../../Utils/medelPages";
import { SaveContext } from "../../Data/ContextDataProvider";


const myLibCom = () => {
    const favourite = ["favourite books", "favourite authors", "readen books"];
    const [fav, setFav] = useState<string>("favourite books");
    const { state, dispatch } = useContext(SaveContext);


    const handleRemoveAuth: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        dispatch({ type: "REMOVE_AUTHOR", payload: e.currentTarget.id });
    };
    const handleRemoveRead: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        dispatch({ type: "REMOVE_READ", payload: e.currentTarget.id });
    };
    const handleRemoveBook: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        dispatch({ type: "REMOVE_BOOK", payload: e.currentTarget.id });
    };
    const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setFav(event.target.value);
    };
    const mp = medelPages(state);
    const mb = medelRates(state);

    return (
        <>
            <main className="container">
                <h1>Reviwed Books: {state.reviews.length}</h1>
                <h1>Medelbetyg : {isNaN(parseInt(mb)) ? 0 : mb}</h1>
                <h1>Medelantal Sidor : {isNaN(mp) ? 0 : mp}</h1>

                <fieldset className="main-box">

                    <legend className="main-text"><SelectDropDown handleSelectChange={handleSelectChange} items={favourite} value={fav} /></legend>
                    {
                        fav == "favourite authors" ? state?.authors.map((data) => (<div key={uuidv4()} className="author-box" ><NavLink to={`/author/${data.id}`}><Card title={data.name} authors={data.id} year={data.year} img_id={data.img} /></NavLink><button id={data.id} onClick={handleRemoveAuth}> <img className="remove-icon" src="/remove.png" alt="remove" /></button></div>
                        )) : null
                    }

                    {fav == "favourite books" ? state?.books.map((data) => (<div key={uuidv4()} className="author-box" ><NavLink to={`/book/${data.id}`}><Card title={data.title} authors={data.author} year={data.id} img_id={data.img} /></NavLink><button id={data.id} onClick={handleRemoveBook}> <img className="remove-icon" src="/remove.png" alt="remove" /></button></div>
                    )) : null}
                    {
                        fav == "readen books" ? state?.reads.map((data) => (<div key={uuidv4()} className="author-box" ><NavLink to={`/book/${data.id}`}><Card title={data.title} authors={data.author} year={data.id} img_id={data.img} /></NavLink><button id={data.id} onClick={handleRemoveRead}> <img className="remove-icon" src="/remove.png" alt="remove" /></button></div>
                        )) : null
                    }

                </fieldset>

            </main>
        </>
    )
};
export default myLibCom;