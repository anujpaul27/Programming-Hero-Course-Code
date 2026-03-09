function UpdateAllCount() {
  // Count All section card
  let AllCardCount = document.querySelectorAll(".allCard .card").length;
  document.querySelector(".nav-total-card").textContent = AllCardCount;
  document.querySelector(".nav-total-card1").textContent = AllCardCount;
}
UpdateAllCount();

function allCountReturn  ()
{
  return document.querySelectorAll(".allCard .card").length;
}

function UpdateInterviewCount() {
  // Update card count
  let InterviewCardCount = document.querySelectorAll(
    ".interviewMainCard .card",
  ).length;
  document.querySelector(".nav-interview-card").textContent =
    InterviewCardCount;
}

function RejectedCardCount() {
  // Update card count
  let RejectedCardCount = document.querySelectorAll(
    ".rejectedMainCard .card",
  ).length;
  document.querySelector(".nav-rejected-card").textContent = RejectedCardCount;
}

function AddingSelectedBtn(card) {
  const SelectedBtn = card.querySelector(".SelectedByInterview");
  SelectedBtn.classList.remove("hidden");
}

// avaiable count update
function slideInterviewCount (InterviewCardCount)
{
  const totalCount = allCountReturn()
  const count = document.querySelector('.count')
  count.textContent = `${InterviewCardCount} of ${totalCount}`
}

function AddingRejectedBtn(card) {
  const SelectedBtn = card.querySelector(".SelectedByRejected");
  SelectedBtn.classList.remove("hidden");
}

// card show hidden section
let allShow = document.querySelector("#allShow");
let interviewShow = document.querySelector("#interviewShow");
let rejectedShow = document.querySelector("#rejectedShow");

// Main card section
let allMainCard = document.querySelector(".allMainCard");
let interviewMainCard = document.querySelector(".interviewMainCard");
let rejectedMainCard = document.querySelector(".rejectedMainCard");

allShow.addEventListener("click", (e) => {
  // Route Change
  allMainCard.classList.remove("hidden");
  interviewMainCard.classList.add("hidden");
  rejectedMainCard.classList.add("hidden");
});

interviewShow.addEventListener("click", (e) => {
  // Route Change
  interviewMainCard.classList.remove("hidden");
  allMainCard.classList.add("hidden");
  rejectedMainCard.classList.add("hidden");

  // Update card count
  let InterviewCardCount = document.querySelectorAll(
    ".interviewMainCard .card",
  ).length;
  document.querySelector(".nav-interview-card").textContent =
    InterviewCardCount;

  slideInterviewCount(InterviewCardCount)

  if (InterviewCardCount > 0) {
    document.querySelector(".NotFoundPageInterview").classList.add("hidden");
  } else {
    document.querySelector(".NotFoundPageInterview").classList.remove("hidden");
  }
});

rejectedShow.addEventListener("click", (e) => {
  // Route Change
  rejectedMainCard.classList.remove("hidden");
  allMainCard.classList.add("hidden");
  interviewMainCard.classList.add("hidden");

  // Update card count
  let InterviewCardCount = document.querySelectorAll(
    ".rejectedMainCard .card",
  ).length;
  document.querySelector(".nav-rejected-card").textContent = InterviewCardCount;

  slideInterviewCount(InterviewCardCount)

  if (InterviewCardCount > 0) {
    document.querySelector(".NotFoundPageRejected").classList.add("hidden");
  } else {
    document.querySelector(".NotFoundPageRejected").classList.remove("hidden");
  }
});


// All Card Delete
allMainCard.addEventListener("click", (e) => {
  if (e.target.classList.contains("DeleteBtn")) {
    const card = e.target.closest(".card");
    if (card) {
      card.remove();
      UpdateAllCount();
    }
  }
});

// interview delete button
interviewMainCard.addEventListener("click", (e) => {
  if (e.target.classList.contains("DeleteBtn")) {
    const card = e.target.closest(".card");
    if (card) {
      card.remove();
      UpdateInterviewCount();
    }
  }
});

// rejected delete button
rejectedMainCard.addEventListener("click", (e) => {
  if (e.target.classList.contains("DeleteBtn")) {
    const card = e.target.closest(".card");
    if (card) {
      card.remove();
      RejectedCardCount();
    }
  }
});

// Event Click to Interview and Rejected
// sent allCard to interview
document.querySelector(".allCard").addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (e.target.textContent === "Interview") {
    AddingSelectedBtn(card);
    card.classList.add("border-1");
    interviewMainCard.appendChild(card.cloneNode(true));

    UpdateInterviewCount();
    RejectedCardCount();
  } else if (e.target.textContent == "Rejected") {
    AddingRejectedBtn(card);
    card.classList.add("border-1");
    rejectedMainCard.appendChild(card.cloneNode(true));
    UpdateInterviewCount();
    RejectedCardCount();
  }
});

// send interview to rejected
document.querySelector(".interviewCard").addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (e.target.textContent === "Interview") {
    interviewMainCard.appendChild(card);
    UpdateInterviewCount();
    RejectedCardCount();
  } else if (e.target.textContent == "Rejected") {
    const SelectedBtn = card.querySelector(".SelectedByInterview");
    SelectedBtn.classList.add("hidden");
    AddingRejectedBtn(card)

    rejectedMainCard.appendChild(card);
    UpdateInterviewCount();
    RejectedCardCount();
  }
});

// send rejected to interview
document.querySelector(".rejectedCard").addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (e.target.textContent === "Interview") {
    const SelectedBtn = card.querySelector(".SelectedByRejected");
    SelectedBtn.classList.add("hidden");
    AddingSelectedBtn(card)
    
    interviewMainCard.appendChild(card);
    UpdateInterviewCount();
    RejectedCardCount();
  } else if (e.target.textContent == "Rejected") {
    rejectedMainCard.appendChild(card);
    UpdateInterviewCount();
    RejectedCardCount();
  }
});
