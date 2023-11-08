import { memo, SVGProps } from 'react';

const IconArtworkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.090848 1.64549L5.59741 7.00049L0.090848 12.3555L1.7861 14.0005L8.99994 7.00049L1.7861 0.000490189L0.090848 1.64549Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(IconArtworkIcon);
export { Memo as IconArtworkIcon };
