import React from 'react';

function Forum(){
    return(
        <div>
            <div className="container py-5">
                <h1>Fórum</h1>
                <div>
                    <form >
                        <div className="form-group mb-3">
                            <label>Titulo</label>
                            <input type="text" name="name" className="form-control"></input>
                            <span>  </span>
                        </div>
                        <div className="form-group mb-3">
                            <label>Descrição</label>
                            <textarea type="text" name="name" className="form-control"></textarea>
                            <span>  </span>
                        </div>
                        <div className="form-group mb-3">
                            <button type="submit" className="btn btn-primary"> Salvar </button>
                        </div>
                    </form>
                </div>
                <br></br>
                <h2>Meus tópicos</h2>
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                        <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">List group item heading</h5>
                        <small>20/05/1999</small>
                        <button className="btn btn-warning">Editar</button>
                        <button className="btn btn-danger">Excluir</button>
                        </div>
                        <p class="mb-1">Some placeholder content in a paragraph.</p>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">List group item heading</h5>
                        <small>20/05/1999</small>
                        <button className="btn btn-warning">Editar</button>
                        <button className="btn btn-danger">Excluir</button>
                        </div>
                        <p class="mb-1">Some placeholder content in a paragraph.</p>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">List group item heading</h5>
                        <small>20/05/1999</small>
                        <button className="btn btn-warning">Editar</button>
                        <button className="btn btn-danger">Excluir</button>
                        </div>
                        <p class="mb-1">Some placeholder content in a paragraph.</p>
                    </a>
                </div>
                <br></br>
                <h2>Tópicos gerais</h2>
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                        <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">List group item heading</h5>
                        <small>20/05/1999</small>
                        </div>
                        <p class="mb-1">Some placeholder content in a paragraph.</p>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">List group item heading</h5>
                        <small>20/05/1999</small>
                        </div>
                        <p class="mb-1">Some placeholder content in a paragraph.</p>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">List group item heading</h5>
                        <small>20/05/1999</small>
                        </div>
                        <p class="mb-1">Some placeholder content in a paragraph.</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Forum;