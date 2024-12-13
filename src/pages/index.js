import Header from "@/components/Header";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <img src="DungeonBlitzLogoFull_400x400.png" alt="Dungeon Blitz Logo" className={styles.logo} />
        <h1 className={styles.title}>Bem-vindo ao Dungeon Blitz</h1>
        <p className={styles.description}>
          Explore aventuras emocionantes e desafie seu destino!
        </p>
      </main>
    </div>
  );
}
