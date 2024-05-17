// import { useEffect, useState } from "react";
// import { Search } from "../../Types/dataType";

// //Search Props
// type useFetchSearchProps = {
//     select: string,
//     search: string
// }

// const useFetchSearch = ({ search, select }: useFetchSearchProps) => {
//     const [searchData, setSearchData] = useState<Search | null>(null);

//     useEffect(() => {
//         fetch(`https://openlibrary.org/search.json?${select}=${search}`)
//             .then((res) => res.json())
//             .then((data) => setSearchData(data));
//     }, [search, select]);

//     return [searchData];
// };
// export default useFetchSearch;