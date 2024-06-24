import { WeddingTemplateItem } from '@/types/response';

export interface InvitationsListProps {
  productInfoList: WeddingTemplateItem[];
  groom: string;
  bride: string;
  detail: string;
}
