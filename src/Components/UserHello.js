import React, { useState, useContext } from 'react'
import AxiosHelper from './Helper/AxiosHelper';
import AppContext from './Helper/AppContext';

export default function UserHello() {

    const { token } = useContext(AppContext);


    AxiosHelper({ method: 'get', route: '/helloUser', token });

    return (
        <div>
            Hello
        </div>
    )
}
