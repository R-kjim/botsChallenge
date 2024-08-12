import React from "react";
import BotsContext from "./StateContext";


const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotSpecs(bot) {
  let value=React.useContext(BotsContext)
  let goBack=value.handleShowSpecs
  let oldValue=value.botArmy
  let handleOldValue=value.handleBotArmy
  let handleSelectBot=value.handleSelectedBot
  let handleShowSpecs=value.handleShowSpecs

console.log(bot.bot)
  function addArmyFn(){
    // handleSelectBot(bot)
    // window.location.href=`/bots/${bot.id}`
    // if(oldValue.indexOf(bot)>=0){
      goBack(false)
      handleOldValue([...oldValue,bot.bot])
      
    // }
    // else {
    //   goBack(false)
    // }
   

    // if(outerDiv){
    //   console.log('yes')
    //   handleOldValue([...oldValue,bot])
    // }
    // else {
    //   console.log('not')
    //   // let botIndex=(oldValue.indexOf(bot))
    //   // oldValue.splice(botIndex,1)
    //   // let newValue=oldValue
    //   // handleOldValue([...newValue])

    
  }
  console.log(oldValue.indexOf(bot))

  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={bot.bot.avatar_url}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {bot.bot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {bot.bot.catchphrase}
            </p>
            <strong>
              Class: {bot.bot_class}
              <i className={botTypeClasses[bot.bot_class]} />
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{bot.bot.health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{bot.bot.damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{bot.bot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="ui button fluid"
              onClick={()=>{goBack(false)}}
            >
              Go Back
            </button>
            <button
              className="ui button fluid"
              onClick={addArmyFn}
            >
              Enlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotSpecs;
