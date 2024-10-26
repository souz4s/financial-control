import { PropsWithChildren } from "react";

import styles from "@/app/components/Header/styles.module.scss";

export function Header({ children }: PropsWithChildren) {
  return <header className={styles.header}>{children}</header>;
}

export function HeaderContent({ children }: PropsWithChildren) {
  return <div className={styles.headerContent}>{children}</div>;
}

export function HeaderImage({ children }: PropsWithChildren) {
  return <div className={styles.headerImage}>{children}</div>;
}

export function HeaderButton({ children }: PropsWithChildren) {
  return <button className={styles.headerButton}>{children}</button>;
}
