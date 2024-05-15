export const getIdFromUrl = (url: string) => {
    const str: string[] = url.split("/");
    const resutl: string = str[str.length - 1];
    return resutl;
};