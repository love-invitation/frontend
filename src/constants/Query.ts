import { cache } from 'react';

import {
  getAllInvitations,
  getBestInvitations,
  getInvitationProduce,
  getInvitationTemplate,
} from '@/services/server';
import { QueryClient } from '@tanstack/react-query';

export const getQueryClient = cache(() => new QueryClient());

export const QUERY_KEYS = {
  BEST_INVITATIONS: ['best', 'invitations'],
  ALL_INVITATIONS: ['all', 'invitations'],
  INVITATION_TEMPLATE: (templateId: number | string) => ['invitation', 'template', templateId],
  INVITATION_PRODUCE: (produceId: number | string) => ['invitation', 'produce', produceId],
};

export const QUERY_OPTIONS = {
  BEST_INVITATIONS: () => ({
    queryKey: QUERY_KEYS.BEST_INVITATIONS,
    queryFn: () => getBestInvitations(),
    gcTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 24,
  }),
  ALL_INVITATIONS: () => ({
    queryKey: QUERY_KEYS.ALL_INVITATIONS,
    queryFn: () => getAllInvitations(),
    gcTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 24,
  }),
  INVITATION_TEMPLATE: (templateId: number | string) => ({
    queryKey: QUERY_KEYS.INVITATION_TEMPLATE(templateId),
    queryFn: () => getInvitationTemplate(templateId),
    gcTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 24,
  }),
  INVITATION_PRODUCE: (produceId: number | string) => ({
    queryKey: QUERY_KEYS.INVITATION_PRODUCE(produceId),
    queryFn: () => getInvitationProduce(produceId),
    gcTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 24,
  }),
};
