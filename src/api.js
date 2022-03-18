import axios from 'axios'
import config from './config'

let api = axios.create({
    headers: {
        'Client-ID': config.CLIENT_ID,
        'Authorization': `Bearer ${config.APP_ACCESS_TOKEN}`
    }
})

export default api
