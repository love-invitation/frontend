export interface WeddingTemplatesResponse {
  status: number;
  message: string;
  result: {
    title?: string;
    details: string;
    groomName: string;
    brideName: string;
    productInfoList: WeddingTemplateItem[];
  };
}

export interface WeddingTemplateResponse {
  status: number;
  message: string;
  result: {
    title?: string;
    details: string;
    groomName: string;
    brideName: string;
    productInfo: WeddingTemplateItem;
  };
}

export interface WeddingTemplateItem {
  id: number;
  imageUrl: string;
  templateName: string;
  price: number;
  discountedPrice?: number;
  best: boolean;
  newest: boolean;
}
