import React from 'react'
import Box from '../Box'

type ProfileSideBarProps = {
    githubUser: string
}

export const ProfileSideBar = (props: ProfileSideBarProps) => {
    return (
        <Box>
            <img
                src={`https://github.com/${props.githubUser}.png`}
                style={{ borderRadius: '8px' }}
            />
        </Box>
    )
}
