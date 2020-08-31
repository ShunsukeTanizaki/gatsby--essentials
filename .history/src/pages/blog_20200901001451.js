import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
      <section className="content bloglist">
        <div className="container">
          <h1 className="bar">RECENT POSTS</h1>
          <div className="posts">
            <article className="post">
              <a href="base-blogpost.html">
                <figure>
                  <img src="images-baseblog/eyecatch.jpg" alt="アイキャッチ画像の説明" />
                </figure>
                <h3>記事のタイトル</h3>
              </a>
            </article>
            <article className="post">
              <a href="base-blogpost.html">
                <figure>
                  <img src="images-baseblog/eyecatch.jpg" alt="アイキャッチ画像の説明" />
                </figure>
                <h3>記事のタイトル</h3>
              </a>
            </article>
            <article className="post">
              <a href="base-blogpost.html">
                <figure>
                  <img src="images-baseblog/eyecatch.jpg" alt="アイキャッチ画像の説明" />
                </figure>
                <h3>記事のタイトル</h3>
              </a>
            </article>
            <article className="post">
              <a href="base-blogpost.html">
                <figure>
                  <img src="images-baseblog/eyecatch.jpg" alt="アイキャッチ画像の説明" />
                </figure>
                <h3>記事のタイトル</h3>
              </a>
            </article>
            <article className="post">
              <a href="base-blogpost.html">
                <figure>
                  <img src="images-baseblog/eyecatch.jpg" alt="アイキャッチ画像の説明" />
                </figure>
                <h3>記事のタイトル</h3>
              </a>
            </article>
            <article className="post">
              <a href="base-blogpost.html">
                <figure>
                  <img src="images-baseblog/eyecatch.jpg" alt="アイキャッチ画像の説明" />
                </figure>
                <h3>記事のタイトル</h3>
              </a>
            </article>
          </div>
        </div>
      </section>
  </Layout>
)

export const query = graphql`
  query {
    allContentfulBlogPost(sort: {fields: publishDate, order: DESC}) {
      edges {
        node {
          title
        }
      }
    }
  }
`