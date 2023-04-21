import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/css/style.css";

//Components
import Home from "./components/Home";
import AddProjectMain from "./components/AddProject/AddProjectMain";
import AlertProvider from "./context/alert";
import UpdateProjectMain from "./components/UpdateProject/UpdateProjectMain";

function App() {
  return (
    <BrowserRouter>
      <AlertProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<AddProjectMain />}></Route>
          <Route
            path="/update/:projectid"
            element={<UpdateProjectMain />}
          ></Route>
        </Routes>
      </AlertProvider>
    </BrowserRouter>
  );
}

export default App;
