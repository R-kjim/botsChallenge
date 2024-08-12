import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotsContext from "./StateContext";

function BotsPage() {
  const [botArmy,handleBotArmy]=useState([]) //state to handle bot enlisted into army
  const [selectedBot,handleSelectedBot]=useState({})//state to handle a clicked bot
  const [showSpecs,handleShowSpecs]=useState(false) //state to handle content displaying at bot collection once a bot is clicked
  const [selectCategory,setSelectCategory]=useState('')//state to cater for changes in category(ies) selected for filter 
// const [filteredBots,handleFIlteredBots]=useState([])
  const [bots,handleBots]=useState([]) //state that takes in fetched data

  const value={botArmy,handleBotArmy,selectedBot,handleSelectedBot,showSpecs,handleShowSpecs,bots,handleBots}
  //start here with your code for step one
useEffect(()=>{
  fetch("https://database-orcin.vercel.app/bots")
  .then(res=>res.json())
  .then(data=>handleBots(data))
},[])

function deleteBot(bot){
  let botIndex1=bots.indexOf(bot)
  let botIndex2=botArmy.indexOf(bot)
  fetch(`https://database-orcin.vercel.app/bots/${bot.id}`,{
    method:"DELETE",
    headers:{
      'content-type':'application/json'
    }
  })
  .then(res=>{
    if(res.ok===true){
      bots.splice(botIndex1,1)
      let newBots=bots
      handleBots([...newBots])//updates the bots array state

      botArmy.splice(botIndex2,1)
      handleBotArmy([...botArmy])
    }
  })

}

//filter botArmy to only pass unique bots 
function removeDuplicates(arr) {
  return arr.filter((item,
      index) => arr.indexOf(item) === index);
}

//function to cater for the filter functionality by category
function handleSelect(event){
  if(event.target.value!=="All"){
  setSelectCategory(event.target.value)
  }
  else if(event.target.value==="All" || event.target===''){
    setSelectCategory("All")
  }
}
//map through the array of selected categories to return matching bots
const categoryFilter=bots.filter((bot)=>{
  if(selectCategory===bot.bot_class)
    return(
      bot
    )
  else if(selectCategory==='' || selectCategory==='All') return true
 
})

  return (
    <BotsContext.Provider value={value}>
      <YourBotArmy botsArmy={removeDuplicates(botArmy)}/>
      <BotCollection bots={categoryFilter} deleteBot={deleteBot} handleSelect={handleSelect}/>
    </BotsContext.Provider>
  )
}

export default BotsPage;
