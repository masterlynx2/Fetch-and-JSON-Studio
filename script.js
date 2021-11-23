// TODO: add code here
window.addEventListener("load", function(){
        fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
            return response.json()
    }).then(function(json){
        console.log(json)
        let sorted 
        const result = json.sort((a, b) => (a.hoursInSpace < b.hoursInSpace) ? 1 : -1);

        //})
        let rocketman = ""
        let container = document.querySelector("#container")
        console.log(container)
        for(astro of result){
            rocketman += `
            <div class="astronaut">
   <div class="bio">
      <h3>${astro.firstName} ${astro.lastName}</h3>
      <ul>
         <li>hours in space: ${astro.hoursInSpace}</li>
         <li>Active": ${astro.active} </li>
         <li>Skills: ${astro.skills.join(", ")}</li>

      </ul>

   </div>
   <img class="avatar" src="${astro.picture}"/>
</div>`

        }
        container.innerHTML= rocketman
    
    })
})