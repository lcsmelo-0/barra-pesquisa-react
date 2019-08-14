import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/'
})


export const loadName = () => api.get('names')
export const loadBandsByName = (name) => api.get('bandas?name=' + name)

const apis = {
    loadName,
    loadBandsByName
}

export default apis