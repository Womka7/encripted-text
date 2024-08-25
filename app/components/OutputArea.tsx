import React from 'react';
import styles from '../styles/Home.module.css';

interface OutputAreaProps {
  outputText: string;
  handleCopy: () => void;
}

const OutputArea: React.FC<OutputAreaProps> = ({ outputText, handleCopy }) => {
  return (
    <div className={styles.card}>
      <textarea
        value={outputText}
        readOnly
        placeholder="El resultado aparecerá aquí"
        className={styles.textarea}
      />
      <button onClick={handleCopy} className={styles.button}>Copiar</button>
    </div>
  );
};

export default OutputArea;