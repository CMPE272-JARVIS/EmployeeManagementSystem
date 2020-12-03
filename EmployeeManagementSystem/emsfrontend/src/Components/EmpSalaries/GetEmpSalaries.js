import axios from 'axios';

export const GetEmpSalaries = (empId) => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:8080/getEmpSalary/' + empId)
      .then(function (response) {
        const salariesData = [];
        if (response.data.length > 0) {
          response.data.forEach(function (element) {
            element.id = element.empNumberFk;
            salariesData.push(
              element
            );
          });
          resolve(salariesData);
        }

      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export default GetEmpSalaries;