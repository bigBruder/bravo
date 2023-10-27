// import { createClient } from "contentful";

// const useContentful = () => {
//   createClient({
//     space: "5ergat68efwn",
//   });
// };
import { useEffect, useState } from "react";
import { client } from "../client";

const useContentful = (id: string) => {
  //   const [status, setStatus] = useState({
  //     loading: false,
  //     data: undefined,
  //     error: undefined,
  //   });
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await client.getEntry(id);
        //@ts-ignore
        setData(response?.fields || null);
      } catch (err) {
        //@ts-ignore
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return { data, error, loading };
};

export default useContentful;
