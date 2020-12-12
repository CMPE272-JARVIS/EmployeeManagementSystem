import axios from 'axios';

const PutLeaveDetails = (event) => {
  return new Promise((resolve, reject) => {
    axios.put('https://y7ikuke8pd.execute-api.us-east-1.amazonaws.com/dev', event
    )
      .then(function (response) {
        resolve(true);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}
export default PutLeaveDetails;