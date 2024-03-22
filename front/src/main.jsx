/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom/client";
/* import dotenv from "dotenv"; */
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./routes/index.jsx";
import { RouterProvider } from "react-router-dom";

const queryClient = new QueryClient();

/* dotenv.config(); */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
