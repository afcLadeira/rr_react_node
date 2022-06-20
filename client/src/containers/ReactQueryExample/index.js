import { Button, Heading, Spinner } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { fetchData } from "../../utils";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function ReactQueryTest() {

  
  const { data, error, status, refetch , isFetching } = useQuery("users", () =>
    fetchData("/api/users")
  );

  let dataTable = data && (
    <>
     {isFetching ? null : <Button colorScheme="blue" onClick={refetch}>
        Refetch
      </Button>}
   
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Random Users</TableCaption>
        <Thead>
          <Tr>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>IP</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={item.id}>
              <Td>{item.first_name}</Td>
              <Td>{item.last_name}</Td>
              <Td>{item.ip_address}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
    </>
  );

  return (
    <div>
      <Heading >react-query: basic</Heading>
      <div>
        
        {status === "error" && <div>{error.message}</div>}

        {(status === "loading" || isFetching) && <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>}

        {status === "success" && <div>{dataTable}</div>}
      </div>

     
     
    </div>
  );
}
