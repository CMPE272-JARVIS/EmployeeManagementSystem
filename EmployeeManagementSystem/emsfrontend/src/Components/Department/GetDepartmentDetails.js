// update the url 
import axios from 'axios';

export const GetDepartmentDetails = () => {
  return new Promise((resolve, reject) => {
    axios.get('https://hy0jjt1tvf.execute-api.us-east-1.amazonaws.com/dev/getdeptdetails')
      .then(function (response) {
        const deptData = [];
        if (response.data.length > 0) {
          response.data.forEach(function (element) {
            element.id = element.dept_no
            deptData.push(
              element
            );
          });
          resolve(deptData);
        }
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export default GetDepartmentDetails;