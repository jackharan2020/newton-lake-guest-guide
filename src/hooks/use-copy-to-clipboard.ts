"use client";

import { useCallback, useState } from "react";
import { toast } from "sonner";

export function useCopyToClipboard(resetMs = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (text: string, label = "Copied") => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        toast.success(label);
        window.setTimeout(() => setCopied(false), resetMs);
        return true;
      } catch {
        toast.error("Unable to copy — please copy manually");
        return false;
      }
    },
    [resetMs],
  );

  return { copy, copied };
}
