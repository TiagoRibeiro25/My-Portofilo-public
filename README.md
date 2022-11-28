# My-Portofilo-public

This is the public version of my portfolio which was made
with Vue.js for the front-end and Node.js with Express for the back-end.

## How to run

Before running the project, you need to create a file ".env" in the "./Back-End"
folder with the content of the ".env.example" file and replace the values with
your API keys.

### Front-End

```
cd Front-End
npm install
npm run dev
```

### Back-End

```
cd Back-End
npm install
npm run start
```

I recommend using [nodemon](https://www.npmjs.com/package/nodemon) to run the back-end. It will automatically restart the server when you make changes to the code, making it easier to test.

## How to build

### Front-End

```
cd Front-End
npm run build
```

### Back-End

Take the content inside the folder "dist"
after building the front-end and paste it
inside the folder "Back-End/public".

## Live demo

[Live Demo](https://tiagoribeiro.cyclic.app)

## Author

Tiago Ribeiro
