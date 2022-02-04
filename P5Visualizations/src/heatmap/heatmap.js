let table;
function preload(){
  table = loadTable("../../CSV/covid-variants(byDate).csv","csv","header");
}
function setup() {
  createCanvas(800 , 800);
  background(220);
  const casesByDates = new Map();
  for(let i =0;i<table.getRowCount(); i ++){ 
      if(!casesByDates.has(table.getString(i,"Quarter of Date"))){
          casesByDates.set(table.getString(i, "Quarter of Date"), new Map());
      }
  }

  for(let j =0; j<table.getRowCount();j++){
      if(!casesByDates.get(table.getString(j, "Quarter of Date")).has(table.getString(j, "Variant"))){
        casesByDates.get(table.getString(j, "Quarter of Date")).set(table.getString(j,"Variant"),0);
      }
  }

//   for(let k = 0; k<table.getRowCount(); k++){
//       casesByDates.get(table.getString(k, "Month of Date"))
//   }
  
  console.log(casesByDates);
}
