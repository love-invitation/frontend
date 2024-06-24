import { WeddingTemplateItem, WeddingTemplateResponse } from '@/types/response';

export interface InvitationTemplateProps
  extends Pick<WeddingTemplateResponse['result'], 'title' | 'details' | 'groomName' | 'brideName'> {
  productInfo: Pick<WeddingTemplateItem, 'id' | 'imageUrl' | 'templateName'>;
  width: number;
  height: number;
}
