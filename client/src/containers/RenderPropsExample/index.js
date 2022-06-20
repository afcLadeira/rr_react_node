import { Heading } from "@chakra-ui/react";
import CustomList from "../../components/CustomList";

export default function RenderPropsExample() {
  const data = ["item1", "item2", "item3"];

  return (
    <CustomList
      data={data}
      renderTitle={() => <Heading> render props example</Heading>}
      renderItem={(item) => <li>{item}</li>}
    ></CustomList>
  );
}
