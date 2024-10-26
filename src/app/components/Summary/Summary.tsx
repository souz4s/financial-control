import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

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
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSaldoPositivo =
    parseFloat(saldoTotal.replace(".", "").replace(",", ".")) >= 0;

  const summaryCards = useMemo(
    () => [
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
        backgroundColor: isSaldoPositivo ? "#06D6A2" : "#DB3766",
        value: saldoTotal,
      },
    ],
    [totalEntrada, totalSaida, saldoTotal, isSaldoPositivo]
  );

  const getFontSize = (text: string) => {
    if (windowWidth > 1250) {
      if (text.length > 12) return "24px";
      if (text.length > 8) return "32px";
      return "42px";
    } else if (windowWidth > 800) {
      if (text.length > 12) return "20px";
      if (text.length > 8) return "24px";
      return "36px";
    } else {
      if (text.length > 12) return "20px";
      if (text.length > 8) return "24px";
      return "32px";
    }
  };

  const getMarginTop = (text: string) => {
    const fontSize = parseInt(getFontSize(text), 10);
    return `${(42 - fontSize) / 2 + 30}px`;
  };

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
              style={{
                color: card?.backgroundColor ? "#FFFFFF" : "#484F55",
                fontSize: getFontSize(card.value),
                marginTop: getMarginTop(card.value),
              }}
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
