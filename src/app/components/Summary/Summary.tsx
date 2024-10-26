import Image from "next/image";

import styles from "@/app/components/Summary/styles.module.scss";

interface SummaryProps {
  totalEntrada: string;
  totalSaida: string;
  saldoTotal: string;
}

export default function Summary({
  totalEntrada,
  totalSaida,
  saldoTotal,
}: SummaryProps) {
  const summaryCards = [
    {
      title: "Entradas",
      src: "/Icon_feather-arrow-down.svg",
      value: totalEntrada,
    },
    {
      title: "Saídas",
      src: "/Icon_feather-arrow-up.svg",
      value: totalSaida,
    },
    {
      title: "Saldo Total",
      backgroundColor: "#06D6A2",
      value: saldoTotal,
    },
  ];

  return (
    <div className={styles.summary}>
      <div className={styles.summaryContent}>
        {summaryCards.map((card) => (
          <div
            key={card.title}
            className={styles.summaryCard}
            style={{ backgroundColor: card?.backgroundColor || "#FFFFFF" }}
          >
            <div className={styles.summaryCardHeader}>
              <p
                style={{ color: card?.backgroundColor ? "#FFFFFF" : "#484F55" }}
              >
                {card.title}
              </p>
              {card?.src && (
                <Image src={card.src} alt="icon" width={19} height={19} />
              )}
            </div>
            <p
              style={{ color: card?.backgroundColor ? "#FFFFFF" : "#484F55" }}
              className={styles.summaryCardValue}
            >
              R$ {card.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
