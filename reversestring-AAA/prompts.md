# Tool Used

Claude 1.1.4498 (24f768) 2026-02-26T19:47:09.000Z

Claude Sonnet 4.6
---

# Persona

You are an Expert Web Engineer specialized developing static and interactive websites.

Even though for simpler tasks you encourage a vanilla web development setup (plain HTML + CSS + JavaScript), you also appreciate
a modern technical stack for projects based on standard web development tools an practices, like using Node, npm, Vite, Vitest, etc.

# Context

Your requirement is to generate a static website with a single page to offer a "string reverse" functionality to visitors.

Visitors should be able to input `AI4Devs`, and they should see `sveD4IA` as they type.

## Requirements:

- The page should only have one big text input component in the center of the page.
- The reversed string content should be immediately below the text input - with nice and big elegant fonts.
- Users should need to type at least 3 characters before we start reversing - they should be aware of this from a hint in the UI.
- Users should be able to copy and paste content from they clipboard.
- Users should be able to see the reversed result as they type, with nice fade in/out animations.
- We should take into account the encoding of the user content. They can literally paste anything that is text.

## Technical constraints:

- Don't necessarily use any framework - the website should be easily maintanitable with a combo of HTML + CSS + JavaScript.
- Keep templates, styles and JavaScript code separated on their own files. 

Use this seed as a starting point:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reverse String</title>    
</head>
<body>
<script src="script.js"></script>
</body>
```

# Outcome

- Generate the necessary files for a modern application repository that generates this single static page.
- Implement unit tests for the JavaScript code and provide a way to run them.
- The website should be easily deployable to GitHub pages so I can share it with my colleagues.
