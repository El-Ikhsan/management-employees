# Users Api Spec

## Login User Api

Endpoint: POST /api/users/login

Request Body:

```json
{
  "email": "yuki@gmail.com",
  "Password": "*****"
}
```

Response Body Success:

```json
{
  "data": {
    "id": "AX7",
    "token": "uniqe-token",
    "role": "admin",
    "status": "active" // status login
  }
}
```

Response Body Erros:

```json
{
  "errors": "Email or Password Wrong"
}
```

## Update User Api

Endpoint: PATCH /api/users/:userid

Headers:

- Authorization: "uniqe-token"

Request Body:

```json
{
  "Password": "***** new"
}
```

Response Body Success:

```json
{
  "data": {
    "id": "AX7",
    "email": "yuki@gmail.com",
    "fullName": "yuki suou"
  }
}
```

Response Body Erros:

```json
{
  "errors": "password max lenght 100"
}
```

## Get User Api

Endpoint: GET /api/users/:userid

Headers:

- Authorization: "uniqe-token"

Respone Body Success:

```json
{
  "data": {
    "id": "AX7",
    "email": "yuki@gmail.com",
    "fullName": "yuki suou",
    "department": "marketing",
    "managerId": "A001",
    "domisili": "madiun", // cukup nama kota
    "phone": "085*****",
    "maxQuota": "3" // satuan hari
  }
}
```

Response Body Erros:

```json
{
  "errors": "User is Not Found"
}
```

## Logout User Api

Endpoint: DELETE /api/users/:userid

Headers:

- Authorization: "uniqe-token"

Response Body Success:

```json
{
  "data": "OK"
  // ketika logout status menjadi inActive
}
```

Response Body Erros:

```json
{
  "errors": "Unauthorized"
}
```
