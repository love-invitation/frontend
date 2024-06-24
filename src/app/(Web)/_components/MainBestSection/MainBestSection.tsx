import Link from 'next/link';

import tailwindConfig from '@/../tailwind.config';
import { ArrowRightIcon } from '@/components/server';
import { QUERY_KEYS, QUERY_OPTIONS, getQueryClient } from '@/constants';
import { WeddingTemplatesResponse } from '@/types/response';

import MainSectionTitle from '../MainSectionTitle/MainSectionTitle';
import { MainBestList } from './_components';

import resolveConfig from 'tailwindcss/resolveConfig';

const MainBestSection = async () => {
  const { theme } = resolveConfig(tailwindConfig);
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(QUERY_OPTIONS.BEST_WEDDING_TEMPLATES());

  const data = queryClient.getQueryData<WeddingTemplatesResponse>(
    QUERY_KEYS.BEST_WEDDING_TEMPLATES,
  );

  if (!data) {
    return null;
  }

  return (
    <section className='w-full py-[8rem] bg-gray_900 shadow-shadow_500 flex flex-col items-center justify-center gap-[10rem]'>
      <div className='w-[80%] flex items-center select-none'>
        <MainSectionTitle
          title='BEST'
          subTitle='다양한 디자인의 청첩장, 마음껏 선택하세요.'
          layoutClassName='grow-[1]'
        />

        <Link
          href='/wedding/invitations'
          className='flex items-center gap-[1rem] text-size20 text-pink_500 underline transition-all hover:brightness-90'
        >
          More
          <ArrowRightIcon
            fill={theme.colors.pink_500}
            size='1.5rem'
          />
        </Link>
      </div>

      <MainBestList
        invitation={data.result.productInfoList}
        groom={data.result.groomName}
        bride={data.result.brideName}
        detail={data.result.details}
      />
    </section>
  );
};

export default MainBestSection;
