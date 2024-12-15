import React, { createContext, useContext, useEffect, useState } from "react";
import { Ticket, TicketsContextType } from "./types";

const TicketsContext = createContext<TicketsContextType | undefined>(undefined);

export const TicketsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch("/public/flights.json");
        const data = await response.json();
        setTickets(data.tickets);
      } catch (error) {
        console.error("Ошибка загрузки данных:", error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <TicketsContext.Provider value={{ tickets, setTickets }}>
      {children}
    </TicketsContext.Provider>
  );
};

export const useTickets = () => {
  const context = useContext(TicketsContext);
  if (!context) {
    throw new Error("useTickets должен использоваться внутри TicketsProvider");
  }
  return context;
};
