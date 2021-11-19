import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';

function ViewCatalog(){

    const [loading, setLoading] = useState(true);
    const [catalogList, setCatalogList] = useState([]);
    useEffect(() => {
        axios.get(`/api/view-catalog`).then(res => {
            if(res.status === 200){
                setCatalogList(res.data.catalog);
            }
            setLoading(false);
        });

    }, []);

    const deleteCatalog = (e, id) => {
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Excluindo";

        axios.delete(`/api/delete-catalog/${id}`).then(res => {
            if(res.status === 200){
                swal("Success", res.data.message, "success");
                thisClicked.closest("tr").remove();
            }else if( res.status === 404){
                swal("Warnig", res.data.message, "Warning");
                thisClicked.innerText = "Excluir";
            }
        });
    }

    var ViewCatalog_HTMLTABLE = "";
    if(loading){
        return <h4>Loading catalog...</h4>
    }else{
        ViewCatalog_HTMLTABLE = catalogList.map((item) => {

            var itemImg = (item.image)?item.image:'uploads/catalog/default.jpg'
            return (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                    <td> <img src={`${axios.defaults.baseURL}/${itemImg}`} alt="..." className="img-thumbnail"/></td>
                    <td> <Link to={`edit-catalog/${item.id}`}> <button className="btn btn-warning">Editar</button> </Link> </td>
                    <td> <button onClick={ (e) => deleteCatalog(e, item.id)}className="btn btn-danger">Excluir</button></td>
                </tr>
            )   
        });
    }

    return(
        <div>
            <div className="container py-5">
                <h1>Listar itens do catálogo</h1>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Imagem</th>
                        <th scope="col">#</th>
                        <th scope="col">#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ViewCatalog_HTMLTABLE}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ViewCatalog;