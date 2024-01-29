import { Navigate } from "react-router-dom";

export const ProtectedRoute = (props) => {
  if (!props.isAllowed) {
    return <Navigate to="/" replace={true} />;
  }

  return props.children;
};
