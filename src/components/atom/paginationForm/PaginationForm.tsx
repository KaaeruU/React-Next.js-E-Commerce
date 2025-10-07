"use client";

import { useActionState } from "react";
import { useCategoryParams } from "@/src/hooks/useCategoryParams";
import { updateFiltersAction } from "@/src/lib/actions/updateFilter";

type PaginationFormProps = {
  page: number;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  limit?: number;
  onPageChange?: (page: number, skip: number) => void;
};

export const PaginationForm = ({
  page,
  children,
  disabled = false,
  className = "",
  limit = 9,
  onPageChange,
}: PaginationFormProps) => {
  const { getCurrentCategory } = useCategoryParams();
  const [, formAction] = useActionState(updateFiltersAction, null);

  const skip = (page - 1) * limit;

  const handleFormSubmit = (formData: FormData) => {
    const pageValue = Number(formData.get("page"));
    const skipValue = Number(formData.get("skip"));
    const currentCategory = getCurrentCategory();

    if (currentCategory) formData.append("category", currentCategory);
    formData.append("page", pageValue.toString());
    formData.append("skip", skipValue.toString());

    // Call the callback if provided
    if (onPageChange) {
      onPageChange(pageValue, skipValue);
    }

    formAction(formData);
  };

  return (
    <form action={handleFormSubmit} className="contents">
      <input type="hidden" name="page" value={page.toString()} />
      <input type="hidden" name="skip" value={skip.toString()} />

      <button type="submit" disabled={disabled} className={className}>
        {children}
      </button>
    </form>
  );
};
