# Assignment 9

#### To-Do Webapp using NodeJs, Mongoose, MongoDb, Express, React (MERN Stack)  
>fetch all existing todo items using Todo Resource
>add a todo item using Todo Resource
>update a todo item using Todo Resource
>delete a todo item using Todo Resource
  
ToDo Object Attributes:
>id
>title
>description
>createdDate
>DueDate


  

#### Installation  
1. Clone the repository `git clone  
2. Navigate to project directory.
3. Run `npm install`.
4. Install Chrome/Firefox to view the running application
5. Install visual StudioCode/ IntelliJ to view to source Code.


#### Run
1. cd todobackend
2. npm run dev (builds, runs the bin from the dist folder on localhost port no. 3005)
3. cd ..
4. cd todolistapp
5. npm start (starts my F/E React App on localhost port no. 3000)


#### Test Cases for backend via POSTMAN
Use PostMan to test the REST APIs on GET, PUT, POST, DELETE
>GET localhost:3005/todos/
>GET localhost:3005/todos/{:id}
>POST localhost:3000/todos/  -> JSON body example
```
{
"title": "My first Todo updated",
"description": "My first Todo"
}
```
>PUT localhost:3000/todos/{:id}
>DELET localhost:3000/todos/{:id}

#### Test Cases for Entire App via front end react app
>Add, view, mark complete the todo task and verify it in the PostMan


#### Dependencies
  - babel
  - cookie-parser
  - morgan
  - win-node-env

______________________
#### License
[MIT License](https://opensource.org/licenses/MIT)

___________________________
Connect with me on LinkedIn : [Deepak Lokwani](https://www.linkedin.com/in/deepaklokwani1/)
NUID: 001316769  