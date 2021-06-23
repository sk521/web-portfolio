import { Home } from './sections/Home';
import { About } from './sections/About';
import { Work } from './sections/Work';
import { Contact } from './sections/Contact';
import { Skill } from './sections/Skill';
import './Main.css'

export const Main = () => {
  return (
    <div className="Main">
      <Home />
      <About />
      <Work />
      <Skill />
      <Contact />
    </div>
  )
};
