const typeDefinitions = `
type Todo {
  id: String
  ownerId: String
  text: String
  complete: Boolean
}

type TodoList {
  id: String
  name: String
  todos: [Todo]
}

type TodoCrud {
  op: String!
  todo: Todo!
}

type TodoListShared {
  userId: Int!
  listId: Int!
}

type TodoListCrud {
  op: String!
  todoList: TodoList!
}

type Subscription {
  todoChanges: TodoCrud
  todoListChanges: TodoListCrud
}

type User {
  id: String! 
  email: String!
  todoLists: [TodoList]
  sharedTodoLists: [TodoList]
}

type Authorized {
  token: String 
  data: User
}

type RootQuery {
  viewer(token: String!): User
}

type RootMutation {
  createTodo (
    text: String!
    complete: Boolean!
    listId: String!
    token: String!
  ): Todo

  deleteTodo (
    id: String!
    token: String!
  ): Todo 

  updateTodo (
    id: String!
    text: String!
    complete: Boolean!
    token: String!
  ): Todo 

  createTodoList(
    name: String!
    token: String!
  ): TodoList

  deleteTodoList(
    id: String!
    token: String!
  ): TodoList

  shareTodoList(
    listId: String!
    email: String!
    token: String!
  ): TodoListShared
  
  signUp (
    email: String!
    password: String!
  ): User

  login (
    email: String!
    password: String!
  ): Authorized
}

schema {
  query: RootQuery
  mutation: RootMutation
  subscription: Subscription
}
`;

export default typeDefinitions;
