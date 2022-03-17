import axios from 'axios'

let api = axios.create(
    {
        headers: {
            'Client-ID': 'cm8h4hrw29d2idus9e4uq58sij6cvq',
            'Authorization' : 'Bearer e7st5m5psfuxfn1m6p1nchn7olc2b4'
        }
    }
)

export default api