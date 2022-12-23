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
            <SrpSearch text={text} setText={setText} tempData={tempData} filterTextCalled={filterTextCalled} filterText={filterText} resetFilter={resetFilter} />

        </>

    )
}

export default Search;