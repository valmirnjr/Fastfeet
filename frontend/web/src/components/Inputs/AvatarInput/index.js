import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useField } from "@rocketseat/unform";
import { MdInsertPhoto } from "react-icons/md";

import api from "~/services/api";
import DefaultAvatar from "~/components/DefaultAvatar";

import { Container, Avatar } from "./styles";

export default function AvatarInput() {
  const deliverymanName = useSelector(state => state.deliveryman.info.name);
  const location = useLocation();
  const isRegistering = location.state && location.state.isRegistering;

  const { defaultValue, registerField } = useField("avatar");
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  console.tron.log(file);
  console.tron.log(preview);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: "avatar_id",
        ref: ref.current,
        path: "dataset.file",
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();

    data.append("file", e.target.files[0]);

    const response = await api.post("files", data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  const CorrectAvatar = isRegistering ? (
    <Avatar>
      <MdInsertPhoto size={40} color="#ddd" />
      <strong>Adicionar foto</strong>
    </Avatar>
  ) : (
    <DefaultAvatar name={deliverymanName} size="150px" />
  );

  return (
    <Container>
      <label htmlFor="avatar">
        {preview ? <img src={preview} alt="" /> : CorrectAvatar}

        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
