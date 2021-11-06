import React from 'react';

function Category(){
    return(
        <div>
            <div className="container py-5">
                <h1>Categorias</h1>
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
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">#</th>
                        <th scope="col">#</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>CategoriaXPTO</td>
                        <td>default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</td>
                        <td> <button class="btn btn-warning">Editar</button></td>
                        <td> <button class="btn btn-danger">Excluir</button></td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>CategoriaXL</td>
                        <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</td>
                        <td> <button class="btn btn-warning">Editar</button></td>
                        <td> <button class="btn btn-danger">Excluir</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Category;