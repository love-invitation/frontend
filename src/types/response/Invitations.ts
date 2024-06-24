export interface InvitationTemplatesResponse {
  status: number;
  message: string;
  result: {
    title?: string;
    details: string;
    groomName: string;
    brideName: string;
    productInfoList: InvitationTemplateItem[];
  };
}

export interface InvitationTemplateResponse {
  status: number;
  message: string;
  result: {
    title?: string;
    details: string;
    groomName: string;
    brideName: string;
    productInfo: InvitationTemplateItem;
  };
}

export interface InvitationTemplateItem {
  id: number;
  imageUrl: string;
  templateName: string;
  price: number;
  discountedPrice?: number;
  best: boolean;
  newest: boolean;
}
