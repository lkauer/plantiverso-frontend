import axios from 'axios';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

function Catalog(){

    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [categoryList, setCategoryList] = useState([]);
    const [picture, setPicture] = useState([]);
    const [catalogInput, setCatalog] = useState ({
        name : '',
        description : '',
        category : [],
        // image,
        error_list: []
    });

    useEffect(() => {
        axios.get(`/api/all-categories`).then(res => {
            if(res.data.status === 200){
                setCategoryList(res.data.category)
            }else if(res.data.status === 400){
                swal("Error", res.data.message, "error");
                history.push('/admin/view-category');
            }
            setLoading(false);
        });

    }, []);


    const handleInput = (e) => {
        e.persist();
        setCatalog({...catalogInput, [e.target.name] : e.target.value})
    }

    const handlePicture = (e) => {
        e.persist();
        setPicture({picture : e.target.files[0]})
    }

    const submitCatalog = (e) => {

        e.preventDefault();
        const formData = new FormData();
        formData.append('image', picture.picture);
        formData.append('name', catalogInput.name);
        formData.append('description', catalogInput.description);
        formData.append('category', catalogInput.category);

        axios.post(`/api/store-catalog`, formData).then( res => {
            if(res.data.status === 200){
                swal("Success", res.data.message, "success");
                history.push('/admin/view-catalog');
            }else if(res.data.status === 400){
                setCatalog({ ...catalogInput, error_list : res.data.errors});
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
                <h1>Cadastrar item ao catálogo</h1>
                <form onSubmit={submitCatalog}>
                    <div className="form-group mb-3">
                        <label>Titulo</label>
                        <input type="text" name="name" onChange={handleInput} value={catalogInput.name} className="form-control"></input>
                        <span> {catalogInput.error_list.name} </span>
                    </div>
                    <div className="form-group mb-3">
                        <label>Descrição</label>
                        <textarea type="text" name="description" onChange={handleInput} value={catalogInput.description} className="form-control"></textarea>
                        <span> {catalogInput.error_list.description} </span>
                    </div>
                    <div className="form-group mb-3">
                        <label>Imagem</label>
                        <input type="file" name="picture" onChange={handlePicture} className="form-control"></input>
                        <span>  </span>
                    </div>
                    <div className="form-group mb-3">
                        <label>Categorias</label>
                        <select className="form-select" onChange={handleInput} value={catalogInput.category} name="category" aria-label="Default select example">
                            <option value="0">Nenhum</option>
                            {categories_HTMLTABLE}
                        </select>
                        <span>  </span>
                    </div>
                    <div className="form-group mb-3">
                        <button type="submit" className="btn btn-primary"> Salvar </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Catalog;