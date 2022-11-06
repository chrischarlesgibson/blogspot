async function addCommentHandler(event) {
  event.preventDefault();
  const commentText = document.querySelector("#titleText").value;

  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/comments`, {
    method: "POST",
    body: JSON.stringify({
      text,
      post_id,
      user_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-article-form")
  .addEventListener("submit", addCommentHandler);
