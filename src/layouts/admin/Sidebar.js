import React from 'react';
import {Link} from 'react-router-dom';

const Sidebar = () => {
    return(
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Menu</div>
                            <Link className="nav-link" to="/admin/feed">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Feed
                            </Link> 
                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseCatalog" aria-expanded="false" aria-controls="collapseCatalog">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Catalogo
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseCatalog" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link className="nav-link" to="/admin/add-catalog">Cadastrar</Link>
                                    <Link className="nav-link" to="/admin/view-catalog">Listar</Link>
                                </nav>
                            </div>
                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseCategories" aria-expanded="false" aria-controls="collapseCategories">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Categoria
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseCategories" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link className="nav-link" to="/admin/add-category">Cadastrar</Link>
                                    <Link className="nav-link" to="/admin/view-category">Listar</Link>
                                </nav>
                            </div>
                            <Link className="nav-link" to="/admin/chat">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Chat
                            </Link> 
                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseforumtopics" aria-expanded="false" aria-controls="collapseforumtopics">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Forum
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseforumtopics" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link className="nav-link" to="/admin/add-forum">Cadastrar</Link>
                                    <Link className="nav-link" to="/admin/view-forum">Meus tópicos</Link>
                                    <Link className="nav-link" to="/admin/view-general-forum">Tópicos gerais</Link>
                                </nav>
                            </div>
                            {/* <Link className="nav-link" to="/admin/profile">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Perfil
                            </Link>  */}
                        </div>
                    </div>
                </nav>
    )
}

export default Sidebar