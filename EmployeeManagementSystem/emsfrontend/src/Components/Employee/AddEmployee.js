import axios from "axios";

export const AddEmployee = (event) => {
    return new Promise((resolve, reject) => {
      axios.put("https://ufa5fx3bm2.execute-api.us-east-1.amazonaws.com/dev/addemployeedetails" , event)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
    });
};

export default AddEmployee;