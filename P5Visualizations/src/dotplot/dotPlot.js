let table;
let totalCases;
function preload(){
  table = loadTable("../../CSV/covid_variants(total).csv","csv","header");
}
function setup() {
  createCanvas(2200 , 2600);
  background(220);
  totalCases = [];
  push();
  let variants = "Variants";
  translate(variants)
  textStyle(BOLD);
  textSize(20);
  text(variants,25,2600/2);
  pop();

  for(let r = 0; r < table.getRowCount(); r++) {
    const name = table.getString(r, "Variant");
    const cases = table.getNum(r,"Cases");
    
    totalCases[r] = cases;
    text(name, 100 , 50+r*100);
    line(110, 50+r*100,2200,2500);
    // rect(200,100*r,totalCases[r]/2000, 100);
    circle(totalCases[r]/2000,100*r,totalCases[r]/2000,50);
    
  }

  const maxValue = max(totalCases);
  for(let j = 0;j<maxValue;j = j + 200000){
    text(j, 200 + j/2000,2500);
  }
  push();
  textStyle(BOLD);
  textSize(20);
  text("Cases",2200/2,2550);
  pop();
}


// function draw() {
  
//   for(let r = 0; r < table.getRowCount(); r++){

//   }
// }
