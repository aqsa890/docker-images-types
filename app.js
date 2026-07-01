const express = require("express");
const os = require("os");

const app = express();

const IMAGE_TYPE = process.env.IMAGE_TYPE || "Local Development";

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Docker Image Types Demo</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,Helvetica,sans-serif;
}

body{

height:100vh;

display:flex;

justify-content:center;

align-items:center;

background:linear-gradient(135deg,#0f172a,#1e3a8a,#312e81);

color:white;

overflow:hidden;

}

.card{

width:850px;

max-width:90%;

padding:40px;

border-radius:25px;

background:rgba(255,255,255,.08);

backdrop-filter:blur(18px);

box-shadow:0 20px 60px rgba(0,0,0,.45);

text-align:center;

}

h1{

font-size:42px;

margin-bottom:10px;

}

.subtitle{

opacity:.8;

margin-bottom:35px;

font-size:18px;

}

.badge{

display:inline-block;

padding:12px 35px;

border-radius:40px;

background:#00C853;

font-size:24px;

font-weight:bold;

margin-bottom:35px;

}

.grid{

display:grid;

grid-template-columns:repeat(2,1fr);

gap:20px;

}

.box{

background:rgba(255,255,255,.08);

padding:25px;

border-radius:18px;

transition:.3s;

}

.box:hover{

transform:translateY(-8px);

background:rgba(255,255,255,.15);

}

.label{

font-size:14px;

opacity:.7;

}

.value{

font-size:24px;

font-weight:bold;

margin-top:10px;

word-break:break-word;

}

.footer{

margin-top:35px;

opacity:.7;

font-size:14px;

}

</style>

</head>

<body>

<div class="card">

<h1>🐳 Docker Images Demo</h1>

<div class="subtitle">
Compare Single, Multi-stage, Slim and Distroless Docker Images
</div>

<div class="badge">${IMAGE_TYPE}</div>

<div class="grid">

<div class="box">
<div class="label">Node Version</div>
<div class="value">${process.version}</div>
</div>

<div class="box">
<div class="label">Platform</div>
<div class="value">${process.platform}</div>
</div>

<div class="box">
<div class="label">Hostname</div>
<div class="value">${os.hostname()}</div>
</div>

<div class="box">
<div class="label">Operating System</div>
<div class="value">${os.type()}</div>
</div>

<div class="box">
<div class="label">Architecture</div>
<div class="value">${process.arch}</div>
</div>

<div class="box">
<div class="label">Docker Image</div>
<div class="value">${IMAGE_TYPE}</div>
</div>

</div>

<div class="footer">
🚀 Refresh the page after running a different Docker image to see which image is serving the application.
</div>

</div>

</body>
</html>
`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});