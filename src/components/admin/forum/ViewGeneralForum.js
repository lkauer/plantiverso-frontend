import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function ViewGeneralForum(){

    const [loading, setLoading] = useState(true);
    const [forumList, setForumList] = useState([]);
    useEffect(() => {
        axios.get(`/api/view-general-forum`).then(res => {
            if(res.status === 200){
                setForumList(res.data.forum);
            }
            setLoading(false);
        });

    }, []);

    var ViewForum_HTML = "";
    if(loading){
        return <h4>Loading forum...</h4>
    }else{
        ViewForum_HTML = forumList.map((item) => {
            return (
                <div className="list-group-item list-group-item-action" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{item.title}</h5>
                    <small>20/05/1999</small>
                    <Link to={`open-forum/${item.id}`}> <button className="btn btn-primary">Acessar</button> </Link>
                    </div>
                    <br></br>
                    <p className="mb-1">{item.description}</p>
                <br></br>
                </div>
            )   
        });
    }
    

    return(
        <div>
            <div className="container py-5">
                <h1>Forum - Tópicos</h1>
                <div className="list-group">
                    {ViewForum_HTML}
                </div>
            </div>
        </div>
    );
}

export default ViewGeneralForum;