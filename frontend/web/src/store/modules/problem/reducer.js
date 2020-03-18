import produce from "immer";

const INITIAL_SATE = {
  info: {},
};

export default function recipient(state = INITIAL_SATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@recipient/EDIT": {
        draft.info = action.payload.recipient;
        break;
      }
      default:
    }
  });
}
