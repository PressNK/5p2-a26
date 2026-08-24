// src/components/HtmlElementBox.tsx
import React, { useState, Suspense, lazy, useMemo } from 'react';
import { createPortal } from 'react-dom';
import styles from './HtmlElementBox.module.css';

interface HtmlElementBoxProps {
  elementName: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  inline?: boolean;
}

function loadExplanation(elementName: string) {
  return lazy(() =>
    import(`../../data/html-elements/${elementName}.md`)
      .catch(() => ({ default: () => <div>❌ No explanation for `{elementName}`</div> }))
  );
}

const HtmlElementBox: React.FC<HtmlElementBoxProps> = ({
  elementName,
  children,
  as,
  inline = false,
}) => {
  const [open, setOpen] = useState(false);
  const Explanation = useMemo(() => loadExplanation(elementName), [elementName]);

  // pick wrapper: `as` wins, then inline ⇒ span, else div
  const Tag = (as ?? (inline ? 'span' : 'div')) as keyof JSX.IntrinsicElements;

  const handleOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(true);
  };
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(false);
  };

  const modal = (
    <div className={styles.modalBackdrop} onClick={handleClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={handleClose}>×</button>
        <h2 className={styles.modalTitle}>{`<${elementName}>`}</h2>
        <div className={styles.modalBody}>
          <Suspense fallback={<div>Loading…</div>}><Explanation/></Suspense>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Tag
        className={inline || as ? `${styles.box} ${inline?styles.inline:''}` : styles.box}
        onClick={handleOpen}
        role="button"
        aria-label={`Show info for <${elementName}>`}
      >
        <span className={styles.label}>{`<${elementName}>`}</span>
        {children}
      </Tag>

      {open && typeof document !== 'undefined'
        ? createPortal(modal, document.body)
        : null}
    </>
  );
};

export default HtmlElementBox;