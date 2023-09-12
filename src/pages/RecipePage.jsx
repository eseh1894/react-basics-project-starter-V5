import {
  Center,
  Image,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Tag } from "../components/ui/RecipePage";

export const RecipePage = ({ item, clickFn }) => {
  return (
    <Center bgColor={"green.300"} h="100vh" flexDirection="column">
      <Card borderRadius="xl" w="3xl" h="3xl">
        <CardBody>
          <Image h="md" w="100%" src={item.image} borderRadius="xl" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{item.label}</Heading>
            <Text>{item.healthLabels}</Text>
            <Flex gap={2}>
              {item.dietLabels.map((diet) => (
                <Tag key={diet} size="md">
                  {diet}
                </Tag>
              ))}
            </Flex>
            <Button w="fit-content" onClick={() => clickFn()}>
              Back to list
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </Center>
  );
};
