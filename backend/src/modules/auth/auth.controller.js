import * as authService from "./auth.service.js";

export const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await authService.registerUser({ email, password });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await authService.loginUser({ email, password });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}