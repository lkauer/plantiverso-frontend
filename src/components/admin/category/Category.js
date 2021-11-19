import axios from 'axios';
import React, { useState } from 'react';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

function Category(){

    const history = useHistory();
    const [categoryInput, setCategory] = useState ({
        name : '',
        description : '',
        error_list: []
    });

    const handleInput = (e) => {
        e.persist();
        setCategory({...categoryInput, [e.target.name] : e.target.value})
    }

    const submitCategory = (e) => {

        e.preventDefault();

        const data = {
            name: categoryInput.name,
            description: categoryInput.description
        }

        axios.post(`/api/store-category`, data).then( res => {
            if(res.data.status === 200){
                swal("Success", res.data.message, "success");
                history.push('/admin/view-category');
            }else if(res.data.status === 400){
                setCategory({ ...categoryInput, error_list : res.data.errors});
            }
        });
    }

    return(
        <div>
            <div className="container py-5">
                <h1>Cadastrar categoria</h1>
                <form onSubmit={submitCategory}>
                    <div className="form-group mb-3">
                        <label>Nome</label>
                        <input type="text" name="name" onChange={handleInput} value={categoryInput.name} className="form-control"></input>
                        <span> {categoryInput.error_list.name} </span>
                    </div>
                    <div className="form-group mb-3">
                        <label>Descrição</label>
                        <textarea type="text" name="description" onChange={handleInput} value={categoryInput.description} className="form-control"></textarea>
                        <span> {categoryInput.error_list.description} </span>
                    </div>
                    <div className="form-group mb-3">
                        <button type="submit" className="btn btn-primary"> Salvar </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Category;