'use client';

import { useEffect, useState, useRef } from 'react';
import styles from '@/styles/components/common/scambletitle.module.scss';

type ScrambleTitleProps = {
  finalText?: string;
  style?: string;
  iterations?: number;
  delay?: number; // ms delay aproximado entre frames
};

const ScrambleTitle = ({
  finalText = 'HOLA!',
  style = styles.default,
  iterations = 10,
  delay = 50,
}: ScrambleTitleProps) => {
  const [text, setText] = useState('');
  const frameRef = useRef(0);
  const lastUpdateRef = useRef(0);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?@#$%&';

  useEffect(() => {
    frameRef.current = 0;
    lastUpdateRef.current = performance.now();
    setText('');

    const update = (time: number) => {
      if (time - lastUpdateRef.current >= delay) {
        const frame = frameRef.current;

        const scrambled = finalText
          .split('')
          .map((letter, idx) => {
            if (frame >= iterations * (idx + 1)) return letter;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');

        if (scrambled !== text) setText(scrambled);

        frameRef.current++;

        if (frameRef.current > iterations * finalText.length) {
          setText(finalText);
          return; // stop anim
        }

        lastUpdateRef.current = time;
      }
      requestAnimationFrame(update);
    };

    const animId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(animId);
  }, [finalText, iterations, delay, text]);

  return (
    <h1 className={style}>
      {text}
    </h1>
  );
};

export default ScrambleTitle;
