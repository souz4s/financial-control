import { useState } from "react";
import Image from "next/image";
import styles from "@/app/components/Modal/styles.module.scss";

interface ModalProps {
  onClose: () => void;
  onAddTransaction: (transaction: {
    description: string;
    value: string;
    category: string;
    date: string;
  }) => void;
}

export default function Modal({ onClose, onAddTransaction }: ModalProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [transactionType, setTransactionType] = useState("entrada");
  const [category, setCategory] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    price: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: name ? "" : "O nome é obrigatório.",
      price: price ? "" : "O preço é obrigatório.",
    };

    setErrors(newErrors);

    if (newErrors.name || newErrors.price) {
      return;
    }

    const transaction = {
      description: name,
      value: price,
      category: category || "Sem Categoria",
      date: new Date().toLocaleString("pt-BR"),
    };

    onAddTransaction(transaction);
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
          {errors.name && <p className={styles.error}>{errors.name}</p>}

          <input
            type="text"
            placeholder="Preço"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={styles.input}
          />
          {errors.price && <p className={styles.error}>{errors.price}</p>}

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
