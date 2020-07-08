import Chimplist from "../lib";
import * as dotenv from "dotenv";

// Get access to .env file
dotenv.config();

// @ts-ignore
const API_KEY: string = process.env.API_KEY;

const Chimp = new Chimplist(API_KEY);

//@ts-ignore
const list_id: string = process.env.LIST_ID;

// options - request body parameters containing at least required fileds
const options = {
  name: "Test List",
  contact: {
    company: "Test List",
    address1: "Test List",
    address2: "Test List",
    city: "Test List",
    state: "Test List",
    zip: "Test List",
    country: "Test List",
    phone: "Test List",
  },
  permission_reminder: "Test List",
  campaign_defaults: {
    from_name: "Test List",
    from_email: "thisisaninvalidemail@gmail.com",
    subject: "Test List",
    language: "Test List",
  },
  email_type_option: true,
};

// Test will break if the list name is not `Test List`
test("get all the lists by executing getAllLists()", async () => {
  return Chimp.getAllLists().then((res) =>
    expect(res.data.lists[0].name).toBe("Test List")
  );
});

// Test will break if the list name is not `Test List`
test("get a specific list by executing getList()", async () => {
  return Chimp.getList(list_id).then((res) =>
    expect(res.data.name).toBe("Test List")
  );
});

test("update a specific list by executing updateList()", async () => {
  return Chimp.updateList(list_id, options).then((res) =>
    expect(res.data.name).toBe("Test List")
  );
});

/*
 * TESTS BELOW ARE SETUP IN A WAY SO THAT NO NEW LIST IS ACTUALLY CREATED OR
 * DELETED. THIS MAKES THE TESTS RUN ALL THE TIME AS EXPECTED WITHOUT
 * BREAKING THEM OR REQUIRING TO MAKE ANY CHANGES.
 *
 */

// The test breaks if no list already exist.
// This is because my account has limit on 1 list.
// So if I successfully try to send a request to create a new list, I should
// catch an error with status code `403`(Forbidden).
// That is the logic behind this test.
test("create a list by executing createList()", async () => {
  return Chimp.createList(options).catch((err) =>
    expect(err.response.data.status).toBe(403)
  );
});

// The test checks if the Mailchimp API sends a response with 404.
// So if I successfully try to delete a list that does not exist in my
// account, I should catch an error with status code `404`(Not Found).
// That is the logic behind this test.
test("delete a list by executing deleteList()", async () => {
  return Chimp.deleteList("invalidListID").catch((err) =>
    expect(err.response.data.status).toBe(404)
  );
});
