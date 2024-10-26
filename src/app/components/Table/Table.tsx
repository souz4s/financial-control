import Image from "next/image";

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
          <p>{data.date}</p>
          <Image
            src="/feather-trash.svg"
            alt="trash icon"
            style={{ cursor: "pointer" }}
            width={13}
            height={15}
            onClick={() => onDelete(data.id)}
          />
        </div>
      ))}
    </div>
  );
}
