
const SearchResultPage = (props) => {
    try {
       
        if (window.location.pathname == "/holidays/packages" && window.location.search == "") {
            window.location.href = window.location.origin + "/holidays";
        }
        var url = props.holidayObjects.windowURL;
        if (url.slice(-1) == "/") {
            props.holidayObjects.windowURL = url.substring(0, url.length - 1);
        }
        populateQueryParams(props.holidayObjects);
    } catch (e) {
        console.log(e);
       
    }
    
    function populateQueryParams(holidayObjects) {
        if (holidayObjects.windowURL.indexOf("/holidays/packages") === -1) {
            var urlSplit = holidayObjects.windowURL.split("/");
            holidayObjects.searchParameter = urlSplit[urlSplit.length - 1];
            if (holidayObjects.searchParameter.trim().indexOf("-tour-packages") > -1) {
                holidayObjects.searchParameter = holidayObjects.searchParameter.split("-tour")[0];
            } else if (holidayObjects.searchParameter.indexOf("-holidays") > -1) {
                holidayObjects.searchParameter = holidayObjects.searchParameter.split("-holidays")[0];
            } else if (holidayObjects.searchParameter.indexOf("-packages") > -1) {
                holidayObjects.searchParameter = holidayObjects.searchParameter.split("-packages")[0];
            } else if (holidayObjects.searchParameter.indexOf("-group-tours") > -1) {
                holidayObjects.searchParameter = holidayObjects.searchParameter.split("-group-tours")[0];
            } else if (holidayObjects.searchParameter.indexOf("-tours") > -1) {
                holidayObjects.searchParameter = holidayObjects.searchParameter.split("-tours")[0];
            } else if (holidayObjects.searchParameter.indexOf("-getaways") > -1) {
                holidayObjects.searchParameter = holidayObjects.searchParameter.split("-getaways")[0];
            } else {
                holidayObjects.searchParameter = holidayObjects.searchParameter.split("-")[0];
            }

            if (holidayObjects.searchParameter.indexOf("-") > -1) {
                var j = 1;
                for (var i = 0; i < j; i++) {
                    if (holidayObjects.searchParameter.indexOf('-') !== -1) {
                        holidayObjects.searchParameter = holidayObjects.searchParameter.replace('-', ' ');
                        j++;
                    }
                }
            }
            holidayObjects.destinationName = holidayObjects.searchParameter;
            console.log(holidayObjects);
            console.log("holidayObjects");

        
        }else{
            console.log("No condition satisfied");
        }
    
    
    }
}

export default SearchResultPage;
