import * as ACTIONS from "./actions";

export default class Chimplist {
  private API_KEY: string;
  private DATA_CENTER: string;

  constructor(api_key: string) {
    const api_key_regex = /.+\-.+/;

    if (!api_key_regex.test(api_key)) {
      throw new Error("MISSING OR INVALID API KEY: " + api_key);
    }

    this.API_KEY = api_key;
    this.DATA_CENTER = this.API_KEY.split("-")[1].trim();
  }

  createList = async (options): Promise<any> => {
    if (options === null) {
      throw new Error("INVALID or MISSING ARGUMENTS");
    }

    return ACTIONS.createList(this.API_KEY, this.DATA_CENTER, options);
  };

  getAllLists = async (): Promise<any> => {
    return ACTIONS.getAllLists(this.API_KEY, this.DATA_CENTER);
  };

  getList = async (list_id: string): Promise<any> => {
    return ACTIONS.getList(this.API_KEY, this.DATA_CENTER, list_id);
  };

  updateList = async (list_id: string, options): Promise<any> => {
    return ACTIONS.updateList(this.API_KEY, this.DATA_CENTER, list_id, options);
  };

  deleteList = async (list_id: string): Promise<any> => {
    return ACTIONS.deleteList(this.API_KEY, this.DATA_CENTER, list_id);
  };

  addMember = async (list_id: string, options): Promise<any> => {
    return ACTIONS.addMember(this.API_KEY, this.DATA_CENTER, list_id, options);
  };

  getAllMembers = async (list_id: string): Promise<any> => {
    return ACTIONS.getAllMembers(this.API_KEY, this.DATA_CENTER, list_id);
  };

  getMember = async (list_id: string, sub_hash: string): Promise<any> => {
    return ACTIONS.getMember(this.API_KEY, this.DATA_CENTER, list_id, sub_hash);
  };

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

  archiveMember = async (list_id: string, sub_hash: string): Promise<any> => {
    return ACTIONS.archiveMember(
      this.API_KEY,
      this.DATA_CENTER,
      list_id,
      sub_hash
    );
  };

  deleteMember = async (list_id: string, sub_hash: string): Promise<any> => {
    return ACTIONS.deleteMember(
      this.API_KEY,
      this.DATA_CENTER,
      list_id,
      sub_hash
    );
  };
}
