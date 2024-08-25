import React from 'react';
import Head from 'next/head';
import styles from './styles/Home.module.css';
import EncryptorApp from './components/EncryptorApp';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Encriptador de Texto</title>
        <meta name="description" content="Encriptador de texto con Next.js y TypeScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Encriptador de Texto</h1>
        <EncryptorApp />
      </main>

      <footer className={styles.footer}>
        Creado por Karina P - {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Home;