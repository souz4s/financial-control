import { useState } from "react";
import Image from "next/image";

import styles from "@/app/components/Modal/styles.module.scss";

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [transactionType, setTransactionType] = useState("entrada");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      name,
      price,
      transactionType,
      category,
    });
    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>Cadastrar Transação</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />

          <input
            type="text"
            placeholder="Preço"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={styles.input}
          />

          <div className={styles.transactionType}>
            <button
              type="button"
              className={`${styles.typeButton} ${
                transactionType === "entrada" ? styles.active : ""
              }`}
              onClick={() => setTransactionType("entrada")}
            >
              <Image
                src="/feather-arrow-up-circle.svg"
                alt="arrow up"
                width={28}
                height={28}
                className={styles.arrow}
              />
              <span>Entrada</span>
            </button>
            <button
              type="button"
              className={`${styles.typeButton} ${
                transactionType === "saida" ? styles.active : ""
              }`}
              onClick={() => setTransactionType("saida")}
            >
              <Image
                src="/feather-arrow-down-circle.svg"
                alt="arrow down"
                width={28}
                height={28}
                className={styles.arrow}
              />
              <span>Saída</span>
            </button>
          </div>

          <input
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={styles.input}
          />

          <button type="submit" className={styles.submitButton}>
            CADASTRAR
          </button>
        </form>
      </div>
    </div>
  );
}
