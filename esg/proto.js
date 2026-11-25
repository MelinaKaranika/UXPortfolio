/* Clickable prototypes: each .proto[data-proto] gets its screens from PROTOS. Hotspots are [x0,y0,x1,y1,target,label] in image pixels. */
(function(){
  var PROTOS={};
  PROTOS.main={start:'dashboard',screens:{
    dashboard:{img:'esg/img/q-dashboard.jpg',w:1600,h:2042,label:'Dashboard',url:'/dashboard',
      note:'One view of the team and its company, with the latest company scores running along the bottom. Use the side menu to move between pages.',
      hots:[[1382,233,1540,262,'disclosures','Open the disclosure dashboard'],[30,82,280,122,'dashboard','My Dashboard'],[30,183,280,223,'overview','Corporate Analytics'],[30,227,280,267,'directory','Company Directory'],[30,270,280,310,'portfolio','Portfolios'],[30,372,280,412,'disclosures','Disclosure Dashboard'],[60,414,280,448,'disclist','Disclosures'],[30,482,280,522,'frameworks','Frameworks'],[30,528,280,568,'exchange','Reporting Exchange'],[30,629,280,669,'marketplace','Marketplace'],[1298,24,1336,62,'settings','Account settings'],[1440,24,1592,62,'profile','My profile']]},
    disclosures:{img:'esg/img/q-disclosures.jpg',w:1600,h:1845,label:'Disclosure dashboard',url:'/disclosures/dashboard',
      note:'Team and company activity side by side. Open the <b>Disclosures</b> tab for the full list.',
      hots:[[520,222,605,256,'disclist','Disclosures tab'],[30,82,280,122,'dashboard','My Dashboard'],[30,183,280,223,'overview','Corporate Analytics'],[30,227,280,267,'directory','Company Directory'],[30,270,280,310,'portfolio','Portfolios'],[30,372,280,412,'disclosures','Disclosure Dashboard'],[60,414,280,448,'disclist','Disclosures'],[30,482,280,522,'frameworks','Frameworks'],[30,528,280,568,'exchange','Reporting Exchange'],[30,629,280,669,'marketplace','Marketplace'],[1298,24,1336,62,'settings','Account settings'],[1440,24,1592,62,'profile','My profile']]},
    disclist:{img:'esg/img/q-disclosure-list.jpg',w:1600,h:1350,label:'Disclosures',url:'/disclosures/list',
      note:'Every disclosure with its state, framework, period and privacy, filtered and sortable. Company and partner names are blurred.',
      hots:[[330,232,480,264,'disclosures','Disclosure Analytics tab'],[1485,88,1560,116,'disclosures','Back'],[30,82,280,122,'dashboard','My Dashboard'],[30,183,280,223,'overview','Corporate Analytics'],[30,227,280,267,'directory','Company Directory'],[30,270,280,310,'portfolio','Portfolios'],[30,372,280,412,'disclosures','Disclosure Dashboard'],[60,414,280,448,'disclist','Disclosures'],[30,482,280,522,'frameworks','Frameworks'],[30,528,280,568,'exchange','Reporting Exchange'],[30,629,280,669,'marketplace','Marketplace'],[1298,24,1336,62,'settings','Account settings'],[1440,24,1592,62,'profile','My profile']]},
    overview:{img:'esg/img/q-analytics.jpg',w:1600,h:2562,label:'Corporate analytics',url:'/companies/overview',
      note:'Every score for the company on one page. Open the <b>ESG Performance Monitor</b> or <b>Peer Benchmarking</b> tab to go deeper.',
      hots:[[451,177,651,202,'performance','ESG Performance Monitor tab'],[679,177,836,202,'peers','Peer Benchmarking tab'],[1484,113,1560,140,'dashboard','Back'],[30,82,280,122,'dashboard','My Dashboard'],[30,183,280,223,'overview','Corporate Analytics'],[30,227,280,267,'directory','Company Directory'],[30,270,280,310,'portfolio','Portfolios'],[30,372,280,412,'disclosures','Disclosure Dashboard'],[60,414,280,448,'disclist','Disclosures'],[30,482,280,522,'frameworks','Frameworks'],[30,528,280,568,'exchange','Reporting Exchange'],[30,629,280,669,'marketplace','Marketplace'],[1298,24,1336,62,'settings','Account settings'],[1440,24,1592,62,'profile','My profile']]},
    performance:{img:'esg/img/p-performance.jpg',w:1600,h:2226,label:'Performance score',url:'/companies/esg-performance',
      note:'Score, trend and every category behind it. Click the <b>Environment</b> chip to drill into one pillar.',
      hots:[[410,870,628,917,'drilldown','Drill into Environment'],[410,813,640,858,'drilldown','Drill into Environmental'],[332,169,424,201,'overview','Overview tab'],[674,169,836,201,'peers','Peer Benchmarking tab'],[30,82,280,122,'dashboard','My Dashboard'],[30,183,280,223,'overview','Corporate Analytics'],[30,227,280,267,'directory','Company Directory'],[30,270,280,310,'portfolio','Portfolios'],[30,372,280,412,'disclosures','Disclosure Dashboard'],[60,414,280,448,'disclist','Disclosures'],[30,482,280,522,'frameworks','Frameworks'],[30,528,280,568,'exchange','Reporting Exchange'],[30,629,280,669,'marketplace','Marketplace'],[1298,24,1336,62,'settings','Account settings'],[1440,24,1592,62,'profile','My profile']]},
    drilldown:{img:'esg/img/p-drilldown.jpg',w:1600,h:1784,label:'Pillar drill-down',url:'/companies/esg-performance?pillar=environment',
      note:'The page filters in place: the Environment score, its trend and only its categories. Click the chip again to clear it.',
      hots:[[410,870,628,917,'performance','Clear the Environment filter'],[332,169,424,201,'overview','Overview tab'],[674,169,836,201,'peers','Peer Benchmarking tab'],[30,82,280,122,'dashboard','My Dashboard'],[30,183,280,223,'overview','Corporate Analytics'],[30,227,280,267,'directory','Company Directory'],[30,270,280,310,'portfolio','Portfolios'],[30,372,280,412,'disclosures','Disclosure Dashboard'],[60,414,280,448,'disclist','Disclosures'],[30,482,280,522,'frameworks','Frameworks'],[30,528,280,568,'exchange','Reporting Exchange'],[30,629,280,669,'marketplace','Marketplace'],[1298,24,1336,62,'settings','Account settings'],[1440,24,1592,62,'profile','My profile']]},
    peers:{img:'esg/img/p-peers.jpg',w:1600,h:1846,label:'Peer benchmarking',url:'/companies/peer-benchmarking',
      note:'The company against its peers, as a matrix, a ranking and a table. Peer names are blurred.',
      hots:[[322,169,430,201,'overview','Overview tab'],[442,169,655,201,'performance','ESG Performance Monitor tab'],[30,82,280,122,'dashboard','My Dashboard'],[30,183,280,223,'overview','Corporate Analytics'],[30,227,280,267,'directory','Company Directory'],[30,270,280,310,'portfolio','Portfolios'],[30,372,280,412,'disclosures','Disclosure Dashboard'],[60,414,280,448,'disclist','Disclosures'],[30,482,280,522,'frameworks','Frameworks'],[30,528,280,568,'exchange','Reporting Exchange'],[30,629,280,669,'marketplace','Marketplace'],[1298,24,1336,62,'settings','Account settings'],[1440,24,1592,62,'profile','My profile']]},
    directory:{img:'esg/img/q-directory.jpg',w:1600,h:1607,label:'Company directory',url:'/companies/directory',
      note:'Filter companies by country, region, sector, industry and market cap, then add them to a portfolio. Company names are blurred.',
      hots:[[30,82,280,122,'dashboard','My Dashboard'],[30,183,280,223,'overview','Corporate Analytics'],[30,227,280,267,'directory','Company Directory'],[30,270,280,310,'portfolio','Portfolios'],[30,372,280,412,'disclosures','Disclosure Dashboard'],[60,414,280,448,'disclist','Disclosures'],[30,482,280,522,'frameworks','Frameworks'],[30,528,280,568,'exchange','Reporting Exchange'],[30,629,280,669,'marketplace','Marketplace'],[1298,24,1336,62,'settings','Account settings'],[1440,24,1592,62,'profile','My profile']]},
    portfolio:{img:'esg/img/q-portfolio-scores.jpg',w:1600,h:1480,label:'Portfolio',url:'/portfolios/top-200/companies',
      note:'A portfolio\u2019s companies with their scores and pillars. Switch to <b>Disclosures</b> to see who has disclosed. Company names are blurred.',
      hots:[[395,390,500,426,'portfoliodisc','Disclosures view'],[30,82,280,122,'dashboard','My Dashboard'],[30,183,280,223,'overview','Corporate Analytics'],[30,227,280,267,'directory','Company Directory'],[30,270,280,310,'portfolio','Portfolios'],[30,372,280,412,'disclosures','Disclosure Dashboard'],[60,414,280,448,'disclist','Disclosures'],[30,482,280,522,'frameworks','Frameworks'],[30,528,280,568,'exchange','Reporting Exchange'],[30,629,280,669,'marketplace','Marketplace'],[1298,24,1336,62,'settings','Account settings'],[1440,24,1592,62,'profile','My profile']]},
    portfoliodisc:{img:'esg/img/q-portfolio-disclosures.jpg',w:1600,h:1247,label:'Portfolio disclosures',url:'/portfolios/top-200/disclosures',
      note:'Disclosed and undisclosed companies, with bulk export and requests to the ones still missing. <b>Scores</b> switches back.',
      hots:[[316,390,392,426,'portfolio','Scores view'],[30,82,280,122,'dashboard','My Dashboard'],[30,183,280,223,'overview','Corporate Analytics'],[30,227,280,267,'directory','Company Directory'],[30,270,280,310,'portfolio','Portfolios'],[30,372,280,412,'disclosures','Disclosure Dashboard'],[60,414,280,448,'disclist','Disclosures'],[30,482,280,522,'frameworks','Frameworks'],[30,528,280,568,'exchange','Reporting Exchange'],[30,629,280,669,'marketplace','Marketplace'],[1298,24,1336,62,'settings','Account settings'],[1440,24,1592,62,'profile','My profile']]},
    frameworks:{img:'esg/img/q-frameworks.jpg',w:1600,h:2460,label:'Frameworks',url:'/frameworks',
      note:'Core, regulatory and partner frameworks in one catalogue. Open the first <b>partner framework</b> card for its detail page. Partner names and logos are blurred.',
      hots:[[320,1435,610,1720,'framework','Open a partner framework'],[30,82,280,122,'dashboard','My Dashboard'],[30,183,280,223,'overview','Corporate Analytics'],[30,227,280,267,'directory','Company Directory'],[30,270,280,310,'portfolio','Portfolios'],[30,372,280,412,'disclosures','Disclosure Dashboard'],[60,414,280,448,'disclist','Disclosures'],[30,482,280,522,'frameworks','Frameworks'],[30,528,280,568,'exchange','Reporting Exchange'],[30,629,280,669,'marketplace','Marketplace'],[1298,24,1336,62,'settings','Account settings'],[1440,24,1592,62,'profile','My profile']]},
    framework:{img:'esg/img/q-framework-detail.jpg',w:1600,h:1802,label:'Framework detail',url:'/frameworks/partner',
      note:'One provider\u2019s frameworks, with categories, questions and usage on the platform. <b>Back</b> returns to the catalogue.',
      hots:[[1480,98,1565,138,'frameworks','Back'],[30,82,280,122,'dashboard','My Dashboard'],[30,183,280,223,'overview','Corporate Analytics'],[30,227,280,267,'directory','Company Directory'],[30,270,280,310,'portfolio','Portfolios'],[30,372,280,412,'disclosures','Disclosure Dashboard'],[60,414,280,448,'disclist','Disclosures'],[30,482,280,522,'frameworks','Frameworks'],[30,528,280,568,'exchange','Reporting Exchange'],[30,629,280,669,'marketplace','Marketplace'],[1298,24,1336,62,'settings','Account settings'],[1440,24,1592,62,'profile','My profile']]},
    exchange:{img:'esg/img/q-reporting-exchange.jpg',w:1600,h:1037,label:'Reporting exchange',url:'/reporting-exchange',
      note:'A searchable library of ESG regulations and reporting indicators, by subject, sector, country and authority.',
      hots:[[30,82,280,122,'dashboard','My Dashboard'],[30,183,280,223,'overview','Corporate Analytics'],[30,227,280,267,'directory','Company Directory'],[30,270,280,310,'portfolio','Portfolios'],[30,372,280,412,'disclosures','Disclosure Dashboard'],[60,414,280,448,'disclist','Disclosures'],[30,482,280,522,'frameworks','Frameworks'],[30,528,280,568,'exchange','Reporting Exchange'],[30,629,280,669,'marketplace','Marketplace'],[1298,24,1336,62,'settings','Account settings'],[1440,24,1592,62,'profile','My profile']]},
    marketplace:{img:'esg/img/q-marketplace.jpg',w:1600,h:1708,label:'Marketplace',url:'/marketplace',
      note:'Free and premium plans side by side, and the key features each one unlocks.',
      hots:[[30,82,280,122,'dashboard','My Dashboard'],[30,183,280,223,'overview','Corporate Analytics'],[30,227,280,267,'directory','Company Directory'],[30,270,280,310,'portfolio','Portfolios'],[30,372,280,412,'disclosures','Disclosure Dashboard'],[60,414,280,448,'disclist','Disclosures'],[30,482,280,522,'frameworks','Frameworks'],[30,528,280,568,'exchange','Reporting Exchange'],[30,629,280,669,'marketplace','Marketplace'],[1298,24,1336,62,'settings','Account settings'],[1440,24,1592,62,'profile','My profile']]},
    settings:{img:'esg/img/q-settings.jpg',w:1600,h:2148,label:'Account settings',url:'/account/team',
      note:'The team account in one place: access, members, linked entities and subscriptions. Open the <b>Contact list</b> tab, or the name in the header for <b>My Profile</b>.',
      hots:[[460,158,565,192,'contacts','Contact list tab'],[1390,93,1560,122,'dashboard','Back to Dashboard'],[30,82,280,122,'dashboard','My Dashboard'],[30,183,280,223,'overview','Corporate Analytics'],[30,227,280,267,'directory','Company Directory'],[30,270,280,310,'portfolio','Portfolios'],[30,372,280,412,'disclosures','Disclosure Dashboard'],[60,414,280,448,'disclist','Disclosures'],[30,482,280,522,'frameworks','Frameworks'],[30,528,280,568,'exchange','Reporting Exchange'],[30,629,280,669,'marketplace','Marketplace'],[1298,24,1336,62,'settings','Account settings'],[1440,24,1592,62,'profile','My profile']]},
    contacts:{img:'esg/img/q-contacts.jpg',w:1600,h:1789,label:'Contact list',url:'/account/contacts',
      note:'The organisation\u2019s contact list: upload contacts in bulk, then edit emails in the table. Company names and emails are blurred.',
      hots:[[334,160,412,192,'settings','Team Settings tab'],[1380,90,1560,116,'dashboard','Back to Dashboard'],[30,82,280,122,'dashboard','My Dashboard'],[30,183,280,223,'overview','Corporate Analytics'],[30,227,280,267,'directory','Company Directory'],[30,270,280,310,'portfolio','Portfolios'],[30,372,280,412,'disclosures','Disclosure Dashboard'],[60,414,280,448,'disclist','Disclosures'],[30,482,280,522,'frameworks','Frameworks'],[30,528,280,568,'exchange','Reporting Exchange'],[30,629,280,669,'marketplace','Marketplace'],[1298,24,1336,62,'settings','Account settings'],[1440,24,1592,62,'profile','My profile']]},
    profile:{img:'esg/img/q-profile.jpg',w:1600,h:984,label:'My profile',url:'/account/profile',
      note:'Personal details and preferences, kept apart from team settings. The settings icon goes back to the team account.',
      hots:[[1392,94,1557,121,'dashboard','Back to Dashboard'],[30,82,280,122,'dashboard','My Dashboard'],[30,183,280,223,'overview','Corporate Analytics'],[30,227,280,267,'directory','Company Directory'],[30,270,280,310,'portfolio','Portfolios'],[30,372,280,412,'disclosures','Disclosure Dashboard'],[60,414,280,448,'disclist','Disclosures'],[30,482,280,522,'frameworks','Frameworks'],[30,528,280,568,'exchange','Reporting Exchange'],[30,629,280,669,'marketplace','Marketplace'],[1298,24,1336,62,'settings','Account settings'],[1440,24,1592,62,'profile','My profile']]}
  }};
  PROTOS.disclosure={start:'dash',screens:{
    dash:{img:'esg/img/dp-dashboard.jpg',w:1600,h:1698,url:'/disclosures/dashboard',
      note:'A first-time corporate user with one pending request. Start with <b>New Disclosure</b>, or open the <b>Disclosures</b> and <b>Requests</b> tabs.',
      hots:[[345,492,617,534,'form','New Disclosure'],[505,222,592,252,'disclist','Disclosures tab'],[612,222,692,252,'reqlist','Requests tab'],[30,372,280,412,'dash','Disclosure Dashboard'],[60,414,280,448,'disclist','Disclosures'],[60,448,280,482,'reqlist','Requests']]},
    disclist:{img:'esg/img/q-disclosure-list.jpg',w:1600,h:1350,url:'/disclosures/list',
      note:'Every disclosure with its state, framework, period and privacy. Click a <b>Draft</b> row to open it, or start a <b>New Disclosure</b>.',
      hots:[[330,232,480,264,'dash','Disclosure Analytics tab'],[605,232,692,264,'reqlist','Requests tab'],[1485,88,1560,116,'dash','Back'],[320,342,1500,376,'draft','Open a draft disclosure'],[1400,116,1570,138,'form','New Disclosure'],[30,372,280,412,'dash','Disclosure Dashboard'],[60,414,280,448,'disclist','Disclosures'],[60,448,280,482,'reqlist','Requests']]},
    reqlist:{img:'esg/img/q-request-list.jpg',w:1600,h:1400,url:'/disclosures/requests',
      note:'Requests received from banks and investors, with their state. Open a <b>Started</b> request to continue it, or go back to the dashboard.',
      hots:[[330,222,480,252,'dash','Disclosure Analytics tab'],[505,222,592,252,'disclist','Disclosures tab'],[1490,88,1560,116,'dash','Back'],[320,450,1500,488,'draft','Open a started request'],[30,372,280,412,'dash','Disclosure Dashboard'],[60,414,280,448,'disclist','Disclosures'],[60,448,280,482,'reqlist','Requests']]},
    form:{img:'esg/img/dp-form.jpg',w:1600,h:1698,url:'/disclosures/new',
      note:'Four fields to start: company, framework, period name and dates. <b>Create Disclosure</b> builds the questionnaire.',
      hots:[[961,608,1117,652,'load','Create Disclosure'],[480,608,565,652,'dash','Cancel'],[1085,108,1122,145,'dash','Close']]},
    load:{img:'esg/img/dp-load.jpg',w:1600,h:1698,url:'/disclosures/new',auto:[1800,'draft'],
      note:'Large frameworks take a moment to build, so the wait is explained and can run in the background.',
      hots:[]},
    draft:{img:'esg/img/d-single-draft.jpg',w:1600,h:2036,url:'/disclosures/my-disclosure',
      note:'Draft state: the three states with their actions on top, the question tree and the current question below. Open <b>Smart Prefill</b> with the lightbulb, answer and click <b>Next</b>, or <b>Review Disclosure</b>.',
      hots:[[1489,439,1532,481,'smart','Open Smart Prefill'],[357,708,715,751,'smart','Pre-fill from History'],[357,658,715,701,'review','Review Disclosure'],[1500,1849,1572,1896,'question','Next question'],[1480,103,1555,134,'disclist','Back'],[30,372,280,412,'dash','Disclosure Dashboard'],[60,414,280,448,'disclist','Disclosures'],[60,448,280,482,'reqlist','Requests']]},
    smart:{img:'esg/img/d-single-prefill.jpg',w:1600,h:2036,url:'/disclosures/my-disclosure?prefill=smart',
      note:'The panel explains the method and projects how much will be filled before anything changes. Click <b>Smart Prefill</b>.',
      hots:[[1361,981,1563,1024,'question','Run Smart Prefill'],[1526,115,1559,145,'draft','Close panel'],[30,372,280,412,'dash','Disclosure Dashboard'],[60,414,280,448,'disclist','Disclosures'],[60,448,280,482,'reqlist','Requests']]},
    question:{img:'esg/img/d-single-question.jpg',w:1600,h:1776,url:'/disclosures/my-disclosure#0.4.2',
      note:'An answered question with its evidence attached, and progress per section in the tree. Click <b>Review Disclosure</b> when ready.',
      hots:[[358,661,718,704,'review','Review Disclosure'],[1493,438,1538,485,'smart','Open Smart Prefill'],[1395,1502,1492,1549,'draft','Previous question'],[1500,1502,1572,1549,'draft','Next question'],[1482,102,1561,135,'disclist','Back'],[30,372,280,412,'dash','Disclosure Dashboard'],[60,414,280,448,'disclist','Disclosures'],[60,448,280,482,'reqlist','Requests']]},
    review:{img:'esg/img/dp-review.jpg',w:1600,h:1498,url:'/disclosures/corporate-disclosure?state=review',
      note:'Review state. <b>Start Reviewing</b> walks through the answers; <b>Next</b> in the state panel completes the review.',
      hots:[[770,476,912,517,'flag','Start Reviewing'],[1158,476,1223,517,'confirm','Next: complete'],[663,476,754,517,'question','Previous'],[1500,1224,1572,1271,'flag','Next question'],[1480,100,1560,134,'disclist','Back'],[30,372,280,412,'dash','Disclosure Dashboard'],[60,414,280,448,'disclist','Disclosures'],[60,448,280,482,'reqlist','Requests']]},
    flag:{img:'esg/img/dp-flag.jpg',w:1600,h:1756,url:'/disclosures/corporate-disclosure?state=review#0.4.3',
      note:'Reviewing question by question; unanswered values show up here. Click <b>Next</b> in the state panel to complete.',
      hots:[[1158,476,1223,517,'confirm','Next: complete'],[663,476,754,517,'review','Previous'],[1392,1568,1492,1615,'review','Previous question'],[1480,100,1560,134,'disclist','Back'],[30,372,280,412,'dash','Disclosure Dashboard'],[60,414,280,448,'disclist','Disclosures'],[60,448,280,482,'reqlist','Requests']]},
    confirm:{img:'esg/img/dp-confirm.jpg',w:1600,h:1756,url:'/disclosures/corporate-disclosure?state=review',
      note:'Completing is final, so the dialog says what will happen and how many flags are still open.',
      hots:[[972,294,1068,336,'complete','Continue'],[808,294,957,336,'flag','Return to Review'],[1036,108,1072,145,'flag','Close']]},
    complete:{img:'esg/img/dp-complete.jpg',w:1600,h:1498,url:'/disclosures/corporate-disclosure?state=completed',
      note:'Completed. Sharing and publishing are separate steps for the team admin. Click <b>Publish Disclosure</b>.',
      hots:[[1308,476,1527,517,'published','Publish Disclosure'],[967,476,1059,517,'flag','Previous'],[30,372,280,412,'dash','Disclosure Dashboard'],[60,414,280,448,'disclist','Disclosures'],[60,448,280,482,'reqlist','Requests']]},
    published:{img:'esg/img/dp-published.jpg',w:1600,h:1310,url:'/disclosures/corporate-disclosure?state=published',
      note:'Published and read-only, ready to export. <b>Back</b> returns to the disclosures list.',
      hots:[[1486,104,1556,134,'disclist','Back'],[30,372,280,412,'dash','Disclosure Dashboard'],[60,414,280,448,'disclist','Disclosures'],[60,448,280,482,'reqlist','Requests']]}
  }};
  PROTOS.onboarding={start:'signupEmpty',screens:{
    signupEmpty:{img:'esg/img/op-signup-empty.jpg',w:1600,h:1034,url:'/sign-up',
      note:'A new user lands on sign-up. Click the form to fill it in, or <b>Log in</b> if you already have an account.',
      hots:[[990,360,1394,600,'signup','Fill in the form'],[990,634,1393,676,'signup','Continue'],[1255,692,1296,712,'login','Log in']]},
    login:{img:'esg/img/op-login.jpg',w:1600,h:1034,url:'/log-in',
      note:'Returning users log in; new users switch to sign-up. Click <b>Sign up</b>.',
      hots:[[1254,647,1303,667,'signupEmpty','Sign up']]},
    signup:{img:'esg/img/op-signup.jpg',w:1600,h:1034,url:'/sign-up',
      note:'Name, work email and password, with the terms inside the form. Click <b>Continue</b>.',
      hots:[[992,700,1393,742,'verify','Continue'],[1255,765,1296,785,'login','Log in']]},
    verify:{img:'esg/img/op-verify.jpg',w:1600,h:1034,url:'/sign-up/verify',auto:[2600,'activity'],
      note:'One message and one resend link. The prototype moves on as if the email link was opened.',
      hots:[[1050,366,1330,406,'signup','Back to sign up']]},
    activity:{img:'esg/img/op-activity.jpg',w:1600,h:1034,url:'/sign-up/activity',
      note:'One question decides what the platform shows first. Pick any activity.',
      hots:[[1000,364,1192,492,'profile','Corporates: disclose ESG data'],[1208,364,1400,492,'profile','Consultants: request ESG data'],[1000,508,1192,636,'profile','Banks: disclose and request'],[1208,508,1400,636,'profile','Other: view analytics']]},
    profile:{img:'esg/img/op-profile.jpg',w:1600,h:1034,url:'/sign-up/profile',
      note:'Optional details, so nobody is blocked. Click <b>Continue</b>.',
      hots:[[1055,776,1400,814,'team','Continue'],[996,776,1044,814,'activity','Back']]},
    team:{img:'esg/img/op-team.jpg',w:1600,h:1034,url:'/sign-up/team',
      note:'The team account links the user to their company from day one. Click <b>Continue</b>.',
      hots:[[1057,542,1401,585,'start','Continue'],[1000,542,1042,585,'profile','Back']]},
    start:{img:'esg/img/op-start.jpg',w:1600,h:1454,url:'/getting-started',
      note:'Getting started, with a four-step checklist. Try <b>Register &amp; Set Up</b>, <b>Invite Team Members</b> or <b>Create Your First Disclosure</b>.',
      hots:[[1368,26,1398,58,'settings','Account settings'],[1180,922,1550,1022,'myprofile','Register and set up'],[1180,1028,1550,1128,'settings','Invite team members'],[1180,1240,1550,1340,'discdash','Create your first disclosure'],[1398,128,1572,170,'dashboard','Go to My Dashboard'],[1300,1362,1430,1398,'startClosed','Close onboarding steps']]},
    startClosed:{img:'esg/img/op-start-closed.jpg',w:1600,h:1454,url:'/getting-started',
      note:'The checklist folds into a corner and keeps the progress. Click it to open it again.',
      hots:[[1186,1290,1585,1385,'start','Open onboarding steps'],[1368,26,1398,58,'settings','Account settings'],[1398,128,1572,170,'dashboard','Go to My Dashboard']]},
    myprofile:{img:'esg/img/op-myprofile.jpg',w:1600,h:903,url:'/account/profile',
      note:'Personal details and preferences, kept apart from team settings. The settings icon opens the team.',
      hots:[[1400,88,1560,126,'dashboard','Back to Dashboard'],[1384,26,1414,58,'settings','Account settings'],[40,84,280,118,'dashboard','My Dashboard'],[40,648,280,688,'startClosed','Getting Started']]},
    settings:{img:'esg/img/op-settings.jpg',w:1600,h:2153,url:'/account/team',
      note:'Team settings on first visit: access pending verification, members, linked entities and the trial. <b>Back to Dashboard</b>, or the name in the header for the profile.',
      hots:[[1400,88,1560,126,'dashboard','Back to Dashboard'],[1430,24,1590,60,'myprofile','My profile'],[40,84,280,118,'dashboard','My Dashboard'],[40,648,280,688,'startClosed','Getting Started']]},
    dashboard:{img:'esg/img/op-dashboard.jpg',w:1602,h:1675,url:'/dashboard',
      note:'The first dashboard leads with the pending request and the team\u2019s activity. Open <b>Disclosure Dashboard</b> in the menu, or try settings and <b>Getting Started</b>.',
      hots:[[1368,26,1398,56,'settings','Account settings'],[1420,26,1580,58,'myprofile','My profile'],[1422,143,1572,186,'settings','Invite Colleagues'],[40,328,280,366,'discdash','Disclosure Dashboard'],[32,603,260,647,'startClosed','Getting Started']]},
    discdash:{img:'esg/img/op-discdash.jpg',w:1600,h:1669,url:'/disclosure-dashboard',
      note:'The disclosure dashboard on first visit: the entity, requests received and a short guide to preparing data. Click <b>New Disclosure</b>.',
      hots:[[370,494,512,532,'draft','New Disclosure'],[60,412,280,448,'disclosures','Disclosures'],[40,84,280,118,'dashboard','My Dashboard'],[40,718,280,756,'startClosed','Getting Started']]},
    disclosures:{img:'esg/img/op-disclosures.jpg',w:1600,h:848,url:'/disclosure-dashboard/disclosures',
      note:'An empty list explains what happens while the entity is verified. Click <b>New Disclosure</b>.',
      hots:[[1425,140,1568,180,'draft','New Disclosure'],[60,368,280,404,'disclosures','Disclosures'],[40,84,280,118,'dashboard','My Dashboard'],[40,674,280,712,'startClosed','Getting Started']]},
    draft:{img:'esg/img/op-draft.jpg',w:1600,h:1192,url:'/disclosures/full-disclosure',
      note:'A new disclosure in draft, pending verification: progress per section and one clear way to start. Click <b>Start Disclosing</b> or <b>Smart Prefill</b>.',
      hots:[[1092,955,1234,995,'review','Start Disclosing'],[1080,302,1226,342,'review','Smart Prefill'],[1410,302,1536,342,'mydisc','Save as Draft'],[1490,98,1562,136,'disclosures','Back'],[40,84,280,118,'dashboard','My Dashboard'],[40,670,280,710,'startClosed','Getting Started']]},
    mydisc:{img:'esg/img/op-mydisc.jpg',w:1600,h:1120,url:'/disclosure-dashboard/disclosures',
      note:'The draft now sits in the list, saved privately while the entity is verified. Open the <b>Draft</b> row, or start a <b>New Disclosure</b>.',
      hots:[[320,514,1573,562,'review','Open the draft'],[1425,145,1568,182,'draft','New Disclosure'],[30,86,250,118,'dashboard','My Dashboard'],[30,676,250,708,'startClosed','Getting Started']]},
    review:{img:'esg/img/op-review.jpg',w:1600,h:1581,url:'/disclosures/full-disclosure',
      note:'Questions answered section by section; the state bar shows what comes next. <b>Save as Draft</b> returns to the list.',
      hots:[[1410,316,1536,354,'mydisc','Save as Draft'],[1490,98,1562,136,'mydisc','Back'],[60,365,280,405,'mydisc','Disclosures'],[40,84,280,118,'dashboard','My Dashboard'],[40,670,280,710,'startClosed','Getting Started']]}
  }};
  [].forEach.call(document.querySelectorAll('.proto[data-proto]'),function(root){
    var P=PROTOS[root.getAttribute('data-proto')]; if(!P) return;
    var S=P.screens,q=function(c){return root.querySelector(c)};
    var img=q('.proto-screen img'),hots=q('.proto-hots'),view=q('.proto-view'),note=q('.proto-note'),url=q('.proto-url'),screen=q('.proto-screen');
    Object.keys(S).forEach(function(k){var p=new Image();p.src=S[k].img;});
    var cur=null,timer=null;
    function go(k){
      var s=S[k]; if(!s) return; clearTimeout(timer);
      var first=!cur; cur=k; screen.classList.add('fading');
      setTimeout(function(){
        var W=s.w||1600; img.src=s.img; img.alt=(s.label||'Prototype')+' screen';
        screen.style.aspectRatio=W+' / '+s.h; hots.innerHTML='';
        s.hots.forEach(function(h){var b=document.createElement('button');b.type='button';b.className='hot';b.title=h[5];b.setAttribute('aria-label',h[5]);
          b.style.left=(h[0]/W*100)+'%';b.style.top=(h[1]/s.h*100)+'%';b.style.width=((h[2]-h[0])/W*100)+'%';b.style.height=((h[3]-h[1])/s.h*100)+'%';
          b.onclick=function(e){e.stopPropagation();go(h[4]);};hots.appendChild(b);});
        view.scrollTop=0; note.innerHTML=s.note||''; url.textContent='platform'+s.url;
        screen.classList.remove('fading');
        if(s.auto) timer=setTimeout(function(){if(cur===k) go(s.auto[1]);},s.auto[0]);
      },first?0:140);
    }
    go(P.start);
  });
})();

