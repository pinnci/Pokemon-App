export const search = (searchedName) =>{
    return{
        type : 'SEARCH',
        payload : searchedName
    }
}