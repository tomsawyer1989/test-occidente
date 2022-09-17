import React from "react";

function FooterComponent() {
    return (
        <nav className="navbar bg-light">
            <div className="w-100 d-xl-none d-flex justify-content-center">
                <img width={120} height={30} src={require('../assets/images/grupaval.png')} alt="grupaval" />
            </div>
            <div className="w-100 d-none d-xl-flex justify-content-end">
                <img width={120} height={30} src={require('../assets/images/grupaval.png')} alt="grupaval" />
            </div>
        </nav>
    );
}

export default FooterComponent;