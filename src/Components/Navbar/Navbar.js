import { useState } from "react";
import { links, social } from "./Data"
const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false);

    const clickOpen = (e) => {
        e.preventDefault();
        setShowLinks(!showLinks);
    }
    

    const navbarToggle = `navbar-toggle ${showLinks ? 'navbar-toggle-active' : null}`;

    const navMenuClass = `nav-menu ${showLinks ? 'openmenu' : null}`;

    return (

        <nav className="nav-bar">
            <div className="container">
                <div className="logo-left">

                    <a className="my-logo" href="/">
                        <h4>Nour Eldin</h4>
                        <div className="navbar-line"></div>
                     </a>

                    <a href="#" className={navbarToggle} onClick={ (e) =>  clickOpen(e)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                                
                    </div>


                    <ul id="main-menu" className={navMenuClass}>
                        {links.map( (link) => {
                            const {id, url, text} = link;
                            return (
                                <li className="nav-item has-dropdown" key={id}>
                                  <a className="nav-link" href={url}> {text} </a>
                                </li>
                            )
                        })}
                    </ul>


                    <ul className="social-media">
                        {social.map( (social) => {
                                const {id, url, icon} = social;
                                return (
                                    <li className="nav-item has-dropdown" key={id}>
                                    <a className="nav-link" href={url}> {icon} </a>
                                    </li>
                                )
                            })}
                    </ul>
                        </div>
                    </nav>
        
    )

}


export default Navbar;