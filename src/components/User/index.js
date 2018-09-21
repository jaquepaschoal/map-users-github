import React from "react";
import { Container, Icon, IconClose } from "./style";

const User = ({ id, img, alt, name, user, remove }) => (
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
        <IconClose onClick={remove}>
          <i className="fa fa-times-circle" id={id} />
        </IconClose>
        <Icon>
          <i className="fa fa-chevron-right" />
        </Icon>
      </section>
    </Container>
  </div>
);

export default User;
