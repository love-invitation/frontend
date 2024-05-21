import { StarIconProps } from './StarIcon.type';

const StarIcon = ({
  size = '3.2rem',
  fill = '#FCD240',
  className = '',
  ...rest
}: StarIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...rest}
    >
      <path
        d='M16.0182 4.0952L18.0716 8.20187C18.3516 8.77353 19.0982 9.32187 19.7282 9.42687L23.4499 10.0452C25.8299 10.4419 26.3899 12.1685 24.6749 13.8719L21.7816 16.7652C21.2916 17.2552 21.0232 18.2002 21.1749 18.8769L22.0032 22.4585C22.6566 25.2935 21.1516 26.3902 18.6432 24.9085L15.1549 22.8435C14.5249 22.4702 13.4866 22.4702 12.8449 22.8435L9.35656 24.9085C6.85989 26.3902 5.34323 25.2819 5.99656 22.4585L6.82489 18.8769C6.97656 18.2002 6.70823 17.2552 6.21823 16.7652L3.32489 13.8719C1.62156 12.1685 2.16989 10.4419 4.54989 10.0452L8.27156 9.42687C8.88989 9.32187 9.63656 8.77353 9.91656 8.20187L11.9699 4.0952C13.0899 1.86687 14.9099 1.86687 16.0182 4.0952Z'
        fill={fill}
      />
    </svg>
  );
};

export default StarIcon;