/* Image pop-up + open every page at the top */
(function(){
  try{ if('scrollRestoration' in history) history.scrollRestoration='manual'; }catch(e){}
  function top(){ if(!location.hash) window.scrollTo(0,0); }
  top(); window.addEventListener('load',top); window.addEventListener('pageshow',top);

  var box=document.createElement('div'); box.className='lb'; box.hidden=true;
  box.setAttribute('role','dialog'); box.setAttribute('aria-modal','true'); box.setAttribute('aria-label','Image preview');
  box.innerHTML='<button class="lb-x" type="button" aria-label="Close">×</button><div class="lb-in"><img alt=""><p class="lb-cap"></p></div>';
  document.body.appendChild(box);
  var bimg=box.querySelector('img'),cap=box.querySelector('.lb-cap'),last=null;
  function open(src,alt,text,from){ last=from; bimg.src=src; bimg.alt=alt||''; cap.innerHTML=text||''; cap.hidden=!text; box.hidden=false; box.scrollTop=0; document.documentElement.classList.add('lb-open'); box.querySelector('.lb-x').focus(); }
  function close(){ box.hidden=true; bimg.removeAttribute('src'); document.documentElement.classList.remove('lb-open'); if(last) try{last.focus();}catch(e){} }
  box.addEventListener('click',function(e){ if(e.target===box||e.target.classList.contains('lb-in')||e.target.classList.contains('lb-x')) close(); });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&!box.hidden) close(); });
  [].forEach.call(document.querySelectorAll('main img, .persona img'),function(img){
    if(img.closest('.proto')||img.closest('.lb')) return;
    var a=img.closest('a'); var src=(a&&/\.(jpe?g|png|webp|gif)$/i.test(a.getAttribute('href')||''))?a.getAttribute('href'):img.getAttribute('src');
    if(!src) return;
    var fig=img.closest('figure'); var fc=fig&&fig.querySelector('figcaption .ft');
    var t=a||img; img.classList.add('zoomable');
    if(!a){ img.setAttribute('tabindex','0'); img.setAttribute('role','button'); }
    function go(e){ e.preventDefault(); open(src,img.alt,fc?fc.innerHTML:'',t); }
    t.addEventListener('click',go);
    if(!a) img.addEventListener('keydown',function(e){ if(e.key==='Enter'||e.key===' ') go(e); });
    if(a){ a.removeAttribute('target'); }
  });
})();

