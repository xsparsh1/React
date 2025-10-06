JSON Server Setup Guide
This guide will help you create a local mock REST API using JSON Server - perfect for testing and practicing API calls with React or any frontend framework.

Prerequisites:
Before starting, make sure you have installed:

Node.js (Download from nodejs.org)
npm (comes pre-installed with Node.js)

Setup Steps
1. Create a New Folder
Create a separate folder for your JSON Server setup:
json-server-setup
cd json-server-setup

2. Initialize npm
Run the following command to initialize npm and create a package.json file:
npm init -y

3. Install JSON Server
Install JSON Server as a development dependency:
npm install json-server

4. Create a JSON Data File
Create a new file named db.json in the root of your folder:
db.json

Paste the following sample data inside db.json:

{
  "users": [
    {
      "name": "sparsh",
      "age": 20,
      "id": "1"
    },
    {
      "name": "harsh",
      "age": 19,
      "id": "2"
    },
    {
      "name": "vansh",
      "age": 18,
      "id": "3"
    },
    {
      "name": "ansh",
      "age": "21",
      "id": "4"
    }
  ]
}

5. Run the JSON Server
Start your JSON Server using the following command:
npx json-server db.json

Now open your browser and visit:
http://localhost:3000/users
You’ll see the list of users from your JSON file.
