import { QUERY_KEYS, getQueryClient } from '@/constants';
import { WeddingTemplatesResponse } from '@/types/response';

import { InvitationsList } from '..';

const AllInvitations = () => {
  const data = getQueryClient().getQueryData<WeddingTemplatesResponse>(
    QUERY_KEYS.ALL_WEDDING_TEMPLATES,
  );

  if (!data) {
    return;
  }

  return (
    <section className='flex flex-col gap-[6.4rem] py-[7.3rem]'>
      <h3 className='text-[3rem] font-semibold px-[10%]'>ALL</h3>
      <InvitationsList
        productInfoList={data.result.productInfoList}
        groom={data.result.groomName}
        bride={data.result.brideName}
        detail={data.result.details}
      />
    </section>
  );
};

export default AllInvitations;
