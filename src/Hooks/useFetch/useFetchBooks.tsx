import { useEffect, useState } from "react";
import { Works } from "../../Types/subject";

type useFetchBooksProps = {
    url: string,
}

export const useFetchBooks = ({ url }: useFetchBooksProps): Works[] | null => {
    const [books, setBooks] = useState<Works[] | null>(null);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();

                if (!getData) {
                    setBooks(data);
                }
            }
            catch (error) {
                console.log("error", error);
            }
        }
        let getData = false;
        fetchApi();

        return () => {
            getData = true;

        }
    }, [url])
    return books;

}