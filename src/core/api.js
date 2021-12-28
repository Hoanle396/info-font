const axios = require('axios');
const APIUrl = 'http://the1s.tk/api/';
export default {
    getHeaders() {
        let token = window.localStorage.getItem('token');
        if (token == null) {
            return {'Access-Control-Allow-Origin': '*'};
        }
        return { Authorization: 'Bearer ' + token ,'Access-Control-Allow-Origin': '*'}
    },
    get(url) {
        return axios.get(APIUrl + url, { headers: this.getHeaders() })
    },
    post(url, data) {
        return axios.post(APIUrl + url, data, { headers: this.getHeaders() })
    }
}