
import * as userrepo from "./user.repository.js"


export const getUserByEmail = async (email) => {
    return userrepo.findUserByEmail(email);
}

export const getUserById = async (id) => {
    return userrepo.findUserById(id);

}

export const createUser = async ({ email, passwordHash }) => {
    return userrepo.createUser({ email, passwordHash })

}