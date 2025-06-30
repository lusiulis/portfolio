// hooks/useMultiGsapAnimation.ts
'use client';

import { useGSAP } from '@gsap/react';

type RefsMap<T extends Record<string, React.RefObject<HTMLElement | null>>> = T;

export function useGsapAnimation<
  T extends Record<string, React.RefObject<HTMLElement | null>>
>(
  refs: RefsMap<T>,
  animateFn?: (elements: { [K in keyof T]: HTMLElement | null }) => void
) {
  useGSAP(
    () => {
      const elements = Object.fromEntries(
        Object.entries(refs).map(([key, ref]) => [key, ref.current])
      ) as { [K in keyof T]: HTMLElement | null };

      if (animateFn) {
        animateFn(elements);
      }
    },
    { dependencies: [refs, animateFn] }
  );
}
