import React from "react";
import { Container, Icon, IconClose } from "./style";

const User = ({ img, alt, name, user }) => (
  <div>
    <Container>
      <div>
        <img src={img} alt={alt} />
      </div>
      <section>
        <main>
          <h4>{name}</h4>
          <small>{user}</small>
        </main>
        <IconClose>
          <i className="fa fa-times-circle" />
        </IconClose>
        <Icon>
          <i className="fa fa-chevron-right" />
        </Icon>
      </section>
    </Container>
  </div>
);

export default User;
