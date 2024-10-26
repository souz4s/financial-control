import { PropsWithChildren } from "react";

import styles from "@/app/components/Table/styles.module.scss";

export function Table({ children }: PropsWithChildren) {
  return <div className={styles.table}>{children}</div>;
}

export function TableHeader({ children }: PropsWithChildren) {
  return <div className={styles.tableHeader}>{children}</div>;
}

export function TableHeaderTitle({ children }: PropsWithChildren) {
  return <p className={styles.tableHeaderTitle}>{children}</p>;
}

export function TableRow({ children }: PropsWithChildren) {
  return <div className={styles.tableRow}>{children}</div>;
}
