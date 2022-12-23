import { useState } from "react";
import axios from 'axios';

const TcHoliday = () => {
    let [text, setText] = useState("");
    var [apiCall, setApiCall] = useState(false);
    var [otherPackagesListStartIndex, setOtherPackagesListStartIndex] = useState(0);
    var [searchData, setSearchData] = useState({ "destination": [], "holidayPackages": [], "packages": [], "packagesHeading": [], "themes": [], "otherPackagesList": [], "moreThemes": [] });


    if (text.length == 0) {
        resetSearchData();
    }

    function autoSuggestApiCall() {
        setApiCall(false);
        text = text.trim();
        if (text.length > 1 && text !== "") {
            if (apiCall == false) {
                callAPI(text);
            }

        } else {
            resetSearchData();
        }
    }
    function callAPI(text) {
        //,{params: {searchString : text}}
        axios.get('http://localhost:3001/package').then((response) => {
            autoSuggestSuccess(response.data);
            return response;
        });
        setApiCall(true);
    }
    function autoSuggestSuccess(responseData) {
        console.log("inside autoSuggestSuccess ", responseData);
        resetSearchData()
        var allTheme = [], allDestination = [], otherPackages = [], searchType = "", searchString = "";
        if (responseData.length > 0) {

            responseData.forEach((resData) => {
                if (resData.searchType !== undefined) {

                    if (resData.searchType === "THEME" || resData.searchType === "ALL THEMES") {
                        allTheme.push(resData.searchType);
                    } else if (resData.searchType === "Z_NAME") {
                        otherPackages.push(resData.searchType);
                    } else {
                        allDestination.push(resData.searchType);
                    }
                }

            })
            console.log("allTheme", allTheme);
            console.log("otherPackages", otherPackages);
            console.log("allDestination", allDestination);

            responseData.forEach((resData) => {

                searchType = resData.searchType;
                searchString = resData.searchString;
                console.log("resData" + resData);
                if (searchType !== "THEME" && searchType !== "Z_NAME" && searchString !== "ALL THEMES" && searchString !== "") {
                    if (allDestination.length > 0) {
                        searchData.destination.push(resData);
                    }
                }
                else if (allTheme.indexOf("THEME") > -1 || allTheme.indexOf("ALL THEMES") > -1) {

                    if (searchType == "THEME" || searchType == "ALL THEMES") {
                        searchData.themes.push(resData);
                    }
                }
                else if (otherPackages.indexOf("Z_NAME") > -1 || (allTheme.indexOf("THEME") === -1 && allDestination.length === 0)) {
                    if (searchType === "Z_NAME") {
                        searchData.otherPackagesList.push(resData);
                    }
                }

            })
            //Show holiday ,theme ,etc  Packages Start
            var maxIndex = 4, minIndex = 0;
            searchData.destination.forEach((holiday) => {
                getThemeHoldayOtherPackages(holiday, minIndex, maxIndex, false);
                minIndex = maxIndex + 1;
                maxIndex = maxIndex + 5;
            })
            searchData.themes.forEach((theme) => {
                if (theme.searchType == "THEME" || theme.searchType == "ALL THEMES") {
                    getThemeHoldayOtherPackages(theme, minIndex, maxIndex, false);
                    minIndex = maxIndex + 1;
                    maxIndex = maxIndex + 5;
                }
            })
            /**This add only showing the Holiday Tags in serach UI  **/
            setOtherPackagesListStartIndex(searchData.holidayPackages.length);
            minIndex = searchData.holidayPackages.length;

            searchData.otherPackagesList.forEach((otherPackage) => {
                if (otherPackage.searchType === "Z_NAME") {
                    getThemeHoldayOtherPackages(otherPackage, minIndex, maxIndex, true);
                    minIndex = maxIndex + 1;
                    maxIndex = maxIndex + 5;
                }
            })
            //Show holiday ,theme ,etc  Packages End


        }

        console.log("Search Object", searchData);
    }

    function getThemeHoldayOtherPackages(holiday, minIndex, maxIndex, isOtherPackage) {
        var packageHeadings = autoSuggestTheme(holiday.searchType, holiday.searchString);
        searchData.packagesHeading.push({ "minIndex": minIndex, "maxIndex": maxIndex, "packageHeading": packageHeadings, "isOtherPackage": isOtherPackage });
        var hp = holiday.pkgnameIdMappingList.length;
        var temp = [];
        if (hp > 0) {

            holiday.pkgnameIdMappingList.forEach((packageMappingList, index) => {

                if (index < 5) {
                    if (!temp.includes(packageMappingList.packageId)) {

                        packageMappingList.searchType = holiday.searchType;
                        packageMappingList.searchString = holiday.searchString;
                        packageMappingList.isOtherPackage = isOtherPackage;
                        searchData.holidayPackages.push(packageMappingList);


                    } else {
                        temp.push(packageMappingList.packageId);
                    }
                }
            })
        } else {
            //More Themes Implementations
            if (holiday.themeName.length > 0) {
                console.log("ALL THEMES", holiday);
                for (var pn = 0; pn < holiday.themeName.length; pn++) {
                    searchData.moreThemes.push(holiday.themeName[pn]);
                }
            }
        }
    }
    function autoSuggestTheme(searchType, searchString) {

        if (searchType == "THEME") {
            searchString = 'Top ' + searchString + ' Packages';
        } else if (searchType == "Z_NAME") {
            searchString = 'Packages';
        } else {
            if (searchType == "ALL THEMES") {
                searchString = "More Themes..";
            } else {
                searchString = 'Top ' + searchString + ' Holiday Packages';
            }
        }
        return searchString;
    }
    function resetSearchData() {
        searchData.destination = [];
        searchData.holidayPackages = [];
        searchData.packages = [];
        searchData.packagesHeading = [];
        searchData.themes = [];
        searchData.otherPackagesList = [];
        otherPackagesListStartIndex = 0;
        searchData.moreThemes = [];
    }
    // first argument is a string to cache and track the query result



    return (<>
        <div>
            <div className="container">

                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" value={text} placeholder="Search" onChange={(e) => { setText(e.target.value); autoSuggestApiCall() }} aria-label="Search" />
                </form>

                <div>
                    <table className='table table-striped'>
                        <tbody>
                            {/* Destination Heading Start */}
                            {text.length > 1 && searchData.destination.length > 0 && (
                                <tr>
                                    <td><b>Destination</b></td>
                                </tr>
                            )}
                            {/* Destination Heading End */}
                            {/* All Destinations  Start */}
                            {

                                searchData.destination.map((dest, idx) => {
                                    return (
                                        <tr key={idx} >
                                            <td><a>  {dest.searchString} </a></td>
                                        </tr>
                                    )
                                })

                            }
                            {/* All Destinations  End */}

                            {/* Theme Heading Start */}
                            {text.length > 1 && searchData.themes.length > 0 && (
                                <tr>
                                    <td><b>Theme</b></td>
                                </tr>
                            )}
                            {/* Theme Heading End */}
                            {/*  THEME Start */}
                            {

                                searchData.themes.map((theme, idx) => {
                                    return (
                                        theme.searchString !== "" && theme.searchString !== "ALL THEMES" && (
                                            <tr key={idx} >
                                                <td><a>  {theme.searchString} </a></td>
                                            </tr>
                                        )
                                    )
                                })

                            }
                            {/* THEME End */}

                            {/* AllPackages Start*/}
                            {text.length > 1 && searchData.packagesHeading.length > 0 && (
                                searchData.packagesHeading.map((heading, headingIndex) => {
                                    return (
                                        <tr key={"pacHeading_" + headingIndex}>
                                            {(heading.minIndex === otherPackagesListStartIndex) && (heading.isOtherPackage === true) ?

                                                <tr>
                                                    <td>
                                                        <b>{heading.packageHeading}</b>
                                                    </td>
                                                </tr>
                                                :
                                                <tr>
                                                    <td>
                                                        <b>{heading.isOtherPackage === false && heading.packageHeading}</b>
                                                    </td>
                                                </tr>
                                            }



                                            {searchData.holidayPackages.map(function (holidayPack, holidayPackIndex) {

                                                return (
                                                    holidayPackIndex >= heading.minIndex && holidayPackIndex <= heading.maxIndex && (
                                                        <tr key={holidayPack.packageId + "_" + holidayPackIndex}>
                                                            <td>{holidayPack.packageName}</td>
                                                        </tr>
                                                    ));

                                            })}
                                        </tr>
                                    );
                                })
                            )}

                            {text.length > 1 && searchData.moreThemes.length > 0 && searchData.moreThemes.map(function (moreTheme, moreThemeIndex) {

                                return (

                                    <tr key={"moretheme_" + moreThemeIndex}>
                                        <td>{moreTheme}</td>
                                    </tr>
                                )
                            })}
                            {/* AllPackages END*/}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </>);
}

export default TcHoliday;
