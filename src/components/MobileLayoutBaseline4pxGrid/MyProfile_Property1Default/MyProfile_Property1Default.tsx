import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconArtworkIcon } from './IconArtworkIcon';
import classes from './MyProfile_Property1Default.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle564?: string;
    root?: string;
  };
  text?: {
    myProfile?: ReactNode;
  };
}
/* @figmaId 0:28 */
export const MyProfile_Property1Default: FC<Props> = memo(function MyProfile_Property1Default(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle564 || ''} ${classes.rectangle564}`}></div>
      {props.text?.myProfile != null ? props.text?.myProfile : <div className={classes.myProfile}>My Profile</div>}
      <div className={classes.rectangle565}></div>
      <div className={classes.iconNext}>
        <div className={classes.iconArtwork}>
          <IconArtworkIcon className={classes.icon} />
        </div>
      </div>
    </div>
  );
});
