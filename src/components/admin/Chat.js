import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

function Chat(){

    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [chatList, setChatList] = useState([]);

    useEffect(() => {
        axios.get(`/api/all-chat-conversations`).then(res => {
            if(res.status === 200){
                setChatList(res.data.chat);
            }
            setLoading(false);
        });

    }, []);

    var ViewCatalog_HTMLTABLE = "";
    if(loading){
        return <h4>Loading chat...</h4>
    }else{
        ViewCatalog_HTMLTABLE = chatList.map((item) => {
            console.log(item)
            return (
                <div className="card" style={{margin:'20px'}}>
                    <div className="list-group-item list-group-item-action" aria-current="true">
                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{item.username}</h5>
                        <Link to={`open-chat/${item.id}`}> <button className="btn btn-primary">Conversar</button> </Link>
                        </div>
                    </div>
                </div>
            )   
        });
    }

    return(
        <div>
            <div className="container py-5">
                <h1>Chat</h1>
                <div className="list-group">
                    {ViewCatalog_HTMLTABLE}
                </div>
            </div>
        </div>
    );
}

export default Chat;