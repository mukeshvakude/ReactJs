import { useState } from "react";
import axios from 'axios';

const TcHoliday = () => {
    let [text, setText] = useState("");
    var [apiCall, setApiCall] = useState(false);
    var [otherPackagesListStartIndex, setOtherPackagesListStartIndex] = useState(0);
    var [searchData, setSearchData] = useState({ "destination": [], "holidayPackages": [], "packages": [], "packagesHeading": [], "themes": [], "otherPackagesList": [], "moreThemes": [] });
    //CSS Style
    const mystyle={
        listStyleType:'none'
    }

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
                        packageMappingList.cityName = holiday.cityName;
                        packageMappingList.countryCode = holiday.countryCode;
                        packageMappingList.countryName = holiday.countryName;
                        packageMappingList.continentName = holiday.continentName;
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

    function showTextInSearchBox(selectedValue){
        setText(selectedValue);
        resetSearchData();
    }


    return (<>
        <div>
            <div className="container">

                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" value={text} placeholder="Destination e.g. Europe / Theme e.g. Adventure" onChange={(e) => { setText(e.target.value); autoSuggestApiCall() }} aria-label="Search" />
                </form>

                <div>
                    <div className='table table-striped'>
                        <div>
                            <div>
                            {/* Destination Heading Start */}
                            {text.length > 1 && searchData.destination.length > 0 && (
                                <ul style={mystyle}>
                                    <li ><b>Destination</b></li>
                                </ul>
                            )}
                            {/* Destination Heading End */}
                            {/* All Destinations  Start */}
                            {

                                searchData.destination.map((dest, idx) => {
                                    return (
                                        <ul style={mystyle}key={idx} >
                                            <li onClick={() => showTextInSearchBox(dest.searchString)}><a >  {dest.searchString} </a></li>
                                        </ul>
                                    )
                                })

                            }
                            {/* All Destinations  End */}

                            {/* Theme Heading Start */}
                            {text.length > 1 && searchData.themes.length > 0 && (
                                <ul style={mystyle}>
                                    <li><b>Theme</b></li>
                                </ul>
                            )}
                            {/* Theme Heading End */}
                            {/*  THEME Start */}
                            {

                                searchData.themes.map((theme, idx) => {
                                    return (
                                        theme.searchString !== "" && theme.searchString !== "ALL THEMES" && (
                                            <ul style={mystyle}key={idx} >
                                                <li onClick={() => showTextInSearchBox(theme.searchString)}><a>  {theme.searchString} </a></li>
                                            </ul>
                                        )
                                    )
                                })

                            }
                            {/* THEME End */}
                            </div>
                            {/* AllPackages Start*/}
                            {text.length > 1 && searchData.packagesHeading.length > 0 && (
                                searchData.packagesHeading.map((heading, headingIndex) => {
                                    return (
                                        <div key={"packHeading_" + headingIndex}>
                                            {(heading.minIndex === otherPackagesListStartIndex) && (heading.isOtherPackage === true) ?

                                                <ul style={mystyle}>
                                                    <li>
                                                        <b>{heading.packageHeading}</b>
                                                    </li>
                                                </ul>
                                                :
                                                <ul style={mystyle}>
                                                    <li>
                                                        <b>{heading.isOtherPackage === false && heading.packageHeading}</b>
                                                    </li>
                                                </ul>
                                            }



                                            {searchData.holidayPackages.map(function (holidayPack, holidayPackIndex) {

                                                return (
                                                    holidayPackIndex >= heading.minIndex && holidayPackIndex <= heading.maxIndex && (
                                                        <ul style={mystyle}key={holidayPack.packageId + "_" + holidayPackIndex}>
                                                            <li onClick={() => showTextInSearchBox(holidayPack.packageName)}>{holidayPack.packageName}</li>
                                                        </ul>
                                                    ));

                                            })}
                                        </div>
                                    );
                                })
                            )}

                            {text.length > 1 && searchData.moreThemes.length > 0 && searchData.moreThemes.map(function (moreTheme, moreThemeIndex) {

                                return (

                                    <ul style={mystyle}key={"moretheme_" + moreThemeIndex}>
                                        <li>{moreTheme}</li>
                                    </ul>
                                )
                            })}
                            {/* AllPackages END*/}

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>);
}

export default TcHoliday;
