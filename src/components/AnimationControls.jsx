export default function AnimationControls({ isPlaying, speed, onToggle, onSpeedChange }) {
  return (
    <div className="controls">
      {/* Play/Pause button */}
      <button
        className={`btn-toggle ${isPlaying ? 'playing' : 'paused'}`}
        onClick={onToggle}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
      >
        <span className="btn-icon">{isPlaying ? '⏸' : '▶️'}</span>
        <span className="btn-label">{isPlaying ? '정지' : '시작'}</span>
      </button>

      {/* Speed controls */}
      <div className="speed-controls" role="group" aria-label="애니메이션 속도">
        {['slow', 'normal', 'fast'].map((s) => (
          <button
            key={s}
            className={`btn-speed ${speed === s ? 'active' : ''}`}
            onClick={() => onSpeedChange(s)}
            aria-pressed={speed === s}
            aria-label={`속도: ${s === 'slow' ? '느리게' : s === 'normal' ? '보통' : '빠르게'}`}
          >
            {s === 'slow' ? '🐢 느리게' : s === 'normal' ? '🐱 보통' : '🚀 빠르게'}
          </button>
        ))}
      </div>
    </div>
  );
}
