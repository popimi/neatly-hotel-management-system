import "../App.css";
import { useAuth } from "../contexts/authentication";
import AuthenticatedAdmin from "./AuthenticatedAdmin";
import AuthenticatedUser from "./AuthenticatedUser";

function AuthenticatedApp() {
  const { state } = useAuth();
  return state?.user?.role === "admin" ? (
    <AuthenticatedAdmin />
  ) : (
    <AuthenticatedUser />
  );
}

export default AuthenticatedApp;
