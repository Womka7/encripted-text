"use client";
import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import { encrypt, decrypt } from '../utils/encryption';
import InputArea from './InputArea';
import OutputArea from './OutputArea';

const EncryptorApp: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleEncrypt = () => {
    setOutputText(encrypt(inputText));
  };

  const handleDecrypt = () => {
    setOutputText(decrypt(inputText));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
  };

  return (
    <div className={styles.grid}>
      <InputArea
        inputText={inputText}
        setInputText={setInputText}
        handleEncrypt={handleEncrypt}
        handleDecrypt={handleDecrypt}
      />
      <OutputArea
        outputText={outputText}
        handleCopy={handleCopy}
      />
    </div>
  );
};

export default EncryptorApp;