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
  getLists = async (): Promise<any> => {
    const promise = ACTIONS.getLists(this.API_KEY, this.DATA_CENTER);
    return promise;
  };

  // getList - get a specific list by `list_id`
  getList = async (list_id: string): Promise<any> => {
    const promise = ACTIONS.getList(this.API_KEY, this.DATA_CENTER, list_id);
    return promise;
  };

  test = (): void => {
    console.log('From CLASS', this.API_KEY);
    console.log('From CLASS', this.DATA_CENTER);
    TestAPI(this.API_KEY, this.DATA_CENTER);
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

Chimp.getList(list_id)
  .then((res) => console.log('YOUSUCK', res.data.name))
  .catch((error) => console.log('YOU FUCKEDUP', error));

Chimp.test();
