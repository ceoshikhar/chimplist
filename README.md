# chimplist

Chimplist makes it very easy and simple to work with Mailchimp's API v3 to manage your Lists(also called Audiences).

## Quick start guide

### ES6 Syntax

Note: async/await style is mentioned after this.

```js
const Chimplist = require('chimplist');

const API_KEY = 'your Mailchimp API';

const Chimp = new Chimplist(API_KEY);

// use `getLists()` function to get all the lists. The list of all the
// functions available are down below.
Chimp.getLists()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
```

## Features

### 1. LISTS

- getLists
- createList
- updateList
- deleteList

### 2. MEMBERS

- getMembers
- addMember
- deleteMember
- updateMember

```

```
