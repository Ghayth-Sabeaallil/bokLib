import { useEffect, useState } from "react";
import { Search } from "../../Types/dataType";

type useFetchSearchProps = {
    select: string,
    search: string
}

const useFetchSearch = ({ search, select }: useFetchSearchProps) => {
    const [subject, setSubject] = useState<Search | null>(null);

    useEffect(() => {
        fetch(`https://openlibrary.org/search.json?${select}=${search}`)
            .then((res) => res.json())
            .then((data) => setSubject(data));
    }, [search, select]);

    return [subject];
};
export default useFetchSearch;