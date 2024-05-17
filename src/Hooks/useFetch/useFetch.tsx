import { useEffect, useState } from "react";
import { AuthorDetails, Authors, BookDetails, BookRate, Search, Subject } from "../../Types/dataType";

type useFetchProps = {
    id?: string,
    select?: string,
    search?: string,
    subject?: string,
}

type Action =
    | { type: "FETCH_SUBJECT", payload: useFetchProps }
    | { type: "FETCH_AUTHOR", payload: useFetchProps }
    | { type: "FETCH_BOOK", payload: useFetchProps }
    | { type: "FETCH_RATE", payload: useFetchProps }
    | { type: "FETCH_SEARCH", payload: useFetchProps }

const useFetch = (action: Action) => {
    const [fetchData, setFetch] = useState<Subject | Authors | BookDetails | BookRate | Search | AuthorDetails | null>(null);

    useEffect(() => {
        switch (action.type) {
            case "FETCH_SUBJECT": {
                fetch(`https://openlibrary.org/subjects/${action.payload.subject}.json`)
                    .then((res) => res.json())
                    .then((data) => setFetch(data));
                break;
            }
            case "FETCH_AUTHOR": {
                fetch(`https://openlibrary.org${action.payload.id}.json`)
                    .then((res) => res.json())
                    .then((data) => setFetch(data));
                break;
            }
            case "FETCH_BOOK": {
                fetch(`https://openlibrary.org/works/${action.payload.id}.json`)
                    .then((res) => res.json())
                    .then((data) => setFetch(data));
                break;
            }
            case "FETCH_RATE": {
                fetch(`https://openlibrary.org/works/${action.payload.id}/ratings.json`)
                    .then((res) => res.json())
                    .then((data) => setFetch(data));
                break;
            }
            case "FETCH_SEARCH": {
                if (action.payload.search != "") {
                    fetch(`https://openlibrary.org/search.json?${action.payload.select}=${action.payload.search}`)
                        .then((res) => res.json())
                        .then((data) => setFetch(data));
                }
                break;

            }
            default:
        }



    }, [action.type, action.payload.search, action.payload.select]);

    return [fetchData];
};
export default useFetch;
