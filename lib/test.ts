import axios from 'axios';

const TestAPI = async (API_KEY: string, DATA_CENTER: string): Promise<any> => {
  try {
    const response = await axios({
      method: 'get',
      url: `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists`,
      headers: {
        Authorization: `Shikhar ${API_KEY}`
      }
    });

    console.log('List[0] Name:', response.data.lists[0].name);
  } catch (err) {
    console.error(err);
  }
};

export default TestAPI;
