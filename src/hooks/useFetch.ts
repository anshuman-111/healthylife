'use client';

import React from 'react';
import { APIResponseProps } from '@/types/APIResponsePropType';

export function useFetch(url: string) {

    // Goals state holds the fetched data
    const [goals, setGoals] = React.useState<APIResponseProps[]>([]);

    // Error state holds the error message if any
    const [error, setError] = React.useState<string>("");

    // Loading state holds the loading state
    const [loading, setLoading] = React.useState<boolean>(true);

    // UseEffect to fetch data everytime the url changes
    React.useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(url);
                const data = await response.json();
                if(response.ok){
                    setGoals(data);
                    setError("");
                }else{
                    throw new Error("Error Fetching Data. Please try again later.");
                }
                
            }catch(error){
                setError("Error Fetching Data. Please try again later.");
            }finally{
                setLoading(false);
            }
        }
        

        fetchData();
    }, [url])

    return { goals, loading, error };
   
};