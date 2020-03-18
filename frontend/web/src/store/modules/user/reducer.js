import produce from "immer";

const INITIAL_SATE = {
  profile: null,
};

export default function user(state = INITIAL_SATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@auth/SIGN_IN_SUCCESS": {
        draft.profile = action.payload.user;
        break;
      }
      default:
    }
  });
}
