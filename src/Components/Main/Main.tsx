import { useState } from "react";
import useFetchSubjects from "../../Hooks/useFetch/useFetchSubjects";
import "../../Styles/Components/Main.scss"
import Card from "../Card/Card";
import SelectDropDown from "../SelectDropDown/SelectDropDown";
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from "react-router-dom";
import { getIdFromUrl } from "../../Utils/getIdFromUrl";

const Main = () => {
    //Select Options
    const subjects = ["horror", "business", "art", "design", "history", "humor"];

    //React Hooks
    const [subject, setSubject] = useState<string>("horror");

    //Custom hooks
    const [data] = useFetchSubjects({ subject });

    //Save the option
    const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setSubject(event.target.value);
    };

    return (
        <>
            <main className="container">
                <fieldset className="main-box">
                    <legend className="main-text"><SelectDropDown handleSelectChange={handleSelectChange} items={subjects} value={subject} /></legend>
                    {data?.works.map((data) => (
                        <NavLink key={uuidv4()} to={`/book/${getIdFromUrl(data.key).toString()}`}><Card title={data.title} authors={data.authors[0].name} year={data.first_publish_year} img_id={data.cover_id} /></NavLink>
                    ))}
                </fieldset>
            </main>
        </>
    )
};
export default Main;