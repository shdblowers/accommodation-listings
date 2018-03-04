import { createElement } from 'react';

const renderHTML = rawHTML =>
  createElement('div', { dangerouslySetInnerHTML: { __html: rawHTML } });

export { renderHTML };
