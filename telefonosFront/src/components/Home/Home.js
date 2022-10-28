import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";
import Swal from "sweetalert2";

export const Home = () => {
  const [horaIn, setHoraIn] = useState("");
  const [horaOut, setHoraOut] = useState("");
  const [idUs, setIdUs] = useState("");

  const [valores, setValores] = useState({
    numero: "",
    descripcion: "",
    solucion: "",
    horaInicio: "",
    horaFin: "",
    tipo: "",
    finalizada: "",
    idUsuario: localStorage.getItem("id"),
  });

  const { numero, descripcion, solucion, tipo, finalizada } = valores;

  useEffect(() => {
    setIdUs(localStorage.getItem("id"));
  }, []);

  function horaInicioCall() {
    setValores({ ...valores, horaInicio: new Date().toLocaleTimeString() });
  }

  const guardarCall = () => {
    axios
      .post("http://localhost:3000/api/guardarLlamada", valores)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function entrada() {
    let obj = { horaEntrada: horaIn };
    axios
      .put("http://localhost:3000/api/horaEntrada/" + idUs, obj)
      .then((response) => {
        Swal.fire({ icon: "success", text: "Hora de entrada marcada" }).then(
          () => {}
        );
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function salida() {
    let obj = { horaSalida: horaOut };
    axios
      .put("http://localhost:3000/api/horaSalida/" + idUs, obj)
      .then((response) => {
        Swal.fire({ icon: "success", text: "Hora de salida marcada" }).then(
          () => {}
        );
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <section className="jornada">
        <button
          type="button"
          className="btn btn-light"
          onClick={() => {
            setHoraIn(new Date().toLocaleTimeString());
            entrada();
          }}
        >
          Entrada
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            setHoraOut(new Date().toLocaleTimeString());
            salida();
          }}
        >
          Salida
        </button>

        <div className="bt">
          <button
            type="button"
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={horaInicioCall}
          >
            Iniciar una nueva llamada
          </button>
        </div>
      </section>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Llamada
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                name="numero"
                type="Number"
                placeholder="Número T."
                className="form-control"
                onChange={(e) => {
                  setValores({ ...valores, numero: e.target.value });
                }}
                value={numero}
              />
            </div>
            <div className="modal-body">
              <input
                name="descripcion"
                type="Text"
                placeholder="Descripción"
                className="form-control"
                onChange={(e) => {
                  setValores({ ...valores, descripcion: e.target.value });
                }}
                value={descripcion}
              />
            </div>
            <div className="modal-body">
              <input
                name="solucion"
                type="Text"
                placeholder="Solución"
                className="form-control"
                onChange={(e) => {
                  setValores({ ...valores, solucion: e.target.value });
                }}
                value={solucion}
              />
            </div>
            <div className="modal-body">
              <select
                type="text"
                className="form-select"
                onChange={(e) => {
                  setValores({ ...valores, tipo: e.target.value });
                }}
                value={tipo}
              >
                <option selected>Carrera</option>
                <option value="Informática">Informática</option>
                <option value="Dibujo">Dibujo</option>
                <option value="Mecánica">Mecánica</option>
                <option value="Electrónica">Electrónica</option>
                <option value="Electricidad">Electricidad</option>
                <option value="Bachiller">Bachiller</option>
              </select>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={guardarCall}
              >
                Guardar Llamada
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="search">
        <div className="input-group">
          <div className="form-outline">
            <input type="date" id="form1" className="form-control" />
          </div>
          <button type="button" className="btn btn-danger">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      
    </>
  );
};
