export function edit(deliveryman) {
  return {
    type: "@deliveryman/EDIT",
    payload: { deliveryman },
  };
}

export function registerRequest(deliveryman) {
  return {
    type: "@deliveryman/REGISTER_REQUEST",
    payload: { deliveryman },
  };
}

export function updateRequest(deliveryman) {
  return {
    type: "@deliveryman/UPDATE_REQUEST",
    payload: { deliveryman },
  };
}

export function deleteRequest(deliverymanId) {
  return {
    type: "@deliveryman/DELETE_REQUEST",
    payload: { deliverymanId },
  };
}
