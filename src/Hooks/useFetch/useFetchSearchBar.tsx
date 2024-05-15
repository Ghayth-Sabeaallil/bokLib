import { useEffect, useState } from "react";
import { Search } from "../../Types/dataType";

//Search Bar Props
type useFetchSearchProps = {
    select: string,
    search: string
}

const useFetchSearchBar = ({ search, select }: useFetchSearchProps) => {
    const [subject, setSubject] = useState<Search | null>(null);

    useEffect(() => {
        if (search != "") {
            fetch(`https://openlibrary.org/search.json?${select}=${search}`)
                .then((res) => res.json())
                .then((data) => setSubject(data));
        }
    }, [search, select]);

    return [subject];
};
export default useFetchSearchBar;