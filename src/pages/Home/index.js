import React, { useEffect, useState } from "react";

import api from "../../services/api.js";

const Home = () => {
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    api.get("/api/materia").then((res) => {
      setMaterias(res.data);
    });
  }, []);

  return (
    <>
      <h1>Hello World</h1>

      {materias.map((materia) => (
        <div key={materia.Id}>
          <span>{materia.Nome}</span>
          <p>{materia.Descricao}</p>
          <p>{materia.QtdAulas}</p>
          <p>{materia.CargaHoraria}</p>
        </div>
      ))}
    </>
  );
};

export default Home;
