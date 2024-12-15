export interface FiltersProps {
  onFilterChange: (stops: Set<number>) => void;
  selectedCurrency: string;
  setSelectedCurrency: (currency: string) => void;
}
