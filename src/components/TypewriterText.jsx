import { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';

// Types each word out char-by-char, pauses, deletes, and cycles to the next.
// Respects prefers-reduced-motion by showing the first word statically.
const TypewriterText = ({ words, sx }) => {
  const prefersReduced =
    typeof window !== 'undefined' &&
    !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const [text, setText] = useState(prefersReduced ? words[0] : '');
  const state = useRef({ i: 0, ci: 0, deleting: false });

  useEffect(() => {
    if (prefersReduced) return undefined;

    let timer;
    const tick = () => {
      const s = state.current;
      const word = words[s.i];
      if (!s.deleting) {
        s.ci += 1;
        setText(word.slice(0, s.ci));
        if (s.ci === word.length) {
          s.deleting = true;
          timer = setTimeout(tick, 1400);
          return;
        }
        timer = setTimeout(tick, 70);
      } else {
        s.ci -= 1;
        setText(word.slice(0, s.ci));
        if (s.ci === 0) {
          s.deleting = false;
          s.i = (s.i + 1) % words.length;
          timer = setTimeout(tick, 300);
          return;
        }
        timer = setTimeout(tick, 35);
      }
    };
    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, [words, prefersReduced]);

  return (
    <Box component="span" sx={sx}>
      {text}
      <Box
        component="span"
        aria-hidden="true"
        sx={{
          display: 'inline-block',
          width: '2px',
          ml: '2px',
          backgroundColor: 'currentColor',
          animation: 'tw-blink 1s step-end infinite',
          '@keyframes tw-blink': { '50%': { opacity: 0 } },
          '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
        }}
      >
        &nbsp;
      </Box>
    </Box>
  );
};

TypewriterText.displayName = 'TypewriterText';

export default TypewriterText;
