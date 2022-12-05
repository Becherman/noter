import { createBrowserRouter } from "react-router-dom";
import { Root } from "./pages/root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: 'note/:id',
        element: <h1>New nested document</h1>,
      },
      {
        path: 'new',
        element: <h1>New Note</h1>
      }
    ]
  },
]);