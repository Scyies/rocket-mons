import { Navigate } from 'react-router-dom';
import { useUserAuth } from './UserAuthContext';

export function ProtectedRoute({children}: any) {
  let {user}: any = useUserAuth();
  if (!user) {
    return <Navigate to='/' />
  }
  return children;
}