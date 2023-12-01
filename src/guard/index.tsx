import { Navigate, Outlet, useLocation } from 'react-router-dom';
import TokenService from 'services/token.service';

function RequireAuth() {
  const user = TokenService.getUser();
  let location = useLocation() as any;
  let from = location?.state?.from?.pathname || '/';

  if (!user?.token) {
    return <Navigate to="/login" state={{ from }} replace />;
  }

  return <Outlet />;
}

export default RequireAuth;
