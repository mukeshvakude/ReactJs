


import {useState} from 'react';
import SearchResultPage from './SearchResultPage';

const HolidayCommon = () => {
    try {
      
        // var pageUrl = window.location.href;
        var pageUrl = 'http://172.16.177.159:8180/holidays';

        if (pageUrl.indexOf("webcache.googleusercontent.com") > -1) {
            pageUrl = "https://www." + decodeURIComponent(pageUrl.split("www.")[1].split("&")[0]);
        }
       
        var [holidayObjects, setHolidayObjects] = useState({
            windowURL: pageUrl, //window.location.origin + window.location.pathname.toLowerCase() + window.location.search,
            searchParameter: '',
            destinationName: '',
            searchType: '',
            countryCode: '',
            searchCode: '',
            stateCode: '',
            searchLatitude: '',
            searchLongitude: '',
            conName: '',
            couName: '',
            staName: '',
            citName: '',
            holidayMonth: '',
            holidayBudget: '',
            theme: getUrlParameter('theme'),
            pkgSubType: getUrlParameter('subtype'),
            language: getUrlParameter('language'),
            eventId: getUrlParameter('eventId'),
            destination: getUrlParameter('destination'),
            searchTag: ''
        })
        
        function getUrlParameter(name) {
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regexS = "[\\?&]" + name + "=([^&#]*)";
            var regex = new RegExp(regexS);
            var results = regex.exec(decodeURIComponent(window.location.href));
            if (results == null)
                return "";
            else
                return results[1];
        }
        console.log("Here")
        return (<>
            <SearchResultPage holidayObjects={holidayObjects} pageUrl={pageUrl} />
        </>)
    } catch(e) {
        console.log(e);
    }
    
}



export default HolidayCommon;
