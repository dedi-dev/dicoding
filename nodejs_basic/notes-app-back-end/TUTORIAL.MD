### 1. npm init -y
### 2. npm install nodemon --save-dev
### 3. npm init @eslint/config@latest
 - would you like to use ESLint? -> To check syntax and find problems.
 - What type of modules does your project use? -> CommonJS (require/exports).
 - Which framework does your framework use? -> None of these. 
 - Does your project use TypeScript? -> No.
 - Where does your code run? -> Node (pilih menggunakan spasi).
 - Would you like to …… (seluruh pertanyaan selanjutnya) -> Y.
 ### 4. npm install --save-dev eslint-config-dicodingacademy
 update eslint.config.mjs
 ```js
import daStyle from 'eslint-config-dicodingacademy';
 
export default [
  daStyle,
  // other config style
];
```

update package.json
```js
"scripts": {
  "lint": "eslint ./"
},
```
### 5. Jalankan perintah npm run lint untuk menjalankan linter
### 6. npm install @hapi/hapi
### 7. buat struktur folder
notes-app-back-end
├── node_modules
├── src
│ ├── handler.js
│ ├── notes.js
│ ├── routes.js
│ └── server.js
├── .eslintrc.json
├── package-lock.json
└── package.json
update package.json
```js
"scripts": {
  "start": "nodemon ./src/server.js",
  "lint": "eslint ./"
},
```
### 8. npm install nanoid@3

### 9. connect ssh to aws with key .pem ssh -i "notes-api-webserver.pem" ubuntu@ec2-18-141-145-18.ap-southeast-1.compute.amazonaws.com
jika ada  error  permission yang terlalu terbuka 
```
chmod 400 notes-api-webserver.pem
```

### 10. install pm2 in server 
```
npm install -g pm2
```

### 11. run app with pm2
```
pm2 start npm --name "notes-api" -- run "start:prod"

pm2 restart notes-api //for restart
pm2 stop notes-api //for stopping
pm2 start notes-api // start with created name
```