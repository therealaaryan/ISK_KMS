console.log("core_kms.js [LOADED]");
if (1==2) { //Only for (Sugg.) puposes..
    const { core_1mn } = require("../../../../libs/core_1mn/core_1mn");
}


 
//payload.......
var core_kms = {
   //here we add version info
   "mLibInfo": {
    "version": "1.0",
    "code": "1",
    "createdBy": "1MN.IO"
   },

   //here add all global variables..
   "gVars": {

     //Database (static) data.. /*----Note: No longer used..It will be REMOVED Soon..Because all Data in Dynamic----*/
     "db_dta": { 
        "l": { //list of data..
            "status": [{
                "id": 0,
                "m_name": "Undefined"
        
            },
            {
                "id": 1,
                "m_name": "Active"
        
            },
            {
                "id": 2,
                "m_name": "Inactive"
        
            },
            {
                "id": 3,
                "m_name": "Rejected"
        
            },
            {
                "id": 4,
                "m_name": "Pending"
        
            },
            {
                "id": 5,
                "m_name": "Approved"
        
            },
            {
                "id": 6,
                "m_name": "Confirmed"
        
            }
            ],
        },
        "get": (name="", id) => {
            const result = core_kms["gVars"]["db_dta"]["l"][name].filter(e => e["id"] == id);
            console.log(id);
            if (result.length>0) {
                return result[0];
            }else {
                return undefined;
            }
            /*
            --USAGE--

            */
        }
     }

   },


   "init": () => {
     //memDB..
     core_kms.memDB.addData("recipes_DB", "recipes_COL");
     core_kms.memDB.addData("menu_DB", "menu_COL");
     core_kms.memDB.addData("coupons_DB", "coupons_COL_1",
      [
        {
            "MealType": "Breakfast",
            "ApprovedCoupons": "51",
            "PendingApproval": "19",
            "TotalPermitted": "100",
            "tag1": "my_tag_1"
         },
         {
            "MealType": "Lunch",
            "ApprovedCoupons": "47",
            "PendingApproval": "49",
            "TotalPermitted": "150",
            "tag1": "my_tag_1"
         },
         {
            "MealType": "Dinner",
            "ApprovedCoupons": "41",
            "PendingApproval": "17",
            "TotalPermitted": "400",
            "tag1": "my_tag_1"
         },
      ]
     );
     core_kms.memDB.addData("coupons_DB_1", "coupons_COL_2", [
        {
            "coupon_id": "CPN0561",
            "transaction_date": "2023-22-02",
            "transaction_type": 0, /*(transaction_type) [IDT, CASH, ONLINE]*/
            "raised_by": "ACCOUNTS DEPARTMENT",
            "cost_centre": "ACCOUNTS DEPARTMENT",
            "meal_type": 0, /*() [Breakfast, LUNCH, Dinner]*/
            "meal_time": "14:00 - 15:00",
            "coupon_count": "35",
            "amount": "5700",
            "status": 0 /*(status) [Pending, APPROVED, Reject] */
            //----client-side-params----// (write-below)
            //,"tag1": "my_tag_1"
        },

         
     ]);
     core_kms.memDB.addData("coupons_DB_2", "coupons_COL_3", [
        {
            "Date": "22/02/2023",
            "TransactionID": "CPN0561",
            "NoOfCouponsRaised": "27",
            "Amount": "4300",
            "Taxes": "115",
            "RaisedBy": "ACCOUNTS DEPARTMENT",
            "MealType": "LUNCH",
            "SettlementType": "IDT",
            "Status": "BILLED",
            "Wastage": "8",
            "tag1": "my_tag_1"
        },
        {
            "Date": "22/02/2023",
            "TransactionID": "CPN0761",
            "NoOfCouponsRaised": "27",
            "Amount": "1300",
            "Taxes": "215",
            "RaisedBy": "ADMIN DEPARTMENT",
            "MealType": "LUNCH",
            "SettlementType": "IDT",
            "Status": "REALISED",
            "Wastage": "8",
            "tag1": "my_tag_1"
        },
     ]);
     core_kms.memDB.addData("coupons_DB_3", "coupons_COL_4", [
        {
            "Date": "22/02/2023",
            "MealType": "LUNCH",
            "NoOfCouponsRaised": "27",
            "NoOfCouponsConsumed": "17",
            "Amount": "400",
            "tag1": "my_tag_1"
        },
        {
            "Date": "25/02/2023",
            "MealType": "DINNER",
            "NoOfCouponsRaised": "57",
            "NoOfCouponsConsumed": "27",
            "Amount": "700",
            "tag1": "my_tag_1"
        },
     ]);
     core_kms.memDB.addData("coupons_DB_4", "coupons_COL_5", [
        {
            "IMAGES": "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg", 
            "ITEM_CODE": "WS0005", 
            "ITEM_NAME": "PANEER", 
            "ITEM_CATEGORY": "WHITE", 
            "CURRENT_STOCK": "90 kgs", 
            "ITEM_PRICE_rs": "3916.83", 
            "SELLING_PRICE_prUn": "32.00/kg", 
            "MINIMUM_STOCK": "200 kgs", 
            "EXPIRY": "15/03/2023", 
            "STATUS": "ACTIVE",
            "tag1": "my_tag_1"
        },
        {
            "IMAGES": "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg", 
            "ITEM_CODE": "WS0005", 
            "ITEM_NAME": "PANEER", 
            "ITEM_CATEGORY": "WHITE", 
            "CURRENT_STOCK": "90 kgs", 
            "ITEM_PRICE_rs": "3916.83", 
            "SELLING_PRICE_prUn": "32.00/kg", 
            "MINIMUM_STOCK": "200 kgs", 
            "EXPIRY": "15/03/2023", 
            "STATUS": "ACTIVE",
            "tag1": "my_tag_1"
        },
        {
            "IMAGES": "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg", 
            "ITEM_CODE": "WS0005", 
            "ITEM_NAME": "PANEER", 
            "ITEM_CATEGORY": "WHITE", 
            "CURRENT_STOCK": "90 kgs", 
            "ITEM_PRICE_rs": "3916.83", 
            "SELLING_PRICE_prUn": "32.00/kg", 
            "MINIMUM_STOCK": "200 kgs", 
            "EXPIRY": "15/03/2023", 
            "STATUS": "ACTIVE",
            "tag1": "my_tag_1"
        },
        {
            "IMAGES": "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg", 
            "ITEM_CODE": "WS0005", 
            "ITEM_NAME": "PANEER", 
            "ITEM_CATEGORY": "WHITE", 
            "CURRENT_STOCK": "90 kgs", 
            "ITEM_PRICE_rs": "3916.83", 
            "SELLING_PRICE_prUn": "32.00/kg", 
            "MINIMUM_STOCK": "200 kgs", 
            "EXPIRY": "15/03/2023", 
            "STATUS": "ACTIVE",
            "tag1": "my_tag_1"
        },
        {
            "IMAGES": "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg", 
            "ITEM_CODE": "WS0005", 
            "ITEM_NAME": "PANEER", 
            "ITEM_CATEGORY": "WHITE", 
            "CURRENT_STOCK": "90 kgs", 
            "ITEM_PRICE_rs": "3916.83", 
            "SELLING_PRICE_prUn": "32.00/kg", 
            "MINIMUM_STOCK": "200 kgs", 
            "EXPIRY": "15/03/2023", 
            "STATUS": "ACTIVE",
            "tag1": "my_tag_1"
        },
        {
            "IMAGES": "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg", 
            "ITEM_CODE": "WS0005", 
            "ITEM_NAME": "PANEER", 
            "ITEM_CATEGORY": "WHITE", 
            "CURRENT_STOCK": "90 kgs", 
            "ITEM_PRICE_rs": "3916.83", 
            "SELLING_PRICE_prUn": "32.00/kg", 
            "MINIMUM_STOCK": "200 kgs", 
            "EXPIRY": "15/03/2023", 
            "STATUS": "ACTIVE",
            "tag1": "my_tag_1"
        },
        {
            "IMAGES": "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg", 
            "ITEM_CODE": "WS0005", 
            "ITEM_NAME": "PANEER", 
            "ITEM_CATEGORY": "WHITE", 
            "CURRENT_STOCK": "90 kgs", 
            "ITEM_PRICE_rs": "3916.83", 
            "SELLING_PRICE_prUn": "32.00/kg", 
            "MINIMUM_STOCK": "200 kgs", 
            "EXPIRY": "15/03/2023", 
            "STATUS": "ACTIVE",
            "tag1": "my_tag_1"
        },
        {
            "IMAGES": "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg", 
            "ITEM_CODE": "WS0005", 
            "ITEM_NAME": "PANEER", 
            "ITEM_CATEGORY": "WHITE", 
            "CURRENT_STOCK": "90 kgs", 
            "ITEM_PRICE_rs": "3916.83", 
            "SELLING_PRICE_prUn": "32.00/kg", 
            "MINIMUM_STOCK": "200 kgs", 
            "EXPIRY": "15/03/2023", 
            "STATUS": "ACTIVE",
            "tag1": "my_tag_1"
        },
        
     ]);
     core_kms.memDB.addData("coupons_DB_5", "coupons_COL_6", [
        {
            "TRANSACTION_DATE": "05/03/2023", 
            "REFERENCE": "RQ56622183", 
            "TYPE": "REQUISATION", 
            "REQUESTING_COST_CENTRE": "CENTRAL KITCHEN", 
            "REQUESTED_FROM": "CSR", 
            "TRANSACTION_TYPE": "IDT", 
            "QUANTITY": "50 kgs", 
            "PRICE_UNIT": "102/ kg", 
            "TOTAL_PRICE": "5100.00", 
            "STOCK_BALANCE": "78 kgs", 
            "SETTLEMENT": "RAISED", 
            "INSTRUMENT": "REQUISATION ORDER", 
            "INSTRUMENT_NO": "255612",
            "tag1": "my_tag_1"
        },
        {
            "TRANSACTION_DATE": "05/03/2023", 
            "REFERENCE": "RQ56622183", 
            "TYPE": "REQUISATION", 
            "REQUESTING_COST_CENTRE": "CENTRAL KITCHEN", 
            "REQUESTED_FROM": "CSR", 
            "TRANSACTION_TYPE": "IDT", 
            "QUANTITY": "50 kgs", 
            "PRICE_UNIT": "102/ kg", 
            "TOTAL_PRICE": "5100.00", 
            "STOCK_BALANCE": "78 kgs", 
            "SETTLEMENT": "RAISED", 
            "INSTRUMENT": "REQUISATION ORDER", 
            "INSTRUMENT_NO": "255612",
            "tag1": "my_tag_1"
        },
        {
            "TRANSACTION_DATE": "05/03/2023", 
            "REFERENCE": "RQ56622183", 
            "TYPE": "REQUISATION", 
            "REQUESTING_COST_CENTRE": "CENTRAL KITCHEN", 
            "REQUESTED_FROM": "CSR", 
            "TRANSACTION_TYPE": "IDT", 
            "QUANTITY": "50 kgs", 
            "PRICE_UNIT": "102/ kg", 
            "TOTAL_PRICE": "5100.00", 
            "STOCK_BALANCE": "78 kgs", 
            "SETTLEMENT": "RAISED", 
            "INSTRUMENT": "REQUISATION ORDER", 
            "INSTRUMENT_NO": "255612",
            "tag1": "my_tag_1"
        },
        {
            "TRANSACTION_DATE": "05/03/2023", 
            "REFERENCE": "RQ56622183", 
            "TYPE": "REQUISATION", 
            "REQUESTING_COST_CENTRE": "CENTRAL KITCHEN", 
            "REQUESTED_FROM": "CSR", 
            "TRANSACTION_TYPE": "IDT", 
            "QUANTITY": "50 kgs", 
            "PRICE_UNIT": "102/ kg", 
            "TOTAL_PRICE": "5100.00", 
            "STOCK_BALANCE": "78 kgs", 
            "SETTLEMENT": "RAISED", 
            "INSTRUMENT": "REQUISATION ORDER", 
            "INSTRUMENT_NO": "255612",
            "tag1": "my_tag_1"
        },
        {
            "TRANSACTION_DATE": "05/03/2023", 
            "REFERENCE": "RQ56622183", 
            "TYPE": "REQUISATION", 
            "REQUESTING_COST_CENTRE": "CENTRAL KITCHEN", 
            "REQUESTED_FROM": "CSR", 
            "TRANSACTION_TYPE": "IDT", 
            "QUANTITY": "50 kgs", 
            "PRICE_UNIT": "102/ kg", 
            "TOTAL_PRICE": "5100.00", 
            "STOCK_BALANCE": "78 kgs", 
            "SETTLEMENT": "RAISED", 
            "INSTRUMENT": "REQUISATION ORDER", 
            "INSTRUMENT_NO": "255612",
            "tag1": "my_tag_1"
        },
        {
            "TRANSACTION_DATE": "05/03/2023", 
            "REFERENCE": "RQ56622183", 
            "TYPE": "REQUISATION", 
            "REQUESTING_COST_CENTRE": "CENTRAL KITCHEN", 
            "REQUESTED_FROM": "CSR", 
            "TRANSACTION_TYPE": "IDT", 
            "QUANTITY": "50 kgs", 
            "PRICE_UNIT": "102/ kg", 
            "TOTAL_PRICE": "5100.00", 
            "STOCK_BALANCE": "78 kgs", 
            "SETTLEMENT": "RAISED", 
            "INSTRUMENT": "REQUISATION ORDER", 
            "INSTRUMENT_NO": "255612",
            "tag1": "my_tag_1"
        },
        
     ]);

     core_kms.memDB.addData("coupons_DB_6", "coupons_COL_7", [

        {
            "RecipeName": "Non Spicy Dwadashi Millet Khichadi",
            "Instructions": `My Instruction 1`,
            "btns": {
                "Yield": {
                    "quantity": "32kgs"
                },
                "Batches": {
                    "quantity": "2"
                },
                "Consumption": {
                },
                "Rate": {
                    "quantity": "Rs. 21.00/Plate"
                },
                "Cost": {
                    "quantity": "Rs. 1700.00"

                },
            },
            "Ingredients": [
                "Little Millet",
                "Mung Dal",
                "Boiling Water",
                "Carrot",
            ],
            "Quantity": [
                "6.80 Kgs",
                "6.00 Kgs",
                "4.00 Kgs",
                "7.00 Kgs",
            ],
            "Cutting": [
                "-",
                "Subji Cut",
                "-",
                "-",
            ],
            "Processing": [
                "-",
                "-",
                "-",
                "-",
            ],
            "Rate": [
                "12.00",
                "8.00",
                "5.00",
                "9.00",
            ],
            "Price": [
                "121.00",
                "101.00",
                "106.00",
                "109.00",
            ],


            "tag1": "my_tag_1"
            
        },


        {
            "RecipeName": "Sweet Ragi, Regular",
            "Instructions": `My Instruction 2`,
            "btns": {
                "Yield": {
                    "quantity": "32kgs"
                },
                "Batches": {
                    "quantity": "2"
                },
                "Consumption": {
                },
                "Rate": {
                    "quantity": "Rs. 21.00/Plate"
                },
                "Cost": {
                    "quantity": "Rs. 1700.00"

                },
            },
            "Ingredients": [
                "Ragi Powder",
                "Ghee ",
                "Water",
                "Salt",
            ],
            "Quantity": [
                "6.80 Kgs",
                "6.00 Kgs",
                "4.00 Kgs",
                "7.00 Kgs",
            ],
            "Cutting": [
                "-",
                "Subji Cut",
                "-",
                "-",
            ],
            "Processing": [
                "-",
                "-",
                "-",
                "-",
            ],
            "Rate": [
                "12.00",
                "8.00",
                "5.00",
                "9.00",
            ],
            "Price": [
                "121.00",
                "101.00",
                "106.00",
                "109.00",
            ],


            "tag1": "my_tag_1"
            
        },
        
        

     ]);
     

     
 
   },
 
   //Memory Database..
   "memDB": {
      //add data..
      "addData": (db_name="", col_name="", doc=undefined) => {
        //create DB..
        core_1mn["memDB"]["MN"]["qry"]["db"].create(db_name, {
            "onLoad": (data) => {
                 //create Col..
                 core_1mn["memDB"]["MN"]["qry"]["col"].create(db_name, col_name, {
                    "onLoad": (data) => {
                        console.log(data);
                        if (doc!=undefined) {
                            //create Doc..
                            core_1mn["memDB"]["MN"]["qry"]["doc"].create(db_name, col_name, doc,
                                {
                                 "onLoad": (data) => {
                                     console.log(data);
                                 },
                                 "onErr": (err) => {
                                     console.log(err);
                                 }
                             });
                        }
                    },
                    "onErr": (err) => {
                        console.log(err);
                    }
                });
            },
            "onErr": (err) => {
                console.log(err);
            }
        });
       
      }
       
   },

   //coupon..
   "coupon": {
    "set": (mE, mData) => {
        let mCPN_Hldr = document.createElement("div");
        mE.appendChild(mCPN_Hldr);
        //mCoupon..
        var mCoupon = document.createElement("div");
        mCoupon.style.width = "15vw";
        mCoupon.style.height = "62vh";
        mCoupon.style.padding = "0.5vh 1vw";
        mCoupon.style.borderRadius = "1vh";
        mCoupon.style.border = "0.3vh solid rgba(201,192,192, 1)";
        mCoupon.style.backgroundColor = "rgba(0,32,96, 0.08)";
        mCPN_Hldr.appendChild(mCoupon);
        //mErrCard.. 
        let mErrCard = {
            "show": (g0="", g1="", g2="") => {
                //set..
                let mE = mCoupon;
                mE.style.backgroundColor = "pink";
                mE.innerHTML = ""; //reset..
                 //Space.....
                 core_1mn['space'].set({
                    "h": "10vh",
                    "e1": mE,
                 });
                function mSet_i1(mE) {
                    const mI = document.createElement("div");
                    mI.style.margin = "0 auto";
                    mI.style.textAlign = "center";
                    mE.appendChild(mI);
                     
                    //set svg1..
                    function mSet_Svg1(mSvg, mC) {
                        core_1mn['mSvg'].set({
                          "0": mSvg,
                          "2": "7vh",
                          "3": "7vh",
                          "4": mC,
                          "5": mI,
                        });
                    }
                    mSet_Svg1(g0,g2);

                    //txt 1
                    function mSet_txt1(txt) {
                        var mTxt = document.createElement("div");
                        mTxt.style.fontSize = "2.2vh";
                        mTxt.style.color = "rgba(0,0,0, 1)"; 
                        mTxt.innerHTML = txt;
                        mI.appendChild(mTxt);
                    }
                    mSet_txt1(g1);
                    
                }
                mSet_i1(mE);
            }
        };


        //set vars.. 
        //rndr..
        var mRndr = {
        "utils": {
            "txt1": (txt) => {
                var mTxt = document.createElement("div");
                mTxt.style.fontSize = "1.7vh";
                mTxt.style.width = "6vw";
                mTxt.style.color = "rgba(34,34,34, 0.8)"; 
                mTxt.innerHTML = txt;
                return mTxt;
            },
            "txt2": (txt) => {
                var mTxt = document.createElement("div");
                mTxt.style.fontSize = "1.7vh";
                mTxt.style.width = "8vw";
                mTxt.style.color = "rgba(34,34,34, 1)"; 
                mTxt.innerHTML = txt;
                return mTxt;
            }, 
            "txt3": (txt, i1) => {
                var mTxt = document.createElement("div");
                mTxt.style.display = "flex";
                mTxt.style.height = "3.5vh";
                mTxt.style.color = "rgba(34,34,34, 1)"; 
                mTxt.appendChild(mRndr["utils"]["txt1"](mRndr["l"][i1]["0"]));
                mTxt.appendChild(mRndr["utils"]["txt2"](txt));

                return mTxt;
            },
            "img1": (img) => {
                var mC = document.createElement("div");
                mC.style.borderRadius = "1vh"; 
                mC.style.padding = "1vh";
                mC.style.width = "17vh";
                mC.style.height = "17vh";
                mC.style.display = "flex";
                mC.style.justifyContent = "center";
                mC.style.alignItems = "center";
                mC.style.backgroundColor = "rgba(255,255,255, 1)";
                mC.style.border = "0.5vh solid rgba(0,0,0, 1.0)"; //outline
                //mImg..
                var mImg = document.createElement("img");
                mImg.style.width = "16.5vh";
                mImg.style.height = "16.5vh";
                mImg.src = img;
                mC.appendChild(mImg);
                return mC;
            }

        },
        "l": [
            {
                "0": "Order No.",
                "key": ["OrderNo", "order_id"], //any of
                "col": (data, mE, i1) => {
                    mE.appendChild(mRndr["utils"]["txt3"](data, i1));
                } 
            },
            {
                "0": "Date",
                "key": ["Date", "start_date"], 
                "col": (data, mE, i1) => {
                    mE.appendChild(mRndr["utils"]["txt3"](data, i1));
                } 
            },
            {
                "0": "Time Slot",
                "key": ["TimeSlot", "time_slot"],
                "col": (data, mE, i1) => {
                    mE.appendChild(mRndr["utils"]["txt3"](data, i1));
                } 
            },
            {
                "0": "Meal Type",
                "key": ["MealType", "meal_type"],
                "col": (data, mE, i1) => {
                    mE.appendChild(mRndr["utils"]["txt3"](data, i1));
                } 
            }, 
            {
             "0": "No. of Persons",
             "key": ["NoOfPersons", "avail_coupons"],
             "col": (data, mE, i1) => {
                 mE.appendChild(mRndr["utils"]["txt3"](data, i1));
             } 
            },
            {
                "0": "Your QR Code",
                "key": ["YourQrCode", "coupon_qrcode"],
                "col": (data, mE, i1) => {
                    //Space.....
                    core_1mn['space'].set({
                        "h": "2.8vh",
                        "e1": mE,
                    });
                    function mGetNewE(mE) {
                        var mNewE = document.createElement("div");
                        mNewE.style.display = "flex";
                        mNewE.style.justifyContent = "center";
                        mE.appendChild(mNewE);
                        return mNewE;
                    }
                    //set..
                    mSet_txt1(mGetNewE(mE), mRndr["l"][i1]["0"]);
                    //Space.....
                    core_1mn['space'].set({
                        "h": "1.6vh",
                        "e1": mE,
                    });

                    //qrcode..
                    let mCov_qrCode = document.createElement("div");
                    mGetNewE(mE).appendChild(mCov_qrCode);
                    const mGet_QrCodeImg = (data, cb={"onLoad":()=>{}}) => { 
                         //set......
                         const mStart_qrCodeGen = (data) => {
                            core_1mn['mLoadReqLibs'].set(
                                {
                                    "mJS": [
                                      //qrcode-gen....
                                      "libs/qrcode-gen/qrcode.min.js", 
                                    ],
                                    "mAllLibsCallback": {
                                      "onLoad": () => {
                                          console.log("-----qrcode-gen---------");
                                          mRun();
                                     },
                                     "onError": () => { }
                                    }
                                }
                            );
                            function mRun() {
                                let mElem = document.createElement("div");
                                mElem.id = "qrcode-gen-id";
                                mElem.style.display = "none";
                                document.body.appendChild(mElem);
                                //qrcode..
                                let qrcode = new QRCode(mElem, {
                                    text: data,
                                    width: 1000, //128
                                    height: 1000, //128
                                    colorDark : "#000000",
                                    colorLight : "#ffffff",
                                    correctLevel : QRCode.CorrectLevel.H,

                                    //custom..
                                    mn_cb: {
                                        "onLoad": (base64) => {
                                            //console.log(base64);
                                            cb.onLoad(base64);
                                        }
                                    }
                                },
                                );
                            }
                         };

                        //check..
                        if (data.indexOf("data:image/")==0) {
                            //base64 [img found]..
                            cb.onLoad(data);
                            return;
                        }
                        if (data.indexOf("data:image/")==-1) {
                            //base64 [data found].. 
                            let mDecode = core_1mn.mUtils.base64.decode.set({
                                "txt": data
                            });
                            mStart_qrCodeGen(mDecode);
                            return;
                        }

                    };
                    mGet_QrCodeImg(data, 
                        {
                            "onLoad": (data) => {
                               //set qrcode (img)
                               mCov_qrCode.appendChild( mRndr["utils"]["img1"](data) );
                        }
                    });




                } 
            },
             
             
        ]
        };

        //btns..
       function mSet_btns_1(mE) {
        var mBtnList = document.createElement("div");
        mBtnList.style.display = "flex";
        mBtnList.style.justifyContent = "end";
        mBtnList.style.alignItems = "center";
        mE.appendChild(mBtnList);

        //save..
        let mSaveCoupon = (mE) => { 
            core_1mn['mLoadReqLibs'].set(
                {
                    "mJS": [
                      //html2canvas....
                      "libs/html2canvas/html2canvas.min.js", 
                    ],
                    "mAllLibsCallback": {
                      "onLoad": () => {
                          console.log("-----html2canvas---------");
                          mRun();
                     },
                     "onError": () => { }
                    }
                }
            );
            function mRun() {
                //https://html2canvas.hertzen.com/
                //https://javascript.info/blob
                html2canvas(mE).then(canvas => {
                    //document.body.appendChild(canvas)
                    let link = document.createElement('a');
                    link.download = 'coupon.png';
                    //set..
                    let dataUrl = canvas.toDataURL();
                    let blob = canvas.toBlob(function(blob) {
                      let url = URL.createObjectURL(blob);
                      //console.log(blob);
                      console.log(url);
                      link.href = url;
                      link.click();
                      URL.revokeObjectURL(link.href);
                    });
                });
            }

        };


        function mSet_btn1() {
            //Btn.....  
            var mBtnHolder = document.createElement("div"); 
            mBtnList.appendChild(mBtnHolder);
            var mBtn = core_1mn['btn']['1'].set({ 
                     "e1": mBtnHolder,
                     "w": "3vw",
                     "posH": 1,
                     "h": "3.2vh",
                     "txt": {
                       "0": "",
                       "1": "1.5vh"
                      },
                      "ico": {"0": "download_0.svg", "1": "2.1vh", "2": "2.1vh", 
                      //"3": "rgba(255,255,255, 1.0)"
                      },
                     "cb": {
                         "onClick": function(data){
                            mSaveCoupon(mCoupon);
                      },
                     },
                     "typ": 1,
                     "vari": 2
            });

        }
        mSet_btn1(); 

       }
       mSet_btns_1(mCoupon);

       //txt..
       function mSet_txt1(mE, txt) {
        var mTxt = document.createElement("div");
        mTxt.style.fontSize = "1.7vh";
        mTxt.style.color = "rgba(164,3,3, 1)"; 
        mTxt.innerHTML = txt;   
        mE.appendChild(mTxt);
       }
       mSet_txt1(mCoupon, "Order Summary");

        //Space.....
        core_1mn['space'].set({
            "h": "1.6vh",
            "e1": mCoupon,
        });


       //set data..(Coupon)
       function mSet_data(mCoupon, mData) {
         const mNs1 = (mKey_ARR, mCurr_I1, i1) => {
            for (let i2 = 0; i2 < mKey_ARR.length; i2++) {
                const mKey = mKey_ARR[i2];
                //find and set..  
                if (mData.hasOwnProperty(mKey)==true) {
                    mCurr_I1.col(mData[mKey], mCoupon, i1);
                    return;
                }
            }
         };
         for (let i1 = 0; i1 < mRndr["l"].length; i1++) {
            const mCurr_I1 = mRndr["l"][i1];
            const mKey_ARR = mCurr_I1["key"];
            mNs1(mKey_ARR, mCurr_I1, i1);
         }
       }

       
       //set..
       //get row data and set..
       function mGetRowDataAndSet(mCoupon, mData, cb={"onDone":()=>{}}) {
        //start render here..
        const mStartRndr = (data) => { 
          //console.log(data);
                 //gen..
                 for (let i1 = 0; i1 < data.length; i1++) {
                  const mCurr_I1 = data[i1];
                  mSet_data(mCoupon, mCurr_I1);
                  //all ok..
                  cb.onDone();
                  return;
                 } 
        };

       //------load from (server)-----//
       const mLoadFromSrvr = (mFinalPayload) => {
        //----Start (anim)----//
        //add here..
        //Form..
        var mFormDta = new FormData();
        mFormDta.append("epType_mn", "typ_1_usr");
        mFormDta.append("epName_mn", "13");
        mFormDta.append("payloadJSON_mn", JSON.stringify(mFinalPayload));
        core_1mn['mApiReq']['HTTP'].set(
         {
          "headers": {
             'Content-Type': `multipart/form-data`,
             //"Authorization": `Bearer MY_TOKEN`
          }, 
          "data": mFormDta,
          "url": core_1mn["gVars"]["mUrls"].set("url2"),
          "method": "post",
          "cb": {
              "onLoad": (mRes) => {
                 const dta_mn = mRes["dta"]["dta_mn"];
                 //set..
                 const dta = dta_mn["dta"];
                 const res_mn = dta_mn["res_mn"];
                 //----Success----//
                 mStartRndr(dta["l"]);
              },
              "onErr": (mRes) => {
                 const err_mn = mRes["dta"]["err_mn"];
                 //set..
                 const err = err_mn["err"];
                 const res_mn = err_mn["res_mn"];
                 //----Error----//
                 //--show (err card)
                 mErrCard.show("exclamation_0.svg", res_mn["msg"], "red");
                 console.log(err_mn);
              }
          }
         }
       );
       };

       //check..
       if (mData["KOM_Coupons_id"]!=undefined) {
           //(Id--[Method]--)
           mLoadFromSrvr({
            "KOM_Coupons_id": mData["KOM_Coupons_id"]
           });
       }else {
         //(Payload--[Method]--)
         //-----load from (payload)-----//
         mSet_data(mCoupon, mData);
       }


       }
       mGetRowDataAndSet(mCoupon, mData,
        {
            "onDone": () => {
                  //Space.....
                  core_1mn['space'].set({
                    "h": "4.0vh",
                    "e1": mCoupon,
                  }); 
            
                //btns..
                function mSet_btns_2(mE) {
                    var mBtnList = document.createElement("div");
                    mBtnList.style.display = "flex";
                    mBtnList.style.justifyContent = "center";
                    mBtnList.style.alignItems = "center";
                    mE.appendChild(mBtnList);
            
                    function mSet_btn1(mE) {
                        //Btn.....  
                        var mBtnHolder = document.createElement("div");
                        mE.appendChild(mBtnHolder);
                        var mConf = { 
                            "e1": mBtnHolder,
                            "w": "8vw",
                            "posH": 1,
                            "h": "3.7vh",
                            "txt": {
                              "0": "Share the Code",
                              "1": "1.6vh"
                            },
                            "ico": {"0": "share_0.svg", "1": "1.5vh", "2": "1.5vh" },
                            "cb": {
                                "onClick": function(data){
                                    
                                },
                            },
                            //typ..
                            "typ": 1,
                            "vari": 2
            
                        };
                        var mBtn = core_1mn['btn']['1'].set(mConf);
                       
                       }
                    mSet_btn1(mBtnList);
            
            
                }
                mSet_btns_2(mCoupon);
            }
        }
       );



     




        /*
        --USAGE--
       core_kms.coupon.set(mItem, 
        //(Payload--[Method]--)
        {
            "OrderNo": "ORD_0005464",
            "Date": "22/02/2023",
            "TimeSlot": "14:00-15:00",
            "MealType": "Breakfast",
            "NoOfPersons": "2",
            "YourQrCode": `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiMAAAIjAQMAAADr5InyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURQAAAP///6XZn90AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAM1SURBVHja7ZxBcoMwDEXFZJFlb4CP0qO1R8tR6A2yzCKDOhgLy8Tp0GIaYf5fJYW8yG9Rx8hAmXxwT3TmIZ/xr8x3ojfmCy3LrynOUC31UWAXdmEXteQpJ9bpAkUB35ITLgNQ5UbUFqGUqYUM1QK7DLuHtkug7MXuNXzoHCgTUEXNJP6lT2OO4qobkSUK7Nq32xLswm45in95XWt3GaUtQqHqKLALu7ALu/9sd1pN+POEMmb5iHZMcUUojaFaLHmBXdiF3WK1qAhF+gEj5X14o+YAlR+vKP0/pcyI2uq8wC7swi4oecpDhNLFfsAlWQfMAwoooNRFIUOUpggFdp/Z5Vwmis/YE1YvH2KI0hmifMHuhhTYtU+B3T3Ylfj1wrjuerYv6E46LnxdkloozhCFDFHaIhRXHYWKUGA3T6EiFNjNU4acYt/gNj+oesI+sppQV6HmPeE/U5whClVHgRfYhV1QcnbnzQK/hGjkFHWPmKLEE8fUR2nhBXZhF5RD2JVZQTWMfTtZJhWOR8fVxPtwAekUeg4860+vobSGaqmPAruw+xsKGaqlMTQiqtCuOjhVF+ICkJMlRKazTNVRXBEK7B7FrgMFdl9il+Wg/ONP5oB+3hNWQGkeMyhZSgcvWcpXdXY72IXd3dpVkZkk2RvKsR8wNQH8O1klhNXEekpThEKGRoRaYBd2Yde6XdbnyY1hU5J9QWMusR/wkc5HJiidoVp62IVd2IVd07WEnf2ySDinB5OPZiKbSJ0hClU3Itg9CoUwog1raQ3VYssu59LH8zjuHL3HSUXdKhB/M6yksCFKZ6gW2LVvtwMFlN1SMlFP/FTbRJNNpPfnV7dAqZji4GVDL7ALu6+xq+734riaEGA/7ywLUH0dF6F01VEYdjekwC7swm6xEamugrSTb+m3cXwmUMzsLoOVFDJUS30jslQL7G5ZC+xuWcu+RtQnP/4pPgBajp6XzAFLKGyI0qEW2IVd2D2u3aknPH/KA4U7fNO4IhRCLbB7aLuggPIyikpKkVxmlFOccvinq1uggPJIYVBAAcUQ5SHSD5Bbhq9xCZEuLPQVJVC2olB1FNiFXYJdGyMi+gZSih8WGJijPAAAAABJRU5ErkJggg==`
        }
        //-----OR------//
        //(Id--[Method]--)
        {
            "KOM_Coupons_id": "UUID",  //[KOM_Coupons_id]
        }
        
        );
        */

        
        
    }
   },

   //export data as (--FILE--) eg. => excel
   "fileExport": {
      "set": (mParams={"json": {
        "head": {
            "l": []
        },
        "rows": {
            "l": []
        },
        "merge": {
            "l": []  //merge-cell (array)
        },
        "style": {
            "l": []  //cell-style (array)
        }
      }, "out": { //output
        "filename": ""
      }  }) => {
        //set..
        if (mParams.json.hasOwnProperty("merge")==false) {
            mParams.json["merge"] = {}; //create..
            if (mParams.json.merge.hasOwnProperty("l")==false) {
                mParams.json.merge["l"] = []; //create..
            }
        }
        if (mParams.json.hasOwnProperty("style")==false) {
            mParams.json["style"] = {}; //create..
            if (mParams.json.style.hasOwnProperty("l")==false) {
                mParams.json.style["l"] = []; //create..
            }
        }
        //set vars..
        let mJson = mParams.json;
        let mOutput = mParams.out;
        //start..
        let mStartXlsx = () => { 
            core_1mn['mLoadReqLibs'].set(
                {
                    "mJS": [
                      //xlsx....
                      //libs/xlsx/xlsx.full.min.js (Orignal)
                      //libs/xlsx-js-style/xlsx.bundle.js (Forked)
                      "libs/xlsx-js-style/xlsx.bundle.js",   
                    ],
                    "mAllLibsCallback": {
                      "onLoad": () => {
                          console.log("-----xlsx---------");
                          mRun();
                     },
                     "onError": () => { }
                    }
                }
            );
            function mRun() {
                //https://www.npmjs.com/package/xlsx
                //sample..
                let mSample1 = () => {
                     /* fetch JSON data and parse */
                     const url = "https://theunitedstates.io/congress-legislators/executive.json";
                     const raw_data  = [
                        {
                          "id": {
                            "bioguide": "W000178",
                            "govtrack": 411351,
                            "icpsr_prez": 99869
                          },
                          "name": {
                            "first": "George",
                            "last": "Washington"
                          },
                          "bio": {
                            "birthday": "1732-02-22",
                            "gender": "M"
                          },
                          "terms": [
                            {
                              "type": "prez",
                              "start": "1789-04-30",
                              "end": "1793-03-04",
                              "party": "no party",
                              "how": "election"
                            },
                            {
                              "type": "prez",
                              "start": "1793-03-04",
                              "end": "1797-03-04",
                              "party": "no party",
                              "how": "election"
                            }
                          ]
                        },
                        {
                          "id": {
                            "bioguide": "A000039",
                            "govtrack": 400699,
                            "icpsr_prez": 99870
                          },
                          "name": {
                            "first": "John",
                            "last": "Adams"
                          },
                          "bio": {
                            "birthday": "1735-10-19",
                            "gender": "M"
                          },
                          "terms": [
                            {
                              "type": "viceprez",
                              "start": "1789-04-21",
                              "end": "1793-03-04",
                              "party": "Federalist",
                              "how": "election"
                            },
                            {
                              "type": "viceprez",
                              "start": "1793-03-04",
                              "end": "1797-03-04",
                              "party": "Federalist",
                              "how": "election"
                            },
                            {
                              "type": "prez",
                              "start": "1797-03-04",
                              "end": "1801-03-04",
                              "party": "Federalist",
                              "how": "election"
                            }
                          ]
                        },
                        {
                          "id": {
                            "bioguide": "J000069",
                            "govtrack": 405974,
                            "icpsr_prez": 99871
                          },
                          "name": {
                            "first": "Thomas",
                            "last": "Jefferson"
                          },
                          "bio": {
                            "birthday": "1743-04-13",
                            "gender": "M"
                          },
                          "terms": [
                            {
                              "type": "viceprez",
                              "start": "1797-03-04",
                              "end": "1801-03-04",
                              "party": "Democratic-Republican",
                              "how": "election"
                            },
                            {
                              "type": "prez",
                              "start": "1801-03-04",
                              "end": "1805-03-04",
                              "party": "Democratic-Republican",
                              "how": "election"
                            },
                            {
                              "type": "prez",
                              "start": "1805-03-04",
                              "end": "1809-03-04",
                              "party": "Democratic-Republican",
                              "how": "election"
                            }
                          ]
                        },
                        {
                          "id": {
                            "bioguide": "B001133",
                            "govtrack": 402077,
                            "icpsr": 1302
                          },
                          "name": {
                            "first": "Aaron",
                            "last": "Burr",
                            "suffix": "Jr."
                          },
                          "bio": {
                            "birthday": "1756-02-06",
                            "gender": "M"
                          },
                          "terms": [
                            {
                              "type": "viceprez",
                              "start": "1801-03-04",
                              "end": "1805-03-04",
                              "party": "Democratic-Republican",
                              "how": "election"
                            }
                          ]
                     }, ];
                   
                     /* filter for the Presidents */
                     const prez = raw_data.filter(row => row.terms.some(term => term.type === "prez"));
                   
                     /* flatten objects */
                     const rows = prez.map(row => ({
                       name: row.name.first + " " + row.name.last,
                       birthday: row.bio.birthday
                     }));
                   
                     /* generate worksheet and workbook */
                     const worksheet = XLSX.utils.json_to_sheet(rows);
                     const workbook = XLSX.utils.book_new();
                     XLSX.utils.book_append_sheet(workbook, worksheet, "Dates");
                   
                     /* fix headers */
                     XLSX.utils.sheet_add_aoa(worksheet, [["Name", "Birthday"]], { origin: "A1" });
                   
                     /* calculate column width */
                     const max_width = rows.reduce((w, r) => Math.max(w, r.name.length), 10);
                     worksheet["!cols"] = [ { wch: max_width } ];
                   
                     /* create an XLSX file and try to save to Presidents.xlsx */
                     XLSX.writeFile(workbook, "Presidents.xlsx");
                     

                };
                //mSample1(); 
                let mSample2 = () => {
                    //set vars..
                    let mWsName = `sheet_1`; //Worksheet Name
                    let mOutFileName = `sample.xlsx`; //Worksheet Name
                    const raw_data  = [
                        {
                            "name": "John doe",
                            "age": "27",
                        },
                        {
                            "name": "Alex doe",
                            "age": "28",
                        },

                    ];
                  

                    //-----------------Set-------------//
                    /* flatten objects */
                    const rows = raw_data;
                  
                    /* generate worksheet and workbook */
                    const worksheet = XLSX.utils.json_to_sheet(rows);
                    const workbook = XLSX.utils.book_new();
                    XLSX.utils.book_append_sheet(workbook, worksheet, mWsName);
                  
                    /* fix headers */
                    XLSX.utils.sheet_add_aoa(worksheet, [["Name", "Birthday"]], { origin: "A1" });
                  
                    /* calculate column width */
                    const max_width = rows.reduce((w, r) => Math.max(w, r.name.length), 10);
                    worksheet["!cols"] = [ { wch: max_width } ];
                  
                    /* create an XLSX file and try to save to YOUR_FILE_NAME */
                    XLSX.writeFile(workbook, `${mOutFileName}`);
                    

                };
                //mSample2();

                //real..
                let mReal = () => {
                    //set vars..
                    let mWsName = `sheet_1`; //Worksheet Name
                    let mOutFileName = `${mOutput.filename}`; //Worksheet Name
                    const rows = mJson.rows.l; //--Note--: Data must be Structured..

                    //-----------------Set-------------//
                    /* generate worksheet and workbook */
                    const worksheet = XLSX.utils.json_to_sheet(rows, {skipHeader: true, origin: 'A1',}); //{skipHeader: true, origin: 'A2',} //Note: Must be [skipHeader=true] & [origin=A2]..else it will messed-up with Rows.
                    const workbook = XLSX.utils.book_new();
                    //XLSX.utils.book_append_sheet(workbook, worksheet, mWsName);
                  
                    /* fix headers */
                    //XLSX.utils.sheet_add_aoa(worksheet, [["Name", "Birthday"]], { origin: "A1" });
                  
                    /* set cols */ 
                    let mSetCols = () => {
                        //const max_width = rows.reduce((w, r) => Math.max(w, r.name.length), 10);
                        /*
                        --OLD--
                        const max_width = rows.reduce((w, r) => Math.max(w, Object.values(r)[0].length ), 10); //r.name.length
                        worksheet["!cols"] = [ { wch: max_width } ]; */
                        //--NEW--//
                        let mNewArr = [];
                        let mFn1 = (w, r) => {
                            /*console.log(w);
                            console.log(r);*/
                            //set vars..
                            let a = r;
                            //console.log(Object.keys(a));
                            //gen..
                            for (let i = 0; i < Object.keys(a).length; i++) {
                                const e_key = Object.keys(a)[i];
                                let e_val = a[e_key];
                                let mCHAR_LEN = 10;
                                try {
                                    mCHAR_LEN = e_val.length;
                                } catch (e) {}
                                //set..
                                let max_width = Math.max(w, mCHAR_LEN );
                                mNewArr.push({
                                    "wch": max_width
                                });
                            }
                            return;
                        }
                        //rows.reduce(mFn1, 10); //r.name.length
                        //--New method--//
                        if (rows.length>0) {
                            let a = rows[0];
                            for (let i0 = 0; i0 < Object.keys(a).length; i0++) {
                                const e_k = Object.keys(a)[i0];
                                const e_v = a[e_k];
                                //set..
                                let mCHAR_LEN = 17; //10
                                /*try {
                                    mCHAR_LEN = e_v.length;
                                } catch (e) {}
                                if (e_v.trim()=="") {
                                    mCHAR_LEN = 25;
                                }*/
                                //set..
                                let max_width = mCHAR_LEN;
                                mNewArr.push({
                                    "wch": max_width,
                                });
                            }
                        }
                        //all ok..
                
                         
                        //all ok..
                        //set..
                        /*console.log(`========mNewArr=========`);
                        console.log(mNewArr);*/
                        worksheet["!cols"] = mNewArr; 

                    };
                    mSetCols();

                    //--Merge (Cell)--//
                    //https://docs.sheetjs.com/docs/csf/general
                    let mMergeCell = (mL) => {
                    let merge = [
                        /*{ 
                            s: { 
                                r: 1,
                                c: 0 
                            }, 
                            e: { 
                                r: 2, 
                                c: 0 
                            } 
                        },  
                        { 
                            s: { 
                                r: 3, 
                                c: 0 
                            }, 
                            e: { 
                                r: 4, 
                                c: 0
                            } 
                            
                        }*/
                    ];
                    /*
                    https://stackoverflow.com/questions/53516403/sheetjs-xlsx-how-to-write-merged-cells
                    Use this code for merge A2:A3 ({ s: { r: 1, c: 0 }, e: { r: 2, c: 0 } }) and A4:A5 ({ s: { r: 3, c: 0 }, e: { r: 4, c: 0 } })
                    Here s = start, r = row, c=col, e= end
                    */
                    //set..
                    merge = mL;
                    worksheet["!merges"] = merge;
                    };
                    mMergeCell(mJson.merge.l);


                    //--Cell Styling--//
                    //https://github.com/protobi/js-xlsx#cell-styles
                    //https://stackoverflow.com/questions/50147526/sheetjs-xlsx-cell-styling
                    //https://github.com/gitbrent/xlsx-js-style
                    let mCellStyle = (mL) => {
                        let mTest = () => {
                            //--test--//(Start)
                        /*
                        //set vars..
                        let mCOLOR_STYLE = (mP = {
                            rgb: "", //FFCC00
                            //theme: "",
                            //tint: "",
                           }) => {
                          return mP;
                        };
                        
                        worksheet["A1"].s = // set the style for target cell
                           { 
                            font: {
                            name: '',
                            //sz: 24,
                            bold: true,
                            color: { rgb: "FFAA00" }
                           },
    
                           fill: {
                             //"patternType": "none", //"none" or "solid" or "none"
                             "fgColor": mCOLOR_STYLE({
                                "rgb": "FFCC00"
                             }),  
                             "bgColor": mCOLOR_STYLE({
                                "rgb": "FFCC00"
                             })
                           }
                        };*/
                        //--test--//(End)
                        };
                        //utils..
                        //eg. 1=>A and 26=>Z and 27=>AA  (radix26)
                        //https://codereview.stackexchange.com/questions/16124/implement-numbering-scheme-like-a-b-c-aa-ab-aaa-similar-to-converting
                        function convertToNumberingScheme(number) {
                            var baseChar = ("A").charCodeAt(0),
                                letters  = "";
                            do {
                              number -= 1;
                              letters = String.fromCharCode(baseChar + (number % 26)) + letters;
                              number = (number / 26) >> 0; // quick `floor`
                            } while(number > 0);
                          
                            return letters;
                        }
                        /*let mLetter = convertToNumberingScheme(1);
                        console.log(mLetter);*/
                        //style..
                        let mFmtStyle = (a) => {
                            //set..
                            let mNew = JSON.parse(JSON.stringify(a), (k, v) => {
                                if (typeof v === "string") {
                                    if (k === "rgb") {
                                        //format color..
                                        if (v.indexOf("rgb")!==-1) {
                                            v = core_1mn.mCnv.color.RGBtoHex.set({
                                                "rgb": `rgb(28, 135, 201)`
                                            });
                                        }
                                        v = v.replace("#", "");                                        
                                        v = v.replace("", "");                                        
                                        v = v.replace("transparent", "ffffff");
                                    }
                                }
                                return v;
                            });

                            return mNew; //a || mNew
                        };

                        //gen..
                        let a = mL;
                        for (let mRowI = 0; mRowI < a.length; mRowI++) {
                            const e0 = a[mRowI];
                            let b = e0;
                            for (let mColI = 0; mColI < Object.keys(b).length; mColI++) {
                                const e1_k = Object.keys(b)[mColI];
                                const e1_v = b[e1_k];
                                //set..
                                //console.log(` mRowI: ${mRowI+1} mColI: ${mColI+1} `);
                                //Cell..
                                let mCell = `${convertToNumberingScheme(mColI+1)}${mRowI+1}`;
                                //console.log(`mCell: ${mCell}`); //eg => A1, B1
                                //----style----//
                                if (worksheet.hasOwnProperty(mCell)==true) {
                                    worksheet[mCell].s = mFmtStyle(e1_v);
                                }
                            }
                        }
                        //all ok..

                        /*//--modified--//
                        console.log(`======mL========`);
                        //console.log(mL);
                        console.log(worksheet);*/
                    };
                    mCellStyle(mJson.style.l);

                    //--stop--// 
                    //return;

                    //book_append_sheet..
                    XLSX.utils.book_append_sheet(workbook, worksheet, mWsName);
                    
                  
                    /* create an XLSX file and try to save to YOUR_FILE_NAME */
                    XLSX.writeFile(workbook, `${mOutFileName}`);
                    

                };
                mReal();
                
            }

        };
        mStartXlsx();

        /*
        --USAGE--
        */

      }
   },


   //recipe..
   "recipe": {
      "formula": {
          "set": (formula="", cb={"onLoad":()=>{}, "onErr":()=>{}}, opt={"vars":[]}) => {
            /*
            Support:
              1- Number of excel formulas. eg. [DATE, FINANCIAL, ENGINEERING, LOGICAL, MATH, STATISTICAL, TEXT].
            */
            //set vars..
            let mFMULA_STR = formula; //Formula
            /* 
               IF(B3>10,B3*3.5,(4-0.05*B3)*B3)
            */
            let mFMULA_VARS = opt.vars != undefined ? opt.vars: [];  //Formula Variables
            /*
            [
                {
                    "key": "my_key1",
                    "val": [10, 20]
                },
                {
                    "key": "my_key2",
                    "val": [40, 50]
                },
            ]
            */
            
            //modify..
            if (mFMULA_STR.startsWith("=")==true) {
                mFMULA_STR = mFMULA_STR.substring(1);
                //console.log(mFMULA_STR);
            }

            //send cb..
            let mSend_cb = (cb_name, data) => {
                if (cb[cb_name]!=undefined) {
                    cb[cb_name](data);
                }
            };  

            //start with custom..
            let mCustom = () => {
                /*let mRndr = {
                //https://formulajs.info/functions/
                "utils": {
                },
                "l": [
                    {
                        "name": "=IF(B3>10,B3*3.5,(4-0.05*B3)*B3)"
                    }
                ]
            };*/
            };

            //start with (formulajs)..
            let mFormulajs = () => { 
            core_1mn['mLoadReqLibs'].set(
                {
                    "mJS": [
                      //formulajs....
                      "libs/formulajs/formula.min.js",
                    ],
                    "mAllLibsCallback": {
                      "onLoad": () => {
                          console.log("-----formulajs---------");
                          mRun();
                     },
                     "onError": () => { }
                    }
                }
            );
            function mRun() {
               //https://formulajs.info/functions/
               /*
               //--test--//
               let mOut = formulajs.SUM([1, 2, 3])
               console.log(`formulajs-output: ${mOut}`);*/

               //set..
               try {
                //--(working) but....need to validate--// 
                let formulaKeys = Object.keys(formulajs);
                formulaKeys.forEach((key) => {
                    window[key] = formulajs[key];
                });
                //console.log(mFMULA_STR);
                console.log("====WARNING=====(formulaKeys)");

                let mOut = eval(`formulajs.${mFMULA_STR}`);  //eg. => IF(true, 'Hello!', 'Goodbye!') 
                //let mOut = eval(`formulajs.${eval(mFMULA_STR)}`);  //eg. => IF(true, 'Hello!', 'Goodbye!') 
                //vali..
                if (typeof mOut === "string" || typeof mOut === "bigint" ||
                typeof mOut === "boolean" || typeof mOut === "number") {
                    mSend_cb("onLoad", {
                        "v": mOut
                    });
                }else {
                    //err..
                    mSend_cb("onErr", `Err: Invalid formula [output=${mOut}]`);
                }
               } catch (e) { 
                 mSend_cb("onErr", "Err: Incorrect formula!");
               }

            }

            };


            //format (data)..
            let mDta_fmt = {
                "l": [  //Note: each (l.key) [elements] cannot be duplicate with any list item.
                    {
                        "name": "Conversion Factor",
                        "columns": ["B", "C"], //allowed columns  //Note: All (columns) items must be unique..
                        "key": [  //Note: these (key) cannot be duplicate in (list)
                            "quantity",
                            "conversion_factor"
                        ],
                        "set": (k, clmn_val_arr, mCurrItem) => {
                            let mErr = {
                                "isErr": true,
                                "msg": ""
                            };
                            /*
                            Sample =>
                              =IF(C6<10, C6*3.75,IF(C6>=15, 3.5*C6,(3.75-0.05*(C6-10))*C6))
                              =IF(B3>10,B3*3.5,(4-0.05*B3)*B3)
                              Explanation => ( C and B, etc.... ) is a [Conversion Factor]
                            */
                            let mColumnVal = (i) => {
                                if (clmn_val_arr.hasOwnProperty(i)==false) {
                                    //err..
                                    return -1;
                                }
                                //all ok..
                                return clmn_val_arr[i];
                            };
                            let mCheckCol_name = (n) => {
                                if (mCurrItem.columns.indexOf(n)===-1) {
                                    //err..[not-found]
                                    return false;
                                }
                                return true;
                            };
                            //formula..
                            let mFormula = mFMULA_STR; 
                            //let mVars_arr = [];
                            let formula_with_vars_val = mFormula.replace(RegExp("[A-Za-z]+[0-9]+", "g"),  //find Value which is start from(A-Z) and ends with (0-9)
                            function(matched, i){
                                /*console.log(i);
                                mVars_arr.push(matched);*/
                                 
                                //eg C6 => mVal(C) mInt(6)
                                let mInt_idx = matched.indexOf(matched.match(RegExp("[0-9]")));
                                let mInt = matched.substring(mInt_idx);
                                let mVal = matched.substring(0, mInt_idx);
                                //console.log(`mInt: ${mInt}`);
                                //console.log(`mVal: ${mVal}`);
                                //vali..
                                //mVal..
                                if (mCheckCol_name(mVal)!=true) {
                                    //err..
                                    mErr.msg = `err: [column="${mVal}"] is not allowed!`;
                                    throw mErr.msg;
                                    return;
                                }
                                //mRow_idx..
                                let mRow_idx = parseInt(mInt);
                                if (mRow_idx<1) {
                                    //err..
                                    mErr.msg = `err: [mRow_idx] must be equal to or greater than 1.`;
                                    throw mErr.msg;
                                    return;
                                }
                                //console.log(`mRow_idx: ${mRow_idx}`);
                                //set..------------[all ok]--------------------
                                let mCol_val = mColumnVal(mRow_idx);
                                if (mCol_val==-1) {
                                    mErr.msg = `err: row [i=${mRow_idx}] not exists.`;
                                    throw mErr.msg;
                                    return;
                                }
                                //console.log(`mCol_val: ${mCol_val}`);
                                return mCol_val; //matched || mCol_val  //we are replacing Variable with Value..
                            });
                            //store..
                            mFMULA_STR = formula_with_vars_val; 
                            console.log(mFMULA_STR);
                            if (mErr.msg=="") {
                                mErr.isErr=false;
                            }
                            return mErr;

                        }
                    }
                ],
                "set": () => { 
                    //[mFMULA_VARS.length] can not be more than (1)..
                    if (mFMULA_VARS.length>1) {
                        //err..[Stop]
                        throw `err: [mFMULA_VARS.length] can not be more than (1)`;
                        return;
                    }
                    //Sample => //IF(B3>10,B3*3.5,(4-0.05*B3)*B3)
                    try {
                    for (let i1 = 0; i1 < mFMULA_VARS.length; i1++) {
                        const mCurr_I1 = mFMULA_VARS[i1];
                        let mKey = mCurr_I1["key"];
                        let mVal = mCurr_I1["val"];
                        const fnd = mDta_fmt.l.filter(e => e["key"].indexOf(mKey)!==-1);
                        if (fnd==0) {
                            //err [Stop]
                            mSend_cb("onErr", `err: Invalid opt.vars[${i1}]["${mKey}"]`);
                            return;
                        }
                        if (fnd>1) {
                            //err [Stop]
                            mSend_cb("onErr", `critical err: mDta_fmt.l has (key) duplication`);
                            return;
                        }
                        //all ok..
                        let mRes = fnd[0].set(mKey, mVal, fnd[0]);
                        if (mRes.isErr==true) {
                            mSend_cb("onErr", mRes.msg);
                            //err..[Stop]
                            return;
                        }
                    }
                    //all ok..
                    //run with variable..values
                    mFormulajs();
                    } catch (e) {
                        //err..
                        mSend_cb("onErr", e);
                    }
                    

                }
            };
            if (mFMULA_VARS.length==0) {
                //run without variable..
                mFormulajs();
                return;
            }else {
                mDta_fmt.set();
            }



          /*
          --USAGE--
          core_kms.recipe.formula.set(
            `IFS(1==1, 'Hello!', true, 'Goodbye!')`,
            {
            "onLoad": (data) => {
                console.log(data["v"]);
            },
            "onErr": (err) => {
                console.log(err);
            },
           }, {});

           //--With Formula Variables--//
           //formula..
           core_kms.recipe.formula.set(
            m0, //`IFS(1==1, 'Hello!', true, 'Goodbye!')`,
            {
            "onLoad": (data) => {
                console.log(data["v"]);
            },
            "onErr": (err) => {
                //console.log(err);
            },
           }, 
           {
            "vars": [
                {
                    "key": "quantity",
                    "val": [
                        50,
                        60,
                        90,
                        56,
                        89,
                        87,
                        45,
                    ]
                }
            ]
           }
           );
           */



          }
      }

   }

   

};

//init..
core_kms.init();



//make global..
window.core_kms = core_kms;
//export..
export {core_kms};
