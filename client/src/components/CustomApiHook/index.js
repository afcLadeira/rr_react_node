import { Button } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { fetchData } from "../../utils";

export default function CustomApiHook() {
  const { loading, data, error, getData } = useApiCall(
    "https://zoo-animal-api.herokuapp.com/animals/rand"
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h4>Random Animal</h4>
      {data ? (
        <>
          <div>Name: {data.name}</div>
          <div>Type: {data.animal_type}</div>
          <div>Lifespan: {data.lifespan} years</div>
          <img alt="animal" src={data.image_link}></img>
        </>
      ) : null}
      <div>loading {JSON.stringify(loading)}</div>
      <div>error {JSON.stringify(error)}</div>
      <Button
        isLoading={loading}
        loadingText="Loading"
        colorScheme="teal"
        variant="outline"
        spinnerPlacement="end"
        onClick={() =>
          getData("https://zoo-animal-api.herokuapp.com/animals/rand")
        }
      >
        new animal
      </Button>
    </div>
  );
}

function useApiCall(url) {
  const [state, setState] = useState({
    loading: false,
    data: null,
    error: null,
  });

  const getData = useCallback(async () => {
    setState((prevState) => ({ ...prevState, loading: true }));
    fetchData(url).then(
      (data) =>
        setState((prevState) => ({ ...prevState, loading: false, data })),
      (error) =>
        setState((prevState) => ({ ...prevState, loading: false, error }))
    );
  }, [url]);

  useEffect(() => {
    // setState(prevState => ({...prevState , loading: true}))
    // fetchData(url).then(
    //   (data) =>  setState(prevState => ({...prevState , loading: false , data})),
    //   (error) =>  setState(prevState => ({...prevState , loading: false , error}))
    // );
    getData();
  }, [getData, url]);

  return {
    loading: state.loading,
    data: state.data,
    error: state.error,
    getData,
  };
}
