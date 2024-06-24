import { WeddingTemplateItem } from '@/types/response';

export interface MainBestListProps {
  invitation: WeddingTemplateItem[];
  groom: string;
  bride: string;
  detail: string;
}
