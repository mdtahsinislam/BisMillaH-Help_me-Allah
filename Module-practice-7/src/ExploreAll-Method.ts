//একটি গুরুত্বপূর্ণ বিষয়: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS এগুলো PostgreSQL-এর method নয়। এগুলো HTTP Methods (Request Methods), যা Client (Browser/Postman) এবং Server (Express API)-এর মধ্যে যোগাযোগের জন্য ব্যবহৃত হয়। PostgreSQL-এর সাথে এগুলো সাধারণত SQL Query-এর মাধ্যমে কাজ করে।

//HTTP Methods Overview

// | Method  | কাজ                     | SQL Equivalent        |
// | ------- | ----------------------- | --------------------- |
// | GET     | Data Retrieve           | SELECT                |
// | POST    | New Data Create         | INSERT                |
// | PUT     | Entire Data Update      | UPDATE                |
// | PATCH   | Partial Data Update     | UPDATE                |
// | DELETE  | Data Delete             | DELETE                |
// | HEAD    | শুধু Header Return      | SELECT (without body) |
// | OPTIONS | Available Methods দেখায় | N/A                   |




1. GET Method
Definition

Server থেকে Data আনার জন্য ব্যবহার করা হয়।

Example

GET /api/users


app.get("/api/users", async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM users"
  );

  res.json(result.rows);
});


SQL Query

SELECT * FROM users;

Real Life Example
User List দেখা
Product List দেখা
Single User Information দেখা


2. POST Method
Definition

নতুন Data Create করার জন্য ব্যবহার করা হয়।

Example
POST /api/users

Request Body
{
  "name":"Tahsin",
  "email":"tahsin@gmail.com"
}

Express
app.post("/api/users", async (req, res) => {
  const { name, email } = req.body;

  await pool.query(
    `
    INSERT INTO users(name,email)
    VALUES($1,$2)
    `,
    [name,email]
  );
});

SQL Query
INSERT INTO users(name,email)
VALUES('Tahsin','tahsin@gmail.com');

Real Life Example
Registration
Add Product
Create Blog

3. PUT Method
Definition

পুরো Resource Update করে।

যে Fields পাঠাবে না সেগুলোও Update হতে পারে।

Existing User

{
  "name":"Tahsin",
  "age":22,
  "city":"Chattogram"
}

PUT Request
{
  "name":"Tahsin Hasan",
  "age":23,
  "city":"Dhaka"
}
পুরো Object Replace হয়ে যাবে।
Express
app.put("/api/users/:id", async (req,res)=>{
  const {name,age} = req.body;

  await pool.query(
    `
    UPDATE users
    SET name=$1, age=$2
    WHERE id=$3
    `,
    [name,age,req.params.id]
  );
});

SQL Query
UPDATE users
SET name='Tahsin Hasan',
    age=23
WHERE id=1;

Real Life Example
Complete Profile Update
4. PATCH Method
Definition

শুধু নির্দিষ্ট Field Update করে।

Existing User
{
  "name":"Tahsin",
  "age":22,
  "city":"Chattogram"
}
PATCH Request
{
  "age":23
}
Result
{
  "name":"Tahsin",
  "age":23,
  "city":"Chattogram"
}
Express
app.patch("/api/users/:id", async (req,res)=>{
  const { age } = req.body;

  await pool.query(
    `
    UPDATE users
    SET age=$1
    WHERE id=$2
    `,
    [age,req.params.id]
  );
});
SQL Query
UPDATE users
SET age=23
WHERE id=1;


Real Life Example
Password Change
Status Change
Single Field Update


| Feature               | PUT | PATCH |
| --------------------- | --- | ----- |
| Full Update           | ✅   | ❌     |
| Partial Update        | ❌   | ✅     |
| Entire Object Replace | ✅   | ❌     |
| Single Field Change   | ❌   | ✅     |


Example

PUT

{
  "name":"Tahsin",
  "age":23,
  "city":"Dhaka"
}

PATCH
{
  "age":23
}

5. DELETE Method
Definition

Database থেকে Data Delete করে।

Express
app.delete("/api/users/:id", async (req,res)=>{
  await pool.query(
    `
    DELETE FROM users
    WHERE id=$1
    `,
    [req.params.id]
  );
});

SQL Query
DELETE FROM users
WHERE id=1;


Real Life Example
Delete User
Delete Product
Delete Blog



6. HEAD Method
Definition

GET এর মতো কাজ করে কিন্তু Response Body পাঠায় না।

শুধু Header পাঠায়।

Example
HEAD /api/users

Response
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 1200

কোন Data আসবে না।

Express

app.head("/api/users", (req,res)=>{
  res.status(200).end();
});


Real Life Example
File Size Check
Resource Exists কিনা Check



7. OPTIONS Method
Definition

একটি Route কোন কোন HTTP Methods Support করে তা জানায়।

Example

OPTIONS /api/users

Response
Allow: GET, POST, PUT, PATCH, DELETE

Express
app.options("/api/users",(req,res)=>{
  res.setHeader(
    "Allow",
    "GET,POST,PUT,PATCH,DELETE"
  );

  res.send();
});

Real Life Example
CORS
API Documentation
Browser Preflight Request


//সহজে মনে রাখার ট্রিক
GET     → Data দেখাও
POST    → Data তৈরি করো
PUT     → পুরো Data Update করো
PATCH   → কিছু অংশ Update করো
DELETE  → Data মুছে ফেলো
HEAD    → শুধু Header দেখাও
OPTIONS → কোন Method Allowed দেখাও

//REST API CRUD Mapping
CREATE  → POST
READ    → GET
UPDATE  → PUT / PATCH
DELETE  → DELETE