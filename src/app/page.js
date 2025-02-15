"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [width, setWidth] = useState(0);
  const [start, setStart] = useState(false);
  const [score, setScore] = useState(0);

  function newGame() {
    setStart(true);
  }

  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };

    resize();

    window.addEventListener("resize", resize);
  });
  return (
    <main className={styles.container}>
      {width >= 500 ? (
        <div className={styles.containerMain}>
          <h1>Guerra no espaço</h1>
          <div className={styles.spaceContainer}>
            <div className={styles.scoreArea}>
              <h5 className={styles.tittleScore}>score:</h5>
              <p className={styles.score}>{score}</p>
            </div>
            {start ? (
              <div></div>
            ) : (
              <div className={styles.newGame}>
                <h2>New Game</h2>
                <button onClick={newGame}>start</button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <h1 className={styles.errorMsg}>
            largura minima
            <br /> de janela 500px
          </h1>
        </div>
      )}
    </main>
  );
}
