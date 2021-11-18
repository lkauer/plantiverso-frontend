import axios from 'axios';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { Link, useHistory } from 'react-router-dom';

function EditCatalog(props){

    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [categoryList, setCategoryList] = useState([]);
    const [catalogInput, setCatalog] = useState([]);
    const [error, setError] = useState({});

    //validar se usuario pode acessar determinada catalogo.
    useEffect(() => {
        const catalog_id = props.match.params.id;
        axios.get(`/api/edit-catalog/${catalog_id}`).then(res => {
            if(res.data.status === 200){
                setCatalog(res.data.catalog);
                setCategoryList(res.data.category)
            }else if(res.data.status === 400){
                swal("Error", res.data.message, "error");
                history.push('/admin/view-catalog');
            }
            setLoading(false);
        });

    }, [props.match.params.id, history]);

    const handleInput = (e) => {
        e.persist();
        setCatalog({...catalogInput, [e.target.name] : e.target.value})
    }

    const updateCatalog = (e) => {
        e.preventDefault();
        const catalog_id = props.match.params.id;
        const data = catalogInput;
        axios.put(`/api/update-catalog/${catalog_id}`, data).then(res=>{
            if(res.data.status === 200){
                swal("Success", res.data.message, "success");
                setError([]);
                history.push('/admin/view-catalog');
            }else if(res.data.status === 422){
                // swal("Error", res.data.message, "error");
                // setError(res.data.errors);
                history.push('/admin/view-catalog');
            }else if(res.data.status === 404){
                // swal("Error", res.data.message, "error");
                history.push('/admin/view-catalog');
            }
        });
    }


    var categories_HTMLTABLE = "";
    if(loading){
        return <h4>Loading ...</h4>
    }else{
        categories_HTMLTABLE = categoryList.map((item) => {
            return (
                <option value={item.id}>{item.name}</option>
            )   
        });
    }

    return(
        <div>
            <div className="container py-5">
                <h1>Catálogo</h1>
                <form onSubmit={updateCatalog}>
                    <div className="form-group mb-3">
                        <label>Titulo</label>
                        <input type="text" name="name" onChange={handleInput} value={catalogInput.name} className="form-control"></input>
                        <small className="text-danger"> {error.name}</small>
                    </div>
                    <div className="form-group mb-3">
                        <label>Descrição</label>
                        <textarea type="text" name="description" onChange={handleInput} value={catalogInput.description} className="form-control"></textarea>
                        <span> {error.description} </span>
                    </div>
                    {/* <div className="form-group mb-3">
                        <label>Imagem</label>
                        <input type="file" name="name" className="form-control"></input>
                        <span>  </span>
                    </div> */}
                    <div className="form-group mb-3">
                        <label>Categorias</label>
                        <select className="form-select" onChange={handleInput} value={catalogInput.category} name="category" aria-label="Default select example">
                            <option value="0">Nenhum</option>
                            {categories_HTMLTABLE}
                        </select>
                        <span>  </span>
                    </div>
                    <div className="form-group mb-3">
                        <button type="submit" className="btn btn-primary" style={{margin:"5px"}}> Salvar </button>
                        <Link to="/admin/view-catalog" className="btn btn-secondary"> Voltar </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditCatalog;