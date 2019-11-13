import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://hirehive-testing-account.hirehive.com/api/v1/'
});

export default {
  getJobs() {
    return apiClient.get('/jobs');
  }
};
