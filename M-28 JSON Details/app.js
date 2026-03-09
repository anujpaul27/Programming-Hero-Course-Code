const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      PostCard(data);
    });
};

const PostCard = (data) => {
  const PostContainer = document.getElementById("PostContainer");
  data.forEach((element) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card bg-primary text-primary-content w-96">
            <div class="card-body">
                <h2 class="card-title">${element.title}</h2>
                <p>${element.body}</p>
                <div class="card-actions justify-end">
                    <button class="btn">Details</button>
                </div>
            </div>
        </div>
    `;
    PostContainer.appendChild(div);
  });
};
