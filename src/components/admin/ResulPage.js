import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

function ResultPage(props){

    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [catalogList, setCatalogList] = useState([]);
    useEffect(() => {
        axios.get(`/api/general-search/${props.match.params.searchcontent}`).then(res => { //criar metodo
            if(res.status === 200){
                setCatalogList(res.data.catalog);
            }
            setLoading(false);
        });

    }, []);

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
                <h1>Resultado da busca</h1>
                
                <p>Filtro baseado em titulo e descrição do item do catalogo.</p>
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

export default ResultPage;