import { useEffect, useState } from "react";
import yelp from "../api/yelp";
import { useNetworkStatusEffect } from "./useNetworkStatusEffect";
import { Results } from "../reducer/Result";



export default () => {
    
    const {isNetworkConnected} = useNetworkStatusEffect();
    const [ results , setResults ] = useState<Results[]>( [] )
    const [  errorMessage, SetErrorMessage ] = useState( "" )


    const searchApi = async (searchTerm:string) => {
        try{
            const response = await yelp.get("/search", {
                params: {
                    limit:50,
                    term: searchTerm,
                    location: "Singapore",
                }
            });
            setResults( response.data.businesses );
            SetErrorMessage('');
        } catch ( err ) {
            SetErrorMessage( "Something went wrong" );
        }
    
    }
    
    // searchApi("pasta");
    useEffect( () => {
        
        SetErrorMessage( isNetworkConnected ? "" : "network is disconnected now. Please try again later." );
       
    }, [isNetworkConnected, SetErrorMessage] )

    // useEffect( () => {
    //     // searchApi(searchTerm);
    // }, [] )

    // return [ searchApi, results, errorMessage ] as const;
    return { searchApi, results, errorMessage }
}