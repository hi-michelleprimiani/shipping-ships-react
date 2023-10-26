
import { Outlet, Route, Routes} from "react-router-dom"
import { AllList } from './components/AllList'
import { NavBar } from './navbar/NavBar';
import { ShipList } from "./components/ShipList"
import { HaulerList } from "./components/HaulerList";
import { EditHauler } from "./forms/EditHauler";
import { DockList } from "./components/DockList";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<AllList />} />
        <Route path="shippingships" element={<ShipList />} />
        <Route path="haulingships" element={<HaulerList />} />
        <Route path="haulingships/:haulerId" element={<EditHauler />} />
        <Route path="docks" element={<DockList />} />
      </Route>
    </Routes>
  );
}


export default App;
