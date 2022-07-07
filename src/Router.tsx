import { Route, Routes } from "react-router-dom";
import { Adopt } from "./pages/Adopt";
import { Home } from './pages/Home'
import { LogIn } from "./pages/LogIn";
import { MessagePage } from "./pages/MessagePage";
import { Profile } from "./pages/Profile";
import { SignIn } from "./pages/SignIn";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/adopt/adoption-list" element={<Adopt />} />
      <Route path="/adopt/adoption-message" element={<MessagePage />} />
      <Route path="/adopt/profile" element={<Profile />} />
    </Routes>
  )
}