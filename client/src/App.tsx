import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/Home";

function App() {

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<HomePage/>}/>
    //     <Route path="*" element={<> 404 Not Found </>} />
    //   </Routes>
    // </BrowserRouter>
    <HomePage/>
  );
}

export default App;