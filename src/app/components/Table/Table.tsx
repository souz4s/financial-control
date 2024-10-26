import Image from "next/image";
import { useState } from "react";
import styles from "@/app/components/Table/styles.module.scss";

const tableTitle = ["Descrição", "Valor", "Categoria", "Data"];

interface TableData {
  id: number;
  description: string;
  value: string;
  category: string;
  date: string;
  transactionType: string;
}

interface TableProps {
  tableData: TableData[];
  onDelete: (id: number) => void;
}

export default function Table({ tableData, onDelete }: TableProps) {
  const [selectedData, setSelectedData] = useState<TableData | null>(null);

  const formatDate = (dateString: string) => {
    const [datePart, timePart] = dateString.split(", ");
    if (!datePart || !timePart) return dateString;

    const [hours, minutes] = timePart.split(":");
    return `${datePart} às ${hours}h${minutes}`;
  };

  const handleExpand = (data: TableData) => {
    setSelectedData(data);
  };

  const closeModal = () => {
    setSelectedData(null);
  };

  return (
    <div className={styles.table}>
      <div className={styles.tableHeader}>
        {tableTitle.map((title) => (
          <p key={title} className={styles.tableHeaderTitle}>
            {title}
          </p>
        ))}
      </div>
      {tableData.map((data) => (
        <div key={data.id} className={styles.tableRow}>
          <p>{data.description}</p>
          <p
            className={
              data.transactionType === "entrada"
                ? styles.valueGreen
                : styles.valueRed
            }
          >
            {data.value}
          </p>
          <p>{data.category}</p>
          <p>{formatDate(data.date)}</p>

          <button
            className={styles.expandButton}
            onClick={() => handleExpand(data)}
          >
            Expandir
          </button>

          <Image
            src="/feather-trash.svg"
            alt="trash icon"
            style={{ cursor: "pointer", marginLeft: 20 }}
            width={13}
            height={15}
            onClick={() => onDelete(data.id)}
          />
        </div>
      ))}

      {selectedData && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Detalhes da Transação</h2>
            <p>
              <strong>Descrição:</strong> {selectedData.description}
            </p>
            <p>
              <strong>Valor:</strong>{" "}
              <span
                className={
                  selectedData.transactionType === "entrada"
                    ? styles.valueGreen
                    : styles.valueRed
                }
              >
                {selectedData.value}
              </span>
            </p>
            <p>
              <strong>Categoria:</strong> {selectedData.category}
            </p>
            <p>
              <strong>Data:</strong> {formatDate(selectedData.date)}
            </p>
            <button className={styles.closeButton} onClick={closeModal}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
