export function edit(recipient) {
  return {
    type: "@recipient/EDIT",
    payload: { recipient },
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
