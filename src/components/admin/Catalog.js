import React from 'react';

function Catalog(){
    return(
        <div>
            <div className="container py-5">
                <h1>Catálogo</h1>
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
                        <label>Imagem</label>
                        <input type="file" name="name" className="form-control"></input>
                        <span>  </span>
                    </div>
                    <div className="form-group mb-3">
                        <label>Categorias</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
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
                        <th scope="col">Categoria</th>
                        <th scope="col">Imagem</th>
                        <th scope="col">#</th>
                        <th scope="col">#</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Bela planta</td>
                        <td>default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</td>
                        <td>CategoriaXPTO</td>
                        <td> <img src="https://media.istockphoto.com/photos/monstera-in-a-pot-isolated-on-white-background-close-up-of-tropical-picture-id1278906674?b=1&k=20&m=1278906674&s=170667a&w=0&h=PRsEw9KpsggCTUEqH_DqgtEKRt884wAGfQCQTeS8xBY=" alt="..." class="img-thumbnail"/></td>
                        <td> <button class="btn btn-warning">Editar</button></td>
                        <td> <button class="btn btn-danger">Excluir</button></td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Legendary plant</td>
                        <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</td>
                        <td>CategoriaXL</td>
                        <td> <img src="https://media.istockphoto.com/photos/monstera-in-a-pot-isolated-on-white-background-close-up-of-tropical-picture-id1278906674?b=1&k=20&m=1278906674&s=170667a&w=0&h=PRsEw9KpsggCTUEqH_DqgtEKRt884wAGfQCQTeS8xBY=" alt="..." class="img-thumbnail"/></td>
                        <td> <button class="btn btn-warning">Editar</button></td>
                        <td> <button class="btn btn-danger">Excluir</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Catalog;