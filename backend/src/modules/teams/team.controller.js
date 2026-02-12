import * as teamService from "./team.service.js";

export const createTeam = async (req, res) => {
    try {
        const { name } = req.body;

        const team = await teamService.createNewTeam({
            name,
            userId: req.user.userId,
        });

        res.status(201).json(team);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};