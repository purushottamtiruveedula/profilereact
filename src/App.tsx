import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { MobileLayoutBaseline4pxGrid } from './components/MobileLayoutBaseline4pxGrid/MobileLayoutBaseline4pxGrid';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <MobileLayoutBaseline4pxGrid />
    </div>
  );
});
