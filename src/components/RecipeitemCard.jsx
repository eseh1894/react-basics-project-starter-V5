import {
  Card,
  Image,
  CardBody,
  Stack,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import { Tag } from "./ui/RecipePage";

export const RecipeitemCard = ({ item, clickFn }) => {
  return (
    <Card
      borderRadius="xl"
      w="sm"
      h="30rem"
      onClick={() => clickFn(item)}
      cursor="pointer"
    >
      <CardBody>
        <Image h={64} w="sm" src={item.image} borderRadius="xl" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{item.label}</Heading>
          <Text>{item.dietLabels}</Text>
          <Flex gap={2}>
            {item.dietLabels.map((diet) => (
              <Tag key={diet}>{diet}</Tag>
            ))}
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};
