import React from "react";
import { useSelector } from 'react-redux';
import { selectClient } from "../reducers/clientSlice";
import DefaultLayout from "../components/DefaultLayout";

function HomePage() {
    const client = useSelector(selectClient);

    return (
        <DefaultLayout>
            <div className="row">
                <div className="col">
                    {client && <div className="d-flex flex-column align-items-center mt-5 mb-3">
                        <h4>{ client.nombre }</h4>
                        <small className="text-secondary">NIT: { client.nit }</small>
                        <div>
                            <strong>Capa: </strong><small className="me-4">{ client.capa }</small>
                            <strong>Segmento: </strong><small>{ client.segmento }</small>
                        </div>
                    </div>}
                    <nav className="d-none d-md-block mb-4">
                        <div className="nav nav-tabs justify-content-between" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-operation-tab" data-bs-toggle="tab" data-bs-target="#nav-operation" type="button" role="tab" aria-controls="nav-operation" aria-selected="true">Operación</button>
                            <button className="nav-link" id="nav-indicator-tab" data-bs-toggle="tab" data-bs-target="#nav-indicator" type="button" role="tab" aria-controls="nav-indicator" aria-selected="false">Indicadores</button>
                            <button className="nav-link" id="nav-client-tab" data-bs-toggle="tab" data-bs-target="#nav-client" type="button" role="tab" aria-controls="nav-client" aria-selected="false">Información Cliente</button>
                        </div>
                    </nav>
                    <hr className="d-md-none mb-3"/>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-operation" role="tabpanel" aria-labelledby="nav-operation-tab" tabIndex="0">
                            <div className="row">
                                <div className="col-12 mb-4">
                                    <p className="text-primary">Indique la línea de crédito que quiere reconsiderar</p>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex justify-content-center">
                                        <div className="card me-2">
                                            <div className="card-body">
                                                <i className="bi bi-wallet2 text-secondary" style={{ fontSize: '3em' }}></i>
                                                <h5 className="card-title">Cartera ordinaria</h5>
                                                <button className="w-100 btn btn-light text-secondary" type="button">Continuar</button>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <i className="bi bi-shop text-secondary" style={{ fontSize: '3em' }}></i>
                                                <h5 className="card-title">Leasing</h5>
                                                <button className="w-100 btn btn-light text-secondary" type="button">Continuar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-5 mb-5">
                                    <div className="alert alert-warning text-warning" role="alert">
                                        <div><i className="bi bi-info-circle"></i> Las demás líneas de crédito no estarán por el momento.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-indicator" role="tabpanel" aria-labelledby="nav-indicator-tab" tabIndex="0">Indicadores Tab</div>
                        <div className="tab-pane fade" id="nav-client" role="tabpanel" aria-labelledby="nav-client-tab" tabIndex="0">Información Cliente Tab</div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default HomePage;