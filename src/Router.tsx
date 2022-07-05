import { Route, Routes } from "react-router-dom";
import { Home } from './pages/Home'
import { LogIn } from "./pages/LogIn";
import { SignIn } from "./pages/SignIn";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/log-in" element={<LogIn />} />
    </Routes>
  )
}