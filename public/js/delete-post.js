async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/blogposts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("delete failed");
  }
}

document
  .querySelector(".delete-article-form")
  .addEventListener("submit", deleteFormHandler);
