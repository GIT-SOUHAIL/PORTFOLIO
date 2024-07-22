import { client } from "@/sanity/lib/client"
import { interskills } from "@/types/interfaces"

export const LibSkills = async () => {

    const query = `*[_type == "skills"]{
      _id ,
      icon ,
      languge,
      description
    }`

    const data = await client.fetch(query)

    return data as interskills[]
}