import "../App.css";
import { useAuth } from "../contexts/authentication";
import AuthenticatedAdmin from "./AuthenticatedAdmin";
import AuthenticatedUser from "./AuthenticatedUser";

function AuthenticatedApp() {
  const { isToken } = useAuth();

  return isToken.role === "admin" ? (
    <AuthenticatedAdmin />
  ) : (
    <AuthenticatedUser />
  );
}

export default AuthenticatedApp;
