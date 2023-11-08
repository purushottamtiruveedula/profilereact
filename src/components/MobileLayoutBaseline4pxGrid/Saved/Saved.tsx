import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Saved.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
  classes?: {
    vector?: string;
    root?: string;
  };
  swap?: {
    vector?: ReactNode;
  };
}
/* @figmaId 0:15 */
export const Saved: FC<Props> = memo(function Saved(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vector2}>{props.swap?.vector || <VectorIcon className={classes.icon} />}</div>
    </div>
  );
});
