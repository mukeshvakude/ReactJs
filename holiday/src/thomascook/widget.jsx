import { useState } from "react";
import LandingPage from "./LandingPage";
import { Link } from "react-router-dom";
import CommonStore from "../Store/CommonStore";
const Widget = (props) => {
    //CSS Style
    const mystyle = {
        listStyleType: 'none'
    }
    var [isSubmitSearchClicked, setISubmitSearchClicked] = useState(false);
    var updatedURL = CommonStore.useState(s => s.URL);
    var newURL = updatedURL.trim();

    return (
        <>
        {/* When click on Submit button and if all validation true then create new URL and rendor on landing page for selecetd  Package */}
        {(props.selectedSearchData !== undefined && JSON.stringify(props.selectedSearchData) !== "{}")  && <LandingPage selectedSearchData ={props.selectedSearchData}/>}
            <div>
                <div className="container">
                    
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" value={props.text} placeholder="Destination e.g. Europe / Theme e.g. Adventure" onChange={(e) => { props.setText(e.target.value); props.Search(); setISubmitSearchClicked(false) }} aria-label="Search" />
                        {/* <button type="button" onClick={(event) => { submitSearch(event) }}>Search</button> */}
                        <button type="button" onClick={() => {  setISubmitSearchClicked(true);}}> <Link to= {newURL} > Search</Link></button>
                    </form>
                    {isSubmitSearchClicked === true && props.text.length == 0 && "No Result Founds"}

                    <div>
                        <div className='table table-striped'>
                            <div>
                                <div>
                                    {/* Destination Heading Start */}
                                    {props.text.length > 1 && props.searchData.destination.length > 0 && (
                                        <ul style={mystyle}>
                                            <li ><b>Destination</b></li>
                                        </ul>
                                    )}
                                    {/* Destination Heading End */}
                                    {/* All Destinations  Start */}
                                    {

                                        props.searchData.destination.map((dest, idx) => {
                                            return (
                                                <ul style={mystyle} key={idx} >
                                                    <li onClick={() => props.showTextInSearchBox(dest.searchString, dest)}><a >  {dest.searchString} </a></li>
                                                </ul>
                                            )
                                        })

                                    }
                                    {/* All Destinations  End */}

                                    {/* Theme Heading Start */}
                                    {props.text.length > 1 && props.searchData.themes.length > 0 && (
                                        <ul style={mystyle}>
                                            <li><b>Theme</b></li>
                                        </ul>
                                    )}
                                    {/* Theme Heading End */}
                                    {/*  THEME Start */}
                                    {

                                        props.searchData.themes.map((theme, idx) => {
                                            return (
                                                theme.searchString !== "" && theme.searchString !== "ALL THEMES" && (
                                                    <ul style={mystyle} key={idx} >
                                                        <li onClick={() => props.showTextInSearchBox(theme.searchString, theme)}><a>  {theme.searchString} </a></li>
                                                    </ul>
                                                )
                                            )
                                        })

                                    }
                                    {/* THEME End */}
                                </div>
                                {/* AllPackages Start*/}
                                {props.text.length > 1 && props.searchData.packagesHeading.length > 0 && (
                                    props.searchData.packagesHeading.map((heading, headingIndex) => {
                                        return (
                                            <div key={"packHeading_" + headingIndex}>
                                                {(heading.minIndex === props.otherPackagesListStartIndex) && (heading.isOtherPackage === true) ?

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



                                                {props.searchData.holidayPackages.map(function (holidayPack, holidayPackIndex) {

                                                    return (
                                                        holidayPackIndex >= heading.minIndex && holidayPackIndex <= heading.maxIndex && (
                                                            <ul style={mystyle} key={holidayPack.packageId + "_" + holidayPackIndex}>
                                                                <li onClick={() => props.showTextInSearchBox(holidayPack.packageName, holidayPack)}>{holidayPack.packageName}</li>
                                                            </ul>
                                                        ));

                                                })}
                                            </div>
                                        );
                                    })
                                )}

                                {props.text.length > 1 && props.searchData.moreThemes.length > 0 && props.searchData.moreThemes.map(function (moreTheme, moreThemeIndex) {

                                    return (

                                        <ul style={mystyle} key={"moretheme_" + moreThemeIndex}>
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
            
        </>
    );
}

export default Widget;
