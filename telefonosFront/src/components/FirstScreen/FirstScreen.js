import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./firstScreen.css";

export const FirstScreen = () => {
  const Navegacion = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      Navegacion("/home");
    }
  });

  return (
    <>
      <img
        src="https://img.freepik.com/vector-gratis/ondulado-rojo-fondo-semitono_1409-1274.jpg?w=900&t=st=1667361110~exp=1667361710~hmac=2e04f592ca4382c518f9c897509a6436cd5394b7c5ed078b178aa2c461bb6971"
        height="94%"
        width="100%"
        alt="MDB Logo"
        loading="lazy"
        style={{ objectFit: "cover", position: "absolute" }}
      />
      <div className="bg">
        <div className="title" style={{ position: "absolute" }}>
          {" "}
          <a> Telefonos S.A </a>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3616/3616215.png"
            height="90"
            alt="MDB Logo"
            loading="lazy"
            style={{ marginTop: -15 + "px" }}
          />
        </div>
      </div>
    </>
  );
};
