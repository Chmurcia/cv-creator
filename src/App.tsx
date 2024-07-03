import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NoPageFound from "./pages/NoPageFound";
import { Redirect } from "./ui/Redirect";
import { Nav } from "./ui/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Redirect />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
