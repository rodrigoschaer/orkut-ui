import React, { useState, useEffect, SyntheticEvent } from 'react'
import MainGrid from '../MainGrid'
import Box from '../Box'
import ProfileSideBar from '../ProfileSideBar'
import { ProfileRelationsBoxWrapper } from '../ProfileRelations'
import { OrkutMenu, OrkutNostalgicIconSet } from '../../lib/OrkutCommons'

type UserData = {
    avatar_url: string
    events_url: string
    followers_url: string
    following_url: string
    gists_url: string
    gravatar_id: string
    html_url: string
    id: number
    login: string
    node_id: string
    organizations_url: string
    received_events_url: string
    repos_url: string
    site_admin: boolean
    starred_url: string
    subscriptions_url: string
    type: string
    url: string
}

type FollowingProps = {
    title: string
    items: Array<UserData>
}

const FollowingBox = (props: FollowingProps) => {
    return (
        <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
                {props.title} ({props.items.length}):
            </h2>
            <ul>
                {props.items.map(currentItem => {
                    return (
                        <li key={currentItem.id}>
                            <a href={`/users/${currentItem}`}>
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
    )
}

const Home = () => {
    const profilePicture = 'rodrigoschaer'

    const inspirations = ['angelabauer', 'whysofast', 'diego3g']

    const [following, setFollowing] = useState([])

    React.useEffect(function () {
        fetch('https://api.github.com/users/rodrigoschaer/following')
            .then(function (serverAnswer) {
                return serverAnswer.json()
            })
            .then(function (completeAnswer) {
                setFollowing(completeAnswer)
            })
    }, [])

    const [newCommunity, setNewCommunity] = useState([
        {
            id: '13123123123123125',
            title: 'I Hate to get up early',
            image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
        }
    ])

    const handleCreateCommunity = (event: SyntheticEvent) => {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)

        var isRandom =
            formData.get('image').toString() == ''
                ? `http://picsum.photos/200/300?${Math.floor(
                      Math.random() * 100
                  )}`
                : formData.get('image').toString()

        const community = {
            id: new Date().toISOString(),
            title: formData.get('title').toString(),
            image: isRandom
        }

        const updatedCommunities = [community, ...newCommunity]
        setNewCommunity(updatedCommunities)
    }

    console.log('seguidores antes do return', following)

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
                        <form onSubmit={handleCreateCommunity}>
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
                                    placeholder="Cummunity image. Leave blank to get Random Images"
                                    name="image"
                                    aria-label="Cummunity image. Leave blank to get Random Images"
                                />
                            </div>

                            <button>Create Community</button>
                        </form>
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
                                    <li key={currentItem}>
                                        <a href={`/users/${currentItem}`}>
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
                    <ProfileRelationsBoxWrapper>
                        <h2 className="smallTitle">
                            Your Communities ({newCommunity.length}):
                        </h2>
                        <ul>
                            {newCommunity.slice(0, 6).map(currentItem => {
                                return (
                                    <li key={currentItem.id}>
                                        <a href={`/users/${currentItem.title}`}>
                                            <img src={currentItem.image} />
                                            <span>{currentItem.title}</span>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </ProfileRelationsBoxWrapper>

                    <FollowingBox title="Following" items={following} />
                </div>
            </MainGrid>
        </>
    )
}

export default Home
