import React, { FormEvent, useState } from 'react'

type CreateFormProps = {
    communities?: string[]
}

const CreateCommunity = (props: CreateFormProps) => {
    const [newCommunity, setNewCommunity] = useState(props.communities)

    const handleSubmitForm = (e: FormEvent) => {
        e.preventDefault()
        console.log(e)

        setNewCommunity(props.communities)
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <div>
                <input
                    placeholder="Type your new community name."
                    type="text"
                    name="title"
                    aria-label="Type your new community name"
                />
            </div>
            <div>
                <input
                    placeholder="Paste an URL to use as community image."
                    name="image"
                    aria-label="Paste an URL to use as community image."
                />
            </div>

            <button>Create Community</button>
        </form>
    )
}

export default CreateCommunity
