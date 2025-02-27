# Departements Api Spec

semua api di sini hanya bisa diganakan oleh akun yang memiliki role admin

## Input Data Departement Api

Endpoint: POST /api/admin/departments/insert

- Authorization: "uniqe-token"

Request Body:

```json
{
  "departmentName": "marketing",
  "description": "lorem ipsum...",
  "managerId": "MR10",
  "maxQuota": "10" // maxquota hanya bisa dibuat dengan api ini
}
```

Response Body Success:

```json
{
  "data": {
    "id": "MARK02",
    "departmentName": "marketing",
    "description": "lorem ipsum...",
    "managerId": "MR10",
    "maxQuota": "10"
  }
}
```

Response Body Erros:

```json
{
  "errors": "departmentName or Password Wrong"
}
```

## Update Data Departement Api

Endpoint: PATCH /api/admin/departments/:departmentId

- Authorization: "uniqe-token"

Request Body:

```json
{
  "departmentName": "marketing",
  "description": "lorem ipsum...",
  "managerId": "MR10",
  "maxQuota": "10" // maxquota hanya bisa dibuat dengan api ini
}
```

Response Body Success:

```json
{
  "data": {
    "id": "MARK02", // new
    "departmentName": "marketing", // new
    "description": "lorem ipsum...", // new
    "managerId": "MR10", // new
    "maxQuota": "10" // new
  }
}
```

Response Body Erros:

```json
{
  "errors": "departmentName already exist"
}
```

## Get Data Departement Api

Endpoint: GET /api/admin/departments/:departmentId

- Authorization: "uniqe-token"

Response Body Success:

```json
{
  "data": {
    "id": "MARK02", // new
    "departmentName": "marketing", // new
    "description": "lorem ipsum...", // new
    "managerId": "MR10", // new
    "maxQuota": "10" // new
  }
}
```

Response Body Erros:

```json
{
  "errors": "departmentId not found"
}
```

## Get Data Departement Api

Endpoint: GET /api/admin/departments

- Authorization: "uniqe-token"

Response Body Success:

```json
{
  "data": {
    "id": "MARK02",
    "departmentName": "marketing",
    "description": "lorem ipsum...",
    "managerId": "MR10",
    "maxQuota": "10"
  },
  {
    "id": "MARK03",
    "departmentName": "akunting",
    "description": "lorem ipsum...",
    "managerId": "MR11",
    "maxQuota": "5"
  }
}
```

Response Body Erros:

```json
{
  "errors": "unauthorized"
}
```

## Delete Data Departement Api

Endpoint: DELETE /api/admin/departments/:departmentId

- Authorization: "uniqe-token"

Response Body Success:

```json
{
  "data": "OK"
}
```

Response Body Erros:

```json
{
  "errors": "departmentId not found"
}
```
