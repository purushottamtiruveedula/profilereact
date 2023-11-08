import { memo, SVGProps } from 'react';

const NextButtonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_9_49)'>
      <rect width={16} height={16} rx={8} fill='#56688B' />
      <path d='M6 4.94L9.09042 8L6 11.06L6.95142 12L11 8L6.95142 4L6 4.94Z' fill='white' />
    </g>
    <defs>
      <clipPath id='clip0_9_49'>
        <rect width={16} height={16} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(NextButtonIcon);
export { Memo as NextButtonIcon };
