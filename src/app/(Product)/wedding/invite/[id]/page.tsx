import { QUERY_KEYS, QUERY_OPTIONS, getQueryClient } from '@/constants';
import { InvitationResponse } from '@/types/response';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

// 592999830142739431 ID key 값

const InvitePage = async ({ params }: { params: { id: string } }) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(QUERY_OPTIONS.INVITATION(params.id));

  const data = queryClient.getQueryData<InvitationResponse>(QUERY_KEYS.INVITATION(params.id));

  if (!data?.result) {
    return null;
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {data.result.article.title}
    </HydrationBoundary>
  );
};

export default InvitePage;
