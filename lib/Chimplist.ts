import * as ACTIONS from './actions';
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

  // createList - create a new list
  createList = async (options): Promise<any> => {
    return ACTIONS.createList(this.API_KEY, this.DATA_CENTER, options);
  };

  // getLists - get all the lists
  getAllLists = async (): Promise<any> => {
    return ACTIONS.getAllLists(this.API_KEY, this.DATA_CENTER);
  };

  // getList - get a specific list by `list_id`
  getList = async (list_id: string): Promise<any> => {
    return ACTIONS.getList(this.API_KEY, this.DATA_CENTER, list_id);
  };

  // updateList - update a specific list
  updateList = async (list_id: string, options): Promise<any> => {
    return ACTIONS.updateList(this.API_KEY, this.DATA_CENTER, list_id, options);
  };

  // deleteList - delete a specific list
  deleteList = async (list_id: string): Promise<any> => {
    return ACTIONS.deleteList(this.API_KEY, this.DATA_CENTER, list_id);
  };

  // addMember - add a new list member
  addMember = async (list_id: string, options): Promise<any> => {
    return ACTIONS.addMember(this.API_KEY, this.DATA_CENTER, list_id, options);
  };

  // getAllMembers - get information about members in a list
  getAllMembers = async (list_id: string): Promise<any> => {
    return ACTIONS.getAllMembers(this.API_KEY, this.DATA_CENTER, list_id);
  };

  // getMember - get information about a specific list member.
  getMember = async (list_id: string, sub_hash: string): Promise<any> => {
    return ACTIONS.getMember(this.API_KEY, this.DATA_CENTER, list_id, sub_hash);
  };

  // updateMember - update a specific list member
  updateMember = async (
    list_id: string,
    sub_hash: string,
    options
  ): Promise<any> => {
    return ACTIONS.updateMember(
      this.API_KEY,
      this.DATA_CENTER,
      list_id,
      sub_hash,
      options
    );
  };

  // archiveMember - archive a list member
  archiveMember = async (list_id: string, sub_hash: string): Promise<any> => {
    return ACTIONS.archiveMember(
      this.API_KEY,
      this.DATA_CENTER,
      list_id,
      sub_hash
    );
  };

  // deleteMember - permanently delete a list memeber
  deleteMember = async (list_id: string, sub_hash: string): Promise<any> => {
    return ACTIONS.deleteMember(
      this.API_KEY,
      this.DATA_CENTER,
      list_id,
      sub_hash
    );
  };
}

/* THIS IS
 * FOR TESTING
 * THE CHIMPLIST Lib */

dotenv.config();

//@ts-ignore
const API_KEY: string = process.env.API_KEY;

const Chimp = new Chimplist(API_KEY);

//@ts-ignore
const list_id: string = process.env.LIST_ID;

const options = {
  name: 'Test List',
  contact: {
    company: 'Test List',
    address1: 'Test List',
    address2: 'Test List',
    city: 'Test List',
    state: 'Test List',
    zip: 'Test List',
    country: 'Test List',
    phone: 'Test List'
  },
  permission_reminder: 'Test List',
  campaign_defaults: {
    from_name: 'Test List',
    from_email: 'thisisaninvalidemail@gmail.com',
    subject: 'Test List',
    language: 'Test List'
  },
  email_type_option: true
};

// Chimp.createList(options)
//   .then((res) => console.log('Running createList() !!', res))
//   .catch((error) => console.log('YOU FUCKEDUP', error));

Chimp.updateList('dee60118e4', options)
  .then((res) => console.log('Running updateList() !! ', res))
  .catch((error) => console.log('YOU FUCKEDUP', error));

// Chimp.deleteList('1e7b476120')
//   .then((res) => console.log('Running deleeList() !!', res))
//   .catch((error) => console.log('YOU FUCKEDUP', error));

// const options = {
//   email_address: 'skasddjklasdja@gmail.com',
//   status: 'subscribed',
//   merge_fields: {
//     FNAME: 'Baklol',
//     LNAME: 'Pandit'
//   }
// };

// Chimp.addMember('dee60118e4', options)
//   .then((res) => console.log('Running addMember() !!', res))
//   .catch((error) => console.log('YOU FUCKEDUP', error));

// Chimp.getAllMembers('dee60118e4')
//   .then((res) =>
//     console.log(
//       'Running getAllMembers() !!',
//       res.data.members[0].merge_fields.FNAME
//     )
//   )
//   .catch((error) => console.log('YOU FUCKEDUP', error));

// Chimp.getMember('dee60118e4', '7de2e79e877ade00c0d02811223ab5f9')
//   .then((res) =>
//     console.log('Running getMember() !!', res.data.merge_fields.FNAME)
//   )
//   .catch((error) => console.log('YOU FUCKEDUP', error));

// const options = {
//   merge_fields: {
//     FNAME: 'Baklol',
//     LNAME: 'Pandit'
//   }
// };

// Chimp.updateMember('dee60118e4', '7de2e79e877ade00c0d02811223ab5f9', options)
//   .then((res) => console.log('Running updateMember() !!', res))
//   .catch((error) => console.log('YOU FUCKEDUP', error));

// Chimp.archiveMember('dee60118e4', '7de2e79e877ade00c0d02811223ab5f9')
//   .then((res) => console.log('Running updateMember() !!', res))
//   .catch((error) => console.log('YOU FUCKEDUP', error));

// Chimp.deleteMember('dee60118e4', '7de2e79e877ade00c0d02811223ab5f9')
//   .then((res) => console.log('Running updateMember() !!', res))
//   .catch((error) => console.log('YOU FUCKEDUP', error));
