import { PropsWithChildren } from "react";
import Image from "next/image";

import styles from "@/app/components/Summary/styles.module.scss";

export function Summary({ children }: PropsWithChildren) {
  return <div className={styles.summary}>{children}</div>;
}

export function SummaryContent({ children }: PropsWithChildren) {
  return <div className={styles.summaryContent}>{children}</div>;
}

export function SummaryCard({
  title,
  src,
  backgroundColor,
  value,
}: {
  title: string;
  src?: string;
  backgroundColor?: string;
  value?: string;
}) {
  return (
    <div
      className={styles.summaryCard}
      style={{ backgroundColor: backgroundColor || "#FFFFFF" }}
    >
      <SummaryCardHeader>
        <p style={{ color: backgroundColor ? "#FFFFFF" : "#484F55" }}>
          {title}
        </p>
        {src && <Image src={src} alt="icon" width={19} height={19} />}
      </SummaryCardHeader>
      <SummaryCardValue backgroundColor={backgroundColor}>
        R$ {value}
      </SummaryCardValue>
    </div>
  );
}

function SummaryCardHeader({ children }: PropsWithChildren) {
  return <div className={styles.summaryCardHeader}>{children}</div>;
}

function SummaryCardValue({
  children,
  backgroundColor,
}: PropsWithChildren & { backgroundColor?: string }) {
  return (
    <p
      style={{ color: backgroundColor ? "#FFFFFF" : "#484F55" }}
      className={styles.summaryCardValue}
    >
      {children}
    </p>
  );
}
