// src/components/ExampleWrapper.tsx
import React from 'react';
import styles from './ExampleWrapper.module.css';

interface ExampleWrapperProps {
  children: React.ReactNode;
}

const ExampleWrapper: React.FC<ExampleWrapperProps> = ({ children }) => (
  <div className={styles.wrapper}>
    {children}
  </div>
);

export default ExampleWrapper;