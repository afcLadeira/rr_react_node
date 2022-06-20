import { useEffect, useState } from "react";
import { fetchData } from "../../utils";


export default function CustomApiHook() {
    const { loading, data, error }  = useApiCall('https://zoo-animal-api.herokuapp.com/animals/rand')
  
    return (
      <div style={{display:'flex' ,flexDirection:'column', justifyContent:'center'}}>
        <h4>Random Animal</h4>
 {data ?   
<>  
        <div>Name: {data.name}</div>
        <div>Type: {data.animal_type}</div>
        <div>Lifespan: {data.lifespan} years</div>
        <img alt="animal" src={data.image_link}></img>
        </> 
        : null }
        <div>loading {JSON.stringify(loading)}</div>
        <div>error {JSON.stringify(error)}</div>
      </div>
    );
  }
  
  function useApiCall(url) {
  
    const [state, setState] = useState({
      loading: false,
      data: null,
      error: null,
    });
    
   
      useEffect(() => {
        setState(prevState => ({...prevState , loading: true}))
        fetchData(url).then(
          (data) =>  setState(prevState => ({...prevState , loading: false , data})),
          (error) =>  setState(prevState => ({...prevState , loading: false , error}))
        );
      }, [url]);
  
  
    return {loading: state.loading , data: state.data , error : state.error}
  
  
  }
  