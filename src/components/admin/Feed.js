import axios from 'axios';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { Link, useHistory } from 'react-router-dom';

function Feed(){

    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [searchContent, setSearchContent] = useState([]);
    
    const [catalogList, setCatalogList] = useState([]);
    useEffect(() => {
        axios.get(`/api/all-catalog-itens`).then(res => {
            if(res.status === 200){
                setCatalogList(res.data.catalog);
            }
            setLoading(false);
        });

    }, []);


    const handleSearchInput = (e) => {
        e.persist();
        setSearchContent({...searchContent, [e.target.name] : e.target.value})
    }

    const defineUserChat = (e, userId, ownUserId) => {
        const data = {
            user_id: userId,
            own_user_id: ownUserId
        }
        axios.post(`/api/define-user-chat`,data ).then(res => {
            if(res.status === 200){
                swal("Success", res.data.message, "success");
                history.push('/admin/chat');
            }else if( res.status === 201){
                swal("Success", res.data.message, "success");
                history.push('/admin/chat');
            }else if( res.status === 404){
                swal("Warnig", res.data.message, "Warning");
            }
        });
    }

    var ViewCatalog_HTMLTABLE = "";
    if(loading){
        return <h4>Loading catalog...</h4>
    }else{
        ViewCatalog_HTMLTABLE = catalogList.map((item) => {

            var itemImg = (item.image)?item.image:'uploads/catalog/default.jpg'
            var chatButton = (item.user_id !== item.own_user_id) ? <button onClick={ (e) => defineUserChat(e, item.user_id, item.own_user_id)} className="btn btn-secondary" type="button">Conversar com usuario</button>: '';
            return (
                <div className="card" style={{margin:'20px'}}>
                    <img className="img-thumbnail" alt="imagem do item do catalogo" style={{maxWidth:"30%"}}  src={`${axios.defaults.baseURL}/${itemImg}`}/>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.description}</p>
                        <p className="card-text"><small className="text-muted">{item.created_at}</small></p>
                        {chatButton}
                    </div>
                </div>
            )   
        });
    }

    return(
        <div>
            <div className="container py-5">
                <div>
                    <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                        <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                            <input className="form-control" type="text" onChange={handleSearchInput} name="searchContent" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                            <Link to={`result-page/${searchContent.searchContent}`}><button className="btn btn-primary" type="button">Pesquisar</button></Link>
                        </div>
                        <br></br>
                    </div>
                </div>
                <br></br>
                    <div>
                    {ViewCatalog_HTMLTABLE}
                    <br></br>
                    </div>
                <br></br>
            </div>
        </div>
    );
}

export default Feed;