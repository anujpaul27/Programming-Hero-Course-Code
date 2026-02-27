// Page change Button
let all = document.querySelector("#all");
let interview = document.querySelector("#interview");
let rejected = document.querySelector("#rejected");

// Pages
let allPage = document.querySelector("#allPage");
let interviewPage = document.querySelector("#interviewPage");
let rejectedPage = document.querySelector("#rejectedPage");

// Counter Selected
let CountPage = document.querySelector("#allcount");
let CountPage2 = document.querySelector("#allcount2");
let CountPage3 = document.querySelector("#allcount3");
let allcount1 = document.querySelector("#allcount1");

// Rejected Pages
let nofound1 = document.querySelector("#nofound1");
let nofound2 = document.querySelector("#nofound2");

// Count Available Page
const count = document.querySelectorAll("#allPage > div").length;
CountPage.textContent = count;
allcount1.textContent = count;

// Pages change tab
all.addEventListener("click", (e) => {
  // Show and hide page
  allPage.classList.remove("hidden");
  interviewPage.classList.add("hidden");
  rejectedPage.classList.add("hidden");
});

interview.addEventListener("click", (e) => {
  // Count Available Page
  const count = document.querySelectorAll("#interviewPage > div").length;
  CountPage.textContent = `${count} of 8 `;
  CountPage2.textContent = count;

  if (count <= 0) {
    nofound2.classList.remove("hidden");
  } else {
    nofound2.classList.add("hidden");
  }

  // Show and Hide page
  allPage.classList.add("hidden");
  rejectedPage.classList.add("hidden");
  interviewPage.classList.remove("hidden");
});

rejected.addEventListener("click", (e) => {
  // Count Available Page
  const count = document.querySelectorAll("#rejectedPage > div").length;
  CountPage.textContent = `${count} of 8 `;
  CountPage3.textContent = count;

  if (count <= 0) {
    nofound1.classList.remove("hidden");
  } else {
    nofound1.classList.add("hidden");
  }

  // Show and Hide page
  allPage.classList.add("hidden");
  interviewPage.classList.add("hidden");
  rejectedPage.classList.remove("hidden");
});

// Pages Change
allPage.addEventListener("click", (e) => {
  // Left Highlight Line
  let original = e.target.closest(".card");
  original.classList.add("border-l-6");

  if (e.target.textContent === "Interview") {
    interviewPage.appendChild(original.cloneNode(true));
    e.target.classList.remove("btn-outline");
  } else if (e.target.textContent === "Rejected") {
    rejectedPage.appendChild(original.cloneNode(true));
    e.target.classList.remove("btn-outline");
  } else if (e.target.textContent === "remove") {
    e.target.closest(".card").remove();
    // Count Available Page
    const count = document.querySelectorAll("#allPage > div").length;
    CountPage.textContent = count;
    allcount1.textContent = count;
  }
});

interviewPage.addEventListener("click", (e) => {
  if (e.target.textContent == "Interview") {
    interviewPage.appendChild(e.target.closest(".card"));
  } else if (e.target.textContent == "Rejected") {
    rejectedPage.appendChild(e.target.closest(".card"));
  } else if (e.target.textContent === "remove") {
    e.target.closest(".card").remove();
  }
});

rejectedPage.addEventListener("click", (e) => {
  if (e.target.textContent == "Interview") {
    interviewPage.appendChild(e.target.closest(".card"));
  } else if (e.target.textContent == "Rejected") {
    rejectedPage.appendChild(e.target.closest(".card"));
  } else if (e.target.textContent === "remove") {
    e.target.closest(".card").remove();
  }
});
