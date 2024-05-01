import { useEffect, useState } from "react";
import { Subject } from "../../Types/dataType";

type useFetchSubjectsProps = {
    subjects: string,
}
const useFetchSubjects = ({ subjects }: useFetchSubjectsProps) => {
    const [subject, setSubject] = useState<Subject | null>(null);

    useEffect(() => {
        fetch(`https://openlibrary.org/subjects/${subjects}.json`)
            .then((res) => res.json())
            .then((data) => setSubject(data));
    }, [subjects]);

    return [subject];
};
export default useFetchSubjects;