import { QUERY_KEYS, getQueryClient } from '@/constants';
import { InvitationTemplatesResponse } from '@/types/response';

import { InvitationsList } from '..';

const BestInvitations = async () => {
  const data = getQueryClient().getQueryData<InvitationTemplatesResponse>(
    QUERY_KEYS.BEST_INVITATIONS,
  );

  if (!data) {
    return;
  }

  return (
    <section className='flex flex-col gap-[6.4rem] pt-[7.3rem]'>
      <h3 className='text-[3rem] font-semibold px-[10%]'>BEST</h3>
      <InvitationsList
        productInfoList={data.result.productInfoList}
        groom={data.result.groomName}
        bride={data.result.brideName}
        detail={data.result.details}
      />
    </section>
  );
};

export default BestInvitations;
