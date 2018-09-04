import React from "react";
import { Container, Content, Cancel, Save } from "./style";

const Modal = ({ cancel, value, submit, change }) => (
  <Container>
    <Content>
      <h4>Adicionar novo usuário</h4>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Usuário do Github"
          value={value}
          onChange={change}
        />
        <div>
          <Cancel onClick={cancel}>Cancelar</Cancel>
          <Save type="submit">Salvar</Save>
        </div>
      </form>
    </Content>
  </Container>
);

export default Modal;
