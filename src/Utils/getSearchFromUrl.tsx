const getSearchFromUrl = (url: string) => {
    let params = url.split("?")[1].split("&"),
        data: any;
    for (let i = 0, l = params.length; i < l; i++) {
        data = params[i].split("=");
    }
    console.log(data[0])
    console.log(data[1])

    return [data[0], data[1]];
};
export default getSearchFromUrl;