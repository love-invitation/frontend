import { QUERY_OPTIONS, getQueryClient } from '@/constants';

const InvitePage = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(QUERY_OPTIONS.INVITATION('592999830142739431'));

  // const data = queryClient.getQueryData(QUERY_KEYS.INVITATION_PRODUCE('592999830142739431'));

  // console.log(data);

  return <div>invite Page</div>;
};

export default InvitePage;
