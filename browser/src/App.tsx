import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import MicroFrontend from "./MicroFrontend";
import { createMemoryHistory } from "history";

const { REACT_APP_FILE_HOST: fileHost } = process.env;

interface Entries {
  id: string;
  name: string;
}

interface EntriesData {
  getFolderEntries: Entries[];
}

interface GetEntriesVars {
  path: string;
}

const GET_FOLDER_ENTRIES = gql`
  query getFolderEntries($path: String!) {
    getFolderEntries(id: $path) {
      id
      name
    }
  }
`;

const App: React.FC<{
  history: History;
}> = ({ history }) => {
  const { loading, data, error } = useQuery<EntriesData, GetEntriesVars>(
    GET_FOLDER_ENTRIES,
    { variables: { path: window.location.pathname } }
  );

  return error ? (
    <p>{JSON.stringify(error)}</p>
  ) : loading ? (
    <p>Loading...</p>
  ) : (
    <>
      {data?.getFolderEntries.map((el: Entries) => {
        const history = createMemoryHistory();
        history.push(el.id, { id: el.id, name: el.name });
        console.log("==> state", history.entries[0].pathname);

        return (
          <MicroFrontend
            history={history}
            host={fileHost}
            name="File"
            key={el.id}
            uk={el.id}
          />
        );
      })}
    </>
  );
};

export default App;
