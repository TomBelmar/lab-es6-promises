// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*getInstruction("mashedPotatoes",0,(step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  },
  (error) => console.log(error)
);*/

/*getInstruction("mashedPotatoes",1,(step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  },
  (error) => console.log(error)
);*/

/*getInstruction("mashedPotatoes",2,(step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  },
  (error) => console.log(error)
);*/

/*getInstruction("mashedPotatoes",3,(step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  },
  (error) => console.log(error)
);

getInstruction("mashedPotatoes",4,(step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  },
  (error) => console.log(error)
);*/

// Iteration 1 - using callbacks
// ...
mashedPotatoes.push ("Mashed potatoes are ready!");

getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;

      getInstruction("mashedPotatoes", 1, (step1) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

        getInstruction("mashedPotatoes", 2, (step2) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

          getInstruction("mashedPotatoes", 3, (step3) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;

            getInstruction("mashedPotatoes", 4, (step4) => {
              document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;

              getInstruction("mashedPotatoes", 5, (step5) => {
                document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
                document.querySelector("#mashedPotatoesImg").removeAttribute('hidden')

                getInstruction("mashedPotatoes", 6, (step6) => {
                  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step6}</li>`;
                  
            });
          });
        });
      });
    });
  });
});

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return 1
}).then ((step1) => {
    return obtainInstruction('steak', step1)
      .then((step) => {
        document.querySelector("#steak").innerHTML += `<li>${step}</li>`
        return 2
      })
  }).then((step2) => {
    return obtainInstruction('steak', step2)
      .then((step) => {
        document.querySelector("#steak").innerHTML += `<li>${step}</li>`
        return 3
      })
  }).then((step3) => {
    return obtainInstruction('steak', step3)
      .then((step) => {
        document.querySelector("#steak").innerHTML += `<li>${step}</li>`
        return 4
      })
  }).then((step4) => {
    return obtainInstruction('steak', step4)
      .then((step) => {
        document.querySelector("#steak").innerHTML += `<li>${step}</li>`
        return 5
      })
  }).then((step5) => {
    return obtainInstruction('steak', step5)
      .then((step) => {
        document.querySelector("#steak").innerHTML += `<li>${step}</li>`
        return 6
      })
  }).then((step6) => {
    return obtainInstruction('steak', step6)
      .then((step) => {
        document.querySelector("#steak").innerHTML += `<li>${step}</li>` 
        document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`
        document.querySelector("#steakImg").removeAttribute('hidden') 
      })
  })
// Iteration 3 using async/await
async function makeBroccoli() {
  await obtainInstruction('broccoli', 0)
    .then((step) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>` 
    })
  await obtainInstruction('broccoli', 1)
    .then((step) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>` 
    })
  await obtainInstruction (`broccoli`,2)
    .then ((step)=> {
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`
  })
  await obtainInstruction (`broccoli`,3)
    .then ((step)=> {
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`
  })
  await obtainInstruction('broccoli', 4)
    .then((step) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>` 
    })
  await obtainInstruction (`broccoli`,5)
    .then ((step)=> {
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`
  })
  await obtainInstruction (`broccoli`,6)
    .then ((step)=> {
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`
    document.querySelector("#broccoli").innerHTML += `<li> Broccoli is ready!</li>`
    document.querySelector("#broccoliImg").removeAttribute(`hidden`)
  })
  
};
makeBroccoli()
// Bonus 2 - Promise all
// ...
function getlist (steps){
  return obtainInstruction(`brusselsSprouts`, steps)
}
Promise.all ([getlist(0), getlist(1), getlist(2), getlist(3), getlist(4),getlist(5), getlist(6), ,getlist(7)])
  .then (values =>{
    for(let step of values){
      document.querySelector ("#brusselsSprouts").innerHTML +=`<li>${step}</li>`
    }
    document.querySelector ("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`
    document.querySelector (`#brusselsSproutsImg`).removeAttribute (`hidden`)
  }).catch(err => {
    console.log(err)
  });


