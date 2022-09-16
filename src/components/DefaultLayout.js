import React from "react";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

function DefaultLayout({ children }) {
    return (
        <div className="vh-100 d-flex flex-column justify-content-between">
            <HeaderComponent />
            <div className="container" style={{ flex: 'auto' }}>
                { children }
            </div>
            <FooterComponent />
        </div>
    );
}

export default DefaultLayout;