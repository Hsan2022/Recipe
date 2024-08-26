import {useState } from "react"
import Sidebar from "./Sidebar"

import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons"
// states
export default function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false)
    // add links to sidebar, i of object
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Settings",
            path: "/settings", 
            icon: faCog
        }
    ]

    function closeSidebar(){
        setShowSidebar(false)
    }

    return (
        /*to circumvent 'component should only return one parent element'
        add elements inside empty react fragments*/
        <>
            <div className="navbar container">
                <a href="#!" className="logo">M<span>uy</span>RicoHub</a>
                <div className="nav-links">
                    { links.map(link => (
                        <a href="#!" key={link.name}>{link.name}</a>
                    )) }
                    {/* <a href="#!">Home</a>
                    <a href="#!">Recipes</a>
                    <a href="#!">Settings</a> */}
                </div> 
                {/* data binding use */}
                <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
        </div>
        { showSidebar && <Sidebar close= {closeSidebar} links={links} />}
        </>
    )
}