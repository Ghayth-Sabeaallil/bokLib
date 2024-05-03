const getDataFromUrl = (url: string) => {
    let params = url.split("?")[1].split("&"),
        data: any;
    for (let i = 0, l = params.length; i < l; i++) {
        data = params[i].split("=");
    }
    return [data[0], data[1]];
};
export default getDataFromUrl;