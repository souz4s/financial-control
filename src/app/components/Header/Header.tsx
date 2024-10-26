"use client";

import Image from "next/image";
import { useState } from "react";

import styles from "@/app/components/Header/styles.module.scss";
import Modal from "@/app/components/Modal/Modal";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerImage}>
            <Image src="/logo.svg" alt="ticto logo" width={186} height={34} />
          </div>
          <button className={styles.headerButton} onClick={openModal}>
            NOVA TRANSAÇÃO
          </button>
        </div>
      </header>
      {isModalOpen && <Modal onClose={closeModal} />}
    </>
  );
}
