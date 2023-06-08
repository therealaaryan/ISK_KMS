console.log("core_1mn.js [LOADED]");

if(location.hostname == "localhost"){
//url....(Local)
/*var url1_GVars = "http://localhost:82/"; //192.168.1.13
var url2_GVars = "http://localhost:2020/";
var url3_GVars = "http://localhost:82/";
var url4_GVars = "http://localhost:7070/api-php-src2/SKILLEE_ENGLISH/app.php/";
var url5_GVars = "http://localhost:2020/SKILLEE_ENGLISH/app?my=fddf";
*/
/*OLD
var url1_GVars = "http://localhost:7070/websites/mn_english/"; //192.168.1.13
var url2_GVars = "http://localhost:2020/";
var url3_GVars = "http://localhost/";
var url4_GVars = "http://localhost:7070/api-php-src2/SKILLEE_ENGLISH/app.php/";
*/

}else{
  
//url....(Prod)
//https://2b5d73d87da548.lhr.life/ (http://localhost/)
/*var tunnelUrl_GVars = "https://2b5d73d87da548.lhr.life"+"/"; 
var url1_GVars = tunnelUrl_GVars+""; 
var url2_GVars = tunnelUrl_GVars+"nodejs/";
var url3_GVars = tunnelUrl_GVars+"";
var url4_GVars = tunnelUrl_GVars+"api-php-src2/SKILLEE_ENGLISH/app.php/";
var url5_GVars = tunnelUrl_GVars+"nodejs/SKILLEE_ENGLISH/app?my=fddf";
*/

/*OLD
//https://682534557d5e78.lhrtunnel.link (http://localhost/)
var url1_GVars = "https://682534557d5e78.lhrtunnel.link/websites/mn_english/"; 
var url2_GVars = "https://682534557d5e78.lhrtunnel.link/nodejs/";
var url3_GVars = "https://682534557d5e78.lhrtunnel.link/";
var url4_GVars = "https://682534557d5e78.lhrtunnel.link/api-php-src2/SKILLEE_ENGLISH/app.php/";
*/
}

//path....
/*var assets_GVars = url1_GVars+"assets/";
var assets_bg_GVars = url1_GVars+"assets/bg/";
var assets_icons_GVars = url1_GVars+"assets/icons/";
var assets_sounds_GVars = url1_GVars+"assets/sounds/";*/



//****add files..
//config..
/*
METHOD-1
//--For Direct Use Only--[Only work with Single Project]//
//import { config_mn } from "../../mn/site8/mn_account/config_mn/index.js";
//nginx (conf).. also (required)..
location /sites/mn/site8/mn_account {
  #autoindex on;
  alias sites/mn/site8/mn_account;
}
*/
//METHOD-2
//--Already Loaded by [Project (init file)]--//
//console.log(config_mn);
 

//CSS..
var core_1mn_CSS = {
  "set": function(){
     var css = `
     /*Global CSS (-Gss)*/ 
     :root {
      --box: #1e90ff;
    }
    .scrollBar-Gss { 
    
        text-align: center;
    
    }
    
    
    /*********Scroll Bar********(Start)/
    /* width */
    ::-webkit-scrollbar {
        width: 0.3vw;
      }
      
      /* Track */
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 0.5vh grey; 
        border-radius: 1vh;
      }
       
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #9b9a9a; 
        border-radius: 1vh;
      }
      
      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #555555; 
      }
    
    /*********Scroll Bar********(End)*/
    
    
    
    /****anim******(Start)*/
    @keyframes wave-hori {
      0% {
          background-position: -468px 0;
      }
       100% {
          background-position: 468px 0;
      }
    }
    
    /*https://developer.mozilla.org/en-US/docs/Web/CSS/animation*/
    @keyframes box-left-to-right {
      0%   {background: var(--box); left: 0%; top: 0px;}
      /*25%  {background: yellow; left: 200px; top: 0px;}
      50%  {background: blue; left: 300px; top: 0px;}
      75%  {background: green; left: 400px; top: 0px;}*/
      100% {background: var(--box); left: 60%; top: 0px;}
    }
    /****anim******(End)*/
     
     `;
     var mID = "global-css"; 
     if (document.getElementById(mID)==null) {
      var mE_css = document.createElement("style");
      mE_css.id = "global-css";
      mE_css.innerHTML = css;
      document.head.appendChild(mE_css);
     }
  }
};
core_1mn_CSS.set();



//payload.......
var core_1mn = {

  //here we add version info
  "mLibInfo": {
    "version": "1.0",
    "code": "1",
    "createdBy": "1MN.IO"
  },


  //here add all global variables..
  "gVars": {
    "tpLibs": { //add all third party libraries
    },

    //add all urls here.....
    "mUrls": {
      "set": function(mGetUrlName){
          var url_name = mGetUrlName;
          //set vars....
          var mEnv = core_1mn['conf']['mEnv'];
          //console.log(url_name);
          //set data....
          var mUrlDta = config_mn.core_1mn.config.gVars.mUrls.set.mUrlDta;
          //start..
          return mUrlDta[mEnv][url_name];

          /*
          USAGE
          var url1 = core_1mn['gVars']['mUrls']['set']("url1");
          console.log(url1);
          */

      }
    }, 

    "Products": { //add (Products) specific data..
      "1MN" : {},
      "Skillee-English": {
        "Users": {
            "skle_en_tchr": {
                "type": "skle_en_tchr",
                "name": "Teacher",
            },
            "skle_en_stud" : {
                "type": "skle_en_stud",
                "name": "Student",
            },
          },
        },
    }, 

  },

  //add all colors here..
  "clr": config_mn.core_1mn.config.clr,
  /*
  --USAGE--
  core_1mn["clr"][YOUR_COLOR_NAME]
  */


    //"email": "aditya@skilleeteacher.com",
    //"paswoord": "12345678"

    //configuration settings....
    "conf": {
      "mEnv": window.location.hostname.includes("localhost") || window.location.hostname.includes("127.0.0.1")
       ? 0 : 1, //0=>Development, //1=>Production
    },


    //language codes..
    "mLangCodes": {
      "data": null,
      "set": function(mGetParams){
        //here we can retreive a language code....
        var mParams = mGetParams;
        //set vars....
        var mCb = mParams['cb'];   
        var mQuery = mParams['query']; /*
        {
          "lang_code": "hi",
          ------OR-------
          "lang_name": "hi",
        }
        */  
        
        //set vars.....
        var item_name = "lang_codes";  
        var url1_GVars = core_1mn['gVars']['mUrls']['set']("url1");
        var mFile = url1_GVars + "assets/json/mLangCodes/" + item_name + ".json";

        /*
        Sample Data
        [
          {
         "ISO_language_name": "Abkhazian",
         "ISO_639_1": "ab",
         "ISO_639_2_T": "abk",
         "ISO_639_2_B": "abk",
         "ISO_639_3": "abk",
         "Notes": "also known as Abkhaz"
         },
        ]
        */

        //send callback..
        var mSendCB = function(mCb_name, data){
          if(mCb!=undefined){
            if(mCb[mCb_name]!=undefined){
              mCb[mCb_name] (data);
            }
          }
        };
        if(core_1mn['mLangCodes']['data']!=null){
          //send already (Stored) data..
          mQuery_langCode(core_1mn['mLangCodes']['data']);
          return;
        }else{
         //need to retrive from server..
         mLoad();
        }

         //load from (server)
         function mLoad() {
         /* Make an HTTP request*/
          xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {
             //loaded success......
             //console.log('loaded success: '+this.responseText);
              mOn_success(this.responseText);
           } 
           if (this.status == 404) {
            //console.log("Not found.");
            mOn_failed();
            } 
         }
       }
      xhttp.open("GET", mFile, true);
      xhttp.send();


      //events.....
      function mOn_success(mRes1) {
        //set..
        try {
          mRes1 = JSON.parse(mRes1);
          //store..
          core_1mn['mLangCodes']['data'] = mRes1;
          mQuery_langCode(mRes1);
        } catch (error) {
         console.log(`Error: unable to parse [mLangCodes] JSON`);
        }
      }
      function mOn_failed() {
         console.log(`Error: [mLangCodes] (Data not load)`);
      }

         }


         //query a language code..
         function mQuery_langCode(mGetArr1) {
          var mArr1 = mGetArr1;
          //check if (query) is undefined..
          if(mQuery==undefined){
            //no need to find item....Send Array..
            mSendCB("onLoad", {"0": core_1mn['mLangCodes']['data']});
            return;
          }
          //console.log(mArr1); 
          var mSearchKey = Object.values(mQuery)[0];
          const array1 = mArr1;
          const found = array1.find(element => element[mSearchKey] == array1[mSearchKey]);
          //console.log(found); 
          //send callback..
          mSendCB("onLoad", {"0": found}); 
         }

         /*
         USAGE
         //(mLangCode)....set
      core_1mn['mLangCodes']['set']({
        "query": {
          "lang_code": "hi"
        },
        "cb": {
          "onLoad": function(data){
            var mLangItem = data['0'];
            console.log(mLangItem);
          },
          "onErr": function(data){
            //error..
            console.log(data);
          },
        }
      });

      -----------OR----------

       //(mLangCode)....set
      core_1mn['mLangCodes']['set']({
        "cb": {
          "onLoad": function(data){
            var mLangArr = data['0'];
            console.log(mLangArr);
          },
          "onErr": function(data){
            //error..
            console.log(data);
          },
        }
      });

         */


      }
    },

    //add utilities here..
    "mUtils": {

      "openssl": {
        //Asymmetric Encryption
        "asym_encrypt": {
            //https://www.npmjs.com/package/jsencrypt (Client-Side)
            //add credentials info here..
            "credInfo": {
                "PRIVATE_KEY": null, //add your private key here..
                "PUBLIC_KEY": null, ////add your public key here..
            },

            //encrypt data..
            "encrypt": {
                "set": function(mTxt){
                    //Encrypt Data..
                    //set vars..
                    var credInfo = core_1mn['mUtils']['openssl']['asym_encrypt']['credInfo'];
                    //var mInputDta = "my name is 1mn.io";
                    var mInputDta = mTxt;
                    // Encrypt with the public key... 
                    var encrypt = new JSEncrypt();
                    encrypt.setPublicKey(credInfo['PUBLIC_KEY']);
                    var encrypted = encrypt.encrypt(mInputDta);
                    console.log('encrypted: ', encrypted);
                    return encrypted;

                    /*USAGE
                    core_1mn['mUtils']['openssl']['asym_encrypt']['encrypt']['set']();
                    */
                }
            },

            //decrypt data..
            "decrypt": {
                "set": function(mTxt){
                    //Decrypt Data..
                    //set vars..
                    var mRes = {
                        "isErr": false,
                        "msg": "",
                        "data": null
                    };
                    var credInfo = core_1mn['mUtils']['openssl']['asym_encrypt']['credInfo'];
                    //var mInputDta = "QKHQM7sRbByjFgXqq5CRXCe1cO0lmTvyFrFHZO1nZj6Q/GvU56XivREEOPruF+9c7j6Qu5rlJ8uelanNh1ElWf7fgSmwDskLecwkIaNr4V/bhfDiKN5cwg7807YwCBkZ6R4Q95jLeV0LBknthMD9HzdyR0LeinKTgYTnIPXA4XU=";
                    var mInputDta = mTxt; 
                    try {
                        // Decrypt with the public key...
                        var decrypt = new JSEncrypt();
                        decrypt.setPrivateKey(credInfo['PRIVATE_KEY']);
                        var decrypted = decrypt.decrypt(mInputDta);
                        console.log('decrypted: ', decrypted);
                        mRes['data'] = decrypted;
                    } catch (error) {
                        //error..
                        //console.log(error);
                        mRes['isErr']=true;
                        mRes['msg']="error: unable to decrypt";
                    }
                    return mRes;

                    /*USAGE
                    core_1mn['mUtils']['openssl']['asym_encrypt']['decrypt']['set']();
                    */

                }
            },

        }
      },

      "base64": {
        //https://www.digitalocean.com/community/tutorials/how-to-encode-and-decode-strings-with-base64-in-javascript
        "encode": {
            "set": function(mGetParams){
                var mParams = mGetParams;
                var mTxt = mParams['txt']; //add normal TEXT
                //set....
                // The original string
                let originalString = mTxt; //"1MN.IO";
                // Encode the String
                let base64String = btoa(originalString);
                //console.log("The encoded base64 string is:", base64String);
                return base64String;
            }
        },
        "decode": {
            "set": function(mGetParams={"txt":""}){
                var mParams = mGetParams;
                var mTxt = mParams['txt']; //add encoded TEXT
                //set....
                // The base64 encoded input string
                let base64string = mTxt;//"R2Vla3Nmb3JHZWVrcw==";
                // Decode the Buffer as string
                let decodedString = atob(base64string);
                //console.log("The decoded string:", decodedString);
                return decodedString;
            }
        },
    },

    },


    "init": {

      "set": () => {
        mJS();
        function mJS() {
          //-->mLoadReqJS/mJsArr
          var url1_GVars = core_1mn['gVars']['mUrls']['set']("url1");
          core_1mn['mLoadReqJS']['mJsArr'][`${url1_GVars}js/core_1mn.js`] = {
            "status": 1, //0=>loading, 1=>onload
          };
          
          
        }  

      }

    },

    "svgIcons": {

      "close_0": {
          "svg": () => {

              var mSvg = ` 
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
              `;

              return mSvg;

          }
      },

    },

    //svg (lib)
    "mSvg": {

      "ico": {
        //svg icons will be add here.....
        //(DYNAMIC)
      },

      "set": (mGetParams) => {
        var mParams = mGetParams;
        //reload..
        if (mParams["reload"]!=undefined) {
             mParams["reload"] = () => {
                mStart();
            }
        }

        /*
        Need to implement..
         Convert unresponsive (SVG) responsive by using => [width=W; height=H; (--TO--) viewBox="0 0 W H"]
        */

        //set..
        var mE = mParams['5']!=undefined ? mParams['5'] : null;
        let mDivRoot = document.createElement("div");
        mE.appendChild(mDivRoot);
        let mStart = () => {
        mDivRoot.innerHTML = ""; //reset..  
        //set vars..
        var mCb = mParams['cb'];
        var mSvgName = mParams['0'].trim(); //(svg name) --OR-- (<svg></svg>)
        var mSvgId = mParams['1']!=undefined ? mParams['1'] : core_1mn['mUniqueId'].mGenerate(30); //(svg id)
        var mSvgW = mParams['2']!=undefined ? mParams['2'] : "2vh"; //(svg width)
        var mSvgH = mParams['3']!=undefined ? mParams['3'] : "2vh"; //(svg height)
        var mSvgFill = mParams['4']!=undefined ? mParams['4'] : "rgba(34,34,34, 1.0)"; //(svg fill)
        var mSvgHolder = mDivRoot; //(svg holder)


        //set vars.....
        var item_name = mSvgName; //"alphabet-1.svg";
        var url1_GVars = core_1mn['gVars']['mUrls']['set']("url1");
        var mFile = url1_GVars + "assets/svgTest/" + item_name + "";
        //console.log(mFile);

         //layout....(SVG)
         var mSvgDiv1 = document.createElement("span");
         mSvgDiv1.id = mSvgId;
         mSvgDiv1.innerHTML = `<div></div>`; //(init)
         mSvgDiv1.setAttribute("tag_n", "svg_cover");  //(svg_cover)
         mSvgHolder.appendChild(mSvgDiv1);

         //events.....
         mSvgDiv1.onclick = function(){
          var mCurrItemId = this.id;
          var mCurrItem = document.getElementById(mCurrItemId);
          //send callback....
          if(mCb!=undefined && mCb['onClick']!=undefined){
            mCb.onClick(mCurrItem);
          }
         };

         //mSvg1_E.....
         var mSvg1_E = mSvgDiv1.querySelectorAll("div")[0];
         mSvg1_E.style = `background-color:#e6e6e6; width:${mSvgW}; height:${mSvgH}; border-radius: 0.5vh; `; //default


        //check (ico)....
        if(core_1mn['mSvg']['ico'].hasOwnProperty(item_name)==true || 
        item_name.indexOf("<svg")!==-1){
          //avail....
          mSend_cb("onLoad");
        }else{
          //not avail.... (need to load)
          mLoad();
        }

        //load from (server)
        var xhttp = undefined;
        function mLoad() {
           /* Make an HTTP request*/
          xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {
              //loaded success......
              //console.log('loaded success: '+this.responseText);
              mOn_success(this.responseText);
            }
            if (this.status == 404) {
              //console.log("Not found.");
              mOn_failed();
            }
            /* Remove the attribute, and call this function once more: */
           // mElmnt.removeAttribute(mHtmlSrcTag);
            //includeHTML();
          }
        }
        xhttp.open("GET", mFile, true);
        xhttp.send();


        //events.....
        function mOn_success(mRes1) {
          //store....
          if(core_1mn['mSvg']['ico'].hasOwnProperty(item_name)==false){
            core_1mn['mSvg']['ico'][item_name] = {
              "svg": () => {
                var mSvg = ` 
                 ${mRes1}
                `;
              return mSvg; 
              }
            };
          }

          //(cb)
          mSend_cb("onLoad");
        }
        function mOn_failed() {
           //(cb)
             mSend_cb("onError");
        }

        }

        //send callback......
        function mSend_cb(mCb_name) {
          var mIco = core_1mn['mSvg']['ico'];
          if(mIco.hasOwnProperty(item_name)==true ||
          item_name.indexOf("<svg")!==-1 ){
            if (mIco.hasOwnProperty(item_name)==true) {
              mSvgDiv1.innerHTML = mIco[item_name].svg();              
            }else {
              //svg file..
              mSvgDiv1.innerHTML = item_name;              
            }

            //set.....
            var mSvg1_E = mSvgDiv1.querySelectorAll("svg")[0];
            if (mSvgFill!="") {
              mSvg1_E.style.fill = mSvgFill;              
            }
            mSvg1_E.style.width = mSvgW;
            mSvg1_E.style.height = mSvgH;
            //console.log(mSvg1_E);

          }
          //set....
          if(mCb!=undefined){
            if(mCb[mCb_name]!=undefined){
              mCb[mCb_name] (mSvgDiv1);
            }
          }

        }

        //send (init) callback....
        if(mCb!=undefined){
          if(mCb['onInit']!=undefined){
            mCb.onInit(mSvgDiv1);
          }
        }

        //(mSvgDiv1)....
        return mSvgDiv1;

        };
        return mStart();


        /*USAGE
          core_1mn['mSvg'].set({
        "0": "alphabet-1.svg",  //svg file name --OR-- <svg></svg>
        "1": "YOUR_UNIQUE_ID",
        "2": "2vh",
        "3": "2vh",
        "4": "rgba(34,34,34, 1.0)", "" => no-color --OR-- undefined => "auto-color-applied" --OR-- "rgba(my color)"
        "5": mItemDiv,
        //you can set and (reload) FIELD by (assigning) this func..
        //"reload": () => {},
        
        "cb": {
            "onLoad": (mCurrItem) => {
                //use (svg)
                alert("onLoad");
            },
            "onInit": (mCurrItem) => {
               //This will trigger immediately..
            },
            "onError": () => {
                alert("onError");
            },
            "onClick": (mCurrItem) => {
                alert("onClick");
            }
        }
       });
        */ 
       

      }

    },

    //img (lib)
    "mImg": {

      "set": (mGetParams) => {
        var mParams = mGetParams;
        var mCb = mParams['cb'];
        var mImgName = mParams['0']; //(svg name)
        var mImgId = mParams['1']!=undefined ? mParams['1'] : core_1mn['mUniqueId'].mGenerate(30); //(svg id)
        var mImgW = mParams['2']!=undefined ? mParams['2'] : "2vh"; //(img width)
        var mImgH = mParams['3']!=undefined ? mParams['3'] : "2vh"; //(img height)
        var mImgHolder = mParams['4']!=undefined ? mParams['4'] : null; //(img holder)
        var mImgBr = mParams['5']!=undefined ? mParams['5'] : "0%"; //(img border-radius)
  
        //set vars.....
        var item_name = mImgName; //"LLE.png";
        var url1_GVars = core_1mn['gVars']['mUrls']['set']("url1");
        var mFile = url1_GVars + "assets/" + item_name + ""; //iconsTest
        if (item_name.indexOf("http://")!==-1 || item_name.indexOf("https://")!==-1) {
            //url found
            mFile = item_name;
        }
        //console.log(mFile);
  
         //layout....(SVG)
         var mImgDiv1 = document.createElement("span");
         mImgDiv1.id = mImgId;
         mImgDiv1.innerHTML = `<div></div>`; //(init)
         mImgDiv1.setAttribute("tag_n", "img_cover");  //(img_cover) 
         mImgHolder.appendChild(mImgDiv1);
  
         //mImg1_E.....
         var mImg1_E = mImgDiv1.querySelectorAll("div")[0];
         mImg1_E.style = `background-color:#e6e6e6; width:${mImgW}; height:${mImgH}; border-radius: 0.5vh; `; //default
  
      
        //load from (server)
        mLoad();
        function mLoad() {
          var mImg1_E = document.createElement("img");
          mImg1_E.src = mFile;
  
          mImg1_E.onload = function(){
            //alert("onload");
            mImgDiv1.innerHTML = ``; //reset.....
            //set....
            mImg1_E.style.width = mImgW;
            mImg1_E.style.height = mImgH;
            mImg1_E.style.borderRadius = mImgBr;
            mImgDiv1.appendChild(mImg1_E);
  
            //events..
            mImgDiv1.onclick = function(){
              mSend_cb("onClick", mImg1_E);
            };
  
  
            //(cb)
            mSend_cb("onLoad", mImg1_E);
  
          };
          mImg1_E.onerror = function(){
            //alert("onerror");
            //(cb)
            mSend_cb("onError", null);
  
          };
          
        }
  
         //send callback......
         function mSend_cb(mCb_name, mE1) { 
          //set....
          if(mCb!=undefined){
            if(mCb[mCb_name]!=undefined){
              mCb[mCb_name] (mE1);
            }
          }
  
        }
  
  
        /*USAGE
          core_1mn['mImg'].set({
                    "0": "LLE.png",
                    "2": "12.0vh",
                    "3": "3.2vh",
                    "4": mItemDiv,
                    "5": "50%"

          });
        */
  
  
      }
  
    },

    //bg img (lib)
    "mBgImg": {

    "set": (mGetParams) => {
      var mParams = mGetParams;
      var mCb = mParams['cb'];
      var mImgName = mParams['0']; //(svg name)
      var mImgId = mParams['1']!=undefined ? mParams['1'] : core_1mn['mUniqueId'].mGenerate(30); //(svg id)
      var mImgW = mParams['2']!=undefined ? mParams['2'] : "2vh"; //(img width)
      var mImgH = mParams['3']!=undefined ? mParams['3'] : "2vh"; //(img height)
      var mImgHolder = mParams['4']!=undefined ? mParams['4'] : null; //(img holder)

      //set vars.....
      var item_name = mImgName; //"LLE.png";
      var url1_GVars = core_1mn['gVars']['mUrls']['set']("url1");
      var mFile = url1_GVars + "assets/bg/" + item_name + "";
      //console.log(mFile);

       //layout....(IMG)
       var mImgDiv1 = document.createElement("span");
       mImgDiv1.id = mImgId;
       mImgDiv1.innerHTML = `<div></div>`; //(init)
       mImgDiv1.setAttribute("tag_n", "bg_img_cover");  //(bg_img_cover)
       mImgHolder.appendChild(mImgDiv1);

       //mImg1_E.....
       var mImg1_E = mImgDiv1.querySelectorAll("div")[0];
       mImg1_E.style = `background-color:#e6e6e6; width:${mImgW}; height:${mImgH}; border-radius: 0.5vh; `; //default


      //load from (server)
      function mLoad1() {
        /* Make an HTTP request*/
       xhttp = new XMLHttpRequest();
       xhttp.onreadystatechange = function() {
       if (this.readyState == 4) {
         if (this.status == 200) {
           //loaded success......
           //console.log('loaded success: '+this.responseText);
           mOn_success(this.responseText);
         }
         if (this.status == 404) {
           //console.log("Not found.");
           mOn_failed();
         }
         /* Remove the attribute, and call this function once more: */
        // mElmnt.removeAttribute(mHtmlSrcTag);
         //includeHTML();
       }
     }
     xhttp.open("GET", mFile, true);
     xhttp.send();


     //events.....
     function mOn_success(mRes1) {
       //set..
       console.log(mRes1);
       return;
       //(cb)
       mSend_cb("onLoad");
     }
     function mOn_failed() {
        //(cb)
          mSend_cb("onError");
     }

      }
     // mLoad1();


    
      //load from (server)
      mLoad();
      function mLoad() {
        var mImg1_E = document.createElement("div");
        //mImg1_E.src = mFile;
        mImg1_E.style.backgroundImage = `url('${mFile}')`;
        mImg1_E.style.backgroundRepeat = "repeat";

        /*mImg1_E.onload = function(){
          mImgDiv1.innerHTML = ``; //reset.....
          //set....
          mImg1_E.style.width = mImgW;
          mImg1_E.style.height = mImgH;
          mImgDiv1.appendChild(mImg1_E);

          //(cb)
          mSend_cb("onLoad", mImg1_E);

        };
        mImg1_E.onerror = function(){
          //alert("onerror");
          //(cb)
          mSend_cb("onError", null); 
        };*/
        //direct..
        mOnLoad();
        function mOnLoad() {
          mImgDiv1.innerHTML = ``; //reset.....
          //set....
          mImg1_E.style.width = mImgW;
          mImg1_E.style.height = mImgH;
          mImgDiv1.appendChild(mImg1_E);

          //(cb)
          mSend_cb("onLoad", mImg1_E);
        }
        
      }

       //send callback......
       function mSend_cb(mCb_name, mE1) { 
        //set....
        if(mCb!=undefined){
          if(mCb[mCb_name]!=undefined){
            mCb[mCb_name] (mE1);
          }
        }

      }


      /*USAGE
        core_1mn['mBgImg'].set({
                  "0": "LLE.png",
                  "2": "12.0vw",
                  "3": "3.2vw",
                  "4": mItemDiv,
        });
      */


    }

    },

    //translation (lib)
    "trans": {
      
      //we can translate items with provided ARRAY..
      "1": {
        "set": function(mGetParams){
          //@requirements => (Add tag_n="trans_1" in (html) )
          var mParams = mGetParams;
          //set vars....
          var mLangCode = mParams['lc']; //hi=>Hindi
          var mTransArr = {} /*{
            "Phrase of the Day": "दिन का मुहावरा",
            "Word of the Day": "आज का शब्द",
          };*/

          //set vars.....
          var item_name = mLangCode; //"hi=>Hindi";
          var url1_GVars = core_1mn['gVars']['mUrls']['set']("url1");
          var mFile = url1_GVars + "assets/json/trans_1/" + item_name + ".json";

          //load from (server)
          function mLoad() {
          /* Make an HTTP request*/
           xhttp = new XMLHttpRequest();
           xhttp.onreadystatechange = function() {
           if (this.readyState == 4) {
             if (this.status == 200) {
              //loaded success......
              //console.log('loaded success: '+this.responseText);
               mOn_success(this.responseText);
            } 
            if (this.status == 404) {
             //console.log("Not found.");
             mOn_failed();
             } 
          }
        }
       xhttp.open("GET", mFile, true);
       xhttp.send();


       //events.....
       function mOn_success(mRes1) {
         //set..
         try {
           mTransArr = JSON.parse(mRes1);
           mSet_trans();
         } catch (error) {
          console.log(`Error: unable to parse [trans_1] JSON`);
         }
       }
       function mOn_failed() {
          console.log(`Error: [trans_1] (Data not load)`);
       }

          }
          mLoad();

          //here we set....
          function mSet_trans() {
            var mArr1 = mTransArr;
            var mTagN = document.querySelectorAll("[tag_n=trans_1]");
            for (let i1 = 0; i1 < mTagN.length; i1++) {
              const mCurr_I1 = mTagN[i1];
              //console.log(mCurr_I1);
              var mCurrTxt = mCurr_I1.textContent; 
              //set....
              var myObject = mArr1; //{ "mIxeDCaSEKeY": "value" };
              var searchKey = mCurrTxt; //'mixedCaseKey';
              var asLowercase = searchKey.toLowerCase();
              var mResult = myObject[Object.keys(myObject).find(key => key.toLowerCase() === asLowercase)];
              //console.log(mResult);
              mCurr_I1.textContent = mResult;
            }
          }

          /*
          USAGE
          core_1mn['trans']['1']['set']({"lc": "hi"});
          */

        }


      },

    },


    //ip info (lib)
    "ip_info": {
      "data": null, //add data here
      "set": function(mGetParams){ 
        //here we set ip information..
        //set vars..
        var mParams = mGetParams;
        var mCb = mParams['cb'];

        //send callback..
        var mSendCB = function(mCb_name, data){
          if(mCb!=undefined){
            if(mCb[mCb_name]!=undefined){
              mCb[mCb_name] (data);
            }
          }
        };
        if(core_1mn['ip_info']['data']!=null){
          //send already (Stored) data..
          mSendCB("onLoad", core_1mn['ip_info']['data']);
          return;
        }else{
         //need to retrive from server..
         mLoad();
        }

        //need to retrive from server..
        function mLoad() {
          var mFormData = new FormData();
          mFormData.append("epName_mn", "14");
          mFormData.append("epType_mn", "skle_en_stud");
          mFormData.append("payloadJSON_mn", JSON.stringify({
            "ip_add": null //"1.1.1.1" or null
          }));
           core_1mn['mApiReq']['HTTP'].set(
               {
                "data": mFormData,
                "url": config_mn.core_1mn.config.ip_info.set.url,
                "method": "post", 
                "cb": {
                    "onLoad": (mGetParams) => {
                        var mParams = mGetParams;
                        var mDta = mParams['dta'];
                        //console.log(mDta);
                        //store..
                        core_1mn['ip_info']['data'] = mDta['dta_mn']['dta']['ipinfo'];
                        //send cb..
                        mSendCB("onLoad", core_1mn['ip_info']['data']);
                    },
                    "onErr": (mGetParams) => {
                        var mParams = mGetParams;
                        var mDta = mParams['dta'];
                        //console.log(mDta);
                        mSendCB("onErr", {"msg": `Error: unable to get ipinfo`});
                    }
                }
               }
          ); 
         
        }

        /*
        USAGE
        core_1mn['ip_info']['set']({
  "cb": {
    "onLoad": function(data){

    },
    "onErr": function(data){

    },
  }
});
        */


        /*Sample Response
         "ipinfo": {
                "status": "success",
                "continent": "Oceania",
                "continentCode": "OC",
                "country": "Australia",
                "countryCode": "AU",
                "region": "QLD",
                "regionName": "Queensland",
                "city": "South Brisbane",
                "district": "",
                "zip": "4101",
                "lat": -27.4766,
                "lon": 153.0166,
                "timezone": "Australia/Brisbane",
                "offset": 36000,
                "currency": "AUD",
                "isp": "Cloudflare, Inc",
                "org": "APNIC and Cloudflare DNS Resolver project",
                "as": "AS13335 Cloudflare, Inc.",
                "asname": "CLOUDFLARENET",
                "reverse": "one.one.one.one",
                "mobile": false,
                "proxy": false,
                "hosting": true,
                "query": "1.1.1.1"
            }
        */

      }
 
    },


    //local storage..
    "mLocalStorage": {

      //store data in local storage..
      "store": {
        "set": (mGetParams) => {
          //set data..
          //check if storage available..
          if (typeof(Storage) == "undefined") {
            // Sorry! No Web Storage support..
            //alert('Sorry! No Web Storage support..');
            return;
          } 
           //send callback..
           const mSend_cb = function(mCb_name){
            if(mCb!=undefined){
              if(mCb[mCb_name]!=undefined){
                mCb[mCb_name]();
              }
            }
          };

          //continue..
          var mParams = mGetParams;
          var mKey = mParams['key'];
          var mVal = mParams['val'];
          var mCb = mParams['cb']; 
          try {
            localStorage.setItem(mKey, mVal);
            mSend_cb("onLoad");
            //set successfully..
          } catch (error) {
            console.log(`Error: ${error}`);
            mSend_cb("onErr");
          }


          /*
          USAGE
          core_1mn['mLocalStorage']['store']['set'](
            {
                "key": "loginInfo",
                "val": "my login data",
                "cb": {
                    "onLoad": function(){
                        alert("Stored success!");
                    }
                }
            }
          );
          */

        }

      },

       //retrieve data in local storage..
      "retrieve": {
        "set": (mGetParams) => {
          //set data..
          //check if storage available..
          if (typeof(Storage) == "undefined") {
            // Sorry! No Web Storage support..
            //alert('Sorry! No Web Storage support..');
            return;
          } 
           //send callback..
           const mSend_cb = function(mCb_name, data){
            if(mCb!=undefined){
              if(mCb[mCb_name]!=undefined){
                mCb[mCb_name](data);
              }
            }
          };

          //continue..
          var mParams = mGetParams;
          var mKey = mParams['key'];
          var mVal = mParams['val'];
          var mCb = mParams['cb'];
          var mVal = localStorage.getItem(mKey);
          mSend_cb("onLoad", mVal);

          /*
          USAGE
          core_1mn['mLocalStorage']['retrieve']['set'](
         {
           "key": "loginInfo",
           "cb": {
              "onLoad": function(data){
                 alert(data);
             }
            }
          }
         );
          */

        }

      },

      //remove all data in local storage..
      "removeAll": {
        "set": function(mGetParams){
          //set data..
          //check if storage available..
          if (typeof(Storage) == "undefined") {
            // Sorry! No Web Storage support..
            //alert('Sorry! No Web Storage support..');
            return;
          } 
           //send callback..
           const mSend_cb = function(mCb_name, data){
            if(mCb!=undefined){
              if(mCb[mCb_name]!=undefined){
                mCb[mCb_name](data);
              }
            }
          };

          //continue..
          var mParams = mGetParams;
          var mCb = mParams['cb'];
          localStorage.clear();
          mSend_cb("onLoad");

          /*
          USAGE
          core_1mn['mLocalStorage']['removeAll']['set'](
         {
            "cb": {
            "onLoad": function(){
               alert("All data clear");
              }
            }
            }
          );
          */

        }
      },

      //remove data in local storage..
      "remove": {
        "set": (mGetParams) => {
          //set data..
          //check if storage available..
          if (typeof(Storage) == "undefined") {
            // Sorry! No Web Storage support..
            //alert('Sorry! No Web Storage support..');
            return;
          } 
           //send callback..
           const mSend_cb = function(mCb_name, data){
            if(mCb!=undefined){
              if(mCb[mCb_name]!=undefined){
                mCb[mCb_name](data);
              }
            }
          };

          //continue..
          var mParams = mGetParams;
          var mKey = mParams['key'];
          var mCb = mParams['cb'];
          localStorage.removeItem(mKey);
          mSend_cb("onLoad");

          /*
          USAGE
           core_1mn['mLocalStorage']['remove']['set'](
         {
           "key": "loginInfo",
           "cb": {
              "onLoad": function(){
                 alert("data removed");
             }
            }
          }
          );
          */

        }

      },

     
    },


    //add fronend functional code generate by (bknd) 
    "add_bknd_InClient": {
     "set": function(mGetParams){
      //set vars..
      var mParams = mGetParams;
      var mE1 = mParams['e1'];
      //cb
      var mCb_dta_bknd = mParams['dta_bknd'];

      /*
      USAGE

       var msg = `
      Success: Register successfully 
      <a href="#" is_bknd="true" dta_bknd='
      {
        "type": "login_link", 
        "events": {
            "onClick": {
                "func": [
                    "mLoginMode()"
                ]
            }
        }
      }
      ' >
      Click to login
      <a>

      Success1: Register successfully 1
      <a href="#" is_bknd="true" dta_bknd='
      {
        "type": "login_link", 
        "events": {
            "onClick": {
                "func": [
                    "mLoginMode1()"
                ]
            }
        }
      }
      ' >
      Click to login
      <a>

      `;

      core_1mn['add_bknd_InClient']['set'](
                        {
                            "e1": mNoteHolder,
                            //Receive actions and data for Client..via (bknd)
                            "dta_bknd": {
                                "events": {
                                    "onClick": function(mGetParams){
                                        var mParams = mGetParams;
                                        //console.log(mParams);
                                        var mType = mParams['type'];
                                        var mFunc = mParams['func'];
                                        //exec functions..
                                        function mExec_func() {
                                            for (let i1 = 0; i1 < mFunc.length; i1++) {
                                                const mCurr_I1 = i1;
                                                //set..
                                                eval(mFunc[mCurr_I1]);
                                            }
                                        }
                                        if(mFunc!=undefined){
                                            mExec_func();
                                        } 

                                    }
                                }
                            }
                        },
                     );

      */

     
      /*
      //dta_bknd
      //tag_bknd
      //is_bknd
      */

      //data (bknd)..
      var mData_bknd = {
      }; 

      //here we set.....
      function mSet_bknd(mElem) {
        for (let i1 = 0; i1 < mElem.querySelectorAll("[is_bknd=true]").length; i1++) {
          const mCurr_I1 = mElem.querySelectorAll("[is_bknd=true]")[i1];
          //console.log(mCurr_I1);
          //set..
          mCurr_I1.id = core_1mn['mUniqueId'].mGenerate(21);
          var dta_bknd = mCurr_I1.getAttribute("dta_bknd");
            try {
              dta_bknd = JSON.parse(dta_bknd);
              //store..
              mData_bknd[mCurr_I1.id] = dta_bknd;
              //console.log(dta_bknd);
              
            } catch (error) {
              //error..
              console.log(`Error: unable to parse (JSON) [dta_bknd]`);
              return;
            }

          //events..
          mCurr_I1.onclick = function(){
            var mCurrItemId = this.id;
            //var mCurrItem = document.getElementById(mCurrItemId);
            //set..
            var mCurr_dta_bknd = mData_bknd[mCurrItemId];
            //data..
            var mType = mCurr_dta_bknd['type'];
            var mEvents = mCurr_dta_bknd['events'];
            var mOnClick = mEvents['onClick'];
            //mOnClick-->
            var mFunc = mOnClick['func'];

            //send callback (onClick)..
            mCb_dta_bknd['events']['onClick'](
              {
                "type": mType,
                "func": mFunc,
              }
            );


          };

        }

      }
      mSet_bknd(mE1);
      

     } 
    },



    "mUserInfo": {

      "get": () => {
        //set vars....
        var mRes = {
          "mnLoginInfo": null,
          "onBoardInfo": null,

        }; 
        //set....
        core_1mn['mLocalStorage']['retrieve']['set'](
          {
            "key": "loginInfo.1mn",
            "cb": {
              "onLoad": function(data){
                mRes['mnLoginInfo']=data;
              }
            }
          }
        );
        core_1mn['mLocalStorage']['retrieve']['set'](
          {
            "key": "products.onboardInfo.1mn",
            "cb": {
              "onLoad": function(data){
                mRes['onBoardInfo']=data;
              }
            }
          }
        );
        //set
        if(mRes['mnLoginInfo']!=null){
          mRes['mnLoginInfo'] = JSON.parse(mRes['mnLoginInfo']);
        }
        if(mRes['onBoardInfo']!=null){
          mRes['onBoardInfo'] = JSON.parse(mRes['onBoardInfo']);
        }

        //set res.....
        return mRes;

      },

      "set": (mGetParams) => {
        var mParams = mGetParams;
        var mData = mParams['dta'];
        var mCb = mParams['cb'];

        /*
        @expected (dta)
        {
    "dta_mn": {
        "dta": {
            "accessToken": "your_access_token",
            "refreshToken": "your_refresh_token",
            "onBoardDetails": [
                {
                    "is_onBoarded": true,
                    "name": "Student",
                    "type": "skle_en_stud",
                    "profileInfo": {
                        "name": "Your Name",
                        "username": "yourname"
                    }
                }
            ]
        },
        "res_mn": {
            "type": "ok",
            "latency": "1ms",
            "msg": "Login Success!",
            "details": ""
        }
    }
}
        */

         //send callback..
         const mSend_cb = function(mCb_name){
          if(mCb!=undefined){
            if(mCb[mCb_name]!=undefined){
              mCb[mCb_name]();
            }
          }
        };

        //set..
        var onBoardDetails = mData['dta_mn']['dta']['onBoardDetails'];
        var dta = mData['dta_mn']['dta'];
        //modify.. (dta)..
        delete dta['onBoardDetails'];
        var mnLoginInfo = dta;
        //stringify..
        mnLoginInfo = JSON.stringify( mnLoginInfo );
        onBoardDetails = JSON.stringify( onBoardDetails );
        //console.log(mnLoginInfo);
        //console.log(onBoardDetails);

        //set....
        core_1mn['mLocalStorage']['store']['set'](
          {
            "key": "loginInfo.1mn",
            "val": mnLoginInfo
          }
        );
        core_1mn['mLocalStorage']['store']['set'](
          {
            "key": "products.onboardInfo.1mn",
            "val": onBoardDetails
          }
        );
        //send cb..
        mSend_cb("onLoad");

        
        /*
        USAGE
        core_1mn['mUserInfo']['set'](
        {
          "dta": { },

           "cb": {
             "onLoad": function(){
                alert("Stored");
              } 
           }

           }
        );*/

        

      },

    },

    "mUniqueId": {

    "mIndex": 0,
    "mGenerate": (getDigit) => {

      //generate unique id......
      //mGenerateUniqueId(11);
      var mId = "";
      var characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'; //(63)
      //console.log(characters.length);
      var mIdLength = getDigit;
      for (let i1 = 0; i1 < mIdLength; i1++) {
        const mRandInt = getRndInteger(0, 63);
        mId=mId+=characters.charAt(mRandInt);
      }
      //generate random integer....
      function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }
      

      //id generated success....
      core_1mn['mUniqueId']['mIndex']=core_1mn['mUniqueId']['mIndex']+=1;
      var mUniqueId = mId +"_"+ core_1mn['mUniqueId']['mIndex'];
      //console.log(mUniqueId);


      return mUniqueId;
     },

        
    },

    "mLoadReqJS": {

      "noOfTryagain": 2, //Maximum no of Script Reload.....
      "currTryagain": 0,

      "mJsArr": {},

      "include": (file, gObj1) => {
        /*console.log({
          "file": file,
          "gObj1": gObj1,
        });*/
        
         
        
        //check if already added in JS.....
        var mJsArr = core_1mn['mLoadReqJS']['mJsArr'];

        if(mJsArr.hasOwnProperty(file) == false){ //indexOf(file) == -1
            //****not added....(Continue to add)
             //Function to be executed
             var script  = document.createElement('script');
             script.src  = file;
             script.type = 'text/javascript';
             script.defer = true;
             document.getElementsByTagName('head').item(0).appendChild(script);
             /* Include Many js files */
             //include(url1_GVars+'js/api/MN/login.js');
             //return script; //(use this script to get Callback....)

             //add item to arr.....
             var mItem = {
                "status": 0, //0=>loading, 1=>onload
                "setCallback": () => {
                    var mMyKey = file;
                    var mNoOfTryagain = core_1mn['mLoadReqJS']['noOfTryagain'];
                    var mCurrTryagain = core_1mn['mLoadReqJS']['currTryagain'];


                     //onerror.....
                     script.onerror = function() {
                      //alert("Script onabort");
                      //set tryagain.....
                      if(mCurrTryagain < mNoOfTryagain){
                          //increase....
                          var mCountTryAgain = core_1mn['mLoadReqJS']['currTryagain']+=1;
                          //reload....(Script).....
                          var mUrl = mMyKey.split('?')[0];
                          core_1mn['mLoadReqJS'].include(mUrl+"?noOfTryagain="+mCountTryAgain);
                          
                      }else{
                        //max reload limit (reached)......
                         //refresh.....(Failed)
                         core_1mn['mIsAllLibsLoad'].set();
                      }

                    };

                    //onload.....
                    script.onload = function() {
                        //alert("Script onload");
                        //update status.....
                        var mUrl = mMyKey.split('?')[0];
                        core_1mn['mLoadReqJS']['mJsArr'][mUrl]['status'] = 1;
 
                        //console.log("Script onload: "+mUrl);

                        //store.....(loaded Success)
                        core_1mn['mIsAllLibsLoad']['mJS']['mNoOfSuccess']+=1;
                        core_1mn['mIsAllLibsLoad'].set();

                        mConf_gObj1(mUrl);

                    };

                    //here we config global(Object) of current script..
                    function mConf_gObj1(mUrl) {
                      if(gObj1==undefined){
                        return;
                      }
                      //add data..
                       eval(`
                       ${gObj1}["mScriptInfo"] = {
                        "path": "${mUrl}"
                       }
                       `);


                    }


                    //check JSON.....
                    //console.log(JSON.stringify(mJsArr));

                } 
             };
             //execute.....
             mItem['setCallback'] ();
             mJsArr[file] = mItem;

        }else{
            //already added.....
            //return 0;
            
            //check.....(status)
            if(mJsArr[file]['status']==1){
              //console.log("already added");
              //onload
              //store.....(loaded Success)
               core_1mn['mIsAllLibsLoad']['mJS']['mNoOfSuccess']+=1;
               core_1mn['mIsAllLibsLoad'].set();
            }


        }


      },
      

      "checkOrLoad": (mFile_Arr, mScriptInfo) => {
        //here we check a list of files are loaded or not.....
         //set vars....
         var mLoadSuccess = 0;
         //file array......
         /*var mFile_Arr = [
          url1_GVars+'js/api/MN/login.js',
          url1_GVars+'js/api/MN/login.js',
         ];*/ 

         for (let i1 = 0; i1 < mFile_Arr.length; i1++) {
           include(mFile_Arr[i1]);
         }

         //add data.....
         mScriptInfo['noOfReqFiles'] = mFile_Arr.length;
         mScriptInfo['mLoadSuccess'] = mLoadSuccess;
         //check.....
         if(mFile_Arr.length==mLoadSuccess){
           mScriptInfo['isAllFileLoaded'] = true;
          //ready.....
          console.log("mScriptInfo: "+JSON.stringify(mScriptInfo));
          return true;
         }else{
          mScriptInfo['isAllFileLoaded'] = false;
          //not ready....
          console.log("mScriptInfo: "+JSON.stringify(mScriptInfo));
          return false;
         }

         function include(file){
         if(core_1mn['mLoadReqJS']['mJsArr'].hasOwnProperty(file)==false){
          //file no added.....(need to add)....
          core_1mn['mLoadReqJS'].include(file);
         }else{
          //file already added.....(Check status)
          if(core_1mn['mLoadReqJS']['mJsArr'][file]['status']==1){
              //loaded success......
              mLoadSuccess+=1;
           }else{
              //loading in Progress....
              //console.log("loading in Progress....");
          }
          }
         }

      }

    },

    "mLoadReqHTML": {

      "noOfTryagain": 2, //Maximum no of Script Reload.....
      "currTryagain": 0,

      "mHTMLArr": {},

      "include": (mE1) => {

        //set vars....
        var mHtmlSrcTag = "mn1-html-src";
        var file = mE1.getAttribute(mHtmlSrcTag);
        var elmnt = mE1;
        
        //validate......
        if(file==null){
          //error....
          return;
        }

        //all ok....

        //check if already added in HTML.....
        var mHTMLArr = core_1mn['mLoadReqHTML']['mHTMLArr'];
        if(mHTMLArr.hasOwnProperty(file) == false){ //indexOf(file) == -1
            //****not added....(Continue to add)
             //Function to be executed
             /* Include Many HTML files */
             //include(url1_GVars+'css/api/MN/login.html');
             //return script; //(use this script to get Callback....)

             //add item to arr.....
             var mItem = {
                "status": 0, //0=>loading, 1=>onload
                "setCallback": () => {
                    var mMyKey = file;
                    var mNoOfTryagain = core_1mn['mLoadReqHTML']['noOfTryagain'];
                    var mCurrTryagain = core_1mn['mLoadReqHTML']['currTryagain'];


                    includeHTML();
                    function includeHTML() {
                     var mElmnt = elmnt;
                     var mFile = file;
                     var xhttp;
              

                      //set.....
                     if (mFile) {
                       /* Make an HTTP request using the attribute value as the mFile name: */
                       xhttp = new XMLHttpRequest();
                       xhttp.onreadystatechange = function() {
                         if (this.readyState == 4) {
                           if (this.status == 200) {
                             mElmnt.innerHTML = this.responseText;
                             //html loaded success......
                             //console.log('html loaded success');
                             mScript_onload(mElmnt);
                           }
                           if (this.status == 404) {
                             mElmnt.innerHTML = "Page not found.";
                             mScript_onerror(mElmnt);
                           }
                           /* Remove the attribute, and call this function once more: */
                          // mElmnt.removeAttribute(mHtmlSrcTag);
                           //includeHTML();
                         }
                       }
                       xhttp.open("GET", mFile, true);
                       xhttp.send();
                       /* Exit the function: */
                       return;
        
                     }
              

                   }


                    //onload.....
                    function mScript_onload(mElmnt) {
                      //alert("Script onload");
                        //update status.....
                        var mUrl = mMyKey.split('?')[0];
                        core_1mn['mLoadReqHTML']['mHTMLArr'][mUrl]['status'] = 1;

                        //store.....(loaded Success)
                        core_1mn['mIsAllLibsLoad']['mHTML']['mNoOfSuccess']+=1;
                        core_1mn['mIsAllLibsLoad'].set();

                         /* Remove the attribute, and call this function once more: */
                         mElmnt.removeAttribute(mHtmlSrcTag);
                      
                    }

                    //onerror.....
                    function mScript_onerror(mElmnt) {
                        //alert("Script onabort");
                        //set tryagain.....
                        if(mCurrTryagain < mNoOfTryagain){
                          //increase....
                          var mCountTryAgain = core_1mn['mLoadReqHTML']['currTryagain']+=1;
                          //reload....(Script).....
                          var mUrl = mMyKey.split('?')[0];

                          //update (attr).....
                          mElmnt.setAttribute(mHtmlSrcTag, mUrl+"&noOfTryagain="+mCountTryAgain );
                          core_1mn['mLoadReqHTML'].include(
                             //mUrl+"?noOfTryagain="+mCountTryAgain
                             mElmnt
                             ); 

                        }else{
                          //max reload limit (reached)......
                           //refresh.....(Failed)
                           core_1mn['mIsAllLibsLoad'].set();
                        }
                      
                    }




                    //check JSON.....
                    //console.log(JSON.stringify(mHTMLArr));

                } 
             };
             //execute.....
             mItem['setCallback'] ();
             mHTMLArr[file] = mItem;

        }else{
            //already added.....
            //return 0;

            //check.....(status)
            if(mHTMLArr[file]['status']==1){
              //console.log("already added");
              //onload
              //store.....(loaded Success)
               core_1mn['mIsAllLibsLoad']['mHTML']['mNoOfSuccess']+=1;
               core_1mn['mIsAllLibsLoad'].set();
            }
            
        }


      },

      "checkOrLoad": (mFile_Arr, mScriptInfo) => {
        //here we check a list of files are loaded or not.....
         //set vars....
         var mLoadSuccess = 0;
         //file array......
         /*var mFile_Arr = [
          url1_GVars+'css/api/MN/login.css',
          url1_GVars+'css/api/MN/login.css',
         ];*/ 

         for (let i1 = 0; i1 < mFile_Arr.length; i1++) {
           include(mFile_Arr[i1]);
         }

         //add data.....
         mScriptInfo['noOfReqFiles'] = mFile_Arr.length;
         mScriptInfo['mLoadSuccess'] = mLoadSuccess;
         //check.....
         if(mFile_Arr.length==mLoadSuccess){
           mScriptInfo['isAllFileLoaded'] = true;
          //ready.....
          console.log("mScriptInfo: "+JSON.stringify(mScriptInfo));
          return true;
         }else{
          mScriptInfo['isAllFileLoaded'] = false;
          //not ready....
          console.log("mScriptInfo: "+JSON.stringify(mScriptInfo));
          return false;
         }

         function include(file){
         if(core_1mn['mLoadReqHTML']['mHTMLArr'].hasOwnProperty(file)==false){
          //file no added.....(need to add)....
          core_1mn['mLoadReqHTML'].include(file);
         }else{
          //file already added.....(Check status)
          if(core_1mn['mLoadReqHTML']['mHTMLArr'][file]['status']==1){
              //loaded success......
              mLoadSuccess+=1;
           }else{
              //loading in Progress....
              //console.log("loading in Progress....");
          }
          }
         }

      }

    },

    "mLoadReqCSS": {

      "noOfTryagain": 2, //Maximum no of Script Reload.....
      "currTryagain": 0,

      "mCssArr": {},

      "include": (file) => {

        //check if already added in CSS.....
        var mCssArr = core_1mn['mLoadReqCSS']['mCssArr'];
        if(mCssArr.hasOwnProperty(file) == false){ //indexOf(file) == -1
            //****not added....(Continue to add)
             //Function to be executed
             var script  = document.createElement('link');
             script.href  = file;
             script.type = 'text/css';
             script.rel = "stylesheet";
             document.getElementsByTagName('head').item(0).appendChild(script);
             /* Include Many css files */
             //include(url1_GVars+'css/api/MN/login.css');
             //return script; //(use this script to get Callback....)

             //add item to arr.....
             var mItem = {
                "status": 0, //0=>loading, 1=>onload
                "setCallback": () => {
                    var mMyKey = file;
                    var mNoOfTryagain = core_1mn['mLoadReqCSS']['noOfTryagain'];
                    var mCurrTryagain = core_1mn['mLoadReqCSS']['currTryagain'];

                    //onload.....
                    script.onload = function() {
                        //alert("Script onload");
                        //update status.....
                        var mUrl = mMyKey.split('?')[0];
                        core_1mn['mLoadReqCSS']['mCssArr'][mUrl]['status'] = 1;

                        //store.....(loaded Success)
                        core_1mn['mIsAllLibsLoad']['mCss']['mNoOfSuccess']+=1;
                        core_1mn['mIsAllLibsLoad'].set();

                    };

                    //onerror.....
                    script.onerror = function() {
                        //alert("Script onabort");
                        //set tryagain.....
                        if(mCurrTryagain < mNoOfTryagain){
                            //increase....
                            var mCountTryAgain = core_1mn['mLoadReqCSS']['currTryagain']+=1;
                            //reload....(Script).....
                            var mUrl = mMyKey.split('?')[0];
                            core_1mn['mLoadReqCSS'].include(mUrl+"?noOfTryagain="+mCountTryAgain);
                        }else{
                          //max reload limit (reached)......
                           //refresh.....(Failed)
                           core_1mn['mIsAllLibsLoad'].set();
                        }
                    };

                    //check JSON.....
                    //console.log(JSON.stringify(mCssArr));

                } 
             };
             //execute.....
             mItem['setCallback'] ();
             mCssArr[file] = mItem;

        }else{
            //already added.....
            //return 0;

            //check.....(status)
            if(mCssArr[file]['status']==1){
              //console.log("already added");
              //onload
              //store.....(loaded Success)
               core_1mn['mIsAllLibsLoad']['mCss']['mNoOfSuccess']+=1;
               core_1mn['mIsAllLibsLoad'].set();
            }
            
        }


      },

      "checkOrLoad": (mFile_Arr, mScriptInfo) => {
        //here we check a list of files are loaded or not.....
         //set vars....
         var mLoadSuccess = 0;
         //file array......
         /*var mFile_Arr = [
          url1_GVars+'css/api/MN/login.css',
          url1_GVars+'css/api/MN/login.css',
         ];*/ 

         for (let i1 = 0; i1 < mFile_Arr.length; i1++) {
           include(mFile_Arr[i1]);
         }

         //add data.....
         mScriptInfo['noOfReqFiles'] = mFile_Arr.length;
         mScriptInfo['mLoadSuccess'] = mLoadSuccess;
         //check.....
         if(mFile_Arr.length==mLoadSuccess){
           mScriptInfo['isAllFileLoaded'] = true;
          //ready.....
          console.log("mScriptInfo: "+JSON.stringify(mScriptInfo));
          return true;
         }else{
          mScriptInfo['isAllFileLoaded'] = false;
          //not ready....
          console.log("mScriptInfo: "+JSON.stringify(mScriptInfo));
          return false;
         }

         function include(file){
         if(core_1mn['mLoadReqCSS']['mCssArr'].hasOwnProperty(file)==false){
          //file no added.....(need to add)....
          core_1mn['mLoadReqCSS'].include(file);
         }else{
          //file already added.....(Check status)
          if(core_1mn['mLoadReqCSS']['mCssArr'][file]['status']==1){
              //loaded success......
              mLoadSuccess+=1;
           }else{
              //loading in Progress....
              //console.log("loading in Progress....");
          }
          }
         }

      }

       

    }, 

    "mIsAllLibsLoad": {

      "mAllLibsCallback": null,

      "mJS": {
        "mNoOfSuccess": 0,
        "mNoOfTotal": 0, //-1
      },

      "mCss": {
        "mNoOfSuccess": 0,
        "mNoOfTotal": 0,
      },

      "mHTML": {
        "mNoOfSuccess": 0,
        "mNoOfTotal": 0,
      },


      "set": () => {

        //check if callback not null.....
        if(core_1mn['mIsAllLibsLoad']['mAllLibsCallback']==null){
          //error (no callback registered)......
          console.log("error (no callback registered)......");
          return;
        }

        //set vars....
        var mJS = core_1mn['mIsAllLibsLoad']['mJS'];
        var mCss = core_1mn['mIsAllLibsLoad']['mCss'];
        var mHTML = core_1mn['mIsAllLibsLoad']['mHTML'];

        //console.log( "mJS: " + core_1mn['mIsAllLibsLoad']['mJS']['mNoOfTotal']);
        //console.log( "mJS: " + core_1mn['mIsAllLibsLoad']['mJS']['mNoOfSuccess']);
        //console.log("mCss: "+ core_1mn['mIsAllLibsLoad']['mCss']['mNoOfTotal']);

        if( mJS['mNoOfSuccess']==mJS['mNoOfTotal']
         && mCss['mNoOfSuccess']==mCss['mNoOfTotal'] //(Ignore (uses Cache))
         && mHTML['mNoOfSuccess']==mHTML['mNoOfTotal']  //(Ignore (uses Cache))
         ){  

          //set callback..... 
          //console.log('onLoad');
          core_1mn['mIsAllLibsLoad']['mAllLibsCallback'].onLoad();

          //reset....
          mReset(); 


        }else{
          //check error......
          mCheck_Error();
          function mCheck_Error() {
            //set vars....
            var mJS = core_1mn['mLoadReqJS'];
            var mCss = core_1mn['mLoadReqCSS'];
            var mHTML = core_1mn['mLoadReqHTML'];

            if(mJS['currTryagain']==mJS['noOfTryagain'] ||
            mCss['currTryagain']==mCss['noOfTryagain'] || 
            mHTML['currTryagain']==mHTML['noOfTryagain']){
              //error......
              //set callback..... 
              //console.log('onError');
              core_1mn['mIsAllLibsLoad']['mAllLibsCallback'].onError();
              
              //reset....
              mReset(); 

            }
          }


        }


        //reset.....
        function mReset() {

          console.log({

            "JS": {
              "mNoOfSuccess": mJS['mNoOfSuccess'],
              "mNoOfTotal": mJS['mNoOfTotal'], 
             },

             "CSS": {
              "mNoOfSuccess": mCss['mNoOfSuccess'],
              "mNoOfTotal": mCss['mNoOfTotal'], 
             },

             "HTML": {
              "mNoOfSuccess": mHTML['mNoOfSuccess'],
              "mNoOfTotal": mHTML['mNoOfTotal'], 
             },

          });

          //reset....
          core_1mn['mIsAllLibsLoad']['mAllLibsCallback'] = null;
          //(JS)
          core_1mn['mIsAllLibsLoad']['mJS']['mNoOfSuccess'] = 0;
          core_1mn['mIsAllLibsLoad']['mJS']['mNoOfTotal'] = 0; //-1

          //(CSS)
          core_1mn['mIsAllLibsLoad']['mCss']['mNoOfSuccess'] = 0;
          core_1mn['mIsAllLibsLoad']['mCss']['mNoOfTotal'] = 0; //-1
          //(HTML)
          core_1mn['mIsAllLibsLoad']['mHTML']['mNoOfSuccess'] = 0;
          core_1mn['mIsAllLibsLoad']['mHTML']['mNoOfTotal'] = 0; //-1      


        }


      }



    },

    "mRand": {
      //random

      "1": {
        //random data from (array)
        "set": (mGetParams) => {
          var mParams = mGetParams;
          var mArr1 = mParams['arr1'];

          // Returns a random integer from 0 to ((mArr1.length-1) (eg. 2)):
          var mRandInt = Math.floor(Math.random() * mArr1.length);  //((mArr1.length) (eg. 3))
          var mRandDta = mArr1[mRandInt];
          //console.log("mRandDta: "+mRandDta);
          return mRandDta;
        }

      }

    },

    //typo....
    "mTypo": {

      "auto": (mGetParams) => {
        var mParams = mGetParams;
        var mStr1 = mParams['str1'];
        var mMatch = mParams['match'];
        var mEnv = core_1mn['conf']['mEnv'];

        //data.....
        var mAuto = {
          "0": {
            "set": () => {
              if(mStr1==mMatch){
                return mStr1=mStr1+=core_1mn['mRand']['1'].set({"arr1": ["","typo1","typo2"]});
              }else{
                return mStr1;
              }
             }
          },
          "1": {
            "set": () => {
              //direct
              return mStr1;
            }
          },
        };
        return mAuto[mEnv].set();
        
      }

    },


    //We can load HTML, CSS, JAVASCRIPT with this (lib)..
    "mLoadReqLibs": {

      "set": (mGetParams) => {
       
        //set vars.....
        var mParams = mGetParams;
        var mCss = mParams['mCss']!=undefined ? mParams['mCss'] : []; //(array)
        var mJS = mParams['mJS']!=undefined ? mParams['mJS'] : []; //(array) 
        var mHTML = mParams['mHTML']!=undefined ? mParams['mHTML'] : {}; //(object) @req {"mE1": "element", "mAttr1": "mn1-html-src"}
        var mAllLibsCallback = mParams['mAllLibsCallback']!=undefined ? mParams['mAllLibsCallback'] : null;


        //reset.....(currTryagain)
        core_1mn['mLoadReqJS']['currTryagain'] = 0;
        core_1mn['mLoadReqCSS']['currTryagain'] = 0;
        core_1mn['mLoadReqHTML']['currTryagain'] = 0;

       
        //filter.....(libs (ARRAY)) 
        mfilter_JS_ARR();
        function mfilter_JS_ARR() {
          var nNew_ARR = {};
          for (let i1 = 0; i1 < Object.keys(core_1mn['mLoadReqJS']['mJsArr']).length; i1++) {
            const mCurrI_key = Object.keys(core_1mn['mLoadReqJS']['mJsArr'])[i1];
            var mStatus = core_1mn['mLoadReqJS']['mJsArr'][mCurrI_key]['status'];
            
            if(mStatus==1){
              //onload
              nNew_ARR[mCurrI_key] = core_1mn['mLoadReqJS']['mJsArr'][mCurrI_key]; //(add)
            }

          }
          //update.....
          core_1mn['mLoadReqJS']['mJsArr'] = nNew_ARR;
        }
        mfilter_CSS_ARR();
        function mfilter_CSS_ARR() {
          var nNew_ARR = {};
          for (let i1 = 0; i1 < Object.keys(core_1mn['mLoadReqCSS']['mCssArr']).length; i1++) {
            const mCurrI_key = Object.keys(core_1mn['mLoadReqCSS']['mCssArr'])[i1];
            var mStatus = core_1mn['mLoadReqCSS']['mCssArr'][mCurrI_key]['status'];
            
            if(mStatus==1){
              //onload
              nNew_ARR[mCurrI_key] = core_1mn['mLoadReqCSS']['mCssArr'][mCurrI_key]; //(add)
            }

          }
          //update.....
          core_1mn['mLoadReqCSS']['mCssArr'] = nNew_ARR;
        }
        mfilter_HTML_ARR();
        function mfilter_HTML_ARR() {
          var nNew_ARR = {};
          for (let i1 = 0; i1 < Object.keys(core_1mn['mLoadReqHTML']['mHTMLArr']).length; i1++) {
            const mCurrI_key = Object.keys(core_1mn['mLoadReqHTML']['mHTMLArr'])[i1];
            var mStatus = core_1mn['mLoadReqHTML']['mHTMLArr'][mCurrI_key]['status'];
            
            if(mStatus==1){
              //onload
              nNew_ARR[mCurrI_key] = core_1mn['mLoadReqHTML']['mHTMLArr'][mCurrI_key]; //(add)
            }

          }
          //update.....
          core_1mn['mLoadReqHTML']['mHTMLArr'] = nNew_ARR;
        }


        //set vars.....
        var mReq_Libs = {
          "mCss": [
              /*"css/core_1mn.css",*/
          ],
          "mJS": [
              /*"js/mLocalStorage.js",*/
          ],

          "mHTML": [
             /* Add Elements
             <div mn1-html-src="http://www.localhost.com/html/dialogs/dialog_english_tool_1.html"></div>
             */
          ]          
        };

        //set vars....
        //js.....
        mReq_Libs['mJS'] = mJS;
        //css....
        mReq_Libs['mCss'] = mCss;
        //html....
        var mHtmlSrcTag = mHTML['mAttr1']!=undefined ? mHTML['mAttr1'] : null;
        var mBody_HTML = mHTML['mE1']!=undefined ? mHTML['mE1'] : [];
        //"mE1": document.querySelectorAll(`[mn1-html-src]`), "mAttr1": "mn1-html-src"
       

         
         //set (All Libs) Callback......
         //(mJS)
         core_1mn['mIsAllLibsLoad']['mJS']['mNoOfTotal'] = mReq_Libs['mJS'].length;
         core_1mn['mIsAllLibsLoad']['mCss']['mNoOfTotal'] = mReq_Libs['mCss'].length;
         core_1mn['mIsAllLibsLoad']['mHTML']['mNoOfTotal'] = mBody_HTML.length;


         //set callback
         var mCallback = {
             "onLoad": () => {
                console.log("onLoad");

                //onload.......
                /*window.onload = function() {
                  mStart();
                };*/
                //direct.....
                mStart();

                //start....
                function mStart() {
                   //alert("All libs loaded....");
                   console.log("All Required libs loaded....");
                   //************start......
                   //send (callback)
                   if(mAllLibsCallback!=null){
                      setTimeout(() => {
                        mAllLibsCallback.onLoad();
                      }, 200);
                   }

                }

                //reload libs..
                function mReloadLibs() {
                  core_skle_en['reload']['set']();
                }
                //mReloadLibs(); //--------TEMPORARY DISABLE-------//

                 
             },
             "onError": () => {
               console.log("onError");
               console.log("Some Required libs are not loaded....");
               //send (callback)
               if(mAllLibsCallback!=null){
                 mAllLibsCallback.onError();
               }

             }
         };
         core_1mn['mIsAllLibsLoad']['mAllLibsCallback'] = mCallback;




            //load Css....
            mLoadCss();
            function mLoadCss() {
                var mCss = mReq_Libs['mCss'];
                for (let i1 = 0; i1 < mCss.length; i1++) {
                    const mCurrFilePath = mCss[i1];
                    //console.log(mCurrItem);
                    //css......
                    var url1_GVars = core_1mn['gVars']['mUrls']['set']("url1");
                    var mFile = url1_GVars + mCurrFilePath;
                    core_1mn.mLoadReqCSS.include(mFile);

                }

            }

            //load HTML....
            mLoadHTML();
            function mLoadHTML() {
                 for (let i1 = 0; i1 < mBody_HTML.length; i1++) {
                   var mCurrE = mBody_HTML[i1];
                   //console.log(mCurrE);
                   //re-write attr.....
                   var url1_GVars = core_1mn['gVars']['mUrls']['set']("url1");
                   mCurrE.setAttribute(mHtmlSrcTag, 
                   url1_GVars + mCurrE.getAttribute(mHtmlSrcTag));

                   //add in curr HTML (Arr).....
                   mReq_Libs['mHTML'].push(mCurrE);

                   //html......
                   var mE1 = mCurrE;
                   core_1mn.mLoadReqHTML.include(mE1);

                }
                //console.log(mReq_Libs['mHTML']);
 
            } 

            //load JS..... 
            if(mReq_Libs['mHTML'].length>0 && mReq_Libs['mCss'].length>0 && mReq_Libs['mJS'].length>0){
              document.addEventListener("DOMContentLoaded", function(){
                console.log("DOMContentLoaded");
                mLoadJS();
              });
            }else{
              //direct.....
              mLoadJS();
            }
            function mLoadJS() {
              var mJS = mReq_Libs['mJS'];
              for (let i1 = 0; i1 < mJS.length; i1++) {
                  const mFileObj = mJS[i1];

                  //js......
                  //var mFile = url1_GVars + mFile;
                  var url1_GVars = core_1mn['gVars']['mUrls']['set']("url1");
                  var mFile = mFileObj['src']!=undefined ? mFileObj['src'] : mFileObj; //(string)
                  mFile = url1_GVars + mFile;
                  var gObj1 = mFileObj['gObj1']; //(string)
                  //console.log(mFile);


                  //****case (Typo)            [Manuall Scenario]
                  /*mFile = url1_GVars + core_1mn['mTypo']
                  .auto({"str1": mFile, "match": "js/api/MN/login.js"});*/

                  core_1mn.mLoadReqJS.include(mFile, gObj1);
              }

               

            }



            /*
            USAGE
          
              //set vars.....
        var mReq_Libs = {
          "mCss": [
              "css/core_1mn.css", 
              "css/main/dashboard-web/view.css",
          ],
          "mJS": [
              "js/mLocalStorage.js",  
              //core libs.....
              "libs/axios-v3/axios.min.js",
              "libs/ajv/8.11.0/ajv7.min.js",   
          ],
          "mHTML": {
            "mE1": document.querySelectorAll(`[mn1-html-src]`), 
            "mAttr1": "mn1-html-src"
          }    
        };

 

         //set callback
         var mAllLibsCallback = {
             "onLoad": () => {
                 var mDta = {
                    "mStartFunc": mStart_dashboard,
                 };

                 dta_dashboard_ViewJS.set(mDta); 
             },
             "onError": () => {
                
             }
         };

         //set......
         core_1mn['mLoadReqLibs'].set(
            {
                "mCss": mReq_Libs['mCss'],
                "mJS": mReq_Libs['mJS'],
                "mHTML": mReq_Libs['mHTML'],
                "mAllLibsCallback": mAllLibsCallback
            }
         );


            */


      }

    },


    "mDateTime": {
      //https://medium.com/easyread/understanding-about-rfc-3339-for-datetime-formatting-in-software-engineering-940aa5d5f68a
      //2019-10-12T07:20:50.52

      "mDT": {

          "set": () => {
              //datetime......
              var mDateTime = new Date();
              return mDateTime;
          },

      },

      "mStrTo_DT": {

        "set": (mGetParams) => {
            //set vars.....
            var mParams = mGetParams;
            var mStrDate = mParams['date'];
            //cb..
            var mCb = mParams['cb'];

            //send callback..
            var mSend_cb = function(mCb_name, data){
              if(mCb!=undefined){
                if(mCb[mCb_name]!=undefined){
                  mCb[mCb_name](data);
                }
              }
            };

            //datetime......
            var mDateTime = null;
            //check error..
            try {
              mDateTime = new Date(mStrDate);
              mSend_cb("onLoad", {
                "0": mDateTime
              });
            } catch (error) {
              mSend_cb("onErr", `Error: in (mStrTo_DT)`);
            }

            //DEPRECATED (Start)
            if(mDateTime=="Invalid Date"){
              //error.....
              if(mParams.hasOwnProperty("mErrArr")){
                  //need to store....
                  mParams['mErrArr'].push(
                      {
                          "name": "mStrTo_DT",
                          "err": "Invalid Date"
                      }
                  );
              }
            }//DEPRECATED (End)

            return mDateTime;

            /*USAGE
            core_1mn['mDateTime']['mStrTo_DT']['set'](
                                                     { 
                                                      "date": "Thu Jan 26 2023 22:23:04 GMT+0530 (India Standard Time)",
                                                      "cb": {
                                                          "onLoad": function(data){
                                                              var m0 = data['0']; //date(OBJ)
                                                              console.log(m0);
                                                          },
                                                          "onErr": function(){

                                                          },
                                                      }
                                                     },
                                                  );
            
            */

        },

     },

    },

    

    "mYear": {

      "mCurrYear": {

          "set": () => {
              // Get current Year
              const mCurrentYear = new Date().getFullYear();
              //console.log(currentYear);
              return mCurrentYear;
          }

      },

      "mIncreaseYear": {

          "set": (mGetParams) => {
              var mParams = mGetParams;
              var mIncVal = mParams['mIncVal'];
              // Get increase Year
              const mYear = new Date().getFullYear() + mIncVal;
              //console.log(mYear);
              return mYear;
          }

      },

      "mDecreaseYear": {

          "set": (mGetParams) => {
              var mParams = mGetParams;
              var mDecreVal = mParams['mDecreVal'];
              // Get increase Year
              const mYear = new Date().getFullYear() - mDecreVal;
              //console.log(mYear);
              return mYear;
          }

      },

    },

    "mDay": {

      "mCurrDay": {

          "set": () => {
              // Get current mDay
              const mDay = new Date().getDate();
              //console.log(mDay);
              return mDay;
          }

      },

      "mIncreaseDay": {

          "set": (mGetParams) => {
              var mParams = mGetParams;
              var mIncVal = mParams['mIncVal'];
              // Get increase mDay
              const mDay = new Date().getDate() + mIncVal;
              //console.log(mDay);
              return mDay;
          }

      },

      "mDecreaseDay": {

          "set": (mGetParams) => {
              var mParams = mGetParams;
              var mDecreVal = mParams['mDecreVal'];
              // Get increase mDay
              const mDay = new Date().getDate() - mDecreVal;
              //console.log(mDay);
              return mDay;
          }

      },

    },

    "mMonth": {

      "mCurrMonth": {

          "set": () => {
              // Get current mMonth
              const mMonth = new Date().getMonth();
              //console.log(mMonth);
              return mMonth;
          }

      },

      "mIncreaseMonth": {

          "set": (mGetParams) => {
              var mParams = mGetParams;
              var mIncVal = mParams['mIncVal'];
              // Get increase mMonth
              const mMonth = new Date().getMonth()+ mIncVal;
              //console.log(mMonth);
              return mMonth;
          }

      },

      "mDecreaseMonth": {

          "set": (mGetParams) => {
              var mParams = mGetParams;
              var mDecreVal = mParams['mDecreVal'];
              // Get increase mMonth
              const mMonth = new Date().getMonth() - mDecreVal;
              //console.log(mMonth);
              return mMonth;
          }

      },

    },


    "test": () => {

      function mInclude(file) {
        var script  = document.createElement('script');
        script.src  = file;
        script.type = 'text/javascript';
        script.defer = true;
        document.getElementsByTagName('head').item(0).appendChild(script);
        return script;
    }
    
    
    
    var mLib1 = "js/core_1mn.js";
    //need to load....
    var mHostName = window.location.hostname; //www.xyz.com
    var mProtocol= window.location.protocol;  // Returns:'https:'
    var mPort = window.location.port; // Returns:'443'
    if(parseInt(mPort)){
        mPort = ":"+mPort;
    }else{
        mPort = ""; //wmpty
    }
    var mPath = mProtocol+"//"+mHostName+mPort+"/" + mLib1;
    console.log(mPath);

    mInclude( mPath ).onload = function(){
        alert("loaded")
        //mLoadNow();
    };
    
    
    
    

    },

    "mClearLayout": (getLayout) => {
      if(getLayout!=null){
           //console.log("Clear");
           //remove old content
           var rOld_CORRECT = getLayout;
           var rOld_child = rOld_CORRECT.lastElementChild;
           while (rOld_child) {
            rOld_CORRECT.removeChild(rOld_child);
            rOld_child = rOld_CORRECT.lastElementChild;
           }
      }
    },


    "tooltip": {

      "1": {

        "set": (mE1, mGetParams) => {
          //@requirements(mE1)
          /*
          1 - mE1.style.position = "relative"
          */
         //@additional....
         var mParams = mGetParams!=undefined ? mGetParams : {};
         var mCallback = mParams['mCallback']!=undefined ? mParams['mCallback'] : null;

           //mDiv....(mTooltip)
           var mDiv = document.createElement("mTooltip");

           mDiv.style.display = "none";
           mDiv.style.position = "absolute";
           mDiv.style.bottom = "0";
           mDiv.style.left = "0";
           mDiv.style.backgroundColor = "rgba(0,0,0,0.7)";
           mDiv.style.minWidth = "5vw";
           mDiv.style.height = "4vh";
           mDiv.style.borderRadius = "0.5vh";
           //mDiv.style.marginBottom = "1.5vh";
           //mDiv.style.marginLeft = "1.5vw";

           mE1.appendChild(mDiv);


           //content....
           var mTtContent = document.createElement("div");
           mTtContent.setAttribute("tag_n", "item");
           mTtContent.style.width = "100%";
           mTtContent.style.height = "100%";
           mTtContent.style.display = "flex";
           mTtContent.style.justifyContent = "center";
           mTtContent.style.alignItems = "center";
           mDiv.appendChild(mTtContent);


           mE1.onmouseover = function() {
            mDiv.style.display = "block";
            mSend_callback("onmouseover");
           };
           mE1.onmouseout = function() {
            mDiv.style.display = "none";
            mSend_callback("onmouseout");
           };


           //send callback.....
           function mSend_callback(cb_name) {
             if(mCallback!=null){
              mCallback.set({
                "cb_name": cb_name,
                "mE1": mE1
              });
             }
           }


           return mDiv;

        }

      },


      "2": {

        "set": (mGetParams) => {
          //@requirements(mE1)
          /*
          1 - mE1.style.position = "relative"
          */
         //@additional....
         var mParams = mGetParams!=undefined ? mGetParams : {};
         var mE1 = mParams['mE1']!=undefined ? mParams['mE1'] : null;
         var mCb = mParams['cb']!=undefined ? mParams['cb'] : null;
         var mCaret = mParams['0']!=undefined ? mParams['0'] : null; //(caret info)
         var mTt_content = mParams['1']!=undefined ? mParams['1'] : {}; //(tooltip content info)
         var mTt = mParams['2']!=undefined ? mParams['2'] : {}; //(tooltip info)

          

           var mVertiDiv = null;
           mSet_tt();
           function mSet_tt() {
           var m0 = mTt['0']!=undefined ? mTt['0'] : "0 0 0 0"; //margin
           var m1 = mTt['1']!=undefined ? mTt['1'] : "4vh"; //height
           var m2 = mTt['2']!=undefined ? mTt['2'] : "10vw"; //minWidth

            //mVertiDiv....(mTooltip)
           mVertiDiv = document.createElement("mTooltip");

           mVertiDiv.style.display = "none";
           //set....
           mVertiDiv.setAttribute("tt_orien", "0"); 

           mVertiDiv.style.position = "absolute";
           mVertiDiv.style.bottom = "0";
           mVertiDiv.style.left = "0";
           mVertiDiv.style.zIndex = "1";
           mVertiDiv.style.minWidth = m2;
           mVertiDiv.style.height = m1;
           mVertiDiv.style.margin = m0; //0 0 -2.5vh 0vw
           mE1.appendChild(mVertiDiv); 
            
           } 

         
           var mTtContent = null;
           mSet_tt_content();
           function mSet_tt_content() {
           var m0 = mTt_content['0']!=undefined ? mTt_content['0'] : "rgba(0,0,0,0.7)"; //background color
           var m1 = mTt_content['1']!=undefined ? mTt_content['1'] : "0.3vh solid rgba(34,34,34,0.3)"; //border


           //content....
           mTtContent = document.createElement("div");
           mTtContent.setAttribute("tag_n", "tt_content");
           mTtContent.style.minWidth = "100%";
           mTtContent.style.height = "100%";
           mTtContent.style.display = "flex";
           //mTtContent.style.justifyContent = "center";
           mTtContent.style.alignItems = "center";
           mTtContent.style.backgroundColor = m0;  //rgba(0,0,0,0.7)
           mTtContent.style.borderRadius = "0.5vh";
           mTtContent.style.boxShadow = "0 0.3vh 0.4vh 0 rgba(0,0,0,0.2)";
           mTtContent.style.border = m1;

           mVertiDiv.appendChild(mTtContent);
            
           }



           if(mCaret!=null){
            mSet_caret();
          }
         function mSet_caret() {
          var m0 = mCaret['0']!=undefined ? mCaret['0'] : 0; //caret (pos) [B, T, L, R]
          var m1 = mCaret['1']!=undefined ? mCaret['1'] : "0 0 0 0"; //caret (margin) [T, R, B, L]
          var m2 = mCaret['2']!=undefined ? mCaret['2'] : mTtContent.style.backgroundColor; //caret (background-color) 
          var m3 = mCaret['3']!=undefined ? mCaret['3'] : "0.4vw"; //caret (size) 

          //update....
          mVertiDiv.setAttribute("tt_orien", m0); 


           //mCaretDiv....
         var mCaretDiv = document.createElement("div");
         mCaretDiv.setAttribute("tag_n", "caretdiv");
         mCaretDiv.style = `
         width: ${m3};
         border-width: ${m3};
         border-style: solid;
         `; //rgba(255,255,255,1.0)
         mCaretDiv.style.margin = m1;
         

         if(m0==0){
           mVertiDiv.appendChild(mCaretDiv);
           mCaretDiv.style.borderColor = `${m2} transparent  transparent transparent`; 

         }
         if(m0==1){
          mVertiDiv.insertBefore(mCaretDiv, mTtContent);
          mCaretDiv.style.borderColor = `transparent  transparent ${m2} transparent`;
          
         }
         if(m0==2){
          mVertiDiv.insertBefore(mCaretDiv, mTtContent);
          mCaretDiv.style.borderColor = `transparent ${m2} transparent transparent`;
          mVertiDiv.style.display = "flex";
          mCaretDiv.style.height = "0.5vw";
         }
         if(m0==3){
          mVertiDiv.appendChild(mCaretDiv);
          mCaretDiv.style.borderColor = `transparent transparent transparent ${m2}`;
          mVertiDiv.style.display = "flex";
          mCaretDiv.style.height = "0.5vw";
         }
          
         }


           if(mCb!=null){
             //send callback.....
             mSend_cb();
           }
           function mSend_cb() {
            mE1.onmouseover = function() {
              if(mCb['onmouseover']!=undefined){
                mCb.onmouseover();
              }
             };
             mE1.onmouseout = function() {
              if(mCb['onmouseout']!=undefined){
                mCb.onmouseout();
              }
             };
           }

           //events.....
           var mEvents = { 
            "tt": {
              "e": mVertiDiv, //element
              "show": (mGetE1, mMsgDiv) => {
                mGetE1 = mEvents.tt.e; //Note: We are overriding..//You can pass any [VALUE]
                //alert("show");
                var tt_orien = mGetE1.getAttribute("tt_orien");
                if(tt_orien==0 || tt_orien==1){
                  //use (block)
                  mSet_item("block");
                }else{
                  //use (flex)
                  mSet_item("flex");
                }
                function mSet_item(mDta1) {
                  var tt_content = mGetE1.querySelectorAll("[tag_n=tt_content]")[0];
                  tt_content.innerHTML = ""; //reset..
                  //set content....
                  tt_content.appendChild(mMsgDiv['note']['e']);
                  mMsgDiv['note'].show();
                  //show....
                  mGetE1.style.display = mDta1;
                }
              },
              "hide": (mGetE1) => {
                mGetE1 = mEvents.tt.e; //Note: We are overriding..//You can pass any [VALUE]
                //alert("hide");
                mGetE1.style.display = "none";
              },
            }

           };

           return mEvents;

           /*
           USAGE
           //Tooltip....
                var mTooltip = core_1mn['tooltip']['2'].set(
                {
                  "mE1": mDivRoot,
                  //"mCallback": mCallback
                  "0": {
                    "0": 1,
                    "1": "0 0 0 15%",
                    "2": "#fc8691",
                    "3": "0.3vw"
                  },
                  "1": {
                    "0": "#fafafa",
                    "1": "0.21vh solid #fc8691",
                  },
                  "2": {
                    "0": "0 0 -3.8vh -1.5vw",
                    "1": "4.4vh",
                    "2": "15vw",
                  },

               });

               mTooltip['tt'].show(mTooltip['tt']['e']);

               ----------OR-----------
                 let mNote = document.createElement("div");
                                            mNote.innerHTML = "mMsgDiv";
                                            let mMsgDiv = {
                                                "note": {
                                                    "e": mNote,
                                                    "show": () => {
                                                        console.log(`mNote cb`);
                                                    }
                                                }
                                            };
                                            var mTooltip = core_1mn['tooltip']['2'].set(
                                                {
                                                  "mE1": mE, //mDivRoot,
                                                  //"mCallback": mCallback
                                                  "0": {
                                                    "0": 1,
                                                    "1": "0 0 0 15%",
                                                    "2": "#fc8691",
                                                    "3": "0.3vw"
                                                  },
                                                  "1": {
                                                    "0": "#fafafa",
                                                    "1": "0.21vh solid #fc8691",
                                                  },
                                                  "2": {
                                                    "0": "0 0 -3.8vh -1.5vw",
                                                    "1": "4.4vh",
                                                    "2": "15vw",
                                                  },
                                
                                               });
                                
                                               mTooltip['tt'].show(mTooltip['tt']['e'],
                                               mMsgDiv);



           */


        }

      },



    },


    "btn": {
      //https://uxdesign.cc/button-design-user-interface-components-series-85243b6736c7
      //https://uxdesign.cc/ui-cheat-sheets-buttons-7329ed9d6112

      "mUtils": { 

      },

      //-----Will be REMOVE soon----//
      "disable": {

        "set": (mBtn) => {
          mBtn.disabled = true;
          mBtn.style.position = "relative";


          //mDiv....(Disable Layer)
          var mDiv = document.createElement("mDisableLayer");

          mDiv.style.position = "absolute";
          mDiv.style.top = "0";
          mDiv.style.left = "0";
          mDiv.style.backgroundColor = "rgba(255,255,255,0.5)";
          mDiv.style.width = "100%";
          mDiv.style.height = "100%";
          mDiv.style.borderRadius = "0.5vh";

          mDiv.setAttribute("mElemName", "mDisableLayer");

          mBtn.appendChild(mDiv);

          return mBtn;

        }

      },
      "enable": {

        "set": (mBtn) => {
          mBtn.disabled = false;
          mBtn.style.position = "relative";

          //mDiv....(Disable Layer)
          var mDiv = mBtn.querySelectorAll("mDisableLayer")[0];
          if(mDiv!=null){
            //remove layer.....
            mDiv.remove();  
          }

          return mBtn;

        }

      },

      //-----New-----//
      "1": {  //Filled Btn..
        "conf": [ //configuration..
          {
            "name": "DEFAULT",
            "0": "#343434", //bg color..(1) [contained]
          },
          {
            "name": "INFO",
            "0": "rgba(14,112,205, 1.0)", //bg color..(1) [contained]
            "1": "rgba(14,112,205, 0.06)", //bg color..(2)
            "2": "rgba(14,112,205, 0.5)", //br color..(1) [outlined]
          },
          {
            "name": "WARN",
            "0": "#ffdc5c" //bg color..(1) [contained]
          },
          {
            "name": "SUCCESS",
            "0": "#009858" //bg color..(1) [contained]
          },
          {
            "name": "DANGER",
            "0": "#e23337" //bg color..(1) [contained]
          },

        ],
        "set": function(mGetParams){
          var mParams = mGetParams;
          var mW = mParams['w']!=undefined ? mParams['w'] : "7vw";
          var mH = mParams['h']!=undefined ? mParams['h'] : "4vh";
          var mTxt = mParams['txt']!=undefined ? mParams['txt'] : {"0": "Button", "1": "1.3vh" };
          var mIco = mParams['ico']!=undefined ? mParams['ico'] : {"0": "sample.svg", "1": "1.3vh", "2": "1.3vh", //"3": "rgba(255,255,255, 1.0)" 
          };
          var mE1 = mParams['e1']; //@req
          var mCb = mParams['cb']; //@req
          var mPosH = mParams['posH']!=undefined ? mParams['posH'] : 0;
          var mTyp = mParams['typ']!=undefined ? mParams['typ'] : 0; //type ["DEFAULT", "INFO", "WARN", "SUCCESS", "DANGER"]
          var mVari = mParams['vari']!=undefined ? mParams['vari'] : 0; //variant ["contained", "outlined", "text"]

          //set..
          var mConf = core_1mn["btn"]["1"]["conf"]; //Set button Conf..
          if (mConf[mTyp]==undefined) {
            //invalid (typ)..
            alert(`invalid (typ) found..Available (typ):  ${Object.keys(mConf)}`)
          }else {
            //set.. 
            mConf = mConf[mTyp];
          }


          //send callback..
          function mSend_cb(mCb_name, data) {
            if(mCb!=undefined){
              if(mCb[mCb_name]!=undefined){
                mCb[mCb_name] (data);
              }
            }
          }



          var mJustifyContent = ["start", "center", "end"];
          //set....
          var mBtnViewer = document.createElement("btn_viewer_1mn");
          mBtnViewer.style.display = "flex";
          mBtnViewer.style.justifyContent = mJustifyContent[mPosH]; //0=>left, 1=>center, 2=>right
          mE1.appendChild(mBtnViewer);  

          //set.....
          var mBtnHolder = document.createElement("btn_holder_1mn");
          mBtnHolder.style.width = mW;
          mBtnHolder.style.height = mH;
          mBtnHolder.style.position = "relative";
          mBtnHolder.style.display = "flex";
          mBtnHolder.style.justifyContent = "center";
          mBtnHolder.style.alignItems = "center";
          mBtnViewer.appendChild(mBtnHolder);  

           //mBtn......
           var mBtn = document.createElement("btn_1mn");
           mBtn.id = core_1mn['mUniqueId'].mGenerate(16);
           mBtn.style.position = "absolute";

           mBtn.style.display = "flex";
           mBtn.style.justifyContent = "center";
           mBtn.style.alignItems = "center";
           

           mBtn.style.width = mBtnHolder.style.width;
           mBtn.style.height = mBtnHolder.style.height;
           if (mVari==0) {
              mBtn.style.boxShadow = "0vh 0.08vh 0vh 0vh #fff6af"; //0px 1px 0px 0px #fff6af
              mBtn.style.background = `linear-gradient(to bottom, ${mConf['0']} 5%, rgba(255,255,255,0.3) 100%)`;
              mBtn.style.backgroundColor = mConf['0'];
              mBtn.style.outline = `0.09vh solid ${mConf['0']}`; //1px solid #1760a3
           }
           mBtn.style.borderRadius = "0.7vh"; //6px
           if (mVari==1) {
             mBtn.style.outline = `0.09vh solid ${mConf['2']}`; //1px solid #1760a3
           }

           mBtn.style.cursor = "pointer"; 
           //mBtn.style.fontWeight = "bold";
           //mBtn.style.padding = "0.7vh 1.7vw";

           //events.....
          mBtn.onmouseover = function(){
            var mCurrItemId = this.id;
            var mCurrItem = document.getElementById(mCurrItemId);
            if (mVari==0) {
              mCurrItem.style.background = `linear-gradient(to bottom, rgba(255,255,255,0.3) 5%, ${mConf['0']} 100%)`;
              mCurrItem.style.backgroundColor = mConf['0'];
            }else {
              mCurrItem.style.backgroundColor = mConf['1'];
            }
            if (mVari==1) {
               mBtn.style.outline = `0.09vh solid ${mConf['0']}`; //1px solid #1760a3
            }
            
          };

          mBtn.onmouseout = function(){
            var mCurrItemId = this.id;
            var mCurrItem = document.getElementById(mCurrItemId);
            if (mVari==0) {
             mCurrItem.style.background = `linear-gradient(to bottom, ${mConf['0']} 5%, rgba(255,255,255,0.3) 100%)`;
             mCurrItem.style.backgroundColor = mConf['0'];
            }else {
              mCurrItem.style.backgroundColor = "transparent";
            }
            if (mVari==1) {
              mBtn.style.outline = `0.09vh solid ${mConf['2']}`; //1px solid #1760a3
            }
          };
 

          mBtn.onclick = function(){
            var mCurrItemId = this.id;
            //alert("btn click: "+mCurrItemId);
            //onClick....
            mSend_cb("onClick", {"e": document.getElementById(mCurrItemId)});
          };

          mBtnHolder.appendChild(mBtn);


          //ico..
          if(mParams['ico']!=undefined){
            mSet_IcoE();
          }
          function mSet_IcoE() { 
            var mIcoE = document.createElement("ico_e_1mn");
            mIcoE.style.paddingRight = "0.3vw"; 
            mIcoE.style.height = mTxt['1'];
            //mIcoE.style.backgroundColor = "red";
            mIcoE.style.display = "flex";
            mIcoE.style.justifyContent = "center";
            mIcoE.style.alignItems = "center";
            mBtn.appendChild(mIcoE);
 
             //set svg1..
             function mSet_Svg1() { 
              if (mIco["3"]==undefined) {
                //--set ico color--//
                if (mVari==0) {
                  mIco["3"] = "#ffffff";
                }else {
                  mIco["3"] = mConf["0"];
                }
              }

              core_1mn['mSvg'].set({
                "0": mIco['0'],
                //"1": ,
                "2": mIco['1'],
                "3": mIco['2'],
                "4": mIco['3'],
                "5": mIcoE,
                "cb": {
                    /*"onClick": (mCurrItem) => {
                        //alert("onClick");
                        //close..
                    }*/
                }
              }); 

             }
             mSet_Svg1();  

          }

          //text..
          mSet_TxtE();
          function mSet_TxtE() {
            var mTxtE = document.createElement("txt_e_1mn");
            mTxtE.innerHTML = mTxt['0'];
            mTxtE.style.textDecoration = "none";
            mTxtE.style.userSelect = "none";
            mTxtE.style.textShadow = "0vh 0.08vh 0vh rgba(255,255,255,0.4)"; //0px 1px 0px rgba(255,255,255,0.4)
            if (mVari==0) {
              mTxtE.style.color = "#ffffff";
            }else {
              mTxtE.style.color = mConf["0"];
            }
            mTxtE.style.fontFamily = "Arial";
            mTxtE.style.fontSize = mTxt['1']; //"1.6vh";
            mBtn.appendChild(mTxtE);
          }
          
           

          //disable (layer)..
          var mDisableLayer = document.createElement("dis_layer_btn_1mn");
          mDisableLayer.id = core_1mn['mUniqueId'].mGenerate(15);
          //hide..
          mDisableLayer.style.visibility = "hidden";
          mDisableLayer.style.width = (parseFloat(mBtnHolder.style.width) + 0.2) + "vw";
          mDisableLayer.style.height = (parseFloat(mBtnHolder.style.height) + 0.2) + "vh";
          mDisableLayer.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
          mDisableLayer.style.position = "absolute";
          mDisableLayer.style.borderRadius = "0.7vh";  
          mBtnHolder.appendChild(mDisableLayer);


          //events..
          mDisableLayer.onclick = function(){
            var mCurrItemId = this.id;
            //alert("btn disabled layer click: "+mCurrItemId);
            //onClick....
            mSend_cb("onClickD", {"e": document.getElementById(mCurrItemId)});
          };

          //onLoad....
          mSend_cb("onLoad", {"e": mBtn});


          //events.....
          var mEvents = { 
            "btn": {
              "eBtn": mBtn, //element
              "e1": mBtnHolder, //element
              "e2": mDisableLayer,
              "show": () => {
                var mBtn = mEvents['btn']['eBtn'];
                mBtn.style.display = "flex";  //block
                mBtnHolder.style.display = "flex"; //block
              },
              "hide": () => {
                var mBtn = mEvents['btn']['eBtn'];
                mBtn.style.display = "none";
                mBtnHolder.style.display = "none";
              },
              "disable": () => {
                var mBtn = mEvents['btn']['eBtn'];
                mBtn.disabled = true;
                //set disable layer..
                var mDisableLayer = mEvents['btn']['e2'];
                mDisableLayer.style.visibility = "visible";
              },
              "enable": () => {
                var mBtn = mEvents['btn']['eBtn'];
                mBtn.disabled = false;
                //set disable layer..
                var mDisableLayer = mEvents['btn']['e2'];
                mDisableLayer.style.visibility = "hidden";
              },
              "pbShow": (mColor) => {
                mEvents['btn'].disable();
                //set..
                var mDisableLayer = mEvents['btn']['e2'];
                function mSetPb() {
                  core_1mn['mAnim']['loader']['0']['set']({
                    "e1": mDisableLayer,
                    "1": mColor!=undefined ? mColor : mConf['0']
                  });
                }
                mSetPb();
              },
              "pbHide": () => {
                mEvents['btn'].enable();
                //set..
                var mDisableLayer = mEvents['btn']['e2'];
                function mRemovePb() {
                  mDisableLayer.querySelectorAll("anim_loader_1mn")[0].remove();
                }
                mRemovePb();
              },
            }

          };

          return mEvents;

          

          /*USAGE
          
          //Btn.....  
          var mBtnHolder = document.createElement("div");
          document.body.appendChild(mBtnHolder);
          var mBtn = core_1mn['btn']['1'].set({ 
              "e1": mBtnHolder,
              "w": "5vw",
              "posH": 1,
              "h": "3.2vh",
              "txt": {
                "0": "Login",
                "1": "1.3vh"
              },
              "ico": {"0": "sample.svg", "1": "1.3vh", "2": "1.3vh", "3": "rgba(255,255,255, 1.0)" },
              "cb": {
                  "onLoad": function(data){
                      //var mBtn = data['btn'];
                      //console.log(mBtn);
                  },
                  "onClick": function(data){
                      //alert(JSON.stringify(data));
                      //console.log(data);
                  },
                  "onClickD": function(data){
                      //alert(JSON.stringify(data));
                      //console.log(data);
                  }
              },
              //typ..
              "typ": 2,
              //variant..
               "vari": 2
          });
         //mBtn['btn']['hide'] ();
         //mBtn['btn']['show'] ();
         //mBtn['btn']['disable'] ();
         //mBtn['btn']['enable'] ();
         //mBtn['btn']['pbShow'] ("red");
         //mBtn['btn']['pbHide'] ();

          */

        }
      },

      //-----Will be upgrade soon----//
      "2": {

        "set": (mMain) => {
           //clear.....
           core_1mn.mClearLayout(mMain);


           //mBtnDiv....
           var mBtnDiv = document.createElement("div");
           mBtnDiv.style.margin = "0 auto";
           mMain.appendChild(mBtnDiv);
 
 
           //mBtn......
           var mBtn = document.createElement("button");
           mBtn.id = core_1mn['mUniqueId'].mGenerate(16);

          //mBtn.innerHTML = "Ready";
          mBtn.style.boxShadow = "0vh 0.1vh 0vh 0vh #fff6af";
          mBtn.style.background = "linear-gradient(to bottom, #ffec64 5%, #ffab23 100%)";
          mBtn.style.backgroundColor = "#ffec64";
          mBtn.style.borderRadius = "0.6vh";
          mBtn.style.border = "0.1vh solid #ffaa22";
          mBtn.style.cursor = "pointer";
          mBtn.style.color = "#333333";
          mBtn.style.fontFamily = "Arial";
          mBtn.style.fontSize = "1.6vh";
          mBtn.style.fontWeight = "bold";
          mBtn.style.padding = "0.7vh 1.7vw";
          mBtn.style.textDecoration = "none";
          mBtn.style.textShadow = "0vh 0.1vh 0vh #ffee66";

          //events.....
          mBtn.onmouseover = function(){
            mBtn.style.background = "linear-gradient(to bottom, #ffab23 5%, #ffec64 100%)";
            mBtn.style.backgroundColor = "#ffab23";
          };

          mBtn.onmouseout = function(){
            mBtn.style.background = "linear-gradient(to bottom, #ffec64 5%, #ffab23 100%)";
            mBtn.style.backgroundColor = "#ffec64";
          };

          mBtnDiv.appendChild(mBtn);



          return mBtnDiv;

        }


      },
      "3": {

        "set": (mMain) => {
          //clear.....
          core_1mn.mClearLayout(mMain);

          //mBtnDiv....
          var mBtnDiv = document.createElement("div");
          mBtnDiv.style.margin = "0 auto";
          mMain.appendChild(mBtnDiv);


          //mBtn......
          var mBtn = document.createElement("button");
          mBtn.id = core_1mn['mUniqueId'].mGenerate(16);

          //mBtn.innerHTML = "Ready";
          mBtn.style.boxShadow = "0px 1px 0px 0px #fff6af";
          mBtn.style.background = "linear-gradient(to bottom, #1760a3 5%, rgba(255,255,255,0.3) 100%)";
          mBtn.style.backgroundColor = "#1760a3";
          mBtn.style.borderRadius = "6px";
          mBtn.style.border = "1px solid #1760a3";
          mBtn.style.cursor = "pointer";
          mBtn.style.color = "#fff";
          mBtn.style.fontFamily = "Arial";
          mBtn.style.fontSize = "1.6vh";
         // mBtn.style.fontWeight = "bold";
          mBtn.style.padding = "0.7vh 1.7vw";
          mBtn.style.textDecoration = "none";
          mBtn.style.textShadow = "0px 1px 0px rgba(255,255,255,0.4)";

          //events.....
          mBtn.onmouseover = function(){
            mBtn.style.background = "linear-gradient(to bottom, rgba(255,255,255,0.3) 5%, #1760a3 100%)";
            mBtn.style.backgroundColor = "#1760a3";
          };

          mBtn.onmouseout = function(){
            mBtn.style.background = "linear-gradient(to bottom, #1760a3 5%, rgba(255,255,255,0.3) 100%)";
            mBtn.style.backgroundColor = "#1760a3";
          };
      

          mBtnDiv.appendChild(mBtn);

          return mBtnDiv;

        }


      },
      "4": {
        "set": (mGetParams) => {
          var mParams = mGetParams;
          var mW = mParams['w']!=undefined ? mParams['w'] : "7vw";
          var mH = mParams['h']!=undefined ? mParams['h'] : "4vh";
          var mTxt = mParams['txt']!=undefined ? mParams['txt'] : {"0": "Button", "1": "1.3vh" };
          var mE1 = mParams['e1']; //@req
          var mCb = mParams['cb']; //@req

          //send callback..
          function mSend_cb(mCb_name, data) {
            if(mCb!=undefined){
              if(mCb[mCb_name]!=undefined){
                mCb[mCb_name] (data);
              }
            }
          }

          //set.....
          var mBtnHolder = document.createElement("btn_holder_1mn");
          mBtnHolder.style.width = mW;
          mBtnHolder.style.height = mH;
          mBtnHolder.style.position = "relative";
          mBtnHolder.style.display = "flex";
          mBtnHolder.style.justifyContent = "center";
          mBtnHolder.style.alignItems = "center";
          mE1.appendChild(mBtnHolder);  

           //mBtn......
           var mBtn = document.createElement("btn_1mn");
           mBtn.id = core_1mn['mUniqueId'].mGenerate(16);
           mBtn.style.position = "absolute";

           mBtn.style.display = "flex";
           mBtn.style.justifyContent = "center";
           mBtn.style.alignItems = "center";

           mBtn.style.width = mBtnHolder.style.width;
           mBtn.style.height = mBtnHolder.style.height;
           mBtn.style.boxShadow = "0vh 0.08vh 0vh 0vh #fff6af"; //0px 1px 0px 0px #fff6af
           mBtn.style.background = "linear-gradient(to bottom, #1760a3 5%, rgba(255,255,255,0.3) 100%)";
           mBtn.style.backgroundColor = "#1760a3";
           mBtn.style.borderRadius = "0.7vh"; //6px
           mBtn.style.border = "0.09vh solid #1760a3"; //1px solid #1760a3
           mBtn.style.cursor = "pointer"; 
           //mBtn.style.fontWeight = "bold";
           //mBtn.style.padding = "0.7vh 1.7vw";

           //events.....
          mBtn.onmouseover = function(){
            var mCurrItemId = this.id;
            var mCurrItem = document.getElementById(mCurrItemId);
            mCurrItem.style.background = "linear-gradient(to bottom, rgba(255,255,255,0.3) 5%, #1760a3 100%)";
            mCurrItem.style.backgroundColor = "#1760a3";
          };

          mBtn.onmouseout = function(){
            var mCurrItemId = this.id;
            var mCurrItem = document.getElementById(mCurrItemId);
            mCurrItem.style.background = "linear-gradient(to bottom, #1760a3 5%, rgba(255,255,255,0.3) 100%)";
            mCurrItem.style.backgroundColor = "#1760a3";
          };

          mBtn.onclick = function(){
            var mCurrItemId = this.id;
            //alert("btn click: "+mCurrItemId);
            //onClick....
            mSend_cb("onClick", {"e": document.getElementById(mCurrItemId)});
          };

          mBtnHolder.appendChild(mBtn);

          //text..
          mSet_TxtE();
          function mSet_TxtE() {
            var mTxtE = document.createElement("txt_e_1mn");
            mTxtE.innerHTML = mTxt['0'];
            mTxtE.style.textDecoration = "none";
            mTxtE.style.textShadow = "0vh 0.08vh 0vh rgba(255,255,255,0.4)"; //0px 1px 0px rgba(255,255,255,0.4)
            mTxtE.style.color = "#fff";
            mTxtE.style.fontFamily = "Arial";
            mTxtE.style.fontSize = mTxt['1']; //"1.6vh";
            mBtn.appendChild(mTxtE);
          }

          //ico..
          //mSet_IcoE();
          function mSet_IcoE() { 
          }

          //disable (layer)..
          var mDisableLayer = document.createElement("dis_layer_btn_1mn");
          mDisableLayer.id = core_1mn['mUniqueId'].mGenerate(15);
          //hide..
          mDisableLayer.style.visibility = "hidden";
          mDisableLayer.style.width = core_1mn['mExtract']['mInt']['get'](mBtnHolder.style.width) + 0.7 + "vw";
          mDisableLayer.style.height = core_1mn['mExtract']['mInt']['get'](mBtnHolder.style.height) + 0.7 + "vh";
          mDisableLayer.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
          mDisableLayer.style.position = "absolute";
          mDisableLayer.style.borderRadius = "0.7vh"; 
          mBtnHolder.appendChild(mDisableLayer);

          //events..
          mDisableLayer.onclick = function(){
            var mCurrItemId = this.id;
            //alert("btn disabled layer click: "+mCurrItemId);
            //onClick....
            mSend_cb("onClickD", {"e": document.getElementById(mCurrItemId)});
          };

          //onLoad....
          mSend_cb("onLoad", {"btn": mBtn});

          //events.....
          var mEvents = { 
            "btn": {
              "eBtn": mBtn, //element
              "e1": mBtnHolder, //element
              "e2": mDisableLayer,
              "show": () => {
                var mBtn = mEvents['btn']['eBtn'];
                mBtn.style.display = "block";
              },
              "hide": () => {
                var mBtn = mEvents['btn']['eBtn'];
                mBtn.style.display = "none";
              },
              "disable": () => {
                var mBtn = mEvents['btn']['eBtn'];
                mBtn.disabled = true;
                //set disable layer..
                var mDisableLayer = mEvents['btn']['e2'];
                mDisableLayer.style.visibility = "visible";
              },
              "enable": () => {
                var mBtn = mEvents['btn']['eBtn'];
                mBtn.disabled = false;
                //set disable layer..
                var mDisableLayer = mEvents['btn']['e2'];
                mDisableLayer.style.visibility = "hidden";
              },
            }

           };

           return mEvents;

          

          /*USAGE
          
           //Btn..... 

var mBtnHolder = document.createElement("div");
document.body.appendChild(mBtnHolder);
var mBtn = core_1mn['btn']['4'].set({ 
           "e1": mBtnHolder,
           "w": "5vw",
             "h": "3.2vh",
             "txt": {
             "0": "Login",
             "1": "1.3vh"
            },
           "cb": {
               "onLoad": function(data){
                   //var mBtn = data['btn'];
                   //console.log(mBtn);
               },
               "onClick": function(data){
                   //alert(JSON.stringify(data));
                   //console.log(data);
               },
               "onClickD": function(data){
                   //alert(JSON.stringify(data));
                   //console.log(data);
               }
           }
       });
//mBtn['btn']['hide'] ();
//mBtn['btn']['show'] ();
//mBtn['btn']['disable'] ();
//mBtn['btn']['enable'] ();

          */

        }
      },   
      
      



    },

    

    "dialog": {

      "1": {
  
        "set": (mGetParams) => {
          var mParams = mGetParams!=undefined ? mGetParams : {};
          //set vars......
          var mSvgIcons = core_1mn['svgIcons'];

          //FUNC..
          //send callback..
          var mSend_cb = function(mCb_name, data){
            if(mParams['mCb']!=undefined){
              if(mParams['mCb'][mCb_name]!=undefined){
                mParams['mCb'][mCb_name](data);
              }
            }
          }; 
  
          function mSet_item() {
  
            //*************clear by (id) if given........
            if(mC1 = mParams['c1']!=undefined){
              if(document.getElementById(mC1 = mParams['c1'])){
                document.getElementById(mC1 = mParams['c1']).remove();
              }
            }
  
  
            //set props....
            const mE = mParams['mE']!=undefined ? mParams['mE'] : document.body;
            //header....
            var mH0 = mParams['h0']!=undefined ? mParams['h0'] : ""; //title
            var mH1 = mParams['h1']!=undefined ? mParams['h1'] : 
            { //icon
              "0": undefined, //path Or data
              "1": "3vh", //w
              "2": "3vh" //h
            }; 
            var mH2 = mParams['h2']!=undefined ? mParams['h2'] : true; //close btn (isShow)
            //config....
            var mC0 = mParams['c0']!=undefined ? mParams['c0'] : true; //is dialog cancellable (outside)
            var mC1 = mParams['c1']!=undefined ? mParams['c1'] : core_1mn['mUniqueId'].mGenerate(); //dialog root id
            var mC2 = mParams['c2']!=undefined ? mParams['c2'] : "50%"; //dialog (width)
            var mC3 = mParams['c3']!=undefined ? mParams['c3'] : "70vh"; //dialog (height)
            var mC4 = mParams['c4']!=undefined ? mParams['c4'] : "5vh"; //dialog (paddingTop)
            var mC5 = mParams['c5']!=undefined ? mParams['c5'] : "1vh"; //dialog (borderRadius)
            var mC6 = mParams['c6']!=undefined ? mParams['c6'] : "rgba(34,34,34, 1)"; //dialog (header-color)
            var mC7 = mParams['c7']!=undefined ? mParams['c7'] : "linear-gradient(to bottom right,    rgb(224, 224, 216), rgb(247, 242, 242) )"; //dialog (body-color)
            var mC8 = mParams['c8']!=undefined ? mParams['c8'] : 0; //dialog (position) [center, top , bottom]
  
  
            //dialog.................
            //mDiv1...........
            var mDiv1 = null;
            if (mE==document.body) {
            mDiv1 = document.createElement("div");
            mDiv1.id = mC1; //"para_phraser_DIALOG";
            mDiv1.style.display = "none"; /*By default hidden*/
            mDiv1.style.position = "fixed";
            mDiv1.style.zIndex = 1;
            mDiv1.style.left = 0;
            mDiv1.style.top = 0;
            mDiv1.style.width = "100%";
            mDiv1.style.height = "100%";
            //mDiv1.style.overflow = "auto";
            mDiv1.style.backgroundColor = "rgba(80, 80, 80, 0.5)"; //rgba(80, 80, 80, 0.5) || rgba(255, 255, 255, 0.9) //dialog (outer-bg-color)
            mDiv1.style.paddingTop = mC4;
            mE.appendChild(mDiv1);
            }
  
  
            //mDiv2.........
            var mDiv2 = document.createElement("div");
            mDiv2.style.width = mC2;
            mDiv2.style.height = mC3;
            if (mC7.includes("gradient")) {
              mDiv2.style.backgroundImage = mC7;
            }else {
              mDiv2.style.backgroundColor = mC7; 
            }
            mDiv2.style.outline = "0.2vh solid #888";
            mDiv2.style.borderRadius = mC5;
            if (mDiv1!=null) {
              mDiv2.style.margin = mParams['c4']==undefined ? "5% auto 15% auto" : "0% auto"; //5% auto 15% auto
              mDiv1.appendChild(mDiv2);              
            }else {
              mE.style.position = "relative";
              mDiv2.style.position = "absolute";
              if (mC8==2) {
                mDiv2.style.bottom = "0";
              }
              mE.appendChild(mDiv2);
              //convert (mDiv1 => mDiv2)
              mDiv1 = mDiv2;
            }
  
            //mDiv3.........
            var mDiv3 = document.createElement("div");
            mDiv3.setAttribute("tag_n", "content_holder");
  
            //mDiv3.style.textAlign = "center";
            mDiv2.appendChild(mDiv3); 
  
            //content......
            mCreateLayout();
            function mCreateLayout() { 
                //mTop1....
                var mTop1 = document.createElement("div");
                mTop1.style.width = "100%";
                mTop1.style.height = "5vh"; //7vh
                mTop1.style.backgroundColor = mC6;
                mTop1.style.borderRadius = `${mC5} ${mC5} 0 0`;
                mTop1.style.display = "flex";
                mTop1.style.alignItems = "center";
                mTop1.style.justifyContent = "space-between";
                mDiv3.appendChild(mTop1);
  
                //items....
                 //1
                 mLeftItem();
                 function mLeftItem() {
  
                 var mCover1 = document.createElement("div");
                 mCover1.style.paddingLeft = "1.5vw";
                 mCover1.style.display = "flex";
                 mCover1.style.alignItems = "center";
                 mTop1.appendChild(mCover1);
  
                 //check (icon).....
                 //mH1......
                 if(mH1["0"]!=undefined){
                   //Icon.......
                   //svg.....
                   core_1mn['mSvg'].set({
                   "0": mH1["0"],
                   "2": mH1["1"],
                   "3": mH1["2"],
                   "4": "rgba(255,255,255, 1.0)",
                   "5": mCover1
                   });
                 }
  
  
                 //space.....
                 var mSpace = document.createElement("div");
                 mSpace.style.width = "0.3vw";
                 mCover1.appendChild(mSpace);
  
  
                 //mP1.........
                 var mP1 = document.createElement("p");
                 mP1.innerHTML = mH0;
                 mP1.style.color = "#ffffff";
                 mP1.style.fontSize = "1.8vh";
                 mP1.style.margin = "0";
                 mCover1.appendChild(mP1); 
  
                   
                 }
  
                 //2
                 var mItem2 = document.createElement("p");
                 mItem2.innerHTML = "";
                 mItem2.style.color = "#ffffff";
                 mItem2.style.fontSize = "1.4vh";
                 mItem2.style.margin = "0";
                 mTop1.appendChild(mItem2);
  
  
                //3
                mRightItem();
                function mRightItem() {
                 var mCover1 = document.createElement("div");
                 mCover1.style.paddingRight = "1.5vw";
                 mCover1.style.display = "flex";
                 mCover1.style.alignItems = "center";
                 mTop1.appendChild(mCover1); 
  
                 //check....close btn
                 //mH2.....
                 if(mH2==true){
                  //Icon.......
                 var mSvgDiv1 = document.createElement("span");
                 mSvgDiv1.innerHTML = mSvgIcons['close_0'].svg();
                 mCover1.appendChild(mSvgDiv1);
  
                 var mSvg1 = mSvgDiv1.querySelectorAll("svg")[0];
                 mSvg1.style.fill = "white";
                 mSvg1.style.width = "3vh";
                 mSvg1.style.height = "3vh";
  
                 //events.......
                 mSvgDiv1.onclick = function(){
                   //close....
                   mEvents['dialog'].close();
                 };
  
                 }
  
  
                }
  
            } 
            //is dialog cancellable (outside) 
            mSet_isDialogCancellable();
            function mSet_isDialogCancellable() {
              if(mC0==true){
                var modal = mDiv1;
                //console.log(modal);
                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function(event) {
                 if (event.target == modal) {
                  //close....
                  mEvents['dialog'].close();
                 }
               };
             }
            }
  
  
             //show.....
            /*var modal = document.getElementById(mC1);
            modal.style.display = 'block';*/

            //send callback..
            mSend_cb("onLoad" ,{
            "0": mDiv3, //(content holder)
            });
  
  
             //(mDiv1)......total dialog......
             return mDiv1;
  
          }
  
          //events.....
          var mDialogE = mSet_item();
          var mEvents = { 
            "dialog": {
              "e": mDialogE, //element
              "show": () => {
                var mE1 = mEvents['dialog']['e'];
                mE1.style.display = "block";
              },
              "close": () => {
                var mE1 = mEvents['dialog']['e'];
                 mE1.style.display = "none";
                 //now....we remove..
                 mE1.remove();
              },
            }
  
          };  

          return mEvents;

 
          
          /*
          USAGE
           //start.....
  
            var mConfDialog = {
            "c1": "login_register_DIALOG",
            "c2": "50%",
            "c3": "70vh", 
  
            "mCb": {
                "onClose": () => {
                    //onClose.....
                    //alert("onClose");
                },
                "onLoad": (data) => {
                  var m0 = data['0']; //content holder.....
                  //mContent.....
                  var mContent = document.createElement("div");
                  mContent.style = `width: 100%; height: 100%; `;
                  m0.appendChild(mContent);
                }
            }
            
          };

          ----------OR----------------

           var mConfDialog = {
            "c1": "login_register_DIALOG",
             "c2": "100%",
             "c3": "100%",
              "c4": "0vh",
              "c5": "0vh",
             "c6": "rgba(0,32,96, 1)",
             "c7": "rgba(255,255,255, 1)", 
  
            "mCb": {
                "onClose": () => {
                    //onClose.....
                    //alert("onClose");
                },
                "onLoad": (data) => {
                  var m0 = data['0']; //content holder.....
                  //mContent.....
                  var mContent = document.createElement("div");
                  mContent.style = `width: 100%; height: 100%; `;
                  m0.appendChild(mContent);
                }
            }
            
          };

          ---------OR--------
          var mConfDialog = {
               "mE": mE,
               "c8": 2,
          }
           


          var mEvents = core_1mn['dialog']['1'].set(
            mConfDialog
          );
          //store..
          //mLAZY['mAnim']['dialog']['eventsDialog'] = mEvents; 
          //show..
          mEvents['dialog'].show();
          //close..
          //mEvents['dialog'].close();
         */
          
  
        },
  
      }
  
    },

    "space": {
        "set": (mGetParams) => {
          //add vertical & horizontal space.....
          var mParams = mGetParams;
          var mW = mParams['w']!=undefined ? mParams['w'] : "0";
          var mH = mParams['h']!=undefined ? mParams['h'] : "0";
          var mE1 = mParams['e1']; //@req
          //set.....
          var mSpace = document.createElement("div");
          mSpace.style.width = mW;
          mSpace.style.minWidth = mW;
          mSpace.style.height = mH;
          mE1.appendChild(mSpace);

          /*USAGE
          
           //Space.....
           core_1mn['space'].set({
                "w": "2vw",
                "e1": mItemDiv,
           });

          */

        }

    },

    "notes": {
      //Notes can be used to notify the user about (something special)

      "1": {

        "set": (mGetParams) => {
              var mParams = mGetParams;
              var d_ico1 = mParams['ico1']!=undefined ? mParams['ico1'] : {}; //@req (svg(obj))
              var d_txt1 = mParams['txt1']!=undefined ? mParams['txt1'] : null; //@req
              var d_txt2 = mParams['txt2']!=undefined ? mParams['txt2'] : null; //@req
              var d_btn1 = mParams['btn1']!=undefined ? mParams['btn1'] : null; //@req

              //set vars.....
              var mSvgIcons = core_1mn['svgIcons'];
              var mBtnsG = core_1mn['btn'];
 
              //mNoteDiv....
              var mNoteDiv = document.createElement("div");
              mNoteDiv.style.textAlign = "center";
              mNoteDiv.style.margin = "8vh 0";

              //mNoteDiv.style.margin = "0 auto";
              //mMain.appendChild(mNoteDiv);


              //set item.....
              mSet_item();
              function mSet_item() {
                //mNote......
                var mNote = document.createElement("div");
                mNote.id = core_1mn['mUniqueId'].mGenerate(18);
                //set
                mNote.setAttribute("tag_n", "note");
                mNoteDiv.appendChild(mNote);

                  if(d_ico1!={}){
                    mSet_svg1();
                  }
                  function mSet_svg1() { 
                    //Icon....... 
                    //svg.....
                    core_1mn['mSvg'].set({
                      "0": d_ico1['0']!=undefined ? d_ico1['0'] : null, //"box_arrow_0.svg"
                      "2": d_ico1['1']!=undefined ? d_ico1['1'] : "20vh",
                      "3": d_ico1['2']!=undefined ? d_ico1['2'] : "20vh",
                      "4": d_ico1['3']!=undefined ? d_ico1['3'] : "rgba(34,34,34, 1.0)",
                      "5": mNote,
  
                     });

                  }

                  //Space.....
                  core_1mn['space'].set({
                    "h": "1vh",
                    "e1": mNote,
                  });


                  if(d_txt1!=null){
                    mSet_txt1();
                  }
                  function mSet_txt1() {
                    var m_txt = document.createElement("div");
                    m_txt.style.fontSize = "1.7vh";
                    m_txt.style.color = "#343434";
                    m_txt.style.fontWeight = "450";
                    m_txt.innerHTML = d_txt1;
                    mNote.appendChild(m_txt);
                  }


                  //Space.....
                  core_1mn['space'].set({
                    "h": "0.5vh",
                    "e1": mNote,
                  });



                  if(d_txt2!=null){
                    mSet_txt2();
                  }
                  function mSet_txt2() {
                    var m_txt = document.createElement("div");
                    m_txt.style.fontSize = "1.2vh";
                    m_txt.style.color = "#343434";
                    m_txt.innerHTML = d_txt2;
                    mNote.appendChild(m_txt);
                  }


                   //Space.....
                   core_1mn['space'].set({
                    "h": "4.5vh",
                    "e1": mNote,
                  });


                  if(d_btn1!=null){
                    mSet_btn1();
                  }
                  function mSet_btn1() {
                       var mMainDiv = document.createElement("div");
                       mNote.appendChild(mMainDiv);  

                       //mBtnDiv..... 
                        var mBtnHolder = mMainDiv;
                        mBtnsG['1'].set({ 
                                   "e1": mBtnHolder,
                                   "w": "6.7vw",
                                   "h": "3.1vh",
                                   "posH": 1,
                                   "txt": {
                                     "0": d_btn1['0'],
                                     "1": "1.3vh"
                                   },
                                   "cb": {
                                       "onClick": function(data){
                                          //send callback..
                                          if(d_btn1['cb']['onClick']!=undefined){
                                            d_btn1['cb']['onClick'](data);
                                          }
                                       }
                                   }
                               });
                        

                  }


                
              }

 

    
              return mNoteDiv; //(mNoteDiv)


              
             /* //USAGE
               var mMsgDiv = core_1mn['notes']['1'].set({
                            "ico1": {
                                "0": mSvgIcons['car_damage_1'],
                            },
                            "txt1": "Something went wrong!",
                            "txt2": "An error occurred while loading this page.",
                            "btn1": {
                              "0": "Try Again",
                              "cb": {
                                "onClick": function(){

                                }
                              }
                            },
                        });
                        mItem.appendChild(mMsgDiv);

                         */         
              


        }

      },

      "2": {

        "set": (mGetParams) => {
              var mParams = mGetParams;
              var mE1 = mParams['mE1']!=undefined ? mParams['mE1'] : null; //@req
              var d_ico1 = mParams['ico1']!=undefined ? mParams['ico1'] : {}; //@req (svg(obj))
              var d_ico2 = mParams['ico2']!=undefined ? mParams['ico2'] : null;  
              var d_txt1 = mParams['txt1']!=undefined ? mParams['txt1'] : {}; //@req
              var d_txt2 = mParams['txt2']!=undefined ? mParams['txt2'] : null;
              //bg....
              var d_bg = mParams['bg']!=undefined ? mParams['bg'] : null;
              

              //set vars.....
              var mSvgIcons = core_1mn['svgIcons'];
 
              //mNoteDiv....
              var mNoteDiv = document.createElement("div");
              mNoteDiv.style.display = "none";
              mNoteDiv.style.padding = "0 0.5vw"; //8vh 0
              //style.....
              if(d_bg!=null){
                mSet_bg();
              }
              function mSet_bg() {
              mNoteDiv.style.backgroundColor = d_bg['0']!=undefined ? d_bg['0'] : "rgba(204, 231, 244, 1.0)";
              mNoteDiv.style.outline = d_bg['1']!=undefined ? d_bg['1'] : "0.1vh solid rgba(167, 196, 244, 1.0)";
              mNoteDiv.style.borderRadius = d_bg['2']!=undefined ? d_bg['2'] : "0.5vh";
              mNoteDiv.style.padding = d_bg['3']!=undefined ? d_bg['3'] : "0.5vh"; 
              }
              //mMain.appendChild(mNoteDiv);

              //set item.....
              mSet_item();
              function mSet_item() {
                //mNote......
                var mNote = document.createElement("div");
                mNote.id = core_1mn['mUniqueId'].mGenerate(18);
                mNote.style.display = "flex";
                mNote.style.alignItems = "center";
                mNote.style.justifyContent = "space-between";
                //set
                mNote.setAttribute("tag_n", "note");
                mNoteDiv.appendChild(mNote);

                  //horizontal cover..
                  var mHoriDiv_1 = document.createElement("div");
                  mHoriDiv_1.style.display = "flex";
                  mHoriDiv_1.style.alignItems = "center";
                  mNote.appendChild(mHoriDiv_1);

                  if(d_ico1!={}){
                    mSet_svg1();
                  }
                  function mSet_svg1() {
                    //Icon....... 
                    //svg.....
                    core_1mn['mSvg'].set({
                    "0": d_ico1['0']!=undefined ? d_ico1['0'] : null, //"box_arrow_0.svg"
                    "2": d_ico1['1']!=undefined ? d_ico1['1'] : "5vh",
                    "3": d_ico1['2']!=undefined ? d_ico1['2'] : "5vh",
                    "4": d_ico1['3']!=undefined ? d_ico1['3'] : "rgba(34,34,34, 1.0)",
                    "5": mHoriDiv_1,

                   });

  
                  } 

                  //Space.....
                  core_1mn['space'].set({
                    "w": "0.3vw",
                    "e1": mHoriDiv_1,
                  });


                  //vertical cover..
                  var mVertiDiv_1 = document.createElement("div");
                  mHoriDiv_1.appendChild(mVertiDiv_1);

                  if(d_txt1!={}){
                    mSet_txt1();
                  }
                  function mSet_txt1() {
                    var m_txt = document.createElement("div");
                    m_txt.innerHTML = d_txt1['0']!=undefined ? d_txt1['0'] : null;
                    m_txt.style.fontSize = d_txt1['1']!=undefined ? d_txt1['1'] : "1.7vh";
                    m_txt.style.color = d_txt1['2']!=undefined ? d_txt1['2'] : "#343434";
                    m_txt.style.margin = d_txt1['3']!=undefined ? d_txt1['3'] : "0 0 0 0.6vw"; //T R B L
                    //m_txt.style.fontWeight = "450";
                    mVertiDiv_1.appendChild(m_txt);

                  }


                  if(d_txt2!=null){
                    mSet_txt2();
                  }
                  function mSet_txt2() {
                    var m_txt = document.createElement("div");
                    m_txt.innerHTML = d_txt2['0']!=undefined ? d_txt2['0'] : null;
                    m_txt.style.fontSize = d_txt2['1']!=undefined ? d_txt2['1'] : "1.7vh";
                    m_txt.style.color = d_txt2['2']!=undefined ? d_txt2['2'] : "#343434";
                    m_txt.style.margin = d_txt2['3']!=undefined ? d_txt2['3'] : "0 0 0 0.6vw"; //T R B L
                    //m_txt.style.fontWeight = "450";
                    mVertiDiv_1.appendChild(m_txt);

                  }


                  if(d_ico2!=null){
                    mSet_svg2();
                  }
                  function mSet_svg2() {
                    //Icon....... 
                    //svg.....
                    core_1mn['mSvg'].set({
                    "0": d_ico2['0']!=undefined ? d_ico2['0'] : null, //"box_arrow_0.svg"
                    "2": d_ico2['1']!=undefined ? d_ico2['1'] : "2vh",
                    "3": d_ico2['2']!=undefined ? d_ico2['2'] : "2vh",
                    "4": d_ico2['3']!=undefined ? d_ico2['3'] : "rgba(34,34,34, 1.0)",
                    "5": mNote,
                    "cb": {
                      "onClick": function(){
                        //send callback..
                        if(d_ico2['cb']['onClick']!=undefined){
                          d_ico2['cb']['onClick']();
                        }
                      }
                    }
                   });

  
                  }

                
              }

              if(mE1!=null){
                //add..
                mE1.appendChild(mNoteDiv);
              }

              //events.....
              var mEvents = { 
                "note": {
                  "e": mNoteDiv, //element
                  "show": () => {
                    var mE1 = mEvents['note']['e'];
                    mE1.style.display = "block";
                  },
                  "close": () => {
                    var mE1 = mEvents['note']['e'];
                     mE1.style.display = "none";
                     //now....we remove..
                     mE1.remove();
                  },
                }

               };

              return mEvents;


              /*
              USAGE
              var mMsgDiv = core_1mn['notes']['2'].set({

                        "mE1": mNoteHolder,
                        "bg": {
                            "0": "rgba(245, 213, 214, 1.0)", //background color
                            "1": "0.1vh solid rgba(235, 157, 159, 1.0)",
                            "2": "0.5vh",
                            "3": "0.7vh 0.7vh 0.7vh 0.9vw",
                        },
                        "ico1": {
                            "0": "exclamation_0.svg",
                            "1": "1.8vh",
                            "2": "1.8vh",
                            "3": "rgba(184, 79, 81, 1.0)",
                        },
                        "ico2": {
                            "0": "close_0.svg",
                            "1": "2.2vh",
                            "2": "2.2vh",
                            "3": "rgba(34, 34, 34, 0.5)",
                            "cb": {
                                "onClick": function(){
                                   mMsgDiv['note'].close();
                                }
                            }
                        },
                        "txt1": {
                            "0": "Something went wrong!",
                            "1": "1.4vh",
                            "2": "rgba(34, 34, 34, 0.8)",
                            "3": "0 0 0 0.2vw"
                        }, 
                     });
                     mMsgDiv['note'].show();
              */


        }

      },

    },

  
    //validator
    "mVali": {
      //validation library for (1MN)

      "mUtil": {
        //usefull functions.....place here

        "mJSONtoJSONSchema": {
          "set": () => {
            //covert JSON to JSON Schema


          }
        }

      },

      "mRegex": {
        "patterns": {
          "name": {
            "desc": "eg - name",
            "p": /ab+c/,
          }
        }
      },

      "mDataType": {
        //Ref---->
        //https://www.w3schools.com/js/js_json_datatypes.asp

        "string": {
          //a string
          "set": () => { 
          }
        },
        "number": {
          //a number

        },
        "object": {
          //an object (JSON object)

        },
        "array": {
          //an array

        },
        "boolean": {
          //a boolean

        },
        "null": {
          //null

        },


      },

      
      "mSchemaJSON": {
        //validate (JSON) Schema.....
        "set": (mGetParams) => {
          //http://json-schema.org/draft-07/schema# @required
          var mParams = mGetParams;
          var mSchema = mParams['schema'];
          var mUsrPayload = mParams['usr_payload'];

          var mErrInfo = {
            "isErr": true,
            "msg": null,
            "mErrObj": null
          };

          //set vars.....
           const Ajv = window.ajv7
           //const ajv = new Ajv();
           //https://ajv.js.org/packages/ajv-formats.html#formats
           let mOpt = {formats: {date: true, time: true,
             "date-time": true, "uuid": true }}; //options
           const ajv = new Ajv(mOpt);
           //console.log(ajv);
           


           const schema = mSchema;
           const data = mUsrPayload;
           const validate = ajv.compile(schema);
           
           const valid = validate(data)
           if (!valid) {
             //console.log(validate.errors);
             var mErr = validate.errors[0];
             mErrInfo['mErrObj'] = mErr;
             mErrInfo['msg'] = `error: errors found in validation.`;
           }else{
             //console.log("VALID DATA");
           }

           //all ok....
           return mErrInfo['msg']==null ? true : mErrInfo; //true || mErrInfo


           /*
           USAGE
           //JSON Schema (validation)
                         var mValiRes = core_1mn['mVali']['mSchemaJSON'].set({
                             "schema": schema_test,
                             "usr_payload": {
                                "mProfilePic": { 
                                    "links_mn": [
                                         
                                        {
                                          "absUrl_mn": "FHWBFCUBUB7825BS7SJK",
                                          "temps_mn": {
                                            "mMaxFileSize": 5000,
                                            "mFileType": "image/webp"
                                          }
                                        },

                                      ]
                                }
                            },
                           });
                           console.log(mValiRes);
           */
          

        }

      },


      "mFile": {
        //validate (File)
        "set": () => {

        }
      }



    },


    //form....
    "mForm": {

    "mDta": { //data....

      "f": //form code (sample)
       [

       /* {
          "elementID": core_1mn['mUniqueId'].mGenerate(11),
          "type": "input",
          "dataType": "text",
          "placeholder": "Please type your name",
          "maxLength": 50,
          //"endIco": "", 
          "autocomplete": false,
        },*/

       ]

    },

    "mUtil": {
      //create reusable utils......
      "checkbox": {
        "get": function(m0="rgba(14,112,205, 1.0)",w="1.7vh", h="1.7vh") {
          //mParams..
            //data..
            var mDta_svg = {
              "0": `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
              fill="rgba(34,34,34,0.4)" 
              class="bi bi-square" viewBox="0 0 16 16"
              style="width:${w}; height:${h}; " >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
              </svg>`,
  
              "1": `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${m0}"
              class="bi bi-check-square-fill" viewBox="0 0 16 16"
              style="width:${w}; height:${h}; " >
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
            </svg>`
            };
          //layout..
          var mDiv = document.createElement("div");
          mDiv.innerHTML = mDta_svg["0"]; 
          let mIsTick = false;
          mDiv.setAttribute("m_tick", mIsTick);
          
          //events..
          var mEvents = {
            "e": mDiv,
            "isTick": mIsTick,
            "tick": () => {
              mEvents.isTick = true;
              mDiv.setAttribute("m_tick", mEvents.isTick);
              mDiv.innerHTML = mDta_svg["1"]; 
            },
            "untick": () => {
              mEvents.isTick = false;
              mDiv.setAttribute("m_tick", mEvents.isTick);
              mDiv.innerHTML = mDta_svg["0"];
            },
          };

          return mEvents;

        }
      },
      //Auto set (datatype) of [elem] data
      "mAutoSetDataType": {
        "set": (e) => {
          //auto set [dataType] of any [element(eg. INPUT)]..Note: In case if [element] not (provided) then [it will return exact provided value [WITHOUT Modification]]
          //--Auto set (datatype) of [elem] value--//
           let mRndr = {
              "number": (getV) => {
                let mVal = getV;
                //check & set (Decimal)
                core_1mn["mCnv"].strToDecimal(getV, {
                  "onLoad": (v) => {
                     //store..
                     mVal=v;
                  },
                });
                //check & set (Integer)
                core_1mn["mCnv"].strToInteger(getV, {
                  "onLoad": (v) => {
                     //store..
                     mVal=v;
                  },
                });
                return mVal;
              },
              "text": (getV) => {
                let mVal = getV;
                return mVal;
              },
           };
            
            if (e.tagName === 'INPUT') {
               if (mRndr[e.type]==undefined) {
                 //err.. [Stop]
                 throw `[Error]: mRndr[e.type=${e.type}] (not-available)`;
               }
               //all ok..
               return mRndr[e.type](e.value);
            }
            return e;
        }
      },
      //Search [End to End search engine..]
      "search": {
        "set": (mE/*Is should be Search fld*/, mParams={}) => {
          let mFld = mE;
          mE = mFld.parentElement;

          /*
          Related =>
          https://fusejs.io/examples.html#search-string-array
          https://www.w3schools.com/howto/howto_js_filter_dropdown.asp
          */

          //console.log(mE);
          //mParams..
          let m0 = mParams["0"] != undefined?mParams["0"] : []; //Specify (itemArr) keys for [better-search] indexing..
          let m1 = mParams["1"] != undefined?mParams["1"] : []; //Specify Ignorable (itemArr) keys for [mUpdateItemArr]..
          let mCb = mParams["cb"];
          let mSend_cb = (cb_name, data) => {
           if (cb_name=="onLoad") {
                //store..
                dta_Search.s1 = data.search_txt;
                dta_Search.filter_item_idxs = data.filter_item_idxs;
            }
            if (mCb!=undefined) {
               if (mCb[cb_name]!=undefined) {
                  mCb[cb_name](data);
               }
            }
          };
          //Update [itemArr].. [it will merge new items in (arr)]
          let mUpdateItemArr = (arr, newArr, ignore_keys) => {
            let mExistCount = (arr, item) => {
              let mIgnoreKeys = ignore_keys;
              //build condition..
              let mBuildCond = (item={}, ignore_keys=[]) => {
                let c = "";  
                let item_keys = Object.keys(item);
                for (let i = 0; i < item_keys.length; i++) {
                  const mK = item_keys[i];
                  const mV = item[mK];

                  //NOTE: existance is based on (string, number, boolean).
                  //set..
                  if (ignore_keys.indexOf(mK)===-1) {
                    if (typeof mV === "string") {
                      if (i!=0) {
                        c+=`&& `;
                      }
                      c+=`e["${mK}"]==="${mV}" `;
                    }
                    if (typeof mV === "number") {
                      if (i!=0) {
                        c+=`&& `;
                      }
                      c+=`e["${mK}"]===${mV} `;
                    }
                    if (typeof mV === "boolean") {
                      if (i!=0) {
                        c+=`&& `;
                      }
                      c+=`e["${mK}"]===${mV} `;
                    }
                  }

                }
                //all ok..
                //console.log(c);
                //Sample (output) ==> e["1"]===1 && e["2"]===2 && e["4"]===4 && e["5"]===5
                return c;
                /*--USAGE--
                mBuildCond({
                2: '2',
                1: "1",
                3: "3",
              }, ["3"]);
                */
              };
              
              //check..
              const resArr = arr.filter(e => eval(mBuildCond(item, mIgnoreKeys)));
              //console.log(`mExistCount: ${JSON.stringify(resArr)}`);
              return resArr.length;

            };
            for (let i1 = 0; i1 < newArr.length; i1++) {
              const mCurr_i1 = newArr[i1];
              if (mExistCount(arr, mCurr_i1)==0) {
                 //store..
                 arr.push(mCurr_i1);
              }
            }
            return arr;
          };
          //set vars..
          let dta_Search = {
             "s1": "", //search text..
             "filter_item_idxs": [],
             "itemArr": [], //store total [Items-Array]
             "init": (itemArr=[]/*User provided itemArr*/) => {
               //store.. [curr array]..
               dta_Search["itemArr"] = itemArr;


               //log..
               /*console.log(`==================itemArr=================`);
               console.log(itemArr);*/


             },
             "err": {
              "e": document.createElement("div"),
              "init": (mE) => {
                 mE.appendChild(dta_Search.err.e);
              },
              "show": (err={"err_mn": {
                "err": {  }, 
                "res_mn": { "msg": "Not Found!" }, 
               }}) => {
                //set vars..
                let res_mn = err["err_mn"]["res_mn"];
                //let err = err["err_mn"]["err"];
                //set..
                dta_Search.err.e.innerHTML = ""; //reset..
                dta_Search.err.e.style.display = "flex";
                //set..
                dta_Search.err.e.style.justifyContent = "center";
                dta_Search.err.e.style.alignItems = "center";
                dta_Search.err.e.style.height = "3vh";
                function mSet_txt1(mE) {
                  let mTxt = document.createElement("div");
                  mTxt.innerHTML = res_mn.msg;
                  mTxt.style.fontSize = "1.4vh";
                  mE.appendChild(mTxt);
                }
                mSet_txt1(dta_Search.err.e);
              },
              "hide": () => {
                dta_Search.err.e.style.display = "none";
              }
             },
             "filter": (s1="") => {
               const mItem_Arr = dta_Search["itemArr"];
               //hide (err)..
               dta_Search.err.hide(); 
               //console.log(mItem_Arr);
               //set..[filter logic]
               let mFilterItemsIdxs = () => {
                 //https://javascript.info/regexp-anchors
                 //set vars..
                 let uCase = s1.toUpperCase();
                 let lCase = s1.toLowerCase();
                 let sCase = s1; //start (CHAR) in [upper-case]..
                 if (s1.length>1) {
                    sCase=s1[0].toUpperCase()+s1.substring(1); //eg.. "hello world!" => "Hello world!"
                 }

                 //check..
                 if (mItem_Arr.length==0) {
                    mSend_cb("onLoad", {
                    "filter_item_idxs":  [],
                    "search_txt": s1,
                    "itemArr": dta_Search.itemArr
                    });
                    return;
                 }
                 

                 //set vars.. 
                 let mItemKeys = (arr) => {
                  if (arr.length>0) {
                    return arr;
                  } 
                  arr = Object.keys(mItem_Arr[0]);
                  return arr;
                 };

                  //set..
                  const result = (arr, iKeys) => {
                   let mNewArr = []; 
                   for (let i1 = 0; i1 < arr.length; i1++) {
                    const e = arr[i1];
                    for (let i2 = 0; i2 < iKeys.length; i2++) {
                      const mKey = iKeys[i2];
                      if (typeof e[mKey] === "string") { //Only (String) is indexable..
                      if (
                      //--start-at--//
                      RegExp(`^${s1}`).test(e[mKey])==true || 
                      RegExp(`^${uCase}`).test(e[mKey])==true ||
                      RegExp(`^${lCase}`).test(e[mKey])==true ||
                      RegExp(`^${sCase}`).test(e[mKey])==true ||
                       //--any--//
                       e[mKey].indexOf(s1)!==-1 ||
                       e[mKey].indexOf(uCase)!==-1 ||
                       e[mKey].indexOf(lCase)!==-1 ||
                       e[mKey].includes(s1)) {
                        //found..
                        mNewArr.push(i1);
                      }
                      }
                      
                    }

                   }
                   //console.log(mNewArr);
                   return mNewArr;
                 };
                 //onLoad..
                 mSend_cb("onLoad", {
                  "filter_item_idxs":  result(mItem_Arr, mItemKeys(m0)),
                  "search_txt": s1,
                  "itemArr": dta_Search.itemArr
                 });

               };
               mFilterItemsIdxs();
             }
          };
          //events..
          if (mParams["init"]!=undefined) {
              mParams["init"] = (itemArr, mP={"filter":true, }) => {
              let mUpdateArr = mUpdateItemArr(dta_Search.itemArr, itemArr, m1); //update (itemArr)
              dta_Search.init(mUpdateArr); //init (Search Data [itemArr])..
              if (mP.filter==true) {
                 //reload..(filter)
                 dta_Search.filter(dta_Search.s1);
              } 
            }
          }
          if (mParams["err"]!=undefined) {
              mParams["err"] = (err={/*refer-to-1mnErrFormat*/}) => {
              if (dta_Search.filter_item_idxs.length==0) {
                  dta_Search.err.show(err);
              }
           }
          }


          //set..(Search fld)
          //events..
          mFld.onclick = (e) => {
            e.stopPropagation();
          }; 
          mFld.oninput = () => {
           //console.log(mFld.value);
           dta_Search.filter(mFld.value.trim());
         };

         //init..[err layout]
         dta_Search.err.init(mE);


         /*
          --USAGE--
           //search-UI-//
           let mFld = document.createElement("input");
           mFld.style.width = "95%";
           mFld.style.height = "5vh";
           mFld.style.border = "none";
           mFld.style.outline = "none";
           mFld.style.fontSize = "1.5vh";
           mFld.style.padding = "0 0 0 0.9vw";
           //mFld.style.backgroundColor = "rgba(34,34,34,0.05)";
           mFld.placeholder = "Search..";
           mSearch_cov.appendChild(mFld);
  
           //--Search--//
           let mSet_search = core_1mn["mForm"]["mUtil"].search.set;
           
              //set..
              let search_Params = {
                "0": [mCurrDta1['dropdown']["key"]["txt1"]],
                "1": ["mArr_cbox1", mCurrDta1['dropdown']["key"]["cbox1"], mCurrDta1['dropdown']["key"]["etxt1"]],
                "cb": {
                  "onLoad": (data={"filter_item_idxs":[], "itemArr":[]}) => {
                    console.log("=======onLoad============");
                     //--reload..(list)--//
                     mSet_ddownI(data.itemArr, false, data.filter_item_idxs);
                     //send callback.. 
                     try {
                      mCurrDta1["search"]["cb"]["onLoad"](data);
                     } catch (e) {} //Ignore
                  },
                },
                "init": (itemArr, {}) => {},
                "err": (err) => {},
                
              };
              mSet_search(mFld, search_Params);        
              //events..
              try {
                //init..(default)
                search_Params.init(mCurrDta1['dropdown']["itemArr"], {"filter":false});
                mCurrDta1["search"]["init"] = (itemArr) => {
                  console.log("===============INIT===================="); 
                  //init..
                  search_Params.init(itemArr);
                };
                mCurrDta1["search"]["err"] = (err) => {
                  console.log("===============ERR====================");
                  search_Params.err(err);
                };
              } catch (e) {} //Ignore
            */
            


         }
      },
      //mWares
      "mWares": {
        //We will check if value is (required by) Schema or not..
        "isRequired": (mSchema, key) => {
          /**
           * @mSchema => your schema
           * @key => your same payload and schema key
           * @val => your payload val
          */
          //alert(mVal)
          //alert(mKey)
          try {
            //vali..
            if (mSchema.hasOwnProperty("properties")==false ||
            mSchema.hasOwnProperty("required")==false) {
              //err..
              throw `Error: [mWares.isRequired] (mSchema)`;
            }
            //all ok..
            if (mSchema["required"].indexOf(key)!==-1) {
               //required
               return true;
            }else {
              //not required
              return false;
            }
          } catch (e) {
            throw `Error: [mWares.isRequired] ${e}`;
          }
        }
      }

    },

    "mR": { //rendrer.....

      /*
      --Global USAGE params (of all type)--
      "$mUsrDataCONF": {
        "returnDta": false, //default (true) [if=>true then ($mUsrData) will return data] [if=>false ($mUsrData) will not return data]

      }
      //https://www.w3schools.com/tags/att_input_readonly.asp
      "readonly": true, //(default (false)) [if=>true then (not editable)] [if=>false then (editable)]

      //--Events--//
      //you can set and (reload) FIELD by (assigning) this func..
      "reload": () => {},

      "hide": true, //(default (false)) [if=>true then (not viewable)] [if=>false then (viewable)]

       //-----events-------//
      "events": {
          "hide": () => {},
          "show": () => {},
      },


      */

      //Normal Text Entry (Field)
      "input": {

      "set": (mFormDiv, mCurrDta1, mG_cover) => {
          /*
          USAGE
                         {
                            "elementID": core_1mn['mUniqueId'].mGenerate(11),
                            "type": "input",
                            "dataType": "password",
                            "placeholder": "Password",
                            "maxLength": schema_test['properties']['mPassword']['maxLength'],
                            "endIco": "eye_0.svg", //"info_0.svg",
                            "autocomplete": false,
                            "label": "Password",

                            //cb..
                            "cb": {
                              "onInput": function(data){
                                var m0 = data['0']; //value
                                console.log(m0);
                              }
                            },


                            "$mUsrData": {
                                "mPassword": "",
                            },


                            "$mLogic": {
                                "mMatchWith": [
                                    "mName",
                                ]
                            }
                             
                        }, 
          */

                        



          //reload..
          if (mCurrDta1["reload"]!=undefined) {
            mCurrDta1["reload"] = () => {
               mStartE();
            }
          }      
          //start elem..        
          var mDivRoot = document.createElement("div");
          mDivRoot.style.width = "100%";
          //mDivRoot.style.margin = "1vh 0";
          mDivRoot.style.position = "relative";
          mFormDiv.appendChild(mDivRoot);

          //check (hide)..
          if (mCurrDta1.hasOwnProperty("hide")==true) {
            if (mCurrDta1["hide"]==true) {
                mDivRoot.style.display = "none";
            }
         }


           //-------events------//
           if (mCurrDta1["events"]!=undefined) {
            if (mCurrDta1["events"].hasOwnProperty("hide")==true) {
               //hide..
               mCurrDta1["events"]["hide"] = () => {
                mDivRoot.style.display = "none";
              } 
            } 
            if (mCurrDta1["events"].hasOwnProperty("show")==true) {
              //show..
              mCurrDta1["events"]["show"] = () => {
               mDivRoot.style.display = "block";
             } 
           } 
           }


          const mStartE = () => {
            mDivRoot.innerHTML = ""; //reset..

          //Tooltip....
          var mTooltip = core_1mn['tooltip']['2'].set(
            {
              "mE1": mDivRoot,
              //"mCallback": mCallback
              "0": {
                "0": 1,
                "1": "0 0 0 15%",
                "2": "rgba(252, 58, 58, 1.0)",
                "3": "0.3vw"
              },
              "1": {
                "0": "#fafafa",
                "1": "0.2vh solid rgba(252, 58, 58, 1.0)",
              },
              "2": {
                "0": "0 0 -3.8vh -1.5vw",
                "1": "4.4vh",
                "2": "15vw",
              },
          });
          //mTooltip['tt'].show(mTooltip['tt']['e'], YOUR_MSG_DIV);
          // mTooltip['tt'].hide(mTooltip['tt']['e']);

          //send cb..
          let mSend_cb = (cb_name, data) => {
             if (mCurrDta1["cb"]!=undefined) {
              if (mCurrDta1["cb"][cb_name]!=undefined) {
                  mCurrDta1["cb"][cb_name](data);
              }
             }
          };
        
          
          if(mCurrDta1.hasOwnProperty("label")==true){
            //mTopLabelDiv......
            var mTopLabelDiv = document.createElement("div");
            mTopLabelDiv.innerHTML = mCurrDta1['label'];
            mTopLabelDiv.style.textAlign = "start";
            mTopLabelDiv.style.fontSize = "1.2vh";
            mTopLabelDiv.style.color = "rgba(34,34,34, 0.6)";
            mDivRoot.appendChild(mTopLabelDiv);

          }


          var mDiv = document.createElement("div");
          mDiv.style.width = mCurrDta1['w']!=undefined ? mCurrDta1['w'] : "100%"; //100%
          mDiv.style.height = mCurrDta1['h']!=undefined ? mCurrDta1['h'] : "4.0vh"; //5vh
          //mDiv.style.margin = "1vh 0";
          mDiv.style.display = "flex";
          mDiv.style.backgroundColor = "#f2f2f2";

          mDiv.style.alignItems = "center";
          //mDiv.style.paddingRight = "0.5vw";
          if (mG_cover==undefined) {
            mDiv.style.border = "0.1vh solid rgba(34,34,34,0.2)"; //.3
            mDiv.style.borderRadius = "0.3vh";
          }
          mDivRoot.appendChild(mDiv);

          //input....
          var mInput = document.createElement("input");
          mInput.id = mCurrDta1['elementID'];

          //set (default) value..
          mInput.value = mCurrDta1['$mUsrData'][Object.keys(mCurrDta1['$mUsrData'])[0]];
          mInput.readOnly = mCurrDta1['readonly']!=undefined?mCurrDta1['readonly']:false;

          mInput.style.width = "100%";
          mInput.style.height = "100%";
          mInput.style.outline = "none";
          mInput.style.border = "none";
          mInput.style.padding = "0 0.5vw";
          mInput.style.fontSize = "1.4vh";
          mInput.style.color = "rgba(34,34,34, 0.9)";
          mInput.style.backgroundColor = "transparent";

          //set....
          mInput.setAttribute("dataType", mCurrDta1['dataType']);

          mInput.placeholder = mCurrDta1['placeholder'];
          mInput.type = mCurrDta1['dataType'];
          mInput.maxLength = mCurrDta1['maxLength'];
          mInput.autocomplete = mCurrDta1['autocomplete'];
          mDiv.appendChild(mInput);



          //events....
          mInput.onfocus = function(){
            var mCurrItemId = this.id;
            var mCurrItem = document.getElementById(mCurrItemId);
            //set
            if (mG_cover==undefined) {
              mCurrItem.parentElement.style.border = "0.1vh solid rgba(34,34,34,0.7)";
            }

            mTooltip['tt'].hide(mTooltip['tt']['e']);
          };
          mInput.onblur = function(){
            var mCurrItemId = this.id;
            var mCurrItem = document.getElementById(mCurrItemId);
            //set
            if (mG_cover==undefined) {
              mCurrItem.parentElement.style.border = "0.1vh solid rgba(34,34,34,0.2)";
            }

          };
          mInput.oninput = () => { 
            mSend_cb("onInput", {
              "0": mInput.value
            });
          };



             //here we set endIco....
           if(mCurrDta1.hasOwnProperty("endIco")==true){ 
              mSet_endIco();
           }
           function mSet_endIco() { 
            var mSvgDiv = document.createElement("div");
            mSvgDiv.style.paddingRight = "0.5vw";
            mDiv.appendChild(mSvgDiv);

              //svg.....
             var mSvgCover = core_1mn['mSvg'].set({
                 "0": mCurrDta1['endIco'],
                 "1": core_1mn['mUniqueId'].mGenerate(61),
                 "2": "2vh",
                 "3": "2vh",
                 "4": "rgba(34,34,34, 0.4)",
                 "5": mSvgDiv,
                 "cb": {
                  "onClick": (mGetCurrItem) => {
                    //alert("onClick");
                    var mCurrItem = mGetCurrItem;
                    var mInputE = document.getElementById(mCurrItem.getAttribute("e_input_id"));
                    var mSvg = mCurrItem.querySelectorAll("svg")[0];

                    //check IF (password)
                    if(mInputE.getAttribute("dataType")=="password"){
                      //set....
                      if(mInputE.type=="password"){
                        mInputE.type = "text";
                         if(mSvg!=null){
                          mSvg.style.fill = "rgba(34,34,34, 0.8)";
                         }
                      }else{
                        mInputE.type = "password";
                        if(mSvg!=null){
                          mSvg.style.fill = "rgba(34,34,34, 0.4)";
                         }
                      }
                    }
                    

                   }
                 }
                 
             });
             mSvgCover.setAttribute("e_input_id", mInput.id);
            
           }

          if(mCurrDta1.hasOwnProperty("bottomRight")==true){
              mBottomRight();
          }
          function mBottomRight() {
              if(mCurrDta1['bottomRight']['type']=="href"){
                  var mDivCover = document.createElement("div");
                  mDivCover.style.display = "flex";
                  mDivCover.style.justifyContent = "end";
                  mDivRoot.appendChild(mDivCover);
                  //set vars..
                  var mCb = mCurrDta1['bottomRight']['cb'];
                  function mSend_cb(mCb_name, data) {
                    if(mCb!=undefined){
                      if(mCb[mCb_name]!=undefined){
                        mCb[mCb_name](data);
                      }
                    }
                  }

                  var mHref = document.createElement("a");
                  mHref.id = core_1mn['mUniqueId'].mGenerate(19);
                  mHref.href = "javascript:void(0)";
                  mHref.style.fontSize = "1.2vh";
                  mHref.style.color = "rgba(34,34,34,0.5)";
                  mHref.style.fontWeight = "400";
                  mHref.innerHTML = mCurrDta1['bottomRight']['txt'];
                  mHref.style.textAlign = "end";
                  mDivCover.appendChild(mHref);
                  //events..
                  mHref.onclick = function(){
                    var mCurrItem = this.id;
                    var mCurrItem = document.getElementById(mCurrItem);
                    //send callback..
                    mSend_cb("onClick", {"e":mCurrItem}); 
                  };
              }
              
          }

           

          //****store (elements)
          mCurrDta1['mElemDta'] = {
            "mTooltip": mTooltip,
            "mInputE": mInput
          };



          }
          mStartE();

      },

      "setDataJSON": (mGetParams) => {
        var mParams = mGetParams;
        var mFormCurrItem = mParams['mFormCurrItem'];
        var mUsrPayload = mParams['mUsrPayload']; //need to (build)
        var mUsrData = mFormCurrItem['$mUsrData'];
        let mSchema = mParams['mSchema'];

        var mErrInfo = {
          "isErr": true,
          "msg": null
        };

        //data....
        var mElemDta = mFormCurrItem['mElemDta'];
        mSet_data();
        function mSet_data() {
          //var mTooltip = mElemDta['mTooltip'];
          let mInputE = mElemDta['mInputE'];
          let mInputVal = mInputE.value; //it may be updated..(below)

          //--mUtil--//
          const mAutoSetDataType = core_1mn["mForm"]["mUtil"].mAutoSetDataType;
          //--Auto set (datatype) of input value--//
          mInputVal = mAutoSetDataType.set(mInputE);
          
          //store (JSON)....
          mAddDtaIn_JSON(0, mInputVal); //mInputE.value
        }

        //($mUsrData).....
        function mAddDtaIn_JSON(mKeyI, mVal) {
          var mKey = Object.keys(mUsrData)[mKeyI];
          if(mKey==undefined){
             //error....(undefined key)
             mErrInfo['msg']=`error: (undefined key => ${mKey}) found.`;
             return;
          }
          if(mUsrPayload.hasOwnProperty(mKey)==true){
            //error....(duplicate key)
            mErrInfo['msg']=`error: (duplicate key => ${mKey}) found.`;
            return;
          }

           //all ok.....
           //mWares..
           let mWares = core_1mn["mForm"]["mUtil"]["mWares"];
           if (mWares.isRequired(mSchema, mKey)==false &&
           mVal=="") {
             //value is not ("")..
             //no need to add..
           }else {
              //console.log(mVal);
              //store....
              mUsrData[mKey] = mVal;
              //add....
              mUsrPayload[mKey] = mUsrData[mKey];
           }



           /*
           USAGE
           mAddDtaIn_JSON(mKeyI, mVal);
           */
        }
        //set vars....
        return mErrInfo['msg']==null ? true : mErrInfo; //true || mErrInfo
      }

      },  

      //Normal File Entry (Field)
      "file": {

        "set": (mFormDiv, mCurrDta1, mCover) => {
            /*
            USAGE
              {
                                          "elementID": core_1mn['mUniqueId'].mGenerate(11),
                                          "type": "file",
                                          "dataType": "file",
                                          "placeholder": "Profile Pic", 
                                          "label": "Profile Pic (Max: 100kb)",

                                          "maxLength": schema_test['properties']['mProfilePic']['properties']['links_mn']['items']['properties']['absUrl_mn']['maxLength'],
                                          "maxItems": schema_test['properties']['mProfilePic']['properties']['links_mn']['maxItems'],
                                          "mMaxFileSize": schema_test['properties']['mProfilePic']['properties']['links_mn']['items']['properties']['temps_mn']['properties']['mMaxFileSize']['maximum'],
                                          "mFileType": schema_test['properties']['mProfilePic']['properties']['links_mn']['items']['properties']['temps_mn']['properties']['mFileType']['enum'],
          
                                          "$mUsrData": {
                                              "mProfilePic": { 
                                               //"links_mn": [ //(*This will be auto generated..)
                                                      //{
                                                        //"absUrl_mn": "FHWBFCUBUB7825BS7SJK",
                                                        //"temps_mn": {
                                                          //"mMaxFileSize": 500000,
                                                          //"mFileType": "image/webp"
                                                        //}
                                                      //}

                                                  //]
                                                }
                                              },
                                               
                                          },


                                    //cb..
                                    "cb": {
                                        "onLoadTotalFiles": function(data){
                                          //var files_list = data['files_list']; //files_list
                                          //console.log(files_list);
                                        }
                                    },

                                    //--Events--//
                                    "getTotalFiles": () => {}   



            */

            /*
              const schema_test_v1 = {
                       "definitions": {},
                       "$schema": "http://json-schema.org/draft-07/schema#", 
                       "$id": "https://example.com/object1663873674.json", 
                       "title": "Root", 
                       "type": "object",
                       "required": [
                           "mProfilePic"
                       ],
                       "properties": {
                           "mProfilePic": {
                               "$id": "#root/mProfilePic", 
                               "title": "Mprofilepic", 
                               "type": "object",
                               "required": [
                                   "links_mn"
                               ],
                               "properties": {
                                   "links_mn": {
                                       "$id": "#root/mProfilePic/links_mn", 
                                       "title": "links_mn", 
                                       "type": "array",
                                       "default": [],
                                       "minItems": 1,
                                       "maxItems": 5,
                                       "items":{
                                           "$id": "#root/mProfilePic/links_mn/items", 
                                           "title": "Items", 
                                           "type": "object",
                                           "required": [
                                               "absUrl_mn",
                                               "temps_mn"
                                           ],
                                           "properties": {
                                               "absUrl_mn": {
                                                   "$id": "#root/mProfilePic/links_mn/items/absUrl_mn", 
                                                   "title": "absUrl_mn", 
                                                   "type": "string",
                                                   "default": "",
                                                   "examples": [
                                                       "FHWBFCUBUB7825BS7SJK"
                                                   ],
                                                   "pattern": "^.*$",
                                                   "minLength": 1,
                                                   "maxLength": 200,
                                               },
                                               "temps_mn": {
                                                   "$id": "#root/mProfilePic/links_mn/items/temps_mn", 
                                                   "title": "temps_mn", 
                                                   "type": "object",
                                                   "required": [
                                                       "mMaxFileSize",
                                                       "mFileType"
                                                   ],
                                                   "properties": {
                                                       "mMaxFileSize": {
                                                           "$id": "#root/mProfilePic/links_mn/items/temps_mn/mMaxFileSize", 
                                                           "title": "Mmaxfilesize", 
                                                           "type": "integer",
                                                           "examples": [
                                                               500000
                                                           ],
                                                           "default": 0,
                                                           "minimum": 1,
                                                           "maximum": 500000
                                                       },
                                                       "mFileType": {
                                                           "$id": "#root/mProfilePic/links_mn/items/temps_mn/mFileType", 
                                                           "title": "Mfiletype", 
                                                           "type": "string",
                                                           "default": "",
                                                           "examples": [
                                                               "image/webp"
                                                           ],
                                                           "pattern": "^.*$",
                                                           
                                                           "minLength": 1,
                                                           "maxLength": 30,
                                                           "enum": [
                                                           "image/jpeg",
                                                           "image/png",
                                                           "image/webp",
                                                           ]

                                                       }
                                                   },
                                                  "additionalProperties": false

                                               }
                   
                                           },
                                           "additionalProperties": false

                                       }
                   
                                   }
                               }
                           }
                   
                       }
                   };
            */                              


            var mDivRoot = document.createElement("div");
            //mDivRoot.style.margin = "1vh 0";
            mDivRoot.style.position = "relative";
            mFormDiv.appendChild(mDivRoot);

            //check (hide)..
            if (mCurrDta1.hasOwnProperty("hide")==true) {
              if (mCurrDta1["hide"]==true) {
                  mDivRoot.style.display = "none";
              }
           }


            //events..
            mDivRoot.onclick = function(){
              mTooltip['tt'].hide(mTooltip['tt']['e']);
            };

            //Tooltip....
            var mTooltip = core_1mn['tooltip']['2'].set(
              {
                "mE1": mDivRoot,
                //"mCallback": mCallback
                "0": {
                  "0": 1,
                  "1": "0 0 0 15%",
                  "2": "rgba(252, 58, 58, 1.0)",
                  "3": "0.3vw"
                },
                "1": {
                  "0": "#fafafa",
                  "1": "0.2vh solid rgba(252, 58, 58, 1.0)",
                },
                "2": {
                  "0": "0 0 -3.8vh -1.5vw",
                  "1": "4.4vh",
                  "2": "15vw",
                },
             });
            // mTooltip['tt'].show(mTooltip['tt']['e']);
            // mTooltip['tt'].hide(mTooltip['tt']['e']);
          
            //mTopLabelDiv......
            var mTopLabelDiv = document.createElement("div");
            mTopLabelDiv.innerHTML = mCurrDta1['label'];
            mTopLabelDiv.style.textAlign = "start";
            mTopLabelDiv.style.fontSize = "1.2vh";
            mTopLabelDiv.style.color = "rgba(34,34,34,0.6)";
            mDivRoot.appendChild(mTopLabelDiv);


            var mDiv = document.createElement("div");
            mDiv.style.width = "100%";
            mDiv.style.height = "15.0vh"; //4vh
            //mDiv.style.margin = "1vh 0";
            mDiv.style.display = "flex";
            mDiv.style.backgroundColor = "#f2f2f2";
            mDiv.style.alignItems = "center";
            mDiv.style.padding = "0.7vh 0 0 0";
            
            //mDiv.style.border = "0.3vh solid rgba(34,34,34,0.1)"; //.3
            mDiv.style.border = "0.1vh solid rgba(34,34,34,0.2)"; //.3
            mDiv.style.borderRadius = "0.3vh";  
            mDivRoot.appendChild(mDiv);


            //send cb..
            let mSend_cb = (cb_name, data) => {
              if (mCurrDta1["cb"]!=undefined) {
               if (mCurrDta1["cb"][cb_name]!=undefined) {
                   mCurrDta1["cb"][cb_name](data);
               }
              }
            };

            //--Events--//
            if (mCurrDta1["getTotalFiles"]!=undefined) {
              mCurrDta1["getTotalFiles"] = () => {
                   //mCurrDta1["getTotalFiles"](mCurrDta1['mElemDta']['mFileList']);
                   //send (cb)..
                   mSend_cb("onLoadTotalFiles", {
                    "files_list": mCurrDta1['mElemDta']['mFileList']
                   });
              };
            }
            

            //input....
            var mInput = document.createElement("input");
            mInput.id = mCurrDta1['elementID'];

            mInput.style.display = "none"

            mInput.style.width = "100%";
            mInput.style.height = "100%";
            mInput.style.outline = "none";
            mInput.style.border = "none";
            mInput.style.padding = "0 0.5vw";
            mInput.style.fontSize = "1.4vh";
            mInput.style.color = "rgba(34,34,34, 0.9)";
            mInput.style.backgroundColor = "transparent";

            //set....
            mInput.setAttribute("mMaxItems", mCurrDta1['maxItems']);
            mInput.setAttribute("mMaxFileSize", mCurrDta1['mMaxFileSize']);
            mInput.setAttribute("mFileType", mCurrDta1['mFileType'] );

            mInput.type = mCurrDta1['dataType'];
            mInput.accept = mCurrDta1['mFileType'];
            mInput.multiple = mCurrDta1['maxItems']>1 ? true : false;

            mDiv.appendChild(mInput);


            //events....
            mInput.onfocus = function(){
              var mCurrItemId = this.id;
              var mCurrItem = document.getElementById(mCurrItemId);
              //set
              mCurrItem.parentElement.style.border = "0.1vh solid rgba(34,34,34,0.7)";

              mTooltip['tt'].hide(mTooltip['tt']['e']);
            };
            mInput.onblur = function(){
              var mCurrItemId = this.id;
              var mCurrItem = document.getElementById(mCurrItemId);
              //set
              mCurrItem.parentElement.style.border = "0.1vh solid rgba(34,34,34,0.2)";
            };
            //file....
            mInput.onchange = function(){
              var mCurrItemId = this.id;
              var mCurrItem = document.getElementById(mCurrItemId);
              //file..
              mAdd_file(mCurrItem);

            };


            //****store (elements)
            mCurrDta1['mElemDta'] = {
              "mTooltip": mTooltip,
              "mInputE": mInput,
              "mFileList": []
            };


            function mShowTt(mMsgTxt) {
              var mTooltip = mCurrDta1['mElemDta']['mTooltip'];
              //Init (note)....
              var mMsgDiv = core_1mn['notes']['2'].set({
                "ico1": {
                    "0": "exclamation_0.svg",
                    "1": "1.6vh",
                    "2": "1.6vh",
                    "3": "rgba(252, 58, 58, 1.0)",
                },
                "txt1": {
                  "0": mMsgTxt,
                  "1": "1.2vh",
                },
              });
              //**Show.....
              mTooltip['tt'].show(mTooltip['tt']['e'], mMsgDiv);
              

            }

            

            //mFilesH_Div.....
            var mFilesH_Div = document.createElement("div");
            mFilesH_Div.style.width = "100%";
            mFilesH_Div.style.height = "100%";
            mFilesH_Div.style.display = "flex";
            mFilesH_Div.style.overflowX = "auto";
            mFilesH_Div.style.padding = "0.1vh 3vw 0 0.5vw";

            mDiv.appendChild(mFilesH_Div);
            


            //here we set file(picker).....
            mSet_filepicker();
            function mSet_filepicker() {
              var mFilePickDiv = document.createElement("label");
              mFilePickDiv.id = core_1mn['mUniqueId'].mGenerate(16);

              mFilePickDiv.style.display = "flex";
              mFilePickDiv.style.alignItems = "center";
              mFilePickDiv.style.justifyContent = "center";

              mFilePickDiv.style.margin = "0 0.2vw";
              mFilePickDiv.style.width = "7vw";
              mFilePickDiv.style.minWidth = "7vw";
              mFilePickDiv.style.height = "12vh";
              mFilePickDiv.style.backgroundColor = "rgba(34,34,34, 0.07)";
              mFilePickDiv.style.borderRadius = "0.5vh";
              mFilePickDiv.style.outline = "0.2vh dashed rgba(34,34,34, 0.5)";

              //set....
              mFilePickDiv.setAttribute("for", `${mInput.id}`);
              mFilePickDiv.setAttribute("tag_n", `mFilePicker`);
              mFilesH_Div.appendChild(mFilePickDiv);


              //mSvg..
              core_1mn['mSvg'].set({
                "0": "add_0.svg",
                //"1": "navBarOpenIcon",
                "2": "4vh",
                "3": "4vh",
                "4": "rgba(34, 34, 34, 0.2)",
                "5": mFilePickDiv,
               });


            }


            //here we add file....
            function mAdd_file(mCurrItem) {
              const curFiles = mCurrItem.files;
              var mMaxItems = parseInt(mCurrItem.getAttribute("mMaxItems"));
              var mMaxFileSize = parseInt(mCurrItem.getAttribute("mMaxFileSize"));
              var mFileType = mCurrItem.getAttribute("mFileType").split(",");
              var mFilePickDiv = mCurrItem.parentElement.querySelectorAll("[tag_n=mFilePicker]")[0];
              
              if (curFiles.length === 0) {
                  return;
              }

              //check if max files length
              if((curFiles.length + mCheck_fileListSize()) > mMaxItems){
                mShowTt(`error: max limit of files is ${mMaxItems}`);
                return;
              }

              //check files size..
              if( mNoOfFilesWithInvalid_Size() > 0 ){
                mShowTt( `error: max limit of file(Size) is ${returnFileSize(mMaxFileSize)}`  );
                return;
              }

              //check files type..
              if( mNoOfFilesWithInvalid_Type() > 0 ){
                mShowTt( `error: list of supported file formats: ${mFileType}`  );
                return;
              }

              //check if max files length (reached)....
              if((curFiles.length + mCheck_fileListSize()) == mMaxItems){
                  mFilePickDiv.style.display = "none";
              } 

              //check (Filelist array size) 
              function mCheck_fileListSize() {
                function mFil(fileVal) {
                 return fileVal != null;
                }
                var mArr = mCurrDta1['mElemDta']['mFileList'];
                var mLen = mArr.filter(mFil).length;
                return mLen;
              }

              //check no of files with invalid size..
              function mNoOfFilesWithInvalid_Size() {
                function mFil(fileVal) {
                  return fileVal.size > mMaxFileSize;
                 }
                 var mArr = Array.from(curFiles);
                 var mLen = mArr.filter(mFil).length;
                 return mLen;
              }
              function mNoOfFilesWithInvalid_Type() {
                function mFil(fileVal) {
                  return mFileType.indexOf(fileVal.type) == -1;
                }
                 var mArr = Array.from(curFiles);
                 var mLen = mArr.filter(mFil).length;
                 return mLen;
              }
              function returnFileSize(number) {
                if (number < 1024) {
                  return `${number} bytes`;
                } else if (number >= 1024 && number < 1048576) {
                  return `${(number / 1024).toFixed(1)} KB`;
                } else if (number >= 1048576) {
                  return `${(number / 1048576).toFixed(1)} MB`;
                }
              }
               
              //generate..
              for (let i1 = 0; i1 < curFiles.length; i1++) {
                const mCurrI = curFiles[i1];
                mSet_item(mCurrI, i1);
              }


              function mSet_item(mCurrI, i1) {
                //set vars....
                var file = mCurrI;

                 //add..(Additional)
                 file['m1mnMetadata'] = {
                  "absUrl_mn": core_1mn['mUniqueId'].mGenerate(20) + "_FILE",
                  "mFileType": file.type,
                  "mMaxFileSize": file.size
                };
                //add files to (Array)..
                mCurrDta1['mElemDta']['mFileList'].push(file);


              var mFileDiv = document.createElement("div");
              mFileDiv.id = core_1mn['mUniqueId'].mGenerate(44);
              //set....
              mFileDiv.setAttribute("item_index", mCurrDta1['mElemDta']['mFileList'].length-1);

              mFileDiv.style.margin = "0 0.27vw";
              mFileDiv.style.width = "7vw";
              mFileDiv.style.minWidth = "7vw";
              mFileDiv.style.height = "12vh";
              mFileDiv.style.backgroundColor = "rgba(34,34,34, 0.07)";
              mFileDiv.style.outline = "0.2vh solid rgba(34,34,34, 0.2)";
              mFileDiv.style.borderRadius = "0.5vh";

              //image(setting)
              mFileDiv.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
              mFileDiv.style.backgroundSize = "cover";
              mFileDiv.style.backgroundRepeat = "no-repeat";
              mFileDiv.style.backgroundPosition = "center";
              mFilesH_Div.appendChild(mFileDiv);


              //mActionDiv....
              var mActionDiv = document.createElement("div");
              mActionDiv.style.width = "100%";
              mActionDiv.style.padding = "0.3vh 0.6vw";
              mActionDiv.style.display = "flex";
              mActionDiv.style.alignItems = "center";
              mActionDiv.style.justifyContent = "space-between";
              mActionDiv.style.backgroundColor = "rgba(255,255,255,0.7)";
              mFileDiv.appendChild(mActionDiv);


              //mTxtDiv..
              var mTxtDiv1 = document.createElement("div");
              mTxtDiv1.style.fontSize = "1.2vh";
              mTxtDiv1.innerHTML = file.name.length>9 ? `${file.name.substring(0, 9)}...` : file.name;
              mActionDiv.appendChild(mTxtDiv1);


              //mSvg..
              core_1mn['mSvg'].set({
                "0": "trash_0.svg",
                //"1": "navBarOpenIcon",
                "2": "1.5vh",
                "3": "1.5vh",
                "4": "rgba(122, 0, 2, 1.0)",
                "5": mActionDiv,
                "cb": {
                    "onLoad": (mCurrItem) => { 
                        //console.log("onLoad");
                    },
                    "onInit": (mCurrItem) => {
                      //This will trigger immediately..
                      mCurrItem.setAttribute("item_index", mCurrDta1['mElemDta']['mFileList'].length-1);
                      mCurrItem.setAttribute("mFileDiv_ID", mFileDiv.id);
                      mCurrItem.setAttribute("mFilePickDiv_ID", mFilePickDiv.id);
                      mCurrItem.setAttribute("mInput_ID", mInput.id);
                      //console.log("onInit");
                    },
                    "onError": () => {
                        console.log("onError");
                    },
                    "onClick": (mCurrItem) => {
                      //console.log("onClick");
                      var mItemIndex = mCurrItem.getAttribute("item_index");
                      var mFileDiv_ID = mCurrItem.getAttribute("mFileDiv_ID");
                      var mFilePickDiv_ID = mCurrItem.getAttribute("mFilePickDiv_ID");
                      var mInput_ID = mCurrItem.getAttribute("mInput_ID");
                      
                      if(mItemIndex!=null){
                        mItemIndex = parseInt(mItemIndex);
                        //console.log(mItemIndex);
                        mDelete();
                      }
                      function mDelete() {
                        mCurrDta1['mElemDta']['mFileList'][mItemIndex] = null;
                        //ui..
                        var mFileDiv = document.getElementById(mFileDiv_ID);
                        mFileDiv.remove();

                        //handle(add)..
                        var mInput = document.getElementById(mInput_ID);
                        var mMaxItems = parseInt(mInput.getAttribute("mMaxItems"));
                        if(mCheck_fileListSize() != mMaxItems){
                          var mFilePickDiv = document.getElementById(mFilePickDiv_ID);
                          mFilePickDiv.style.display = "flex";

                        } 
                      }

                    }
                }
               });


              }

               
              //test..
              /*var mFileToBlob = URL.createObjectURL(mCurrDta1['mElemDta']['mFileList'][0]);
              console.log(mFileToBlob);
              mCurrDta1['mElemDta']['mFileList'][0]['m1mnMetadata'] = {
                "mUniqueFileKey": core_1mn['mUniqueId'].mGenerate(20)
              }  
              console.log(mCurrDta1['mElemDta']['mFileList'][0]);*/

             
              
            }




            //here we set bottomRight.... 
            if(mCurrDta1.hasOwnProperty("bottomRight")==true){
                mBottomRight();
            }
            function mBottomRight() {
                if(mCurrDta1['bottomRight']['type']=="href"){
                    var mDivCover = document.createElement("div");
                    mDivCover.style.display = "flex";
                    mDivCover.style.justifyContent = "end";
                    mDivRoot.appendChild(mDivCover);

                    var mHref = document.createElement("a");
                    mHref.href = "javascript:void(0)";
                    mHref.style.fontSize = "1.2vh";
                    mHref.style.color = "rgba(34,34,34,0.5)";
                    mHref.style.fontWeight = "400";
                    mHref.innerHTML = mCurrDta1['bottomRight']['txt'];
                    mHref.style.textAlign = "end";
                    mDivCover.appendChild(mHref);
                }
                
            }


            



        },


        "setDataJSON": (mGetParams) => {
          var mParams = mGetParams;
          var mFormCurrItem = mParams['mFormCurrItem'];
          var mUsrPayload = mParams['mUsrPayload']; //need to (build)
          var mUsrData = mFormCurrItem['$mUsrData'];
          var mErrInfo = {
            "isErr": true,
            "msg": null
          };

          //data....
          var mElemDta = mFormCurrItem['mElemDta']; 
          mSet_data();
          function mSet_data() {
            //var mTooltip = mElemDta['mTooltip'];
            var mInputE = mElemDta['mInputE'];
            var mFileList = mElemDta['mFileList'];
            mFileList = Array.from(mFileList); //(convert filelist => array) 

            mGenerate_links_mn();
            function mGenerate_links_mn() {
              var mVal = {
                "links_mn": [
                  /*{
                    "absUrl_mn": "FHWBFCUBUB7825BS7SJK",
                    "temps_mn": {
                      "mMaxFileSize": 500000,
                      "mFileType": "image/webp"
                    }
                  }*/
              ]
              };
              for (let i1 = 0; i1 < mFileList.length; i1++) {
                const mCurr = mFileList[i1];

                if(mCurr!=null){
                  mVal['links_mn'].push(
                    {
                      "absUrl_mn": mCurr['m1mnMetadata']['absUrl_mn'],
                      "temps_mn": {
                        "mMaxFileSize": mCurr['m1mnMetadata']['mMaxFileSize'],
                        "mFileType": mCurr['m1mnMetadata']['mFileType']
                      }
                    }
                  );
                }
               
              }
               //store (JSON)....
               mAddDtaIn_JSON(0, mVal);
            }
            
           
          }

          //($mUsrData).....
          function mAddDtaIn_JSON(mKeyI, mVal) {
            var mKey = Object.keys(mUsrData)[mKeyI];
            if(mKey==undefined){
               //error....(undefined key)
               mErrInfo['msg']=`error: (undefined key => ${mKey}) found.`;
               return;
            }
            if(mUsrPayload.hasOwnProperty(mKey)==true){
              //error....(duplicate key)
              mErrInfo['msg']=`error: (duplicate key => ${mKey}) found.`;
              return;
            }
             //all ok.....
             //store....
             mUsrData[mKey] = mVal;
             //add....
             mUsrPayload[mKey] = mUsrData[mKey];

             /*
             USAGE
             mAddDtaIn_JSON(mKeyI, mVal);
             */
          }
          //set vars....
          return mErrInfo['msg']==null ? true : mErrInfo; //true || mErrInfo
        }
        

      },

      //Dropdown Entry (Field)
      "dropdown": {

       "set": (mFormDiv, mCurrDta1, mG_cover) => {

            /*
              --USAGE--
            {
                          "elementID": core_1mn['mUniqueId'].mGenerate(11),
                          "type": "dropdown",
                          "dataType": "text",
                          "placeholder": "Pick",
                          "maxLength": 14,
                          "endIco": {
                              "0": "caret_0.svg", //"info_0.svg",
                              "1": "1.3vh",
                              "2": "1.3vh",
                              "3": "rgba(255,255,255,0.7)"
                          }, 
                          "autocomplete": false,
                          //"label": "Password", 
                          "h": "3.3vh",
                          "w": "10vw",
                          "bg": "transparent", //background-color
                          "b": "0.1vh solid rgba(255,255,255,0.8)", //border..
                          "txt": { //text..
                              "0": "rgba(255,255,255,0.7)", //text-color
                              "1": true, //isHide [default (Show)]
                          },
                          "dropdown": {
                            "0": { //config choice [layout]
                                          "0": "0vh", //mChoiceDiv.style.margin
                                          "1": "0vh", //mChoiceDiv.style.top
                                          "2": "0vh", //mChoiceDiv.style.right
                                          "3": "0vh", //mChoiceDiv.style.bottom
                                          "4": "0vh", //mChoiceDiv.style.left
                                          "5": "15vw", //mChoiceDiv.style.width
                                          "6": "15vh", //mChoiceDiv.style.height
                                },
                              "itemArr": [ 
                                  {"name":"Kannada","index":5, "ico":"/flags/new/icons/in.svg"},
                                  {"name":"Gujarati","index":6, "ico":"/flags/new/icons/in.svg"},
                                  {"name":"Malayalam","index":7, "ico":"/flags/new/icons/in.svg"},
                                  {"name":"Punjabi","index":8, "ico":"/flags/new/icons/in.svg"},
                                  {"name":"Tamil","index":9, "ico":"/flags/new/icons/in.svg"},
                                  {"name":"Telugu","index":10, "ico":"/flags/new/icons/in.svg"},
                                 
                                  ----OR----
                                  {"name":"Telugu1","index":1, "ico":"/flags/new/icons/in.svg",
                                  "cbox": true, "etxt": "0" },

                            
                                ],
                                "key": {
                                  "txt1": "name",
                                  "ico1": "ico",
                                  "cbox1": "cbox", //CheckBox
                                  "etxt1": "etxt", //EditText
                                },
                                //that key [must] be specify in [--key--(OBJ)]
                                "txt1": {
                                    "onSel": {
                                        "0": 0,
                                        "1": "code"
                                    }
                                },
                                "etxt1": { //set [config] for this (field)
                                  "dataType": "number"
                                }

                          },

                            "$mUsrData": {
                                "mLangPick": -1, //method-1 = (Single-Select => -1) for (Multi-Select => []) 
                                                //method-2 = (Single-Select => {"id1":"6"}) for (Multi-Select => [{"id1":"6"}])
                            },
                            "$mUsrDataCONF": {
                              //if only (1 key specified in (k)ARRAY) this will (set) value in (default) $mUsrData[YOUR_KEY]
                              "presentSingleKey": false, //default is (true) [--Note--: (presentSingleKey=false) only work if (k)ARRAY.length)==1 ]
                              "k": [ 
                                  //Specify [itemArr (keys)] you want to (RETURN) in ($mUsrData[YOUR_KEY])
                                  "index" //"name", "code"
                              ],

                              //(IF) Specify [itemArr (key)] you want to (SELECT item [Index] by that key) in ($mUsrData[YOUR_KEY])
                              "sel_key": "id1",


                            },

                            //cb..
                            "cb": {
                                "onPick": function(data){
                                    var m0 = data['0']; //item index
                                    var m1 = data['1']; //item
                                    console.log(m0);
                                    console.log(m1);
                                },
                                "onClick": () => {
                                    alert();
                                }
                            },

                            //--(search) can be used for [items]--// //Note: If items more than (4) then [search-will-(AUTO)integrate]
                            "search": {
                              "init": (itemArr) => {},
                              "err": (err) => {},
                              "cb": {
                                  "onLoad": (data) => { //on load..items
                                      console.log(data.filter_item_idxs);
                                      if (data.filter_item_idxs.length==0) {
                                          //we need to search [on server]
                                          console.log("we need to search [on server]");
                                           //call Api..
                                           mHintsFromSrvr({
                                              "filter_by": "latest",
                                              "hintTyp": [5],
                                              "search": data.search_txt
                                            }, {
                                              "onLoad": (dta, res_mn) => {
                                                  //----Success----//
                                                    console.log("====mHintsFromSrvr(onLoad)====");
                                                    console.log(dta['l']["add_ingredients"]);
                                                    //init search.. also [it will (Update => dropdown.itemArr)]
                                                    fld_CSR_Store_id.search.init(dta['l']["add_ingredients"]);
                                              },
                                              "onErr": (err, res_mn) => {
                                                    //----Error----//
                                                    console.log("====mHintsFromSrvr(onErr)====");
                                                    //set err..
                                                    fld_CSR_Store_id.search.err({
                                                      "err_mn": {
                                                          "err": err,
                                                          "res_mn": res_mn,
                                                      }
                                                    });
                                              },
                                            });

                                      }
                                  },
                              }
                          },

                             
                        }*/
        
        
        //reload..
        if (mCurrDta1["reload"]!=undefined) {
          mCurrDta1["reload"] = () => {
             mStartE();
          }
        }      
        //start elem..
         //layout..                
         var mDivRoot = document.createElement("div");
         mDivRoot.style.width = "100%";
         //mDivRoot.style.margin = "1vh 0";
         mDivRoot.style.position = "relative";
         mFormDiv.appendChild(mDivRoot);

         
          //check (hide)..
          if (mCurrDta1.hasOwnProperty("hide")==true) {
            if (mCurrDta1["hide"]==true) {
                mDivRoot.style.display = "none";
            }
         }


           //-------events------//
           if (mCurrDta1["events"]!=undefined) {
            if (mCurrDta1["events"].hasOwnProperty("hide")==true) {
               //hide..
               mCurrDta1["events"]["hide"] = () => {
                mDivRoot.style.display = "none";
              } 
            } 
            if (mCurrDta1["events"].hasOwnProperty("show")==true) {
              //show..
              mCurrDta1["events"]["show"] = () => {
               mDivRoot.style.display = "block";
             } 
           } 
           }


        const mStartE = () => {
          mDivRoot.innerHTML = ""; //reset..       
        //set vars..
        if (mCurrDta1.hasOwnProperty("txt")==false) {
           mCurrDta1["txt"]={};
        }   

        //events..
        mDivRoot.onclick = (e) => {
          mInputClc(e);
        };
        

        //Tooltip....
        var mTooltip = core_1mn['tooltip']['2'].set(
          {
            "mE1": mDivRoot,
            //"mCallback": mCallback
            "0": {
              "0": 1,
              "1": "0 0 0 15%",
              "2": "rgba(252, 58, 58, 1.0)",
              "3": "0.3vw"
            },
            "1": {
              "0": "#fafafa",
              "1": "0.2vh solid rgba(252, 58, 58, 1.0)",
            },
            "2": {
              "0": "0 0 -3.8vh -1.5vw",
              "1": "4.4vh",
              "2": "15vw",
            },
        });
        // mTooltip['tt'].show(mTooltip['tt']['e']);
        // mTooltip['tt'].hide(mTooltip['tt']['e']);
      
        //mTopLabelDiv......
        if(mCurrDta1['label']!=undefined){
        var mTopLabelDiv = document.createElement("div");
        mTopLabelDiv.innerHTML = mCurrDta1['label'];
        mTopLabelDiv.style.textAlign = "start";
        mTopLabelDiv.style.fontSize = "1.2vh";
        mTopLabelDiv.style.color = "rgba(34,34,34,0.6)";
        mDivRoot.appendChild(mTopLabelDiv);                
        }


        var mDiv = document.createElement("div");
        mDiv.style.width = mCurrDta1['w']!=undefined ? mCurrDta1['w'] : "100%"; //100%
        mDiv.style.height = mCurrDta1['h']!=undefined ? mCurrDta1['h'] : "4.0vh"; //5vh
        //mDiv.style.margin = "1vh 0";
        mDiv.style.display = "flex";
        mDiv.style.backgroundColor = mCurrDta1['bg']!=undefined ? mCurrDta1['bg'] : "#f2f2f2"; //#f2f2f2

        mDiv.style.alignItems = "center";
        //mDiv.style.paddingRight = "0.5vw";
    
        if (mG_cover==undefined) {
          mDiv.style.border = mCurrDta1['b']!=undefined ? mCurrDta1['b'] : "0.1vh solid rgba(34,34,34,0.2)"; //.3
          mDiv.style.borderRadius = "0.3vh";
        }
        mDivRoot.appendChild(mDiv);


        //----CHECK and SET (sel_item_idx)----//
       //Specify [itemArr (key)] you want to (SELECT item [Index] by that key) in ($mUsrData[YOUR_KEY])
       let mSet_sel_item_idx = (selItemIdx, itemArr, cb={"onLoad":()=>{}}) => {
           if (mCurrDta1.hasOwnProperty("$mUsrDataCONF")==true) {
            if (mCurrDta1["$mUsrDataCONF"].hasOwnProperty("sel_key")==true) {
                //need to set..
                let m_sel_key = mCurrDta1['$mUsrDataCONF']["sel_key"];
                //console.log(`m_sel_key: ${m_sel_key}`);
                let mSet = (mCurrI, cb={"onLoad":()=>{}}) => {

                  let mGetIdxFrmKey = (k, a, val, cb={"onLoad":()=>{}}) => {
                    let mIdx = a.findIndex(e => e[k]==val);
                    //console.log(k, a, val);
                    if (mIdx===-1) {
                       //err..
                       //throw `Error: (sel_key=${k}) not found in (itemArr)`;
                       console.log(`skipping: \n
                       {throw Error: (sel_key=${k}) not found in (itemArr)}
                       \n
                       `);
                    }else {
                      //all ok..
                      cb.onLoad(mIdx);
                    }
                  };

                  if (typeof mCurrI === "object") {
                    //{}
                    //set..
                     if (mCurrI.hasOwnProperty(m_sel_key)==true) {
                      mGetIdxFrmKey(m_sel_key, itemArr, mCurrI[m_sel_key], {
                        "onLoad": (idx) => { 
                          //console.log(`==mGetIdxFrmKey.idx==: ${idx}`);
                          cb.onLoad(idx);
                         }
                       });
                     }else {
                      console.log(`
                      skipping:  not found ${mCurrI}[${m_sel_key}]
                      `);
                     }
                   }else {
                     //not a object..
                     mGetIdxFrmKey(m_sel_key, itemArr, mCurrI, {
                      "onLoad": (idx) => { 
                        //console.log(`==mGetIdxFrmKey.idx==: ${idx}`);
                        cb.onLoad(idx);
                       }
                     });
                   }

                };
                if (Array.isArray(selItemIdx)==true) {
                   //array..
                   let mNew = [];
                   for (let i0 = 0; i0 < selItemIdx.length; i0++) {
                    const eCurr1 = selItemIdx[i0]; 
                    mSet(eCurr1, {
                      "onLoad": (idx) => { 
                        mNew.push(idx);
                      }
                    });
                   }
                   //all ok.. 
                   cb.onLoad(mNew);
                }else {
                   //not a array..
                   let mNew = -1;
                   mSet(selItemIdx, {
                    "onLoad": (idx) => {
                      //all ok..
                      mNew = idx;
                     }
                   });
                   //all ok..
                   cb.onLoad(mNew);

                }
            }
           } 
       };
       mSet_sel_item_idx(mCurrDta1['$mUsrData'][Object.keys(mCurrDta1['$mUsrData'])[0]],
        mCurrDta1['dropdown']["itemArr"], {
        "onLoad": (mNew) => {
          mCurrDta1['$mUsrData'][Object.keys(mCurrDta1['$mUsrData'])[0]] = mNew;
        }
       });
       /*console.log(`mCurrDta1['$mUsrData'][Object.keys(mCurrDta1['$mUsrData'])[0]]:
       ${mCurrDta1['$mUsrData'][Object.keys(mCurrDta1['$mUsrData'])[0]]}`);*/


       //send callback..
       let mSend_cb = function(mCb_name, data){
        if(mCurrDta1['cb']!=undefined){
         if(mCurrDta1['cb'][mCb_name]!=undefined){
           mCurrDta1['cb'][mCb_name](data);
         }
        }
       };
        



                     //input....
                     var mInput = document.createElement("div");
                      
                     mInput.id = mCurrDta1['elementID'];
                     /*--OLD--*/ //mInput.setAttribute("sel_item_idx", mCurrDta1['$mUsrData'][Object.keys(mCurrDta1['$mUsrData'])[0]]);
                    /*--NEW--*/ if (Array.isArray(mCurrDta1['$mUsrData'][Object.keys(mCurrDta1['$mUsrData'])[0]])==true) {
                     mInput.setAttribute("sel_item_idx", `[${mCurrDta1['$mUsrData'][Object.keys(mCurrDta1['$mUsrData'])[0]]}]` );
                     }else {
                      mInput.setAttribute("sel_item_idx", mCurrDta1['$mUsrData'][Object.keys(mCurrDta1['$mUsrData'])[0]]);
                     }

                     mInput.style.userSelect = "none";
                     mInput.style.display = mCurrDta1['txt']['1']!=undefined ? "none" : "flex";
                     mInput.style.alignItems = "center";
                     mInput.style.width = "100%";
                     mInput.style.height = "100%";
                     mInput.style.outline = "none";
                     mInput.style.border = "none";
                     mInput.style.padding = "0 0.5vw";
                     mInput.style.fontSize = "1.4vh";
                     mInput.style.backgroundColor = "transparent";
                     mInput.innerHTML = mCurrDta1['placeholder'];
                     mInput.style.color = mCurrDta1['txt']['0']!=undefined ? mCurrDta1['txt']['0'] : "rgba(34,34,34,0.6)"; //#343434

                     //events......
                     mInput.onclick = function(e){
                        mInputClc(e);
                     };
                     function mInputClc(e) {
                      //send cb..
                      mSend_cb("onClick", {});
                      if (mCurrDta1["readonly"]!=undefined) {
                        if (mCurrDta1["readonly"]==true) {
                            //stop [--Pick--]
                            return;
                        }
                      }

                      //var mCurrItemId = this.id; //OLD
                      var mCurrItemId = mInput.id; //NEW
                      e.stopPropagation();
                      var mCurrItem = document.getElementById(mCurrItemId);
                      var mDropdownID = mCurrItem.getAttribute("dropdownID");
                      var mDropdown = document.getElementById(mDropdownID);

                      //alert(mDropdownID)
                      mTooltip['tt'].hide(mTooltip['tt']['e']);


                      //open or close....(Dropdown)
                      if(mDropdown.style.display == "none"){
                        mOpenDropDown();
                        function mOpenDropDown() {
                          //First close all dropdowns.....
                          var mFormArr = mFormDiv.querySelectorAll("div");
                          for (let i1 = 0; i1 < mFormArr.length; i1++) {
                            const mCurrDiv = mFormArr[i1];//dropdownID
                        
                            var mDropdownID = mCurrDiv.getAttribute("dropdownID");
                            if(mDropdownID!=null){
                              //dropdown found......
                              var mSelDropdown = document.getElementById(mDropdownID);
                              mSelDropdown.style.display = "none";
                            }
                          }

                          //show current.....
                         mDropdown.style.display = "block";
                        }
                      }else{
                          mDropdown.style.display = "none";                            
                      }


                       //events.....
                       window.onclick = function() {
                        if(mDropdown.style.display == "block"){
                            mDropdown.style.display = "none";                        
                        }
                      }; 
                      
                     }

                     mDiv.appendChild(mInput);




           //here we set endIco....
         if(mCurrDta1.hasOwnProperty("endIco")==true){ 
            mSet_endIco();
         }
         function mSet_endIco() { 
            var mSvgDiv = document.createElement("div");
            mSvgDiv.style.paddingRight = "0.5vw";
            mDiv.appendChild(mSvgDiv);

            //svg.....
           var mSvgCover = core_1mn['mSvg'].set({
               "0": mCurrDta1['endIco']['0'],
               "1": core_1mn['mUniqueId'].mGenerate(61),
               "2": mCurrDta1['endIco']['1']!=undefined ? mCurrDta1['endIco']['1'] : "2vh",
               "3": mCurrDta1['endIco']['2']!=undefined ? mCurrDta1['endIco']['2'] : "2vh",
               "4": mCurrDta1['endIco']['3']!=undefined ? mCurrDta1['endIco']['3'] : "rgba(34,34,34, 0.4)",
               "5": mSvgDiv,
               "cb": {
                "onClick": (mGetCurrItem) => {
                  //alert("onClick");
                  var mCurrItem = mGetCurrItem;
                  var mInputE = document.getElementById(mCurrItem.getAttribute("e_input_id"));
                  var mSvg = mCurrItem.querySelectorAll("svg")[0];

                  //check IF (password)
                  if(mInputE.getAttribute("dataType")=="password"){
                    //set....
                    if(mInputE.type=="password"){
                      mInputE.type = "text";
                       if(mSvg!=null){
                        mSvg.style.fill = "rgba(34,34,34, 0.8)";
                       }
                    }else{
                      mInputE.type = "password";
                      if(mSvg!=null){
                        mSvg.style.fill = "rgba(34,34,34, 0.4)";
                       }
                    }
                  }
                  

                 }
               }
               
           });
           mSvgCover.setAttribute("e_input_id", mInput.id);
          
         }

        if(mCurrDta1.hasOwnProperty("bottomRight")==true){
            mBottomRight();
        }
        function mBottomRight() {
            if(mCurrDta1['bottomRight']['type']=="href"){
                var mDivCover = document.createElement("div");
                mDivCover.style.display = "flex";
                mDivCover.style.justifyContent = "end";
                mDivRoot.appendChild(mDivCover);
                //set vars..
                var mCb = mCurrDta1['bottomRight']['cb'];
                function mSend_cb(mCb_name, data) {
                  if(mCb!=undefined){
                    if(mCb[mCb_name]!=undefined){
                      mCb[mCb_name](data);
                    }
                  }
                }

                var mHref = document.createElement("a");
                mHref.id = core_1mn['mUniqueId'].mGenerate(19);
                mHref.href = "javascript:void(0)";
                mHref.style.fontSize = "1.2vh";
                mHref.style.color = "rgba(34,34,34,0.5)";
                mHref.style.fontWeight = "400";
                mHref.innerHTML = mCurrDta1['bottomRight']['txt'];
                mHref.style.textAlign = "end";
                mDivCover.appendChild(mHref);
                //events..
                mHref.onclick = function(){
                  var mCurrItem = this.id;
                  var mCurrItem = document.getElementById(mCurrItem);
                  //send callback..
                  mSend_cb("onClick", {"e":mCurrItem}); 
                };
            }
            
        }




        //set vars..
        if (mCurrDta1["dropdown"]['0']==undefined) {
          mCurrDta1["dropdown"]['0']={};
        }
        const mCurrDta1_dd0 = mCurrDta1["dropdown"]['0'];
        

        //set choice list......
        mSet_choiceList();
        function mSet_choiceList() {
         //mChoiceDiv..
         let mChoiceDiv = document.createElement("div");
         mChoiceDiv.style.display = "none";

         mChoiceDiv.id = core_1mn['mUniqueId'].mGenerate(11);
         //add id to input......
         mInput.setAttribute("dropdownID", mChoiceDiv.id);
         //add id to dropdown......
         mChoiceDiv.setAttribute("inputID", mInput.id);

         mChoiceDiv.style.userSelect = "none";
         mChoiceDiv.style.zIndex = "1";

         mChoiceDiv.style.position = "absolute";
         mChoiceDiv.style.margin = mCurrDta1_dd0["0"]!=undefined?mCurrDta1_dd0["0"] : "4.0vh 0 0 0"; //T R B L
         mChoiceDiv.style.top = mCurrDta1_dd0["1"]!=undefined?mCurrDta1_dd0["1"] : "0";
         mChoiceDiv.style.width = mCurrDta1_dd0["5"]!=undefined?mCurrDta1_dd0["5"] : "20vw";
         /*mChoiceDiv.style.height = mCurrDta1_dd0["6"]!=undefined?mCurrDta1_dd0["6"] : "20vh";*/
         if (mCurrDta1_dd0["2"]!=undefined) {
           mChoiceDiv.style.right = mCurrDta1_dd0["2"];
         }
         if (mCurrDta1_dd0["3"]!=undefined) {
          mChoiceDiv.style.bottom = mCurrDta1_dd0["3"];
         }
         if (mCurrDta1_dd0["4"]!=undefined) {
          mChoiceDiv.style.left = mCurrDta1_dd0["4"];
         }

         mChoiceDiv.style.boxShadow = "0 0.5vh 0.5vh 0 rgba(0,0,0,0.2)";
         mChoiceDiv.style.backgroundColor = "rgba(255,255,255)";
         mDivRoot.appendChild(mChoiceDiv);


         //mSearch cov..
         let mSearch_cov = document.createElement("div");
         mChoiceDiv.appendChild(mSearch_cov);


         //mChoiceItems..
         let mChoiceItems = document.createElement("div");
         mChoiceItems.style.overflowY = "auto";
         mChoiceItems.style.minHeight = "0";
         mChoiceItems.style.maxHeight = mCurrDta1_dd0["6"]!=undefined?mCurrDta1_dd0["6"] : "20vh";
         mChoiceDiv.appendChild(mChoiceItems);


         /*
         {
           "name": "Afghanistan",
           "dial_code": "+93",
           "code": "AF",
           "index": 0,
           "ico": 'sample.svg',
           --OR--
           "cbox": true
           "etxt": "0",
         },
         */

         /*
          "dropdown": {
            "itemArr": mData['countriesArray'],
            "key": {
              "txt1": "name",
              "ico1": "ico",
              "cbox1": "cbox",
              "etxt1": "etxt", 
            }
          }
         */
 

         //set dropdown items..
         //let mArr_cbox1 = []; /*OLD*/
         //--Reserved keys--// ====> [mArr_cbox1] (Note: these key cannot be used or provide by user.)
         let mAddKey1 /*NEW*/ = (mE, arr) => {
            for (let i1 = 0; i1 < arr.length; i1++) {
              const mCurr = arr[i1];
              //vali..
              if (mCurr["mArr_cbox1"]!=undefined) { 
                 try {
                  if (mE.body.contains(mCurr["mArr_cbox1"])==false) {
                    //err..
                    throw "err: [mArr_cbox1] must be a DOM element.";
                  }
                 } catch (e) { } //Ignore..
              }
              if (mCurr["mArr_cbox1"]==undefined) {
                  //all ok..
                  //update..
                  mCurrDta1['dropdown']["itemArr"][i1]["mArr_cbox1"] = null; //later we will add (data).
              } 
            }
         };
         let mSet_ddownI = (itemArr, isAutoPick=false, showByFilter=false||[/*filtered item indexes*/]) => {
          mChoiceItems.innerHTML = ""; //reset..
          //Update => dropdown.itemArr
          mCurrDta1['dropdown']["itemArr"] = itemArr; 
          mAddKey1(mChoiceItems, mCurrDta1['dropdown']["itemArr"]);

         //set vars.....
         let mDropdownDta = mCurrDta1['dropdown'];
         let mItem_Arr = mDropdownDta['itemArr'];
         let mKey = mDropdownDta['key'];
         let mKey_txt1 = mDropdownDta['txt1'];
         //console.log(mCurrDta1);
         //console.log(mCurrDta1['dropdown']["itemArr"]); 

         //func..
         function mSet_pick(mItemIndex, mInput) { 

          //input..(sel)..
          var mSel_fld = {

            "mUtils": {
              "chip": (idx) => {
                var mDiv = document.createElement("div");
                mDiv.setAttribute("dd_item_idx", idx);
                mDiv.setAttribute("cover_type", "chip");
                mDiv.style.backgroundColor = "rgba(34,34,34, 0.2)";
                mDiv.style.borderRadius = "2vh";
                mDiv.style.padding = "0.5vh 0.5vw";
                mDiv.style.margin = "0.3vh 0.2vw";
                mDiv.style.color = mCurrDta1['txt']['0']!=undefined ? mCurrDta1['txt']['0'] : "#343434";
                return mDiv;
              }
            },

            "txt1": (mItemIndex, isRemove=false) => {
              if(mKey.hasOwnProperty("txt1")==true){
                //check if key available if array.....
                if(mItem_Arr[mItemIndex].hasOwnProperty(mKey['txt1'])==true){
                    var mChip_ARR = mInput.querySelectorAll(`[cover_type="chip"]`);           
                    if (mChip_ARR.length==0 && mInput.getAttribute("sel_item_idx").includes("[")==false) {
                        mInput.innerHTML = mItem_Arr[mItemIndex][mKey['txt1']];
                        mInput.style.color = mCurrDta1['txt']['0']!=undefined ? mCurrDta1['txt']['0'] : "#343434";
                    }else {
                      //multi-select..
                      if (mChip_ARR.length==0){
                        mInput.innerHTML = "";
                        mInput.style.display = "flex";
                      }
                      if (isRemove==false) {
                         //add..
                         var mChip = mSel_fld["mUtils"].chip(mItemIndex);
                         mChip.innerHTML = mItem_Arr[mItemIndex][mKey['txt1']];
                         mInput.appendChild(mChip);
                         //tick..
                         mCurrDta1['dropdown']["itemArr"][mItemIndex]["mArr_cbox1"]["events"].tick(); //--OLD-- mArr_cbox1[mItemIndex]["events"].tick();
                      }else {
                        //remove..
                        mInput.querySelector(`[dd_item_idx="${mItemIndex}"]`)
                        .remove();
                         //un-tick..
                         mCurrDta1['dropdown']["itemArr"][mItemIndex]["mArr_cbox1"]["events"].untick(); //--OLD-- mArr_cbox1[mItemIndex]["events"].untick();
                         
                         //set (Placeholder).. if 0 multiselection
                         if (mInput.querySelectorAll(`[dd_item_idx]`).length==0) {
                             mInput.innerText = mCurrDta1['placeholder'];
                         } 

                      }
                      
                    }
                }
              }
            },
            "ico1": (mItemIndex, isRemove=false) => {
              if(mKey.hasOwnProperty("ico1")==true){
                //check if key available if array.....
                if(mItem_Arr[mItemIndex].hasOwnProperty(mKey['ico1'])==true){
                 mInput.innerHTML = 
                  //"<div style='width:2.5vh; height:2.5vh;'>"+ mItem_Arr[mItemIndex][mKey['ico1']].svg() + "</div>" +
                  `<div> ${mItem_Arr[mItemIndex][mKey['ico1']].innerHTML} </div>
                  
                  <!--txt1-->
                  ${
                   //check [hide=>0, show=>1]
                   mKey_txt1['onSel']['0']!=0 ? 
                   "<!--Space--> <div style='width:0.7vw'> </div>" +
                   mKey_txt1['onSel']['1']!=undefined?
  
                   "<!--Space--> <div style='width:0.7vw'> </div>" +
                   mItem_Arr[mItemIndex][mKey_txt1['onSel']['1']] :
  
                   "<!--Space--> <div style='width:0.7vw'> </div>" +
                   mItem_Arr[mItemIndex][mKey['txt1' ]] 
                   
                   :
                   ""
                  }
  
                  `;   
  
                } 
              }
            }

          };
           
          
          //set selected item to Input.....
          if ( typeof mItemIndex == "number" && mInput.getAttribute("sel_item_idx").includes("[")==false ) {
             mInput.setAttribute("sel_item_idx", mItemIndex);
             //send callback..
             mSend_cb("onPick", {"0":mItemIndex, "1": mItem_Arr[mItemIndex]});
             //pick..
             mSel_fld["txt1"](mItemIndex);
             mSel_fld["ico1"](mItemIndex);
          }else {
            //multi-selection (array)..
            var mSel_arr = mInput.getAttribute("sel_item_idx").split(" "); 
            var mSelNew_arr = [];
            var isAlreadyExists = false;
            //filter (data)..
            for (let i1 = 0; i1 < mSel_arr.length; i1++) {
              const mCurr_I1 = mSel_arr[i1];
              try {
                var mInt = parseInt(mCurr_I1);
                if (mInt >= 0) {
                  if (mInt==mItemIndex) {
                    isAlreadyExists=true;
                  }
                  mSelNew_arr.push(` ${mInt} `);
                }
              } catch (error) { //ignore..
              }
            }


            //check if already not exists..
            if (isAlreadyExists==false) {
              mSelNew_arr.push(` ${mItemIndex} `);
              mInput.setAttribute("sel_item_idx", `[${mSelNew_arr.toString()}]` );
              //send callback..
              mSend_cb("onPick", {"0":mItemIndex, "1": mItem_Arr[mItemIndex]});

              if (typeof mItemIndex == "number") {
                //pick..
                mSel_fld["txt1"](mItemIndex);
                mSel_fld["ico1"](mItemIndex); 

              }

            }else {
              //already exists..
              //remove..
              mSelNew_arr.splice(mSelNew_arr.indexOf(` ${mItemIndex} `), 1);
              //set..
              mInput.setAttribute("sel_item_idx", `[${mSelNew_arr.toString()}]` );
              if (typeof mItemIndex == "number") {
                //pick..
                mSel_fld["txt1"](mItemIndex, true);
                mSel_fld["ico1"](mItemIndex, true);
              }
            }
          }


         
         }

         function mSet_Items(mCurrDta, i1) {
           var mItem = document.createElement("div");
           mItem.id = core_1mn['mUniqueId'].mGenerate(11);
           mItem.setAttribute("item_index", i1);

           mItem.style.width = "100%";
           mItem.style.height = "5vh";
           mItem.style.backgroundColor = "rgba(255,255,255,0.8)";
           mItem.style.borderBottom = "0.1vh solid rgba(34,34,34,0.1)";

           //events......
           mItem.onmouseover = function(){
             mItem.style.backgroundColor = "rgba(34,34,34,0.06)";
           };
           mItem.onmouseout = function(){
             mItem.style.backgroundColor = "rgba(255,255,255,0.8)";
           };

           mItem.onclick = function(e){ 
             var mCurrItemId = this.id;
             var mCurrItem = document.getElementById(mCurrItemId);
             var mItemIndex = parseInt(mCurrItem.getAttribute("item_index"));
             var mChoiceDivId = mCurrItem.parentElement.parentElement;
             var mInputId = mChoiceDivId.getAttribute("inputID");
             var mInput = document.getElementById(mInputId);
             //pick item..
             mSet_pick(mItemIndex, mInput);
             if (mInput.getAttribute("sel_item_idx").includes("[")==true) {
              //mult-selection is on..
              e.stopPropagation();
             }
           }; 
           mChoiceItems.appendChild(mItem);
           
           function mSet_content(i1) {
              var mDixHori = document.createElement("div");
              mDixHori.style.height = "100%";
              mDixHori.style.display = "flex";
              mDixHori.style.alignItems = "center";
              mDixHori.style.padding = "0 1vw";
              mItem.appendChild(mDixHori);

              

              if(mKey.hasOwnProperty("ico1")==true){
               //check if key available if array.....
               if(mCurrDta.hasOwnProperty(mKey['ico1'])==true){
                 mSet_ico1();
               }
              }
              function mSet_ico1() {  
                //set svg....
                core_1mn['mSvg'].set({
                  "0":  mCurrDta[mKey['ico1']], //"list_0.svg",
                  "2": "2vh",
                  "3": "2vh",
                  "4": "rgba(34,34,34, 0.4)",
                  "5": mDixHori,
                  "cb": {
                      "onLoad": (mCurrItem) => {
                          //use (svg)
                      },
                      "onInit": (mCurrItem) => {
                         //This will trigger immediately..
                         //store (ico)..
                         mCurrDta[mKey['ico1']] = mCurrItem;
                      },
                      "onError": () => {
                      },
                      "onClick": (mCurrItem) => {
                          //alert("onClick");
                      }
                  }
                 });

               
              }

              //cbox1
              if(mKey.hasOwnProperty("cbox1")==true){
                //check if key available if array.....
                if(mCurrDta.hasOwnProperty(mKey['cbox1'])==true){
                  mSet_cbox1();
                }
               }
               function mSet_cbox1() {  
                 //set checkbox....
                 //mCurrDta[mKey['cbox1']]
                 /*
                 --OLD--
                 //mDixHori
                 var mEvents = core_1mn["mForm"]["mUtil"]["checkbox"].get();
                 mDixHori.appendChild(mEvents["e"]);
                 //if (mCurrDta[mKey['cbox1']]==true) {
                    //mEvents.tick();
                 //} 
                 //store.....
                 --OLD-- mArr_cbox1.push({
                  "events": mEvents
                 });*/

                 //--NEW--//
                 let mEvents = null;
                 if (mCurrDta1['dropdown']["itemArr"][i1]["mArr_cbox1"]==null) {
                  //mDixHori
                  mEvents = core_1mn["mForm"]["mUtil"]["checkbox"].get();
                  mDixHori.appendChild(mEvents["e"]);
                  //store..
                  mCurrDta1['dropdown']["itemArr"][i1]["mArr_cbox1"] = {
                   "events": mEvents
                  };
                 }else {
                  mEvents = mCurrDta1['dropdown']["itemArr"][i1]["mArr_cbox1"]["events"];
                  mDixHori.appendChild(mEvents["e"]); 
                 }
                 if (mEvents.isTick==true) {
                  mEvents.tick();
                 }else {
                  mEvents.untick();
                 }

               }


              if(mKey.hasOwnProperty("txt1")==true){
                //check if key available if array.....
                if(mCurrDta.hasOwnProperty(mKey['txt1'])==true){
                 mSet_txt1();
               }
              }
              function mSet_txt1() {
                  var mDiv = document.createElement("div");
                  mDixHori.appendChild(mDiv);

                  //mTxt.........
                  var mTxt = document.createElement("p");
                  mTxt.style.fontSize = "1.45vh";
                  mTxt.style.margin = "0 0.6vw";
                  mTxt.style.padding = "0";
                  mTxt.style.color = "rgba(34,34,34,0.6)";
                  mTxt.innerHTML = mCurrDta[mKey['txt1']];
                  mDiv.appendChild(mTxt);

              }


              if(mKey.hasOwnProperty("etxt1")==true){
                //check if key available if array.....
                if(mCurrDta.hasOwnProperty(mKey['etxt1'])==true){
                 mSet_etxt1();
               }
              }
              function mSet_etxt1() {
                  var mDiv = document.createElement("div");
                  mDixHori.appendChild(mDiv);

                  //mETxt.........
                  var mETxt = document.createElement("input");
                  mETxt.style.width = "3vw";
                  mETxt.style.height = "1.8vh";
                  mETxt.style.borderRadius = "1vh";
                  mETxt.style.border = "none";
                  mETxt.style.outline = "none";
                  mETxt.style.fontSize = "1.45vh";
                  mETxt.style.margin = "0 0.6vw";
                  mETxt.style.padding = "0.2vh 0.5vw";
                  mETxt.style.color = "rgba(34,34,34,0.6)";
                  mETxt.style.backgroundColor = "rgba(34,34,34, 0.1)";
                  mETxt.value = mCurrDta[mKey['etxt1']];

                  //dataType..
                  try {
                    let dTyp = mCurrDta1['dropdown']['etxt1']["dataType"];
                    mETxt.type = dTyp;
                  } catch (e) {/*Ignore*/}


                  mDiv.appendChild(mETxt);
                  //events..
                  mETxt.onclick = function(e) {
                    e.stopPropagation();
                  };
                  //store..
                  mCurrDta1['dropdown']['itemArr'][i1][mKey['etxt1']] = mETxt;

              }


           }
           mSet_content(i1);

         }

         //gen..
         const mGenI = () => {  
           if (showByFilter==false && typeof showByFilter === "boolean") {
            //items.....
            for (let i1 = 0; i1 < mItem_Arr.length; i1++) {
              const mCurrDta = mItem_Arr[i1];
              mSet_Items(mCurrDta, i1);
             }
           }else {
            //items..... //[/*filtered item indexes*/]
            for (let i1 = 0; i1 < mItem_Arr.length; i1++) {
              const mCurrDta = mItem_Arr[i1];
              const foundIdx = showByFilter.indexOf(i1);
              if (foundIdx!==-1) {
                  //found (idx)..
                  mSet_Items(mCurrDta, i1);
              }
             }
             
           }
         }
         mGenI();
        
         //auto pick..[If data provided]
         function mAuto_pick() { 
          //check if index (provided)..
          var item_index = mCurrDta1['$mUsrData'][Object.keys(mCurrDta1['$mUsrData'])[0]];
          if(item_index>=0 && typeof item_index == "number"){ //single sel..
              //pick item..
              //set vars..
              mSet_pick(item_index, mInput);
              return;
          }
          if (typeof item_index === "object" && Array.isArray(item_index)==true) {
            if (item_index.length>0) {
              //console.log(`==Multi sel=`);
              //pick item..
              //set vars..
              let mApplyAllSel = (a) => {
                for (let i = 0; i < a.length; i++) {
                  const e = a[i]; //sel one by one..
                  mSet_pick(e, mInput);
                }
              };
              mApplyAllSel(item_index);
              return;              
             }
          }

         }
         if (isAutoPick==true) {
             mAuto_pick();          
         }

         };
         mSet_ddownI(mCurrDta1['dropdown']["itemArr"], true, false); //default..
         /*console.log("=======mAddKey1 (Modification)========");
         console.log(mCurrDta1['dropdown']["itemArr"]);*/


          //search....
          if (mCurrDta1.hasOwnProperty("search")==true
          || mCurrDta1['dropdown']["itemArr"].length>4
          ) {

          //search-UI-//
          let mFld = document.createElement("input");
          mFld.style.width = "95%";
          mFld.style.height = "5vh";
          mFld.style.border = "none";
          mFld.style.outline = "none";
          mFld.style.fontSize = "1.5vh";
          mFld.style.padding = "0 0 0 0.9vw";
          //mFld.style.backgroundColor = "rgba(34,34,34,0.05)";
          mFld.placeholder = "Search..";
          mSearch_cov.appendChild(mFld);
 
          //--Search--//
          let mSet_search = core_1mn["mForm"]["mUtil"].search.set;
          
             //set..
             let search_Params = {
               "0": [mCurrDta1['dropdown']["key"]["txt1"]],
               "1": ["mArr_cbox1", mCurrDta1['dropdown']["key"]["cbox1"], mCurrDta1['dropdown']["key"]["etxt1"]],
               "cb": {
                 "onLoad": (data={"filter_item_idxs":[], "itemArr":[]}) => {
                   //console.log("=======onLoad============");
                    //--reload..(list)--//
                    mSet_ddownI(data.itemArr, false, data.filter_item_idxs);
                    //send callback.. 
                    try {
                     mCurrDta1["search"]["cb"]["onLoad"](data);
                    } catch (e) {/*ignore*/}
                 },
               },
               "init": (itemArr, {}) => {},
               "err": (err) => {},
               
             };
             mSet_search(mFld, search_Params);        
             //events..
             try {
               //init..(default)
               search_Params.init(mCurrDta1['dropdown']["itemArr"], {"filter":false});
               mCurrDta1["search"]["init"] = (itemArr) => {
                 //console.log("===============INIT===================="); 
                 //init..
                 search_Params.init(itemArr);
               };
               mCurrDta1["search"]["err"] = (err) => {
                 //console.log("===============ERR====================");
                 search_Params.err(err);
               };
             } catch (e) {/*Ignore*/}
 
          }


          




         
        }

        
        //****store (elements)
        mCurrDta1['mElemDta'] = {
          "mTooltip": mTooltip,
          "mInputE": mInput
        };

        

        };
        mStartE();


       },

       "setDataJSON": (mGetParams) => {
        var mParams = mGetParams;
        var mFormCurrItem = mParams['mFormCurrItem'];
        var mUsrPayload = mParams['mUsrPayload']; //need to (build)
        var mUsrData = mFormCurrItem['$mUsrData'];
        let mUsrDataCONF = mFormCurrItem['$mUsrDataCONF'];
        let mSchema = mParams["mSchema"];
                                                      
        

        var mErrInfo = {
          "isErr": true,
          "msg": null
        };
         

        //data....
        var mElemDta = mFormCurrItem['mElemDta']; 
        mSet_data();
        function mSet_data() {
          //var mTooltip = mElemDta['mTooltip'];
          var mInputE = mElemDta['mInputE'];

          //here we check selection type & return selection value..
          const mCheckSelTyp = (sel_item_idx) => {
             if (Number.isInteger(parseInt(sel_item_idx))) {
                //found (Single Selection).. eg => -1, 0, 1, 2 etc.
                return parseInt(sel_item_idx);
             }
             if (Array.isArray(eval(sel_item_idx))) {
                //found (Multi Selection).. eg => [0, 1]
                return eval(sel_item_idx);
             }
             //error....(undefined selection type)
             mErrInfo['msg']=`error: (undefined selection type found.`;
             return -1;
          };
          
          //store (JSON)....
          //mAddDtaIn_JSON(0, mInputE.value);
          //test
          var mSelItemIdx = -1;
          try {
            mSelItemIdx = mCheckSelTyp(mInputE.getAttribute("sel_item_idx")); //parseInt(mInputE.getAttribute("sel_item_idx"))
            mAddDtaIn_JSON(0, mSelItemIdx);
          } catch (error) {
            mAddDtaIn_JSON(0, mSelItemIdx);
          }
        }

        //($mUsrData).....
        function mAddDtaIn_JSON(mKeyI, mVal) {
          var mKey = Object.keys(mUsrData)[mKeyI];
          if(mKey==undefined){
             //error....(undefined key)
             mErrInfo['msg']=`error: (undefined key => ${mKey}) found.`;
             return;
          }
          if(mUsrPayload.hasOwnProperty(mKey)==true){
            //error....(duplicate key)
            mErrInfo['msg']=`error: (duplicate key => ${mKey}) found.`;
            return;
          }
           //all ok.....
           //--mUtil--//
           const mAutoSetDataType = core_1mn["mForm"]["mUtil"].mAutoSetDataType;

            //--experimental (Start)--//
           let mTest = () => {
            //--dta_UsrSel--//
           let dta_UsrSel = { //--Not full Implemented--//
            "mIsUserSel": false, //is some data selected by "USER"
            "mSingleSel": {
              "expectedVal": -1,
              "set": (v) => {
                if (typeof v === "number") {
                   return -1;
                }
                if (typeof v === "string") {
                   return "";
                }
                if (typeof v === "object" && Array.isArray(v)==false) {
                   return {};
                }
                if (typeof v === "object" && Array.isArray(v)==true) {
                   return [];
                }
              }
            },
            "init": () => { 
               let mSelItem = mFormCurrItem["dropdown"]["itemArr"][0];
               let mValItem = {};
               for (let i1 = 0; i1 < mUsrDataCONF["k"].length; i1++) {
                 const mCurr_I1 = mUsrDataCONF["k"][i1];
                 try {
                 //vali..
                 if (mSelItem[mCurr_I1]==undefined) {
                     //error..
                     mErrInfo['msg']=`error: mUsrDataCONF['k'][${mCurr_I1}] not found in (itemArr)`;
                     return;
                 }
                 //all ok..
                 if (mUsrDataCONF["presentSingleKey"]==undefined || mUsrDataCONF["presentSingleKey"]==true) {
                     //store..
                     dta_UsrSel.mSingleSel.expectedVal = mAutoSetDataType.set(mSelItem[mCurr_I1]);
                 }else {
                  /* //false..
                   if (mUsrDataCONF["k"].length==1 && mUsrDataCONF["presentSingleKey"]==false) {
                      //store in $mUsrData[YOUR_KEY]
                      mValItem = mAutoSetDataType.set(mSelItem[mCurr_I1]);
                   }else {
                     //error..
                     mErrInfo['msg']=`error: (presentSingleKey=false) only work if (k)ARRAY.length)==1`;
                     return;
                   }*/
                 }
                 } catch (e) {
                    //console.log(`Error: ${e}`);
                    console.log(`Error: may be (itemArr) is empty!`);
                    //store..
                    dta_UsrSel.mSingleSel.expectedVal = "";
                 }

               } 


            }
         };
         //init..
         dta_UsrSel.init();
           }
            //--experimental (End)--//


           //single (sel)..
           const mSingleSel = (mVal) => {
            let mSelItem = mFormCurrItem["dropdown"]["itemArr"][mVal];
              let mValItem = {};
              for (let i1 = 0; i1 < mUsrDataCONF["k"].length; i1++) {
                const mCurr_I1 = mUsrDataCONF["k"][i1];
                //vali..
                if (mSelItem[mCurr_I1]==undefined) {
                    //error..
                    mErrInfo['msg']=`error: mUsrDataCONF['k'][${mCurr_I1}] not found in (itemArr)`;
                    return;
                }
                //all ok..
                if (mUsrDataCONF["presentSingleKey"]==undefined || mUsrDataCONF["presentSingleKey"]==true) {
                    //store in $mUsrData[YOUR_KEY][itemArr_KEY]
                    mValItem[mCurr_I1] = mAutoSetDataType.set(mSelItem[mCurr_I1]);
                }else {
                  //false..
                  if (mUsrDataCONF["k"].length==1 && mUsrDataCONF["presentSingleKey"]==false) {
                     //store in $mUsrData[YOUR_KEY]
                     mValItem = mAutoSetDataType.set(mSelItem[mCurr_I1]);
                  }else {
                    //error..
                    mErrInfo['msg']=`error: (presentSingleKey=false) only work if (k)ARRAY.length)==1`;
                    return;
                  }
                }
              } 
              if (mErrInfo['msg']===null) {
                //all ok..
                mSetVal(mValItem);
                return mValItem;
              }else{
                //error..
                mSetVal(-1);
              }

           };
           //multi (sel)..
           const mMultiSel = (mVal) => {
              let mValItem_ARR = [];
              for (let i1 = 0; i1 < mVal.length; i1++) {
                const mCurr_I1 = mVal[i1];
                console.log(mCurr_I1);
                //set..
                let mValItem = mSingleSel(mCurr_I1);
                mValItem_ARR.push(mValItem);
              }
              if (mErrInfo['msg']===null) {
                 //all ok..
                 mSetVal(mValItem_ARR);
              }else{
                //error..
                mSetVal([]);
              }
           };
           //set default..
           mSetVal(mVal);
           //if ($mUsrDataCONF) available.. (overwrite [default])
           if (mUsrDataCONF!=undefined) {
            if (Number.isInteger(mVal) && mVal >= 0) {
               //set..(single selection)
               mSingleSel(mVal);
               return;
            }
            if (Array.isArray(mVal) && mVal.length >= 1) {
              //set..(multi selection)
              mMultiSel(mVal);
              return;
            }
           }
           //store..
           function mSetVal(mVal) {
            //--experimental (Start)--//
            let mTest = () => {
              if (dta_UsrSel.mIsUserSel==false &&
                dta_UsrSel.mSingleSel.expectedVal!=-1 &&
                Array.isArray(mUsrPayload[mKey])==false  //cannot be multi-selection (type)
                ) {
                //we auto set (un-selected) data with (user expected datatype)//
                if (mVal==-1) {
                    //alert(dta_UsrSel.mSingleSel.expectedVal);
                    mVal = dta_UsrSel.mSingleSel.set(dta_UsrSel.mSingleSel.expectedVal);
                }
              }
            }
            //--experimental (End)--// 

            //mWares..
            let mWares = core_1mn["mForm"]["mUtil"]["mWares"];


            if (mWares.isRequired(mSchema, mKey)==false &&
            mVal=="" || 
            mWares.isRequired(mSchema, mKey)==false &&
            mVal==-1) {
              //value is not ("" || -1)..
              //no need to add..
            }else {
               //console.log(mVal);
              //store....
              mUsrData[mKey] = mVal;
              //add....
              mUsrPayload[mKey] = mUsrData[mKey];  
            }

            //log..
            //console.log(mUsrPayload);


           }


           /*
           USAGE
           mAddDtaIn_JSON(mKeyI, mVal);
           */
        }
        //set vars....
        return mErrInfo['msg']==null ? true : mErrInfo; //true || mErrInfo
       }

      },

      //Date Picker (Field)
      "datepckr": {

        "set": (mFormDiv, mCurrDta1, mCover) => {
            /*
            USAGE
                {
                              "elementID": core_1mn['mUniqueId'].mGenerate(11),
                              "type": "datepckr",
                              "dataType": "text",
                              "placeholder": "dd/mm/yyyy",
                              "maxLength": 10, //schema_test['properties']['DOB']['maxLength']
                              "endIco": {
                                  "0": "calendar_1.svg", //"info_0.svg",
                                  "1": "1.3vh",
                                  "2": "1.3vh",
                                  //"3": "rgba(255,255,255,0.7)"
                              },
                              "autocomplete": false,
                              "label": "DOB",

                              "$mUsrData": {
                                  "DOB": "",
                              },

                               //--cb--//
                              "cb": {
                                      "onPick": (mV) => {
                                        let m0 = mV["0"]; //mFinalDT
                                        let m1 = mV["1"]; //mHumanReadableDT
                                                                        
                                      }
                                  },


                              //"$mLogic": {
                                 // "mMatchWith": [
                                      //"mName",
                                  //]
                              //}
                               
                              },
            */

            
            
          //reload..
          if (mCurrDta1["reload"]!=undefined) {
            mCurrDta1["reload"] = () => {
               mStartE();
            }
           }      
          //start elem..
            var mDivRoot = document.createElement("div");
            mDivRoot.style.width = "100%";
            //mDivRoot.style.margin = "1vh 0";
            mDivRoot.style.position = "relative";
            mFormDiv.appendChild(mDivRoot);


          const mStartE = () => {
            mDivRoot.innerHTML = ""; //reset..
             //check (hide)..
             if (mCurrDta1.hasOwnProperty("hide")==true) {
              if (mCurrDta1["hide"]==true) {
                  mDivRoot.style.display = "none";
              }
            }

            //-------events------//
            if (mCurrDta1["events"]!=undefined) {
              if (mCurrDta1["events"].hasOwnProperty("hide")==true) {
                 //hide..
                 mCurrDta1["events"]["hide"] = () => {
                  mDivRoot.style.display = "none";
                } 
              } 
              if (mCurrDta1["events"].hasOwnProperty("show")==true) {
                //show..
                mCurrDta1["events"]["show"] = () => {
                 mDivRoot.style.display = "block";
               } 
             } 
             }


            //Tooltip....
            var mTooltip = core_1mn['tooltip']['2'].set(
              {
                "mE1": mDivRoot,
                //"mCallback": mCallback
                "0": {
                  "0": 1,
                  "1": "0 0 0 15%",
                  "2": "rgba(252, 58, 58, 1.0)",
                  "3": "0.3vw"
                },
                "1": {
                  "0": "#fafafa",
                  "1": "0.2vh solid rgba(252, 58, 58, 1.0)",
                },
                "2": {
                  "0": "0 0 -3.8vh -1.5vw",
                  "1": "4.4vh",
                  "2": "15vw",
                },
            });
            // mTooltip['tt'].show(mTooltip['tt']['e']);
            // mTooltip['tt'].hide(mTooltip['tt']['e']);
          
            //label..
           if(mCurrDta1.hasOwnProperty("label")==true){
            //mTopLabelDiv......
            var mTopLabelDiv = document.createElement("div");
            mTopLabelDiv.innerHTML = mCurrDta1['label'];
            mTopLabelDiv.style.textAlign = "start";
            mTopLabelDiv.style.fontSize = "1.2vh";
            mTopLabelDiv.style.color = "rgba(34,34,34,0.6)";
            mDivRoot.appendChild(mTopLabelDiv);
           }

           //send cb..
           let mSend_cb = (cb_name, data) => {
            if (mCurrDta1["cb"]!=undefined) {
             if (mCurrDta1["cb"][cb_name]!=undefined) {
                 mCurrDta1["cb"][cb_name](data);
             }
            }
           }; 



            var mDiv = document.createElement("div");
            mDiv.style.width = mCurrDta1['w']!=undefined ? mCurrDta1['w'] : "100%"; //100%
            mDiv.style.height = mCurrDta1['h']!=undefined ? mCurrDta1['h'] : "4.0vh"; //5vh

            //mDiv.style.margin = "1vh 0";
            mDiv.style.display = "flex";
            mDiv.style.backgroundColor = "#f2f2f2";

            mDiv.style.alignItems = "center";
            //mDiv.style.paddingRight = "0.5vw";
            
            //mDiv.style.border = "0.3vh solid rgba(34,34,34,0.1)"; //.3
            mDiv.style.border = "0.1vh solid rgba(34,34,34,0.2)"; //.3
            mDiv.style.borderRadius = "0.3vh";  
            mDivRoot.appendChild(mDiv);

            //input....
            var mInput = document.createElement("div");
            mInput.id = mCurrDta1['elementID'];
            mInput.setAttribute("value", mCurrDta1['$mUsrData'][Object.keys(mCurrDta1['$mUsrData'])[0]]);


            mInput.style.width = "100%";
            mInput.style.height = "100%";
            mInput.style.outline = "none";
            mInput.style.border = "none";
            mInput.style.padding = "0 0.5vw";
            mInput.style.fontSize = "1.4vh";
            mInput.style.color = "rgba(34,34,34, 0.9)";
            mInput.style.backgroundColor = "transparent";

            //set....
            mInput.setAttribute("dataType", mCurrDta1['dataType']);

            mInput.innerText = mCurrDta1['placeholder'];
            
            mInput.type = mCurrDta1['dataType'];
            mInput.style.display = "flex";
            mInput.style.alignItems = "center";

            mDiv.appendChild(mInput);


            function mCloseAllDropDown() {
              //First close all dropdowns.....
              var mFormArr = mFormDiv.querySelectorAll("div");
              for (let i1 = 0; i1 < mFormArr.length; i1++) {
                const mCurrDiv = mFormArr[i1];//dropdownID
            
                var mDropdownID = mCurrDiv.getAttribute("dropdownID");
                if(mDropdownID!=null){
                  //dropdown found......
                  var mSelDropdown = document.getElementById(mDropdownID);
                  mSelDropdown.style.display = "none";
                }
              }

              
            }

             //events......
             mInput.onclick = function(e){
              var mCurrItemId = this.id;
              e.stopPropagation();
              var mCurrItem = document.getElementById(mCurrItemId);
              var mDropdownID = mCurrItem.getAttribute("dropdownID");
              var mDropdown = document.getElementById(mDropdownID);

              //alert(mDropdownID)
              mTooltip['tt'].hide(mTooltip['tt']['e']); 

              //open or close....(Dropdown)
              if(mDropdown.style.display == "none"){
                mCloseAllDropDown();
               
                //show current.....
                mDropdown.style.display = "block";
              }else{
                mDropdown.style.display = "none";
              }

               //events.....
               window.onclick = function() {
                if(mDropdown.style.display == "block"){
                  mDropdown.style.display = "none";
                }
              };


             };

 

            //here we set endIco....
           if(mCurrDta1.hasOwnProperty("endIco")==true){ 
            mSet_endIco();
           }
           function mSet_endIco() { 
            var mSvgDiv = document.createElement("div");
            mSvgDiv.style.paddingRight = "0.5vw";
            mDiv.appendChild(mSvgDiv);

            //svg.....
           var mSvgCover = core_1mn['mSvg'].set({
               "0": mCurrDta1['endIco']['0'],
               "1": core_1mn['mUniqueId'].mGenerate(61),
               "2": mCurrDta1['endIco']['1']!=undefined ? mCurrDta1['endIco']['1'] : "2vh",
               "3": mCurrDta1['endIco']['2']!=undefined ? mCurrDta1['endIco']['2'] : "2vh",
               "4": mCurrDta1['endIco']['3']!=undefined ? mCurrDta1['endIco']['3'] : "rgba(34,34,34, 0.4)",
               "5": mSvgDiv,
               "cb": {
                "onClick": (mGetCurrItem) => {
                  //alert("onClick");
                  var mCurrItem = mGetCurrItem;
                  var mInputE = document.getElementById(mCurrItem.getAttribute("e_input_id"));
                  var mSvg = mCurrItem.querySelectorAll("svg")[0];

                  //check IF (password)
                  if(mInputE.getAttribute("dataType")=="password"){
                    //set....
                    if(mInputE.type=="password"){
                      mInputE.type = "text";
                       if(mSvg!=null){
                        mSvg.style.fill = "rgba(34,34,34, 0.8)";
                       }
                    }else{
                      mInputE.type = "password";
                      if(mSvg!=null){
                        mSvg.style.fill = "rgba(34,34,34, 0.4)";
                       }
                    }
                  }
                  

                 }
               }
               
           });
           mSvgCover.setAttribute("e_input_id", mInput.id);
          
           }




            if(mCurrDta1.hasOwnProperty("bottomRight")==true){
                mBottomRight();
            }
            function mBottomRight() {
                if(mCurrDta1['bottomRight']['type']=="href"){
                    var mDivCover = document.createElement("div");
                    mDivCover.style.display = "flex";
                    mDivCover.style.justifyContent = "end";
                    mDivRoot.appendChild(mDivCover);
                    //set vars..
                    var mCb = mCurrDta1['bottomRight']['cb'];
                    function mSend_cb(mCb_name, data) {
                      if(mCb!=undefined){
                        if(mCb[mCb_name]!=undefined){
                          mCb[mCb_name](data);
                        }
                      }
                    }

                    var mHref = document.createElement("a");
                    mHref.id = core_1mn['mUniqueId'].mGenerate(19);
                    mHref.href = "javascript:void(0)";
                    mHref.style.fontSize = "1.2vh";
                    mHref.style.color = "rgba(34,34,34,0.5)";
                    mHref.style.fontWeight = "400";
                    mHref.innerHTML = mCurrDta1['bottomRight']['txt'];
                    mHref.style.textAlign = "end";
                    mDivCover.appendChild(mHref);
                    //events..
                    mHref.onclick = function(){
                      var mCurrItem = this.id;
                      var mCurrItem = document.getElementById(mCurrItem);
                      //send callback..
                      mSend_cb("onClick", {"e":mCurrItem}); 
                    };
                }
                
            }

            


             //set date picker......
             mSet_datePicker();
             function mSet_datePicker() {
              var mDatePickDiv = document.createElement("div");
              mDatePickDiv.style.display = "none";
              mDatePickDiv.style.position = "relative";

              mDatePickDiv.id = core_1mn['mUniqueId'].mGenerate(11);
              //add id to input......
              mInput.setAttribute("dropdownID", mDatePickDiv.id);
              //add id to dropdown......
              mDatePickDiv.setAttribute("inputID", mInput.id);

              mDatePickDiv.style.userSelect = "none";
              mDatePickDiv.style.zIndex = "1";

              mDatePickDiv.style.position = "absolute";
              mDatePickDiv.style.top = "0";
              mDatePickDiv.style.marginTop = "4.0vh";

              mDatePickDiv.style.boxShadow = "0 0.5vh 0.5vh 0 rgba(0,0,0,0.2)";
              mDatePickDiv.style.width = "20vw";
              mDatePickDiv.style.height = "35vh";
              mDatePickDiv.style.backgroundColor = "rgba(255,255,255)";
              mDatePickDiv.style.overflowY = "auto"; 

              //events....
              mDatePickDiv.onclick = function(e){
                e.stopPropagation();
              }

              mDivRoot.appendChild(mDatePickDiv);



              //--auto sel--//  (--Currently this (Func) just a TEMPORARY Solution--)
              let mAutoSel = (mInput) => {
                if (mInput.getAttribute("value").trim()!="") {
                  let mInputVal = mInput.getAttribute("value").trim();
                  const d = new Date(mInputVal); //"2021-03-25"
                  try {
                    if (typeof d.getDate() !== "number") {
                      //err..
                      return;
                    }
                    //all ok..
                    //show in [Input Field]..
                    mInput.innerHTML = d.toDateString();
                    /*console.log(d.getDate(), date );
                    console.log(d.getFullYear(), year );
                    console.log(d.getMonth(), month );*/
                    //alert(d.toDateString())
                    //check..
                    /*if (d.getDate() === date
                    && d.getFullYear() === year && d.getMonth() === month ) {
                      console.log(`==mAutoSel==`);
                      mSel(cell);
                    }*/
                  } catch (e) { } //Ignore..
                  //console.log(mInputVal);
              
                } 
              };
              //auto sel..
              mAutoSel(mInput);



                
               
//set vars.....
let today = new Date();
let currentMonth = today.getMonth(); //return(int) 2
let currentYear = today.getFullYear(); //return(int) 2022
var mCalenPayload = {

"mSelDate": {
"month": currentMonth,
"year": currentYear,
"day": null
},

"weeks": [
"S",
"M",
"T",
"W",
"T",
"F",
"S",
],

"months": [
"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
],

"years": []

};



mGenerateYears();
function mGenerateYears() {
let currentYear = parseInt(today.getFullYear());
var mMinYear = 1980;
for (let i1 = mMinYear; i1 < currentYear+1; i1++) {
mCalenPayload['years'].push(i1);
}
}



//mCoverCalen2.....
var mCoverCalen2 = document.createElement("div");
mCoverCalen2.style.display = "flex";
mCoverCalen2.style.justifyContent = "center";
mCoverCalen2.style.paddingTop = "1.5vh";
mDatePickDiv.appendChild(mCoverCalen2);


var mMonthDiv = null;
var mMonthPckr_open = false;
mSet_month();
function mSet_month() {
mMonthDiv = document.createElement("div");
mMonthDiv.style.backgroundColor = "rgba(34,34,34,0.05)";
mMonthDiv.style.borderRadius = "0.2vh";
mMonthDiv.style.height = "3vh";
mMonthDiv.style.width = "6vw";
mMonthDiv.style.display = "flex";
mMonthDiv.style.alignItems = "center";
mMonthDiv.style.justifyContent = "center";

//events....
mMonthDiv.onclick = function(){  
if(mMonthPckr_open == false){
//need to open..
mMonthPckr_open = true;
mYearPckr_open = false;
mCreateBottomPopup(mCalenPayload['months'], "months");
}else{
//need to close..
mMonthPckr_open = false;
mClose_BottomPopup();
}
};

mCoverCalen2.appendChild(mMonthDiv);

//mP1.....
var mP1 = document.createElement("span");
mP1.style.fontSize = "1.5vh";
mP1.style.fontWeight = "450";

mP1.style.color = "rgba(34,34,34,0.7)";
mP1.innerHTML = mCalenPayload['months'][currentMonth];
mMonthDiv.appendChild(mP1);

//mSpace....
var mSpace = document.createElement("div");
mSpace.style.width = "0.7vw";
mMonthDiv.appendChild(mSpace);

mSet_ico();
function mSet_ico() {  
//set svg1..
function mSet_Svg1() {
core_1mn['mSvg'].set({
  "0": "caret_0.svg",
  //"1": ,
  "2": "1.3vh",
  "3": "1.3vh",
  "4": "rgba(34,34,34, 0.6)",
  "5": mMonthDiv,
  "cb": {
      /*"onClick": (mCurrItem) => {
          //alert("onClick");
          //close..
      }*/
  }
});
}
mSet_Svg1(); 

}


}

//mSpace....
var mSpace = document.createElement("div");
mSpace.style.width = "2vw";
mCoverCalen2.appendChild(mSpace);


var mYearDiv = null;
var mYearPckr_open = false;
mSet_year();
function mSet_year() {
mYearDiv = document.createElement("div");
mYearDiv.style.backgroundColor = "rgba(34,34,34,0.05)";
mYearDiv.style.borderRadius = "0.2vh";
mYearDiv.style.height = "3vh";
mYearDiv.style.width = "6vw";
mYearDiv.style.display = "flex";
mYearDiv.style.alignItems = "center";
mYearDiv.style.justifyContent = "center";

//events....
mYearDiv.onclick = function(){ 
if(mYearPckr_open == false){
//need to open..
mYearPckr_open = true;
mMonthPckr_open = false;
mCreateBottomPopup(mCalenPayload['years'], "years");
}else{
//need to close..
mYearPckr_open = false;
mClose_BottomPopup();
}
};

mCoverCalen2.appendChild(mYearDiv);

//mP1.....
var mP1 = document.createElement("span");
mP1.style.fontSize = "1.5vh";
mP1.style.fontWeight = "450";

mP1.style.color = "rgba(34,34,34,0.7)";
mP1.innerHTML = currentYear;
mYearDiv.appendChild(mP1);

//mSpace....
var mSpace = document.createElement("div");
mSpace.style.width = "0.7vw";
mYearDiv.appendChild(mSpace);

mSet_ico();
function mSet_ico() {  

//set svg1..
function mSet_Svg1() {
core_1mn['mSvg'].set({
  "0": "caret_0.svg",
  //"1": ,
  "2": "1.3vh",
  "3": "1.3vh",
  "4": "rgba(34,34,34, 0.6)",
  "5": mYearDiv,
  "cb": {
      /*"onClick": (mCurrItem) => {
          //alert("onClick");
          //close..
      }*/
  }
});
}
mSet_Svg1(); 


}


}





//mCoverCalen1.....
var mCoverCalen1 = document.createElement("div");
mCoverCalen1.style.display = "flex";
mCoverCalen1.style.justifyContent = "center";
mCoverCalen1.style.paddingTop = "2vh";
mDatePickDiv.appendChild(mCoverCalen1);


//create elements....
var mTableE = document.createElement("table");
mTableE.style.fontSize = "1.5vh";
mCoverCalen1.appendChild(mTableE);

//mTHeadE.....
var mTHeadE = document.createElement("thead");
mTableE.appendChild(mTHeadE);

//mTrE....
var mTrE = document.createElement("tr");
mTrE.style.color = "rgba(34,34,34,0.5)";
mTHeadE.appendChild(mTrE);

//space..
core_1mn['space']['set']({
"h": "0.8vh",
"e1": mTableE
});

//mTBody....
var mTBody = document.createElement("tbody");
//add Input ID to tbody......
mTBody.setAttribute("inputID", mInput.id);
mTBody.style.fontSize = "1.5vh"; 
mTableE.appendChild(mTBody);

mCreateWeek();
function mCreateWeek() {
for (let i1 = 0; i1 < mCalenPayload['weeks'].length; i1++) {
const mCurrE = mCalenPayload['weeks'][i1];
//mThE.....
var mThE = document.createElement("th");
mThE.innerHTML = mCurrE;
mTrE.appendChild(mThE);

}
}





//create bottom popup....
var mBottomPopup_Div = document.createElement("div");
mDatePickDiv.appendChild(mBottomPopup_Div); 
var mBottomPopUp = null;
//create bottom popup....
//mCreateBottomPopup(mCalenPayload['years']);
function mCreateBottomPopup(mGetItemArr, mKey1) {
//clear
core_1mn.mClearLayout(mBottomPopup_Div);

//mDiv1...........
var mDiv1 = document.createElement("div");
mDiv1.style.width = "100%";
mDiv1.style.height = "28vh"; //25vh
mDiv1.style.position = "absolute";
mDiv1.style.bottom = "0";
//mDiv1.style.backgroundColor = "red";
mBottomPopup_Div.appendChild(mDiv1);
//store.....
mBottomPopUp = mDiv1;


//mCoverDiv1......
var mCoverDiv1 = document.createElement("div");
mCoverDiv1.style.width = "100%";
mCoverDiv1.style.height = "100%";
mCoverDiv1.style.position = "absolute";
mDiv1.appendChild(mCoverDiv1);


//mSection1.......
//mSet_section1();
function mSet_section1() {
var mSection = document.createElement("div");
mSection.style.width = "100%";
mSection.style.display = "flex";
mSection.style.justifyContent = "center";
mCoverDiv1.appendChild(mSection);


}


//mSection2.......
mSection2();
function mSection2() {
var mDiv = document.createElement('div');
mDiv.style.width = "100%";
mDiv.style.height = "100%"; //98%
//mDiv.style.overflowY = "auto";
mDiv.style.boxShadow = "0.3vh 0 0.5vh -2px rgba(0,0,0,0.2); transition: 0.9s";
mDiv.style.backgroundColor = "rgba(255,255,255, 1.0)";
mDiv.style.overflowY = "hidden";
mCoverDiv1.appendChild(mDiv);


//mItemCover.....
var mItemCover = document.createElement("div");
mItemCover.style.overflowY = "auto";
mItemCover.style.height = "100%";
//mItemCover.style.paddingTop = "1vh";
mItemCover.style.display = "flex";
mItemCover.style.justifyContent = "center";
mItemCover.style.flexWrap = "wrap";

mDiv.appendChild(mItemCover);

//set vars....
var mItem_Arr = mGetItemArr;

//set items.....
mSet_items();
function mSet_items() {
for (let i1 = 0; i1 < mItem_Arr.length; i1++) {
const mCurrDta = mItem_Arr[i1];

var mItem = document.createElement("div");

mItem.id = core_1mn['mUniqueId'].mGenerate(11);
mItem.setAttribute("item_index", i1);

mItem.innerHTML = mCurrDta;

mItem.style.display = "flex";
mItem.style.justifyContent = "center";
mItem.style.alignItems = "center";

mItem.style.fontSize = "1.5vh";
mItem.style.color = "rgba(34,34,34,0.8)";
mItem.style.fontWeight = "450";

mItem.style.width = "5vw";
mItem.style.height = "3.5vh";
mItem.style.backgroundColor = "rgba(34,34,34,0.01)"; //rgba(255,255,255,0.8)

mItem.style.border = "0.1vh solid rgba(34,34,34,0.1)";
mItem.style.borderRadius = "1vh";

mItem.style.marginBottom = "0.7vh";
mItem.style.marginRight = "0.7vh";

//check (if last)..
if(i1 == (mItem_Arr.length-1)){
   mItem.style.marginBottom = "6.5vh";
}

//events......
mItem.onmouseover = function(){
  var mCurrItemId = this.id;
  var mCurrItem = document.getElementById(mCurrItemId);
  mCurrItem.style.backgroundColor = "rgba(34,34,34,0.06)";
};
mItem.onmouseout = function(){
  var mCurrItemId = this.id;
  var mCurrItem = document.getElementById(mCurrItemId);
  mCurrItem.style.backgroundColor = "rgba(34,34,34,0.01)"; //rgba(255,255,255,0.8)
};

mItem.onclick = function(){
  var mCurrItemId = this.id;
  var mCurrItem = document.getElementById(mCurrItemId);
  var mItemIndex = parseInt(mCurrItem.getAttribute("item_index"));
  /*var mChoiceDivId = mCurrItem.parentElement;
  var mInputId = mChoiceDivId.getAttribute("inputID");
  var mInput = document.getElementById(mInputId);

  //set selected item to Input.....
  mInput.setAttribute("selItemIndex", mItemIndex);
  mInput.style.color = "#343434";

  if(mKey.hasOwnProperty("txt1")==true){
    //check if key available if array.....
    if(mItem_Arr[mItemIndex].hasOwnProperty(mKey['txt1'])==true){
     mInput.innerHTML = mItem_Arr[mItemIndex][mKey['txt1']];                        
   }
  }*/

  //set selected to to Input......
  if(mKey1=="years"){
  mYearDiv.querySelectorAll("span")[0].innerText = mCurrItem.innerText;
  mCalenPayload['mSelDate']['year'] = parseInt(mCurrItem.innerText);
  }
  if(mKey1=="months"){
  mMonthDiv.querySelectorAll("span")[0].innerText = mCurrItem.innerText;
  mCalenPayload['mSelDate']['month'] = mItemIndex;
  }

  //close.....popup.....
  mClose_BottomPopup();
  
  //****Set calender......
  //console.log(JSON.stringify(mCalenPayload['mSelDate']));
  showCalendar(mCalenPayload['mSelDate']['month'], 
  mCalenPayload['mSelDate']['year']);


};

mItemCover.appendChild(mItem);

} 


}


}

//here we layout......
return mDiv1;

}
//close.....
function mClose_BottomPopup() {
var mH = 25;
var mAnim1 = setInterval(() => {

if(mH <= 0){
  clearInterval(mAnim1);
  //set.....
  mBottomPopUp.style.display = "none";

  return;
}

mBottomPopUp.style.height = mH + "vh";
mH-=5;

}, 20);
}





//generate......
//let selectYear = {"value": mYearDiv.querySelectorAll("span")[0] }; //document.getElementById("year");
//let selectMonth = {"value": mMonthDiv.querySelectorAll("span")[0] }; //document.getElementById("month");


//let monthAndYear = document.getElementById("monthAndYear");
showCalendar(mCalenPayload['mSelDate']['month'], 
mCalenPayload['mSelDate']['year']); //default....


//target year....
const dTargetYear = new Date();
var targetYearCurr = dTargetYear.getFullYear();
targetYearCurr=targetYearCurr+=1;

//old year....
const dOldYear = new Date();
var oldYearCurr = dOldYear.getFullYear();
oldYearCurr=oldYearCurr-=100;


function next() {
if(parseInt(targetYearCurr)>parseInt(currentYear)){
currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
currentMonth = (currentMonth + 1) % 12;
showCalendar(currentMonth, currentYear);
}
}

function previous() {
if(parseInt(oldYearCurr)<parseInt(currentYear)){
currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
showCalendar(currentMonth, currentYear);
}
}

function jump() {
currentYear = parseInt(selectYear.value);
currentMonth = parseInt(selectMonth.value);
showCalendar(currentMonth, currentYear);
}




function showCalendar(month, year) {
  
let firstDay = (new Date(year, month)).getDay();
let daysInMonth = 32 - new Date(year, month, 32).getDate();

let tbl = mTBody; //document.getElementById("calendar-body"); // body of the calendar

// clearing all previous cells
tbl.innerHTML = "";

// filing data about month and in the page via DOM.
/*monthAndYear.innerHTML = months[month] + " " + year;
selectYear.value = year;
selectMonth.value = month;*/

// creating all cells
let date = 1;
for (let i = 0; i < 6; i++) {


// creates a table row
let row = document.createElement("tr");

//creating individual cells, filing them up with data.
for (let j = 0; j < 7; j++) {

if (i === 0 && j < firstDay) {
let cell = document.createElement("td");
let cellText = document.createTextNode("");

//cell.style.border ="0.1vh solid rgba(34,34,34,0.5)";
cell.style.fontSize = "1.4vh";
cell.style.padding = "0.8vh";

cell.appendChild(cellText);
row.appendChild(cell);
}
else if (date > daysInMonth) {
//console.log(daysInMonth)
break;
}

else {
let cell = document.createElement("td");
let cellText = document.createTextNode(date);
if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
//cell.classList.add("bg-info");
cell.style.border ="0.1vh solid rgba(34,34,34,0.3)";

} // color today's date

cell.style.fontSize = "1.4vh";
//cell.style.border ="0.1vh solid rgba(34,34,34,0.1)";
//cell.style.padding = "0.8vh";
cell.style.width = "3vh";
cell.style.height = "3vh";
cell.style.textAlign = "center";
cell.style.borderRadius = "50%";

//set data....
cell.id = core_1mn['mUniqueId'].mGenerate(15);
cell.setAttribute("m_date", date);
/*cell.setAttribute("m_month", month+1);
cell.setAttribute("m_year", year);*/

//sel..
let mSel = (mE) => {
var mCurrItemId = mE.id; //this.id
var mCurrItem = document.getElementById(mCurrItemId);
var mCurrSelDay = parseInt(mCurrItem.getAttribute("m_date"));
var mTBody = mCurrItem.parentElement.parentElement;

var mInputId = mTBody.getAttribute("inputID");
var mInputItem = document.getElementById(mInputId);
//console.log(mInputId);


//set date......
mSet_date();
function mSet_date() {
mCalenPayload['mSelDate']['day'] = mCurrSelDay; //set
var mSelDate = mCalenPayload['mSelDate'];
var mDay = (mSelDate['day']+"").length==1 ? "0"+mSelDate['day'] : mSelDate['day'];
var mMonth_txt = mCalenPayload['months'][mSelDate['month']];
var mMonth = (mSelDate['month']+"").length==1 ? "0"+(mSelDate['month']+1) : (mSelDate['month']+1);
var mYear = mSelDate['year'];

//set....
var mFinalDT = `${mYear}-${mMonth}-${mDay}`;  //`${mDay}/${mMonth}/${mYear}`
var mHumanReadableDT = new Date(`${mYear}-${mMonth}-${mDay}`).toDateString();
mInputItem.style.color = "#343434";
mInputItem.innerHTML = mHumanReadableDT; 
mInputItem.setAttribute("value", mFinalDT); //mDay+", "+ mMonth + ", " + mYear; //"DD/MM/YYYY";

//set attr.....
mInputItem.setAttribute("day", mSelDate['day']); //(Int)
mInputItem.setAttribute("month", mSelDate['month']); //(Int)
mInputItem.setAttribute("year", mSelDate['year']); //(Int)


//send (cb)..
mSend_cb("onPick", {
  "0": mFinalDT,
  "1": mHumanReadableDT
});

}

//close.....
mCloseAllDropDown(); 

};

//**events....
cell.onclick = function(e){
  //sel..
  mSel(this);
};


cell.onmouseover = function(){
var mCurrItemId = this.id;
var mCurrItem = document.getElementById(mCurrItemId);
mCurrItem.style.backgroundColor = "rgba(34,34,34,0.08)";
};
cell.onmouseout = function(){
var mCurrItemId = this.id;
var mCurrItem = document.getElementById(mCurrItemId);
mCurrItem.style.backgroundColor = "rgba(34,34,34,0.01)"; //rgba(255,255,255,0.8)
};


cell.appendChild(cellText);
row.appendChild(cell);



date++;
}






}

tbl.appendChild(row); // appending each row into calendar body.
}

}



              


              
             }



             //****store (elements)
             mCurrDta1['mElemDta'] = {
              "mTooltip": mTooltip,
              "mInputE": mInput
             };


          };
          mStartE(); //default..



        },

        "setDataJSON": (mGetParams) => {
          var mParams = mGetParams;
          var mFormCurrItem = mParams['mFormCurrItem'];
          var mUsrPayload = mParams['mUsrPayload']; //need to (build)
          var mUsrData = mFormCurrItem['$mUsrData'];
          let mSchema = mParams["mSchema"];

          var mErrInfo = {
            "isErr": true,
            "msg": null
          };

          //data....
          var mElemDta = mFormCurrItem['mElemDta']; 
          mSet_data();
          function mSet_data() {
            //var mTooltip = mElemDta['mTooltip'];
            var mInputE = mElemDta['mInputE'];
            let mInputVal = mInputE.getAttribute("value");
            
            //log..
            //alert(mInputVal);
            //console.log(mInputE);
            //----custom validation----//
            if (mInputVal.trim()=="") {
                mInputVal = ""; //it will indicates [json-schema-validator]
            }

            
            //store (JSON)....
            mAddDtaIn_JSON(0, mInputVal);
          }

          //($mUsrData).....
          function mAddDtaIn_JSON(mKeyI, mVal) {
            var mKey = Object.keys(mUsrData)[mKeyI];
            if(mKey==undefined){
               //error....(undefined key)
               mErrInfo['msg']=`error: (undefined key => ${mKey}) found.`;
               return;
            }
            if(mUsrPayload.hasOwnProperty(mKey)==true){
              //error....(duplicate key)
              mErrInfo['msg']=`error: (duplicate key => ${mKey}) found.`;
              return;
            }
             //all ok.....
             //mWares..
             let mWares = core_1mn["mForm"]["mUtil"]["mWares"];
             if (mWares.isRequired(mSchema, mKey)==false &&
             mVal=="") {
               //value is not ("")..
               //no need to add..
             }else {
                //store....
                mUsrData[mKey] = mVal;
                //add....
                mUsrPayload[mKey] = mUsrData[mKey];
             }



             /*
             USAGE
             mAddDtaIn_JSON(mKeyI, mVal);
             */
          }
          //set vars....
          return mErrInfo['msg']==null ? true : mErrInfo; //true || mErrInfo
        }

      }, 

      //Time Picker (Field)
      "timepckr": {

        "set": (mFormDiv, mCurrDta1, mCover) => {
          //ref..
          //https://docs.oracle.com/cd/E41183_01/DR/Time_Formats.html
          //https://m3.material.io/components/time-pickers/overview
          //https://mui.com/x/react-date-pickers/time-picker/
            /*
            USAGE
               {
                              "elementID": core_1mn['mUniqueId'].mGenerate(11),
                              "type": "timepckr",
                              "dataType": "text",
                              "placeholder": "HH:MM XM",
                              "maxLength": 8, //schema_test['properties']['Time']['maxLength']
                              "endIco": {
                                  "0": "calendar_1.svg", //"info_0.svg",
                                  "1": "1.3vh",
                                  "2": "1.3vh",
                                  //"3": "rgba(255,255,255,0.7)"
                              },
                              "autocomplete": false,
                              "label": "Time",

                              "$mUsrData": {
                                  "Time": "",
                              },

                              //"$mLogic": {
                                 // "mMatchWith": [
                                      //"mName",
                                  //]
                              //}
                               
                              },
            */


            //reload..
          if (mCurrDta1["reload"]!=undefined) {
            mCurrDta1["reload"] = () => {
               mStartE();
            }
          }

          
          //start elem..                  
            var mDivRoot = document.createElement("div");
            mDivRoot.style.width = "100%";
            //mDivRoot.style.margin = "1vh 0";
            mDivRoot.style.position = "relative";
            mFormDiv.appendChild(mDivRoot);

            //check (hide)..
            if (mCurrDta1.hasOwnProperty("hide")==true) {
              if (mCurrDta1["hide"]==true) {
                  mDivRoot.style.display = "none";
              }
            }

          const mStartE = () => {
            mDivRoot.innerHTML = ""; //reset.. 

            //Tooltip....
            var mTooltip = core_1mn['tooltip']['2'].set(
              {
                "mE1": mDivRoot,
                //"mCallback": mCallback
                "0": {
                  "0": 1,
                  "1": "0 0 0 15%",
                  "2": "rgba(252, 58, 58, 1.0)",
                  "3": "0.3vw"
                },
                "1": {
                  "0": "#fafafa",
                  "1": "0.2vh solid rgba(252, 58, 58, 1.0)",
                },
                "2": {
                  "0": "0 0 -3.8vh -1.5vw",
                  "1": "4.4vh",
                  "2": "15vw",
                },
            });
            // mTooltip['tt'].show(mTooltip['tt']['e']);
            // mTooltip['tt'].hide(mTooltip['tt']['e']);
          
            //mTopLabelDiv......
           if(mCurrDta1.hasOwnProperty("label")==true){
            var mTopLabelDiv = document.createElement("div");
            mTopLabelDiv.innerHTML = mCurrDta1['label'];
            mTopLabelDiv.style.textAlign = "start";
            mTopLabelDiv.style.fontSize = "1.2vh";
            mTopLabelDiv.style.color = "rgba(34,34,34,0.6)";
            mDivRoot.appendChild(mTopLabelDiv);            
           }


            var mDiv = document.createElement("div");
            mDiv.style.width = mCurrDta1['w']!=undefined ? mCurrDta1['w'] : "100%"; //100%
            mDiv.style.height = mCurrDta1['h']!=undefined ? mCurrDta1['h'] : "4.0vh"; //5vh

            //mDiv.style.margin = "1vh 0";
            mDiv.style.display = "flex";
            mDiv.style.backgroundColor = "#f2f2f2";

            mDiv.style.alignItems = "center";
            //mDiv.style.paddingRight = "0.5vw";
            
            //mDiv.style.border = "0.3vh solid rgba(34,34,34,0.1)"; //.3
            mDiv.style.border = "0.1vh solid rgba(34,34,34,0.2)"; //.3
            mDiv.style.borderRadius = "0.3vh";  
            mDivRoot.appendChild(mDiv);

            //input....
            var mInput = document.createElement("div");
            mInput.id = mCurrDta1['elementID'];
            mInput.setAttribute("value", mCurrDta1['$mUsrData'][Object.keys(mCurrDta1['$mUsrData'])[0]]);


            mInput.style.width = "100%";
            mInput.style.height = "100%";
            mInput.style.outline = "none";
            mInput.style.border = "none";
            mInput.style.padding = "0 0.5vw";
            mInput.style.fontSize = "1.4vh";
            mInput.style.color = "rgba(34,34,34, 0.9)";
            mInput.style.backgroundColor = "transparent";

            //set....
            mInput.setAttribute("dataType", mCurrDta1['dataType']);

            mInput.innerText = mCurrDta1['placeholder'];
            
            mInput.type = mCurrDta1['dataType'];
            mInput.style.display = "flex";
            mInput.style.alignItems = "center";

            mDiv.appendChild(mInput);


            function mCloseAllDropDown() {
              //First close all dropdowns.....
              var mFormArr = mFormDiv.querySelectorAll("div");
              for (let i1 = 0; i1 < mFormArr.length; i1++) {
                const mCurrDiv = mFormArr[i1];//dropdownID
            
                var mDropdownID = mCurrDiv.getAttribute("dropdownID");
                if(mDropdownID!=null){
                  //dropdown found......
                  var mSelDropdown = document.getElementById(mDropdownID);
                  mSelDropdown.style.display = "none";
                }
              }

              
            }

             //events......
             mInput.onclick = function(e){
              var mCurrItemId = this.id;
              e.stopPropagation();
              var mCurrItem = document.getElementById(mCurrItemId);
              var mDropdownID = mCurrItem.getAttribute("dropdownID");
              var mDropdown = document.getElementById(mDropdownID);

              //alert(mDropdownID)
              mTooltip['tt'].hide(mTooltip['tt']['e']); 

              //open or close....(Dropdown)
              if(mDropdown.style.display == "none"){
                mCloseAllDropDown();
               
                //show current.....
                mDropdown.style.display = "block";
              }else{
                mDropdown.style.display = "none";
              }

               //events.....
               window.onclick = function() {
                if(mDropdown.style.display == "block"){
                  mDropdown.style.display = "none";
                }
              };


             };



              //here we set endIco....
           if(mCurrDta1.hasOwnProperty("endIco")==true){ 
            mSet_endIco();
           }
           function mSet_endIco() { 
            var mSvgDiv = document.createElement("div");
            mSvgDiv.style.paddingRight = "0.5vw";
            mDiv.appendChild(mSvgDiv);

            //svg.....
           var mSvgCover = core_1mn['mSvg'].set({
               "0": mCurrDta1['endIco']['0'],
               "1": core_1mn['mUniqueId'].mGenerate(61),
               "2": mCurrDta1['endIco']['1']!=undefined ? mCurrDta1['endIco']['1'] : "2vh",
               "3": mCurrDta1['endIco']['2']!=undefined ? mCurrDta1['endIco']['2'] : "2vh",
               "4": mCurrDta1['endIco']['3']!=undefined ? mCurrDta1['endIco']['3'] : "rgba(34,34,34, 0.4)",
               "5": mSvgDiv,
               "cb": {
                "onClick": (mGetCurrItem) => {
                  //alert("onClick");
                  var mCurrItem = mGetCurrItem;
                  var mInputE = document.getElementById(mCurrItem.getAttribute("e_input_id"));
                  var mSvg = mCurrItem.querySelectorAll("svg")[0];

                  //check IF (password)
                  if(mInputE.getAttribute("dataType")=="password"){
                    //set....
                    if(mInputE.type=="password"){
                      mInputE.type = "text";
                       if(mSvg!=null){
                        mSvg.style.fill = "rgba(34,34,34, 0.8)";
                       }
                    }else{
                      mInputE.type = "password";
                      if(mSvg!=null){
                        mSvg.style.fill = "rgba(34,34,34, 0.4)";
                       }
                    }
                  }
                  

                 }
               }
               
           });
           mSvgCover.setAttribute("e_input_id", mInput.id);
          
           }




            if(mCurrDta1.hasOwnProperty("bottomRight")==true){
                mBottomRight();
            }
            function mBottomRight() {
                if(mCurrDta1['bottomRight']['type']=="href"){
                    var mDivCover = document.createElement("div");
                    mDivCover.style.display = "flex";
                    mDivCover.style.justifyContent = "end";
                    mDivRoot.appendChild(mDivCover);
                    //set vars..
                    var mCb = mCurrDta1['bottomRight']['cb'];
                    function mSend_cb(mCb_name, data) {
                      if(mCb!=undefined){
                        if(mCb[mCb_name]!=undefined){
                          mCb[mCb_name](data);
                        }
                      }
                    }

                    var mHref = document.createElement("a");
                    mHref.id = core_1mn['mUniqueId'].mGenerate(19);
                    mHref.href = "javascript:void(0)";
                    mHref.style.fontSize = "1.2vh";
                    mHref.style.color = "rgba(34,34,34,0.5)";
                    mHref.style.fontWeight = "400";
                    mHref.innerHTML = mCurrDta1['bottomRight']['txt'];
                    mHref.style.textAlign = "end";
                    mDivCover.appendChild(mHref);
                    //events..
                    mHref.onclick = function(){
                      var mCurrItem = this.id;
                      var mCurrItem = document.getElementById(mCurrItem);
                      //send callback..
                      mSend_cb("onClick", {"e":mCurrItem}); 
                    };
                }
                
            }



             //set time picker......
             mSet_timePicker();
             function mSet_timePicker() {
              var mPickDiv = document.createElement("div");
              mPickDiv.style.display = "none";
              mPickDiv.style.position = "relative";

              mPickDiv.id = core_1mn['mUniqueId'].mGenerate(11);
              //add id to input......
              mInput.setAttribute("dropdownID", mPickDiv.id);
              //add id to dropdown......
              mPickDiv.setAttribute("inputID", mInput.id);

              mPickDiv.style.userSelect = "none";
              mPickDiv.style.zIndex = "1";

              mPickDiv.style.position = "absolute";
              mPickDiv.style.top = "0";
              mPickDiv.style.marginTop = "4.0vh";

              mPickDiv.style.boxShadow = "0 0.5vh 0.5vh 0 rgba(0,0,0,0.2)";
              mPickDiv.style.width = "25vw";
              mPickDiv.style.height = "25vh";
              mPickDiv.style.backgroundColor = "rgba(255,255,255)";
              mPickDiv.style.overflowY = "auto"; 

              //events....
              mPickDiv.onclick = function(e){
                e.stopPropagation();
              }

              mDivRoot.appendChild(mPickDiv);



               //--auto sel--//  (--Currently this (Func) just a TEMPORARY Solution--)
               let mAutoSel = (mInput) => {
                if (mInput.getAttribute("value").trim()!="") {
                  let mInputVal = mInput.getAttribute("value").trim();
                  const d = new Date(mInputVal); //"2021-03-25"
                  try {
                    if (typeof d.getTime() !== "number") {
                      //err..
                      return;
                    }
                    //all ok..
                    //show in [Input Field]..
                    mInput.innerHTML = mInputVal;  //d.getTime()
                    /*console.log(d.getDate(), date );
                    console.log(d.getFullYear(), year );
                    console.log(d.getMonth(), month );*/
                    //alert(d.toDateString())
                    //check..
                    /*if (d.getDate() === date
                    && d.getFullYear() === year && d.getMonth() === month ) {
                      console.log(`==mAutoSel==`);
                      mSel(cell);
                    }*/
                  } catch (e) { } //Ignore..
                  //console.log(mInputVal);
              
                } 
              };
              //auto sel..
              mAutoSel(mInput);


               
               
              //set vars.....
              let today = new Date();
              let currentHours = ""; //today.getHours(); //return(int) 2
              let currentMinutes = ""; //today.getMinutes(); //return(int) 2
              let mXM = "AM"; //AM || PM
              var mTimePayload = {

              "mSelTime": {
               "hrs": currentHours,
               "minutes": currentMinutes,
               "xm": mXM
              },

              "hrs": [],
              "minutes": [],

              };

              //mGenerateHrs();
              function mGenerateHrs() {
                 /*let mTotalHrs = 24;
                 var mMinYear = 1980;
                 for (let i1 = mMinYear; i1 < currentYear+1; i1++) {
                   mTimePayload['hrs'].push(i1);
                 }*/
              }


              //holder..
              var mI_hldr = document.createElement("div");
              mI_hldr.style.width = "100%";
              mI_hldr.style.height = "100%";
              mPickDiv.appendChild(mI_hldr);


              //set items..
              function mSet_i1() {
                var mI = document.createElement("div");
                mI.style.height = "4vh";
                mI.style.display = "flex";
                mI.style.alignItems = "center";
                mI.style.padding = "0 1vw";
                mI_hldr.appendChild(mI);

                //set txt1..
                function mSet_Txt1() {
                  var mTxt = document.createElement("div");
                  mTxt.innerHTML = "Enter time";
                  mTxt.style.fontSize = "1.4vh";
                  mTxt.style.color = "rgba(34,34,34, 1.0)";
                  mI.appendChild(mTxt);
      
                }
                mSet_Txt1();  

              }
              mSet_i1();


              //set vars..
              function mSet_i2() {
                var mI = document.createElement("div");
                mI.style.display = "flex";
                mI.style.justifyContent = "center";
                //mI.style.padding = "0 1vw";
                mI_hldr.appendChild(mI);

                //*FUNCTIONS*//
                function onlyNumberVal(elem) {
                  //set vars..
                  var mStr = elem.value;
                  //console.log(`mStr: ${mStr}`);
                  //vali.. 
                  var mRegex = {
                    "0": new RegExp("[0-9]"),
                    "1": new RegExp("[0-9][0-9]"),
                  };
                  if(mStr.match(mRegex[mStr.length-1])){
                    //all ok.. 
                    //no need to (modify)..
                    return true;
                  }else{
                    //error..
                    //remove last (char)..
                    const editedText = mStr.slice(0, -1) //'abcde' ==> 'abcd'
                    elem.value = editedText;
                    return false;
                  }

                }

                //set input..
                function mSet_Txt1() {
                  var mCover = document.createElement("div");
                  mI.appendChild(mCover);

                  //mInput..
                  var mInput = document.createElement("input");
                  mInput.id = core_1mn['mUniqueId']['mGenerate'](14);

                  mInput.placeholder = "00";
                  mInput.style.fontSize = "4.1vh";
                  mInput.style.width = "7vw";
                  mInput.style.height = "7vh";
                  mInput.style.color = "rgba(34,34,34, 1.0)";
                  mInput.style.border = "0.1vh solid rgba(34,34,34,0.2)"; //.3
                  mInput.style.borderRadius = "0.3vh";  
                  mInput.style.outline = "none";
                  mInput.style.textAlign = "center";
                  mInput.maxLength = 2;
                  mCover.appendChild(mInput); 

                  //events....
                  mInput.onfocus = function(){
                    var mCurrItemId = this.id;
                    var mCurrItem = document.getElementById(mCurrItemId);
                    //set
                    mCurrItem.style.border = "0.1vh solid rgba(34,34,34,0.7)";
                  };
                  mInput.onblur = function(){
                    var mCurrItemId = this.id;
                    var mCurrItem = document.getElementById(mCurrItemId);
                    //set
                    mCurrItem.style.border = "0.1vh solid rgba(34,34,34,0.2)";
                  };
                  mInput.oninput = function(){
                    var mCurrItem = this;
                    //console.log('oninput');
                    var mIsValid = onlyNumberVal(mCurrItem);
                    if(mIsValid==true){
                      //store..
                      mTimePayload['mSelTime']['hrs'] = mCurrItem.value;
                    }
                  };  

                  //Space..
                 core_1mn['space']['set']({
                  "h": "0.3vh",
                  "e1": mCover,
                 });

                  //set lbl1..
                 function mSet_Lbl1() {
                  var mLbl = document.createElement("div");
                  mLbl.innerHTML = "Hour";
                  mLbl.style.fontSize = "1.3vh";
                  mLbl.style.color = "rgba(34,34,34, 0.7)";
                  mCover.appendChild(mLbl);
      
                 }
                 mSet_Lbl1(); 


                }
                mSet_Txt1(); 

                function mSep() {
                  var mSep = document.createElement("div");
                  mSep.style.width = "2.5vh";
                  mSep.style.display = "flex";
                  mSep.style.justifyContent = "center";
                  mSep.style.alignItems = "center";
                  mI.appendChild(mSep);

                  //cover..
                  var mCover = document.createElement("div");
                  mSep.appendChild(mCover);

                  function mDot() {
                    var mD = document.createElement("div");
                    mD.style.width = "0.5vh";
                    mD.style.height = "0.5vh";
                    mD.style.borderRadius = "50%";
                    mD.style.backgroundColor = "rgba(34,34,34, 1.0)";
                    mCover.appendChild(mD);
                  }
                  mDot();

                  //Space..
                  core_1mn['space']['set']({
                    "h": "0.5vh",
                    "e1": mCover,
                  })

                  mDot();

                }
                mSep();

                function mSet_Txt2() {
                  var mCover = document.createElement("div");
                  mI.appendChild(mCover);

                  //mInput..
                  var mInput = document.createElement("input");
                  mInput.id = core_1mn['mUniqueId']['mGenerate'](14);

                  mInput.placeholder = "00";
                  mInput.style.fontSize = "4.1vh";
                  mInput.style.width = "7vw";
                  mInput.style.height = "7vh";
                  mInput.style.color = "rgba(34,34,34, 1.0)";
                  mInput.style.border = "0.1vh solid rgba(34,34,34,0.2)"; //.3
                  mInput.style.borderRadius = "0.3vh";  
                  mInput.style.outline = "none";
                  mInput.style.textAlign = "center";
                  mInput.maxLength = 2;
                  mCover.appendChild(mInput); 

                  //events....
                  mInput.onfocus = function(){
                    var mCurrItemId = this.id;
                    var mCurrItem = document.getElementById(mCurrItemId);
                    //set
                    mCurrItem.style.border = "0.1vh solid rgba(34,34,34,0.7)";
                  };
                  mInput.onblur = function(){
                    var mCurrItemId = this.id;
                    var mCurrItem = document.getElementById(mCurrItemId);
                    //set
                    mCurrItem.style.border = "0.1vh solid rgba(34,34,34,0.2)";
                  };
                  mInput.oninput = function(){
                    var mCurrItem = this;
                    //console.log('oninput');
                    var mIsValid = onlyNumberVal(mCurrItem);
                    if(mIsValid==true){
                      //store..
                      mTimePayload['mSelTime']['minutes'] = mCurrItem.value;
                    }
                  };  


                  //Space..
                 core_1mn['space']['set']({
                  "h": "0.3vh",
                  "e1": mCover,
                 });

                  //set lbl1..
                 function mSet_Lbl1() {
                  var mLbl = document.createElement("div");
                  mLbl.innerHTML = "Minute";
                  mLbl.style.fontSize = "1.3vh";
                  mLbl.style.color = "rgba(34,34,34, 0.7)";
                  mCover.appendChild(mLbl);
      
                 }
                 mSet_Lbl1(); 


                }
                mSet_Txt2();  

                //Space..
                core_1mn['space']['set']({
                  "w": "1vw",
                  "e1": mI,
                });

                function mSet_tabs() {
                  var mTabs = document.createElement("div");
                  mTabs.style.border = "0.1vh solid rgba(34,34,34,0.2)";
                  mTabs.style.borderRadius = "0.3vh";  
                  mTabs.style.height = "7.2vh";
                  mI.appendChild(mTabs);
                  //set vars..
                  var mDta_tab = {
                    "mVars": {
                      "selTabIdx": 0
                    },
                    "l": [
                      {
                        "0": "AM",
                      },
                      {
                        "0": "PM",
                      },
                    ],
                    "set": function(mCurrItemIdx){
                      //get old idx..
                      var mOldIdx = mDta_tab['mVars']['selTabIdx'];
                      var mOld_item = mTabs.querySelectorAll("div")[mOldIdx];
                      //set (old)..
                      mOld_item.style.backgroundColor = "transparent";
                      //set (new)..
                      var mCurrIdx = mCurrItemIdx;
                      var mCurrItem = mTabs.querySelectorAll("div")[mCurrIdx];
                      mCurrItem.style.backgroundColor = "rgba(34,34,34,0.07)";
                      //store..
                      mDta_tab['mVars']['selTabIdx'] = parseInt(mCurrItem.getAttribute("item_idx"));
                      //sel..
                      mTimePayload['mSelTime']['xm'] = mDta_tab['l'][mCurrItemIdx]['0'];

                    }
                  };
                  //tab..
                  function mSet_tab(mCurrDta, i1) {
                    var mTab = document.createElement("div");
                    mTab.innerHTML = mCurrDta['0'];
                    mTab.setAttribute("item_idx", i1);

                    mTab.style.width = "4vw";
                    mTab.style.height = "3.6vh";
                    mTab.style.display = "flex";
                    mTab.style.alignItems = "center";
                    mTab.style.justifyContent = "center";
                    if(i1==0){
                      mTab.style.borderBottom = "0.1vh solid rgba(34,34,34,0.2)";
                    }                       
                    //events..
                    mTab.onclick = function(){
                      var mCurrItem = this;
                      var mCurrItemIdx = parseInt(mCurrItem.getAttribute("item_idx"));
                      mDta_tab.set(mCurrItemIdx);
                    }
                    mTabs.appendChild(mTab);

                  }
                  //gen..
                  for (let i1 = 0; i1 < mDta_tab['l'].length; i1++) {
                    const mCurrDta = mDta_tab['l'][i1];
                    mSet_tab(mCurrDta, i1);
                  }
                  //auto sel..
                  if(mTimePayload['mSelTime']['xm']=="AM"){
                    mDta_tab['set'](0);
                  }else{
                    mDta_tab['set'](1);
                  }


                  
                }
                mSet_tabs();


              }
              mSet_i2();


              //Space..
              core_1mn['space']['set']({
                "h": "6vh",
                "e1": mI_hldr,
               });

              function mSet_i3() {
                var mI = document.createElement("div");
                mI.style.height = "4vh";
                mI.style.display = "flex";
                mI.style.alignItems = "center";
                mI.style.justifyContent = "end";
                mI.style.padding = "0 2vw";
                mI_hldr.appendChild(mI);

                //set txt1..
                function mSet_Txt1() {
                  var mTxt = document.createElement("div");
                  mTxt.innerHTML = "Cancel";
                  mTxt.style.fontSize = "1.5vh";
                  mTxt.style.color = "rgba(34,34,34, 1.0)";
                  //events..
                  mTxt.onclick = function(){
                    //close.....
                    mCloseAllDropDown();
                  };
                  mI.appendChild(mTxt);
      
                }
                mSet_Txt1(); 
                
                 //Space..
                 core_1mn['space']['set']({
                  "w": "2vw",
                  "e1": mI,
                 });
                

                 //set txt2..
                 function mSet_Txt2() {
                  var mTxt = document.createElement("div");
                  mTxt.innerHTML = "OK";
                  mTxt.style.fontSize = "1.5vh";
                  mTxt.style.color = "rgba(34,34,34, 1.0)";
                  //events..
                  mTxt.onclick = function(){
                    //console.log(mTimePayload);
                    var mSelTime = mTimePayload['mSelTime'];
                    //vali..
                    if(mSelTime['hrs']=="" || mSelTime['minutes']==""){
                      console.log(`Error: [timepckr]`);
                      return;
                    }
                    //all ok....
                    //https://www.tutorialspoint.com/converting-12-hour-format-time-to-24-hour-format-in-javascript
                    const mConvTime = (timeStr) => {
                      const [time, modifier] = timeStr.split(' ');
                      let [hours, minutes] = time.split(':');
                      if (hours === '12') {
                         hours = '00';
                      }
                      if (modifier === 'PM') {
                         hours = parseInt(hours, 10) + 12;
                      }
                      return `${hours}:${minutes}:00`;
                    }; //output => HH:MM:SS
                    var mFinalTime = mConvTime(`${mSelTime['hrs']}:${mSelTime['minutes']} ${mSelTime['xm']}`);
                    let mHumanReadableTIME = `${mSelTime['hrs']}:${mSelTime['minutes']} ${mSelTime['xm']}`;
                    //set..
                    var mInput = document.getElementById(mPickDiv.getAttribute("inputID"));
                    mInput.innerText = mHumanReadableTIME;
                    //console.log(`mFinalTime: ${mFinalTime}`);
                    mInput.setAttribute("value", mFinalTime);
                    //close.....
                    mCloseAllDropDown();
                  };
                  mI.appendChild(mTxt);
                  
      
                }
                mSet_Txt2(); 

              }
              mSet_i3();



              
             }



            //****store (elements)
            mCurrDta1['mElemDta'] = {
              "mTooltip": mTooltip,
              "mInputE": mInput
            };


          };
          mStartE(); //default..


        },

        "setDataJSON": (mGetParams) => {
          var mParams = mGetParams;
          var mFormCurrItem = mParams['mFormCurrItem'];
          var mUsrPayload = mParams['mUsrPayload']; //need to (build)
          var mUsrData = mFormCurrItem['$mUsrData'];
          let mSchema = mParams["mSchema"];

          var mErrInfo = {
            "isErr": true,
            "msg": null
          };

          //data....
          var mElemDta = mFormCurrItem['mElemDta']; 
          mSet_data();
          function mSet_data() {
            //var mTooltip = mElemDta['mTooltip'];
            var mInputE = mElemDta['mInputE'];
            let mInputVal = mInputE.getAttribute("value");
            
            //log..
            //console.log(mInputE);
            //----custom validation----//
            if (mInputVal.trim()=="") {
                mInputVal = -1; //it will indicates [json-schema-validator]
            }
            
            //store (JSON)....
            mAddDtaIn_JSON(0, mInputVal);
          }

          //($mUsrData).....
          function mAddDtaIn_JSON(mKeyI, mVal) {
            var mKey = Object.keys(mUsrData)[mKeyI];
            if(mKey==undefined){
               //error....(undefined key)
               mErrInfo['msg']=`error: (undefined key => ${mKey}) found.`;
               return;
            }
            if(mUsrPayload.hasOwnProperty(mKey)==true){
              //error....(duplicate key)
              mErrInfo['msg']=`error: (duplicate key => ${mKey}) found.`;
              return;
            }
             //all ok.....
             //mWares..
             let mWares = core_1mn["mForm"]["mUtil"]["mWares"];
             if (mWares.isRequired(mSchema, mKey)==false &&
             mVal=="") {
               //value is not ("")..
               //no need to add..
             }else {
                  //store....
                  mUsrData[mKey] = mVal;
                  //add....
                  mUsrPayload[mKey] = mUsrData[mKey];
             }



             /*
             USAGE
             mAddDtaIn_JSON(mKeyI, mVal);
             */
          }
          //set vars....
          return mErrInfo['msg']==null ? true : mErrInfo; //true || mErrInfo
        }

      },



      //Checkbox (Field)
      "cbox": {

        "set": (mFormDiv, mCurrDta1, mG_cover) => {
            /*
            USAGE
                           {
                              "elementID": core_1mn['mUniqueId'].mGenerate(11),
                              "type": "cbox",
                              "label": "Agree"
                              "$mUsrData": {
                                  "mCbox1": false,
                              },
  
                              "$mLogic": {
                                  "mMatchWith": [
                                      "mName",
                                  ]
                              },

                              //cb..
                              "cb": {
                                "onTick": function(){
                                },
                                "onUnTick": function(){
                                }
                              },

                               
                          },
            */
  
            var mDivRoot = document.createElement("div");
            //mDivRoot.style.width = "100%";
            mDivRoot.style.position = "relative";
            mFormDiv.appendChild(mDivRoot);

            //check (hide)..
            if (mCurrDta1.hasOwnProperty("hide")==true) {
              if (mCurrDta1["hide"]==true) {
                  mDivRoot.style.display = "none";
              }
           }
  
            //Tooltip....
            var mTooltip = core_1mn['tooltip']['2'].set(
              {
                "mE1": mDivRoot,
                //"mCallback": mCallback
                "0": {
                  "0": 1,
                  "1": "0 0 0 15%",
                  "2": "rgba(252, 58, 58, 1.0)",
                  "3": "0.3vw"
                },
                "1": {
                  "0": "#fafafa",
                  "1": "0.2vh solid rgba(252, 58, 58, 1.0)",
                },
                "2": {
                  "0": "0 0 -3.8vh -1.5vw",
                  "1": "4.4vh",
                  "2": "15vw",
                },
             });
            // mTooltip['tt'].show(mTooltip['tt']['e']);
            // mTooltip['tt'].hide(mTooltip['tt']['e']);

            //send cb..
            let mSend_cb = (cb_name, data) => {
              if (mCurrDta1["cb"]!=undefined) {
               if (mCurrDta1["cb"][cb_name]!=undefined) {
                   mCurrDta1["cb"][cb_name](data);
               }
              }
            };

  
            //mDiv..
            var mDiv = document.createElement("div");
            mDiv.style.width = mCurrDta1['w']!=undefined ? mCurrDta1['w'] : "100%"; //100%
            mDiv.style.height = mCurrDta1['h']!=undefined ? mCurrDta1['h'] : "4.0vh"; //5vh
            //mDiv.style.margin = "1vh 0";
            mDiv.style.display = "flex";
            mDiv.style.alignItems = "center";
            //mDiv.style.paddingRight = "0.5vw";
            mDivRoot.appendChild(mDiv);
            //events..
            mDiv.onclick = () => {
              if (mEvents["e"].getAttribute("m_tick")=="false") {
                  mEvents.tick();
                  //send cb..
                  mSend_cb("onTick", {});
              }else {
                  mEvents.untick();
                  //send cb..
                  mSend_cb("onUnTick", {});
              }
            };
            
  
            //input....
            var mEvents = core_1mn["mForm"]["mUtil"]["checkbox"].get();
            mEvents["e"].id = mCurrDta1['elementID'];
            if (mCurrDta1['$mUsrData'][Object.keys(mCurrDta1['$mUsrData'])[0]]==true) {
                mEvents.tick();
                //send cb..
                mSend_cb("onTick", {});
            }
            if (mCurrDta1['$mUsrData'][Object.keys(mCurrDta1['$mUsrData'])[0]]==false) {
               //send cb..
               mSend_cb("onUnTick", {});
            }


            mDiv.appendChild(mEvents["e"]);

            //Space.....
            core_1mn['space'].set({
              "w": "0.5vw",
              "e1": mDiv,
            });

            //label..
            if(mCurrDta1.hasOwnProperty("label")==true){
              //mTopLabelDiv......
              var mTopLabelDiv = document.createElement("label");
              mTopLabelDiv.htmlFor = mEvents["e"].id;
              mTopLabelDiv.innerHTML = mCurrDta1['label'];
              mTopLabelDiv.style.textAlign = "start";
              mTopLabelDiv.style.fontSize = "1.6vh";
              mTopLabelDiv.style.color = "rgba(34,34,34, 0.9)";
              mDiv.appendChild(mTopLabelDiv);
            }
  
  
  
            //****store (elements)
            mCurrDta1['mElemDta'] = {
              "mTooltip": mTooltip,
              "mInputE": mEvents //mInput //mEvents["e"]
            };
  
  
  
        },

        "setDataJSON": (mGetParams) => {
          var mParams = mGetParams;
          var mFormCurrItem = mParams['mFormCurrItem'];
          var mUsrPayload = mParams['mUsrPayload']; //need to (build)
          var mUsrData = mFormCurrItem['$mUsrData'];
          var mErrInfo = {
            "isErr": true,
            "msg": null
          };
  
          //data....
          var mElemDta = mFormCurrItem['mElemDta'];
          mSet_data();
          function mSet_data() {
            //var mTooltip = mElemDta['mTooltip'];
            let mInputE = mElemDta['mInputE'];
            let mInputVal = mInputE.isTick; //true || false
  
            /*console.log(`mInputVal:
            ${mInputVal}`);
            return;*/
            
            //store (JSON)....
            mAddDtaIn_JSON(0, mInputVal); //mInputE.value
          }
  
          //($mUsrData).....
          function mAddDtaIn_JSON(mKeyI, mVal) {
            var mKey = Object.keys(mUsrData)[mKeyI];
            if(mKey==undefined){
               //error....(undefined key)
               mErrInfo['msg']=`error: (undefined key => ${mKey}) found.`;
               return;
            }
            if(mUsrPayload.hasOwnProperty(mKey)==true){
              //error....(duplicate key)
              mErrInfo['msg']=`error: (duplicate key => ${mKey}) found.`;
              return;
            }
             //all ok.....
             //store....
             mUsrData[mKey] = mVal;
             //add....
             mUsrPayload[mKey] = mUsrData[mKey];
  
             /*
             USAGE
             mAddDtaIn_JSON(mKeyI, mVal);
             */
          }
          //set vars....
          return mErrInfo['msg']==null ? true : mErrInfo; //true || mErrInfo
        }
        
  
         
  
      },  




    },

    "mB": { //builder.....

      "set": (mGetParams) => {
        var mParams = mGetParams;
        var mArr1 = mParams['mArr1']; //core_1mn['mForm']['mDta']['f'] (sample)
        var mArr1_temp = [];
        //mFormSetting....
        var mFromSett = mParams['0']!=undefined ? mParams['0'] : {}; //From Setting
        //cb....
        var mCb = mParams['cb']!=undefined ? mParams['cb'] : null; //callback
        //form
        var mF_orien = mParams['orien']!=undefined ? mParams['orien'] : "v"; //orien..
        var mF_hs = mParams['hs']!=undefined ? mParams['hs'] : "space-between"; //horizontal-space..

        //mReadonly..
        let mReadonly = mParams["readonly"]!=undefined?mParams["readonly"]:false;
        //console.log( mReadonly);


        //set vars......
        var mFormHolder = document.createElement("div");
        mFormHolder.setAttribute("tag_n", "form_holder");
        mFormHolder.style.userSelect = 'none';
        //set....
        mFormHolder.style.width = mFromSett['0']!=undefined ? mFromSett['0'] : "100%"; //width
        if(mFromSett['1']!=undefined){
          mFormHolder.style.height = mFromSett['1']; //height
        }
        mFormHolder.style.padding = mFromSett['2']!=undefined ? mFromSett['2'] : "0"; //padding  (T R B L) //eg. => 3vh 4vw 0 4vw
        if (mF_orien=="h") {
          mFormHolder.style.display = "flex";
          mFormHolder.style.justifyContent = mF_hs;        
        }
        

        //here we map (vertical & horizontal) LAYOUT
        mSet_h_v();
        function mSet_h_v() { 
          for (let i1 = 0; i1 < mArr1.length; i1++) {
            const mCurrI = mArr1[i1];

            //vali....
            var mOrien = mCurrI['orien'];
            var m_hs = mCurrI['hs'];
            var mFieldList = mCurrI['mFieldList'];
            var mCover = mCurrI['cover'];
            let mSpace1 = "1.0vh";

            //mHide..
            let mHide = mCurrI["hide"]!=undefined?mCurrI["hide"]:false;
            //console.log(`mHide: ${mHide}`);


            //set..
            if(mOrien!="v" && mOrien!="h"){
              //error....
              mSend_err({"msg": `error: value of (orien) must be (v || h)`});
              return;
            }
            if(Array.isArray(mFieldList)!=true){
              //error....
              mSend_err({"msg": `error: key (mFieldList) has invalid value.`});
              return;
            }

            //all ok (continue)..
            var mElemHolder = document.createElement("div");
            mElemHolder.setAttribute("tag_n", "mfield_cover");
            mElemHolder.style.display = mOrien=="v" ? "block" : "flex";
            if (mOrien=="h") {
                mElemHolder.style.justifyContent = m_hs;
            }
            if (mHide==true) {
              //mArr1[YOUR_IDX][mFieldList] (will be hidden)
              mElemHolder.style.display = "none";
            }
            //cover..
            function mSet_cover() {
              mElemHolder.style.backgroundColor = "#f2f2f2";
              mElemHolder.style.border = "0.1vh solid rgba(34,34,34,0.2)";
              mElemHolder.style.borderRadius = "0.3vh";
            }
            if (mCover!=undefined) {
              mSet_cover();
            } 

            mFormHolder.appendChild(mElemHolder);

              

            //generate....
            var mIsGenerate = mGenerate(mFieldList, mElemHolder, mOrien, mCover);
            if(mIsGenerate!=true){
              //error.....
              return;
            }else {
              //generated.. 
              if (mArr1.length>1) {
                //Add Space..
                core_1mn['space'].set({
                  "h": mSpace1,
                  "e1": mFormHolder,
                });
              }
              //space-right..
              if (mCurrI['sr']!=undefined) {
                core_1mn['space'].set({
                 "w": mCurrI['sr']!=""?mCurrI['sr']:mSpace1,
                 "e1": mFormHolder,
               });
              } 
            }
            
          }


          //****all done.....  
          mParams['mArr1']=mArr1_temp;
          mArr1_temp=[]; //reset....
          mSend_onload({"mFormHolder": mFormHolder});
          
          
          
        }

        //generate.....
        //mGenerate();
        function mGenerate(mGetArr, mElemHolder, mOrien, mCover) {
          //here we generate form data....
          for (let i1 = 0; i1 < mGetArr.length; i1++) {
            const mCurrI = mGetArr[i1];
            

            //store....(ARRAY)
            mArr1_temp.push(mCurrI);

            //vali....
            if(mCurrI.hasOwnProperty("type")==false){
              //error....
              mSend_err({"msg": `error: key (type) is required param.`});
              return;
            }
            if(mCurrI.hasOwnProperty("mElemDta")==true){
              //error....
              mSend_err({"msg": `error: key (mElemDta) is a reserved (key)`});
              return;
            }
            if(mCurrI.hasOwnProperty("$mUsrData")==false){
              //error....
              mSend_err({"msg": `error: key ($mUsrData) is required param.`});
              return;
            }
            

            //set vars....
            var mType = mCurrI['type'];
            //check....
            if(core_1mn['mForm']['mR'].hasOwnProperty(mType)==false){
              //invalid....
              mSend_err({"msg": `error: invalid value: [${mType}] of (type)`});
              return; 
            }

            //--set (conf).. [Fields]--//
            if (mCurrI.hasOwnProperty("readonly")==false) {
              //(field) has not assigned [readonly]..prop. So we are adding Global (default) [readonly] prop
              mCurrI["readonly"] = mReadonly;
            }
            //console.log( mCurrI["readonly"]);


            //all ok....
            //valid....
            core_1mn['mForm']['mR'][mType].set(mElemHolder, mCurrI, mCover);

            //check.. [if element is hide]
            let mIsElemHide = () => {
              //check (hide)..
              if (mCurrI.hasOwnProperty("hide")==true) {
                if (mCurrI["hide"]==true) {
                    return true;
                }
              }
              return false;
            };

            //check and create (space).....
            //Space..... 
            if(mOrien=="h" && i1<(mGetArr.length-1)){ 
              if (mIsElemHide()==false) {
              core_1mn['space'].set({
                "w": "0.6vw",
                "e1": mElemHolder,
              });                
              }
            }
             
            
            
          }


          //all ok....
          //continue.....
          return true;

          

        }

        //callback....
        //error..
        function mSend_err(mErr) {
          if(mCb!=undefined){
            if(mCb['mOnError']!=undefined){
              //send....
              mCb.mOnError(mErr);
            }
          }
        }
        //onload..
        function mSend_onload(mRes) {
          if(mCb!=undefined){
            if(mCb['mOnLoad']!=undefined){
              //send....
              mCb.mOnLoad(mRes);
            }
          }
        }



        
        //USAGE
        /*            var mFormBuilder = {
                           "mArr1": [

                            {
                                 "orien": "v",
                                 "mFieldList": [

                                 ]
                            },

                            {
                                 "orien": "h",
                                 "mFieldList": [

                                 ]

                                 ------OR------
                                  "hide": true
                                  "orien": "h",
                                  "sr": "1vw", //space-right..
                                  "cover": { //it will cover all (mFieldList)..
                                  },
                                 "mFieldList": [

                                 ]
                            }

                           ], //(mArr1) later will be updated (*Do not place variable here instead place direct (ARRAY) )
                           "0": {
                            "0": "100%",
                            "1": "32vh",
                            "2": "3vh 4vw 0 4vw"
                          },
                          "orien": "h",
                          "hs": "start",

                          //https://www.w3schools.com/tags/att_input_readonly.asp
                          "readonly": true, //(default (false)) [if=>true then (not editable)] [if=>false then (editable)]


                        "cb": {
                            "mOnLoad": (mGetParams) => {
                                var mParams = mGetParams;
                                var mFormHolder = mParams['mFormHolder'];
                                mHoriDiv1.appendChild(mFormHolder); 
                            },
                            "mOnError": (mGetParams) => {
                                var mParams = mGetParams;
                                console.log(mParams);
                            },
                        }
                     };
                     core_1mn['mForm']['mB'].set(mFormBuilder);*/
        
       

      }

    },

    "mV": { //validator.....

      "set": (mGetParams) => {
        var mParams = mGetParams;
        var mFormPayload = mParams['form_payload'];
        var mSchema = mParams['schema'];
        var mUsrPayload = {};
        //cb....
        var mCb = mParams['cb']!=undefined ? mParams['cb'] : null; //callback

        //console.log(mFormPayload); //-------Need to fix bug in ($mUsrDataCONF.returnDta)------//

        //filter (mFormPayload)..
        const mFilter_FP = (mArr1) => {
          for (let i1 = 0; i1 < mArr1.length; i1++) {
            const mCurrDta1 = mArr1[i1];
            //console.log(mCurrDta1);
            //remove (if)..
            if (mCurrDta1["$mUsrDataCONF"]!=undefined) {
              if (mCurrDta1["$mUsrDataCONF"]["returnDta"]!=undefined) {
                if (mCurrDta1["$mUsrDataCONF"]["returnDta"]==false) {
                    //(remove) no need to store.. [if=>false ($mUsrData) will not return data]
                    mFormPayload.splice(i1, 1);
                    return;
                }
              }
            }
          }
        };
        mFilter_FP(mFormPayload);

        //here we set usr payload.....
        mSet_usrPayload();
        function mSet_usrPayload() {
          
          for (let i1 = 0; i1 < mFormPayload.length; i1++) {
            const mCurrI = mFormPayload[i1];
            //set vars....
            if(mCurrI['type']==undefined){
              //error....
              mSend_err({"msg": "error: "+"required @param (type) is missing."});
              return;
            }
            if(core_1mn['mForm']['mR'].hasOwnProperty(mCurrI['type'])==false){
              //error....
              mSend_err({"msg": `error: invalid value [type :${mCurrI['type']}]`});
              return;
            }
            //all ok.....
            var setDataJSON = core_1mn['mForm']['mR'][mCurrI['type']]['setDataJSON'];
            if(setDataJSON==undefined){
              //error....
              mSend_err({"msg": `error: (setDataJSON) not found for [type :${mCurrI['type']}]`});
              return;
            }
            var mUsrData = setDataJSON({
              "mFormCurrItem": mCurrI,
              "mUsrPayload": mUsrPayload,
              "mSchema": mSchema
            });
            if(mUsrData.hasOwnProperty("isErr")==true){
              //error....
              mSend_err({"msg": mUsrData});
              return;
            }
            //console.log(mUsrData);

            //**check custom ($mLogic)
            function mCheck_logic() {
              var mLogic = mCurrI['$mLogic']; //@optional
              if(mLogic==undefined){
                //ignore....
                return true;
              }
              var mElemDta = mCurrI['mElemDta']; 
              var mInputE = mElemDta['mInputE'];
              //set vars....
              var mMatchWith = mLogic['mMatchWith'];
              var mErrInfo = {
                "isErr": true,
                "msg": null
              };

              if(mMatchWith!=undefined && Array.isArray(mMatchWith)==true){
                mSet_matchWith();
              }
              function mSet_matchWith() {
                for (let iC1 = 0; iC1 < mMatchWith.length; iC1++) {
                  const mCurr_iC1 = mMatchWith[iC1];
                  //console.log(mCurr_iC1);

                  var mArr = mFormPayload;
                  var mInstancePath = mCurr_iC1;
                  const found = mArr.find(elem => elem['$mUsrData'].hasOwnProperty(mInstancePath) == true);
                  if(found==undefined){
                    //error.....
                    mErrInfo['msg'] = `error: ($mLogic) has invalid [value: ${mInstancePath}]`;
                    return;
                  }

                  //**all ok.... 
                  //lets compare....
                  var mCurrInputDta = mInputE.value.trim();
                  var mFoundInputDta = found['mElemDta']['mInputE'].value.trim();
                  if(mCurrInputDta!="" && mFoundInputDta!=""){
                    if(mCurrInputDta===mFoundInputDta){
                      //success....(continue)
                      //console.log("success: both are same");
                    }else{
                      //failed (not matched)
                      mErrInfo['msg'] = `${mCurrI['label']}: not matched with ${found['label']}`;
                      //now....we display (err)
                      mShowTt(mErrInfo['msg'], mElemDta);
                      return;
                    }
                  }else{
                    //ignored....
                  }

                }
              }

              //check and set....
              return mErrInfo['msg']==null ? true : mErrInfo;

            }
            var mLogicRes = mCheck_logic();
            if(mLogicRes==true){
              //continue......
            }else{
              //error....
              mSend_err({"msg": mLogicRes['msg']});
              return;
            }



             
            //all ok..... 
            //continue....
            //console.log(mCurrI);
            
          }

          //all ok..... 
          //continue....
          mVali();

        }

        //here we validate data....
        function mVali() {
          //console.log(mUsrPayload);

          //JSON Schema (validation)
          var mValiRes = core_1mn['mVali']['mSchemaJSON'].set({
            "schema": mSchema,
            "usr_payload": mUsrPayload,
          });
          if(mValiRes.hasOwnProperty("isErr")==true){
            //error.....
            mOn_err();
            return;
          } 

          //events.....
          function mOn_err() {
            //set..
            mSend_err({"msg": `${mValiRes['msg']}`});
            //set vars......
            var mErrObj = mValiRes['mErrObj'];
            //log..
            console.log(mErrObj);
            if(mErrObj==undefined){
              //error (unexpected)
              mSend_err({"msg": `error: unexpected`});
              return;
            }

            //all ok.... 
            mSet_errMSG();
            function mSet_errMSG() {
              var mInstancePath = mErrObj['instancePath'];
              if(mInstancePath==undefined || mInstancePath.trim()==""){
                //error 
                mSend_err({"msg": `error: (instancePath) is undefined`});
                return;
              }
              if(mInstancePath.charAt(0)=="/"){
                mInstancePath = mInstancePath.substring(1,
                  mInstancePath.length
                  ); //(remove /)

                if( mInstancePath.match("/") != null){
                  if(mInstancePath.match("/").length>0){
                    mInstancePath = mInstancePath.substring(0, mInstancePath.indexOf("/") ); //(get first word before (/))
                  }
                }

              }
              var mArr = mFormPayload;
              const found = mArr.find(elem => elem['$mUsrData'].hasOwnProperty(mInstancePath) == true);
              if(found==undefined){
                //error....
                mSend_err({"msg": `error: (instancePath) is not able to find (field)`});
                return;
              }

              //all ok.....
              //console.log(found);
              //console.log(mErrObj);
              //**set vars.....
              var mFormCurrItem = found;
              var mElemDta = mFormCurrItem['mElemDta']; 
              var mMsgTxt = mErrObj['message']!=undefined ? (`${mFormCurrItem['label']}: ${mErrObj['message']}`) : "Something went wrong!";
              mShowTt(mMsgTxt, mElemDta);
              
            } 
            
          }

          //******all ok....(continue)
          //console.log("VALID DATA");
          mSend_onload({"usr_payload": mUsrPayload});

          
        } 

            //events.....
            function mShowTt(mMsgTxt, mElemDta) {
              var mTooltip = mElemDta['mTooltip'];
              //Init (note).... 
              var mMsgDiv = core_1mn['notes']['2'].set({
                "ico1": {
                    "0": "exclamation_0.svg",
                    "1": "1.6vh",
                    "2": "1.6vh",
                    "3": "rgba(252, 58, 58, 1.0)",
                }, 
                "txt1": {
                    "0": mMsgTxt,
                    "1": "1.2vh",
                    "3": "0 0 0 0.2vw"
                }, 
             });





              //**Show.....
              mTooltip['tt'].show(mTooltip['tt']['e'], mMsgDiv);
              

            }


         //callback....
        //error..
        function mSend_err(mErr) {
          if(mCb!=undefined){
            if(mCb['mOnError']!=undefined){
              //send....
              mCb.mOnError(mErr);
            }
          }
        }
        //onload..
        function mSend_onload(mRes) {
          if(mCb!=undefined){
            if(mCb['mOnLoad']!=undefined){
              //send....
              mCb.mOnLoad(mRes);
            }
          }
        }

        
        /*
        USAGE
        core_1mn['mForm']['mV'].set({
                                  "form_payload": mFormPayload_Test,
                                  "schema": schema_test,
                                  "cb": {
                                      "mOnLoad": (mGetParams) => {
                                          //validation is success....
                                          var mParams = mGetParams;
                                          var mUsrPayload = mParams['usr_payload'];
                                          console.log(mUsrPayload);
                                      },
                                      "mOnError": (mGetParams) => {
                                          var mParams = mGetParams;
                                          console.log(mParams);
                                      },
                                  }
                              });
        */


      }

    }


    },



    "mElemSearch": {
      //const collection = document.getElementsByTagName("*"); /*Get all elements in the document:*/

      "byAttr": {

        "get": (mE1, mAttrName, mAttrVal) => {
          var mE1_Arr = mE1.getElementsByTagName("*");
          for (let i1 = 0; i1 < mE1_Arr.length; i1++) {
            const mCurrE = mE1_Arr[i1];
            if(mCurrE.getAttribute(mAttrName)==mAttrVal){
              //found....
              return mCurrE;
            }
          }
          //error....(Not found)
          return null;

        }

      }


    },

    //animations......
    "mAnim": {

      //utils..
      "mUtils": {
        "screen": function(mE1){
            var mScreen = document.createElement("div");
            mScreen.style.position = "absolute";
            mScreen.style.top = "0";
            mScreen.style.left = "0";
            mScreen.style.width = "100%";
            mScreen.style.height = "100vh";
            mScreen.style.backgroundColor = "rgba(255,255,255, 0.7)";
            mE1.appendChild(mScreen);
            return mScreen;
        }
      },

      "mSkel": {
        
        "mDta": { //data....

          "s": //skeleton code
           `

           <v >

           <x d='{ "w": "10vh", "h": "10vh", "bR": "5%"  }' >
           </x>
 
           <x d='{ "w": "10vh", "h": "10vh", "bR": "50%"  }' >
           </x>
 
           </v> 
          
          `

        },

        "mR": { //rendrer....

          "x": { //custom shape.....

            "set": (mGetParams) => {
              var mParams = mGetParams;
              var mE1 = mParams['mE1'];
              var mD = mParams['mD'];

              //layout.....  
              mSet_item();
              function mSet_item() {
                //set props.....
                var mW = mD['w'] != undefined ? mD['w']: "12vh"; //(width)
                var mH = mD['h'] != undefined ? mD['h']: "12vh"; //(height)
                var mBR = mD['bR'] != undefined ? mD['bR']: "5%"; //(border radius)
                var mM = mD['m'] != undefined ? mD['m']: "0.8vh"; //(margin)
                var mA = mD['a'] != undefined ? mD['a']: "0"; //(animation (0=>YES, 1=>NO))
                var mR1 = mD['r1'] != undefined ? mD['r1']: 0; //(no of repeat) (numeric)


                //set elem......
                mE1.style.borderRadius = mBR;
                mE1.style.width = mW;
                mE1.style.height = mH;
                mE1.style.margin = mM;
                mE1.style.background = "rgba(130, 130, 130, 0.2)";

                //var mE1 = document.createElement("div");
              

                if(mA=="0"){
                  //animation....
                  mE1.style.background = "linear-gradient(to right, rgba(130, 130, 130, 0.2) 8%, rgba(130, 130, 130, 0.3) 18%, rgba(130, 130, 130, 0.2) 33%)";
                  var mGetInt = core_1mn['mExtract']['mInt'];
                  mE1.style.backgroundSize = `${ mGetInt.get(mW) * 3 }vh ${ mGetInt.get(mH) }vh`; //800px 100px
                  mE1.style.animation = "wave-hori 2s infinite ease-out";
                }

                
              }

            }

          },

          "v": { //vertical cover.....

            "set": (mGetParams) => {
              var mParams = mGetParams;
              var mE1 = mParams['mE1'];
              var mD = mParams['mD'];

              //layout.....  
              mSet_item();
              function mSet_item() { 
                mE1.style.width = "100%";
                mE1.style.height = "100%";
                mE1.style.backgroundColor = "transparent";

              }


            }

          },

          "h": { //horizontal cover.....

            "set": (mGetParams) => {
              var mParams = mGetParams;
              var mE1 = mParams['mE1'];
              var mD = mParams['mD'];

              //layout.....  
              mSet_item();
              function mSet_item() { 
                mE1.style.display = "flex";
                mE1.style.width = "100%";
                mE1.style.height = "100%";
                mE1.style.backgroundColor = "transparent";

              }


            }

          },

        },

        "mB": { //builder.....

          "set": (mGetParams) => {
            var mParams = mGetParams;
            var mArr1 = mParams['mArr1']; //core_1mn['mAnim']['mSkel']['mDta']['s'] (sample)

            //set vars......
            var mSkelHolder = document.createElement("div");
            mSkelHolder.setAttribute("tag_n", "skel_holder");

            //generate.....
            function mGenerate() {

                //here we generate skel data....
                  //<x>=> custom shape
                  //<v>=> vertical (cover)
                  //<h>=> horizontal (cover)
                  //d=> JSON data tag


                  //format..... 
                  mFormat_dta();
                  function mFormat_dta() {
                    var mDoc = mSkelHolder;
                    mDoc.innerHTML = mArr1; 
                    
                    //set......
                    mSet_item({
                      "t": "x"
                    });
                    mSet_item({
                      "t": "v"
                    });
                    mSet_item({
                      "t": "h"
                    });

                    function mSet_item(mGetParams) {
                      var mParams = mGetParams;
                      var mT = mParams['t'];
                      //set vars.....
                      var mDoc_arr = mDoc.querySelectorAll(mT); //[tag_n]
                      for (let i1 = 0; i1 < mDoc_arr.length; i1++) {
                        const mCurrI = mDoc_arr[i1];
                        //const mCurrI = i1;
                        //console.log(mCurrI);  

                         //set vars.....
                         var mD = mCurrI.getAttribute("d"); //json data 
                         var mD_json = {};
                          //parse json....
                          try {
                            mD_json = JSON.parse(mD);
                            mD_json = mD_json != null ? mD_json : {};
                          } catch (error) {
                            mD_json = {};
                          }

                        //replace (tags).....
                        function mReplaceTags() {
                           var mDiv = document.createElement("div");
                           mDiv.innerHTML = mCurrI.innerHTML;
                           //update.....
                           mDiv.setAttribute("tag_n", mT);
                           if(mD!=null){
                            mDiv.setAttribute("d", mD);
                           }
                           mCurrI.replaceWith(mDiv);
                           return mDiv;
                        }

                        //clone (E)
                        function mSet_CloneE() {
                          var mNoOfRpt = mD_json['r1']!=undefined ? mD_json['r1'] : null;
                          if(mNoOfRpt!=null){
                            for (let iC1 = 0; iC1 < mNoOfRpt; iC1++) {
                              //set......
                              var mParentE = mRepTagE.parentElement;
                              var mCloneE = mRepTagE.cloneNode(true);
                              mParentE.insertBefore(mCloneE, mRepTagE.nextSibling);
                               //render (E)
                               mRender_E();
                            }
                          } 
                          
                        }   
                        
                        //set vars....
                        var mRepTagE = mReplaceTags();
                        var mTagN = mRepTagE.getAttribute("tag_n"); //tag name
                        mRender_E();
                        mSet_CloneE();

                        //render (E)
                        function mRender_E() {
                           //set.....
                           if(core_1mn['mAnim']['mSkel']['mR'].hasOwnProperty(mTagN)==true){
                             core_1mn['mAnim']['mSkel']['mR'][mTagN].set(
                               {
                                 "mD": mD_json,
                                 "mTagN": mTagN,
                                 "mE1": mRepTagE
                               }
                             );
                           }
                        }


                      }
                       
                    }

                    
                  } 

             
              //all done.....
              //console.log(mSkelHolder);
              return mSkelHolder; //(mSkelHolder)

            }

            return mGenerate();
            

            /*
            USAGE
            
            var mSkelData = `
        
        <v >

        <x d='{ "w": "15vh", "h": "15vh", "bR": "50%", "m":"4vh auto"  }' >
        </x>

        <x d='{ "w": "20vw", "h": "7vh", "bR": "0.5vh", "a":"1", "m":"2vh auto", "r1":"1"  }' >
        </x> 
        
        <x d='{ "w": "20vw", "h": "2vh", "bR": "0.5vh", "m":"2vh auto", "r1":"1"  }' >
        </x> 

        </v>

        `;
        var mSkelHolder = core_1mn['mAnim']['mSkel']['mB'].set(
            {
                "mArr1": mSkelData,
            }
        ); //skel_holder
        //console.log(mSkelHolder);
        mSkelAnimHolder.appendChild(mSkelHolder);

            */
           

          }

        }


      },
      //https://uxplanet.org/using-loading-animation-on-websites-and-apps-examples-and-snippets-to-use-cab0097be9f1
      //https://loading.io/css/
      //https://projects.lukehaas.me/css-loaders/
      //https://tobiasahlin.com/spinkit/
      //https://github.com/tobiasahlin/SpinKit
      "loader": {

        "0": {
          "set": function(mGetParams){
            var mParams = mGetParams;
            var mE1 = mParams['e1'];
            var mW = mParams['w']!=undefined ? mParams['w'] : "4vh";
            var mH = mParams['h']!=undefined ? mParams['h'] : "4vh";
            var mNoOfDots = mParams['0']!=undefined ? mParams['0'] : 3;
            var mColor = mParams['1']!=undefined ? mParams['1'] : "#343434";
            var mPosH = mParams['2']!=undefined ? mParams['2'] : 1;
            var mPosV = mParams['3']!=undefined ? mParams['3'] : 1;

            var mJustifyContent = ["start", "center", "end"];
            //set....
            var mLoaderViewer = document.createElement("anim_loader_1mn");
            mLoaderViewer.style.display = "flex";
            mLoaderViewer.style.justifyContent = mJustifyContent[mPosH]; //0=>left, 1=>center, 2=>right
            mE1.appendChild(mLoaderViewer);  

            //set.......
           //@req (libs => spinkit.min.css)
           //(1)..
           var mSk_flow = document.createElement("div");
           mSk_flow.className = "sk-flow";
           mSk_flow.style.width = mW;
           mSk_flow.style.height = mH;
           //flex..
           mSk_flow.style.display = "flex";
           mSk_flow.style.alignItems = mJustifyContent[mPosV];
           mLoaderViewer.appendChild(mSk_flow); 

           //set dots here.....
           function mSet_dots() {
            for (let i1 = 0; i1 < mNoOfDots; i1++) {
              var mDot = document.createElement("div");
              mDot.className = "sk-flow-dot";
              mDot.style.backgroundColor = mColor;
              mSk_flow.appendChild(mDot);
            }
           }
           mSet_dots();


           /*
           USAGE
            core_1mn['mAnim']['loader']['0']['set']({
                    "e1": mDisableLayer,
                    "1": "blue"
                  });

           */



        }
        },

        //horizontal loader..
        "1": {
          "set": function(mGetParams){
            var mParams = mGetParams;
            var mE1 = mParams['e1']; //@req
            var mW = mParams['w']!=undefined ? mParams['w'] : "100%";
            var mH = mParams['h']!=undefined ? mParams['h'] : "0.4vh";
            var mBgColor = mParams['0']!=undefined ? mParams['0'] : "rgba(34,34,34, 0.1)";
            var mColor = mParams['1']!=undefined ? mParams['1'] : "rgba(34,34,34, 0.3)";

            //make (relative)..
            mE1.style.position = "relative";

            //set..
            var mScreen = core_1mn["mAnim"]["mUtils"].screen(mE1); 

            //mHoriE..
            var mHoriE = document.createElement("div");
            mHoriE.style.width = mW;
            mHoriE.style.height = mH;
            mHoriE.style.backgroundColor = mBgColor;
            mScreen.appendChild(mHoriE);
            //box..
            function mSet_box() {
               //set vars..
               var mSpeed = 0.8;
               //layout..
               var mBox = document.createElement("div");
               mBox.style.width = "40%";
               mBox.style.height = "100%";
               //anim..
               // Get the root element
               var r = document.querySelector(':root');
               // Set the value of variable --box to another value
               r.style.setProperty('--box', mColor);
               mBox.style.animation = `box-left-to-right ${mSpeed}s infinite`;
               mBox.style.animationDirection = "normal";
               mBox.style.position = "relative";
               mHoriE.appendChild(mBox);
            }
            mSet_box();

            //events..
            var mEvents = {
              "anim": {
                "clear": function() {
                  mScreen.remove();
                }
              }
            };
            return mEvents;

            /*
            --USAGE--
            core_1mn["mAnim"]["loader"]["1"].set({
              "e1": document.body,
              "0": "orange", //bg color..
              "1": "red", //color..
            });
            setTimeout(() => {
              mEvents["anim"].clear();
            }, 3000);
            */


          }
        }
       
      },

     


    },


    //extractions......
    "mExtract": {

      "mInt": {

        "get": (mStr1) => {
          //get (int) from data....
          const str = mStr1; //hello 123 world
          const replaced = str.replace(/\D/g, ''); // '123'
          //console.log(replaced);

          let num;
          if (replaced !== '') {
            num = Number(replaced); // 123
          }
          //console.log(num);
          return num;

          
          /*USAGE
          core_1mn['mExtract']['mInt']['get']("hello1234");
          */

        }

      }


    },


    //wait...
    "mWait": {
      
      "auto": (mGetParams) => {
        var mParams = mGetParams;
        var mEnv = core_1mn['conf']['mEnv'];

        //data.....
        var mAuto = {
          "0": {
            "set": () => {
              var mTimeout = 200; //1000
              var mWait = setTimeout(() => {
                clearTimeout(mWait);
                mParams.mCb();
              }, mTimeout);
             }
          },
          "1": {
            "set": () => {
              //direct
              mParams.mCb();
            }
          },
        };
        mAuto[mEnv].set();

        /*
        USAGE
        core_1mn['mWait']['auto'](
          {
              "mCb": function(){
                //add your code..
              }
          });*/

      }

    },


    //collectors..
    "mCollect": {
      //here we collect info..
      "mUtil": {
        //here we add reusable (functions)..

        "mGetLineNo": () => {
          //here we get code(line no)
          let e = new Error();
          e = e.stack.split("\n")[2].split(":");
          e.pop();
          return e.pop();
        },

        "mDeviceInfo": () => {
          //here we device info..
          var mInfo = {
          };
           if(window.navigator.platform != undefined){
            mInfo['platform'] = window.navigator.platform;
           }
           if(window.navigator.appVersion != undefined){
            mInfo['appVersion'] = window.navigator.appVersion;
           }
           if(window.navigator.appCodeName != undefined){
            mInfo['appCodeName'] = window.navigator.appCodeName;
           }
           if(window.navigator.userAgent != undefined){
            mInfo['userAgent'] = window.navigator.userAgent;
           }
           if(window.navigator.vendor != undefined){
            mInfo['vendor'] = window.navigator.vendor;
           }
           
          return mInfo;

        }

      }, 

      "log": {
        "set": (mLogData) => {
          //data..
          //https://www.bennadel.com/blog/3941-styling-console-log-output-formatting-with-css.htm
          var mLogList = {
            "err_mn": {
              "set": (mGetParams) => {
                var mParams = mGetParams;
                var err_mn = mGetParams['err_mn'];
                err_mn.cb.onLog(); //Send(log to (function))
                //add (additional..)
                err_mn['err_adv']['deviceInfo'] = core_1mn['mCollect']['mUtil'].mDeviceInfo();

                //show..
                console.group(
                  "%cERROR",
                  "background-color: #f51d45 ; color: #ffffff ; font-weight: 450 ; padding: 0.4vh ;"+
                  "font-size: 1.5vh ; border-radius: 0.5vh;"
                );
                console.log( err_mn );
                console.groupEnd();
                
              }
            },
            "info_mn": {
              "set": (mGetParams) => {
                var mParams = mGetParams;
                var info_mn = mGetParams['info_mn'];
                //show..
                console.group(
                  "%c INFO",
                  "background-color: #617ae8 ; color: #ffffff ; font-weight: 450 ; padding: 0.4vh ;"+
                  "font-size: 1.5vh ; border-radius: 0.5vh;"
                );
                console.log( info_mn );
                console.groupEnd();
                
              }
            },
          };
          if(Object.keys(mLogData).length==1){
            mLogList[Object.keys(mLogData)[0]].set(mLogData);
          }else{
            console.error(`error: invalid log data [${mLogData}]..`);
          }
          
        }
      }

    },


    //api requests..
    "mApiReq": {

      "mUtil": {
        //here we add reusable (functions).. 
      },

      "HTTP": {
        "set": (mGetParams) => {
        var mParams = mGetParams;
        var mData = mParams['data'];
        var mUrl = mParams['url'];
        var mMethod = mParams['method']!=undefined ? mParams['method'] : "post"; //[post, get]
        let mHeaders = mParams['headers']!=undefined ? mParams['headers'] : {  'Content-Type': `multipart/form-data; boundary=undefined`}; //${mData._boundary}
        var mCb = mParams['cb'];

  
        //**send req...
        //----Method-1-----//
        //axios (api)
        /*axios( 
          {
            method: mMethod,
            headers: mHeaders,
            data: mData,
            url: mUrl
          },
        )
       .then(function (response) {
        //Response.....
        console.log(response);
        //return;
        var dta = response['data'];
        mSendCB("onLoad", {"dta": dta });
      })
      .catch(function (error) {
        //Error.....
        console.log(error);
        //return;
        var response = error['response'];
        var dta = response['data'];
        mSendCB("onErr", {"dta": dta });
      });*/
  
  
        //----Method-2-----//
        /* Make an HTTP request*/
        /*var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            //loaded success......
            //console.log('loaded success: '+this.responseText);
             //Response.....
             var response = this.responseText;
             //console.log(response);
             //return;
             var dta = response;
             mSendCB("onLoad", {"dta": JSON.parse(dta) });
          }
          if (this.status != 200 && this.status > 0) {
              //console.log("Error."); 
              //Error.....
              var error = this.responseText;
              //console.log(error);
              //return;
              var dta = error;
              mSendCB("onErr", {"dta": JSON.parse(dta) });
          } 
        }
       }
       xhttp.open(mMethod, mUrl, true);
       function setHeaders(headers){
        for(let key in headers){
          xhttp.setRequestHeader(key, headers[key]) 
        }
       }
       setHeaders(mHeaders);
       //--------x-www-form-urlencoded-----------//
       if (mHeaders["Content-Type"]=="application/x-www-form-urlencoded") {
         //xhttp.send("epType_mn=idp&epName_mn=10");
         //var mData = new FormData();
         //mData.append("key1", "value1");
         //mData.append("key2", "value2");
         //set vars..
         var fb_arr = [...mData.entries()];
         var mNewData = "";
         for (let i1 = 0; i1 < fb_arr.length; i1++) {
          const pair = fb_arr[i1];
          mNewData+=`${pair[0]}=${pair[1]}`; 
          if (i1 < (fb_arr.length-1)) {
            mNewData+="&";
          }
         }
         //console.log(mNewData);
         xhttp.send(mNewData); 
       }else {
         xhttp.send(mData); 
       }
       */


      //----Method-3-----//
      function mFetch() {
        async function sndData(url = "") {
          //get body..
          let mGetBody = (d, h) => {
              //let formBody = Object.keys(mFormDta).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(mFormDta[key])).join('&');
              //console.log(formBody);
              let mGet1 = (mData) => { 
                //set vars..
                var fb_arr = [...mData.entries()];
                var mNewData = "";
                for (let i1 = 0; i1 < fb_arr.length; i1++) {
                 const pair = fb_arr[i1];
                 //encode..
                 var encodedKey = encodeURIComponent(pair[0]);
                 var encodedValue = encodeURIComponent(pair[1]);
                 mNewData+=`${encodedKey}=${encodedValue}`; 
                 if (i1 < (fb_arr.length-1)) {
                   mNewData+="&";
                 }
                }
                //console.log(mNewData);
                return mNewData;
              };  
              if (h["Content-Type"]=="application/x-www-form-urlencoded") {
                d = mGet1(d);
              }
              return d;
          }
          const mBody = mGetBody(mData, mHeaders);
          //console.log(mBody);
          //--request payload--//
          let mReqP = {
            method: mMethod, // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            //cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: "include", // include, *same-origin, omit
            //headers: 
            /*{
              //"Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
              //"Authorization": `Bearer MY_TOKEN`
            }*/
            //mHeaders,
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            //body: JSON.stringify(data), // body data type must match "Content-Type" header
            body: mBody //mData
          };
          if (mHeaders["Content-Type"]=="application/x-www-form-urlencoded") {
            //set headers..
            mReqP["headers"] = mHeaders;
          }

          // Default options are marked with *
          const response = await fetch(url, 
            mReqP
          );
          return response;
        }
        sndData(mUrl).then(async (data)  =>  {
          //console.log(data); // JSON data parsed by `data.json()` call
          const status = data.status;
          const responseText = await data.text();
          if (status == 200) {
            //loaded success......
            //Response.....
            var dta = responseText;
            mSendCB("onLoad", {"dta": JSON.parse(dta) });
          }
          if (status != 200 && status > 0) {
              //Error.....
              var dta = responseText;
              mSendCB("onErr", {"dta": JSON.parse(dta) });
          } 
        }).catch((e) => {
          console.log(e);
          //Error.....
          mSendCB("onErr", {"dta": {
            "err_mn": {
              "err": {
                "msg": e,
              },
              "res_mn": {
                "type": "service_unavail_err",
                "msg": "[Error] An error occurred while connecting to the server.",
              }
            }
          } });
        }); 
      }
      mFetch();

  
  
      //here we send callback..
      function mSendCB(mCb_name, mDta) {
        //wait (auto)..
        core_1mn['mWait']['auto'](
          {
              "mCb": function(){
                if(mCb!=undefined){
                  if(mCb[mCb_name]!=undefined){
                    mCb[mCb_name] (mDta);
                  }
                }
              }
        });
      }
  
      /*
      USAGE
         core_1mn['mApiReq']['HTTP'].set(
                               {
                                "data": mFormDataTest,
                                "url": url4_GVars,
                                "method": "post",
                                "cb": {
                                    "onLoad": (mRes) => {
                                        console.log(mRes);
                                    },
                                    "onErr": (mRes) => {
                                        console.log(mRes);
                                    }
                                }
                               }
                          );
      */
  
  
        }
      }
  


    },

    //here we check device (type)
    "checkDeviceType": {
    "set": function(mGetParams){
      //set vars..
      var mParams = mGetParams;
      var mCb = mParams['cb'];
      function isMobileTablet(){
        var check = false;
        (function(a){
            if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
                check = true;
        })(navigator.userAgent||navigator.vendor||window.opera);
        return check;
     }
     //send callback..
     var mSend_cb = function(mCb_name, data){
      if(mCb!=undefined){
        if(mCb[mCb_name]!=undefined){
          mCb[mCb_name] (data);
        }
      }
     };

     if(isMobileTablet()==true){
      //detected touch-enabled devices(mobile or tablet)
      mSend_cb("onLoad", 0); //Mobile
      return;
     }
      //detected (pc)
      mSend_cb("onLoad", 1);
      return; //Pc

      /*
      USAGE
      core_1mn['checkDeviceType'].set({
  "cb": {
    "onLoad": function(data){
      console.log(data);
    }
  }
});
      */
     
    }
    },
    

    //Redirect to Another Webpage..
    "rdct": {
      "set": function(url="",typ=0){
       //set..  
       if (typ==0) {
         // Simulate a mouse click:
         window.location.href = url; //http://www.example.com
       }
       if (typ==1) {
         // Simulate an HTTP redirect:
         window.location.replace(url); ////http://www.example.com
       } 
       
       /*
       USAGE
       core_1mn["rdct"].set("http://www.example.com", 1);
       */
      }
   },
 
 
   //Route..
   "route": {
    "path": function(){
      var mRp = window.location.pathname;
      //console.log(mRp); //-> /security/
      return mRp;
      /*
      --USAGE--
      core_1mn["route"].path();
      */
    },
    "set": function(title="",path=""){
      const mConti = () => {
        let mS = window.location.search;
        //modify page (data).. without refresh..
        document.title = title; //My Page
        window.history.pushState('', '', 
        `${path}${mS}` //--> '/my-route'
        );
      };
      
      try {
        //--Check for (mware)--//
        config_mn.core_1mn.config["route"]["mware"]({
          "onLoad": () => {
            mConti();
          }
        });
      } catch (error) {
        //without (mware)
         mConti();
      }

      
      /*
      --USAGE--
      
      */
    }
   },
 
 
   //datatypes (Check DataType of Value)..
   "dTyp": {
     "is_int": function(v){
       if (typeof v === "number" && v.toString().indexOf(".")===-1) {
           return true;
       }else{
           return false;
       }
       /*
       --USAGE--
       core_1mn["dTyp"].is_int(i);
       */
     },
     "is_string": function(v){
       if (typeof v === "string") {
           return true;
       }else{
           return false;
       }
       /*
       --USAGE--
       core_1mn["dTyp"].is_string(i);
       */
     },
     "is_decimal": function(v){
      if (typeof v === "number" && v.toString().indexOf(".")!==-1) {
          return true;
      }else{
          return false;
      }
      /*
      --USAGE--
      core_1mn["dTyp"].is_decimal(i);
      */
     },
   },

   //conversions.. 
   "mCnv": {
     "strToDecimal": (v="", cb={"onLoad":(decimal)=>{}, "onErr":(err)=>{}}) => {
      //func--
      function mSendErr(msg) {
        if (cb["onErr"]!=undefined) {
          cb.onErr(msg);
        }
      }
        //check (str)..
        if (core_1mn["dTyp"].is_string(v)==false) {
           mSendErr("err: [strToDecimal]");
           return;
        }
        try {
          let mEval = eval(v);
          //check (decimal)..
          if (core_1mn["dTyp"].is_decimal(mEval)==false) {
            mSendErr("err: [strToDecimal] incorrect (Decimal)");
            return;
          }
          //all ok..
          cb.onLoad(mEval);
        } catch (e) {
          mSendErr("err: [strToDecimal] incorrect (Decimal)");
          return;
        } 

        /*
        --USAGE--
        core_1mn["mCnv"].strToDecimal("45.577", {
          "onLoad": (v) => {
             console.log(v);
          },
        });
        */

     },
     "strToInteger": (v="", cb={"onLoad":(integer)=>{}, "onErr":(err)=>{}}) => {
      //func--
      function mSendErr(msg) {
        if (cb["onErr"]!=undefined) {
          cb.onErr(msg);
        }
      }
        //check (str)..
        if (core_1mn["dTyp"].is_string(v)==false) {
           mSendErr("err: [strToInteger]");
           return;
        }
        try {
          let mEval = eval(v);
          //check (integer)..
          if (core_1mn["dTyp"].is_int(mEval)==false) {
           mSendErr("err: [strToInteger] incorrect (Integer)");
           return;
          }
          //all ok..
          cb.onLoad(mEval);
        } catch (e) {
          mSendErr("err: [strToInteger] incorrect (Integer)");
          return;
        }

        /*
        --USAGE--
        core_1mn["mCnv"].strToInteger("45", {
          "onLoad": (v) => {
             console.log(v);
          },
        });
        */

     },
     "unit": {
         "set": (v="", cb={"onLoad":(v)=>{}, "onErr":(err)=>{}}, 
          opt={"add":undefined/*addition*/, "sub": undefined/*subtraction*/}) => {
              let mAdd = opt["add"]!=undefined ? opt["add"] : 0;
              let mSub = opt["sub"]!=undefined ? opt["sub"] : 0;
              //vali..
              if (v.trim()=="") {
                 //err..
                 throw "err: mCnv.unit";
              }
              if (v.trim().indexOf(" ")!==-1) {
                //err..
                throw "err: mCnv.unit [Space not supported]";
              }
              //all ok..
              //rndr..
              let mRndr = {
                "l": [
                  {
                    //https://www.w3schools.com/cssref/css_units.php
                    "name": "CSS unit", 
                    "key": ["vh", "vw"],
                    "set": (v, u) => {
                      v+=mAdd;
                      v-=mSub;
                      return v+u;
                    } 
                  }
                ]
              };
              //Sample Format.. (v => {NUMBER}{UNIT}) eg => "1.0vh"

              //set vars..
              let az_Idx = v.indexOf(v.match(RegExp("[a-zA-Z]")));
              let mUnit = v.substring(az_Idx);
              let mVal = v.substring(0, az_Idx);
              /*console.log(`az_Idx: ${az_Idx}`);
              console.log(`mVal: ${mVal}`);*/
              //console.log(mUnit);

              //vali..
              try {
                 mVal = eval(mVal);
                 if (typeof mVal !== "number") {
                    throw "err: mCnv.unit [eval]";
                 }
              } catch (e) {
                 throw "err: mCnv.unit [eval]";
              }
              //all ok..

              //set..
              const mF = mRndr["l"].find(e => e["key"].indexOf(mUnit)!==-1);
              if (mF==undefined) {
                  //err..
                  throw `err: [unit=${mUnit}] not supported!`;
              }
              //all ok..
              let mRes = mF.set(mVal, mUnit);
              if (cb["onLoad"]!=undefined) {
                cb.onLoad(mRes);                
              }
              return {
                "v": mRes
              };

              /*
              --USAGE-- 
              let mRes = core_1mn["mCnv"].unit.set("1.5px", {
              "onLoad": (v) => {
                 //console.log(v);
              }, 
             },
             {
              "add": 5,
              "sub": 2
            });
            --OR--
            console.log(mRes["v"]);*/


         } 
     },
     "color": {
      //https://www.w3docs.com/snippets/javascript/how-to-convert-rgb-to-hex-and-vice-versa.html
        "RGBtoHex": {
          "set": (mP={ rgb:"" }) => { //r:-1, g:-1, b:-1, 
            let r, g, b;
            if (mP.rgb!="") {
              mP.rgb = mP.rgb.replace("rgb", "").replace("(", "").replace(")", "").replaceAll(",", " ").split("  ");
              r = parseInt(mP.rgb[0]);
              g = parseInt(mP.rgb[1]);
              b = parseInt(mP.rgb[2]);
              //console.log(`mP.rgb: ${mP.rgb}`);
            }
            //set..
            return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
            /*
            USAGE
            console.log(core_1mn.mCnv.color.RGBtoHex.set({
              "rgb": `rgb(28, 135, 201)`
            })); // #1c87c9
            */
          }
        },
        "HexToRGB": {
          "set": (hex) => {
            let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            let mR = result ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16)
            } : null;
            return {
              "rgb": `rgb(${mR.r}, ${mR.g}, ${mR.b})`,
              "code": mR
            };

            /*
            USAGE
            console.log(core_1mn.mCnv.color.HexToRGB.set("#1c87c9").b); // 201
            */
          }
        },
     }
   },


   //Memory Database..
   "memDB": {
    //mn based..
    "MN": {
      //databases..
      "db": [
          {
              "name": "Sample_DB",
              //collections..
              "col": [
                  {
                     "name": "Sample",
                     //documents..
                     "doc": [

                     ]
                  }
              ]
          }
      ],

      //query..
      "qry": {
          "db": {
              "create": (db_name="", cb={}) => {
                  //create (DB)..
                  //vali..
                  const found = core_1mn["memDB"]["MN"]["db"]
                  .find(e => e["name"] == db_name);
                  if (found!=undefined) {
                    //already exists..
                    var msg = `Error: [db_name=${db_name}] already exists`;
                    try {
                      cb["onErr"](msg);
                    } catch (error) {}
                    return;
                  }
                  //all ok.. 
                  //cb..
                  if (core_1mn["memDB"]["MN"]["db"].push({
                    "name": db_name,
                    "col": []
                  })) {
                    //ok.. 
                    var msg = `Ok: [db_name=${db_name}] created`;
                    try {
                      cb["onLoad"](msg);
                    } catch (error) {}
                  }
              },
          },
          "col": {
            "create": (db_name="", col_name="", cb={}) => {
                //create (col)..
                //vali..
                const foundDB_idx = core_1mn["memDB"]["MN"]["db"]
                .findIndex(e => e["name"] == db_name);
                if (foundDB_idx==-1) {
                  //not exists.. 
                  var msg = `Error: [db_name=${db_name}] not exists`;
                    try {
                      cb["onErr"](msg);
                  } catch (error) {}
                  return;
                }
                const foundCol = core_1mn["memDB"]["MN"]["db"][foundDB_idx]["col"]
                  .find(e => e["name"] == col_name);
                if (foundCol!=undefined) {
                    //already exists.. 
                    var msg = `Error: [col_name=${col_name}] already exists`;
                    try {
                      cb["onErr"](msg);
                    } catch (error) {}
                    return;
                }
                //all ok.. 
                //cb..
                if (core_1mn["memDB"]["MN"]["db"][foundDB_idx]["col"].push({
                  "name": col_name,
                  "doc": []
                })) {
                  //ok.. 
                  var msg = `Ok: [col_name=${col_name}] created`;
                    try {
                      cb["onLoad"](msg);
                  } catch (error) {}
                }

            },
          },
          "doc": {
            "create": (db_name="", col_name="", doc={}, cb={}) => {
                //create (doc)..
                //vali..
                const foundDB_idx = core_1mn["memDB"]["MN"]["db"]
                .findIndex(e => e["name"] == db_name);
                if (foundDB_idx==-1) {
                  //not exists.. 
                  var msg = `Error: [db_name=${db_name}] not exists`;
                    try {
                      cb["onErr"](msg);
                  } catch (error) {}
                  return;
                }
                const foundCol_idx = core_1mn["memDB"]["MN"]["db"][foundDB_idx]["col"]
                  .findIndex(e => e["name"] == col_name);
                if (foundCol_idx==-1) {
                    //not exists.. 
                    var msg = `Error: [col_name=${col_name}] not exists`;
                    try {
                      cb["onErr"](msg);
                    } catch (error) {}
                    return;
                }
                
                //all ok.. 
                function mAdd(doc) {
                  //modify..
                  doc["_id"] = core_1mn["mUniqueId"].mGenerate(17);
                  //cb..
                  if (core_1mn["memDB"]["MN"]["db"][foundDB_idx]["col"][foundCol_idx]["doc"]
                    .push(doc) ) {
                    //ok.. 
                    var msg = `Ok: [doc_id=${doc["_id"]}] created`;
                      try {
                        cb["onLoad"](msg);
                    } catch (error) {}
                  }
                  
                }
                if (Array.isArray(doc)) {
                  for (let i1 = 0; i1 < doc.length; i1++) {
                    const mCurr_I1 = doc[i1];
                    mAdd(mCurr_I1);
                  }
                }else {
                  mAdd(doc);
                }
               


            },
            "read": (db_name="", col_name="", search={}, cb={}) => {
              //create (doc)..
              //vali..
              const foundDB_idx = core_1mn["memDB"]["MN"]["db"]
              .findIndex(e => e["name"] == db_name);
              if (foundDB_idx==-1) { 
                //not exists.. 
                var msg = `Error: [db_name=${db_name}] not exists`;
                try {
                  cb["onErr"](msg);
                } catch (error) {}
                return;
              }
              const foundCol_idx = core_1mn["memDB"]["MN"]["db"][foundDB_idx]["col"]
                .findIndex(e => e["name"] == col_name);
              if (foundCol_idx==-1) {
                  //not exists.. 
                  var msg = `Error: [col_name=${col_name}] not exists`;
                  try {
                    cb["onErr"](msg);
                  } catch (error) {}
                  return;
              }
              
              //all ok..
              const doc_arr =  core_1mn["memDB"]["MN"]["db"][foundDB_idx]["col"][foundCol_idx]["doc"].filter(
                e => e[Object.keys(search)[0]] == Object.values(search)[0]
              );
              //cb..
              try {
                cb["onLoad"](doc_arr);
              } catch (error) {}

            },
          },
      }

      /*
      --USAGE--
       //create DB..
       core_1mn["memDB"]["MN"]["qry"]["db"].create("recepi", {
        "onLoad": (data) => {
            console.log(data);
        },
        "onErr": (err) => {
            console.log(err);
        }
      });
      //create Col..
      core_1mn["memDB"]["MN"]["qry"]["col"].create("recepi", "col1", {
          "onLoad": (data) => {
              console.log(data);
          },
          "onErr": (err) => {
              console.log(err);
          }
      });
      //create Doc..
      core_1mn["memDB"]["MN"]["qry"]["doc"].create("recepi", "col1", 
      {
          "dta": "Data1",
      }, {
          "onLoad": (data) => {
              console.log(data);
          },
          "onErr": (err) => {
              console.log(err);
          }
      });
      //----Read----//
      core_1mn["memDB"]["MN"]["qry"]["doc"].read("recepi", "col1",
      {
          "dta": "Data1",
      }, {
          "onLoad": (data) => {
              console.log(data);
          },
          "onErr": (err) => {
              console.log(err);
          }
      }); 
     */
    
      

    }
   },


   //Separator
   "sep": {
    "conf": [ //configuration..
    {
      "name": "DEFAULT",
      "0": "rgba(201,192,192, 1)"
    },
    {
      "name": "LIGHT",
      "0": "rgba(201,192,192, 0.5)"
    }, 

    ],
    "set": (mGetParams) => {
      var mParams = mGetParams;
      var mW = mParams['w']!=undefined ? mParams['w'] : "100%";
      var mH = mParams['h']!=undefined ? mParams['h'] : "1px";
      var mTyp = mParams['typ']!=undefined ? mParams['typ'] : 0; //type ["DEFAULT", "LIGHT"]
      var mE1 = mParams['e1']; //@req
      //set.....
      var mSep = document.createElement("div");
      mSep.style.width = mW;
      mSep.style.height = mH;
      mSep.style.backgroundColor = core_1mn["sep"]["conf"][mTyp]["0"];
      if (mE1!=undefined) {
         mE1.appendChild(mSep);
      }else{
        return {
          "e1": mSep,
          "bg": mSep.style.backgroundColor,
        };
      }

      /*
      --USAGE--
      
       //Separator.....
       core_1mn['sep'].set({
            "w": "1px",
            "h": "100%",
            "e1": mItemDiv,
       });
       --e1-- [Not Found]
       var mParams = core_1mn['sep'].set({
            "w": "1px",
            "h": "100%",
       }); //RETURN (below params)
       mParams["bg"];
       mParams["e1"];

      */

    }

  },


};
core_1mn['init'].set(); //load in-build features....

//**********Deprecated Variable***************//
var mGlobalVariables = core_1mn;


//*********Notes*******//
//*****Response Codes..........
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
//HTTP response status codes
/*1 - Informational responses (100–199)
2 - Successful responses (200–299)
3 - Redirection messages (300–399)
4 - Client error responses (400–499)
5 - Server error responses (500–599)*/



//payload..
var core_skle_en = {
   //here we add version info
   "mLibInfo": {
    "version": "1.0",
    "code": "1",
    "createdBy": "1MN.IO"
   },

    //here add all global variables..
  "gVars": {
  },


  "init": {
    "isInit": false,
    "set": function(){
       

    }
  },

  //add reloadable functions.. trigger when given [HTML, CSS, JS] is loaded
  "reload": {
    "set": function(){
      //change site language..
      core_skle_en['changeSiteLang']['set'](); 

    }
  },

  //change site language..
  "changeSiteLang": {
    "set": function(){
      //(ip_info)....get ip information..
      core_1mn['ip_info']['set']({
        "cb": {
          "onLoad": function(data){
            //console.log(data);
            var ip_info = data;
            //continue to language code..
            mLangCode(ip_info);
          },
          "onErr": function(data){ 
            //error..
            console.log(data);
          },
        }
      });
      //load lang codes..
      function mLangCode(ip_info) {
         //(mLangCode)....set
       core_1mn['mLangCodes']['set']({
        "cb": {
          "onLoad": function(data){
            var mLangArr = data['0'];
            //console.log(mLangArr); 
            //return; 
             //set..
            //"countryCode": ["IN", "PK"],
            //"region": ["UP", "DL"]
            var mSel_lang_code = "en"; //default
            try {
              const array1 = mLangArr; 
              const found = array1.find( function(element){
                try {
                  if(element['countryCode'].indexOf(ip_info['countryCode'])!==-1 &&
                  element['region'].indexOf(ip_info['region'])!==-1
                   ){
                    return element;
                  }
                } catch (error) {
                  //console.log("IGNORE");
                  //IGNORE.....
                }
              });
              //console.log(found);
              if(found!=undefined){
                if(found['lang_code']!=undefined){
                  //set relevant language code....
                  mSel_lang_code=found['lang_code'];
                }
              }
              //now....we continue to set lang..
              mSet_lang(mSel_lang_code);
            } catch (error) {
              //error..
              console.log(`Error: not find language sugg.. in [mLangCodes]`);
              return;
            }

          },
          "onErr": function(data){
            //error..
            console.log(data);
          },
        }
      });
      }

      //set language here..
      function mSet_lang(lang_code) {
        console.log(`SITE LANGUAGE: Site is running in: ${lang_code}`);
        //(trans_1)....set language..
        core_1mn['trans']['1']['set']({"lc": lang_code}); //lc=>"hi"
      }

     

    }
  }
 


};
//core_skle_en['init'].set(); //load in-build features....

 

//make global..
window.core_1mn = core_1mn;
//window.mGlobalVariables = mGlobalVariables;
//export..
export {core_1mn};
