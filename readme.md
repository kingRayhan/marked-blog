## marked-blog

![](https://img.shields.io/github/license/kingrayhan/marked-blog.svg)
![](https://img.shields.io/github/issues-raw/kingrayhan/marked-blog.svg?style=plastic)
![](https://img.shields.io/github/downloads/kingrayhan/marked-blog/total.svg)
![](https://img.shields.io/github/last-commit/kingrayhan/marked-blog.svg)

A Blog rest api provider based of markdown files

## Install dependencies

```bash
yarn
```

Or by npm

```bash
npm install
```

## posts

In `posts` directory you will put your post markdown files with this naming system

```
YYYY-MM-DD-post-title-by-slug
```

## Endpoints

| url             | resource                                             |
| --------------- | ---------------------------------------------------- |
| `/`             | A array of posts with meta and compiled post content |
| `/:slug`        | A object of single post                              |
| `/tag/:tagName` | A array of filtered post of specific tag name        |

**Example Response**

```
[
  {
    "meta": {
      "title": "post title",
      "description": "Post description",
      "slug": "this-is-post-slug",
      "tags": [
        "tag1",
        "tag2",
        "tag3",
        ................
        ................

      ],
      "date": {
        "date": "2019-03-17",
        "year": "2019",
        "month": "03",
        "day": "17"
      }
    },
    "body": ".. compiled html ..."
  },
  ............
  ............
]
```
