import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import BrowserWindow from '@site/src/components/BrowserWindow';
import DocCard from '@theme/DocCard'
import SandpackPlayground from '../components/SandpackPlayground';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "highlight" tag to our <Highlight /> component!
  // `Highlight` will receive all props that were passed to `highlight` in MDX
  BrowserWindow: BrowserWindow,
  DocCard: DocCard,
  SandpackPlayground: SandpackPlayground
};