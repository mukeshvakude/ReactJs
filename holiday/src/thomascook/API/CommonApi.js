
import axios from 'axios';
const Get = (URL) =>{
    var res;
    res = axios.get(URL).then((response) => {  
        return response.data;     
       
    }).catch((error)=>{
        return error;
       
    });
   
    return res;
}



export default Get;
