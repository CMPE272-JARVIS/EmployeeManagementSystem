import axios from 'axios';

export const GetEmpSalaries = (event) => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:8080/getSalariesPage?pageNo=' + event)
      .then(function (response) {
        const salariesData = [];
        let idVal = 0;
        if (response.data.length > 0) {
          response.data.forEach(function (element) {
            element.id = ++idVal;
            element.empNumberFk = element.empNumberFk;
            element.salary = element.salary;
            element.fromdate = element.fromdate;
            element.toDate = element.toDate;
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