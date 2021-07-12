import React from 'react'
import Document, {
    DocumentInitialProps,
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props =>
                        sheet.collectStyles(<App {...props} />)
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            }
        } finally {
            sheet.seal()
        }
    }

    render(): JSX.Element {
        return (
            <Html lang="pt">
                <Head>
                    <meta charSet="utf-8" />

                    <link
                        href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
                        rel="stylesheet"
                    />

                    <link
                        href="data:image/png;base64,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"
                        rel="icon"
                        type="image/x-icon"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
