# chimplist

<p align="center">
<img alt="npm" src="https://img.shields.io/npm/dt/chimplist">
<img alt="Travis (.org)" src="https://img.shields.io/travis/ceoshikhar/chimplist">
<img alt="npm" src="https://img.shields.io/npm/v/chimplist">
<a href='https://github.com/ceoshikhar'>
<img alt="GitHub followers" src="https://img.shields.io/github/followers/ceoshikhar?style=social">
</a>
</p>

> Chimplist makes it very easy and simple to work with Mailchimp's API v3 to manage your Lists(also called Audiences) and their Members.

## How to install?

```bash
npm install chimplist
```

## How to use Chimplist?

#### \*ES6 Syntax

```js
const Chimplist = require('chimplist');

const API_KEY = 'your Mailchimp API KEY';

const Chimp = new Chimplist(API_KEY);

/* Using `getAllLists()` function to get information about all lists
 * All the available functions with Chimplist are mentioned down below.
 * This is how you would work with the new ES6 promise syntax with .then .catch */
Chimp.getAllLists()
  .then((response) => {
    // Work with the `response` from Mailchimp API
    // `response` is a standard HTTP response(Headers, Body, etc).
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

A lot of people use Mailchimp for their `list` feature. Chimplist aims at the people who quickly just want to add a `sign up to newsletter` type of form to their website. This library aims to help them get started working with Mailchimp lists with ease and simplicity by making sure:

- You don't have to worry about the Mailchimp's API end points.
- You don't have to worry about handling authorizations.
- You don't have to worry about knowing how to make HTTP requests.
- You can use it on your back-end with just few lines of code.

Note: At the moment, Chimplist do not support the capability to apply `request query parameters` to your API requests for keeping things simple. Maybe in the future that feature might be added, untill then you might like using something like [node-mailchimp](https://www.npmjs.com/package/mailchimp-api-v3).

## Chimplist's Functions Guide

**`list_id`** - The **list id**(also known as **Audience ID**) of the specific list you are targeting. Can be found in Audience -> Settings -> Audience name and campaign defaults.

**`options`** - The data object which contains at least the **required** `request body parameters`. Reference links are provided down below along with those specific functions.

**`subscriber_hash`** - According to Mailchimp API documentation: "it is The MD5 hash of the lowercase version of the list member's email address". But it's basically the `id` of the `member`. It looks like `5adgf4de580e68d565db69db203a5c88`.

### LIST Functions

- **createList(options)** - Create a new list

  `options` -> to learn more about what `options` should contain, refer to mailchimp api documentaion [here](https://mailchimp.com/developer/reference/lists/#post_/lists).

* **getAllLists()** - Get information about all lists in the account.

* **getList(list_id)** - Get information about a specific list.

- **updateList(list_id, options)** - Update a specific list

  `options` -> To learn more about what `options` should contain, refer to Mailchimp API Documentaion [here](https://mailchimp.com/developer/reference/lists/#patch_/lists/-list_id-).

* **deleteList(list_id)** - Delete a specific list

### MEMBER Functions

- **addMember(list_id, options)** - Add a new list member

  `options` -> to learn more about what `options` should contain, refer to mailchimp api documentaion [here](https://mailchimp.com/developer/reference/lists/list-members/#post_/lists/-list_id-/members).

- **getAllMembers(list_id)** - Get information about members in a list

- **getMember(list_id, subscriber_hash)** - Get information about a specific list memeber.

- **updateMember(list_id, subscriber_hash, options)** - Update a specific list memeber.

  `options` -> to learn more about what `options` should contain, refer to mailchimp api documentaion [here](https://mailchimp.com/developer/reference/lists/list-members/#patch_/lists/-list_id-/members/-subscriber_hash-).

- **archiveMember(list_id, subscriber_hash)** - Archive a list memeber.

- **deleteMember(list_id, subscriber_has)** - Permanently delete a list member.
