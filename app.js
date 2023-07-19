// Mobile phone data object
const mobileData = {
    apple: [
        {
            name: "IPhone11",
            ram: "4gb",
            rom: "64gb",
            camera: "12px",
            price: "100,000 PKR"
        },
        {
            name: "IPhone12",
            ram: "4gb",
            rom: "64gb",
            camera: "12px",
            price: "150,000 PKR"
        },
        {
            name: "IPhone13",
            ram: "6gb",
            rom: "128gb",
            camera: "24px",
            price: "200,000 PKR"
        }
    ],
    samsung: [
        {
            name: "Samsung A10",
            ram: "4gb",
            rom: "64gb",
            camera: "13px",
            price: "22,000 PKR"
        },
        {
            name: "Samsung A20",
            ram: "4gb",
            rom: "64gb",
            camera: "18px",
            price: "28,000 PKR"
        },
        {
            name: "Samsung A30",
            ram: "4gb",
            rom: "64gb",
            camera: "25px",
            price: "29,000 PKR"
        }
    ],
    oppo: [
        {
            name: "OppoV20",
            ram: "8gb",
            rom: "128gb",
            camera: "64px",
            price: "54,999 PKR"
        },
        {
            name: "OppoF19",
            ram: "6gb",
            rom: "128gb",
            camera: "48px",
            price: "36,999 PKR"
        },
        {
            name: "OppoF11",
            ram: "4gb",
            rom: "64gb",
            camera: "48px",
            price: "35,999 PKR"
        }
    ],
    vivo: [
        {
            name: "VivoY20",
            ram: "4gb",
            rom: "64gb",
            camera: "13px",
            price: "26,999 PKR"
        },
        {
            name: "VivoY21",
            ram: "4gb",
            rom: "64gb",
            camera: "13px",
            price: "43,999 PKR"
        },
        {
            name: "VivoY55",
            ram: "8gb",
            rom: "128gb",
            camera: "50px",
            price: "64,999 PKR"
        }
    ],
    // Add more companies and their mobiles and prices here
  };
  
  // Function to display selected company's mobiles and prices
  function showMobilesAndPrices() {
    const selectedCompany = document.getElementById("mobileCompany").value;
    const mobilesAndPricesDiv = document.getElementById("mobilesAndPrices");
  
    if (selectedCompany === "") {
      mobilesAndPricesDiv.innerHTML = "";
    } else {
      const mobiles = mobileData[selectedCompany];
      let content = "<h3>Mobiles and Prices:</h3>";
      content += "<ul>";
      mobiles.forEach((mobile) => {
        content += `<li>${mobile.name} - PRICE : ${mobile.price} , ROM: ${mobile.rom} , RAM : ${mobile.ram} , CAMERA : ${mobile.camera}</li>`;
      });
      content += "</ul>";
      mobilesAndPricesDiv.innerHTML = content;
    }
  }
  