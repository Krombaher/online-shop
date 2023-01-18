import axios from "axios";

const instance = axios.create({
    baseURL: 'https://63bee7d3f5cfc0949b647da0.mockapi.io/'

})

export const productAPI = {
    getCatalog(currentPage: number, sortValue: string, searchValue: string) {
        const search = searchValue ? `&name=${searchValue}` : '';
        const sort = sortValue ? `&sortBy=price&order=${sortValue}` : '';

        return instance.get(`shopItems?page=${currentPage}&limit=4${sort}${search}`)
            .then(response => {return response.data})
    }
}
