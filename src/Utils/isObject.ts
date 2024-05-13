function isObject(variable: any): variable is object {
    return typeof variable === 'object' && variable !== null;
}
export default isObject;