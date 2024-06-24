import { QUERY_KEYS, QUERY_OPTIONS, getQueryClient } from '@/constants';
import { InvitationResponse } from '@/types/response';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

const InvitePage = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(QUERY_OPTIONS.INVITATION('592999830142739431'));

  const data = queryClient.getQueryData<InvitationResponse>(
    QUERY_KEYS.INVITATION('592999830142739431'),
  );

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
