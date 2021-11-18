import axios from 'axios';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { Link, useHistory } from 'react-router-dom';

function EditCategory(props){

    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [categoryInput, setCategory] = useState([]);
    const [error, setError] = useState({});

    //validar se usuario pode acessar determinada categoria.
    useEffect(() => {
        const category_id = props.match.params.id;
        axios.get(`/api/edit-category/${category_id}`).then(res => {
            if(res.data.status === 200){
                setCategory(res.data.category);
            }else if(res.data.status === 400){
                swal("Error", res.data.message, "error");
                history.push('/admin/view-category');
            }
            setLoading(false);
        });

    }, [props.match.params.id, history]);

    const handleInput = (e) => {
        e.persist();
        setCategory({...categoryInput, [e.target.name] : e.target.value})
    }

    const updateCategory = (e) => {
        e.preventDefault();
        const category_id = props.match.params.id;
        const data = categoryInput;
        axios.put(`/api/update-category/${category_id}`, data).then(res=>{
            if(res.data.status === 200){
                swal("Success", res.data.message, "success");
                setError([]);
                history.push('/admin/view-category');
            }else if(res.data.status === 422){
                // swal("Error", res.data.message, "error");
                // setError(res.data.errors);
                history.push('/admin/view-category');
            }else if(res.data.status === 404){
                // swal("Error", res.data.message, "error");
                history.push('/admin/view-category');
            }
        });
    }

    if(loading){
        return <h4>Loading category...</h4>
    }

    return(
        <div>
            <div className="container py-5">
                <h1>Editar categoria</h1>
                <form onSubmit={updateCategory}>
                    <div className="form-group mb-3">
                        <label>Nome</label>
                        <input type="text" name="name" onChange={handleInput} value={categoryInput.name} className="form-control"></input>
                        <small className="text-danger"> {error.name}</small>
                    </div>
                    <div className="form-group mb-3">
                        <label>Descrição</label>
                        <textarea type="text" name="description" onChange={handleInput} value={categoryInput.description} className="form-control"></textarea>
                        <small className="text-danger"> {error.description}</small>
                    </div>
                    <div className="form-group mb-3">
                        <button type="submit" className="btn btn-primary" style={{margin:"5px"}}> Salvar </button>
                        <Link to="/admin/view-category" className="btn btn-secondary"> Voltar </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditCategory;