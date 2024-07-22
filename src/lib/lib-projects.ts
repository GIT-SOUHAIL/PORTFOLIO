import { interprojects } from "@/types/interfaces"
import { client } from "@lib/client"


export const LibProjects = async () => {
    const query = `*[_type == "projects"] {
        _id ,
        images ,
        link ,
        project 
      }`
    const data = await client.fetch(query)
    return data as interprojects[]
}