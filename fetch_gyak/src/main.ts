import { allProducts, product } from './productInt';
import './style.css';
document.addEventListener("DOMContentLoaded", load);

async function load() {
  let result = await fetch ("products.json");
  console.log("File status: " + result.status);
  console.log("Successfully loaded file: " + result.ok);
  if (!result.ok){
    throw new Error ("Hiba történt a fájl betöltése közben!");
  }
  let content = await result.json() as allProducts;
  console.log(content.products[0].title);
}

function outputData(inputArray: allProducts){
  //inputArray.products[0].brand
  let output = document.getElementById("outputDiv")!;
}

function allData(){}
function sortABC(){}
function sortDesc(){}
function searchInDescription(){}
function offer(){}



document.getElementById("allData")!.addEventListener("click", allData);
document.getElementById("sortABC")!.addEventListener("click", sortABC);
document.getElementById("sortDesc")!.addEventListener("click", sortDesc);
document.getElementById("searchInDescription")!.addEventListener("click", searchInDescription);
document.getElementById("offer")!.addEventListener("click", offer);