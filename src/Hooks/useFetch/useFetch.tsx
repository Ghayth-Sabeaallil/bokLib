import { useEffect, useState } from "react";
import { Authors, BookDetails, BookRate, Search, Subject } from "../../Types/dataType";

type useFetchProps = {
    id?: string,
    select?: string,
    search?: string,
    subject?: string,
    type?: string
}
const useFetchSubjects = ({ id, select, search, subject, type }: useFetchProps) => {
    const [fetchData, setFetch] = useState<Subject | Authors | BookDetails | BookRate | Search | null>();

    useEffect(() => {
        switch (type) {
            case "FETCH_SUBJECT": {
                fetch(`https://openlibrary.org/subjects/${subject}.json`)
                    .then((res) => res.json())
                    .then((data) => setFetch(data));
            }
            case "FETCH_AUTHOR": {
                fetch(`https://openlibrary.org${id}.json`)
                    .then((res) => res.json())
                    .then((data) => setFetch(data));
            }
            case "FETCH_BOOK": {
                fetch(`https://openlibrary.org/works/${id}.json`)
                    .then((res) => res.json())
                    .then((data) => setFetch(data));
            }
            case "FETCH_RATE": {
                fetch(`https://openlibrary.org/works/${id}/ratings.json`)
                    .then((res) => res.json())
                    .then((data) => setFetch(data));
            }
            case "FETCH_SEARCH": {
                fetch(`https://openlibrary.org/search.json?${select}=${search}`)
                    .then((res) => res.json())
                    .then((data) => setFetch(data));
            }
            default:
                throw new Error("No Fetch");
        }



    }, [type]);

    return [fetchData];
};
export default useFetchSubjects;
