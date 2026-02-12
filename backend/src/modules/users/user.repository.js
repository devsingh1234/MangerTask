import pool from "../../config/db.js";


export const createUser = async ({ email, passwordHash }) => {
    console.log(email, passwordHash);
    const [result] = await pool.execute(`INSERT INTO users (email,password_hash) VALUES (?,?)`, [email, passwordHash]);
    return {
        id: result.insertId,
        email,
    };
};

export const findUserByEmail = async (email) => {
    const [rows] = await pool.execute(`select * from users where email = ? limit 1`, [email])

    return rows[0] || null;
};

export const findUserById = async (id) => {
    const [rows] = await pool.execute(`Select * from users where userid = ? limit 1`, [id])
    return rows[0] || null;
}