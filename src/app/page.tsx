import NavBar from "@/components/NavBar";
import Section from "../components/Section";
import Typography from "../components/Typography";
import Contact from "../components/pages/Contact";
import Home from "../components/pages/Home";
import Reception from "../components/pages/Reception";
import Waiting from "../components/pages/Waiting";
import Wedding from "../components/pages/Wedding";

export default function App() {
  return (
    <>
      <Home />
      <Wedding />
      <Reception />
      <Waiting />
      <Contact />
    </>
  );
}
