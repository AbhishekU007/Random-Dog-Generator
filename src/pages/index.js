import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import React from "react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [dogImage, setDogImage] = useState("");

  const fetchDog = async () => {
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
      setDogImage(data.message);
    } catch (error) {
      console.log("Error fetching image", error);
    }
  };

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <>
      <Head>
        <title className={styles.title}>Random Dog Generator</title>
        <meta name="description" content="Dog images fetched through API" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
        <main className={styles.main}>
          <div>
            <h1 className={styles.heading}>Random Dog Generator</h1><br/>

            {dogImage && (
              <img src={dogImage} alt="Random Dog" className={styles.image} />
            )}

            <br/>
            <button onClick={fetchDog} className={styles.button}>
              Fetch New Dog
            </button>

            <footer>Made with ♡ - <a href="https://github.com/AbhishekU007">Abhishek</a></footer>
          </div>
        </main>
      </div>
    </>
  );
}
