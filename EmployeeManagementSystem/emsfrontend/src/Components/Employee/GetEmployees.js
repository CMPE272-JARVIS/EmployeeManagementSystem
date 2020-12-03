import axios from "axios";

export const GetCustomerDetails = (event) => {
    return new Promise((resolve, reject) => {
        axios.get("http://localhost:8080/getEmployeesPage?pageNo=" + event)
      .then(function (response) {
        const defaultChefData = [];
        if (response.data.length > 0) {
          response.data.forEach(function (element) {
            element.id = element.empNumberPk;
            defaultChefData.push(
              element
            );
          });
          resolve(defaultChefData);
        }

      })
      .catch(function (error) {
        reject(error);
      });
    });
};

export default GetCustomerDetails;