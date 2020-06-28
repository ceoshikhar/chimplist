import TestAPI from './test';
import ACTIONS from './actions';
import * as dotenv from 'dotenv';

export default class Chimplist {
  private API_KEY: string;
  private DATA_CENTER: string;

  constructor(api_key: string) {
    const api_key_regex = /.+\-.+/;

    if (!api_key_regex.test(api_key)) {
      console.error('MISSING OF INVALID API KEY: ' + api_key);
      throw new Error('missing or invalid api key: ' + api_key);
    }

    this.API_KEY = api_key;
    this.DATA_CENTER = this.API_KEY.split('-')[1].trim();
  }

  // getLists - get all the lists
  getAllLists = async (): Promise<any> => {
    const promise = ACTIONS.getAllLists(this.API_KEY, this.DATA_CENTER);
    return promise;
  };

  // getList - get a specific list by `list_id`
  getList = async (list_id: string): Promise<any> => {
    const promise = ACTIONS.getList(this.API_KEY, this.DATA_CENTER, list_id);
    return promise;
  };

  // createList - create a new list
  createList = async (options): Promise<any> => {
    const promise = ACTIONS.createList(this.API_KEY, this.DATA_CENTER, options);
    return promise;
  };

  // updateList - update a specific list
  updateList = async (list_id: string, options): Promise<any> => {
    const promise = ACTIONS.updateList(
      this.API_KEY,
      this.DATA_CENTER,
      list_id,
      options
    );
    return promise;
  };

  // deleteList - delete a specific list
  deleteList = async (list_id: string): Promise<any> => {
    const promise = ACTIONS.deleteList(this.API_KEY, this.DATA_CENTER, list_id);
    return promise;
  };
}

/* THIS IS
 * FOR TESTING
 * THE CHIMPLIST Lib */

dotenv.config();
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const API_KEY: string = process.env.API_KEY;

const Chimp = new Chimplist(API_KEY);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const list_id: string = process.env.LIST_ID;

const options = {
  name: 'List Without JSON',
  contact: {
    company: 'Shikhar Company',
    address1: 'Test List',
    address2: 'Test List',
    city: 'Test List',
    state: 'Test List',
    zip: 'Test List',
    country: 'Test List',
    phone: 'Test List'
  },
  permission_reminder: 'You subbed to this list bruh',
  campaign_defaults: {
    from_name: 'Test List',
    from_email: 'shikhar1@gmail.com',
    subject: 'Test List',
    language: 'Test List'
  },
  email_type_option: true
};

// Chimp.getAllLists()
//   .then((res) =>
//     console.log('Running getAllLists() !!', res.data.lists[0].name)
//   )
//   .catch((error) => console.log('YOU FUCKEDUP', error));

// Chimp.getList('1e7b476120')
//   .then((res) => console.log('Running getList() !!', res.data.name))
//   .catch((error) => console.log('YOU FUCKEDUP', error));

// Chimp.createList(options)
//   .then((res) => console.log('Running createList() !!', res))
//   .catch((error) => console.log('YOU FUCKEDUP', error));

// Chimp.updateList('1e7b476120', options)
//   .then((res) => console.log('Running updateList() !! ', res))
//   .catch((error) => console.log('YOU FUCKEDUP', error));

// Chimp.deleteList('1e7b476120')
//   .then((res) => console.log('Running deleeList() !!', res))
//   .catch((error) => console.log('YOU FUCKEDUP', error));
