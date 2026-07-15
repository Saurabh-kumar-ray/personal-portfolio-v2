"use client";

import { useEffect } from "react";

interface TawkChatProps {
  propertyId: string;
  widgetId: string;
}

export default function TawkChat({ propertyId, widgetId }: TawkChatProps) {
  useEffect(() => {
    if (
      !propertyId ||
      !widgetId ||
      propertyId === "default_property_id" ||
      widgetId === "default_widget_id"
    ) {
      return;
    }

    const tawkWindow = window as any;
    tawkWindow.Tawk_API = tawkWindow.Tawk_API || {};
    tawkWindow.Tawk_LoadStart = new Date();

    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(s1, firstScript);
    } else {
      document.head.appendChild(s1);
    }

    return () => {
      // Cleanup script tag on unmount if needed
      s1.remove();
    };
  }, [propertyId, widgetId]);

  return null;
}
