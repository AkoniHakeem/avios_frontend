//import react from 'react';
import './landing.css';
import MainContent from '../main-content/main-content'
import SideBar from '../sideBar/sideBar';
import {useRef} from 'react'
import AuthNav from '../authNav/authNav';
import Cart from '../cart/cart';
import React from "react";
import Seller from '../seller/seller';

const Page = (props) => {
        const sideBarRef = useRef();
        const openSideBar = (e) => {
            sideBarRef.current.open();
        }
    return(
        <div className="container">
            <nav className="nav-bar">
                <button className="menu-bars"  onClick={openSideBar}>
                    <div className="menu-bar"></div>
                    <div className="menu-bar"></div>
                    <div className="menu-bar"></div>
                </button>
                <div>
                    <h3 className="company-name">avios</h3>
                </div>
                <div className="nav-actions">
                    <Seller size="mini"/>
                    <AuthNav/>
                    <Cart size="mini"/>
                </div>

                <div className={`side-bar-container`}>
                    <SideBar ref={sideBarRef}/>
                </div>
            </nav>
            <div className="banner"></div>
            <div className="main-content-wrapper"><MainContent /></div>
            <div className="footer">
                <div><p>avios</p></div>
            </div>
        </div>
    )
} 

export default Page;