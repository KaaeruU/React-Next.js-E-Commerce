import { UseFormReturn } from "react-hook-form";

export interface CardSorterProps {
  form: UseFormReturn<
    {
      category: string;
      sortBy: string;
      order: string;
      page: string;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,
    {
      category: string;
      sortBy: string;
      order: string;
      page: string;
    }
  >;
  numberOfProducts?: number;
  onSortChange?: (filters: {
    category?: string;
    sortBy?: string;
    order?: string;
    limit?: string;
  }) => void;
}
