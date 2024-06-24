import { fetchApi } from '@/api';

export const getInvitation = async (produceId: number | string) => {
  const response = await fetchApi(`/product/invitation/read/${produceId}`, {
    next: { revalidate: 1000 * 60 * 60 * 24 },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
