import React, { useState, useEffect } from "react";
import api from "../../services/api";

import { Container, Input, Body } from "./styles.js";
import { Title, Label } from "../../pages/Home/styles.js";

import Book from "../../assets/img/book.svg";

const Modal = (props) => {
  const [nome, setNome] = useState("");
  const [codigoMateria, setCodigoMateria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [qtdAulas, setQtdAulas] = useState("");
  const [cargaHoraria, setCargaHoraria] = useState("");
  const [openModal, setOpenModal] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.put("/materia", {
        nome,
        codigoMateria,
        descricao,
        qtdAulas,
        cargaHoraria,
      });

      alert("Cadastro realizado");
      setOpenModal(true);
    } catch (err) {
      alert(err);
    }
  }

  useEffect(() => {
    setOpenModal(true);
  }, []);

  return (
    <Container open={openModal}>
      <div className="header">
        <img src={Book} alt="Livro matéria" />
        <Title width={"auto"}>Adicionar nova matéria</Title>
      </div>
      <form onSubmit={handleSubmit}>
        <Body>
          <section>
            <Input>
              <Label>Nome</Label>
              <input
                type="text"
                placeholder="Ex: Biologia"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </Input>

            <Input width="70%" widthLabel="50%">
              <Label>Código da Matéria</Label>
              <input
                type="text"
                placeholder="Ex: 10"
                value={codigoMateria}
                onChange={(e) => setCodigoMateria(e.target.value)}
              />
            </Input>

            <Input>
              <Label>Descrição</Label>
              <textarea
                type="text"
                placeholder="Descreva informações sobre a matéria"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </Input>
          </section>

          <section>
            <Input width="70%" widthLabel="50%">
              <Label>Qtd. Aulas</Label>
              <input
                type="text"
                placeholder="Ex: 10"
                value={qtdAulas}
                onChange={(e) => setQtdAulas(e.target.value)}
              />
            </Input>

            <Input width="70%" widthLabel="50%">
              <Label>Carga Horária</Label>
              <input
                type="text"
                placeholder="Ex: 30"
                value={cargaHoraria}
                onChange={(e) => setCargaHoraria(e.target.value)}
              />
            </Input>
          </section>

          <button type="submit">Salvar Matéria</button>
        </Body>
      </form>
    </Container>
  );
};

export default Modal;
