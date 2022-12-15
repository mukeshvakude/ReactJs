import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Navbar from "./Navbar";
function Search() {
    let [text, setText] = useState("");
    let [packageData, setPackageData] = useState([]);
    let [tempData, setTempdata] = useState([]);
    var tempArray = [];
    let [filterTextCalled , setFilterTextCalled] = useState(true);
    
    // let  [tempData ,setTempdata] = useState( [
    //     { empid: 1, empname: 'Rajat Singh', salary: 150000,dept:'Web development', depiId :1 ,gender : 'male' },
    //     { empid: 2, empname: 'Pragati Chauhan', salary: 950000, dept:'Software development' ,gender : 'female' },
    //     { empid: 3, empname: 'Aditya Singh', salary: 750000 , dept:'Mobile app development' ,gender : 'male'},
    //     { empid: 4, empname: 'Manoj Singh', salary: 650000 , dept:'Admin' ,gender : 'male'},
    //     { empid: 5, empname: 'Azad Rawat', salary: 750000, dept:'Web development' ,gender : 'male'},
    //     { empid: 6, empname: 'Amit Rawat', salary: 750000, dept:'Web development',gender : 'male'},
    //     { empid: 8, empname: 'Ajay Rawat', salary: 750000, dept:'Web development',gender : 'male'},
    // ])

    let [searchedText, setSearchedText] = useState([]);


    function getPackageData (){
       
        axios.get("http://localhost:3001/Package").then(response => {
            setPackageData(response.data);
            // console.log(packageData);
        })
    }
    function filterText() {
       if(filterTextCalled){
        getPackageData();
        setSearchedText(
            packageData.filter((PackageData) => {
                if (text.length > 2) {

                    var serachData = PackageData.pkgnameIdMappingList.filter((pkg) => {
                        if (pkg.packageName.toLowerCase().includes(text.toLowerCase())) {
                            tempArray.push(pkg);
                            return true;
                        }


                    })

                    return serachData;
                    //console.log(PackageData);
                }

            }))
            if (text.length == 1) {
                setSearchedText([]);
            }
            // setTempdata(tempArray);
            removeDuplicate(tempArray)
        }

        
       
    }

    function removeDuplicate(tempArray) {

        const unique = [];

        tempArray.map(x => unique.filter(a => a.packageId == x.packageId).length > 0 ? null : unique.push(x));
        setTempdata(unique);
        console.log(tempData);
        console.log("tempData Array");

      
    }

    function resetFilter(pkgName){
        filterTextCalled = false;
        setFilterTextCalled(false);
        console.log("Inside reset filter" + pkgName);
        text = pkgName;
        setText(pkgName);
        console.log(text)
        setTempdata([]);
    }

    return (

        <>
        <Navbar title="Thomascook"/>
        <div className="container">
            
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" value = {text} placeholder="Search" onChange={(e) => { setText(e.target.value); filterText() }} aria-label="Search" />
               
                <Link className="btn btn-outline-success" to={filterTextCalled === false ? "/SRP" : "/holiday"} rel="noreferrer">
                    Search
                </Link>

            </form>

            <div>

                <table className='table table-striped'>
                    <tbody>

                        {
                            tempData.map((item, idx) => {
                                return (
                                    <tr key={idx} >

                                        <td><a onClick={() => resetFilter(item.packageName)}>  {item.packageName} </a></td>

                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
            </div>
        </>
    )
}

export default Search;