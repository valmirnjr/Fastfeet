import produce from "immer";

const INITIAL_SATE = {
  info: {},
};

export default function delivery(state = INITIAL_SATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@delivery/EDIT": {
        draft.info = action.payload.delivery;
        break;
      }
      default:
    }
  });
}
