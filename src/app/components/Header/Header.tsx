import Image from "next/image";
import styles from "@/app/components/Header/styles.module.scss";

interface HeaderProps {
  onNewTransaction: () => void;
}

export default function Header({ onNewTransaction }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerImage}>
          <Image src="/logo.svg" alt="ticto logo" width={186} height={34} />
        </div>
        <button className={styles.headerButton} onClick={onNewTransaction}>
          NOVA TRANSAÇÃO
        </button>
      </div>
    </header>
  );
}
