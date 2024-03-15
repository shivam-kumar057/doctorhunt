import ApiBuilder from "../../services/ApiBuilder";
import { apiGetMethod } from "../../services/ApiConstant";


export const fetchBookData = () => {
    console.log("shivam")
    return (dispatch) => {
        // database().ref('userList').on('value', (tempData) => {
        //     dispatch({ type: 'setUserData', payload: tempData.val() })
        // })
      try {
        var requestOptions = {
            method: apiGetMethod,
            //headers: header,
          };
        ApiBuilder.getResponse(requestOptions).then((response)=> {
            if(response) {
                dispatch({ 
                  type: 'setBook', 
                  payload: response?.works || [] , loading:false
                })
             
            }
        })
      } catch (e) {
        console.log("error ===",error)
      }
    }
}