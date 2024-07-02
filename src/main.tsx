import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout.tsx";
import NoteLayout from "./layouts/NoteLayout.tsx";
import EditNote from "./routes/EditNote.tsx";
import { ErrorPage } from "./routes/ErrorPage.tsx";
import NewNote from "./routes/NewNote.tsx";
import Note from "./routes/Note.tsx";
import NoteList from "./routes/NoteList.tsx";
import { store } from "./store/store.ts";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <NoteList />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/new",
        element: <NewNote />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/:id",
        element: <NoteLayout />,
        children: [
          {
            index: true,
            element: <Note />,
          },
          {
            path: "edit",
            element: <EditNote />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
