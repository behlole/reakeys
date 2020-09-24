import React from 'react';
import { useHotkeys } from './useHotkeys';
import { useRef } from '@storybook/addons';

export const Simple = () => {
  const hotkeys = useHotkeys([
    { name: 'Test', keys: 'SHIFT+A', callback: () => alert('holla') },
  ]);

  useHotkeys([
    { name: 'Test 2', keys: 'mod+b', callback: () => alert('baller') },
  ]);

  return (
    <div>
      Press SHIFT + A<br />
      Press MOD + b<br />
      <br />
      <pre>
        {JSON.stringify(
          hotkeys.map(({ ref: element, ...rest }) => rest),
          null,
          2
        )}
      </pre>
    </div>
  );
};

export const Focus = () => {
  const elmRef = useRef<any>(null);
  const elmRef2 = useRef<any>(null);

  const hotkeys = useHotkeys([
    {
      name: 'Test 3',
      keys: 'SHIFT+C',
      callback: () => alert('first'),
      ref: elmRef,
    },
  ]);

  useHotkeys([
    {
      name: 'Test 3',
      keys: 'SHIFT+C',
      callback: () => alert('second'),
      ref: elmRef2,
    },
  ]);

  return (
    <div>
      <span ref={elmRef} tabIndex={-1}>
        focus me and press SHIFT+C
      </span>
      <br />
      <br />
      <span ref={elmRef2} tabIndex={-1}>
        focus me and press SHIFT+C
      </span>
      <br />
      <pre>
        {JSON.stringify(
          hotkeys.map(({ ref: element, ...rest }) => rest),
          null,
          2
        )}
      </pre>
    </div>
  );
};

export default {
  title: 'Hotkeys',
  component: null,
};
