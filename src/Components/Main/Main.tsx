import { useState } from "react";
import useFetchSubjects from "../../Hooks/useFetch/useFetchSubjects";
import "../../Styles/Components/Main.scss"
import Card from "../Card/Card";
import SelectDropDown from "../SelectDropDown/SelectDropDown";

const Main = () => {
    const [subjects, setSubject] = useState<string>("horror");
    const [data] = useFetchSubjects({ subjects });
    const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setSubject(event.target.value);
    };

    return (
        <>
            <main className="container">
                <fieldset className="main-box">
                    <legend className="main-text"><SelectDropDown handleSelectChange={handleSelectChange} subject={subjects} /></legend>

                    {data?.works.map((data) => (
                        <Card key={data.key} title={data.title} authors={data.authors[0].name} year={data.first_publish_year} img_id={data.cover_id} />
                    ))}
                </fieldset>
            </main>


        </>
    )
};
export default Main;