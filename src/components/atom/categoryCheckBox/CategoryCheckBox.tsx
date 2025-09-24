type CategoryCheckboxProps = {
  slug: string;
  onChange: (value: string) => void;
  value: string;
};

export const CategoryCheckBox = ({
  slug,
  value,
  onChange,
}: CategoryCheckboxProps) => {
  const handleChange = () => {
    onChange(value === slug ? "" : slug);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleChange();
    }
  };
  return (
    <label
      className="flex cursor-pointer items-center pb-3 pl-1"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleKeyDown(e);
        }
      }}
    >
      <input
        type="checkbox"
        name="category"
        className="mb-0 mr-3 h-5 w-5 appearance-none rounded-full border-2 border-gray-300
          checked:bg-purple-500 focus:ring-1 focus:ring-neutral-900 focus:ring-offset-1"
        checked={value === slug}
        onChange={() => handleChange()}
      />
      <span className="capitalize">{slug}</span>
    </label>
  );
};
