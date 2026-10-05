import React from 'react';

/**
 * Senior UI Design decision:
 * Disabling intrusive, laggy custom cursor circles that disrupt natural OS pointer precision.
 * Native cursor provides superior UX, lower input latency, and zero jank.
 */
export const CustomCursor: React.FC = () => {
  return null;
};
