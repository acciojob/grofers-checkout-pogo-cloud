const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let priceValue=document.querySelectorAll(".price");
let sum=0;
let tables=document.querySelector("table");
let newRow=document.createElement("tr");
let newCol=document.createElement("td");
const getSum = (event) => {
//Add your code here
	event.preventDefault();
	
	for(let t of priceValue){
		sum+=parseInt(t.innerText);
		//console.log(sum);
	}
	newCol.innerText=sum;
	newRow.id = "ans";
	newRow.append(newCol);
	tables.append(newRow);
	
	

  
};

getSumBtn.addEventListener("click", getSum);

