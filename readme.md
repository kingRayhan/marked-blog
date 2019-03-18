## markedBlog

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
| `/tag/:tagName` | A array of filtered post of specific tag name        |

**Exaple Response**

```json
[
  {
    "meta": {
      "title": "post title",
      "description": "Post description",
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
