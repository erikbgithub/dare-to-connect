import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({data}) => {
    return (
        <Layout title="My WIP Blog Posts">
            <p> This page will show the work in progress blog entries.</p>
            {
                data.allFile.edges.map(edge => (
                    <article key={edge.node.childrenMdx[0].id}>
                        <Link to={`/blog/${edge.node.childrenMdx[0].slug}`}>
                            <h2>{edge.node.childrenMdx[0].frontmatter.title}</h2>
                        </Link>
                        <p>Posted: {edge.node.childrenMdx[0].frontmatter.date}</p>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
query {
  allFile(
    filter: {sourceInstanceName: {eq: "wip"}}
    sort: {order: DESC, fields: modifiedTime}
  ) {
    edges {
      node {
        childrenMdx {
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
          id
          slug
        }
      }
    }
  }
}
`

export default BlogPage
