import { InvitationTemplateItem, InvitationTemplateResponse } from '@/types/response';

export interface InvitationTemplateProps
  extends Pick<
    InvitationTemplateResponse['result'],
    'title' | 'details' | 'groomName' | 'brideName'
  > {
  productInfo: Pick<InvitationTemplateItem, 'id' | 'imageUrl' | 'templateName'>;
  width: number;
  height: number;
}
