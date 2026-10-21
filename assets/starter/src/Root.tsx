import { Composition } from 'remotion';
import { ScienceVideo } from './ScienceVideo';
import plan from './scene-plan.json';

export const RemotionRoot: React.FC = () => (
  <Composition id="ScienceVideo" component={ScienceVideo}
    width={plan.width} height={plan.height} fps={plan.fps}
    durationInFrames={plan.durationInFrames} />
);
