let table;
let totalCases;
function preload(){
  table = loadTable("../../CSV/covid_variants(total).csv","csv","header");
}
function setup() {
  createCanvas(2200 , 2800);
  background(220);
  totalCases = [];

  push();
  // textStyle(BOLD);
  textSize(20);
  text("Cases For Each Variant",2200/2,25);
  pop();

  push();
  let variants = "Variants";
  textStyle(BOLD);
  textSize(20);
  text(variants,25,50);
  pop();

  gatherData();

  const maxValue = max(totalCases);
  buildGraph(maxValue);
  
  push();
  textStyle(BOLD);
  textSize(20);
  text("Cases",2200/2,2550);
  pop();
}

function gatherData(){
  for(let r = 0; r < table.getRowCount(); r++){
    totalCases[r] = table.getNum(r,"Cases");
  }
}

function buildGraph(maxValue){
  for(let j = 0;j<maxValue;j = j + 200000){
    line(200 + j/2000,50,200+ j/2000,2450);
    textStyle(BOLD);
    text(j, 200 + j/2000,2500);
  }

  for(let r = 0; r < table.getRowCount(); r++) {
    const name = table.getString(r, "Variant");
    textStyle(BOLD);
    text(name, 100, 100+r*100);
    push();
    let c = color(135,206,235);
    fill(c);
    let barLength = 50 + (100*r);
    rect(200,barLength,totalCases[r]/2000, 100);
    pop();

    push();
    textSize(16);
    text(totalCases[r],215+totalCases[r]/2000,100 + r*100);
    pop();
  }
}

function labelGraph(label){
  textStyle(BOLD);
  textSize(20);
  text("Cases",2200/2,2550);
}


// function draw() {
  
//   for(let r = 0; r < table.getRowCount(); r++){

//   }
// }
