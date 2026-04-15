const API_URL = "https://jsonplaceholder.typicode.com/posts";

// render function
function displayPosts(posts) {
  const ul = document.getElementById("post-list");

  ul.innerHTML = "";

  posts.forEach(post => {
    const li = document.createElement("li");

    const h1 = document.createElement("h1");
    h1.textContent = post.title;

    const p = document.createElement("p");
    p.textContent = post.body;

    li.append(h1, p);
    ul.appendChild(li);
  });
}

// async fetch
async function fetchPosts() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    displayPosts(data);

  } catch (err) {
    console.log(err);
  }
}

// IMPORTANT: call immediately (NOT only DOMContentLoaded)
fetchPosts();
