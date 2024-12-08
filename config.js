const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/z4k1uu.jpg" || "https://files.catbox.moe/z4k1uu.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© chuckyXcyleeTech" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "27615045572";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27615045572";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/z4k1uu.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_08_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODgsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTksXG4gICAgICAgIDkyLFxuICAgICAgICA1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjEyLFxuICAgICAgICAzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA2LFxuICAgICAgICA3OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDM0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTksXG4gICAgICAgIDcyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExLFxuICAgICAgICAzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc1LFxuICAgICAgICA2NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTczLFxuICAgICAgICA4NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDg4LFxuICAgICAgICA4MixcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTksXG4gICAgICAgIDI4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODMsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDgsXG4gICAgICAgIDg3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIyLFxuICAgICAgICA5OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjM5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAzOCxcbiAgICAgICAgODMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOSxcbiAgICAgICAgODYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTksXG4gICAgICAgIDM2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MixcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc0LFxuICAgICAgICA4MSxcbiAgICAgICAgNzksXG4gICAgICAgIDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDk4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDksXG4gICAgICAgIDIxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTM3LFxuICAgICAgICA2MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDM3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ2LFxuICAgICAgICA3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjksXG4gICAgICAgIDk0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImd1VWNtc0pBMEtCSEkvNk51b0RwWnRPUjMwN3ZzdnY5ZnVwQWlxUjhScU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjc3NzQzNjE4NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjIzMkZFNkQwOUVEOTM5MTEzRDg4QkMyMDlFRDVENUVCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzY4NDg5OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI3Nzc0MzYxODQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJENTczN0RCNTc2MTk4N0IyQjNDQzAyRTA1NTlFMUYzMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM2ODQ4OTlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVFVvZGtTWVRROGl1R3h0b1RlUVo5d1wiLFxuICBcInBob25lSWRcIjogXCI1YmQxZWY3MC1hY2YyLTRmOTQtODk5My02OTgwMmRmY2ZmNjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM1LFxuICAgICAgMjE3LFxuICAgICAgNTcsXG4gICAgICAxODEsXG4gICAgICAxNzAsXG4gICAgICAxNzUsXG4gICAgICAyMTUsXG4gICAgICAxNDYsXG4gICAgICA4LFxuICAgICAgNjEsXG4gICAgICAxNzEsXG4gICAgICAxODIsXG4gICAgICAxOSxcbiAgICAgIDE5NCxcbiAgICAgIDIsXG4gICAgICAxNzMsXG4gICAgICAzNixcbiAgICAgIDY1LFxuICAgICAgMjEwLFxuICAgICAgMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODIsXG4gICAgICA0NCxcbiAgICAgIDczLFxuICAgICAgNjgsXG4gICAgICA3MixcbiAgICAgIDE1NSxcbiAgICAgIDg3LFxuICAgICAgMjA0LFxuICAgICAgMzEsXG4gICAgICAxMzIsXG4gICAgICAxMjEsXG4gICAgICAyMzIsXG4gICAgICAxNDYsXG4gICAgICAxNzEsXG4gICAgICAxMDgsXG4gICAgICA4LFxuICAgICAgODIsXG4gICAgICAxNTMsXG4gICAgICAyNSxcbiAgICAgIDkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZIQVA4NVg1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNzc3NDM2MTg0NDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjY0MDU3MDI2MjMzNTk6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJDeWxlZSBCT1RcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQVDZvTjBERUo3ZDE3b0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIitUOHZzM3BwM2x0aUhCNklHODcyZGV3eFZEL2FqM3FRK3VuT3NHck9vRHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicjl5bU1WV1NXRE5jdTRmSm1sZUtxb2RzT1VXZWRYdTZkWGRtTnVhKzBYVGxTK1oySStFZkhDcCtuWmpZdlhVNzhjT2tHMm5ScnpTSDU4d1ZQUkpBQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVG9PL0cwOEJHSTRKMDRaSksyOUNjdXVIMmJHUnNPTGE0SUpPNTBGMmJMd005Q0lRcGQ2WjZkd04yd0dRZ0gxZXk3LzRPM1k3RDZaRWR1M1hBV0U2Q1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjc3NzQzNjE4NDQ6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDYwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM2ODQ4OTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFQ3pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVDei5qc29uIjogIntcImtleURhdGFcIjpcIkUwQkR4TFRmTDRpZE1lQnR4ZHZWcEl5dkd0NnBjNGlWZ3ozZG5XRkswY1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAwMDg4MTUyNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzNjgzNTE2NjI1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Kylie 👸 ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • cylee tech』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Sir Cylee ❤️🧸",
  packname: process.env.PACK_NAME || "Kylie",
  botname : process.env.BOT_NAME  || "👸 QUEEN_KYLIE-V2 👸",
  ownername:process.env.OWNER_NAME|| "Cadillac Cylee ❤️🧸",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "K Y L I E"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
