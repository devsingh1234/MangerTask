import * as teamRepo from "./team.repository.js";


export const createNewTeam = async ({ name, userId }) => {
    // 1️⃣ Create team
    const team = await teamRepo.createTeam({
        name,
        createdBy: userId,
    });

    // 2️⃣ Find TEAM_ADMIN role
    const role = await teamRepo.findSystemRoleByName("TEAM_ADMIN");

    if (!role) {
        throw new Error("TEAM_ADMIN role not found");
    }

    // 3️⃣ Add creator as TEAM_ADMIN
    await teamRepo.addTeamMember({
        userId,
        teamId: team.id,
        roleId: role.id,
    });

    return team;
};