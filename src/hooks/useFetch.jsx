import { useEffect, useState } from "react";

export const useFetch = (url, initState) => {
    const [data, setData] = useState(initState);
    const [isloading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setData(res);
                setError("");
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setIsLoading(false);
                setData(initState);
            });
    }, []);

    
return {
    data,
    isloading,
    error
}
};

