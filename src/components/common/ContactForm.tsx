'use client'

import { Bug, FileText, Lightbulb, MessageSquare } from "lucide-react";
import { MessageKey } from "@/locale/message";
import { ChangeEvent, useActionState, useEffect, useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import LocaleText from "@/components/common/LocaleText";
import clsx from "clsx";
import { Button } from "@/components/ui/Button";
import { feedbackAction } from "@/actions/contact/feedback.action";
import { FormActionResult } from "@/utils/formActions";
import { useToast } from "@/hooks/useToast";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/locale";

const feedbackTypes = [
  { id: 'idea', icon: Lightbulb, labelKey: MessageKey.FEEDBACK_TYPE_IDEA },
  { id: 'bug', icon: Bug, labelKey: MessageKey.FEEDBACK_TYPE_BUG },
  { id: 'content', icon: FileText, labelKey: MessageKey.FEEDBACK_TYPE_CONTENT },
  { id: 'etc', icon: MessageSquare, labelKey: MessageKey.FEEDBACK_TYPE_ETC },
] as const

type FeedbackTypeId = typeof feedbackTypes[number]['id']

type ContactFormData = {
  type: FeedbackTypeId | null,
  title: string,
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    type: null,
    title: '',
    message: ''
  });

  const [state, formAction, isPending] = useActionState<FormActionResult<null>, FormData>(feedbackAction, {
    status: 'idle'
  })

  const { toastSuccess, toastError } = useToast()
  const { language } = useLanguage()

  useEffect(() => {
    if (state) {
      if (state.status === 'error') {
        toastError(state.error)
      } else if (state.status === 'success') {
        toastSuccess(t(MessageKey.FEEDBACK_SUBMIT_SUCCESS, language))
        setFormData({
          type: null,
          title: '',
          message: ''
        })
      }
    }
  }, [state])

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleTypeSelect = (type: FeedbackTypeId) => {
    setFormData((prevData) => ({
      ...prevData,
      type: type,
    }));
  };


  return (
    <FadeIn className="lg:order-last">
      <form action={formAction}>
        <input name="type" value={formData.type || ''} hidden readOnly/>
        <h2 className="font-display text-base font-semibold text-neutral-950 mb-6">
          <LocaleText keyOrLocaleData={MessageKey.FEEDBACK_FORM_TYPE_TITLE}/>
        </h2>
        <div className="p-8 bg-neutral-100 rounded-xl border border-neutral-200">
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                <LocaleText keyOrLocaleData={MessageKey.FEEDBACK_FORM_TYPE_LABEL}/>
                <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {feedbackTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = formData.type === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => handleTypeSelect(type.id)}
                      disabled={isPending}
                      className={
                        clsx(
                          'flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-colors duration-200 ease-in-out min-h-24 cursor-pointer',
                          'disabled:cursor-not-allowed disabled:opacity-60',
                          isSelected
                            ? 'bg-neutral-900 text-white border-neutral-900 shadow-md'
                            : 'bg-neutral-100 text-neutral-700 border-neutral-200 hover:bg-neutral-200 disabled:hover:bg-neutral-100'
                        )
                      }
                    >
                      <Icon className="h-6 w-6 mb-2"/>
                      <span className="text-sm font-medium break-keep">
                        <LocaleText keyOrLocaleData={type.labelKey}/>
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-neutral-700 mb-2">
                <LocaleText keyOrLocaleData={MessageKey.FEEDBACK_FORM_TITLE_LABEL}/>
                <span className="text-red-500">*</span>
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                value={formData.title}
                onChange={handleChange}
                disabled={isPending}
                className={
                  clsx(
                    'w-full p-4 mt-4 text-base/6 border border-neutral-300 bg-transparent rounded-md focus:border-neutral-950',
                    'disabled:cursor-not-allowed disabled:bg-neutral-50 disabled:opacity-70'
                  )
                }
              />
            </div>
            <div className="w-full">
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                <LocaleText keyOrLocaleData={MessageKey.FEEDBACK_FORM_MESSAGE_LABEL}/>
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                disabled={isPending}
                onChange={handleChange}
                className={
                  clsx(
                    'w-full p-4 mt-4 text-base/6 border border-neutral-300 bg-transparent rounded-md focus:border-neutral-950',
                    'disabled:cursor-not-allowed disabled:bg-neutral-50 disabled:opacity-70'
                  )
                }
              />
            </div>
            <Button className="w-full py-3 disabled:cursor-not-allowed" type="submit" disabled={isPending}>
              {
                isPending
                  ? t({ ko: '제출중...', en: 'Sending...' }, language)
                  : <LocaleText keyOrLocaleData={MessageKey.FEEDBACK_SUBMIT_BUTTON_TEXT}/>
              }
            </Button>
          </div>
        </div>
      </form>
    </FadeIn>
  )
}