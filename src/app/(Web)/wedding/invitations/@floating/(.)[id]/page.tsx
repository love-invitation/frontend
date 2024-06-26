import { QUERY_OPTIONS, getQueryClient } from '@/constants';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { InvitationFloating } from '../../_components';

interface FloatingProps {
  params: {
    id: string;
  };
}

const Floating = async ({ params }: FloatingProps) => {
  const { id } = params;
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(QUERY_OPTIONS.INVITATION(id));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <article className='bg-white_100 text-black_900 border-solid	border-2 rounded-2xl shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <InvitationFloating id={id} />
      </article>
    </HydrationBoundary>
  );
};

export default Floating;
