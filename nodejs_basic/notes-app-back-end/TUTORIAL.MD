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