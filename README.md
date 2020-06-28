# chimplist

Chimplist makes it very easy and simple to work with Mailchimp's API v3 to manage your Lists(also called Audiences) and their Members.

## How to install?

```bash
npm install chimplist
```

## How to use Chimplist?

#### \*ES6 Syntax

```js
const Chimplist = require('chimplist');

const API_KEY = 'your Mailchimp API';

const Chimp = new Chimplist(API_KEY);

/* Using `getAllLists()` function to get information about all lists
 * All the available functions with Chimplist are mentioned down below.
 * This is how you would work with the new ES6 promise syntax with .then .catch */
Chimp.getAllLists()
  .then((response) => {
    // Work with the `response` from Mailchimp API
  })
  .catch((error) => {
    // Handle any errors while running `getAllLists()`
  });

// You can use async/await inside try/catch block as well
const functionName = async () => {
  try {
    const response = await Chimp.getAllLists();
    // Work with the `response` from Mailchimp API
  } catch (error) {
    // Handle any errors while running `getAllLists()`
  }
};

// Call the function to execute the try/catch block code
functionName();
```

## Why Chimplist?

- You don't have to worry about the Mailchimp's API end points.
- You don't have to worry about handling authorizations.
- You don't have to worry about knowing how to make HTTP requests.
- You can use it on your front-end or back-end with just few lines.

Note: At the moment, Chimplist do not support the capability to apply `request query parameters` to your API requests. Maybe in the future that feature might be added, untill then you might like using something like [node-mailchimp](https://www.npmjs.com/package/mailchimp-api-v3).

## All functions available with Chimplist

### 1. LISTS

- **`getAllLists()`** - Get information about all lists in the account.

- **`getList(list_id)`** - Get information about a specific list.

  - `list_id -> The list id should be a string containing the list id you are targeting.

- **`createList(options)`** - Create a new list

  - options -> This must be an Object which contains at least the **required** `request body parameters`. To learn more about what the `options` should contain, refer to Mailchimp API Documentaion [here](https://mailchimp.com/developer/reference/lists/#post_/lists).

- **`updateList(list_id, options)`** - Update a specific list

  - list_id -> The list id should be a string containing the list id you are targeting.
  - options -> This must be an Object which contains at least the **required** `request body parameters`. To learn more about what the `options` should contain, refer to Mailchimp API Documentaion [here](https://mailchimp.com/developer/reference/lists/#patch_/lists/-list_id-).

- **`deleteList(list_id)`** - Delete a specific list

  - list_id -> The list id should be a string containing the list id you are targeting

### 2. MEMBERS

- getAllMembers
- getMember
- addMember
- updateMember
- deleteMember
