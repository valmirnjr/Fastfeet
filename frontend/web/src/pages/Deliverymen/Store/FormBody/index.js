import React from "react";
import { Input } from "@rocketseat/unform";

import AvatarInput from "~/components/Inputs/AvatarInput";
import { Container } from "./styles";

export default function FormBody() {
  return (
    <Container>
      <AvatarInput name="avatar_id" />

      <strong>Nome</strong>
      <Input name="name" placeholder="John Doe" />

      <strong>Email</strong>
      <Input name="email" type="email" placeholder="john@doe.com" />
    </Container>
  );
}
