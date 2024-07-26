// import pg from 'pg';

// const { Pool } = pg;

// const pool = new Pool({
//   connectionString: process.env.POSTGRES_URL,
// })

// export default pool;

import mongoose from "mongoose";


const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
         console.log("connected");
    } catch (error) {
        console.log("Connection Failed:" , error);
        throw new Error("Connection Failed")
    }
}


export default connect 