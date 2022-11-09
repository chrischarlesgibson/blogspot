async function addCommentHandler(event) {
  event.preventDefault();
  const text = document.querySelector("#titleText").value;
  // const user_id = document.querySelector("#userid").innerHTML;

  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/comments`, {
    method: "POST",
    body: JSON.stringify({
      text,
      post_id,
      // user_id,
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
  .querySelector("#commentBtn")
  .addEventListener("click", addCommentHandler);
