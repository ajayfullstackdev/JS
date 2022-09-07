const btn = document.getElementById("btn");
const input = document.getElementById("inputId");
const candidateName = document.getElementById("candidateName");
const statusAdhar = document.getElementById("status");
const result = document.getElementById("result");
const certificateDiv = document.getElementById("certificateDiv");

btn.addEventListener("click", () => {
  function apicall(url, cb) {
    $.ajax({
      url: url,

      method: "GET",

      success: (result) => {
        cb(null, result);
      },
      error: (error) => {
        cb(error, null);
      },
    });
  }

  apicall("http://139.59.8.250:8080/getAdharAndNames", (err, res) => {
    console.log(res);

    let adharId;
    candidateName.innerText = input.value;
    for (let i = 0; i < res.data.length; i++) {
      if (res.data[i].name === input.value) {
        adharId = res.data[i].adhar;
      }
    }

    apicall(
      "http://139.59.8.250:8080/checkVaccinationStatus?adharId=" + adharId,
      (err, res) => {
        let statusVal = res.isVaccinated;

        if (statusVal) {
          statusAdhar.innerText = "Yes";
        } else {
          statusAdhar.innerText = "No";
        }

        apicall(
          "http://139.59.8.250:8080/getCertificate?adharId=" + adharId,
          (err, res) => {
            if (res.message === "Success") {
              result.innerText = res.certificate;
            } else {
              result.innerText = res.message;
            }
          }
        );
      }
    );
  });

  certificateDiv.style.display = "block";
});
