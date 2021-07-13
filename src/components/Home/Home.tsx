import React from 'react'
import MainGrid from '../MainGrid'
import Box from '../Box'
import ProfileSideBar from '../ProfileSideBar'
import { ProfileRelationsBoxWrapper } from '../ProfileRelations'
import { OrkutMenu, OrkutNostalgicIconSet } from '../../lib/OrkutCommons'
import CreateCommunity from '../CreateCommunity'

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

                    <Box>
                        <h2 className="subTitle">What do you want do do?</h2>
                        <CreateCommunity />
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
