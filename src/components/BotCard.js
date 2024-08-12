import BotsContext from "./StateContext";
import React, { useState } from "react";
const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot,outerDiv }) {
  const value=React.useContext(BotsContext)//using context-- value returns state saved in 
  //use data contained in context
  let bots=value.bots
  let handleBots=value.handleBots
  let oldValue=value.botArmy
  let handleOldValue=value.handleBotArmy
  let selectBot=value.selectedBot
  let handleSelectBot=value.handleSelectedBot
  let handleShowSpecs=value.handleShowSpecs

  const [clickable,handleClickable]=useState(false)
  //
   function myBotFn(){
    if(outerDiv){
    handleSelectBot(bot)
    handleShowSpecs(true)//changes the contents of Bot Collection component
   
    }else{
    // handleDiv()
    // window.location.href=`/bots/${bot.id}`
    // if(outerDiv){handleOldValue([...oldValue,bot])}
    // else {
      let botIndex=(oldValue.indexOf(bot))
    //   console.log(botIndex)
       oldValue.splice(botIndex,1)
    //   let newValue=oldValue
       handleOldValue([...oldValue])
    //   deleteMe=deleteBot(bot)

    }}

    //function to delete an item from the database and also from the bot list and bot army
    function deleteBotFn(){
      console.log('data')
      fetch(`https://database-orcin.vercel.app/bots/${bot.id}`,{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json"
        }
      })
      .then(res=>{
        if(res.ok===true){
          let deletedIndex=bots.indexOf(bot)
          let armyIndex=oldValue.indexOf(bot)
          bots.splice(deletedIndex,1)
          handleBots([...bots])
          if(armyIndex>=0){
            oldValue.splice(armyIndex,1)
            handleOldValue([...oldValue])
          }
        }
      })
    }
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
      >
        <div className="image" onClick={clickable?null:myBotFn}
        >
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={deleteBotFn}
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
