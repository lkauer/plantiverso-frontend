import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';

function ViewCategory(){

    const [loading, setLoading] = useState(true);
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        axios.get(`/api/view-category`).then(res => {
            if(res.status === 200){
                setCategoryList(res.data.category);
            }
            setLoading(false);
        });

    }, []);

    const deleteCategory = (e, id) => {
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Excluindo";

        axios.delete(`/api/delete-category/${id}`).then(res => {
            if(res.status === 200){
                swal("Success", res.data.message, "success");
                thisClicked.closest("tr").remove();
            }else if( res.status === 404){
                swal("Warnig", res.data.message, "Warning");
                thisClicked.innerText = "Excluir";
            }
        });
    }

    var ViewCategory_HTMLTABLE = "";
    if(loading){
        return <h4>Loading category...</h4>
    }else{
        ViewCategory_HTMLTABLE = categoryList.map((item) => {
            return (
                <tr> 
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td> <Link to={`edit-category/${item.id}`}> <button className="btn btn-warning">Editar</button> </Link> </td>
                    <td> <button onClick={ (e) => deleteCategory(e, item.id)}className="btn btn-danger">Excluir</button></td>
                </tr>
            )   
        });
    }

    return(
        <div>
            <div className="container py-5">
                <h1>Listar categorias</h1>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">#</th>
                        <th scope="col">#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ViewCategory_HTMLTABLE}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ViewCategory;