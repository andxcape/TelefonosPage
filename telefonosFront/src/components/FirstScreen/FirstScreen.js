import React from "react";
import "./firstScreen.css";

export const FirstScreen = () => {
  return (
    <>
      <img
        src="https://img.freepik.com/free-vector/simple-blank-red-background-business_53876-120509.jpg?w=1380&t=st=1667228185~exp=1667228785~hmac=555474c02068967713085e211b8a47ed46dd696724a5ff8c3f61955f0c609963"
        height="94%"
        width='100%'
        alt="MDB Logo"
        loading="lazy"
        style={{ objectFit: "cover", position: "absolute" }}
      />
      <div className="bg">

        <div className="title" style={{position: "absolute"}}> <a> Telefonos S.A </a>
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
