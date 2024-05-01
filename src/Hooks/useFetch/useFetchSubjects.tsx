import { useEffect, useState } from "react";
import { Subject } from "../../Types/subject";


const useFetchSubjects = (url: string) => {
    const [subject, setSubject] = useState<Subject | null>(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setSubject(data));
    }, [url]);

    return [subject];
};
export default useFetchSubjects;