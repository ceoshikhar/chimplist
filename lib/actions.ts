import axios from "axios";

export const createList = async (
  API_KEY: string,
  DATA_CENTER: string,
  options
): Promise<any> => {
  return axios({
    method: "POST",
    url: `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists`,
    headers: {
      Authorization: `name ${API_KEY}`,
    },
    data: options,
  });
};

export const getAllLists = async (
  API_KEY: string,
  DATA_CENTER: string
): Promise<any> => {
  return axios({
    method: "GET",
    url: `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists`,
    headers: {
      Authorization: `name ${API_KEY}`,
    },
  });
};

export const getList = async (
  API_KEY: string,
  DATA_CENTER: string,
  list_id: string
): Promise<any> => {
  return axios({
    method: "GET",
    url: `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${list_id}`,
    headers: {
      Authorization: `name ${API_KEY}`,
    },
  });
};

export const updateList = async (
  API_KEY: string,
  DATA_CENTER: string,
  list_id: string,
  options
): Promise<any> => {
  return axios({
    method: "PATCH",
    url: `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${list_id}`,
    headers: {
      Authorization: `name ${API_KEY}`,
    },
    data: options,
  });
};

export const deleteList = async (
  API_KEY: string,
  DATA_CENTER: string,
  list_id: string
): Promise<any> => {
  return axios({
    method: "DELETE",
    url: `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${list_id}`,
    headers: {
      Authorization: `name ${API_KEY}`,
    },
  });
};

export const addMember = async (
  API_KEY: string,
  DATA_CENTER: string,
  list_id: string,
  options
): Promise<any> => {
  return axios({
    method: "POST",
    url: `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${list_id}/members`,
    headers: {
      Authorization: `name ${API_KEY}`,
    },
    data: options,
  });
};

export const getAllMembers = async (
  API_KEY: string,
  DATA_CENTER: string,
  list_id: string
): Promise<any> => {
  return axios({
    method: "GET",
    url: `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${list_id}/members`,
    headers: {
      Authorization: `name ${API_KEY}`,
    },
  });
};

export const getMember = async (
  API_KEY: string,
  DATA_CENTER: string,
  list_id: string,
  sub_hash: string
): Promise<any> => {
  return axios({
    method: "GET",
    url: `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${list_id}/members/${sub_hash}`,
    headers: {
      Authorization: `name ${API_KEY}`,
    },
  });
};

export const updateMember = async (
  API_KEY: string,
  DATA_CENTER: string,
  list_id: string,
  sub_hash: string,
  options
): Promise<any> => {
  return axios({
    method: "PATCH",
    url: `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${list_id}/members/${sub_hash}`,
    headers: {
      Authorization: `name ${API_KEY}`,
    },
    data: options,
  });
};

export const archiveMember = async (
  API_KEY: string,
  DATA_CENTER: string,
  list_id: string,
  sub_hash: string
): Promise<any> => {
  return axios({
    method: "DELETE",
    url: `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${list_id}/members/${sub_hash}`,
    headers: {
      Authorization: `name ${API_KEY}`,
    },
  });
};

export const deleteMember = async (
  API_KEY: string,
  DATA_CENTER: string,
  list_id: string,
  sub_hash: string
): Promise<any> => {
  return axios({
    method: "POST",
    url: `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${list_id}/members/${sub_hash}/actions/delete-permanent`,
    headers: {
      Authorization: `name ${API_KEY}`,
    },
  });
};
