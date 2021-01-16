import { useState,forwardRef, useImperativeHandle } from "react"
import "./sideBar.css"
const SideBar = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({open}));
    const [sideBarState, setSideBarState] = useState('side-bar-close')

    const open = () =>{
        setSideBarState("side-bar-open")
        console.log("this was called")
    }

    const close = () => {
        setSideBarState("side-bar-close")
    }
    return(
        <div className={`side-bar ${sideBarState}`}>
            <div className="side-bar-header">
                <div className="logo"></div>
                <button className="close" onClick={ () => {close()}}>
                    <div className="bar bar-1"></div>
                    <div className="bar bar-2"></div>
                </button>
            </div>
            <div className="side-bar-main-content">
                <div className="company-url">avios.com</div>
                <div className="side-bar-content">
                    <ul className="side-bar-list">
                        <li className="side-bar-list-item">Departments</li>
                        <li className="side-bar-list-item">Local Shops</li>
                    </ul>
                </div>
            </div>
        </div>
    )
})

export default SideBar