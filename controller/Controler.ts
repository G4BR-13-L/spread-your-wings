




export function getData(key: string) {
    return JSON.parse(localStorage.getItem(key)!);
}
export function saveData(data_ref: string, data:any) {
    return localStorage.setItem(data_ref, JSON.stringify(data));

}