import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main";
import { Profile } from "./pages/profile";
import { NotFound } from "./pages/notfound";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

export const AppRoutes = ({selectedUser}) => {
    
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route
        path="/profile"
        element={
          <ProtectedRoute isAllowed={selectedUser}>
            <Profile />
          </ProtectedRoute>
        }
      ></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};
