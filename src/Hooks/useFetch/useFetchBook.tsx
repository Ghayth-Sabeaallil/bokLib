import { useEffect, useState } from "react";
import { Subject } from "../../Types/dataType";

type useFetchBookProps = {
    id: string,
}
const useFetchBook = ({ id }: useFetchBookProps) => {
    const [bookInfo, setBookInfo] = useState<Subject | null>(null);

    useEffect(() => {
        fetch(`https://openlibrary.org/works/${id}.json`)
            .then((res) => res.json())
            .then((data) => setBookInfo(data));
    }, [id]);

    return [bookInfo];
};
export default useFetchBook;