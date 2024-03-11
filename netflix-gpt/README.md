#Netflix GPT

- Create React App
- Configures TailwindCSS
- Header
- Routing of the App
- Login Form
- Sign up Form
- Formik library : Use this library to handel form validations when there's a very big form with a lot of fields which becomes difficult to handel.
- useRef Hook
- Firebase setup
- Deploying our app to production
- Create SignUp User Account
- Implement Signin User API
- Creating Redux Store with userSlice :
  (1) Create the store
  (2) Create a slice
  (3) Provide this slice to the store -> By adding it reducer of appStore.
  (4) Provide this store the app - By wrapping root code under <Provider store={appStore}></Provider> and provide the store prop with your store name.

  Very Important Note : We cannot directly update the state in slice reducer function. Example :
  when initialState : null;
  we cannot do :
  reducers: {
  addUser: (state, action) => {
  state = action.payload;
  }
  thus, we can instead return action.payload and it'll udpate the initialState:
  reducers: {
  addUser: (state, action) => {
  return action.payload;
  }

  But,
  if we had initialState like this :
  initialState: {
  items: [],
  }
  then we could have updated the state directly using state.items.push(action.payload); since we are update the items inside state, but not state directly using state = "...";

- Registering onAuthStateChanged() event to detect login() and logout() from firebase and trigger respective actions for each. 2 actions to take care : Updating the store stores and routing navigations)
- userNavigate to route to different path from javascript
- Implemented Signout feature
- Update Profile (adding name and PhotoURL)

#Features

- Login/Sign up page

  - Sign In/ Sign up Form
  - Redirect to Browse Page

- Browse (after authentication)

  - header
  - Main Movie
    - Trailer in Background
    - Movie title and Description
    - Movie Suggestions
      - MovieList \* N

- NetflixGPT
  - Search Bar
  - Movie Suggestions
