import { AnimateSharedLayout, motion } from "framer-motion";
import React from "react";
import styles from "../styles/Header.module.css";



export const Header = ({ advanced, score }) => (
  <AnimateSharedLayout>
    <div className={styles.header}>
      <motion.div
        className={advanced ? styles.advancedTitle : styles.title}
        layout
      >
        <div>Rock</div>
        <div>Paper</div>
        <div>Scissors</div>
        {advanced && (
          <>
            <div>Lizard</div>
            <div>Spock</div>
          </>
        )}
      </motion.div>
      <div className={styles.score}>
        <h4>Score</h4>
        <h1>{score}</h1>
      </div>
    </div>
  </AnimateSharedLayout>
);
