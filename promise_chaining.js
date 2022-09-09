const btn = document.getElementById("btn");
const input = document.getElementById("inputId");
const candidateName = document.getElementById("candidateName");
const statusAdhar = document.getElementById("status");
const resultEle = document.getElementById("result");
const certificateDiv = document.getElementById("certificateDiv");

btn.addEventListener("click", () => {
  fetch("http://139.59.8.250:8080/getAdharAndNames")
    .then((res) => res.json())
    .then((result) => {
      let adharId;
      candidateName.innerText = input.value;
      for (let i = 0; i < result.data.length; i++) {
        if (result.data[i].name === input.value) {
          adharId = result.data[i].adhar;
        }
      }

      return adharId;
    })
    .then((adharId) => {
      fetch(
        "http://139.59.8.250:8080/checkVaccinationStatus?adharId=" + adharId
      )
        .then((res) => res.json())
        .then((resultOne) => {
          if (resultOne.message === "Failed,Adhar Id Required") {
            statusAdhar.innerText = resultOne.message;
          } else {
            if (resultOne.isVaccinated) {
              statusAdhar.innerText = "Yes";
            } else {
              statusAdhar.innerText = "No";
            }
          }
        });

      return adharId;
    })
    .then((adharId) => {
      fetch("http://139.59.8.250:8080/getCertificate?adharId=" + adharId)
        .then((res) => res.json())
        .then((resultTwo) => {
          if (resultTwo.message === "Failed,Adhar Id Required") {
            resultEle.innerText = resultTwo.message;
          } else if (resultTwo.message === "Success") {
            resultEle.innerText = resultTwo.certificate;
          } else {
            resultEle.innerText = resultTwo.message;
          }
        });
    });

  certificateDiv.style.display = "block";
});
