// import { useEffect, useState } from "react";
// import { BookDetails } from "../../Types/dataType";


// const useFetchBook = (id: string) => {
//     const [bookInfo, setBookInfo] = useState<BookDetails | null>(null);

//     useEffect(() => {
//         fetch(`https://openlibrary.org/works/${id}.json`)
//             .then((res) => res.json())
//             .then((data) => setBookInfo(data));
//     }, [id]);

//     return [bookInfo];
// };
// export default useFetchBook;