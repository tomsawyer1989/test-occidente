import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectClient } from "../reducers/clientSlice";
import { fetchClient } from "../services/clients";

function HeaderComponent() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [isDropOpen, setIsDropOpen] = useState(true);
    const client = useSelector(selectClient);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchClient());
    }, []);

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="https://www.bancodeoccidente.com.co/" target="_blank">
                    <img width={220} height={50} src={require('../assets/images/bancoccidente.png')} alt="bancoccidente" />
                </a>
                <button className="navbar-toggler" type="button" onClick={() => setIsNavCollapsed(!isNavCollapsed)} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-end`} id="navbarNav">
                    {client && <ul className="navbar-nav">
                        <li className="nav-item d-flex">
                            <div className="d-flex flex-column justify-content-center">
                                <strong>{client.gerenteRelacion}</strong>
                                <small className="text-secondary">Gerente de Relación</small>
                            </div>
                            <div className="dropdown">
                                <button className="btn dropdown-toggle rounded-circle" type="button" onClick={() => setIsDropOpen(!isDropOpen)}>
                                    <i className="bi bi-person-fill" style={{ fontSize: '2em' }}></i>
                                </button>
                                <ul className={`position-absolute dropdown-menu${!isDropOpen ? " show" : ""}`} style={{ right: '0px' }}>
                                    <li><a className="dropdown-item" href="/#">Opción 1</a></li>
                                    <li><a className="dropdown-item" href="/#">Opción 2</a></li>
                                    <li><a className="dropdown-item" href="/#">Opción 3</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>}
                </div>
            </div>
        </nav>
    );
}

export default HeaderComponent;