import { Home } from './sections/Home';
import { About } from './sections/About';
import { Work } from './sections/Work';
import './Main.css'

export const Main = () => {
  return (
    <div className="Main">
      <Home />
      <About />
      <Work />
    </div>
  )
};
