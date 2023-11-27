import React, { useState, useEffect } from "react";
function useHttp(requestConfig) {
  const [response, setResponse] = useState("");
  const [filterData, setFilterData] = useState("");
  const [error, setError] = useState("");
  const [isLoding, setIsLoding] = useState(false);
  function apiHandler() {
    setIsLoding(true);
    try {
      fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        headers: requestConfig.headers ? requestConfig.headers : {},
      })
        .then((res) => res.json())
        .then((data) => {
          setResponse(data);
          setFilterData(data.result.filters);
        });
    } catch (err) {
      setError(err, "somthing went wrong");
    }
    setIsLoding(false);
  }
  return { response, filterData, error, isLoding, apiHandler };
}
export default useHttp;
