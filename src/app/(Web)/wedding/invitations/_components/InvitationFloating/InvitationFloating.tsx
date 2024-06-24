'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { WeddingTemplates } from '@/components/client';
import { TemplateLayout } from '@/components/server';
import { QUERY_OPTIONS } from '@/constants';
import useClickAway from '@/hooks/useClickAway/useClickAway';
import { WeddingTemplateResponse } from '@/types/response';
import { useQuery } from '@tanstack/react-query';

import { InvitationFloatingProps } from './InvitationFloating.type';

const InvitationFloating = ({ id }: InvitationFloatingProps) => {
  const route = useRouter();
  const ref = useClickAway<HTMLDivElement>(() => route.back());

  const { data } = useQuery<WeddingTemplateResponse>(QUERY_OPTIONS.WEDDING_TEMPLATE(id));

  if (!data?.result) {
    return;
  }

  return (
    <div
      className='flex flex-col justify-center items-center'
      ref={ref}
    >
      <TemplateLayout size='large'>
        <WeddingTemplates
          id={data.result.productInfo.id}
          details={data.result.details}
          groomName={data.result.groomName}
          brideName={data.result.brideName}
          imageUrl={data.result.productInfo.imageUrl}
        />
      </TemplateLayout>
      <Link
        href={`/wedding/invitations/produce/${id}`}
        className='bg-pink_500 text-white_100 w-full py-[1rem] flex justify-center text-[1.6rem] border-solid	border-2 rounded-2xl'
      >
        제작하기
      </Link>
    </div>
  );
};

export default InvitationFloating;
