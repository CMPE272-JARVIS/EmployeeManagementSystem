// https://hz43tzl044.execute-api.us-east-1.amazonaws.com/dev
import axios from 'axios';

export const GetEmpManager = (event) => {
  return new Promise((resolve, reject) => {
    axios.get('https://hz43tzl044.execute-api.us-east-1.amazonaws.com/dev/getempmanager?emp_no=' + event)
      .then(function (response) {
        const empData = [];
        if (response.data.length > 0) {
          response.data.forEach(function (element) {
            empData.push(
              element
            );
          });
          resolve(empData);
        }

      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export default GetEmpManager;