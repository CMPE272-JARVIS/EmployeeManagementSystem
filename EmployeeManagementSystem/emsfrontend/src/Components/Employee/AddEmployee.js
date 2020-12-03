import axios from "axios";

export const AddEmployee = (event) => {
    return new Promise((resolve, reject) => {
        axios.pur("addEmployee" + event)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
    });
};

export default AddEmployee;