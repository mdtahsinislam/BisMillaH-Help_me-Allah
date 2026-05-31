



// //create all user

// import express, {
//   type Application,
//   type Request,
//   type Response,
// } from "express";
// import console from "node:console";

// import { Pool } from "pg";

// const app: Application = express();
// const port = 5000;

// // Middleware
// app.use(express.json());
// app.use(express.text());

// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );

// // Database Connection
// const pool = new Pool({
//   connectionString:
//     "postgresql://neondb_owner:npg_etNX6RwsB0qC@ep-summer-shape-aqyquxgm.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require",
// });

// // Initialize Database
// const initDB = async () => {
//   try {
//     await pool.query(`
//       CREATE TABLE IF NOT EXISTS users (
//         id SERIAL PRIMARY KEY,
//         name VARCHAR(20),

//         email VARCHAR(50) UNIQUE NOT NULL,
//         password VARCHAR(50) NOT NULL,

//         is_active BOOLEAN DEFAULT true,
//         age INT,

//         created_at TIMESTAMP DEFAULT NOW(),
//         updated_at TIMESTAMP DEFAULT NOW()
//       )
//     `);

//     console.log("Database connected successfully");
//   } catch (error) {
//     console.log(error);
//   }
// };

// // Call Function
// initDB();

// // GET API
// app.get("/", (req: Request, res: Response) => {
//   res.status(200).json({
//     message: "Express Server",
//     author: "Next Level",
//   });
// });

// // POST API
// app.post("/api/users", async (req: Request, res: Response) => {
//   const { name, email, password, age } = req.body;

//   try {
//     const result = await pool.query(
//       `
//       INSERT INTO users(name, email, password, age)
//       VALUES($1, $2, $3, $4)
//       RETURNING *
//       `,
//       [name, email, password, age]
//     );

//     res.status(201).json({
//         success:true,
//       message: "User Created Successfully",
//       data: result.rows[0],
//     });
//   } catch (error: any) {
//     res.status(500).json({
//         success:false,
//       message: error.message,
//       error: error,
//     });
//   }
// });


// app.get('/api/users',async(req:Request,res:Response)=>{
// try{
// const result =await pool .query(`
//     SELECT * FROM users`);
//     res.status(200).json({
//         success:true,
//         message:"Users retrived successfully!",
//         data:result.rows,
//     })
// }catch(error:any){

// res.status(500).json({
//    success:false,
//         message:error.message,
//         error:error,  
// })


// }
// })





// http://localhost:5000/api/users/1 correcct this
// app.get("/api/users/:id",async(req:Request,res:Response)=>{
//   const {id}=req.params;
//   try{
//     const result = await pool.query(
//       `SELECT * FROM users WHERE id=$1`,
//       [id],
//     );
//      res.status(200).json({
//         success:true,
//         message:"Users retrived successfully!",
//         data:result.rows[0],
//     })
//     //console.log(result);
//   }catch(error:any){

//     res.status(500).json({
//    success:false,
//         message:error.message,
//         error:error,  
// })
//   }
// });

// http://localhost:5000/api/users/1 I want to found single user give me the query 
// // app.get("/api/users/:id", async (req: Request, res: Response) => {
// //   const { id } = req.params;

// //   try {
// //     const result = await pool.query(
// //       `SELECT * FROM users WHERE id = $1`,
// //       [id]
// //     );

// //     // User না পেলে
// //     if (result.rows.length === 0) {
// //       return res.status(404).json({
// //         success: false,
// //         message: "User not found",
// //       });
// //     }

// //     res.status(200).json({
// //       success: true,
// //       message: "User retrieved successfully",
// //       data: result.rows[0],
// //     });
// //   } catch (error: any) {
// //     res.status(500).json({
// //       success: false,
// //       message: error.message,
// //       error: error,
// //     });
// //   }
// // });

// //update method
// app.put('/api/users/:id', async(req:Request, res:Response)=>{
//   const {id}=req.params;
//   const{name,password,age,is_active}=req.body;
//   //console.log("ID:",id);
//   //console.log({name,password,age,is_active});
//   const result=await pool.query(`
//     UPDATE user SET  name=$1,password=$2,age=$3,is_active=$4
//     WHERE id =$5 RETURNING *
    
//     `,[name,password,age,is_active,id]);
//     //console.log(result);
//     res.status(200).json({
//       res.status(200).json({
//         success:true,
//         message:"User update Successfully",
//         data:result.row[0],
//       })
//     })
// })



// // Server Run
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });




import express, { type Application, type Request, type Response } from "express";
import { Pool } from "pg";

const app: Application = express();
const port = 5000;

// Middleware
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_etNX6RwsB0qC@ep-summer-shape-aqyquxgm.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require",
});

// DB init
const initDB = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(20),
        email VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(50) NOT NULL,
        is_active BOOLEAN DEFAULT true,
        age INT,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `);

    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
};

initDB();

// Root route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Server running" });
});

// CREATE USER
app.post("/api/users", async (req: Request, res: Response) => {
  const { name, email, password, age } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO users(name,email,password,age)
       VALUES($1,$2,$3,$4)
       RETURNING *`,
      [name, email, password, age]
    );

    res.status(201).json({
      success: true,
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET ALL USERS
app.get("/api/users", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`SELECT * FROM users`);

    res.json({
      success: true,
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// GET SINGLE USER
app.get("/api/users/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const result = await pool.query(
      `SELECT * FROM users WHERE id = $1`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE USER (FIXED)
app.put("/api/users/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { name, password, age, is_active } = req.body;

  try {
    const result = await pool.query(
      `UPDATE users
       SET name=$1, password=$2, age=$3, is_active=$4
       WHERE id=$5
       RETURNING *`,
      [name, password, age, is_active, id]
    );

    res.json({
      success: true,
      message: "User updated successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});


// 
// SERVER START
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});





