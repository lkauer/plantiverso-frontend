import React from 'react';

function Profile(){
    return(
        <div>
            <div className="container py-5">
                <h1>Informações de perfil</h1>
                <form >
                    <div className="form-group mb-3">
                        <label>Nome</label>
                        <input type="text" name="name" className="form-control"></input>
                        <span>  </span>
                    </div>
                    <div className="form-group mb-3">
                        <label>Senha</label>
                        <input type="password" name="password" className="form-control"></input>
                        <span> </span>
                    </div>
                    <div className="form-group mb-3">
                        <label>E-mail</label>
                        <input type="text" name="email" className="form-control"></input>
                        <span>  </span>
                    </div>
                    <div className="form-group mb-3">
                        <label>Bio</label>
                        <textarea className="form-control" ></textarea>
                        <span>  </span>
                    </div>
                    <div className="form-group mb-3">
                        <label>Foto perfil</label>
                        <input type="file" name="name" className="form-control"></input>
                        <span>  </span>
                    </div>
                    <div className="form-group mb-3">
                        <button type="submit" className="btn btn-primary"> Salvar </button>
                    </div>
                    <button type="submit" className="btn btn-danger"> Excluir conta </button>
                </form>
            </div>
        </div>
    );
}

export default Profile;