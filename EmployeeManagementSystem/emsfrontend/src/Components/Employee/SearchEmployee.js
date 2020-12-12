import axios from "axios";

export const SearchEmployee = (event) => {
    return new Promise((resolve, reject) => {
        axios.get("https://2a8ec2hqfa.execute-api.us-east-1.amazonaws.com/dev/getemployeedetails?emp_no=" + event)
      .then(function (response) {
        const employeeDetails = [];
        if (response.data.length > 0) {
          response.data.forEach(function (element) {
            const updatedElement = {
              'id': element.emp_no,
              'empNumberPk': element.emp_no,
              'birthDate': element.birth_date,
              'firstName': element.first_name,
              'lastName': element.last_name,
              'gender': element.gender,
              'hireDate': element.hire_date
            };
            employeeDetails.push(
              updatedElement
            );
          });
          resolve(employeeDetails);
        }

      })
      .catch(function (error) {
        reject(error);
      });
    });
};

export default SearchEmployee;