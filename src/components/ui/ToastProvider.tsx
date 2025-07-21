'use client'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { defaultToastOptions } from '@/lib/toastOptions'

export const ToastProvider = () => {
  return <ToastContainer {...defaultToastOptions} />
}
