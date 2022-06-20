import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import { TestComponent } from "../BasicsExample/TestComponent";
import UseContextExample from "../UseContextExample";
import UseReducerExample from "../UseReducerExample";
import ReactHookFormExample from "../ReactHookFormExample";
import ReactQueryExample from "../ReactQueryExample";
import RenderPropsExample from "../RenderPropsExample";

export default function Home() {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>React Hook Form</Tab>
          <Tab>useContext</Tab>
          <Tab>useReducer</Tab>
          <Tab>React Query</Tab>
          <Tab>render props</Tab>
          <Tab>Basics</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <ReactHookFormExample></ReactHookFormExample>
          </TabPanel>
          <TabPanel>
            <UseContextExample></UseContextExample>
          </TabPanel>
          <TabPanel>
            <UseReducerExample></UseReducerExample>
          </TabPanel>
          <TabPanel>
            <ReactQueryExample></ReactQueryExample>
          </TabPanel>
          <TabPanel>
            <RenderPropsExample></RenderPropsExample>
          </TabPanel>
          <TabPanel>
            <TestComponent></TestComponent>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
