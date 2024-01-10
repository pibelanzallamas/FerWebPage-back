import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
