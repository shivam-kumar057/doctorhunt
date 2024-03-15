import { BaseUrl } from "./BaseUrl";

export default class ApiBuilder  {

    static async getResponse(requestOptions,endpoint = '') {
        // console.log("request option === ",requestOptions)
        // console.log("requezs==",requestOptions.params)
        if(requestOptions.params) {
            var localurl = BaseUrl + endpoint + `${requestOptions.params}`
            // console.log("local variable==",localurl)
        } else {
            var localurl = BaseUrl + endpoint
        }
        console.log("local url ===",localurl)
       
        try {
            const response = await fetch(localurl,requestOptions)
            // console.log("resp===",response)
            const responseJson = await response.json();
            // console.log("resspjos====",responseJson)
            return responseJson;
        } catch (error) {
            console.log("error==",error)
        }
    }
  


} 

