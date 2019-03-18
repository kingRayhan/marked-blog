const Router = require('express').Router()
const fs = require('fs')
const path = require('path')
const md = require('marked')
const fm = require('front-matter')

Router.get('/', (req, res) => {
    const postFiles = fs.readdirSync(path.resolve(__dirname) + '/posts')

    const posts = postFiles.map(file => {
        let post = fm(
            fs
                .readFileSync(path.resolve(__dirname) + '/posts/' + file)
                .toString()
        )

        return {
            meta: {
                ...post.attributes,
                tags: post.attributes.tags.split(',').map(tag => tag.trim()),
                date: {
                    date: file.slice(0, 10),
                    year: file.slice(0, 10).split('-')[0],
                    month: file.slice(0, 10).split('-')[1],
                    day: file.slice(0, 10).split('-')[2],
                },
            },
            body: md(post.body),
        }
    })

    res.json(posts)
})

Router.get('/tag/:tag', (req, res) => {
    const tag = req.params.tag

    const postFiles = fs.readdirSync(path.resolve(__dirname) + '/posts')

    const posts = postFiles
        .map(file => {
            let post = fm(
                fs
                    .readFileSync(path.resolve(__dirname) + '/posts/' + file)
                    .toString()
            )

            return {
                meta: {
                    ...post.attributes,
                    tags: post.attributes.tags
                        .split(',')
                        .map(tag => tag.trim()),
                    date: file.slice(0, 10),
                },
                body: md(post.body),
            }
        })
        .filter(post => post.meta.tags.includes(tag))

    res.json({
        count: posts.length,
        posts,
    })
})

module.exports = Router
