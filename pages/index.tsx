import React from 'react'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'
import { OrkutMenu, OrkutNostalgicIconSet } from '../src/lib/OrkutCommons'

type ProfileSideBarProps = {
    githubUser: string
}

function ProfileSideBar(props: ProfileSideBarProps) {
    console.log(props)
    return (
        <Box>
            <img
                src={`https://github.com/${props.githubUser}.png`}
                style={{ borderRadius: '8px' }}
            />
        </Box>
    )
}

const Home = () => {
    const profilePicture = 'rodrigoschaer'

    const inspirations = ['angelabauer', 'whysofast', 'diego3g']

    return (
        <>
            <OrkutMenu />
            <MainGrid>
                <div
                    className="profileArea"
                    style={{ gridArea: 'profileArea' }}
                >
                    <ProfileSideBar githubUser={profilePicture} />
                </div>
                <div
                    className="welcomeArea"
                    style={{ gridArea: 'welcomeArea' }}
                >
                    <Box>
                        <h1 className="title">Welcome</h1>
                        <OrkutNostalgicIconSet />
                    </Box>
                </div>
                <div
                    className="profileRelationsArea"
                    style={{ gridArea: 'profileRelationsArea' }}
                >
                    <ProfileRelationsBoxWrapper>
                        <h2 className="smallTitle">
                            Your Friends ({inspirations.length}):
                        </h2>
                        <ul>
                            {inspirations.map(currentItem => {
                                return (
                                    <li>
                                        <a
                                            href={`/users/${currentItem}`}
                                            key={currentItem}
                                        >
                                            <img
                                                src={`https://github.com/${currentItem}.png`}
                                            />
                                            <span>{currentItem}</span>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </ProfileRelationsBoxWrapper>

                    <Box>Communities</Box>
                </div>
            </MainGrid>
        </>
    )
}

export default Home
