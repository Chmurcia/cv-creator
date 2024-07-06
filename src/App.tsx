import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NoPageFound from "./pages/NoPageFound";
import { Nav } from "./components/Nav";
import RulesCV from "./pages/RulesCV";
import Editor from "./pages/Editor";
import { Toaster } from "react-hot-toast";
import { Menu } from "./ui/Menu";
import { useState } from "react";
import { Overlay } from "./ui/Overlay";

function App() {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <BrowserRouter>
        <Nav setShow={setShow} />
        {show && <Menu setShow={setShow} />}
        {show && <Overlay />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<RulesCV />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" />
    </>
  );
}

export default App;
