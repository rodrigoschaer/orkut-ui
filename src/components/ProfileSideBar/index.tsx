import React from 'react'
import { OrkutProfileSidebarMenuDefault } from '../../lib/OrkutCommons'
import Box from '../Box'

type ProfileSideBarProps = {
    githubUser: string
}

const ProfileSideBar = (props: ProfileSideBarProps) => {
    return (
        <Box as="aside">
            <img
                src={`https://github.com/${props.githubUser}.png`}
                style={{ borderRadius: '8px' }}
            />
            <p>
                <a
                    href={`https://github.com/${props.githubUser}`}
                    className="boxLink"
                >
                    @{props.githubUser}
                </a>
            </p>

            <hr />

            <OrkutProfileSidebarMenuDefault />
        </Box>
    )
}

export default ProfileSideBar
