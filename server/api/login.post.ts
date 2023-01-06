import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event) => {
    // Perform login
    const body = await readBody(event)
    const { email, password } = body

    const client = serverSupabaseClient(event)
    const cookies =  await setCookie(event, 'shoesUser', "Cookies are great")


    const { data, error } = await client.auth.signInWithPassword({
        email: email,
        password: password
    })

    if (error) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: "Invalid credentials"
        }))
    }

    return {
        user: data
    }
})