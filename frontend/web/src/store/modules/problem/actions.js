export function cancelRequest(problemId) {
  return {
    type: "@problem/CANCEL_REQUEST",
    payload: { problemId },
  };
}

export function registerRequest(recipient) {
  return {
    type: "@recipient/REGISTER_REQUEST",
    payload: { recipient },
  };
}

export function updateRequest(recipient) {
  return {
    type: "@recipient/UPDATE_REQUEST",
    payload: { recipient },
  };
}

export function deleteRequest(recipientId) {
  return {
    type: "@recipient/DELETE_REQUEST",
    payload: { recipientId },
  };
}
