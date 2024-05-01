import { useState } from "react";
import useFetchSubjects from "../../Hooks/useFetch/useFetchSubjects";
import "../../Styles/Components/Main.scss"
import Card from "../Card/Card";

const Main = () => {
    const [subject, setSubject] = useState<string>("horror");
    const [data] = useFetchSubjects(`https://openlibrary.org/subjects/${subject}.json`);
    const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setSubject(event.target.value);
    };

    return (
        <>
            <main className="container">
                <fieldset className="main-box">
                    <legend className="main-text"> <select value={subject} onChange={handleSelectChange}>
                        <option value="business">Business</option>
                        <option value="horror">Horror</option>
                        <option value="art">Art</option>
                        <option value="design">Design</option>
                        <option value="history">History</option>
                        <option value="humor">Humor</option>
                    </select></legend>

                    {data?.works.map((data) => (
                        <Card key={data.key} title={data.title} authors={data.authors[0].name} year={data.first_publish_year} img_id={data.cover_id} />
                    ))}
                </fieldset>
            </main>


        </>
    )
};
export default Main;