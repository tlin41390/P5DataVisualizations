let table;
function preload(){
  table = loadTable("https://gist.githubusercontent.com/tlin41390/2aca7bfbb746070cc2ced30aa9798a88/raw/61a26fefa365a01cad7b83aadff45772c37a32f5/covid-variants(date).csv","csv","header");
}
function setup() {
  createCanvas(2400 , 900);
  background(220);
  const variants = new Set();
  const quarters = new Set();

  for(let i = 0;i<table.getRowCount(); i++){
    const name=table.getString(i,"Variant");
    const quarter = table.getString(i,"Quarter of Date");
    variants.add(name);
    quarters.add(quarter);
  }

  for(let a = 0; a<variants.size; a++){ 
    text(Array.from(variants)[a],100+ a *100,850);
  }

  for(let b = 0;b<quarters.size; b++){ 
    text(Array.from(quarters)[b],0,100+ b*100);
  }

  for(let row = 0; row<quarters.size; row++){
    for(let col = 0; col < variants.size; col++){
      rect(50,50 ,50,50);
    }
  }

  console.log(variants);
  console.log(quarters);
  console.log(Array.from(variants)[0])
}

