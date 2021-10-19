import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <div className="max-w-screen-sm mx-auto font-sans">
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <header className="text-purple-900 text-5xl font-extrabold my-12">{data.site.siteMetadata.title}</header>
            <nav>
                <ul className="flex list-none">
                    <li className="pr-8">
                        <Link to="/" className="underline">Home</Link>
                    </li>
                    <li className="pr-8">
                        <Link to="/about" className="underline">About</Link>
                    </li>
                    <li className="pr-8">
                        <Link to="/blog" className="underline">Blog</Link>
                    </li>
                    <li className="pr-8">
                        <Link to="/wip" className="underline">WIP Posts</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className="text-3xl font-extrabold text-purple-900 my-5">{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout
