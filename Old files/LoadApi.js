import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function LoadAPI() {
    const [JSONData, setJSONData] = useState(null)
    const [UserName, setUserName] = useState('');
    const API_URL = 'http://localhost:8000';
    const route = '/'
    useEffect(() => {
        axios.get(API_URL + route)
            .then(res => setJSONData(res.data))
            .catch(e => console.log(e))
    }, [])
    console.log(JSONData);
    const API_Post = () => {
        const data = { name: "asdfa", email: "highlow@yahoo.com", password: "avocado" };
        axios.post(API_URL + '/register', data)
            .then(res => setUserName(res.data.data.name))
            .catch(e => console.log(e))
    }
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    {UserName ?
                        UserName
                        : "loading"}
                </p>
                <button onClick={API_Post} className="btn btn-primary btn-large text-white" >click</button>
            </header>
        </div>
    )
}