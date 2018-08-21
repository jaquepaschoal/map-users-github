import React, { Component, Fragment } from "react";
import { Container, Icon, IconClose } from "./style";

const User = () => (
  <div>
    <Container>
      <div>
        <img
          src="https://avatars2.githubusercontent.com/u/487669?v=4"
          alt="alt"
        />
      </div>
      <section>
        <main>
          <h4>Fernando Daciuk</h4>
          <small>ferdaciuk</small>
        </main>
        <IconClose>
          <i class="fa fa-times-circle" />
        </IconClose>
        <Icon>
          <i className="fa fa-chevron-right" />
        </Icon>
      </section>
    </Container>
  </div>
);

export default User;
