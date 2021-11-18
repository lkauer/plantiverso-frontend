import axios from 'axios';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { Link, useHistory } from 'react-router-dom';

function EditForum(props){

    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [forumInput, setForum] = useState([]);
    const [error, setError] = useState({});

    //validar se usuario pode acessar determinado topico do forum.
    useEffect(() => {
        const forum_id = props.match.params.id;
        axios.get(`/api/edit-forum/${forum_id}`).then(res => {
            if(res.data.status === 200){
                setForum(res.data.forum);
            }else if(res.data.status === 400){
                swal("Error", res.data.message, "error");
                history.push('/admin/view-forum');
            }
            setLoading(false);
        });

    }, [props.match.params.id, history]);

    const handleInput = (e) => {
        e.persist();
        setForum({...forumInput, [e.target.name] : e.target.value})
    }

    const updateForum = (e) => {
        e.preventDefault();
        const forum_id = props.match.params.id;
        const data = forumInput;
        axios.put(`/api/update-forum/${forum_id}`, data).then(res=>{
            if(res.data.status === 200){
                swal("Success", res.data.message, "success");
                setError([]);
                history.push('/admin/view-forum');
            }else if(res.data.status === 422){
                // swal("Error", res.data.message, "error");
                // setError(res.data.errors);
                history.push('/admin/view-forum');
            }else if(res.data.status === 404){
                // swal("Error", res.data.message, "error");
                history.push('/admin/view-forum');
            }
        });
    }

    if(loading){
        return <h4>Loading forum topic...</h4>
    }

    return(
        <div>
            <div className="container py-5">
                <h1>Fórum</h1>
                <div>
                    <form onSubmit={updateForum}>
                        <div className="form-group mb-3">
                            <label>Titulo</label>
                            <input type="text" name="title" onChange={handleInput} value={forumInput.title} className="form-control"></input>
                            <small className="text-danger"> {error.title}</small>
                        </div>
                        <div className="form-group mb-3">
                            <label>Descrição</label>
                            <textarea type="text" name="description" onChange={handleInput} value={forumInput.description} className="form-control"></textarea>
                            <small className="text-danger"> {error.description}</small>
                        </div>
                        <div className="form-group mb-3">
                            <button type="submit" className="btn btn-primary" style={{margin:"5px"}}> Salvar </button>
                            <Link to="/admin/view-forum" className="btn btn-secondary"> Voltar </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditForum;