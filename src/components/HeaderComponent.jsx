import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <ul className='list1'>
                    <img src="/images/coffee-logo.svg" alt="" />
                    <Link to='/'>
                      <li>Coffee house</li>
                    </Link>
                </ul>
                    <ul className='list'>
                    {/* <BrowserRouter> */}
                            <Link to='/about'>
                            <li>Our coffee</li>
                            </Link>
                    {/* </BrowserRouter> */}
                    <li>For your pleasure</li>
                    </ul>
            </header>
        </div>
    );
}

export default HeaderComponent;
