"use strict";(self.webpackChunkrethinkdocs=self.webpackChunkrethinkdocs||[]).push([[442],{8922:function(t,e,o){o.r(e),o.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),i=["components"],s={title:"Orbot Integration"},l=void 0,c={unversionedId:"firewall/orbot",id:"firewall/orbot",isDocsHomePage:!1,title:"Orbot Integration",description:"RethinkDNS comes with an option to configure Orbot (Tor) to be used along with the RethinkDNS as a Proxy server to change the IP address.",source:"@site/docs/firewall/orbot.md",sourceDirName:"firewall",slug:"/firewall/orbot",permalink:"/docs/firewall/orbot",editUrl:"https://github.com/celzero/docs/edit/main/docs/firewall/orbot.md",version:"current",frontMatter:{title:"Orbot Integration"},sidebar:"docs",previous:{title:"Rethink Firewall",permalink:"/docs/firewall"}},p=[{value:"Configurations Steps",id:"configurations-steps",children:[{value:"Manual Method",id:"manual-method",children:[]},{value:"Automatic Method",id:"automatic-method",children:[]}]}],u={toc:p};function d(t){var e=t.components,o=(0,r.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"RethinkDNS comes with an option to configure Orbot (Tor) to be used along with the RethinkDNS as a Proxy server to change the IP address."),(0,a.kt)("h2",{id:"configurations-steps"},"Configurations Steps"),(0,a.kt)("h3",{id:"manual-method"},"Manual Method"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Start ",(0,a.kt)("em",{parentName:"li"},"Orbot")," (do not start it in the VPN mode)."),(0,a.kt)("li",{parentName:"ol"},'Notice what Orbot says against "SOCKS5" and "HTTP" fields on its home-screen. Those are port numbers.'),(0,a.kt)("li",{parentName:"ol"},"Open the RethinkDNS app; Start it and goto ",(0,a.kt)("em",{parentName:"li"},"Settings"),"."),(0,a.kt)("li",{parentName:"ol"},"Enable HTTP Proxy and enter the HTTP port number (as seen in Orbot), if you want just the browsers to use Orbot's Tor bridge."),(0,a.kt)("li",{parentName:"ol"},"Enable SOCKS5 (TCP) Proxy and enter the port number (from step 2), choose App (as Orbot), optionally enable Block all UDP traffic except DNS to stop leaking UDP (WhatsApp calls, Zoom, Chromecast may stop working; Orbot doesn't support UDP)."),(0,a.kt)("li",{parentName:"ol"},"Note: The IP address field to be set in RethinkDNS is 127.0.0.1 for both those proxies (for Orbot)."),(0,a.kt)("li",{parentName:"ol"},"Visit ",(0,a.kt)("a",{parentName:"li",href:"https://dnsleaktest.com/"},"dnsleaktest.com"),". It shouldn't be able to tell where you're from and not be able to show your actual IP.")),(0,a.kt)("h3",{id:"automatic-method"},"Automatic Method"),(0,a.kt)("p",null,"Starting from Version 0.53c, we have introduced one click setup"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To use that Open RethinkDNS app and go to Settings Tab by clicking Gear Icon at the bottom menu."),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/75526985/113891733-efc03700-97f7-11eb-880c-d14551cd75ca.png",width:"480"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In settings, you will find ",(0,a.kt)("em",{parentName:"p"},"Setup Orbot")," in ",(0,a.kt)("em",{parentName:"p"},"VPN & Proxy")," section, click on it."),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/75526985/113891821-049cca80-97f8-11eb-982f-9d49c96bcfbc.png",width:"480"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now, you will be presented with a drawer at bottom, where you will find options to setup Orbot as per your liking (HTTP Proxy, TCP-Only Proxy, TCP + HTTP Proxy and None)."),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/75526985/113891926-1aaa8b00-97f8-11eb-8f8c-c484ea7103d7.png",width:"480"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the one you like and click on the Orbot icon at top of the drawer to open Orbot app and then start Orbot (tor network). Once you see 100% you are good to go."))))}d.isMDXComponent=!0}}]);