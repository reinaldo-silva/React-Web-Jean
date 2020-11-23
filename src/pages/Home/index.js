import React, { useEffect, useState } from "react";
import api from "../../services/api.js";
import { toast } from "react-toastify";
import {
  Container,
  Title,
  Card,
  Text,
  Label,
  Add,
  Modal,
  Input,
  Body,
  Close,
  Fundo,
} from "./styles.js";

import ImgLogoReact from "../../assets/img/React-logo.svg";
import Book from "../../assets/img/book.svg";
import BookBlue from "../../assets/img/book-blue.svg";

const Home = () => {
  const [materias, setMaterias] = useState([]);
  const [nome, setNome] = useState("");
  const [codigoMateria, setCodigoMateria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [qtdAulas, setQtdAulas] = useState("");
  const [cargaHoraria, setCargaHoraria] = useState("");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    api.get("/api/materia").then((res) => {
      setMaterias(res.data);
    });
  }, []);

  function limpaData() {
    setNome("");
    setCodigoMateria("");
    setDescricao("");
    setQtdAulas("");
    setCargaHoraria("");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/api/Materia", {
        nome,
        codigoMateria,
        descricao,
        qtdAulas,
        cargaHoraria,
      });

      toast.success("Matéria cadastrada com sucesso!");
      limpaData();
      setOpenModal(false);
      api.get("/api/materia").then((res) => {
        setMaterias(res.data);
      });
    } catch (err) {
      toast.error("Erro ao cadastrar a matéria");
    }
  }

  return (
    <>
      <Container>
        <div className="sec1">
          <img src={ImgLogoReact} alt="React logo" />
          <Title>Lista de matérias</Title>

          <button>
            <Add
              onClick={() => {
                setOpenModal(true);
              }}
            />
          </button>
        </div>
        <section className="sec2">
          {materias.map((materia) => (
            <Card key={materia.Id}>
              <div>
                <img src={Book} alt="Imagem livros" />
                <Title bolder={true} color={"#000"} width={"auto"}>
                  {materia.Nome}
                </Title>
              </div>
              <section>
                <Text>{materia.Descricao}</Text>
                <Label>Qtd. aulas</Label>
                <Text>{materia.QtdAulas} aulas</Text>
                <Label>Carga Horária</Label>
                <Text>{materia.CargaHoraria} horas</Text>
              </section>
            </Card>
          ))}
          <Fundo display={openModal}>
            <button className="close">
              <Close
                onClick={() => {
                  setOpenModal(false);
                }}
              />
            </button>
          </Fundo>
        </section>
        <section className="footer">
          <Title color={"#000"} bolder={true}>
            Desenvolvido pelos Deus Supremos do 3° ano
          </Title>
          <Text>Eduardo Picolé</Text>
          <Text>João Guaíra</Text>
          <Text>Reinaldo OI CASADA?</Text>
          <Text>Vinicius do Rock</Text>
        </section>
      </Container>

      <Modal open={openModal}>
        <form onSubmit={handleSubmit}>
          <div className="header">
            <img src={BookBlue} alt="Livro matéria" />
            <Title width={"auto"}>Adicionar nova matéria</Title>
          </div>
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
      </Modal>
    </>
  );
};

export default Home;
