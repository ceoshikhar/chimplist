import Chimplist from '../lib/index';
import * as dotenv from 'dotenv';

dotenv.config();

// @ts-ignore
const API_KEY: string = process.env.API_KEY;

const Chimp = new Chimplist(API_KEY);

//@ts-ignore
const list_id: string = process.env.LIST_ID;

test('get all the lists', async () => {
  return Chimp.getAllLists().then((res) =>
    expect(res.data.lists[0].name).toBe('Test List')
  );
});

test('get a specific list', async () => {
  return Chimp.getList(list_id).then((res) =>
    expect(res.data.name).toBe('Test List')
  );
});
