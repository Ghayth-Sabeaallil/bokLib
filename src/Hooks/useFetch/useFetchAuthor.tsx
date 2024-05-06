import { useEffect, useState } from "react";
import { Authors } from "../../Types/dataType";


const useFetchAuthor = (id: string) => {
    const [authorInfo, setAuthorInfo] = useState<Authors | null>(null);

    useEffect(() => {
        console.log(id)
        fetch(`https://openlibrary.org${id}.json`)
            .then((res) => res.json())
            .then((data) => setAuthorInfo(data));
    }, [id]);

    return [authorInfo];
};
export default useFetchAuthor;