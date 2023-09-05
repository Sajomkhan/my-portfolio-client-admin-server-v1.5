
import { base_url } from "../baseUrl";
// import useSWR from 'swr'

// const fetcher = (...args) => fetch(...args).then((res) => res.json())

// export function getData(subUrl) {
//   const { data, error, isLoading } = useSWR(base_url + subUrl, fetcher)

//   if (error) return error
//   if (isLoading) return isLoading
//   return data
// }

export const getData = async (subUrl) => {
    const res = await fetch(base_url + subUrl, {
      cache: "force-cache",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  };

