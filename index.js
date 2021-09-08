const chalk = require("chalk")
const minecraft = require("minecraft-userdata");
const boxen = require("boxen");
const { Color } = require("chalk");
exports.MessageArgs = GetData;
async function GetData(argument){
    if(argument){
       console.log(chalk.red("No Argument provided"))
    }
    minecraft.GetData(argument).then(e => console.log("User information" + "\n",boxen(chalk.green("Username: ") + e.username + "\n" + chalk.green("User id: ") + e.userid, {borderColor:"magenta", padding: 1, margin: 1, borderStyle: "round"})))
    minecraft.GetSkin(argument).then(e => console.log("Skin Information" + "\n", boxen(chalk.green("Download Link: ") + e,{borderColor:"magenta", padding: 1, margin: 1, borderStyle:"round"})))
    
}