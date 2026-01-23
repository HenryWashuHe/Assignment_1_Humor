"use client";

import { useMemo, useState } from "react";
import styles from "./page.module.css";

const roasts = [
  "Your IDE has a separate coffee budget for you.",
  "You treat deadlines like optional side quests.",
  "Your Git history reads like a suspense novel.",
  "You debug with vibes and it somehow works.",
  "Your sleep schedule is compiled with warnings.",
  "You call it 'iteration' because 'procrastination' was taken.",
];

const compliments = [
  "Your code is clean enough to eat off (but please don't).",
  "You make hard problems look like mild inconveniences.",
  "You turn caffeine into features.",
  "Your commits are tiny masterpieces.",
  "You explain recursion without causing tears.",
];

const funFacts = [
  "Class of 2028: still loading...",
  "CS major: fluent in JavaScript and mild chaos.",
  "Columbia College: walking to class is the real cardio.",
  "Favorite algorithm: bubble tea sort.",
  "Debug ritual: stare at it until it gets nervous.",
];

const clickableBadges = [
  {
    title: "Caffeine Stack",
    detail: "Prioritizes coffee, then code, then sleep. In that order.",
  },
  {
    title: "NYC Survival Kit",
    detail: "Umbrella, MetroCard, and a healthy fear of pigeons.",
  },
  {
    title: "CS Load",
    detail: "Takes 18 credits and still asks for side quests.",
  },
  {
    title: "Columbia Core",
    detail: "Reads philosophy, writes bugs, reflects deeply on both.",
  },
];

export default function Home() {
  const [message, setMessage] = useState(roasts[0]);
  const [roastCount, setRoastCount] = useState(0);
  const [complimentCount, setComplimentCount] = useState(0);
  const [factCount, setFactCount] = useState(0);
  const [activeBadge, setActiveBadge] = useState(0);

  const totalClicks = roastCount + complimentCount + factCount;

  const egoMeter = useMemo(() => {
    const score = 45 + complimentCount * 12 - roastCount * 5 + factCount * 4;
    return Math.max(8, Math.min(100, score));
  }, [complimentCount, roastCount, factCount]);

  const pick = (items: string[]) =>
    items[Math.floor(Math.random() * items.length)];

  const handleRoast = () => {
    setMessage(pick(roasts));
    setRoastCount((count) => count + 1);
  };

  const handleCompliment = () => {
    setMessage(pick(compliments));
    setComplimentCount((count) => count + 1);
  };

  const handleFact = () => {
    setMessage(pick(funFacts));
    setFactCount((count) => count + 1);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.hero}>
          <div className={styles.titleBlock}>
            <span className={styles.kicker}>Henry He</span>
            <h1>CS @ Columbia College, Class of 2028</h1>
            <p>
              A bio built for clickers: roast gently, compliment loudly, and
              uncover suspiciously specific "facts."
            </p>
            <div className={styles.tags}>
              <span>Major: Computer Science</span>
              <span>Location: NYC</span>
              <span>Status: In Beta</span>
            </div>
          </div>
          <div className={styles.heroCard}>
            <div className={styles.cardHeader}>
              <span>Roast Console</span>
              <span className={styles.clicks}>{totalClicks} clicks</span>
            </div>
            <p className={styles.message}>{message}</p>
            <div className={styles.buttons}>
              <button className={styles.primary} onClick={handleRoast}>
                Roast me
              </button>
              <button className={styles.secondary} onClick={handleCompliment}>
                Compliment
              </button>
              <button className={styles.ghost} onClick={handleFact}>
                Fun fact
              </button>
            </div>
            <div className={styles.meter}>
              <div className={styles.meterLabel}>
                Ego meter (scientifically questionable)
              </div>
              <div className={styles.meterTrack}>
                <div
                  className={styles.meterFill}
                  style={{ width: `${egoMeter}%` }}
                />
              </div>
              <span className={styles.meterValue}>{egoMeter}%</span>
            </div>
          </div>
        </header>

        <section className={styles.grid}>
          <div className={styles.panel}>
            <h2>Click for extra lore</h2>
            <p>
              Tap a badge to reveal Henry's highly accurate student persona
              stats.
            </p>
            <div className={styles.badges}>
              {clickableBadges.map((badge, index) => (
                <button
                  key={badge.title}
                  className={`${styles.badge} ${
                    index === activeBadge ? styles.active : ""
                  }`}
                  onClick={() => setActiveBadge(index)}
                >
                  {badge.title}
                </button>
              ))}
            </div>
            <div className={styles.badgeDetail}>
              <span>{clickableBadges[activeBadge].title}</span>
              <p>{clickableBadges[activeBadge].detail}</p>
            </div>
          </div>

          <div className={styles.panelAlt}>
            <h2>Henry's Unofficial Stats</h2>
            <ul className={styles.stats}>
              <li>
                <span>Sleep debt</span>
                <strong>Outstanding balance</strong>
              </li>
              <li>
                <span>Bug resistance</span>
                <strong>Moderate with snacks</strong>
              </li>
              <li>
                <span>Office hours visits</span>
                <strong>Strategically timed</strong>
              </li>
              <li>
                <span>Campus stamina</span>
                <strong>Low, but determined</strong>
              </li>
            </ul>
            <div className={styles.ctaRow}>
              <button className={styles.secondary} onClick={handleRoast}>
                Roast again
              </button>
              <button className={styles.primary} onClick={handleCompliment}>
                Boost morale
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
