// import { useEffect, useState } from "react";
// import { BookRate } from "../../Types/dataType";


// const useFetchRate = (id: string) => {
//     const [rate, setRate] = useState<BookRate | null>(null);

//     useEffect(() => {
//         fetch(`https://openlibrary.org/works/${id}/ratings.json`)
//             .then((res) => res.json())
//             .then((data) => setRate(data));
//     }, [id]);

//     return [rate];
// };
// export default useFetchRate;