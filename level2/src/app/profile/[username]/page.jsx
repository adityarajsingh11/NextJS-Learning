import React from 'react'

async function page({ params }) {

    const resolvedParams = await params   // ✅ pehle promise resolve karo
    const username = resolvedParams.username

    return (
        <div>
            Dynamic Username Profile Page {username}
        </div>
    )
}

export default page