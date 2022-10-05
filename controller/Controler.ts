/**
 * Inicialmente tentei solucionar o problema com useContext,
 * mas não funcionou porque mesmo com contexto não é 
 * possievl persistir os dados da página. Como solução 
 * final adotei o localStorage para armazernar o ultimo 
 * post ou ultimo usuário acessado. Assim a informação 
 * não se perde na página.
 *
 */
export function getData(key: string) {
    return JSON.parse(localStorage.getItem(key)!);
}
export function saveData(data_ref: string, data:any) {
    return localStorage.setItem(data_ref, JSON.stringify(data));

}