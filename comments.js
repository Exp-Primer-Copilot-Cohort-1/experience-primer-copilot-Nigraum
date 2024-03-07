// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import comments
const comments = require('./comments');

// Set up a URL route
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the web server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
```

### 4. Run the server

```bash
node comments.js
```

This will start the server and you can access the comments from `http://localhost:3000/comments`.

### 5. Set up the frontend

Create a new file called `index.html` with the following code:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Comments</title>
  </head>
  <body>
    <h1>Comments</h1>
    <ul id="comments"></ul>

    <script>
      // Fetch comments from the server
      fetch('http://localhost:3000/comments')
        .then(response => response.json())
        .then(comments => {
          const commentsList = document.getElementById('comments');
          comments.forEach(comment => {
            const li = document.createElement('li');
            li.textContent = comment;
            commentsList.appendChild(li);
          });
        });
    </script>
  </body>
</html>
```

### 6. Open the frontend in a web browser

Open `index.html` in a web browser and you should see the comments displayed in a list.

## Conclusion

Now you have a basic web server that serves comments and a frontend that displays them. You can now start building your own web applications using Node.js and Express. Good luck!