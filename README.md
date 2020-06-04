**Mode Backend - Node JS Express**<br/>
click[here](https://mode-app.herokuapp.com/) to view the app<br/>

to run it locally<br/>
-git clone https://github.com/Gauthamjm007/mode-app.git<br/>
-cd mode-app<br/>
-npm install<br/>
-npm start<br/>

Packages I have used:<br/>
Backend:<br/>
mongoose<br/>
express<br/>
bycryptjs<br/>
jsonwebtoken<br/>
dotenv<br/>
validator<br/>
loadash<br/>

API SPECS<br/>

1. Login<br/>
   method: POST<br/>
   end-point: /login<br/>
   body: {<br/>
   "username": "abinash",<br/>
   "password": "modestack123"<br/>
   }<br/>
   response: {<br/>
   "statusCode": "200",<br/>
   "body": {<br/>
   "message": "success",<br/>
   "accessToken" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"<br/>
   }<br/>
   }<br/>
   <br/>
2. Register<br/>
   method: POST<br/>
   end-point: /register<br/>
   body: {<br/>

"username": "abinash",<br/>
"password": "modestack123",<br/>
"email": "abinash@modestack.com",<br/>
"address": "bangalore"<br/>
}<br/>
response: {<br/>
"statusCode": "201",<br/>
"body": {<br/>
"message": "new user created"<br/>
}

3. Article - Create article<br/>
   method: POST<br/>
   end-point: /articles<br/>
   body: {<br/>
   "title": "modestack-blog",<br/>
   "body": "this is blog body",<br/>
   "author": "abinash",<br/>
   "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"<br/>
   }<br/>
   response: {<br/>
   "statusCode": "201",<br/>
   "body": {<br/>
   "message": "new article created"<br/>
   }<br/>

4. Article - List articles<br/>
   method: GET<br/>
   end-point: /articles<br/>
   response: {<br/>
   "statusCode": "200",<br/>
   "body": {<br/>
   "data": [<br/>
   {<br/>
   "title": "modestack-blog-1",<br/>
   "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>
   incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco<br/>

laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur",<br/>
"author": "abinash"<br/>
},<br/>
{<br/>
"title": "modestack-blog-2",<br/>
"body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur",
"author": "suhas"<br/>
},<br/>
{<br/>
"title": "modestack-blog-3",<br/>
"body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur",
"author": "harish"<br/>
},<br/>
{<br/>
"title": "modestack-blog-4",<br/>
"body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur",<br/>
"author": "mukesh"<br/>
}<br/>
]<br/>
}<br/>
