import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectClient } from "../reducers/clientSlice";
import { fetchClient } from "../services/clients";

function HeaderComponent() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const client = useSelector(selectClient);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchClient());
    }, []);

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
                    {client && <ul className="navbar-nav">
                        <li className="nav-item d-flex flex-column">
                            <strong>{ client.gerenteRelacion }</strong>
                            <small className="text-secondary">Gerente de Relación</small>
                        </li>
                    </ul>}
                </div>
            </div>
        </nav>
    );
}

export default HeaderComponent;