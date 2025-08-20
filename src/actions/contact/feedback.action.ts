'use server';

import { createFormAction } from '@/utils/formActions';

export const feedbackAction = createFormAction(
  ['type', 'title', 'message'] as const,
  { type: 'Type', title: 'Title', message: 'Message' },
  async ({ type, title, message }) => {
    console.log(type, title, message);
    return null;
  }
);
