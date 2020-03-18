export function edit(delivery) {
  return {
    type: "@delivery/EDIT",
    payload: { delivery },
  };
}

export function registerRequest(delivery) {
  return {
    type: "@delivery/REGISTER_REQUEST",
    payload: { delivery },
  };
}

export function updateRequest(delivery) {
  return {
    type: "@delivery/UPDATE_REQUEST",
    payload: { delivery },
  };
}

export function deleteRequest(deliveryId) {
  return {
    type: "@delivery/DELETE_REQUEST",
    payload: { deliveryId },
  };
}
