// import ModalLogin from "./components/ModalLogin/ModalLogin";
"use client";
import { ToastContainer } from "react-toastify";

import Dashboard from "./dashboard/Dashboard";

export default function Home() {
  return (
    <>
      <ToastContainer />
      <Dashboard />
    </>
  );
}
