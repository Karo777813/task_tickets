import React, { useState } from "react";
import "./styles.css";
import { FiltersProps } from "./types";

export const Filters: React.FC<FiltersProps> = ({
  onFilterChange,
  setSelectedCurrency,
  selectedCurrency,
}) => {
  const [selectedStops, setSelectedStops] = useState(new Set<number>());

  const handleChange = (stop: number) => {
    const newStops = new Set(selectedStops);
    if (newStops.has(stop)) {
      newStops.delete(stop);
    } else {
      newStops.add(stop);
    }
    setSelectedStops(newStops);
    onFilterChange(newStops);
  };

  return (
    <aside className="filters">
      <div>
        <h3 className="filters-title">Валюта</h3>
        <div className="filters-currency-options">
          {["RUB", "USD", "EUR"].map((currency) => {
            const isSelectedCurrency = selectedCurrency === currency;
            return (
              <button
                className={`filters-currency-button ${
                  isSelectedCurrency ? "is-Active-Currency-button" : ""
                }`}
                key={currency}
                onClick={() => setSelectedCurrency(currency)}
              >
                {currency}
              </button>
            );
          })}
        </div>
        <h3 className="filters-title">Количество пересадок</h3>
        <div className="filters-options">
          {[0, 1, 2, 3].map((stop) => (
            <label key={stop} className="filters-option">
              <input
                type="checkbox"
                className="filters-checkbox"
                checked={selectedStops.has(stop)}
                onChange={() => handleChange(stop)}
              />
              <span className="filters-label">
                {stop === 0
                  ? "Без пересадок"
                  : `${stop} пересадка${stop > 1 ? "и" : ""}`}
              </span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};
