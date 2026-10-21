import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from 'remotion';
import plan from './scene-plan.json';

const labels = ['问题', '变化', '理解'];
const positions = [460, 960, 1460];
const clamp = { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' } as const;

export const ScienceVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const sceneIndex = plan.scenes.findIndex(s => frame >= s.from && frame < s.from + s.durationInFrames);
  const scene = plan.scenes[Math.max(0, sceneIndex)];
  const local = frame - scene.from;
  const textOpacity = interpolate(local, [0, 7, scene.durationInFrames - 7, scene.durationInFrames - 1], [0, 1, 1, 0], clamp);
  const progress = interpolate(frame, [12, 145], [0, 1], { ...clamp, easing: Easing.inOut(Easing.cubic) });

  return (
    <AbsoluteFill style={{ backgroundColor: '#0b1320', color: '#efece4',
      fontFamily: '"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif' }}>
      <div style={{ position: 'absolute', left: 120, top: 78, color: '#d4ff76', fontSize: 25, letterSpacing: 4 }}>
        VIBE SCIENCE VIDEO / 独立示例
      </div>
      <div style={{ position: 'absolute', top: 205, width: '100%', textAlign: 'center', opacity: textOpacity }}>
        <h1 style={{ fontSize: 76, margin: 0, fontWeight: 600 }}>{scene.title}</h1>
      </div>
      <svg viewBox="0 0 1920 1080" style={{ width: '100%', height: '100%' }}>
        <path d="M460 550 C650 550 770 550 960 550 S1270 550 1460 550" fill="none"
          stroke="#263644" strokeWidth={3} />
        <path d="M460 550 C650 550 770 550 960 550 S1270 550 1460 550" fill="none"
          stroke="#d4ff76" strokeWidth={5} pathLength={1} strokeDasharray={1} strokeDashoffset={1 - progress} />
        {positions.map((x, i) => {
          const enter = interpolate(frame, [i * 40, i * 40 + 18], [0, 1], clamp);
          const active = i === sceneIndex;
          return <g key={labels[i]} opacity={enter} transform={`translate(${x},550) scale(${0.85 + 0.15 * enter})`}>
            <circle r={100} fill="#101d2a" stroke={active ? '#d4ff76' : '#425365'} strokeWidth={active ? 4 : 2} />
            <text textAnchor="middle" dominantBaseline="central" fill={active ? '#d4ff76' : '#c6d0dc'} fontSize={43}>{labels[i]}</text>
            <text y={157} textAnchor="middle" fill="#728499" fontSize={24}>0{i + 1}</text>
          </g>;
        })}
        <circle cx={460 + 1000 * progress} cy={550} r={9} fill="#efece4" />
      </svg>
      <div style={{ position: 'absolute', bottom: 170, width: '100%', textAlign: 'center', fontSize: 36,
        color: '#b8c5d2', opacity: textOpacity }}>{scene.subtitle}</div>
      <div style={{ position: 'absolute', bottom: 65, left: 120, color: '#66788b', fontSize: 22 }}>
        制作流程示意 · 本示例由本项目独立编写
      </div>
    </AbsoluteFill>
  );
};
