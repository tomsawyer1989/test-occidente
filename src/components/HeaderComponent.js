import React, { useState } from "react";

function HeaderComponent() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/#">
                    <img width={220} height={50} src={require('../assets/images/bancoccidente.png')} alt="bancoccidente" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={() => handleNavCollapse()}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-end`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            Carlos Gómez
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default HeaderComponent;