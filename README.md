## Documentation

First of all create a file with .env extension and write below line in it and save

```
PORT=8000
```

**In order to test the api have to install postman or, for vs code install thunder client**

To run the server
in the terminal, with having the code directory run the command

```
npm run startDev
or,
node app.js
```

if the server runs perfectly, in the terminal you will see:

> Server is Successfully Running, and App is listening on port 8000

otherwise it will show:

> Error occurred, server can't start and also the error message

If everything is alright till now then open the browser and go to the url:
[CLICK HERE](http://localhost:8000/)

now in the browser window you will see this message:
**## server is running..**

To check all other method please use postman or thunder clinet and in the url put this url:
http://localhost:8000/api

by default it is a get request and you will see :

> Hello, this is a get request

now from postman if you change the method from get to post,put,patch and delete then you will see different messages indicating there http method
but only for post method, from postman you have to pass a name from the body like this,

```
{
	"name": "sOhan"
}
```
