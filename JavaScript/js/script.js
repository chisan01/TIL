<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Accessing Elements in the DOM</title>

    <style>
      html {
        font-family: sans-serif;
        color: #333;
      }
      body {
        max-width: 500px;
        margin: 0 auto;
        padding: 0 15px;
      }
      div,
      article {
        padding: 10px;
        margin: 5px;
        border: 1px solid #dedede;
      }
    </style>
  </head>

  <body>
    <h1>Accessing Elements in the DOM</h1>

    <h2>ID (#demo)</h2>
    <div id="demo">Access me by ID</div>

    <h2>Class (.demo)</h2>
    <div class="demo">Access me by class (1)</div>
    <div class="demo">Access me by class (2)</div>

    <h2>Tag (article)</h2>
    <article>Access me by tag (1)</article>
    <article>Access me by tag (2)</article>

    <h2>Query Selector</h2>
    <div id="demo-query">Access me by query</div>

    <h2>Query Selector All</h2>
    <div class="demo-query-all">Access me by query all (1)</div>
    <div class="demo-query-all">Access me by query all (2)</div>
  </body>
</html>