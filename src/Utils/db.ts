import sql from "mssql";

// Cấu hình kết nối MSSQL
const config = {
  user: "sa",
  password: "ThienKhoi@123",
  server: "206.189.85.148", // Ví dụ: 'localhost' hoặc '127.0.0.1'
  database: "BDSThienKhoi",
  options: {
    encrypt: true, // Dùng với Azure
    trustServerCertificate: true, // Nếu chạy trên localhost
  },
};

// Kết nối MSSQL
let pool: sql.ConnectionPool;

export const getConnection = async () => {
  try {
    if (!pool) {
      pool = await sql.connect(config);
    }
    return pool;
  } catch (error) {
    console.error("Database Connection Failed: ", error);
    throw error;
  }
};
