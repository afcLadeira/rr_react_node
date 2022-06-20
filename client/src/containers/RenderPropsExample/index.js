import { Heading } from "@chakra-ui/react";
import CustomList from "../../components/CustomList";

export default function RenderPropsExample() {
  const data = [
    { id: 1, name: "item1" },
    { id: 2, name: "item2" },
    { id: 3, name: "item3" },
  ];

  return (
    <CustomList
      data={data}
      renderTitle={() => <Heading> render props example</Heading>}
      renderItem={(item) => <li key={item.id}>{item.name}</li>}
    ></CustomList>
  );
}
