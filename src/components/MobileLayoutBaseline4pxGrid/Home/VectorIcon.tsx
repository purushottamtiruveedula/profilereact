import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M8 17V11H12V17H17V9H20L10 0L0 9H3V17H8Z' fill='black' />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
