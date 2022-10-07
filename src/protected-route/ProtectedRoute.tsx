import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type routeType = "public-only" | "public" | "protected";

interface Props {
  children?: ReactNode
  routeType: routeType
}

const ProtectedRoute = ({ children, routeType }: Props): JSX.Element => {
  const token: any = localStorage.getItem('authToken')  || ''
  const authToken: any = localStorage.getItem('authToken') ? JSON.parse(token) : ''


  if (routeType === "public-only" && authToken ) return <Navigate to="/movies" />
  if (routeType === "protected" && !authToken) return <Navigate to="/" />
  return <>{ children }</>;
};

export default ProtectedRoute;