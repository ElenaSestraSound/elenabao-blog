import { createClient } from '@sanity/client'

export default createClient({
    projectId: 'uvhpjcd2', // you can find this in sanity.json
    dataset: 'production', // or the name you chose in step 1
    apiVersion: '2023-04-04',
    useCdn: true // `false` if you want to ensure fresh data
})