import { BrowserRouter, Routes, Route } from "react-router-dom";
import Routing from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {Routing.map((prop, index) => 
          <Route
            key={index}
            path={prop.path}
            element={<prop.component />}
          />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
