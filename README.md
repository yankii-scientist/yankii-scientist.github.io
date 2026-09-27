# yankii_scientist

Static site for GitHub Pages. Plain HTML, CSS and a little vanilla JS. No build step. The repo root is the site root.

- `index.html` home
- `guides/index.html` free guides library
- `contact/index.html` come find me

## Add a guide

Edit **only** `guides/guides.js`. Copy the example entry from the comment into the `window.GUIDES` array and fill it in:

```js
{
  title: "Turn messy notes into a clean summary",
  description: "Paste your notes, get a tidy one-pager in under a minute.",
  topic: "Productivity",
  tool: "ChatGPT",
  keyword: "NOTES",
  link: "https://example.com/guide"
},
```

The topic and tool filters build themselves from the values you use. Keep spelling consistent so guides group together. While the array is empty, the page shows "New guides drop with every reel".

## Fill in the contact placeholders

Edit **only** `contact/contact.js`. Set `tiktok`, `youtube` (full URLs) and `email`. Empty values stay hidden. Instagram is always shown.

## Preview locally

`python3 -m http.server` in the repo root, then open http://localhost:8000.
