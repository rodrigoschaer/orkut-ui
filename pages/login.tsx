import React from 'react'
// Hook do NextJS
import { useRouter } from 'next/router'
import nookies from 'nookies'

export default function LoginScreen() {
    const router = useRouter()
    const user = 'rodrigoschaer'
    const [githubUser, setGithubUser] = React.useState(user)

    return (
        <main
            style={{
                display: 'flex',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <div className="loginScreen">
                <section className="logoArea">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Logo_ORKUT.svg" />

                    <p>
                        <strong>Connect</strong> with your friends and family
                        using scraps and messages.
                    </p>
                    <p>
                        <strong>Meet</strong> new people by your friend's
                        friends and communities
                    </p>
                    <p>
                        <strong>Share</strong> your photos and videos in only
                        one place.
                    </p>
                </section>

                <section className="formArea">
                    <form
                        className="box"
                        onSubmit={eventInfo => {
                            eventInfo.preventDefault()
                            // alert('Alguém clicou no botão!')
                            console.log('User: ', githubUser)
                            fetch('https://alurakut.vercel.app/api/login', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ githubUser: githubUser })
                            }).then(async serverResponse => {
                                const responseData = await serverResponse.json()
                                const token = responseData.token
                                nookies.set(null, 'USER_TOKEN', token, {
                                    path: '/',
                                    maxAge: 86400 * 7
                                })
                                router.push('/')
                            })
                        }}
                    >
                        <p>
                            Sign in now with <strong>GitHub</strong>!
                        </p>
                        <input
                            placeholder="User"
                            value={githubUser}
                            onChange={event => {
                                setGithubUser(event.target.value)
                            }}
                        />
                        {githubUser.length === 0 ? 'Fill with your Info' : ''}
                        <button type="submit">Login</button>
                    </form>

                    <footer className="box">
                        <p>
                            Still not a member? <br />
                            <a href="/login">
                                <strong>SignUp!</strong>
                            </a>
                        </p>
                    </footer>
                </section>

                <footer className="footerArea">
                    <p>
                        © 2021 - <a href="/">Sobre o Orkut.br</a> -{' '}
                        <a href="/">Centro de segurança</a> -{' '}
                        <a href="/">Privacidade</a> - <a href="/">Termos</a> -{' '}
                        <a href="/">Contato</a>
                    </p>
                </footer>
            </div>
        </main>
    )
}
