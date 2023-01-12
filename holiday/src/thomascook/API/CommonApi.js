
import axios from 'axios';
import { getCookie } from 'cookies-next';

function getHeader(){
    
    var requestId , sessionId;
    if (getCookie('requestId') != null){
        requestId = getCookie('requestId');
    }        
      
    if (getCookie('sessionId') != null){
        sessionId = getCookie('sessionId');
    }
    var headersData = {
        headers :{
        'Accept': 'application/json; charset=utf-8',
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'requestId' : requestId,
        'sessionId' : sessionId
        } ,
       
    }
   return  headersData;
}

 const Get = (URL) =>{
    var res ,headerData = getHeader();
    res = axios.get(URL , {headers : headerData.headers}).then((response) => {  
        return response.data;     
    }).catch((error)=>{
        console.log("Error In GET METHOD " ,error );
        return error;    
    });
   
    return res;
}



export default Get;
