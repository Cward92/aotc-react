import Axios from 'axios';

export default function AxiosHelper({ method, route, fun, data = {}, token = '' }) {
    const API_URL = 'http://localhost:8000';
    const headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
    };
    return Axios(
        {
            method,
            headers,
            url: API_URL + route,
            data
        }
    ).then(res => {
        if (route === '/register') {
            fun(res.data.data.token);
            // Save data to sessionStorage
            sessionStorage.setItem('token', res.data.data.token);
        }
        if (route === '/v1/oauth/token') {
            console.log('working');
            fun(res.data.access_token);
            // Save data to sessionStorage
            sessionStorage.setItem('token', res.data.access_token);
        }
        if (route === '/helloUser') {
            alert('Hello User :)');
        }
    }).catch(e => console.log(e));
}
