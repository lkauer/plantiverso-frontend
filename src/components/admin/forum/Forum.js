import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

function Forum(){

    const [forumInput, setForum] = useState ({
        title : '',
        description : '',
        error_list: []
    });

    const handleInput = (e) => {
        e.persist();
        setForum({...forumInput, [e.target.name] : e.target.value})
    }

    const submitForum = (e) => {

        e.preventDefault();

        const data = {
            title: forumInput.title,
            description: forumInput.description
        }

        axios.post(`/api/store-forum`, data).then( res => {
            if(res.data.status === 200){
                swal("Success", res.data.message, "success");
            }else if(res.data.status === 400){
                setForum({ ...forumInput, error_list : res.data.errors});
            }
        });
    }

    return(
        <div>
            <div className="container py-5">
                <h1>Fórum</h1>
                <div>
                    <form onSubmit={submitForum}>
                        <div className="form-group mb-3">
                            <label>Titulo</label>
                            <input type="text" name="title" onChange={handleInput} value={forumInput.title} className="form-control"></input>
                            <span> {forumInput.error_list.title} </span>
                        </div>
                        <div className="form-group mb-3">
                            <label>Descrição</label>
                            <textarea type="text" name="description" onChange={handleInput} value={forumInput.description} className="form-control"></textarea>
                            <span> {forumInput.error_list.description} </span>
                        </div>
                        <div className="form-group mb-3">
                            <button type="submit" className="btn btn-primary"> Salvar </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Forum;