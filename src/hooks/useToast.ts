'use client';

import { toast, TypeOptions, ToastOptions } from 'react-toastify';
import { defaultToastOptions } from '@/lib/toastOptions';

export const useToast = () => {
  const showToast = (message: string, type: TypeOptions = 'default', options?: ToastOptions) => {
    toast(message, { type, ...defaultToastOptions, ...options });
  };

  const toastSuccess = (message: string, options?: ToastOptions) =>
    toast.success(message, { ...defaultToastOptions, ...options });

  const toastError = (message: string, options?: ToastOptions) =>
    toast.error(message, { ...defaultToastOptions, ...options });

  const toastInfo = (message: string, options?: ToastOptions) =>
    toast.info(message, { ...defaultToastOptions, ...options });

  const toastWarn = (message: string, options?: ToastOptions) =>
    toast.warn(message, { ...defaultToastOptions, ...options });

  return { showToast, toastSuccess, toastError, toastInfo, toastWarn };
};
