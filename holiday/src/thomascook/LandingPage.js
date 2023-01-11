
import CommonStore from '../Store/CommonStore';
const LandingPage = (props) => {
    
    if (props.selectedSearchData !== undefined && JSON.stringify(props.selectedSearchData) !== "{}") {

        console.log("selectedSearchData", props.selectedSearchData);
        var selectedSearchData = props.selectedSearchData;
        var url = "";//need to change later
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
        if (pkgId !== '' && pkgId !== undefined) {
            console.log("pdpPkgName", pdpPkgName);
            console.log("Package Id" , pkgId);
            pdpPkgName = pdpPkgName.replace(/[^a-zA-Z0-9.]/g, '-');
            
            if (isDynamicPackage !== undefined && isDynamicPackage !== null && isDynamicPackage !== "" && isDynamicPackage === "Y") {
                url = "packages/customized/" + lsRepSpace(pdpPkgName) + "/pkgId/" + pkgId;
            } else {
                if (pdpSeoUrl != null && pdpSeoUrl != 'undefined' && pdpSeoUrl != '') {
                    pdpSeoUrl = pdpSeoUrl.replace(/[^a-zA-Z0-9.]/g, '-');
                    var j = 1;
                    for (var i = 0; i < j; i++) {
                        if (pdpSeoUrl.indexOf('--') !== -1) {
                            pdpSeoUrl = pdpSeoUrl.replace('--', '-');
                            j++;
                        }
                    }
                    if (pdpSeoUrl.slice(-1) == "-") {
                        pdpSeoUrl = pdpSeoUrl.slice(0, -1);
                    }
                } else {
                    var j = 1;
                    for (var i = 0; i < j; i++) {
                        if (pdpPkgName.indexOf('--') !== -1) {
                            pdpPkgName = pdpPkgName.replace('--', '-');
                            j++;
                        }
                    }
                    if (pdpPkgName.slice(-1) == "-") {
                        pdpPkgName = pdpPkgName.slice(0, -1);
                    }
                }
                //url = lsRepSpace(url);
                if (sessionStorage.getItem('compare') === 0 || sessionStorage.getItem('compare') === undefined || sessionStorage.getItem('compare') === null)
                    sessionStorage.setItem('compare', "0");

                if (searchType === 'THEME') {

                    if (window.location.href.indexOf("india-tour-packages") > -1) {
                        url += "india-tour-packages/";
                    } else if (window.location.href.indexOf("international-tour-packages") > -1) {
                        url += "international-tour-packages/";
                    }
                    url += lsRepSpace(destination) + '-tour-packages/';
                    if (pdpSeoUrl != null && pdpSeoUrl != 'undefined' && pdpSeoUrl != '') {
                        url += pdpSeoUrl;
                    } else {
                        url += pdpPkgName;
                    }
                    url = lsRepSpace(url);
                    if (countryCode === 'IN') {
                        url += '/pkgId/' + pkgId + '/theme/' + pkgId + '_' + destination + '_' + '0' + '/destTag/' + destination;
                    } else {
                        url += '/pkgId/' + pkgId + '/theme/' + pkgId + '_' + destination + '_' + '1';
                    }
                } else {

                    if (searchType === 'CONTINENT') {
                        url += 'international-tour-packages/' + destination + '-tour-packages';
                    } else if (searchType === 'COUNTRY') {
                        if (countryCode === 'IN' /*|| countryCode === 'NP' */ || countryCode === 'BT' || countryCode === 'LK') {
                            if (countryCode === 'IN') {
                                url += 'india-tour-packages/india-tour-packages';
                            } else {
                                url += 'india-tour-packages/' + destination + '-tour-packages';
                            }
                        } else {
                            url += 'international-tour-packages/' + destination + '-tour-packages';
                        }
                    } else if (searchType === 'STATE') {
                        url += 'india-tour-packages/' + destination + '-tour-packages';
                    } else if (searchType === 'CITY') {
                        if (countryCode === 'IN'/*|| countryCode === 'NP' */ || countryCode === 'BT' || countryCode === 'LK') {
                            url += 'india-tour-packages/' + destination + '-tour-packages';
                        } else {
                            url += 'international-tour-packages/' + destination + '-tour-packages';
                        }
                    }

                    if (searchType === 'Z_NAME') {
                        if (pdpSeoUrl != null && pdpSeoUrl != 'undefined' && pdpSeoUrl != '') {
                            url += 'packages/' + pdpSeoUrl;
                        } else {
                            url += 'packages/' + pdpPkgName;
                        }
                        url = lsRepSpace(url);
                    } else {
                        if (pdpSeoUrl != null && pdpSeoUrl != 'undefined' && pdpSeoUrl != '') {
                            url += '/' + pdpSeoUrl;
                        } else {
                            url += '/' + pdpPkgName;
                        }
                        url = lsRepSpace(url);
                    }
                    if (countryCode === 'IN') {
                        url += '/pkgId/' + pkgId + '/theme/' + pkgId + '_' + destination + '_' + '0' + '/destTag/' + destination;
                    } else {
                        if (searchType === 'Z_NAME') {
                            if (pdpSeoUrl != null && pdpSeoUrl != 'undefined' && pdpSeoUrl != '') {
                                url += '/pkgId/' + pkgId + '/destination/' + pkgId + '_' + repSpace(pdpSeoUrl) + '_' + searchType + '_' + '1';
                            } else {
                                url += '/pkgId/' + pkgId + '/destination/' + pkgId + '_' + repSpace(pdpPkgName) + '_' + searchType + '_' + '1';
                            }
                        } else {
                            url += '/pkgId/' + pkgId + '/destination/' + pkgId + '_' + destination + '_' + searchType + '_' + '1' + '/destTag/' + destination;
                        }
                    }
                }
            }
        }else{
            {
                urlQuery = true;
                if (searchType === 'CONTINENT') {
                    url += 'international-tour-packages/' + destination + '-tour-packages';
                } else if (searchType === 'COUNTRY') {
                    if (countryCode === 'IN'  || countryCode === 'BT' || countryCode === 'LK') {
                        if (countryCode === 'IN') {
                            url += 'india-tour-packages';
                        } else {
                            url += 'india-tour-packages/' + destination + '-tour-packages';
                        }
                    } else {
                        url += 'international-tour-packages/' + destination + '-tour-packages';
                    }
                } else if (searchType === 'STATE') {
                    url += 'india-tour-packages/' + destination + '-tour-packages';
                } else if (searchType === 'CITY') {
                    if (countryCode === 'IN' /*|| countryCode === 'NP'*/ || countryCode === 'BT' || countryCode === 'LK') {
                        url += 'india-tour-packages/' + destination + '-tour-packages';
                    } else {
                        url += 'international-tour-packages/' + destination + '-tour-packages';
                    }
                } else if (searchType === 'THEME') {
                    if (window.location.href.indexOf("india-tour-packages") > -1) {
                        url += "india-tour-packages/";
                    } else if (window.location.href.indexOf("international-tour-packages") > -1) {
                        url += "international-tour-packages/";
                    }
                    url += destination + '-tour-packages';
                } else if (holidayBudget !== "" || holidayMonth !== "") {
                    url += "packages";
                    urlQuery = true;
                } else {
                    url = '';
                    urlQuery = false;
                }
                url = lsRepSpace(url);
        
                sessionStorage.setItem('view', 'list');
                if (urlQuery) {
                    if ((holidayBudget !== "" && holidayBudget !== 0) || (holidayMonth !== "")) {
                        url += '/';
                    }
        
                    if (holidayBudget !== "" && holidayBudget !== 0)
                    {
                        url += 'holidayBudget/' + holidayBudget;
                    }
                    if (holidayMonth !== "")
                    {
                        if (holidayBudget === "")
                        {
                            url += 'holidayMonth/' + holidayMonth;
                        } else {
                            url += '/holidayMonth/' + holidayMonth;
                        }
                    }
                }
        
            }
        }

    }
    // window.location.href = window.location.origin + "/" + url;
    console.log("FINAL URL", url);
   
    CommonStore.update(s => {s.URL = url;
    })


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


function repSpace(ustring) {
    var k = 0;
    ustring = ustring.toLowerCase().replace(/[^a-zA-Z0-9.]/g, '-');
    var j = 1;
    for (var i = 0; i < j; i++) {
        if (ustring.indexOf('--') !== -1) {
            ustring = ustring.replace('--', '-');
            j++;
        }
    }
    if (k === 0) {
        if (ustring.charAt(ustring.length - 1) === "-") {
            ustring = ustring.slice(0, -1);
        }
        k = k + 1;
    }
    return ustring;
}

export default LandingPage;
