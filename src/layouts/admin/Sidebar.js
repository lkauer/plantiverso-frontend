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
                            <Link className="nav-link" to="/admin/catalog">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Catálogo
                            </Link> 
                            <Link className="nav-link" to="/admin/category">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Categoria
                            </Link> 
                            <Link className="nav-link" to="/admin/chat">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Chat
                            </Link> 
                            <Link className="nav-link" to="/admin/forum">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Forum
                            </Link> 
                            <Link className="nav-link" to="/admin/profile">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Perfil
                            </Link> 
                        </div>
                    </div>
                </nav>
    )
}

export default Sidebar