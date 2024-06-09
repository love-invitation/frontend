import { ImageIconProps } from './ImageIcon.type';

const ImageIcon = ({ size = '3.2rem', fill = 'black', className, ...rest }: ImageIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -960 960 960'
      fill={fill}
      className={className}
      {...rest}
    >
      <path d='M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z' />
    </svg>
  );
};

export default ImageIcon;
