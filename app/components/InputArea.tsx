import React from 'react';
import styles from '../styles/Home.module.css';

interface InputAreaProps {
  inputText: string;
  setInputText: (text: string) => void;
  handleEncrypt: () => void;
  handleDecrypt: () => void;
}

const InputArea: React.FC<InputAreaProps> = ({ inputText, setInputText, handleEncrypt, handleDecrypt }) => {
  return (
    <div className={styles.card}>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Ingrese el texto para encriptar/desencriptar"
        className={styles.textarea}
      />
      <div className={styles.buttonGroup}>
        <button onClick={handleEncrypt} className={styles.button}>Encriptar</button>
        <button onClick={handleDecrypt} className={styles.button}>Desencriptar</button>
      </div>
    </div>
  );
};

export default InputArea;