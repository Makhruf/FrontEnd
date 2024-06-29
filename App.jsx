import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import IndukAyam from "./Pages/Induk-ayam";
import State from "./Pages/State";
import EventHandling from "./Pages/EventHandling";
import UseEffect from "./Pages/UseEffect";
import UpdateState from "./component/UpdateState";
import Animasi from "./component/Animasi";
import FetchApi from "./component/FetchApi";
import ReactContext from "./Pages/ReactContext";
import CreateMahasiswa from "./component/admin/CreateMahasiswa";
import GetMahasiswa from "./component/admin/GetMahasiswa";

function App() {
  return ( 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/IndukAyam" element={<IndukAyam />} />
      <Route path="/State" element={<State />} />
      <Route path="/EventHandling" element={<EventHandling />} />
      <Route path="/UseEffect" element={<UseEffect />} />
      <Route path="/UpdateState" element={<UpdateState />} />
      <Route path="/Animasi" element={<Animasi />} />
      <Route path="/FetchApi" element={<FetchApi />} />
      <Route path="/ReactContext" element={<ReactContext />} />
      <Route path="/GetMahasiswa" element={<GetMahasiswa/>} />
      <Route path="/Tambah" element={<CreateMahasiswa/>} />

    </Routes>
  );
}

export default App;
