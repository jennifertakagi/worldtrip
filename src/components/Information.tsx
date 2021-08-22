import {  FiInfo } from "react-icons/fi";
import { Flex, Icon, Text, Tooltip } from "@chakra-ui/react";

interface InfoProps {
  legend: string;
  numberOf: number;
  hasTooltip?: boolean;
}

export function Information({ legend, numberOf, hasTooltip = false }: InfoProps) {
  return (
    <Flex direction="column" align={["flex-start", "center"]} px={["0", "2"]}>
      <Text as="span" fontSize={["2xl", "5xl"]} color="yellow.500" fontWeight="600">
        {numberOf}
      </Text>
      {hasTooltip ? (
        <Flex align="center">
          <Text fontSize={["lg","2xl"]} fontWeight={["400", "600"]}>
            {legend}
          </Text>

          <Tooltip label="the most visited cities" bg="gray.600" color="gray.50">
            <span>
              <Icon as={FiInfo} fontSize={["xs", "md"]} opacity="0.5" ml="5px"/>
            </span>
          </Tooltip>
        </Flex>
      ) : (
        <Text fontSize={["lg","2xl"]} fontWeight={["400", "600"]}>{legend}</Text>
      )}
    </Flex>
  );
}