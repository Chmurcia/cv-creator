import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NoPageFound from "./pages/NoPageFound";
import { Redirect } from "./ui/Redirect";
import { Nav } from "./ui/Nav";
import RulesCV from "./pages/RulesCV";
import Editor from "./pages/Editor";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Redirect />} />
          <Route path="/home" element={<Home />} />
          <Route path="/rules" element={<RulesCV />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
