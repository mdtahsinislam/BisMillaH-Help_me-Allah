// * postgress sql 
// * connected on postman
// * connected on neondb
// * 1. Create server with Express & type script 
// * 2. Understanding the express Request Response 
// * 3 Setting up postgress with Neon Serverless cloud
// * 4  Explore SQL Data types 
// * 5 Executing pool and creating tables
// * 6 Creating our first user with post method 
// * 7 Getting All users and single user with params
// * 8 Update user with put method 
// * 9 Delete user with delete method 
// * 10 Set up Environment based configurations.

// আমাকে Full code ভেঙ্গে ভেঙ্গে explaination in comments  সহ details  সব code দাও



//তুমি যেহেতু Express + TypeScript + PostgreSQL (NeonDB) শিখছো, আমি পুরো Project Structure, Environment Configuration, CRUD Operations (Create, Read, Update, Delete) এবং প্রতিটি লাইনের Bangla Comment সহ ব্যাখ্যা দিচ্ছি।



// 1. Project Setup
// Install Packages
//npm init -y

//npm install express pg dotenv

//npm install -D typescript ts-node-dev @types/node @types/express


//tsconfig.json
// {
//   "compilerOptions": {
//     "target": "ES2020",
//     "module": "NodeNext",
//     "moduleResolution": "NodeNext",
//     "strict": true,
//     "esModuleInterop": true,
//     "outDir": "./dist"
//   }
// }


//package.json Scripts
// {
//   "scripts": {
//     "dev": "ts-node-dev --respawn src/server.ts",
//     "build": "tsc",
//     "start": "node dist/server.js"
//   }
// }


//2. Environment Configuration
//.env
//PORT=5000

//DATABASE_URL=postgresql://username:password@host/database?sslmode=require


//Complete server.ts
// =============================
// Import Required Packages
// =============================

import express, {
  Application,
  Request,
  Response,
} from "express";

import dotenv from "dotenv";
import { Pool } from "pg";

// .env file load করবে
dotenv.config();

// Express application create
const app: Application = express();

// Environment Variable থেকে Port
const port = process.env.PORT || 5000;

// =============================
// Middleware
// =============================

// JSON Data Read করার জন্য
app.use(express.json());

// Form Data Read করার জন্য
app.use(
  express.urlencoded({
    extended: true,
  })
);

// =============================
// PostgreSQL Connection
// =============================

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// =============================
// Create Table
// =============================

const initializeDB = async () => {
  try {
    await pool.query(`
    
      CREATE TABLE IF NOT EXISTS users(
      
        id SERIAL PRIMARY KEY,

        name VARCHAR(50),

        email VARCHAR(100)
        UNIQUE NOT NULL,

        password VARCHAR(100)
        NOT NULL,

        age INT,

        is_active BOOLEAN
        DEFAULT true,

        created_at TIMESTAMP
        DEFAULT NOW(),

        updated_at TIMESTAMP
        DEFAULT NOW()
      )
    
    `);

    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};

initializeDB();

// =============================
// Home Route
// =============================

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server Running Successfully",
  });
});

// ====================================================
// CREATE USER
// POST /api/users
// ====================================================

app.post("/api/users", async (req: Request, res: Response) => {
  const { name, email, password, age } = req.body;

  try {
    const result = await pool.query(
      `
      INSERT INTO users
      (
        name,
        email,
        password,
        age
      )
      VALUES
      (
        $1,
        $2,
        $3,
        $4
      )
      RETURNING *
      `,
      [name, email, password, age]
    );

    res.status(201).json({
      success: true,
      message: "User Created Successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ====================================================
// GET ALL USERS
// GET /api/users
// ====================================================

app.get("/api/users", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(
      `
      SELECT *
      FROM users
      ORDER BY id ASC
      `
    );

    res.status(200).json({
      success: true,
      message: "Users Retrieved Successfully",
      total: result.rows.length,
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ====================================================
// GET SINGLE USER
// GET /api/users/:id
// ====================================================

app.get("/api/users/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const result = await pool.query(
      `
      SELECT *
      FROM users
      WHERE id = $1
      `,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Single User Retrieved Successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ====================================================
// UPDATE USER
// PUT /api/users/:id
// ====================================================

app.put("/api/users/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const {
    name,
    password,
    age,
    is_active,
  } = req.body;

  try {
    const result = await pool.query(
      `
      UPDATE users
      SET
      
      name = $1,
      password = $2,
      age = $3,
      is_active = $4,
      updated_at = NOW()

      WHERE id = $5

      RETURNING *
      `,
      [
        name,
        password,
        age,
        is_active,
        id,
      ]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User Updated Successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ====================================================
// DELETE USER
// DELETE /api/users/:id
// ====================================================

app.delete("/api/users/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const result = await pool.query(
      `
      DELETE FROM users
      WHERE id = $1
      RETURNING *
      `,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User Deleted Successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// =============================
// Server Start
// =============================

app.listen(port, () => {
  console.log(
    `Server Running At http://localhost:${port}`
  );
});