import { fetchApi } from '@/api';

export const getBestWeddingTemplates = async () => {
  const response = await fetchApi('/api/product/info/best', {
    next: { revalidate: 1000 * 60 * 60 * 24 },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const getAllWeddingTemplates = async () => {
  const response = await fetchApi('/api/product/info', {
    next: { revalidate: 1000 * 60 * 60 * 24 },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const getWeddingTemplate = async (templateId: number | string) => {
  const response = await fetchApi(`/api/product/info/${templateId}`, {
    next: { revalidate: 1000 * 60 * 60 * 24 },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const getInvitationProduce = async (produceId: number | string) => {
  const response = await fetchApi(`/product/invitation/read/${produceId}`, {
    next: { revalidate: 1000 * 60 * 60 * 24 },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
