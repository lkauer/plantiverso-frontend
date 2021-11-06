import React from 'react';

function Chat(){
    return(
        <div>
            <div className="container py-5">
                <h1>Chat</h1>
                <div>
                    <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                        <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                            <input className="form-control" type="text" placeholder="Buscar usuário..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                            <button className="btn btn-primary" type="button">Pesquisar</button>
                        </div>
                        <br></br>
                    </form>
                </div>
                <br></br>
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                        <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">List group item heading</h5>
                        <small>3 days ago</small>
                        </div>
                        <p class="mb-1">Some placeholder content in a paragraph.</p>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">List group item heading</h5>
                        <small class="text-muted">3 days ago</small>
                        </div>
                        <p class="mb-1">Some placeholder content in a paragraph.</p>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">List group item heading</h5>
                        <small class="text-muted">3 days ago</small>
                        </div>
                        <p class="mb-1">Some placeholder content in a paragraph.</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Chat;