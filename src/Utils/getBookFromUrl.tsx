const getBookFromUrl = (url: string) => {
    let result = url.split("/");
    return result[result.length - 1];
};
export default getBookFromUrl;