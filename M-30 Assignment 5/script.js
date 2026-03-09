const form = document.querySelector('#handleForm')
form.addEventListener('click', e=> {

    const input = document.querySelector('#username').value
    const password = document.querySelector('#password').value

    if(input === 'admin' && password === 'admin')
    {
        const homePage = document.querySelector('#home-page')
        const mainPage = document.querySelector('#mainPage')
        mainPage.classList.remove('hidden')
        homePage.classList.add('hidden')
    }
})

// All Card Rendering
let allCardInfo;
const AllCardLoad = async () => {
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );
  const data = await res.json();
  CardDisplay(data.data);
  allCardInfo = data.data;
};
AllCardLoad();

// Display Card
const CardDisplay = (cards) => {
  const cardContainer = document.querySelector("#card-container");
  cardContainer.innerHTML = "";

  cards.forEach((card) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <div  onClick="BtnClick(${card.id})" class=" border-t-4  ${card?.status === "open" ? "  border-green-600" : "border-purple-600"} card h-80   bg-gray-700 shadow-lg  max-w-2xl mx-auto">
                <div class="card-body p-5 md:p-6">

                    <div class="flex justify-between ">
                        <img src="${
                          card.status === "open"
                            ? "assets/Open-Status.png"
                            : "assets/Closed-Status .png"
                        }" alt="">
                        <div class="badge badge-warning gap-1 px-3  text-sm font-medium">
                            ${card?.priority}
                        </div>
                    </div>
                    <h2 class=" lg:text-xl font-bold text-white mb-1">
                        ${card?.title}
                    </h2>

                    <p  class="text-sm "> ${card?.description}  </p>

                    <div class="flex flex-wrap gap-2 ">
                        ${LabelsOnTheCard(card?.labels)}
                    </div>

                    <hr class="my-1 opacity-50">
                    <div> 
                    <p >/${card?.id} ${card?.author}</p>
                    <p >${convertTime(card?.createdAt)}</p>
                    </div>  

                </div>
            </div>
        `;
    cardContainer.appendChild(div);
    setLoading(false);
  });
};

// Show card labels button
const LabelsOnTheCard = (ar) => {
  const ans = ar.map((elem) => {
    return `<div class="badge badge-primary gap-1 px-3  text-[12px] font-medium"> ${elem} </div>`;
  });
  return ans.join("");
};

// Convert time type
const convertTime = (str) => {
  const date = str.split("T")[0];
  const [year, month, day] = date.split("-");
  const CustomDate = `${day}-${month}-${year}`;
  return CustomDate;
};

// Open Card Rendering
const openBtn = () => {
  setLoading(true);
  const openCard = allCardInfo.filter((items) => {
    return items.status.includes("open");
  });
  document.querySelector("#length").textContent = openCard.length;
  CardDisplay(openCard);
  setLoading(false);
};

// Closed Card Rending
const closedBtn = () => {
  setLoading(true);
  const closedCard = allCardInfo.filter((card) => {
    return card.status.includes("closed");
  });
  document.querySelector("#length").textContent = closedCard.length;
  CardDisplay(closedCard);
  setLoading(false);
};

// All Button Rendering
const allBtn = () => {
  document.querySelector("#length").textContent = 50;
  AllCardLoad();
};

// Fetch Specific card
const BtnClick = async (id) => {
  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`,
  );
  const data = await res.json();
  const cardInfo = data.data;

  const modal = document.querySelector("#my_modal_5");
  modal.innerHTML = `
          <div class="modal-box p-5 ">
              <h3 class="text-lg font-bold mt-5 ">${cardInfo.title}</h3>
              <div class="badge badge-primary gap-1 px-3  text-[12px] font-medium"> ${cardInfo?.status}  </div>
              <span> - Opened by ${cardInfo?.assignee}- ${convertTime(cardInfo?.createdAt)} </span>
              <div class="flex flex-wrap gap-2 my-5   ">
                ${LabelsOnTheCard(cardInfo?.labels)}
              </div>
              <p  class="text-sm "> ${cardInfo?.description}  </p>

              <div class="flex justify-between my-5 px-5 py-3 text-md align-center bg-gray-800   ">
                <div> 
                  <p class='text-md' > Assigned </p> 
                  <p class='font-bold'> ${cardInfo?.assignee} </p> 
                </div>
                <div> <p class='text-md' > Priority </p> 
                  <div class="badge badge-secondary gap-1 px-3  text-sm font-medium">
                    ${cardInfo?.priority}
                  </div>
                </div>
                
              </div>
              
              <div class="modal-action">
                  <form method="dialog">
                      <!-- if there is a button in form, it will close the modal -->
                      <button class="btn">Close</button>
                  </form>
              </div>
          </div>
  `;
  modal.showModal();
};

// Loading
const setLoading = (status) => {
  const cardContainer = document.querySelector("#card-container");
  const loading = document.querySelector("#loading");
  if (status) {
    cardContainer.classList.add("hidden");
    loading.classList.remove("hidden");
  } else {
    loading.classList.add("hidden");
    cardContainer.classList.remove("hidden");
  }
};

// Active to selected button
const btnClick = document.querySelector("#btn-click");
btnClick.addEventListener("click", (e) => {
  // Remove before
  const btnSelected = document.querySelectorAll("#btn");
  for (let btn of btnSelected) {
    btn.classList.remove("btn-secondary");
    btn.classList.add("btn-outline");
  }
  e.target.classList.remove("btn-outline");
  e.target.classList.add("btn-secondary");
});

// Implement Search Feature
const newIssue = document.querySelector("#new-issue");
const inputNewIssue = document.querySelector("#input-new-issue");
newIssue.addEventListener("click", async(e) => {
  const searchValue = inputNewIssue.value.toLowerCase();

  const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`)
  const data = await res.json()

  // const filterCard = allCardInfo.filter((item) => {
  //   return item.title.toLowerCase().includes(searchValue);
  // });
  CardDisplay(data.data);
});
