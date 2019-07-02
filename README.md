![CF](http://i.imgur.com/7v5ASc8.png) LAB  
=================================================  
  
## Lab 37 - Reducers  
  
### Author: Morgana Spake  
  
### Links and Resources  
* [submission PR](https://github.com/401-advanced-javascript-mspake/lab-37-reducers/pull/1)  
  
<!-- #### Documentation  
* [api docs](http://xyz.com) (API servers)
* [jsdoc](http://xyz.com) (Server assignments)
* [styleguide](http://xyz.com) (React assignments) -->

### Modules  
#### `app.js, create-store.js, main-reducer.js, bookshelf-reducer.js, book-reducer.js`  
##### Exported Values and Methods  
  
###### `app -> React Component Instance`  
###### `createStore -> Redux Store`  
###### `mainReducer -> Redux combined reducers`  
###### `bookshelfReducer -> Redux Reducer`  
###### `bookReducer -> Redux Reducer`  
  
#### Running the app
* `npm start`  
* Bookshelf actions:  
  * `create_bookshelf`  
  * `update_bookshelf`  
  * `delete_bookshelf`  
* Book actions:  
  * `create_book`  
  * `update_book`  
  * `delete_book`  
  
#### Testing  
* Bookshelf:  
`{ type: <action>, payload: {id: <id>, name: <name> }}`  
* Book:  
`{ type: <action>, payload: {id: <id>, shelfId: <shelfId>, name: <name>, author: <author> }}`  
