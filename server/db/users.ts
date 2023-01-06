import { prisma} from ".";
import type { User } from "~/types/types";

export function exclude<User, Key extends keyof User> (user: User, keys: Key[]) {
    for (let key of keys) {
        delete  user[key]
    }
    return user
}

export const createUser = (userData: User) => {
    return prisma.user.create({
        data: userData
    })
}