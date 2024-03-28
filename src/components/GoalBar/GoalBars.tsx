import { HStack, Text, Spacer, Button } from "@chakra-ui/react";
import { FaArrowRightLong } from "react-icons/fa6";

interface GoalBarsProps {
  index: number;
  title: string;

  onClick: () => void;
}

const GoalBars: React.FC<GoalBarsProps> = ({ index, title, onClick }) => {
  return (
    <>
      {" "}
      <Button
        key={index}
        variant={"none"}
        w={"100%"}
        onClick={onClick}
        h={"65px"}
      >
        <HStack
          transition="transform, 0.3s ease-in-out"
          _hover={{
            transform: "scale(1.03)",
            boxShadow: "0 5px 20px gray",
          }}
          rounded={"xl"}
          boxShadow={"0 1px 8px gray"}
          w={"100%"}
          h={"100%"}
          justify={"left"}
          align={"center"}
          px={5}
        >
          <Text fontSize={"20px"} textAlign={"left"}>
            {title}
          </Text>
          <Spacer />
          <Text fontSize={"20px"} textAlign={"left"}>
            <FaArrowRightLong />
          </Text>
        </HStack>
      </Button>
    </>
  );
};

export default GoalBars;
