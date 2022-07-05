import { Route, Routes } from "react-router-dom";
import { Home } from './pages/Home'
import { LogIn } from "./pages/LogIn";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  )
}