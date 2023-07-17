import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import ContainerCode from "./pages/code"
import ContainerEditVideo from "./pages/editvideo"
import ContainerEditImage from "./pages/editimage"
import ContainerGenerateAudio from "./pages/generateaudio"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/code" element={<ContainerCode/>}/>
      <Route path="/editvideo" element={<ContainerEditVideo/>}/>
      <Route path="/editimage" element={<ContainerEditImage/>}/>
      <Route path="/generate" element={<ContainerGenerateAudio/>}/>
    </Routes>
    </>
  )
}

export default App
