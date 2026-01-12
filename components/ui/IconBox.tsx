"use client";

import { useState, ReactNode } from "react";

interface IconBoxProps {
  icon: ReactNode | string;
  title: string;
  description?: string;
  expandable?: boolean;
  className?: string;
}

export default function IconBox({
  icon,
  title,
  description,
  expandable = false,
  className = "",
}: IconBoxProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`stm-iconbox_style_1 flex flex-col items-center text-center p-5 ${className}`}>
      <div className="stm-iconbox__icon text-3xl mb-4">
        {typeof icon === "string" ? <span>{icon}</span> : icon}
      </div>
      <div className="stm-iconbox__text w-full">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        {description && (
          <div>
            <p className={`text-sm text-gray-600 ${!expanded && expandable ? "line-clamp-3" : ""}`}>
              {description}
            </p>
            {expandable && description.length > 100 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-primary text-sm mt-2 hover:underline"
              >
                {expanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
