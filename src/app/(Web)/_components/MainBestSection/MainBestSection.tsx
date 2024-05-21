import Link from 'next/link';

import tailwindConfig from '@/../tailwind.config';
import { ArrowRightIcon } from '@/components/server';
import { QUERY_KEYS, QUERY_OPTIONS, getQueryClient } from '@/constants';
import { BestInvitationsResponse } from '@/types/response/Invitations';

import MainSectionTitle from '../MainSectionTitle/MainSectionTitle';
import { MainBestList } from './_components';

import resolveConfig from 'tailwindcss/resolveConfig';

const MainBestSection = async () => {
  const { theme } = resolveConfig(tailwindConfig);
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(QUERY_OPTIONS.BEST_INVITATIONS());

  const data = queryClient.getQueryData<BestInvitationsResponse>(QUERY_KEYS.BEST_INVITATIONS);

  if (!data) {
    return null;
  }

  return (
    <section className='w-full main_page_550:py-[4rem] py-[2.4rem] bg-gray_900 shadow-shadow_500 flex flex-col items-center justify-center gap-[4rem]'>
      <div className='w-[80%] flex items-center select-none'>
        <MainSectionTitle
          title='BEST'
          subTitle='다양한 디자인의 청첩장, 마음껏 선택하세요.'
          layoutClassName='grow-[1]'
        />

        <Link
          href='/wedding/invitations'
          className='main_page_550:flex hidden items-center gap-[1rem] text-size20 text-pink_500 underline transition-all hover:brightness-90'
        >
          More
          <ArrowRightIcon
            fill={theme.colors.pink_500}
            size='1.5rem'
          />
        </Link>
      </div>

      <MainBestList invitation={data.result.productInfoList} />
    </section>
  );
};

export default MainBestSection;