/* PDF pop-up: shows the document's pages (pre-rendered images) inside the same pop-up */
(function(){
  var DOCS={'feedback-analysis-2023-2024':16,'product-strategy-and-process-2024':29,'user-testing-methodology-2024':11};
  var box=document.querySelector('.lb'); if(!box) return;
  var inner=box.querySelector('.lb-in'), img=inner.querySelector('img'), cap=inner.querySelector('.lb-cap');
  var pages=document.createElement('div'); pages.className='lb-pdf'; pages.hidden=true; inner.insertBefore(pages,cap);
  function pad(n){return n<10?'0'+n:''+n;}
  function show(href,title,from){
    var name=href.replace(/^.*\//,'').replace(/\.pdf$/i,''), n=DOCS[name];
    if(!n){ window.open(href,'_blank','noopener'); return; }
    img.hidden=true; pages.hidden=false; pages.innerHTML='';
    for(var i=1;i<=n;i++){ var im=document.createElement('img'); im.src='esg/docs/pages/'+name+'-'+pad(i)+'.jpg'; im.alt=(title||'Document')+', page '+i+' of '+n; im.loading=i<3?'eager':'lazy'; im.width=1400; im.height=788; pages.appendChild(im); }
    cap.hidden=false; cap.innerHTML=(title?'<b>'+title+'</b> · '+n+' pages · ':'')+'<a href="'+href+'" target="_blank" rel="noopener">Download the PDF</a>';
    box.hidden=false; box.scrollTop=0; document.documentElement.classList.add('lb-open'); box.querySelector('.lb-x').focus();
  }
  new MutationObserver(function(){ if(box.hidden){ pages.hidden=true; pages.innerHTML=''; img.hidden=false; } }).observe(box,{attributes:true,attributeFilter:['hidden']});
  [].forEach.call(document.querySelectorAll('a[href$=".pdf"]'),function(a){
    a.addEventListener('click',function(e){ e.preventDefault(); var t=a.querySelector('b,strong,h3,h4'); show(a.getAttribute('href'), t?t.textContent:'', a); });
  });
})();

/* Method cards: the whole card opens its board in the pop-up */
[].forEach.call(document.querySelectorAll('.mcard'),function(c){
  var im=c.querySelector('img.zoomable'); if(!im) return;
  c.style.cursor='zoom-in';
  c.addEventListener('click',function(e){ if(e.target!==im) im.click(); });
});
