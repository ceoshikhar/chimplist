import axios from 'axios';

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

// Delete a list
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

// Add a new list member
export const addMember = async (
  API_KEY: string,
  DATA_CENTER: string,
  list_id: string,
  options
): Promise<any> => {
  return axios({
    method: 'POST',
    url: `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${list_id}/members`,
    headers: {
      Authorization: `name ${API_KEY}`
    },
    data: options
  });
};

// Get information about members in a list
export const getAllMembers = async (
  API_KEY: string,
  DATA_CENTER: string,
  list_id: string
): Promise<any> => {
  return axios({
    method: 'GET',
    url: `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${list_id}/members`,
    headers: {
      Authorization: `name ${API_KEY}`
    }
  });
};

// Get information about a specific list member
export const getMember = async (
  API_KEY: string,
  DATA_CENTER: string,
  list_id: string,
  sub_hash: string
): Promise<any> => {
  return axios({
    method: 'GET',
    url: `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${list_id}/members/${sub_hash}`,
    headers: {
      Authorization: `name ${API_KEY}`
    }
  });
};

// Update a list member
export const updateMember = async (
  API_KEY: string,
  DATA_CENTER: string,
  list_id: string,
  sub_hash: string,
  options
): Promise<any> => {
  return axios({
    method: 'PATCH',
    url: `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${list_id}/members/${sub_hash}`,
    headers: {
      Authorization: `name ${API_KEY}`
    },
    data: options
  });
};

// Archive a list member
export const archiveMember = async (
  API_KEY: string,
  DATA_CENTER: string,
  list_id: string,
  sub_hash: string
): Promise<any> => {
  return axios({
    method: 'DELETE',
    url: `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${list_id}/members/${sub_hash}`,
    headers: {
      Authorization: `name ${API_KEY}`
    }
  });
};

// Permanently delete a list member
export const deleteMember = async (
  API_KEY: string,
  DATA_CENTER: string,
  list_id: string,
  sub_hash: string
): Promise<any> => {
  return axios({
    method: 'POST',
    url: `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${list_id}/members/${sub_hash}/actions/delete-permanent`,
    headers: {
      Authorization: `name ${API_KEY}`
    }
  });
};

// TODO: Refactor the `LIST` and `MEMBER` functions into one function.

// LISTS is the function aiming to refactor the code
export const LISTS = async (
  API_KEY: string,
  DATA_CENTER: string,
  METHOD: string,
  LIST_ID?: string,
  OPTIONS?
): Promise<any> => {
  return;
};
