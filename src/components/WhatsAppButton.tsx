"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/content/site-content";

export function WhatsAppButton() {
  const { whatsapp } = siteContent;

  return (
    <motion.a
      href={whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={whatsapp.label}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border-2 border-ink bg-[#25D366] text-white shadow-[4px_4px_0_0_var(--color-ink)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none lg:hidden"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.4 1.26 4.83L2 22l5.36-1.3a9.9 9.9 0 0 0 4.68 1.2h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2zm5.8 14.15c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.32-1.65-.62-2.9-1.25-4.8-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.28.58-.35.78-.35h.55c.18 0 .42-.03.65.5.24.57.8 1.98.87 2.13.07.14.11.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.13-.28.28-.12.55.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.19.7-.82.89-1.1.19-.28.37-.23.63-.14.26.1 1.65.78 1.94.92.28.14.47.21.54.33.07.13.07.72-.17 1.4z" />
      </svg>
    </motion.a>
  );
}
