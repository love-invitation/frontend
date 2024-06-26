import { fetchApi } from '@/api';
import { Invitation } from '@/app/(Web)/wedding/invitations/produce/[id]/_constants/DefaultValue';

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

export const getInvitation = async (productInfoId: number | string) => {
  const response = await fetchApi(`/api/product/info/${productInfoId}`, {
    next: { revalidate: 1000 * 60 * 60 * 24 },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const postInvitation = async ({
  id,
  invitationInfo,
}: {
  id: number;
  invitationInfo: Invitation;
}) => {
  const formData = new FormData();
  const {
    cover,
    thumbnail,
    gallery,
    article,
    groom,
    bride,
    place,
    booking,
    guestbookCheck,
    transport,
    priority,
    contacts,
    accounts,
  } = invitationInfo;

  if (cover.image) {
    formData.append('mainImage', cover.image);
  }

  if (thumbnail.image) {
    formData.append('shareThumbnail', thumbnail.image);
  }

  gallery.forEach((image) => {
    formData.append('gallery', image);
  });

  const invitationDto = {
    productInfoId: id,
    title: article.title,
    contents: article.contents,
    coverContents: cover.contents,
    groom,
    bride,
    place,
    booking: {
      date: `${booking.date}T${booking.time}`,
      dateType: booking.dateType ? 'CALENDAR' : 'NONE',
    },
    guestbookCheck,
    transport,
    priority,
    contacts,
    accounts,
    thumbnail: {
      title: thumbnail.title,
      contents: thumbnail.contents,
    },
  };

  formData.append(
    'invitationDto',
    new Blob([JSON.stringify(invitationDto)], { type: 'application/json' }),
  );

  const response = await fetchApi('/product/invitation/create', {
    method: 'POST',
    body: formData,
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
