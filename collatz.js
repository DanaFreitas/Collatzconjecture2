/*THE PROBLEM IS THAT THE DATA BEING CALCULATED WAS AS TEMPORARY AS THE CLICK ITSELF. MAKING THE GRAPH NEEDS TO BE THE ONCLICK, 
NOT THE CALCULATING OF THE DATA.*/



//const calculate = document.getElementById("submit");

//calculate.addEventListener("click", () => {

/*
const data = {
  'React': 185134,
  'Vue': 195514,
  'Angular': 80460,
  'Svelte': 57022,
  'Ember.js': 22165,
  'Backbone.js': 27862
};


const ctx = document.getElementById('myChart').getContext('2d');

      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: Object.keys(data),
          datasets: [
            {
              label: 'Number of GitHub Stars',
              data: Object.values(data),
            },
          ],
        },
      });


    })
*/



const ctx = document.getElementById('myChart').getContext('2d');

const calculate = document.getElementById("submit");

calculate.addEventListener("click", () => {

    //Y axis
      let Yvalue = [];
    //X axis
      let Xvalue = [0];
    
      let input = document.getElementById("input").value;
      let parseinput = parseInt(input);
      let initial = 0;
    //Math to do the conjecture. 
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
   //let thechart =  new Chart(ctx, {
          //line graph
        type: "line",
    
        data: {
          labels: Xvalue,
          //line graph data
          datasets: [
            {
              fill: false,
              lineTension: 0,
              backgroundColor: "#FFFFFF",
              borderColor: "#FFFFFF",
              data: Yvalue,
            },
          ],
        },
        options: {
            //legend won't show up
          legend: { display:true},
            //title data
          title: {
            display: true,
            text: "The progression of the Collatz Conjecture",
            fontSize: 16,
            fontColor: "white",
          },
          scales: {
              //y axis data
            y: //[
              //{
                //ticks:
                //{min:1, max:2,} //
                { min: 1, max: Math.max(...Yvalue) }
                
              //},
            //],
          },
        },
      });
    //information shown to user
    let display = document.getElementById("info");
      display.textContent =  "The final number is " + parseinput + " and it took " + initial + " iterations.";

})
//})


