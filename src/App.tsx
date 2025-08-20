import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá Mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A doloremque
        iusto possimus animi tempora harum ducimus voluptate facere nam
        dignissimos repudiandae quaerat, impedit alias praesentium beatae illo
        tempore nemo porro!
      </p>
    </>
  );
}
