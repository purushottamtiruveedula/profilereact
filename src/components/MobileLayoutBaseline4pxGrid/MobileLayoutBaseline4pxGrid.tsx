import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse1Icon } from './Ellipse1Icon';
import { IosStatusBarBlackIcon } from './IosStatusBarBlackIcon';
import classes from './MobileLayoutBaseline4pxGrid.module.css';
import { MyProfile_Property1Default } from './MyProfile_Property1Default/MyProfile_Property1Default';
import { Navigation } from './Navigation/Navigation';
import { NextButtonIcon } from './NextButtonIcon';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon3 } from './VectorIcon3';
import { VectorIcon4 } from './VectorIcon4';

interface Props {
  className?: string;
}
/* @figmaId 0:61 */
export const MobileLayoutBaseline4pxGrid: FC<Props> = memo(function MobileLayoutBaseline4pxGrid(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.nextButton}>
        <NextButtonIcon className={classes.icon6} />
      </div>
      <Navigation
        className={classes.navigation}
        swap={{
          vector: <VectorIcon className={classes.icon} />,
          vector2: <VectorIcon2 className={classes.icon2} />,
          vector3: <VectorIcon3 className={classes.icon3} />,
          vector4: <VectorIcon4 className={classes.icon4} />,
          ellipse1: <Ellipse1Icon className={classes.icon5} />,
        }}
      />
      <div className={classes.features}></div>
      <div className={classes.features2}></div>
      <div className={classes.features3}></div>
      <div className={classes.features4}></div>
      <div className={classes.features5}></div>
      <div className={classes.homeIndicator}></div>
      <div className={classes.rectangle576}></div>
      <div className={classes.iOSStatusBarBlack}>
        <IosStatusBarBlackIcon className={classes.icon7} />
      </div>
      <MyProfile_Property1Default
        className={classes.myProfile2}
        classes={{ rectangle564: classes.rectangle564 }}
        text={{
          myProfile: <div className={classes.myProfile}>My Profile</div>,
        }}
      />
      <div className={classes.rectangle565}></div>
      <div className={classes.pERSONALINFO}>PERSONAL INFO</div>
      <div className={classes.rectangle577}></div>
      <div className={classes.mariaFernandaSuarez}>María Fernanda Suárez</div>
      <div className={classes._14HoursAgo}>14 hours ago</div>
      <div className={classes.may222009}>May 22, 2009</div>
      <div className={classes._2130}>21:30</div>
      <div className={classes._9153459641}>(915) 345-9641</div>
      <div className={classes.rectangle567}></div>
      <div className={classes._95K}>95K</div>
      <div className={classes._124Lk}>1.24Lk</div>
      <div className={classes._18k}>18k</div>
      <div className={classes._10k}>10k</div>
      <div className={classes.lalithaHospital}>Lalitha Hospital</div>
      <div className={classes.apolloMSH}>Apollo MSH</div>
      <div className={classes.amarDiagn}>Amar Diagn..</div>
      <div className={classes.purviLab}>Purvi Lab</div>
      <div className={classes.rectangle584}></div>
      <div className={classes.rectangle585}></div>
      <div className={classes.rectangle588}></div>
      <div className={classes.rectangle589}></div>
      <div className={classes.rectangle566}></div>
      <div className={classes._80100}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>80/</span>
          <span className={classes.label2}>100</span>
        </p>
      </div>
      <div className={classes.heartHealth}>Heart Health</div>
      <div className={classes._100100}>
        <p className={classes.labelWrapper2}>
          <span className={classes.label3}>100/</span>
          <span className={classes.label4}>100</span>
        </p>
      </div>
      <div className={classes.healthInsurance}>Health Insurance</div>
      <div className={classes.rectangle581}></div>
      <div className={classes.rectangle583}></div>
      <div className={classes.rectangle582}></div>
      <div className={classes.rectangle5842}></div>
      <div className={classes.totalBudget}>Total Budget</div>
      <div className={classes.heartBeat}>Heart beat</div>
      <div className={classes.active}>Active </div>
      <div className={classes._180bpm}>
        <p className={classes.labelWrapper3}>
          <span className={classes.label5}>180</span>
          <span className={classes.label6}>bpm</span>
        </p>
      </div>
      <div className={classes._120bpm}>
        <p className={classes.labelWrapper4}>
          <span className={classes.label7}>120</span>
          <span className={classes.label8}>bpm</span>
        </p>
      </div>
      <div className={classes.rest}>Rest</div>
      <div className={classes._120bpm2}>
        <p className={classes.labelWrapper5}>
          <span className={classes.label9}>120</span>
          <span className={classes.label10}>bpm</span>
        </p>
      </div>
      <div className={classes.sleep}>Sleep</div>
      <div className={classes.heartBeat2}>Heart beat</div>
      <div className={classes.running}>Running</div>
      <div className={classes._210bpm}>
        <p className={classes.labelWrapper6}>
          <span className={classes.label11}>210</span>
          <span className={classes.label12}>bpm</span>
        </p>
      </div>
      <div className={classes._160bpm}>
        <p className={classes.labelWrapper7}>
          <span className={classes.label13}>160</span>
          <span className={classes.label14}>bpm</span>
        </p>
      </div>
      <div className={classes.walking}>Walking</div>
      <div className={classes._200bpm}>
        <p className={classes.labelWrapper8}>
          <span className={classes.label15}>200</span>
          <span className={classes.label16}>bpm</span>
        </p>
      </div>
      <div className={classes.cycling}>Cycling</div>
      <div className={classes.lifesaversOneOnOne}></div>
      <div className={classes.stuckAtHomeHealth}></div>
      <div className={classes.rectangle578}></div>
      <div className={classes._5060}>
        <p className={classes.labelWrapper9}>
          <span className={classes.label17}>50/</span>
          <span className={classes.label18}>60</span>
        </p>
      </div>
      <div className={classes.healthPoints}>Health Points</div>
      <div className={classes.rectangle579}></div>
      <div className={classes.rectangle580}></div>
      <div className={classes.medicine}>Medicine</div>
      <div className={classes.checkup}>Checkup</div>
      <div className={classes._80}>80%</div>
      <div className={classes._90}>90%</div>
      <div className={classes.lifesaversMedication}></div>
      <div className={classes.openPeepsStanding}></div>
    </div>
  );
});
