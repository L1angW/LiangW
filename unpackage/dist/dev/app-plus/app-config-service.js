
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/admin/littleSecret","pages/life/recordLife","pages/physiology/physiologicalPeriod","pages/record/loveRecord"],"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#7A7E83","backgroundColor":"#ffffff","borderStyle":"black","selectedColor":"#3cc51f","list":[{"pagePath":"pages/record/loveRecord","iconPath":"static/homePage/edit.png","text":"恋爱记录"},{"pagePath":"pages/physiology/physiologicalPeriod","iconPath":"static/homePage/calendar.png","text":"生理期"},{"pagePath":"pages/index/index","iconPath":"static/homePage/homePage.png","text":"我们的家"},{"pagePath":"pages/life/recordLife","iconPath":"static/homePage/photograph.png","text":"记录生活"},{"pagePath":"pages/admin/littleSecret","iconPath":"static/homePage/photograph.png","text":"小秘密"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"liangBaoBei","compilerVersion":"3.6.4","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"欢迎来到小梁的专属小屋","titleNView":{"autoBackButton":false}}},{"path":"/pages/admin/littleSecret","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/life/recordLife","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/physiology/physiologicalPeriod","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/record/loveRecord","meta":{"isQuit":true,"isTabBar":true},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});