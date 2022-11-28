import axios from "axios";

const instance = axios.create({
    baseURL: 'https://637bdcd96f4024eac219cbef.mockapi.io/'
})

export const productAPI = {
    getCatalog(page: number, sort:string) {
        return instance.get(`items-shop?page=${page}&limit=4&sortBy=price&order=${sort}`)
            .then(response => response.data)
    }
}
