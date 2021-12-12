# REST API Gistmd onboarding
The entire application is contained within the `index.js` file.
`config.js` is a connection configuration for mySql.
## Install

    npm install

## Run the app - development

    npm run runDev

# REST API

## Get list of all questions

### Request

`GET /api/`

### Response
    Array of questions objects
    [
    {"ID": 0,
    "name": "Language",
    "heText": "בחר את שפת המטופל",
    "enText": "Select the patient's language",
    "icon": "language"},
    {
        ...
    }
    ]

## Get one question - NOT USED ON THIS PROJECT

### Request

`GET /api/questions/:questionId`

### Response
Example:
{
    "ID": 1,
    "name": "Gender",
    "heText": "בחר את מין המטופל",
    "enText": "Select the patient's gender",
    "icon": "venus-mars"
}

## Get a question options 

### Request

`GET /api/questions/:questionId/options`

### Response
Example: 
(For gender question:) 
[
    {
        "id": 0,
        "questionId": 1,
        "name": "Female",
        "icon": "female"
    },
    {
        "id": 1,
        "questionId": 1,
        "name": "Male",
        "icon": "male"
    }
]

## Get one user data
### Request

`GET /api/users/:userId`

### Response
Example:
{
    "ID": 60,
    "Language": "Hebrew",
    "Gender": "Female",
    "Age": "2021-12-01T22:00:00.000Z",
    "Procedore": "Cataract Surgery"
}
## Post one user
### Request

`POST /api/users/user`
Request body: {
    "Language": "Hebrew",
    "Gender": "Female",
    "Age": "2021-12-01T22:00:00.000Z",
    "Procedore": "Cataract Surgery"
}
### Response
Example:
{
    "id": 79
}