import { useRouter, useSearchParams } from "next/navigation";

export const useModal = (paramName: string = "modalId") => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedId = searchParams.get(paramName);

  const openModal = (id: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(paramName, id);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const closeModal = () => {
    const params = new URLSearchParams(searchParams);
    params.delete(paramName);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return {
    selectedId,
    openModal,
    closeModal,
    isOpen: !!selectedId,
  };
};
