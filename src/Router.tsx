import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./firebase/ProtectedRoute";
import { Adopt } from "./pages/Adopt";
import { Home } from './pages/Home'
import { LogIn } from "./pages/LogIn";
import { MessagePage } from "./pages/MessagePage";
import { Profile } from "./pages/Profile";
import { SignIn } from "./pages/SignIn";
import { UserAuthContextProvider } from "./firebase/UserAuthContext";
import { MessageHistory } from "./pages/MessageHistory";

export function Router() {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/adopt/adoption-list" element={<ProtectedRoute> <Adopt /> </ProtectedRoute>} />
        <Route path="/adopt/adoption-message=:uid" element={<ProtectedRoute> <MessagePage /> </ProtectedRoute>} />
        <Route path="/adopt/profile=:uid" element={<ProtectedRoute> <Profile /> </ProtectedRoute>} />
        <Route path="/adopt/message-history" element={<ProtectedRoute> <MessageHistory /> </ProtectedRoute>} />
      </Routes>
    </UserAuthContextProvider>
  )
}