import axios from "axios";

const instance = axios.create({
    baseURL: 'https://637bdcd96f4024eac219cbef.mockapi.io/'
})

export const productAPI = {
    getCatalog() {
        return instance.get('items-shop')
            .then(response => response.data)
    },

    getSortCatalog(sortUrl:string) {
        return instance.get(`items-shop/?sortBy=price&order=${sortUrl}`)
            .then(response => {
                console.log(response)
                return (response.data)

            })
    }
}
