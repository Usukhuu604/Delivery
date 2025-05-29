import { Button } from "@/components/ui/button";

type Props = {
  handleNextPage: () => void;
};

export const LetsGoButton = ({ handleNextPage }: Props) => {
  const handleNext = handleNextPage;

  return (
    <Button onClick={handleNext} className="w-full mt-7 bg-gray-300 hover:bg-black hover:text-white">
      Let's go
    </Button>
  );
};
