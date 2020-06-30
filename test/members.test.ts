import Chimplist from '../lib/';
import * as dotenv from 'dotenv';

// Get access to the .env file
dotenv.config();

//@ts-ignore
const API_KEY: string = process.env.API_KEY;

const Chimp = new Chimplist(API_KEY);

//@ts-ignore
const list_id: string = process.env.LIST_ID;
//@ts-ignore
const subscriber_hash: string = process.env.SUB_HASH;

// options - request body parameters containing at least required fileds
const options = {
  email_address: 'skasddjklasdja@gmail.com',
  status: 'subscribed',
  merge_fields: {
    FNAME: 'Shikhar',
    LNAME: 'Sharma'
  }
};

// Test will break if the first member in the list does not have a property
// `FNAME` that is equal to 'Hunny'.
test('get information about memebers in a list by executing getAllMembers()', async () => {
  return Chimp.getAllMembers(list_id).then((res) => {
    expect(res.data.members[0].merge_fields.FNAME).toBe('Shikhar');
  });
});

// Test will break if the first member in the list does not have a property
// `FNAME` that is equal to 'Hunny'.
test('get information about a specific member in the list by executing getMember()', async () => {
  return Chimp.getMember(list_id, subscriber_hash).then((res) => {
    expect(res.data.merge_fields.FNAME).toBe('Shikhar');
  });
});

// On successfully updating the member, respone data must contain an `id`
// which must be equal to the `subscriber_hash`(id) passed to the test
test('update a list memeber', async () => {
  return Chimp.updateMember(list_id, subscriber_hash, options).then((res) => {
    expect(res.data.id).toBe(subscriber_hash);
  });
});

/*
 * TESTS BELOW ARE SETUP IN A WAY SO THAT NO NEW MEMBER IS ACTUALLY CREATED OR
 * DELETED. THIS MAKES THE TESTS RUN ALL THE TIME AS EXPECTED WITHOUT
 * BREAKING THEM OR REQUIRING TO MAKE ANY CHANGES.
 *
 */

// The test checks if the Mailchimp API sends a response with 404.
// So if I successfully try to archive a list memeber that does not exist in
// my account, I should catch an error with status code `404`(Not Found).
// That is the logic behind this test.
test('archive a list member by executing archiveMember()', async () => {
  return Chimp.archiveMember(list_id, 'invalidSubscriberHash').catch((err) => {
    expect(err.response.data.status).toBe(404);
  });
});

// The test checks if the Mailchimp API sends a response with 404.
// So if I successfully try to delete a list memeber that does not exist in
// my account, I should catch an error with status code `404`(Not Found).
// That is the logic behind this test.
test('permanently delete a list member by executing deleteMember()', async () => {
  return Chimp.deleteMember(list_id, 'invalidSubscriberHash').catch((err) => {
    expect(err.response.data.status).toBe(404);
  });
});

// The test checks if the Mailchimp API sends a response with 400.
// So if I successfully try to add a new list member that already exist in my
// account, I should catch an error with status code '400'(Bad Request).
test('add a new list member by executing addMember()', async () => {
  return Chimp.addMember(list_id, options).catch((err) => {
    expect(err.response.data.status).toBe(400);
  });
});
