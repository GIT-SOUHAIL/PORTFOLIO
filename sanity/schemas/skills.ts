import {defineType , defineField} from 'sanity'

export default defineType({
    name : 'skills',
    type: 'document',
    title: 'Skills',
    fields : [
        defineField({
            name:'icon',
            type:'image',
            title:'icon',
        }),
        defineField({
            name:'languge',
            type:'string',
            title:'languge',
        }),
        defineField({
            name:'description',
            type:'text',
            title:'description'
        })
    ]
})