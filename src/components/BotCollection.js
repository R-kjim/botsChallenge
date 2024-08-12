import React, { useRef, useState } from "react";
import BotCard from './BotCard'
import BotSpecs from "./BotSpecs";
import BotsContext from "./StateContext";
function BotCollection({bots,deleteBot,handleSelect}) {
  // Your code here
  let outerDiv=useRef(null)

  //set state to handle changes in the return value of this component


  const value=React.useContext(BotsContext)//using context-- value returns state saved in 
  let showSpecs=value.showSpecs
  let bot=value.selectedBot

  const mapBots=bots.map((bot)=>{
    return (
      < div key={bot.id}>
      <BotCard bot={bot}  outerDiv={outerDiv} deleteBot={deleteBot} />
      </div>
    )
  })

  
  return (
    <div className="ui four column grid" ref={outerDiv}>
      <h4>Filter Bots by Category:
        <select onChange={handleSelect}>
          <option>All</option>
          <option style={{backgroundColor:'blue'}}>Support</option>
          <option>Medic</option>
          <option>Assault</option>
          <option>Defender</option>
          <option>Captain</option>
          <option>Witch</option>
        </select>
      </h4>
      <div className="row">
        {/*...and here..*/}
        {showSpecs?<BotSpecs bot={bot} outerDiv={outerDiv}/>:mapBots}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
