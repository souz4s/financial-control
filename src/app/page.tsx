import Image from "next/image";

import {
  Header,
  HeaderButton,
  HeaderContent,
  HeaderImage,
} from "@/app/components/Header/Header";
import {
  SummaryCard,
  Summary,
  SummaryContent,
} from "@/app/components/Summary/Summary";
import {
  Table,
  TableHeader,
  TableHeaderTitle,
  TableRow,
} from "@/app/components/Table/Table";

const summaryCards = [
  {
    title: "Entradas",
    src: "/Icon_feather-arrow-down.svg",
    value: "1.529.289,52",
  },
  { title: "Saídas", src: "/Icon_feather-arrow-up.svg", value: "1.529.239,52" },
  { title: "Saldo Total", backgroundColor: "#06D6A2", value: "50,00" },
];

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

export default function Home() {
  return (
    <>
      <Header>
        <HeaderContent>
          <HeaderImage>
            <Image src="/logo.svg" alt="ticto logo" width={186} height={34} />
          </HeaderImage>
          <HeaderButton>NOVA TRANSAÇÃO</HeaderButton>
        </HeaderContent>
      </Header>
      <Summary>
        <SummaryContent>
          {summaryCards.map((card) => (
            <SummaryCard
              key={card.title}
              title={card.title}
              src={card?.src}
              backgroundColor={card?.backgroundColor}
              value={card.value}
            />
          ))}
        </SummaryContent>
      </Summary>
      <Table>
        <TableHeader>
          {tableTitle.map((title) => (
            <TableHeaderTitle key={title}>{title}</TableHeaderTitle>
          ))}
        </TableHeader>
        {tableData.map((data) => (
          <TableRow key={data.id}>
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
          </TableRow>
        ))}
      </Table>
    </>
  );
}
