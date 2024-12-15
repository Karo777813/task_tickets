import React from "react";
import "./styles.css";
import { TicketsListProps } from "./types";
import { currencyRates, currencys } from "../../constants";

export const TicketsList: React.FC<TicketsListProps> = ({
  tickets,
  convertCurrency,
  selectedCurrency,
}) => {
  const fromRate = 1;
  const toRate = currencyRates[selectedCurrency];
  return (
    <main className="tickets">
      {tickets
        .sort((a, b) => a.price - b.price)
        .map((ticket, index) => {
          const convertedPrice = convertCurrency(
            ticket.price,
            fromRate,
            toRate
          );
          return (
            <div key={index} className="ticket">
              <div className="ticket-header">
                <span className="carrier">{ticket.carrier}</span>
                <span className="price">
                  Купить за {convertedPrice} {currencys[selectedCurrency]}
                </span>
              </div>
              <div className="ticket-details">
                <div className="time-location">
                  <strong className="time">{ticket.departure_time}</strong>
                  <span className="location">
                    {ticket.origin_name} ({ticket.origin})
                  </span>
                </div>
                <div className="time-location">
                  <strong className="time">{ticket.arrival_time}</strong>
                  <span className="location">
                    {ticket.destination_name} ({ticket.destination})
                  </span>
                </div>
              </div>
              <div className="stops">
                {ticket.stops === 0
                  ? "Без пересадок"
                  : `${ticket.stops} пересадка${ticket.stops > 1 ? "и" : ""}`}
              </div>
            </div>
          );
        })}
    </main>
  );
};
