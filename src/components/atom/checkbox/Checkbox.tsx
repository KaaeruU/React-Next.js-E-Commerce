import { ControllerRenderProps } from "react-hook-form";

// Create: src/components/molecules/cardSorter/CheckboxField.tsx
interface CheckboxFieldProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: ControllerRenderProps<any, any>;
  value: string;
  label: string;
}

export const CheckboxField = ({ field, value, label }: CheckboxFieldProps) => {
  const isChecked = field.value === value;
  const handleToggle = () => field.onChange(isChecked ? "" : value);

  return (
    <label className="flex cursor-pointer items-center">
      <input
        type="checkbox"
        className="mr-2 h-4 w-4 accent-purple-500"
        checked={isChecked}
        onChange={handleToggle}
      />
      <span>{label}</span>
    </label>
  );
};
