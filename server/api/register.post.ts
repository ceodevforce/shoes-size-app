import { createUser } from '../db/users'
import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const { email, password } = body
    const client = serverSupabaseClient(event)

    const { data, error } = await client.auth.signUp({
        email: email,
        password: password
    })

    if (error) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "Something is wrong"
        }))
    }
    /**
     * Prisma Functionality
     */
    // const {email, firstname, lastname, zip, gender, address, mobile, password} = body
    //www
    // if (!firstname || !lastname || !address || !password) {
    //     return sendError(event, createError({
    //         statusCode: 404,
    //         statusMessage: "Missing information"
    //     }))
    // }
    //
    // const userData = {
    //     email,
    //     firstname,
    //     lastname,
    //     zip,
    //     address,
    //     mobile,
    //     password
    // }
    // const user = await createUser(userData)

    return {
        user: data
    }
})