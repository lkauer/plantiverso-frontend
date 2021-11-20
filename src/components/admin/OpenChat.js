import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import swal from 'sweetalert';

function OpenChat(props){
    
    const [loading, setLoading] = useState(true);
    const [chatList, setChatList] = useState([]);
    const [chat, setChat] = useState({});
    const history = useHistory();

    useEffect(() => {
            const chat_id = props.match.params.id;
        setInterval(function() {
            axios.get(`/api/open-chat/${chat_id}`).then(res => {
                if(res.data.status === 200){
                    setChatList(res.data.chatPost);
                    setChat(res.data.chat)
                }else if(res.data.status === 404){
                    swal("Error", res.data.message, "error");
                    history.push('/admin/chat');
                }
                setLoading(false);
            });

        }, 10000);

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
            chat_id: props.match.params.id
        }

        axios.post(`/api/store-chat-post`, data).then( res => {
            if(res.data.status === 200){
                history.push('/admin/chat');
            }else if(res.data.status === 400){
                swal("Error", res.data.message, "error");
            }
        });
    }

    var chatPosts_HTML = "";
    if(loading){
        return <h4>Loading chat information...</h4>
    }else{
        chatPosts_HTML = chatList.map((item) => {
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

    console.log(chat)
    return(
        <div>
            <div className="container py-5">
                <div className="list-group">
                    <h4> Conversa com {chat.chatUserA } e {chat.chatUserB}</h4>
                    {chatPosts_HTML}
                </div>
                <div className="list-group">
                    <form onSubmit={submitPost}>
                        <div className="form-group mb-3">
                            <label>Enviar mensagem:</label>
                            <textarea type="text" name="content" onChange={handleInput} value={contentInput.content} className="form-control"></textarea>
                            <small className="text-danger"> </small>
                        </div>
                        <div className="form-group mb-3">
                            <button type="submit" className="btn btn-primary" style={{margin:"5px"}}> Enviar </button>
                            <Link to="/admin/chat" className="btn btn-secondary"> Voltar </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default OpenChat;