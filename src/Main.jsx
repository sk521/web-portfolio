import { Home } from './sections/Home';
import { About } from './sections/About';
import './Main.css'

export const Main = () => {
  return (
    <div className="Main">
      <Home />
      <About />
    </div>
  )
};
