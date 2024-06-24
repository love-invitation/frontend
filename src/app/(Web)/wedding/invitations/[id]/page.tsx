import { QUERY_OPTIONS, getQueryClient } from '@/constants';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { InvitationFloating } from '../_components';

interface FloatingProps {
  params: {
    id: string;
  };
}

const Floating = async ({ params }: FloatingProps) => {
  const { id } = params;
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(QUERY_OPTIONS.WEDDING_TEMPLATE(id));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <article className='bg-white_100 text-black_900 pt-[4rem] flex justify-center'>
        <InvitationFloating id={id} />
      </article>
    </HydrationBoundary>
  );
};

export default Floating;
