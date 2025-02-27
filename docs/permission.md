# Permission Api Spec

## POST Permission Employ Api

Endpoint: POST /api/permission

Request Body:

```json
{
  "fullName": "yuki",
  "departement": "marketing",
  "startDate": "12-12-2024", // timestamp == (startDate-3) status == reject;
  "endDate": "22-12-2024",
  "evidence": "url" // url google drive
}
```

Response Body Success:

```json
{
  "data": {
    "id": 1, // data dari server
    "fullName": "yuki",
    "departement": "marketing",
    "timeStamp": "11-12-2024", // data dari server
    "startDate": "12-12-2024",
    "endDate": "22-12-2024",
    "evidence": "url",
    "status": "pending/approved/rejected", // data dari server
    "maxQuota": 3 // data dari settingan dashboard hrd
    // jika quota habis pembuatan ijin otomatis gagal
  }
}
```

Response Body Erros:

```json
{
  "errors": "the date already reserved"
}
```

## GET Permission Employ Api

Endpoint: GET /api/permission/:id

Request Body:

```json
{
  "id": 1
}
```

Response Body Success:

```json
{
  "data": {
    "id": 1,
    "fullName": "yuki",
    "departement": "marketing",
    "timeStamp": "11-12-2024",
    "startDate": "12-12-2024",
    "endDate": "22-12-2024",
    "evidence": "url",
    "status": "pending",
    "maxQuota": 3
  }
}
```

Response Body Erros:

```json
{
  "errors": "id not found"
}
```

## GET All Permission Employe Api

Endpoint: GET /api/permission/all

Request Body:

```json
{}
```

Response Body Success:

```json
{
  "data": {
    "id": 1,
    "fullName": "yuki",
    "departement": "marketing",
    "timeStamp": "11-12-2024",
    "startDate": "12-12-2024",
    "endDate": "22-12-2024",
    "evidence": "url",
    "status": "pending",
    "maxQuota": 3
  },
  {
    "id": 2,
    "fullName": "yuki",
    "departement": "marketing",
    "timeStamp": "11-12-2024",
    "startDate": "12-12-2024",
    "endDate": "22-12-2024",
    "evidence": "url",
    "status": "pending",
    "maxQuota": 3
  }
}
```

Response Body Erros:

```json
{
  "errors": "data not found"
}
```

## Update Permission Api

Endpoint: PATCH /api/permission/:id

- Authorization: Bearer "your_accessToken"

Request Body:

```json
{
  "fullName": "yuki",
  "departement": "marketing",
  "startDate": "12-12-2024", // timestamp == (startDate-3) status == reject;
  "endDate": "22-12-2024",
  "evidence": "url"
}
```

Response Body Success:

```json
{
  "data": {
    "id": 1,
    "fullName": "yuki",
    "departement": "marketing",
    "timeStamp": "11-12-2024",
    "startDate": "12-12-2024",
    "endDate": "22-12-2024",
    "evidence": "url",
    "status": "pending",
    "maxQuota": 3
  }
}
```

Response Body Erros:

```json
{
  "errors": "name max lenght 100"
}
```

## Delete Permission Api

Endpoint: DELETE /api/permission/:id

Headers:

- Authorization: Bearer "your_accessToken"

Request Body Success:

```json
{
  "id": 1
}
```

Response Body Success:

```json
{
  "data": "OK"
}
```

Response Body Erros:

```json
{
  "errors": "Unauthorized"
}
```
