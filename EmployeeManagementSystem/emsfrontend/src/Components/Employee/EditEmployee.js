import axios from "axios";

export const EditEmployee = (event) => {
    return new Promise((resolve, reject) => {
      axios.put("https://q3ouw7h8yk.execute-api.us-east-1.amazonaws.com/dev/updateemployeedetails" , event)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
    });
};

export default EditEmployee;