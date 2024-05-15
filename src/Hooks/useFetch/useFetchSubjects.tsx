import { useEffect, useState } from "react";
import { Subject } from "../../Types/dataType";

//Subject Props
type useFetchSubjectsProps = {
    subject: string,
}
const useFetchSubjects = ({ subject }: useFetchSubjectsProps) => {
    const [subjects, setSubject] = useState<Subject | null>(null);

    useEffect(() => {
        fetch(`https://openlibrary.org/subjects/${subject}.json`)
            .then((res) => res.json())
            .then((data) => setSubject(data));
    }, [subject]);

    return [subjects];
};
export default useFetchSubjects;