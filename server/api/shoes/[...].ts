import { serverSupabaseClient } from "#supabase/server"

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient() 
    const body = await readBody() 

    const { tag } = body


    const { data: filteredShoes, error } = await client.from('Shoes').select('tag') 
    


    return { 
        filteredShoes 
    }
})