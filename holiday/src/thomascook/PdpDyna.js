import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Get from './API/CommonApi';
const DynamicPackage = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    let [packageId ,setPackageId]= useState(searchParams.get("pkgId"));
    useEffect (()=>{
       
        let URL = `http://172.16.177.159:7602/tcHolidayRS/packagedetails/pdp/${packageId}`;
        console.log("PDP Page Dyna" + URL);
        Get(URL).then((response)=>{
                console.log("response ", response);
        }).catch((error)=>{
            console.log("Error" , error);
        })
        
    },[packageId]);
    return (
        <div>
            <h1>Dynamic Package PDP Page   </h1>
        </div>
    );
}

export default DynamicPackage;
