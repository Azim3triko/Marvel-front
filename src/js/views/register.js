import React, { useContext, useState } from "react"; 
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import "../../styles/home.css";

export const Register = () => {
  const [signIn, setSingIn] = useState({ user: "", password: "", email: "" });
  const handleChange = (event) => {
    setSignIn({ ...signIn, [event.target.name]: event.target.value });
  };

//   const navigate = useNavigate();
//   const { store, actions } = useContext(Context);
//   const params = useParams();

//   const handleLogin = async (data) => {
//     // esta funcion registra usuario
//     const result = await actions.signUp(data, params);
//     if (result) {
//       navigate("/home");
//       alert("Se ha registrado correctamente");
//     } else {
//       alert("El usuario no puede ser creado. Revise e intenté de nuevo");
//     }
//   };

//   useEffect(() => {
//     console.log(params);
//   }, []);

  return (

      <div className="container">
        <div className="form sign-up-container">
            <h1>
              Registrarse
            </h1>
            <form className="formulario">
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Nombre completo"
                  name="user"
                  value={signIn.user}
                  onChange={handleChange}
                />
           
                <div className="form-group">
                    <label>Correo Electrónico</label>
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
                        <label>Contraseña</label>
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
                    <p className="text-start fs-6 text-center">
                    ¿Ya tienes una cuenta?
                    <a href="/Login/" className="text-decoration-none">
                        Iniciar Sesion
                    </a>
                    </p>
                </div>
            </form>
          </div>  
      </div>
  
  );
};

export default Register;
