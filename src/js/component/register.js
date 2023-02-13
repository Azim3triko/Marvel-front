import React, { useContext, useState } from "react"; 
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import "../../styles/home.css";



export const Register = () => {
  const [signIn, setSignIn] = useState({ user: "", password: "", email: "" });
  const handleChange = (event) => {
    setSignIn({ ...signIn, [event.target.name]: event.target.value });
  };

  const navigate = useNavigate();   
  const { store, actions } = useContext(Context);
  const params = useParams();

  const handleLogin = async (data) => {    

     const result = await actions.signUp(data, params);
    if (result) {
      navigate("/home");
       alert("Se ha registrado correctamente");
     } else {
      alert("El usuario no puede ser creado. Revise e intenté de nuevo");
     }
   };

  useEffect(() => {
     console.log(params);
   }, []);

  return (

      <div className="flex-wrap" >
        	 <nav className="navbar navbar-light bg-dark mb-3">
              <div className="container">
              <img className="imagen" width="80px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/320px-Marvel_Logo.svg.png"></img>
            </div>
           </nav>
           
      <div ClassName="container">
        <div className="form sign-up-container text-center text-light">
            <h1>
              Bienvenidos
            </h1>
            <form className="formulario" padding="3rem">
               <label></label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Nombre completo"
                  name="user"
                  value={signIn.user}
                  onChange={handleChange}
                />
           
                <div className="form-group">
                    <label></label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Correo"
                    name="email"
                    value={signIn.email}
                    onChange={handleChange}
                    />
                </div>
                    <div className="form-group">
                        <label></label>
                        <input
                        type={"password"}
                        className="form-control"
                        placeholder="Contraseña"
                        name="password"
                        value={signIn.password}
                        onChange={handleChange}
                        />
                    </div>
                <div className="form-group">
                    <button
                    type={"button"}
                    className="btn btn-secondary w-100 my-4"
                    onClick={() => handleLogin(signIn)}
                    style={{ backgroundColor: "#1a2537" }}
                    >
                    Registrar
                    </button>
                </div>
            </form>
                    <p className="text-start fs-6 text-center">
                    ¿Ya tienes una cuenta?
                    <a href="/Login/" className="text-decoration-none">
                        Iniciar Sesion
                    </a>
                    </p>
                </div>
          </div>  
      </div>
    
  );
};

export default Register;
