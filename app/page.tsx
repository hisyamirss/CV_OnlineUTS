import "./syam-style.css";
import RiwayatPendidikan from './components/riwayatPendidikan'; 
import Hero from "./components/hero";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import WarnaFavorit from "./components/WarnaFavorit"; 
import ContactForm from './components/ContactForm'; 
import GalleryHobbies from "./components/Gallery";
import Skills from "./components/Skills";
import PersonalInfo from "./components/PersonalInfo";

export default function Gallery() {
  return (
    <section>
      <Hero />
      <PersonalInfo />
      <Skills />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <GalleryHobbies />
      <ContactForm />
      <WarnaFavorit />
    </section>
  )
}
