# Front End Expat Journal

## Documentation

Base URL for deployed API: https://bw-expat-journal-web.herokuapp.com/ 

## **Endpoints**

| Method | URL                  | Description                                                                               | Requires Token | Requires Admin |
| ------ | ------------------   | ------------------------------------------------------------------------------------------|--------------- | -------------- |
| POST   | /api/auth/register   | register a new user                                                                       | -              | -              |
| POST   | /api/auth/login      | login as existing user                                                                    | -              | -              |
| POST   | /api/                | create a new post                                                                         | X              | -              |
| GET    | /api/posts           | get information of all posts                                                              | X              | -              |
| GET    | /api/posts/:id       | gets a specific posts by id                                                               | X              | -              |
| GET    |/api/users/:id/posts  | get posts created by users with specified ID                                              | -              | -              |
| PUT    | /api/posts/:id       | edit a posts(this is a new feature for DELETE a story or a photo associated with a post ) | X              | X              |
| DELETE | /api/posts/:id       | delete a posts from database                                                              | X              | X              | 
