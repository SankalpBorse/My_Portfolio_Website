"use client";

import type { CSSProperties } from "react";
import { siteContent } from "@/lib/site-content";

export function AnimatedBackground() {
  return (
    <div className="space-background" aria-hidden="true">
      <div className="star-field star-field-a" />
      <div className="star-field star-field-b" />
      <div className="orbital-haze" />
      <div className="floating-terms">
        {siteContent.backgroundTerms.map((term, index) => {
          const left = (index * 37) % 100;
          const top = (index * 53) % 100;
          const duration = 12 + (index % 13) * 1.4;
          const delay = -(index % 29) * 0.9;
          const size = 10 + (index % 4);
          const directionX = ((index * 71) % 220) - 110;
          const directionY = ((index * 43) % 190) - 95;
          const midX = ((index * 19) % 90) - 45;
          const midY = ((index * 29) % 80) - 40;
          const rotate = ((index * 17) % 42) - 21;

          return (
            <span
              key={`${term}-${index}`}
              className="floating-term"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
                fontSize: `${size}px`,
                "--term-x": `${directionX}px`,
                "--term-y": `${directionY}px`,
                "--term-mid-x": `${midX}px`,
                "--term-mid-y": `${midY}px`,
                "--term-rotate": `${rotate}deg`
              } as CSSProperties}
            >
              {term}
            </span>
          );
        })}
      </div>
    </div>
  );
}
