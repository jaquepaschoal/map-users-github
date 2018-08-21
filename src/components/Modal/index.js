import React, { Component, Fragment } from "react";
import { Container, Content, Cancel, Save } from "./style";

const Modal = ({ cancel }) => (
  <Container>
    <Content>
      <h4>Adicionar novo usuário</h4>
      <form action="post">
        <input type="text" placeholder="Usuário do Github" />
        <div>
          <Cancel onClick={cancel}>Cancelar</Cancel>
          <Save>Salvar</Save>
        </div>
      </form>
    </Content>
  </Container>
);

export default Modal;
