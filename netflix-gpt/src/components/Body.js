import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { useEffect } from "react";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    const auth = getAuth();
    // it's like an eventListener which I want to get registered only once. thus we have written this code in useEffect.
    // We could have written it in any component, doesn't matter. But putting in body makes more sense since this component
    // will always be rendered
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in or after sign up
        const { uid, email, displayName, photoURL } = user;
        //updating the store and route to page that comes after login
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
      } else {
        // User is signed out
        // updating the store
        dispatch(removeUser({}));
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
