import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { homePageRoutes } from "./routes/home-page.routes";
import "./theme/theme.css";
import queryClient from "./utils/query-client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [...homePageRoutes],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
