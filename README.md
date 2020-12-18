# GraphQL

source => (https://www.howtographql.com/) youtube link : https://www.youtube.com/watch?v=ZQL7tL2S0oQ

## Running server

```
npm start
```

After server is running write on browser write following :

### localhost:5000/graphql

### for displaying all book data

```
query{
	books {
	  id,name,authorId
	}
}
```

### for displaying single book data with author

```
query{
	book(id:1) {
	  id,name,author {
	    name
	  }
	}
}
```

### for displaying all Author data

```
query{
	authors {
	  id,name
	}
}
```

### for displaying all Author data with book

```
query{
  authors {
    id,name,books {
      id,name
    }
  }
}
```

### for adding book data write query

```
mutation{
 	addBook(name:"newBook",authorId:1)
  {
    id
    name
  }
}
```

### for adding author data write query

```
mutation{
 	addAuthor(name:"newAuthor")
  {
    id
    name
  }
}
```
