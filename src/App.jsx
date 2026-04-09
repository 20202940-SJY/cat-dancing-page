import './styles/global.css';
import './App.css';
import Layout from './components/Layout';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';

export default function App() {
  const { isPlaying, speed, toggle, changeSpeed, duration } = useAnimation();

  return (
    <Layout>
      <div
        className="cat-container"
        onClick={toggle}
        role="button"
        tabIndex={0}
        aria-label={isPlaying ? '고양이 댄스 정지하기' : '고양이 댄스 시작하기'}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggle()}
      >
        <DancingCat isPlaying={isPlaying} duration={duration} />
        <div className="click-hint">{isPlaying ? '클릭해서 멈추기' : '클릭해서 춤추기 🕺'}</div>
      </div>

      <AnimationControls
        isPlaying={isPlaying}
        speed={speed}
        onToggle={toggle}
        onSpeedChange={changeSpeed}
      />
    </Layout>
  );
}
