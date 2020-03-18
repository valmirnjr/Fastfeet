import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "~/store/modules/auth/actions";

import history from "~/services/history";
import logo from "~/assets/logo2x.png";

import { Container } from "./styles";

export default function Header() {
  const dispatch = useDispatch();
  function handleSignOut() {
    dispatch(signOut());
    history.push("/");
  }

  return (
    <Container>
      <nav>
        <img src={logo} alt="Fastfeet" />
        <menu>
          <NavLink to="/deliveries">ENCOMENDAS</NavLink>
          <NavLink to="/deliverymen">ENTREGADORES</NavLink>
          <NavLink to="/recipients">DESTINATÁRIOS</NavLink>
          <NavLink to="/problems">PROBLEMAS</NavLink>
        </menu>
      </nav>
      <aside>
        <strong>Admin Fastfeet</strong>
        <button type="button" onClick={handleSignOut}>
          sair do sistema
        </button>
      </aside>
    </Container>
  );
}
