import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: "fastfeet",
      storage,
      whitelist: ["auth", "user", "delivery", "deliveryman", "recipient"],
    },
    reducers
  );

  return persistedReducer;
};
