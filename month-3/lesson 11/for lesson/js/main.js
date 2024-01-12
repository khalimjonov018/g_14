const carChoses = {
  chevrolet: {
    auto: 70,
    mach: 45,
  },
  byd: {
    auto: 170,
    mach: 145,
  },

  ferrari: {
    auto: 170,
    mach: 140,
  },
  bmw: {
    auto: 45,
    mach: 23,
  },
  mercedes: {
    auto: 50,
    mach: 30,
  },
  kia: {
    auto: 250,
    mach: 145,
  },
};
const PriceEL = document.querySelector("#Price");
function carPrice() {
  let price = 0;
  const brand = document.getElementById("CarSelect");
  const transporTypELs = document.getElementsByName("transport");

  const transpotr = transporTypELs[0].checked 
  ? transporTypELs[0].value 
  : transporTypELs[1].value;

  const hasTanirovka = document.getElementById("Tonirovka").checked ? 10 : 0;
  const hasRegisr = document.getElementById("registr").checked ? 5 : 0;

  const rentDays = +document.getElementById("days").value * carChoses[brand.value][transpotr];

  price += rentDays + hasTanirovka + hasRegisr;
  PriceEL.innerHTML = price;
}
