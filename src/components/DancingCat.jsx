import catSvg from '../assets/images/cat.svg';
import '../styles/animations.css';

const NOTES = ['🎵', '🎶', '🎸', '🎹', '♪', '♫'];

export default function DancingCat({ isPlaying, duration }) {
  const animStyle = (name, dur, delay = 0, extra = {}) =>
    isPlaying
      ? {
          animation: `${name} ${dur * duration}s ease-in-out ${delay}s infinite`,
          willChange: 'transform',
          ...extra,
        }
      : { animation: 'idle-bounce 2s ease-in-out infinite', ...extra };

  return (
    <div className="cat-stage" style={{ position: 'relative', display: 'inline-block' }}>
      {/* Floating music notes */}
      {isPlaying &&
        NOTES.map((note, i) => (
          <span
            key={i}
            className="music-note"
            style={{
              position: 'absolute',
              fontSize: `${1.2 + (i % 3) * 0.4}rem`,
              left: `${10 + i * 14}%`,
              top: `${20 + (i % 2) * 10}%`,
              animation: `float-note ${1.5 + i * 0.3}s ease-out ${i * 0.4}s infinite`,
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            {note}
          </span>
        ))}

      {/* Cat image with dance animation */}
      <img
        src={catSvg}
        alt="춤추는 고양이"
        style={{
          width: 'clamp(160px, 30vw, 280px)',
          display: 'block',
          ...animStyle('dance', 0.8, 0, {
            filter: isPlaying
              ? undefined
              : 'drop-shadow(0 0 10px rgba(244,162,97,0.3))',
          }),
          ...(isPlaying && {
            animation: `dance ${0.8 * duration}s ease-in-out infinite, glow ${1.2 * duration}s ease-in-out infinite`,
          }),
        }}
      />

      {/* Shadow underneath */}
      <div
        style={{
          width: '60%',
          height: '12px',
          background: 'radial-gradient(ellipse, rgba(0,0,0,0.4) 0%, transparent 70%)',
          margin: '-6px auto 0',
          borderRadius: '50%',
          animation: isPlaying
            ? `idle-bounce ${0.8 * duration}s ease-in-out infinite`
            : undefined,
          transform: isPlaying ? undefined : 'scaleX(0.9)',
          transition: 'transform 0.3s',
        }}
      />
    </div>
  );
}
