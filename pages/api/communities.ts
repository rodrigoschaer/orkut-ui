import { SiteClient } from 'datocms-client'

export default async function requestsReceivers(req, res) {
    const TOKEN = '4b508fa80fd1ce592132f5e0647aed'
    const client = new SiteClient(TOKEN)

    // response.json({
    //     data: 'SomeData'
    // })
    if (req.method === 'POST') {
        const recordCreated = await client.items.create({
            itemType: '972271',
            title: 'Test Community',
            image: 'https://github.com/rodrigoschaer.png',
            creatorSlug: 'rodrigoschaer'
        })

        res.json({
            data: 'someramdomdata',
            recordCreated: recordCreated
        })
        return
    }

    res.status(404).json({
        message: '404 Not Found'
    })
}
