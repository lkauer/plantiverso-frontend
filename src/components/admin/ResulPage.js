import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function ResultPage(props){
    // console.log(props.match.params.searchcontent);
    const [loading, setLoading] = useState(true);
    const [catalogList, setCatalogList] = useState([]);
    useEffect(() => {
        axios.get(`/api/general-search/${props.match.params.searchcontent}`).then(res => { //criar metodo
            console.log('teste')
            console.log(res.data.catalog)
            if(res.status === 200){
                setCatalogList(res.data.catalog);
            }
            setLoading(false);
        });

    }, []);


    var ViewCatalog_HTMLTABLE = "";
    if(loading){
        return <h4>Loading catalog...</h4>
    }else{
        ViewCatalog_HTMLTABLE = catalogList.map((item) => {

            var itemImg = (item.image)?item.image:'uploads/catalog/default.jpg'
            return (
                <div className="card" style={{margin:'20px'}}>
                    <img className="img-thumbnail" alt="imagem do item do catalogo" style={{maxWidth:"30%"}}  src={`${axios.defaults.baseURL}/${itemImg}`}/>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.description}</p>
                        <p className="card-text"><small className="text-muted">{item.created_at}</small></p>
                    </div>
                </div>
            )   
        });
    }

    return(
        <div>
            <div className="container py-5">
                <h1>Resultado da busca</h1>
                
                <p>Filtro baseado em titulo, descrição (do item do catalogo).</p>
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