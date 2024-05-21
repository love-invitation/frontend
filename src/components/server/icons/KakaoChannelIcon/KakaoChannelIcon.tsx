import { KakaoChannelIconProps } from './KakaoChannelIcon.type';

const KakaoChannelIcon = ({
  size = '3.2rem',
  className,
  textColor = '#FEE500',
  ...rest
}: KakaoChannelIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 36 37'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...rest}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.5001 3.5C8.93916 3.5 2 9.05885 2 15.9148C2 20.1786 4.68393 23.9374 8.77098 26.1731L7.05135 32.6866C6.89941 33.2621 7.53424 33.7209 8.02171 33.3874L15.5597 28.2289C16.1958 28.2926 16.8423 28.3297 17.5001 28.3297C26.0603 28.3297 33 22.7711 33 15.9148C33 9.05885 26.0603 3.5 17.5001 3.5Z'
        fill='black'
      />
      <path
        d='M15.7487 14.1371C15.4849 12.7547 14.3166 11.9859 12.9296 11.9933C11.0452 11.9859 9.65075 13.4052 9.64322 16C9.65075 18.6095 11.0528 20.0141 12.9296 20.0067C14.3015 20.0141 15.4623 19.2601 15.7487 17.8925L17.4221 17.9073C17.0754 20.0215 15.3191 21.5 12.9146 21.5C10.0729 21.5 8 19.4227 8 16C8 12.5773 10.0879 10.5 12.9146 10.5C15.2211 10.5 17.0528 11.838 17.4221 14.1371H15.7487Z'
        fill={textColor}
      />
      <path
        d='M20.6935 16.5914V21.3522H19.0804V10.6478H20.6633V14.6398H20.7688C21.1533 13.7675 21.9221 13.2204 23.196 13.2204C24.8769 13.2204 26 14.2406 26 16.2513V21.3522H24.3869V16.4435C24.3869 15.2608 23.7387 14.5806 22.6533 14.5806C21.5151 14.5806 20.6935 15.3125 20.6935 16.5914Z'
        fill={textColor}
      />
    </svg>
  );
};

export default KakaoChannelIcon;
