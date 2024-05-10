import { useContext, useState } from "react";
import "../../Styles/Components/MyLibCom.scss"
import { SaveAuthorContext, SaveBookContext, SaveReadContext } from "../../Data/ContextProvider";
import SelectDropDown from "../SelectDropDown/SelectDropDown";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Card from "../Card/Card";


const myLibCom = () => {
    let favourite = ["favourite books", "favourite authors", "readen books"];
    const [fav, setFav] = useState<string>("favourite books");
    const { authState, authDispatch } = useContext(SaveAuthorContext);
    const { bookState, bookDispatch } = useContext(SaveBookContext);
    const { readState, readDispatch } = useContext(SaveReadContext);

    const handleRemoveAuth: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        authDispatch({ type: "REMOVE_AUTHOR", payload: e.currentTarget.id });
    };
    const handleRemoveRead: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        readDispatch({ type: "REMOVE_READ", payload: e.currentTarget.id });
    };
    const handleRemoveBook: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        bookDispatch({ type: "REMOVE_BOOK", payload: e.currentTarget.id });
    };
    const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setFav(event.target.value);
    };


    return (
        <>
            <main className="container">
                <fieldset className="main-box">
                    <legend className="main-text"><SelectDropDown handleSelectChange={handleSelectChange} items={favourite} value={fav} /></legend>
                    {
                        fav == "favourite authors" ? authState?.authors.map((data) => (<div key={uuidv4()} className="author-box" ><NavLink to={`/author/${data.id}`}><Card title={data.name} authors={data.id} year={data.year} img_id={data.img} /></NavLink><button id={data.id} onClick={handleRemoveAuth}> <img className="remove-icon" src="/remove.png" alt="remove" /></button></div>
                        )) : null
                    }

                    {fav == "favourite books" ? bookState?.books.map((data) => (<div key={uuidv4()} className="author-box" ><NavLink to={`/book/${data.id}`}><Card title={data.title} authors={data.author} year={data.id} img_id={data.img} /></NavLink><button id={data.id} onClick={handleRemoveBook}> <img className="remove-icon" src="/remove.png" alt="remove" /></button></div>
                    )) : null}
                    {
                        fav == "readen books" ? readState?.reads.map((data) => (<div key={uuidv4()} className="author-box" ><NavLink to={`/book/${data.id}`}><Card title={data.title} authors={data.author} year={data.id} img_id={data.img} /></NavLink><button id={data.id} onClick={handleRemoveRead}> <img className="remove-icon" src="/remove.png" alt="remove" /></button></div>
                        )) : null
                    }

                </fieldset>
            </main>
        </>
    )
};
export default myLibCom;