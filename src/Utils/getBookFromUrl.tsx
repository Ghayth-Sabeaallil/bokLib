const getBookFromUrl = (url: string) => {
    let str: string[] = url.split("/");
    let resutl: string = str[str.length - 1];
    return [resutl];
};
export default getBookFromUrl;