import {configureStore} from '@reduxjs/toolkit';
import authSlice from './AuthStore/authSlice';
import chupixAppSlice from './ChupixAppStore/ChupixAppSlice';
import CartSlice from './CartStore/CartSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    app: chupixAppSlice,
    cart: CartSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
