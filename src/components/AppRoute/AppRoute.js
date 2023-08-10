import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import CreateRequest from "../Pages/CreateRequest/CreateRequest";
import Translation from '../Translation/Translation';

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} ></Route>
      <Route path="/create-request" element={<CreateRequest />} ></Route>
      <Route path="/translation" element={<Translation/>}></Route>
    </Routes>
  );
}

export default AppRoute;
