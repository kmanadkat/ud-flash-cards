export const DECKS_STORAGE_KEY = 'FlashCards:decks'
export const QUIZ_STORAGE_KEY = 'FlashCards:quiz'
export const NOTIFICATION_KEY = 'FlashCcards:notifications'

export const DECKS = {
  "6h5ims9iks66d4m7kqizmv" : {
    id: "6h5ims9iks66d4m7kqizmv",
    title: "Javascript",
    createdAt: new Date("10/21/2020"),
    questions: [
      {
        question: 'Can you name two programming paradigms important for JavaScript app developers?',
        answer: 'JavaScript is a multi-paradigm language, supporting imperative/procedural programming along with OOP (Object-Oriented Programming) and functional programming. JavaScript supports OOP with prototypal inheritance.'
      },
      {
        question: 'What is the purpose of "This" operator in JavaScript?',
        answer: 'The JavaScript this keyword refers to the object it belongs to. This has different values depending on where it is used. In a method, this refers to the owner object and in a function, this refers to the global object.'
      },
      {
        question: ' What is Closure?',
        answer: 'Closures are created whenever a variable that is defined outside the current scope is accessed from within some inner scope. It gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created. To use a closure, simply define a function inside another function and expose it.'
      }
    ]
  },
  "6h5ims9iks66d4m7kqizmc" : {
    id: "6h5ims9iks66d4m7kqizmc",
    title: "React Js",
    createdAt: new Date("10/20/2020"),
    questions: [
      {
        question: 'How Virtual-DOM works in React?',
        answer: 'React creates a virtual DOM. When state changes in a component it firstly runs a “diffing” algorithm, which identifies what has changed in the virtual DOM. The second step is reconciliation, where it updates the DOM with the results of diff.'
      },
      {
        question: 'What is JSX?',
        answer: 'JSX is a syntax extension to JavaScript and comes with the full power of JavaScript. JSX produces React “elements”. You can embed any JavaScript expression in JSX by wrapping it in curly braces. After compilation, JSX expressions become regular JavaScript objects. This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions.'
      },
      {
        question: 'What are the differences between a class component and functional component?',
        answer: 'Class components allows us to use additional features such as local state and lifecycle hooks. Also, to enable our component to have direct access to our store and thus holds state. When our component just receives props and renders them to the page, this is a ‘stateless component’, for which a pure function can be used. These are also called dumb components or presentational components.'
      }
    ]
  },
  "6h5ims9iks66d4m7kqizmd" : {
    id: "6h5ims9iks66d4m7kqizmd",
    title: "Redux",
    createdAt: new Date("10/19/2020"),
    questions: [
      {
        question: 'What is Redux?',
        answer: 'Redux is a predictable state container for JavaScript apps based on the Flux design pattern. Redux can be used together with ReactJS, or with any other view library. It is tiny (about 2kB) and has no dependencies.'
      },
      {
        question: 'How to structure Redux top level directories?',
        answer: 'Most of the applications has several top-level directories as below 1. Components Used for “dumb” React components unaware of Redux 2. Containers Used for “smart” React components connected to Redux 3. Actions Used for all action creators, where file name corresponds to part of the app 4. Reducers Used for all reducers, where file name corresponds to state key 5. Store Used for store initialization This structure works well for small and mid-level size apps.'
      },
      {
        question: 'What is Redux Thunk?',
        answer: 'Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState() as parameters.'
      }
    ]
  }
}

export const QUIZ = {
  lastAttemptDeck: null,
  lastAttemptedAt: null,
  score: 0,
}