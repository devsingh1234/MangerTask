import pool from "../../config/db.js";

export const createTeam = async ({ name, createdBy }) => {
    const [result] = await pool.execute(
        `INSERT INTO teams (name, created_by)
     VALUES (?, ?)`,
        [name, createdBy]
    );
    return {
        id: result.insertId,
        name,
        created_by: createdBy,
    };
};


export const findSystemRoleByName = async (roleName) => {
    const [rows] = await pool.execute(
        `SELECT * FROM roles 
     WHERE name = ? AND team_id IS NULL 
     LIMIT 1`,
        [roleName]
    );

    return rows[0] || null;
};

export const addTeamMember = async ({ userId, teamId, roleId }) => {
    await pool.execute(
        `INSERT INTO team_members (user_id, team_id, role_id)
     VALUES (?, ?, ?)`,
        [userId, teamId, roleId]
    );
};