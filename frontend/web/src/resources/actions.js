import { MdVisibility, MdModeEdit, MdDeleteForever } from "react-icons/md";

export default new Map([
  [
    "visualize",
    {
      name: "Visualizar",
      icon: MdVisibility,
      color: "#8E5BE8",
    },
  ],
  [
    "edit",
    {
      name: "Editar",
      icon: MdModeEdit,
      color: "#4D85EE",
    },
  ],
  [
    "delete",
    {
      name: "Excluir",
      icon: MdDeleteForever,
      color: "#DE3B3B",
    },
  ],
  [
    "cancel",
    {
      name: "Cancelar encomenda",
      icon: MdDeleteForever,
      color: "#DE3B3B",
    },
  ],
]);
