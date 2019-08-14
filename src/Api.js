import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/'
})


export const loadGenres = () => api.get('genres')
export const loadSeriesByGenres = (genre) => api.get('bandas?genre='+genre)

const apis = {
    loadGenres,
    loadSeriesByGenres
}

export default apis