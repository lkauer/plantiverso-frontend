import axios from 'axios';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { Link, useHistory } from 'react-router-dom';

function OpenForum(props){
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState({});
    const [postList, setPostList] = useState([]);
    const [forum, setForum] = useState({});

    useEffect(() => {
        const forum_id = props.match.params.id;
        axios.get(`/api/open-forum/${forum_id}`).then(res => {
            if(res.data.status === 200){
                setPostList(res.data.forumPost);
                setForum(res.data.forum)
            }else if(res.data.status === 404){
                swal("Error", res.data.message, "error");
                history.push('/admin/view-forum');
            }
            setLoading(false);
        });

    }, [props.match.params.id, history]);

    const [contentInput, setContent] = useState ({
        content : '',
        error_list: []
    });

    const handleInput = (e) => {
        e.persist();
        setContent({...contentInput, [e.target.name] : e.target.value})
    }

    const submitPost = (e) => {
        e.preventDefault();
        const data = {
            content: contentInput.content,
            forum_id: props.match.params.id
        }

        axios.post(`/api/store-forum-post`, data).then( res => {
            if(res.data.status === 200){
                history.push('/admin/view-forum');
            }else if(res.data.status === 400){
                swal("Error", res.data.message, "error");
            }
        });
    }

    var forumPosts_HTML = "";
    if(loading){
        return <h4>Loading forum topic information...</h4>
    }else{
        forumPosts_HTML = postList.map((item) => {
            return (
                <div className="list-group-item list-group-item-action" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                    <small><b>{item.user_name}</b> - {item.created_at}</small>
                    </div>
                    <br></br>
                    <p className="mb-1">{item.content}</p>
                <br></br>
                </div>
            )   
        });
    }
    return(
        <div>
            <div className="container py-5">
                <h1>{forum.title}</h1>
                <h4> {forum.description}</h4>
                <div className="list-group">
                    {forumPosts_HTML}
                </div>
                <div className="list-group">
                    <form onSubmit={submitPost}>
                        <div className="form-group mb-3">
                            <label>Participe da discussão:</label>
                            <textarea type="text" name="content" onChange={handleInput} value={contentInput.content} className="form-control"></textarea>
                            <small className="text-danger"> </small>
                        </div>
                        <div className="form-group mb-3">
                            <button type="submit" className="btn btn-primary" style={{margin:"5px"}}> Enviar </button>
                            <Link to="/admin/view-general-forum" className="btn btn-secondary"> Voltar </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default OpenForum;