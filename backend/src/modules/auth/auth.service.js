import { hashPassword, comparePassword } from "../../utils/password.js";
import { signToken } from "../../utils/jwt.js";
import * as userService from "../users/user.service.js";

export const registerUser = async ({ email, password }) => {
    const existingUser = await userService.getUserByEmail(email);
    if (existingUser) {
        throw new Error("User already exists");
    }

    const passwordHash = await hashPassword(password);
    console.log(passwordHash);
    console.log(password)

    const user = await userService.createUser({
        email,
        passwordHash,
    });

    return {
        id: user.id,
        email: user.email,
    };
};

export const loginUser = async ({ email, password }) => {
    const user = await userService.getUserByEmail(email);

    if (!user) {
        throw new Error("Invalid credentials");
    }

    const isMatch = await comparePassword(password, user.password_hash);

    if (!isMatch) {
        throw new Error("Invalid credentials");
    }

    const token = signToken({
        userId: user.id,
        email: user.email,
        global_role: user.global_role,
    });

    return {
        token,
        user: {
            id: user.id,
            email: user.email,
            global_role: user.global_role,
        },
    };
};
