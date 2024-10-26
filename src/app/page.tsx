"use client";

import { useState } from "react";

import Header from "@/app/components/Header/Header";
import Summary from "@/app/components/Summary/Summary";
import Table from "@/app/components/Table/Table";
import Modal from "@/app/components/Modal/Modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableData, setTableData] = useState([
    {
      id: 1,
      description: "Curso de NextJS",
      value: "R$ 899,00",
      category: "Educação",
      date: "12/02/2022 às 13h24",
    },
  ]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addTransaction = (transaction: {
    description: string;
    value: string;
    category: string;
    date: string;
  }) => {
    setTableData((prevData) => [
      ...prevData,
      { id: prevData.length + 1, ...transaction },
    ]);
  };

  const deleteTransaction = (id: number) => {
    setTableData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header onNewTransaction={openModal} />
      <Summary />
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
