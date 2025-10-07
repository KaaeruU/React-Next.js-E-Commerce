import { UseFormReturn } from "react-hook-form";
import { Categories } from "@/src/types/categories-type";

export interface CardFilterProps {
  form: UseFormReturn<
    {
      category: string;
      sortBy: string;
      order: string;
      page: string;
      skip?: number;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,
    {
      category: string;
      sortBy: string;
      order: string;
      page: string;
      skip?: number;
    }
  >;
  onFilterChange?: (filters: {
    category?: string;
    sortBy?: string;
    order?: string;
    limit?: string;
  }) => void;
  categories?: Categories[];
  isFormDisabled?: boolean;
}
