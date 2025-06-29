'use client';

import { ReactNode, useRef } from 'react';
import styles from '@/styles/components/common/funtitle.module.scss';
import { useGsapAnimation } from '@/lib/hooks/useGsapAnimation';
import { defaultFunTitle } from '@/lib/gsapAnimations';

type IFunTitleProps = {
  args: string;
  title: string;
  subtitle: string;
  description: string;
  final?: string;
  children?: ReactNode;
  initTitle?: boolean;
  animation?: (elements: {
    titleRef: HTMLElement | null;
    subTitleRef: HTMLElement | null;
    descriptionRef: HTMLElement | null;
    triggerRef?: HTMLElement | null;
  }) => void;
};

const FunTitle = ({
  args,
  title,
  subtitle,
  description,
  final,
  children,
  animation = defaultFunTitle,
  initTitle = false,
}: IFunTitleProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subTitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGsapAnimation(
    { titleRef, subTitleRef, descriptionRef, triggerRef },
    animation
  );

  return (
    <div
      ref={triggerRef}
      className={
        initTitle ? `${styles.container} ${styles.init}` : styles.container
      }
    >
      <h1
        className={styles.funTitle}
        ref={titleRef}
      >
        {title}
        {args && <span className={styles.args}>{args}</span>}
        {final}
      </h1>
      {subtitle && (
        <p
          className={styles.subtitle}
          ref={subTitleRef}
        >
          {subtitle}
        </p>
      )}
      <br />
      {description && (
        <p
          className={styles.description}
          ref={descriptionRef}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
};

export default FunTitle;
