"use client";

import { useState, useMemo } from "react";

import Header from "@/app/components/Header/Header";
import Summary from "@/app/components/Summary/Summary";
import Table from "@/app/components/Table/Table";
import Modal from "@/app/components/Modal/Modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableData, setTableData] = useState([
    {
      id: 65165165165165,
      description: "Curso de NextJS",
      value: "R$ 899,00",
      category: "Educação",
      date: "12/02/2022 às 13h24",
      transactionType: "entrada",
    },
  ]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addTransaction = (transaction: {
    description: string;
    value: string;
    category: string;
    date: string;
    transactionType: string;
  }) => {
    setTableData((prevData) => [
      ...prevData,
      { id: prevData.length + 1, ...transaction },
    ]);
  };

  const deleteTransaction = (id: number) => {
    setTableData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const { totalEntrada, totalSaida, saldoTotal } = useMemo(() => {
    let entrada = 0;
    let saida = 0;

    tableData.forEach((item) => {
      const numericValue = parseFloat(
        item.value.replace(/[R$\.\s]/g, "").replace(",", ".")
      );

      if (item.transactionType === "entrada") {
        entrada += numericValue;
      } else {
        saida += numericValue;
      }
    });

    const saldo = entrada - saida;

    return {
      totalEntrada: entrada.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
      totalSaida: saida.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
      saldoTotal: saldo.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    };
  }, [tableData]);

  return (
    <>
      <Header onNewTransaction={openModal} />
      <Summary
        totalEntrada={totalEntrada}
        totalSaida={totalSaida}
        saldoTotal={saldoTotal}
      />
      <Table tableData={tableData} onDelete={deleteTransaction} />
      {isModalOpen && (
        <Modal
          onClose={closeModal}
          onAddTransaction={(transaction) => {
            addTransaction(transaction);
            closeModal();
          }}
        />
      )}
    </>
  );
}
