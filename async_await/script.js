const btn = document.getElementById("btn");
const input = document.getElementById("inputId");
const candidateName = document.getElementById("candidateName");
const statusAdhar = document.getElementById("status");
const resultEle = document.getElementById("result");
const certificateDiv = document.getElementById("certificateDiv");
const loader = document.getElementById("loader");

btn.addEventListener("click", () => {
  certificateDiv.style.display = "none";

  const apiCall = async () => {
    try {
      const res = await fetch("http://139.59.8.250:8080/getAdharAndNames");
      const result = await res.json();

      let adharId;
      candidateName.innerText = input.value;
      for (let i = 0; i < result.data.length; i++) {
        if (result.data[i].name === input.value) {
          adharId = result.data[i].adhar;
        }
      }

      const resOne = await fetch(
        "http://139.59.8.250:8080/checkVaccinationStatus?adharId=" + adharId
      );
      const resultOne = await resOne.json();

      if (resultOne.message === "Failed,Adhar Id Required") {
        statusAdhar.innerText = resultOne.message;
      } else {
        if (resultOne.isVaccinated) {
          statusAdhar.innerText = "Yes";
        } else {
          statusAdhar.innerText = "No";
        }
      }

      const resTwo = await fetch(
        "http://139.59.8.250:8080/getCertificate?adharId=" + adharId
      );
      const resultTwo = await resTwo.json();

      if (resultTwo.message === "Failed,Adhar Id Required") {
        resultEle.innerText = resultTwo.message;
      } else if (resultTwo.message === "Success") {
        resultEle.innerText = resultTwo.certificate;
      } else {
        resultEle.innerText = resultTwo.message;
      }
    } catch (err) {
      console.log(err);
    }
  };

  apiCall();
  loader.style.display = "block";

  setTimeout(() => {
    loader.style.display = "none";

    certificateDiv.style.display = "block";
  }, 4000);
});
