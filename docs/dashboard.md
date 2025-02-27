# Manager Dashboard Api

## Register Employee Api

Endpoint: POST /api/manager/register

- Authorization: "uniqe-token"

Request Body:

```json
{
  "fullName": "yuki suou",
  "departmentName": "marketing",
  "role": "employee", // default atau seorang manager tidak bisa membuat akun dengan role manager (di urus FrontEnd)
  "domicile": "madiun", // cukup nama kota
  "phone": "085*****",
  "managerId": "A001" // id manager/HRD
}
```

Special Note:

```json
{
  "password": "{{ id/library random character }}"
  // auto generate
  // dan password tidak boleh dikembalikan sebagai http response
}
```

Response Body Success:

```json
{
  "data": {
    "id": "AX7", // auto generate
    "email": "{{ fullName }}@gmail.com", // auto generate
    "fullName": "yuki suou",
    "departmentId": "MARK02",
    "departmentName": "marketing",
    "role": "employee",
    "domicile": "madiun",
    "phone": "085*****",
    "managerId": "A001", // diambil dari tabel users yang memiliki role manager/admin
    "maxQuota": "3", // diambil dari tabel quota berdasarkan departmentId
    "status": "inActive" // status hanya akan berubah ketika login dan logout
  }
}
```

Response Body Erros:

```json
{
  "errors": "FullName Already Registered"
}
```

## Update Employee Api

Endpoint: PATCH /api/manager/:employeeId

- Authorization: "uniqe-token"

Request Body:

```json
{
  "fullName": "yuki suou",
  "departmentName": "marketing",
  "role": "employee",
  "domicile": "madiun",
  "phone": "085*****",
  "managerId": "A001"
}
```

Special Note:

```json
{
  "password": "*****" // hanya bisa di update oleh user
}
```

Response Body Success:

```json
{
  "data": {
    "id": "AX7",
    "email": "{{ fullName }}@gmail.com",
    "fullName": "yuki suou", // new
    "departmentName": "marketing", // new
    "role": "employee", // new
    "domicile": "madiun", // new
    "phone": "085*****", // new
    "managerId": "A001", // new
    "maxQuota": "3",
    "status": "inActive"
  }
}
```

Response Body Erros:

```json
{
  "errors": "FullName Already Registered"
}
```

## Get Employee Api

Endpoint: GET /api/manager/:employeeId

- Authorization: "uniqe-token"

Response Body Success:

```json
{
  "data": {
    "id": "AX7",
    "email": "{{ fullName }}@gmail.com",
    "fullName": "yuki suou",
    "departmentId": "MARK02",
    "departmentName": "marketing",
    "role": "employee",
    "domicile": "madiun",
    "phone": "085*****",
    "managerId": "A001",
    "maxQuota": "3",
    "status": "inActive"
  }
}
```

Response Body Erros:

```json
{
  "errors": "phone number max length could under 13"
}
```

## Get All Employee Api

Endpoint: GET /api/manager/employees

- Authorization: "uniqe-token"

Response Body Success:

```json
{
  "data": {
    "id": "AX7",
    "email": "{{ fullName }}@gmail.com",
    "fullName": "yuki suou",
    "departmentId": "MARK02",
    "departmentName": "marketing",
    "role": "employee",
    "domicile": "madiun",
    "phone": "085*****",
    "managerId": "A001",
    "maxQuota": "3",
    "status": "inActive"
  },
  {
    "id": "AX10",
    "email": "{{ fullName }}@gmail.com",
    "fullName": "yuki kato",
    "departmentId": "MARK02",
    "departmentName": "marketing",
    "role": "employee",
    "domicile": "bandung",
    "phone": "085*****",
    "managerId": "A001",
    "maxQuota": "3",
    "status": "inActive"
  }
}
```

Response Body Erros:

```json
{
  "errors": "phone number max length could under 13"
}
```

## Delete Employee Api

