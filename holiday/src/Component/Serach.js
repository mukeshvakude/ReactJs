import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from 'axios';
import Navbar from "./Navbar";
import SrpSearch from "./SrpSearch";
function Search() {
    let [text, setText] = useState("");
    let [packageData, setPackageData] = useState([]);
    
    
    let [tempData, setTempdata] = useState([]);
    var tempArray = [];
    let [filterTextCalled, setFilterTextCalled] = useState(true);

    let [searchedText, setSearchedText] = useState([]);
    

    function getPackageData() {

        //API CALL
        axios.get("http://localhost:3001/Package").then(response => {
            if (response.data !== undefined) {
               // setHolidayObjectsData(response.data);
                setPackageData(response.data); //stored in array 
            }
        })
    }
    // var pageUrl = window.location.href;
    // var searchAutoSuggest = "";
    // let [searchresults ,setSearchresults ] = useState([]);
    // function setHolidayObjectsData(response) {
       
    //     response.forEach((packageSearchRes) => {

    //     let holidayObjects= {


    //         windowURL: pageUrl, //window.location.origin + window.location.pathname.toLowerCase() + window.location.search,
    //         searchParameter: '',
    //         destinationName: '',
    //         searchType: '',
    //         countryCode: '',
    //         searchCode: '',
    //         stateCode: '',
    //         searchLatitude: '',
    //         searchLongitude: '',
    //         conName: '',
    //         couName: '',
    //         staName: '',
    //         citName: '',
    //         holidayMonth: '',
    //         holidayBudget: ''
    //         // theme: getUrlParameter('theme'),
    //         // pkgSubType: getUrlParameter('subtype'),
    //         // language: getUrlParameter('language'),
    //         // eventId: getUrlParameter('eventId'),
    //         // destination: getUrlParameter('destination')
    
    //     };
        
    //     // var urlCheck = holidayObjects.windowURL;
    //     // var j = -1;
    //     //  if (urlCheck.indexOf("theme-holidays") > -1) {
    //     // for (var i = 0; i < packageSearchRes.length; i++) {
           
    //     //     if (packageSearchRes[i].searchString.toLowerCase() === holidayObjects.searchParameter) {
    //     //         j = i;
    //     //     }
    //     // }
       
    //     // }
    //     searchAutoSuggest = packageSearchRes;
       
    //     if (Object.keys(packageSearchRes).length > 0 ) {
           
    //         holidayObjects.searchType = packageSearchRes.searchType;
    //         holidayObjects.locationCode = packageSearchRes.locationCode;
    //         holidayObjects.countryCode = packageSearchRes.countryCode;
    //         holidayObjects.searchLatitude = packageSearchRes.searchLatitude;
    //         holidayObjects.searchLongitude = packageSearchRes.searchLongitude;
    //         holidayObjects.stateCode = packageSearchRes.stateCode;
    //         holidayObjects.conName = packageSearchRes.continentName;
    //         holidayObjects.couName = packageSearchRes.countryName;
    //         holidayObjects.staName = packageSearchRes.stateName;
    //         holidayObjects.citName = packageSearchRes.cityName;
    //         console.log( holidayObjects.searchType);
    //         console.log( "holidayObjects.searchType");

    //         if (holidayObjects.searchType === "CITY") {
    //             holidayObjects.searchCode = packageSearchRes.locationCode;
    //         } else if (holidayObjects.searchType === "COUNTRY") {
               
    //             holidayObjects.searchCode = packageSearchRes.countryCode;
    //         } else if (holidayObjects.searchType === "STATE") {
    //             holidayObjects.searchCode = packageSearchRes.stateCode;
    //         }
    //     }
       
        
    //     // if (holidayObjects.destinationName !== '') {
    //         if (holidayObjects.searchType === 'CITY' || holidayObjects.searchType === 'STATE' || holidayObjects.searchType === 'COUNTRY' || holidayObjects.searchType === 'CONTINENT' || holidayObjects.searchType === 'THEME') {
    //             // var a = holidayObjects.destinationName.charAt(0).toUpperCase() + holidayObjects.destinationName.slice(1);
               
    //             if(searchresults.length < 5){
    //                 searchresults.push(holidayObjects);
    //             }
    //         }
    //     // }
        

    //     });
    //     console.log(searchresults);
    //     console.log("searchresults");

    // }

    function filterText() {
        if (filterTextCalled) {
            getPackageData();
            setSearchedText(
                packageData.filter((PackageData) => {
                    if (text.length > 2) {

                        var serachData = PackageData.pkgnameIdMappingList.filter((pkg) => {
                            if (pkg.packageName.toLowerCase().includes(text.toLowerCase())) {
                                if (tempArray.length < 5) {
                                    tempArray.push(pkg);
                                    return true;
                                }
                            }
                        })
                        return serachData;
                      
                    }
                }))
            if (text.length == 1) {
                setSearchedText([]);
            }
          
            removeDuplicate(tempArray)
        }
    }

    function removeDuplicate(tempArray) {
        const unique = [];
        tempArray.map(x => unique.filter(a => a.packageId == x.packageId).length > 0 ? null : unique.push(x));
        setTempdata(unique);
    }

    function resetFilter(pkgName) {
        filterTextCalled = false;
        setFilterTextCalled(false);
        text = pkgName;
        setText(pkgName);    
        setTempdata([]);
    }

    return (
       
        <>
       
            <Navbar />
            <SrpSearch text= {text} setText = {setText} tempData = {tempData} filterTextCalled = {filterTextCalled} filterText = {filterText} resetFilter = {resetFilter} />
            
        </>
    )
}

export default Search;