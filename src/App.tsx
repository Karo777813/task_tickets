import React, { useState } from "react";
import { TicketsProvider, useTickets } from "./context/TicketsContext";
import { Filters } from "./components/Filters";
import { TicketsList } from "./components/TicketsList";

export const App: React.FC = () => {
  const { tickets } = useTickets();
  const [filteredStops, setFilteredStops] = useState<Set<number>>(new Set());
  const [selectedCurrency, setSelectedCurrency] = useState<string>("RUB");

  const handleFilterChange = (stops: Set<number>) => {
    setFilteredStops(stops);
  };

  const convertCurrency = (price: number, fromRate: number, toRate: number) => {
    return ((price / fromRate) * toRate).toFixed(2);
  };

  const filteredTickets = tickets.filter(
    (ticket) => filteredStops.size === 0 || filteredStops.has(ticket.stops)
  );

  return (
    <div className="app">
      <Filters
        onFilterChange={handleFilterChange}
        setSelectedCurrency={setSelectedCurrency}
        selectedCurrency={selectedCurrency}
      />
      <TicketsList
        tickets={filteredTickets}
        convertCurrency={convertCurrency}
        selectedCurrency={selectedCurrency}
      />
    </div>
  );
};

const Root: React.FC = () => (
  <TicketsProvider>
    <App />
  </TicketsProvider>
);

export default Root;