Endpoint: DELETE /api/manager/:employeeId

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
  "errors": "employeeId not found"
}
```

# Admin Dashboard Api

semua API yang dibuat untuk manager otomatis bisa digunakan untuk admin

## Register Employee or Manager Api

Endpoint: POST /api/admin/register

- Authorization: "uniqe-token"

Request Body:

```json
{
  "fullName": "yuki suou",
  "departmentName": "marketing",
  "role": "manager", // bisa employee atau manager (di urus FrontEnd)
  "domicile": "madiun", // cukup nama kota
  "phone": "085*****",
  "managerId": "A001" // id manager/HRD
}
```

Special Note:

```json
{
  "password": "{{ id/library random character }}"
  // auto generate
  // dan password tidak boleh dikembalikan sebagai http response
}
```

Response Body Success:

```json
{
  "data": {
    "id": "AX7", // auto generate
    "email": "{{ fullName }}@gmail.com", // auto generate
    "fullName": "yuki suou",
    "departmentId": "MARK02",
    "departmentName": "marketing",
    "role": "manager",
    "domicile": "madiun",
    "phone": "085*****",
    "managerId": "A001", // diambil dari tabel users yang memiliki role manager/admin
    "maxQuota": "3", // diambil dari tabel quota berdasarkan departmentId
    "status": "inActive"
  }
}
```

Response Body Erros:

```json
{
  "errors": "FullName Already Registered"
}
```

## Update Manager Api

Endpoint: PATCH /api/admin/:employeeId

- Authorization: "uniqe-token"

Request Body:

```json
{
  "fullName": "yuki suou",
  "departmentName": "marketing",
  "role": "manager",
  "domicile": "madiun",
  "phone": "085*****",
  "managerId": "A001"
}
```

Special Note:

```json
{
  "password": "*****" // hanya bisa di update oleh user
}
```

Response Body Success:

```json
{
  "data": {
    "id": "AX7",
    "email": "{{ fullName }}@gmail.com",
    "fullName": "yuki suou", // new
    "departmentId": "MARK02",
    "departmentName": "marketing", // new
    "role": "manager", // new
    "domicile": "madiun", // new
    "phone": "085*****", // new
    "managerId": "A001", // new
    "maxQuota": "3",
    "status": "inActive"
  }
}
```

Response Body Erros:

```json
{
  "errors": "FullName Already Registered"
}
```

## Get Manager Api

Endpoint: GET /api/admin/:employeeId

- Authorization: "uniqe-token"

Response Body Success:

```json
{
  "data": {
    "id": "AX7",
    "email": "{{ fullName }}@gmail.com",
    "fullName": "yuki suou",
    "departmentId": "MARK02",
    "departmentName": "marketing",
    "role": "employee",
    "domicile": "madiun",
    "phone": "085*****",
    "managerId": "A001",
    "maxQuota": "3",
    "status": "inActive"
  }
}
```

Response Body Erros:

```json
{
  "errors": "phone number max length could under 13"
}
```

## Get All Manager Api

Endpoint: GET /api/admin/employees

- Authorization: "uniqe-token"

Response Body Success:

```json
{
  "data": {
    "id": "AX7",
    "email": "{{ fullName }}@gmail.com",
    "fullName": "yuki suou",
    "departmentId": "MARK02",
    "departmentName": "marketing",
    "role": "manager",
    "domicile": "madiun",
    "phone": "085*****",
    "managerId": "A001",
    "maxQuota": "3",
    "status": "inActive"
  },
  {
    "id": "AX10",
    "email": "{{ fullName }}@gmail.com",
    "fullName": "yuki kato",
    "departmentId": "MARK02",
    "departmentName": "marketing",
    "role": "manager",
    "domicile": "bandung",
    "phone": "085*****",
    "managerId": "A001",
    "maxQuota": "3",
    "status": "inActive"
  }
}
```

Response Body Erros:

```json
{
  "errors": "phone number max length could under 13"
}
```

## Delete Manager Api

Endpoint: DELETE /api/admin/:employeeId

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
  "errors": "employeeId not found"
}
```
