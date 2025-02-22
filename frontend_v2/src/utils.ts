import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const openLink = (url: string) => {
  window.open(url, '_blank')
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import { useWindowSize } from "@vueuse/core";
import { computed } from "vue";

const { width } = useWindowSize();

export const hidden = computed(() => width.value < 880);

export type ObjectValues<T> = T[keyof T]
