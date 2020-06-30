import * as ACTIONS from './actions';

export default class Chimplist {
  private API_KEY: string;
  private DATA_CENTER: string;

  constructor(api_key: string) {
    const api_key_regex = /.+\-.+/;

    if (!api_key_regex.test(api_key)) {
      throw new Error('MISSING OR INVALID API KEY: ' + api_key);
    }

    this.API_KEY = api_key;
    this.DATA_CENTER = this.API_KEY.split('-')[1].trim();
  }

  // createList - create a new list
  createList = async (options): Promise<any> => {
    if (options === null) {
      throw new Error('INVALID or MISSING ARGUMENTS');
    }
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
