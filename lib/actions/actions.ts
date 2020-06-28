import axios from 'axios';

export const getLists = async (
  API_KEY: string,
  DATA_CENTER: string
): Promise<any> => {
  return axios({
    method: 'get',
    url: `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists`,
    headers: {
      Authorization: `name ${API_KEY}`
    }
  });
};

export const getList = async (
  API_KEY: string,
  DATA_CENTER: string,
  list_id: string
): Promise<any> => {
  return axios({
    method: 'get',
    url: `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${list_id}`,
    headers: {
      Authorization: `name ${API_KEY}`
    }
  });
};
