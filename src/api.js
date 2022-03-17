import axios from 'axios'

let api = axios.create(
    {
        headers: {
            'Client-ID': 'cm8h4hrw29d2idus9e4uq58sij6cvq',
            'Authorization' : 'Bearer -secret-'
        }
    }
)

export default api
