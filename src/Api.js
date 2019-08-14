import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/'
})


export const loadGenres = () => api.get('names')
export const loadSeriesByGenres = (name) => api.get('bandas?name='+name)

const apis = {
    loadGenres,
    loadSeriesByGenres
}

export default apis