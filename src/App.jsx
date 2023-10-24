
import { Outlet, Route, Routes} from "react-router-dom"
import { AllList } from './components/AllList'
import { NavBar } from './navbar/NavBar';

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
      </Route>
    </Routes>
  );
}


export default App;
