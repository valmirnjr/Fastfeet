import produce from "immer";

const INITIAL_SATE = {
  info: {},
};

export default function deliveryman(state = INITIAL_SATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@deliveryman/EDIT": {
        draft.info = action.payload.deliveryman;
        break;
      }
      default:
    }
  });
}
