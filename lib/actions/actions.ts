import axios from 'axios';

// Get information about all lists
export const getAllLists = async (
  API_KEY: string,
  DATA_CENTER: string
): Promise<any> => {
  return axios({
    method: 'GET',
    url: `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists`,
    headers: {
      Authorization: `name ${API_KEY}`
    }
  });
};

// Get information about a specific list
export const getList = async (
  API_KEY: string,
  DATA_CENTER: string,
  list_id: string
): Promise<any> => {
  return axios({
    method: 'GET',
    url: `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${list_id}`,
    headers: {
      Authorization: `name ${API_KEY}`
    }
  });
};

// Create a new list
export const createList = async (
  API_KEY: string,
  DATA_CENTER: string,
  options
): Promise<any> => {
  return axios({
    method: 'POST',
    url: `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists`,
    headers: {
      Authorization: `name ${API_KEY}`
    },
    data: options
  });
};

// Update a specific list
export const updateList = async (
  API_KEY: string,
  DATA_CENTER: string,
  list_id: string,
  options
): Promise<any> => {
  return axios({
    method: 'PATCH',
    url: `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${list_id}`,
    headers: {
      Authorization: `name ${API_KEY}`
    },
    data: options
  });
};

// Delete a lsit
export const deleteList = async (
  API_KEY: string,
  DATA_CENTER: string,
  list_id: string
): Promise<any> => {
  return axios({
    method: 'DELETE',
    url: `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${list_id}`,
    headers: {
      Authorization: `name ${API_KEY}`
    }
  });
};
