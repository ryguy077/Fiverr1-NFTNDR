(this["webpackJsonpFiverr1-NFTNDR"]=this["webpackJsonpFiverr1-NFTNDR"]||[]).push([[0],{126:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return h}));var r=n(2),c=n.n(r),a=n(3),i=n(28),o=n(59),s=new i.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),u=new i.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),b=new i.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),f=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var i,o,s,u,b,f=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.length>3&&void 0!==f[3]?f[3]:"recent",o=f.length>4&&void 0!==f[4]&&f[4],s=!1,u={slot:0,confirmations:0,err:null},b=0,e.next=7,new Promise(function(){var e=Object(a.a)(c.a.mark((function e(f,p){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),p({timeout:!0}))}),n);try{b=r.onSignature(t,(function(e,t){s=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),p(u)):(console.log("Resolved via websocket",e),f(u))}),i)}catch(d){s=!0,console.error("WS error in setup",t,d)}case 2:if(s||!o){e.next=8;break}return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],s||(u?u.err?(console.log("REST error for",t,u),s=!0,p(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),s=!0,f(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,x(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[b]&&r.removeSignatureListener(b),s=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),p=function(t,n,r,c){var a=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:i.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:o.b,isSigner:!1,isWritable:!1},{pubkey:i.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new i.d.TransactionInstruction({keys:a,programId:u,data:e.from([])})},d=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a,o,u,b,f,p,d,l,j;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new i.b(r,t,{preflightCommitment:"recent"}),e.next=3,i.a.fetchIdl(s,a);case 3:return o=e.sent,u=new i.a(o,s,a),b={id:n,connection:r,program:u},e.next=8,u.account.candyMachine.fetch(n);case 8:return f=e.sent,p=f.data.itemsAvailable.toNumber(),d=f.itemsRedeemed.toNumber(),l=p-d,j=f.data.goLiveDate.toNumber(),j=new Date(1e3*j),e.abrupt("return",{candyMachine:b,itemsAvailable:p,itemsRedeemed:d,itemsRemaining:l,goLiveDate:j});case 15:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),l=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),b.toBuffer(),n.toBuffer(),e.from("edition")],b);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),b.toBuffer(),n.toBuffer()],b);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.d.PublicKey.findProgramAddress([t.toBuffer(),o.b.toBuffer(),n.toBuffer()],u);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){var s,u,f,d,O,h,x;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=i.d.Keypair.generate(),e.next=3,m(r,s.publicKey);case 3:return u=e.sent,f=t.connection,d=t.program,e.next=7,j(s.publicKey);case 7:return O=e.sent,e.next=10,l(s.publicKey);case 10:return h=e.sent,e.next=13,f.getMinimumBalanceForRentExemption(o.a.span);case 13:return x=e.sent,e.next=16,d.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:a,mint:s.publicKey,metadata:O,masterEdition:h,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:b,tokenProgram:o.b,systemProgram:i.d.SystemProgram.programId,rent:i.d.SYSVAR_RENT_PUBKEY,clock:i.d.SYSVAR_CLOCK_PUBKEY},signers:[s],instructions:[i.d.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:s.publicKey,space:o.a.span,lamports:x,programId:o.b}),o.c.createInitMintInstruction(o.b,s.publicKey,0,r,r),p(u,r,r,s.publicKey),o.c.createMintToInstruction(o.b,s.publicKey,u,r,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},x=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(9).Buffer)},328:function(e,t,n){},329:function(e,t,n){},332:function(e,t){},334:function(e,t){},350:function(e,t){},351:function(e,t){},439:function(e,t){},441:function(e,t){},456:function(e,t){},464:function(e,t){},466:function(e,t){},493:function(e,t){},495:function(e,t){},501:function(e,t){},513:function(e,t){},516:function(e,t){},528:function(e,t){},529:function(e,t,n){},530:function(e,t,n){"use strict";n.r(t);var r,c,a,i,o=n(1),s=n.n(o),u=n(26),b=n.n(u),f=(n(328),n(329),n(14)),p=n(2),d=n.n(p),l=n(3),j=n(12),m=n(125),O=n(127),h=n(286),x=n(557),g=n(562),y=n(566),v=n(565),w=n(6),S=n(49),k=n(164),P=n(126),M=n(15),K=Object(O.a)(k.a)(r||(r=Object(m.a)([""]))),T=O.a.span(c||(c=Object(m.a)([""]))),B=O.a.div(a||(a=Object(m.a)([""]))),R=Object(O.a)(x.a)(i||(i=Object(m.a)([""]))),L=function(e){e.days;var t=e.hours,n=e.minutes,r=e.seconds;e.completed;return Object(M.jsxs)(T,{children:[t," hours, ",n," minutes, ",r," seconds"]})},A=function(e){var t=Object(o.useState)(),n=Object(j.a)(t,2),r=n[0],c=n[1],a=Object(o.useState)(),i=Object(j.a)(a,2),s=i[0],u=i[1],b=Object(o.useState)(!1),p=Object(j.a)(b,2),m=p[0],O=p[1],x=Object(o.useState)(!1),k=Object(j.a)(x,2),T=k[0],A=k[1],C=Object(o.useState)(!1),N=Object(j.a)(C,2),E=N[0],I=N[1],D=Object(o.useState)({open:!1,message:"",severity:void 0}),W=Object(j.a)(D,2),F=W[0],_=W[1],U=Object(o.useState)(new Date(e.startDate)),Y=Object(j.a)(U,2),V=Y[0],q=Y[1],z=Object(S.c)(),H=Object(o.useState)(),G=Object(j.a)(H,2),J=G[0],X=G[1],Z=function(){var t=Object(l.a)(d.a.mark((function t(){var n,r,a,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,I(!0),!z||!(null===J||void 0===J?void 0:J.program)){t.next=10;break}return t.next=5,Object(P.c)(J,e.config,z.publicKey,e.treasury);case 5:return n=t.sent,t.next=8,Object(P.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(r=t.sent)||void 0===r?void 0:r.err)?_({open:!0,message:"Mint failed! Please try again!",severity:"error"}):_({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),a=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(a="SOLD OUT!",A(!0)):312===t.t0.code&&(a="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?a="SOLD OUT!":t.t0.message.indexOf("0x135")&&(a="Insufficient funds to mint. Please fund your wallet.")),_({open:!0,message:a,severity:"error"});case 17:if(t.prev=17,!z){t.next=23;break}return t.next=21,e.connection.getBalance(z.publicKey);case 21:i=t.sent,c(i/w.LAMPORTS_PER_SOL);case 23:return I(!1),t.finish(17);case 25:case"end":return t.stop()}}),t,null,[[0,12,17,25]])})));return function(){return t.apply(this,arguments)}}();return Object(o.useEffect)((function(){Object(l.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!z){t.next=5;break}return t.next=3,e.connection.getBalance(z.publicKey);case 3:n=t.sent,c(n/w.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[z,e.connection]),Object(o.useEffect)((function(){Object(l.a)(d.a.mark((function t(){var n,r,c,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(z){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(P.b)(z,e.candyMachineId,e.connection);case 4:n=t.sent,r=n.candyMachine,c=n.goLiveDate,a=n.itemsRemaining,A(0===a),u(a),q(c),X(r);case 12:case"end":return t.stop()}}),t)})))()}),[z,e.candyMachineId,e.connection]),Object(M.jsxs)("main",{children:[Object(M.jsx)(B,{children:z?Object(M.jsxs)(R,{disabled:T||E||!m,onClick:Z,variant:"contained",children:[T?"SOLD OUT":m?E?Object(M.jsx)(g.a,{}):"MINT":Object(M.jsx)(h.a,{date:V,onMount:function(e){return e.completed&&O(!0)},onComplete:function(){return O(!0)},renderer:L}),Object(M.jsx)("img",{width:"120",height:"120",src:"https://crypto-bananas.com/wp-content/uploads/2021/10/output-onlinegiftools-1.gif",alt:"",loading:"lazy"})]}):Object(M.jsx)(K,{children:"Connect Wallet"})}),z&&Object(M.jsxs)("p",{children:["There are ",s," Banana NFTs Remaining of 1,228 for this Pre-Launch!"]}),z&&Object(M.jsxs)("p",{children:["Address: ",Object(P.d)(z.publicKey.toBase58()||"")]}),z&&Object(M.jsxs)("p",{children:["Balance: ",(r||0).toLocaleString()," SOL"]}),Object(M.jsx)(y.a,{open:F.open,autoHideDuration:6e3,onClose:function(){return _(Object(f.a)(Object(f.a)({},F),{},{open:!1}))},children:Object(M.jsx)(v.a,{onClose:function(){return _(Object(f.a)(Object(f.a)({},F),{},{open:!1}))},severity:F.severity,children:F.message})})]})},C=n(28),N=n(107),E=n(315),I=n(563),D=(n(529),s.a.memo((function(e){e.title;var t=e.description,n=e.mintprice;return Object(M.jsx)("header",{className:"app-header",children:Object(M.jsxs)("section",{className:"app-title",children:[Object(M.jsx)("a",{href:"https://crypto-bananas.com",children:Object(M.jsx)("img",{width:"100",height:"100",src:"https://crypto-bananas.com/wp-content/uploads/2021/10/output-onlinepngtools-4.png"})})," ",Object(M.jsx)("a",{href:"https://crypto-bananas.com"}),Object(M.jsx)("a",{href:"https://crypto-bananas.com",className:"home",children:"HOME"}),Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)("h3",{children:t}),Object(M.jsx)("h4",{children:n})]})})}))),W="Crypto Bananas",F="Connect your wallet to Mint your very own Crypto Bananas!",_="Mint Fee: 0.175 SOL, plus gas for each Banana",U=new C.d.PublicKey("6e5vSmsfkKwE3b1tvqQwnFc6pLhYM1BxMht9uhJMBC6u"),Y=new C.d.PublicKey("PtLC9KtNVifPDgb5VMDzv7Z42Nv4W5htXYmCpGsHboc"),V=new C.d.PublicKey("Hwf7j4sUhX6gEvc5z5iVaiqA9gv7TuvdNdinG3afzSms"),q="devnet",z=new C.d.Connection("https://explorer-api.devnet.solana.com"),H=parseInt("1635525600",10),G=Object(E.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),J=function(){var e=Object(o.useMemo)((function(){return Object(w.clusterApiUrl)(q)}),[]),t=Object(o.useMemo)((function(){return[Object(N.a)(),Object(N.b)(),Object(N.c)(),Object(N.e)({network:q}),Object(N.d)({network:q})]}),[]);return Object(M.jsxs)("main",{className:"App",children:[Object(M.jsx)(D,{title:W,description:F,mintprice:_}),Object(M.jsx)(I.a,{theme:G,children:Object(M.jsx)(S.a,{endpoint:e,children:Object(M.jsx)(S.b,{wallets:t,autoConnect:!0,children:Object(M.jsx)(k.b,{children:Object(M.jsx)(A,{candyMachineId:V,config:Y,connection:z,startDate:H,treasury:U,txTimeout:3e4})})})})})]})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,567)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};b.a.render(Object(M.jsx)(s.a.StrictMode,{children:Object(M.jsx)(J,{})}),document.getElementById("root")),X()}},[[530,1,2]]]);
//# sourceMappingURL=main.f14ef783.chunk.js.map