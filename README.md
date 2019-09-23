# Single room multiuser chat app
## Repository Structure
- this repo includes `client` and `server` of the application in the respective folders
    - `client` in the folder `chat-client`
    - `server` in the folder  `server`
    
## Client
- the client was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) for the sake of simplicity
- run `npm install` and `npm run start` to run the application
- start the backed before

### Technologies
- `redux`
- `redux-thunk` for simple async actions
- `redux-saga` for intricate async flows as the message search
- `reduce-reducers` for structuring of reducers atomically
- `axios` just for convenience
- `@kiwicom/orbit-components` for test cases. To be replaced with `@material-ui`
- `@material-ui` it turned out that the `@kiwicom/orbit-components` are not as easy to cutomize as `@material-ui`. It has been a test.

### Available Scripts
- run: `npm run start`
- test: `npm run test`
- converage: `npm run coverage`
- lint: `npm run lint`

### Vision
- Error Handling
    - currently the happy path only works best
    - create production deployment
- Interface
    - commit to only one UI component library
        - replace @kiwicom/orbit-components with material-ui
    - improve user interaction.
        - submit via enter
        - simplify navigation using url routes: `/login`, `/chat`, `/search`
- Raise test coverage
    - Search field and sagas are not properly covered with unit tests


## Backend
- the backend makes use of two "pseudo"-microservices.
    - `user_service`
    - `message_service`

### Technologies
- `Flask`, and flask extension packages
- `python-socketio`

### Run
- use python `>= 3.6`
- install the dependencies `pip install -r requirements.txt`
- start mongodb in a container
    - message_service database: `docker run -d -p 27017:27017 mongo` 
    - user_service database: `docker run -d -p 27018:27017 mongo`
- run the *micro-services*
    - message_service
        - `cd server/message_service`
        - `python main.py`
    - user_service
        - `cd server/message_service`
        - `python main.py`

### Vision
- proper dockerization of the services
- proper deployment of the backend. Currently only development mode is supported.
- provide an api gateway to avoid hard-coding the ports into the client application
- use jwts for authentication?
