



const ctx = document.getElementById('myChart').getContext('2d');

const calculate = document.getElementById("submit");

const reset = document.getElementById("reset");

calculate.addEventListener("click", () => {

      let Yvalue = [];

      let Xvalue = [0];
    
      let input = document.getElementById("input").value;
      let parseinput = parseInt(input);
      let initial = 0;
     
      while (parseinput != 1) {
        if (parseinput % 2 == 0) {
          parseinput = parseinput / 2;
          initial += 1;
        }        
         else {
          parseinput = 3 * parseinput + 1;
         initial += 1;
        }
        Yvalue.push(parseinput);
        Xvalue.push(initial);

       
      }
    

      
     new Chart(ctx, {
           type: "line",
    
        data: {
          labels: Xvalue,
   
          datasets: [
            {    
              label: "Value of the initial number as it is modified",
              fill: false,
              lineTension: 0,
              backgroundColor: "#FFFFFF",
              borderColor: "#FFFFFF",
              data: Yvalue,
            },
          ],
        },
        options: {
   
        legend: {display:true},
            title: {
            display: true,
            fontSize: 16,
            fontColor: "white",
          },
          scales: {
            y: 
              
              
              
                { min: 1, max: Math.max(...Yvalue) }
                
              
            
          },
        },
      });
    let display = document.getElementById("info");
      display.textContent =  "The final number is " + parseinput + " and it took " + initial + " iterations.";


      window.scrollTo({top:document.body.scrollHeight, left:0, behavior: "smooth"})
      

})


reset.addEventListener("click", () => {
  location.reload();
})