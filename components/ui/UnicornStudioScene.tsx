"use client";

import { useEffect, useRef } from "react";

interface UnicornStudioSceneProps {
  projectId: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  scale?: number;
  dpi?: number;
  lazyLoad?: boolean;
  production?: boolean;
  altText?: string;
  ariaLabel?: string;
}

export default function UnicornStudioScene({
  projectId,
  width = 1440,
  height = 900,
  className = "",
  scale,
  dpi,
  lazyLoad,
  production,
  altText,
  ariaLabel,
}: UnicornStudioSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    // Add CSS to ensure canvas transparency
    const styleId = 'unicorn-studio-transparent-style';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        [data-us-project] canvas {
          background: transparent !important;
        }
      `;
      document.head.appendChild(style);
    }

    // Initialize UnicornStudio - matches the provided snippet
    (function() {
      if (!window.UnicornStudio) {
        window.UnicornStudio = { isInitialized: false } as Window['UnicornStudio'];
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.1/dist/unicornStudio.umd.js";
        script.onload = function() {
          if (!window.UnicornStudio.isInitialized) {
            if (typeof UnicornStudio !== 'undefined' && UnicornStudio.init) {
              UnicornStudio.init();
              window.UnicornStudio.isInitialized = true;
            }
          }
        };
        script.onerror = function() {
          console.error("Failed to load UnicornStudio SDK");
        };
        (document.head || document.body).appendChild(script);
      } else if (!window.UnicornStudio.isInitialized) {
        // Script already loaded, just initialize
        if (typeof UnicornStudio !== 'undefined' && UnicornStudio.init) {
          UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      }
    })();
  }, []);

  // Build style object with transparent background
  const style: React.CSSProperties = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    backgroundColor: 'transparent',
  };

  // Build data attributes
  const dataAttributes: Record<string, string> = {
    "data-us-project": projectId,
  };

  if (scale !== undefined) {
    dataAttributes["data-us-scale"] = scale.toString();
  }
  if (dpi !== undefined) {
    dataAttributes["data-us-dpi"] = dpi.toString();
  }
  if (lazyLoad !== undefined) {
    dataAttributes["data-us-lazyload"] = lazyLoad.toString();
  }
  if (production !== undefined) {
    dataAttributes["data-us-production"] = production.toString();
  }
  if (altText) {
    dataAttributes["data-us-alttext"] = altText;
  }
  if (ariaLabel) {
    dataAttributes["data-us-arialabel"] = ariaLabel;
  }

  return (
    <div
      ref={containerRef}
      {...dataAttributes}
      style={style}
      className={className}
    />
  );
}

// Type declaration for window.UnicornStudio
declare global {
  interface Window {
    UnicornStudio?: {
      isInitialized: boolean;
      init?: () => void;
    };
  }
  var UnicornStudio: {
    init: () => void;
  } | undefined;
}
