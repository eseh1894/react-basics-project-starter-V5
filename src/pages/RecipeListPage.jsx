import { Center, Heading } from "@chakra-ui/react";
import { data } from "../utils/data";

import RecipeitemCard from "../components/RecipeitemCard";

export const RecipeListPage = ({ clickFn }) => {
  return (
    <Center gap={8} h="100vh" bgColor="blackAlpha.300" flexDir="column">
      {data.hits.map((item) => (
        <RecipeitemCard clickFn={clickFn} item={item} key={item.label} />
      ))}
      <Heading>Your Recipe App</Heading>
    </Center>
  );
};
