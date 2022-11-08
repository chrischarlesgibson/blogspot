async function addBlogpostHandler(event) {
  event.preventDefault();
  console.log("blogpost handler clicked");
  const title = document.querySelector("#titleText").value;
  const article = document.querySelector("#articleText").value;

  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/blogposts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      article,
      post_id,
      user_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector("#createPostBtn")
  .addEventListener("click", addBlogpostHandler);
