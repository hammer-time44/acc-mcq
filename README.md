# MCQ

A static MCQ practice and quiz site. No build step, no dependencies.

## Run

Open `index.html` in a browser, or serve the folder:

    npx serve .

## Deploy

Push to Vercel (or any static host). `vercel.json` is included.

## Structure

    index.html      page shell
    css/styles.css  styles, themes, glass and motion
    js/data.js      question bank (topics, options, answer index)
    js/app.js       app logic: practice, quiz, search, mistakes
    favicon.svg     tab icon

## Features

- 709 questions across CAT-1, CAT-2 and FAT, grouped by topic
- Practice mode (instant feedback) and Quiz mode (score at the end)
- Search, Mistakes tab and per-topic progress
- Light (white) and dark (black) themes, saved in the browser
- Keyboard shortcuts: press `?` in the app

## Add questions

Edit `js/data.js`. Each topic is:

    { n: "Topic name", g: 1, q: [ ["Question", ["A", "B", "C", "D"], correctIndex, "optional note"] ] }

`g` is the group index (0 CAT-1, 1 CAT-2, 2 FAT). `correctIndex` is 0 to 3.

## Notes

Progress and theme use `localStorage` (keys `mcq-ans`, `mcq-tab2`, `mcq-theme`). "Reset answers" asks for a second tap to confirm.
