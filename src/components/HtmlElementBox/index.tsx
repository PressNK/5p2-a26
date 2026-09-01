// src/components/HtmlElementBox.tsx
import React, {
  useState,
  Suspense,
  lazy,
  useMemo,
  useRef,
  useEffect,
  useId,
} from 'react';
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
      .catch(() => ({ default: () => <div>❌ Aucune explication pour `{elementName}`</div> }))
  );
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const HtmlElementBox: React.FC<HtmlElementBoxProps> = ({
  elementName,
  children,
  as,
  inline = false,
}) => {
  const [open, setOpen] = useState(false);
  const Explanation = useMemo(() => loadExplanation(elementName), [elementName]);
  const triggerRef = useRef<HTMLElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  // pick wrapper: `as` wins, then inline ⇒ span, else div
  const Tag = (as ?? (inline ? 'span' : 'div')) as keyof JSX.IntrinsicElements;

  const handleOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleTriggerKeyDown = (e: React.KeyboardEvent) => {
    if (e.target !== e.currentTarget) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
      setOpen(true);
    }
  };

  const handleClose = (e?: React.SyntheticEvent) => {
    e?.stopPropagation();
    setOpen(false);
  };

  // Focus initial dans la modale à l'ouverture, retour au déclencheur à la fermeture
  useEffect(() => {
    if (open) {
      closeBtnRef.current?.focus();
      return () => {
        triggerRef.current?.focus();
      };
    }
  }, [open]);

  const handleModalKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      setOpen(false);
      return;
    }
    // Piège à focus : Tab reste à l'intérieur du dialogue
    if (e.key === 'Tab' && modalRef.current) {
      const focusables = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  const modal = (
    <div className={styles.modalBackdrop} onClick={handleClose}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        ref={modalRef}
        onClick={e => e.stopPropagation()}
        onKeyDown={handleModalKeyDown}
      >
        <button
          type="button"
          className={styles.closeBtn}
          onClick={handleClose}
          aria-label="Fermer"
          ref={closeBtnRef}
        >
          ×
        </button>
        <h2 className={styles.modalTitle} id={titleId}>{`<${elementName}>`}</h2>
        <div className={styles.modalBody}>
          <Suspense fallback={<div>Chargement…</div>}><Explanation/></Suspense>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Tag
        className={inline || as ? `${styles.box} ${inline?styles.inline:''}` : styles.box}
        onClick={handleOpen}
        onKeyDown={handleTriggerKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`Afficher les informations sur <${elementName}>`}
        aria-haspopup="dialog"
        ref={triggerRef as React.Ref<never>}
      >
        <span className={styles.label} aria-hidden="true">{`<${elementName}>`}</span>
        {children}
      </Tag>

      {open && typeof document !== 'undefined'
        ? createPortal(modal, document.body)
        : null}
    </>
  );
};

export default HtmlElementBox;
