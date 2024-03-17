import { useEffect, useState } from "react"
import { getCharacters } from "../services";
import { ApiResponse, Character } from "../types";
import { AxiosError } from "axios";

const useCharacters = () => {
  const [params, setParams] = useState<string>("");
  const [data, setData] = useState<ApiResponse<Character> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await getCharacters(params);
        setData(resp.data)
      } catch (error:unknown) {
        setError(error as AxiosError)
      } finally {
        setIsLoading(false)
      }
    }

    getData();

  },[params])
 

  const handleParams = (params:string) => {        
    const paramsString = params.split("?")[1];
    setParams(paramsString);
  }

  return {
    data,
    isLoading,
    error,
    handleParams
  }

}

export default useCharacters;