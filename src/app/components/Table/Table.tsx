import Image from "next/image";

import styles from "@/app/components/Table/styles.module.scss";

const tableTitle = ["Descrição", "Valor", "Categoria", "Data"];

const tableData = [
  {
    id: 1,
    description: "Curso de NextJS",
    value: "R$ 899,00",
    category: "Educação",
    date: "12/02/2022 às 13h24",
  },
  {
    id: 2,
    description: "Salário",
    value: "R$ 7.350,00",
    category: "Receita Fixa",
    date: "12/02/2022 às 13h24",
  },
  {
    id: 3,
    description: "Curso de NextJS",
    value: "R$ 899,00",
    category: "Educação",
    date: "12/02/2022 às 13h24",
  },
];

export default function Table() {
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
          <p>{data.value}</p>
          <p>{data.category}</p>
          <p>{data.date}</p>
          <Image
            src="/feather-trash.svg"
            alt="trash icon"
            style={{ cursor: "pointer" }}
            width={13}
            height={15}
          />
        </div>
      ))}
    </div>
  );
}
