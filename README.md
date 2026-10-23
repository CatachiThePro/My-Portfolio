# Editing Portfolio

Frontend starter for an editing portfolio, built with React, JavaScript, Vite, and Tailwind CSS.

## Requirements

- Node.js 20.19 or newer
- npm

## Start locally

```sh
npm install
npm run dev
```

Vite prints a local URL after the dev server starts. Use `npm run build` to create a production build and `npm run preview` to view that build locally.

## First edits

- Replace the category labels in `src/App.jsx` with your work and titles.
- Update the page title and description in `index.html`.

Tailwind CSS is available through the Vite plugin and imported in `src/styles.css`. React components use JSX in `src/`.

## Add a video

Each category has a graphic thumbnail in `public/images/`. To add an MP4:

1. Copy the video file into `public/videos/`, for example `public/videos/my-edit.mp4`.
2. Open `src/App.jsx` and add an item to the `videos` array near the top:

```js
{ id: 'my-edit', title: 'My Edit', videoSrc: '/videos/my-edit.mp4', categories: ['Real Estate', 'Short Form'] },
```

3. Put the video in every category where it should appear by adding category names to `categories`. Use the exact names: `Real Estate`, `Talking Head`, `Short Form`, and `Long Form`.
4. Save the file, then refresh the site. The video will use each category's thumbnail.

## Use a YouTube video

For a video hosted outside the project, upload it to YouTube as Unlisted and use its video ID in the `videos` array instead of `videoSrc`:

```js
{ id: 'my-edit', title: 'My Edit', youtubeId: 'Zc34oq41Dn4', categories: ['Long Form'] },
```

The video ID is the part after `youtu.be/` in a short link, or after `v=` in a standard YouTube link. The same video can be assigned to several categories in its `categories` array.

