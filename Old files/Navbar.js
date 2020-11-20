import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function NavBar() {
    const [pages, setPages] = useState(['Explore', 'Signup', 'Login'])
    const [currentPage, setCurrentPage] = useState(0);

    return(
        <nav class="navbar navbar-expand-lg navbar-dark brand fixed-top">
             <div class="container">
                 <a class="navbar-brand" href="/">Kickstarter</a>
                 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                     <span class="navbar-toggler-icon"></span>
                 </button>
                 <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        {
                            pages.map((item, index) => {
                                return (
                                    <li class="nav-item">
                                        <Link
                                            to={item}
                                        >{item}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                 </div>
             </div>
         </nav>
    )
}

export default NavBar;