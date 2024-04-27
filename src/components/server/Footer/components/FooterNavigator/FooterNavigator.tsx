import Link from 'next/link';

import Divider from '@/components/server/Divider/Divider';

const FooterNavigator = () => {
  const liStyle = 'hover:brightness-75 hover:underline';
  return (
    <nav className='w-full flex items-center pl-[2rem] text-nowrap'>
      <h6 className='text-[1.2rem] font-bold mr-[2rem]'>PINKCOTTON</h6>

      <ul className='flex flex-grow text-[1.2rem] h-[1.8rem] items-center text-gray_100'>
        <li className={liStyle}>
          <Link href='/'>이용약관</Link>
        </li>
        <Divider
          direction='vertical'
          className='h-[70%]'
        />
        <li className={liStyle}>
          <Link href='/'>개인정보처리방침</Link>
        </li>
        <Divider
          direction='vertical'
          className='h-[70%]'
        />
        <li className={liStyle}>
          <Link href='/'>제휴문의</Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNavigator;
