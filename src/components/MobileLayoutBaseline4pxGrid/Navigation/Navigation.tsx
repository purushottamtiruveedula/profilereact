import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Home } from '../Home/Home';
import { Profile } from '../Profile/Profile';
import { Saved } from '../Saved/Saved';
import { Search } from '../Search/Search';
import { Ellipse1Icon } from './Ellipse1Icon';
import classes from './Navigation.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vector?: ReactNode;
    vector2?: ReactNode;
    vector3?: ReactNode;
    vector4?: ReactNode;
    ellipse1?: ReactNode;
  };
}
/* @figmaId 0:3 */
export const Navigation: FC<Props> = memo(function Navigation(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Home
        className={classes.home}
        classes={{ vector: classes.vector }}
        swap={{
          vector: props.swap?.vector,
        }}
      />
      <Search
        className={classes.search}
        classes={{ vector: classes.vector2 }}
        swap={{
          vector: props.swap?.vector2,
        }}
      />
      <Saved
        className={classes.saved}
        classes={{ vector: classes.vector3 }}
        swap={{
          vector: props.swap?.vector3,
        }}
      />
      <Profile
        className={classes.profile}
        classes={{ vector: classes.vector4 }}
        swap={{
          vector: props.swap?.vector4,
        }}
      />
      <div className={classes.ellipse1}>{props.swap?.ellipse1 || <Ellipse1Icon className={classes.icon} />}</div>
    </div>
  );
});
