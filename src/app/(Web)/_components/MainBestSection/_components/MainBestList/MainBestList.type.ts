import { InvitationTemplateItem } from '@/types/response';

export interface MainBestListProps {
  invitation: InvitationTemplateItem[];
  groom: string;
  bride: string;
  detail: string;
}
