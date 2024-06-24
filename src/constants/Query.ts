import { cache } from 'react';

import {
  getAllWeddingTemplates,
  getBestWeddingTemplates,
  getInvitation,
  getWeddingTemplate,
} from '@/services/server';
import { QueryClient } from '@tanstack/react-query';

export const getQueryClient = cache(() => new QueryClient());

export const QUERY_KEYS = {
  BEST_INVITATIONS: ['best', 'invitations'],
  ALL_INVITATIONS: ['all', 'invitations'],
  INVITATION_TEMPLATE: (templateId: number | string) => ['invitation', 'template', templateId],
  INVITATION: (produceId: number | string) => ['invitation', 'produce', produceId],
};

export const QUERY_OPTIONS = {
  BEST_INVITATIONS: () => ({
    queryKey: QUERY_KEYS.BEST_INVITATIONS,
    queryFn: () => getBestWeddingTemplates(),
    gcTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 24,
  }),
  ALL_INVITATIONS: () => ({
    queryKey: QUERY_KEYS.ALL_INVITATIONS,
    queryFn: () => getAllWeddingTemplates(),
    gcTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 24,
  }),
  INVITATION_TEMPLATE: (templateId: number | string) => ({
    queryKey: QUERY_KEYS.INVITATION_TEMPLATE(templateId),
    queryFn: () => getWeddingTemplate(templateId),
    gcTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 24,
  }),
  INVITATION: (produceId: number | string) => ({
    queryKey: QUERY_KEYS.INVITATION(produceId),
    queryFn: () => getInvitation(produceId),
    gcTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 24,
  }),
};
