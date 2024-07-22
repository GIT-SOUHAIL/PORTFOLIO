import { defineField, defineType } from "sanity";

export default defineType({
    name:'projects',
    type:"document",
    title:'Projects',
    fields : [
        defineField({
            name:'project',
            type:'string',
            title:'project',
        }),
        defineField({
            name:'link',
            type:'url',
            title:'link',
        }),
        defineField({
            name:'images',
            type:'image',
            title:'images',
        })
    ]
})