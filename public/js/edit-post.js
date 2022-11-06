async function editFormHandler(event) {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const article = document.querySelector("#article").value;

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/blogposts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      article,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace(`/api/article/${id}`);
  } else {
    alert("edit failed");
  }
}

document
  .querySelector(".edit-article-form")
  .addEventListener("submit", editFormHandler);
