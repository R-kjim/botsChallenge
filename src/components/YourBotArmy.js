import React, { useRef } from "react";
import BotCard from "./BotCard";

function YourBotArmy({botsArmy}) {
  //your bot army code here...
  let armyContainer=useRef(null)
  const botArmyMap=botsArmy.map((bot)=>{
    return (
      <BotCard bot={bot} key={bot.id}/>
    )
  })
  return (
    <div className="ui segment inverted olive bot-army" ref={armyContainer}>
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          {botArmyMap}
          
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
