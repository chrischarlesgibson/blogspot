async function addBlogpostHandler(event) {
  event.preventDefault();
  const title = document.querySelector(".details-card-title").value;
  const article = document.querySelector(".card-article").value;

  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/blogposts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      article,
      post_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector("#blogpost-form")
  .addEventListener("submit", addBlogpostHandler);
