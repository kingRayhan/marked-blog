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
