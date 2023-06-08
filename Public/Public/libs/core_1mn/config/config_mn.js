//Config..[Standard config]
const config_mn = { 
    "core_1mn": {

      "config": {

        //here add all global variables..
        "gVars": { 

            //add all urls here.....
            "mUrls": {
        
              "set": {
                "mUrlDta": [
                    //-----DEV------//
                    {
                      "url1": "http://127.0.0.1:5500/Public/mn-jdrq/temple-kms/", //"url1": "http://localhost:85/",
                      "url2": "http://localhost:85/nodeApi", //backend(Api) //http://localhost:2020/
                      //"url3": "http://localhost/",
                      //"url4": "http://localhost:7070/api-php-src2/SKILLEE_ENGLISH/app.php/",
                      //"url5": "http://localhost:7070/websites/mn_english/assets/",
                    },
                    //-----PROD------//
                    {
                      "url1": `http://${window.location.hostname}/`,
                      //"url1": "https://templedbfd5488fghf6868h.devenv.pp.ua/", 
                      "url2": `http://${window.location.hostname}/nodeApi`,
                      //"url3": "https://682534557d5e78.lhrtunnel.link/",
                      //"url4": "https://682534557d5e78.lhrtunnel.link/api-php-src2/SKILLEE_ENGLISH/app.php/",
                      //"url5": "https://682534557d5e78.lhrtunnel.link/websites/mn_english/assets/",
                    },
                  ],
              } 
               
            }, 
            
        
        },

        //ip info (lib)
        "ip_info": {
            "set": {
              "url": "http://url_for_ip_info"
            }
        },

        //add all colors here.....
        "clr": {
          "c1": "rgba(0,32,96, 1)", //brand-color-1
          "c2": "#e5e7ef", //rgba(0,32,96, 0.1) //brand-color-2
          "c3": "rgba(14,112,205, 1.0)", //info-color
          "c4": "#0020600d", //rgba(0,32,96, 0.05) //brand-color-3

        }, 
        //core_1mn["clr"]["c1"]




        
    },

    },
};
 
 
 
//make global..
window.config_mn = config_mn;
export {config_mn};



 