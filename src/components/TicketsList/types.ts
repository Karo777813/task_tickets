import { Ticket } from "../../context/types";

export interface TicketsListProps {
  tickets: Ticket[];

  convertCurrency: (price: number, fromRate: number, toRate: number) => string;
  selectedCurrency: string;
}
