import { InvitationTemplateItem } from '@/types/response';

export interface InvitationsListProps {
  productInfoList: InvitationTemplateItem[];
  groom: string;
  bride: string;
  detail: string;
}
