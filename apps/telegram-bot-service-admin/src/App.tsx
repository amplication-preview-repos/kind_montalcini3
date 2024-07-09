import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SummaryRequestList } from "./summaryRequest/SummaryRequestList";
import { SummaryRequestCreate } from "./summaryRequest/SummaryRequestCreate";
import { SummaryRequestEdit } from "./summaryRequest/SummaryRequestEdit";
import { SummaryRequestShow } from "./summaryRequest/SummaryRequestShow";
import { ChatMessageList } from "./chatMessage/ChatMessageList";
import { ChatMessageCreate } from "./chatMessage/ChatMessageCreate";
import { ChatMessageEdit } from "./chatMessage/ChatMessageEdit";
import { ChatMessageShow } from "./chatMessage/ChatMessageShow";
import { SummaryList } from "./summary/SummaryList";
import { SummaryCreate } from "./summary/SummaryCreate";
import { SummaryEdit } from "./summary/SummaryEdit";
import { SummaryShow } from "./summary/SummaryShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TelegramBotService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="SummaryRequest"
          list={SummaryRequestList}
          edit={SummaryRequestEdit}
          create={SummaryRequestCreate}
          show={SummaryRequestShow}
        />
        <Resource
          name="ChatMessage"
          list={ChatMessageList}
          edit={ChatMessageEdit}
          create={ChatMessageCreate}
          show={ChatMessageShow}
        />
        <Resource
          name="Summary"
          list={SummaryList}
          edit={SummaryEdit}
          create={SummaryCreate}
          show={SummaryShow}
        />
      </Admin>
    </div>
  );
};

export default App;
