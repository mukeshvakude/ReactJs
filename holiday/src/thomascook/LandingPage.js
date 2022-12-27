import React from 'react';

const LandingPage = (props) => {
    console.log("Hello");
    if (props.selectedSearchData !== undefined && JSON.stringify(props.selectedSearchData) !== "{}") {

        console.log("selectedSearchData", props.selectedSearchData);
        var selectedSearchData = props.selectedSearchData;
        var url = "holidays/";
        var destination = selectedSearchData.searchString;
        var searchType = selectedSearchData.searchType;
        var countryCode = selectedSearchData.countryCode;
        var holidayBudget = selectedSearchData.budgetHoliday;
        var holidayMonth = selectedSearchData.monthHoliday;
        var pdpPkgName = selectedSearchData.packageName;
        var isDynamicPackage = selectedSearchData.isDynamicPackage;
        var pdpSeoUrl = selectedSearchData.pdpSeoUrl;
        var pkgId = selectedSearchData.packageId;
        var urlQuery = false;
        if (pkgId !== '') {
            pdpPkgName = pdpPkgName.replace(/[^a-zA-Z0-9.]/g, '-');
            console.log("pdpPkgName", pdpPkgName);
            if (isDynamicPackage !== undefined && isDynamicPackage !== null && isDynamicPackage !== "" && isDynamicPackage === "Y") {
                url = "holidays/packages/customized/" + lsRepSpace(pdpPkgName) + "?pkgId=" + pkgId;
            }

        }
        // window.location.href = window.location.origin + "/" + url;
        console.log("FINAL URL", url);

    }
    // Ignores slash while replacing
    function lsRepSpace(ustring) {
        ustring = ustring.replace(/'/g, '');
        ustring = ustring.replace(/’/g, '');
        ustring = ustring.toLowerCase().replace(/[^a-zA-Z0-9/.]/g, '-');
        var j = 1;
        for (var i = 0; i < j; i++) {
            if (ustring.indexOf('--') !== -1) {
                ustring = ustring.replace('--', '-');
                j++;
            }
        }

        if (ustring.slice(-1) == "-") {
            ustring = ustring.slice(0, -1);
        }
        return ustring;
    }
}

export default LandingPage;
