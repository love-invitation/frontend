import { fetchApi } from '@/api';

export const getBestInvitations = async () => {
  const response = await fetchApi('/api/product/info/best', {
    next: { revalidate: 1000 * 60 * 60 * 24 },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const getAllInvitations = async () => {
  const response = await fetchApi('/api/product/info', {
    next: { revalidate: 1000 * 60 * 60 * 24 },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const getInvitationTemplate = async (templateId: number | string) => {
  const response = await fetchApi(`/api/product/info/${templateId}`, {
    next: { revalidate: 1000 * 60 * 60 * 24 },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const getInvitationProduce = async (produceId: number | string) => {
  const response = await fetchApi(`${produceId}`, {
    next: { revalidate: 1000 * 60 * 60 * 24 },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
