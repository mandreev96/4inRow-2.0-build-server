(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t){},108:function(e,t,n){},168:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),i=n.n(o),c=(n(79),n(23)),l=n(1),s=n(2),u=n(4),p=n(3),m=n(5),d=n(41),f=n.n(d),h=(n(108),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",{className:"mainTitle",style:this.props.style},this.props.text)}}]),t}(a.PureComponent)),g=n(17),v=n(18),b=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).activateRedirect=function(e){if("entered"===e&&!1===n.redirected)return n.redirected=!0,r.a.createElement(v.a,{to:"/name"})},n.state={showLogo:!1},n.redirected=!1,n.duration=1200,n.defaultStyle={transition:"".concat(n.duration,"ms linear"),opacity:1},n.transitionStyles={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timer=setTimeout(function(){e.setState({showLogo:!0}),clearTimeout(e.timer)},100)}},{key:"render",value:function(){var e=this,t=this.state.showLogo;return r.a.createElement(g.Transition,{in:t,timeout:3600},function(t){return r.a.createElement("div",{className:"startPage",style:Object(c.a)({},e.defaultStyle,e.transitionStyles[t])},r.a.createElement(h,{text:"4 in row"}),e.activateRedirect(t))})}}]),t}(a.PureComponent),y=n(15),C=n(6),E=n.n(C),O=n(12),j=n(25),k=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).changeCellColor=function(){switch(n.props.state){case 1:return{backgroundColor:"red"};case 2:return{backgroundColor:"blue"};default:return{backgroundColor:"transparent"}}},n.classes=function(){return n.props.classes?n.props.classes:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"point"},r.a.createElement("div",{className:"point-shell",style:this.changeCellColor()}))}}]),t}(a.Component),S=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).renderCells=function(){return Object(j.a)(n.props.column).map(function(e,t){return r.a.createElement(k,{state:e,key:t})})},n.dropChip=function(e){return n.props.dropChip(e)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"column",onClick:function(){return e.dropChip(e.props.index)}},this.renderCells())}}]),t}(a.Component),N=Object.freeze({SINGLE_PLAYER:"SINGLE_PLAYER",MULTIPLAYER:"MULTIPLAYER"}),P=Object.freeze({EASY:"EASY",HARD:"HARD"}),w=Object.freeze({0:"chipColor_red",1:"chipColor_blue",2:"chipColor_black",3:"chipColor_pink",4:"chipColor_yellow",5:"chipColor_green"}),T=(Object.freeze({0:"red",1:"blue",2:"black",3:"pink",4:"yellow",5:"green"}),Object.freeze({WIN_FIRST_PLAYER:"WIN_FIRST_PLAYER",WIN_SECOND_PLAYER:"WIN_SECOND_PLAYER",DRAW:"DRAW",CONTINUE:"CONTINUE"}),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).passCellsRefs=function(){return n.localProps.getTopLineRefs(n.refs)},n.getRefs=function(e){return n.refs.push(e)},n.renderCells=function(){console.log("renderrefs"),n.refs=[];for(var e=[],t=0;t<n.line;t++)e.push(r.a.createElement("div",{className:"point",key:t},r.a.createElement("div",{className:"point-shell point-drop",ref:n.getRefs})));return e},n.line=7,n.refs=[],n.localProps=n.props.localProps,n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.passCellsRefs()}},{key:"render",value:function(){return console.log(this),r.a.createElement("div",{className:"topLineCells"},this.renderCells())}}]),t}(a.PureComponent)),M=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).getTopLineRefs=function(e){return n.localProps.getTopLineRefs(e)},n.enableHighlight=function(e){return n.localProps.enableHighlight(e)},n.disableHighlight=function(e){return n.localProps.disableHighlight(e)},n.dropChip=function(e){return n.localProps.dropChip(e)},n.passFieldRef=function(){return n.localProps.getFieldRef(n.fieldRef)},n.renderGameCells=function(){return n.props.field.map(function(e,t){return r.a.createElement(S,{column:e,index:t,key:t})})},n.renderTransparentCells=function(){return n.props.localProps.field.map(function(e,t){return r.a.createElement("div",{className:"column",key:t,onMouseEnter:function(){return n.enableHighlight(t)},onMouseLeave:function(){return n.disableHighlight(t)},onClick:function(){return n.dropChip(t)}},e.map(function(e,t){return r.a.createElement("div",{className:"point-transparent",key:t})}))})},n.fieldRef=r.a.createRef(),n.localProps=n.props.localProps,n.passProps={getTopLineRefs:n.getTopLineRefs,highlightCell:n.props.localProps.selectedColumn},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.passFieldRef()}},{key:"render",value:function(){return r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"field-static field-static_transparent"},r.a.createElement("div",{className:"field-chipsShell"},r.a.createElement(T,{localProps:this.passProps}),this.renderTransparentCells())),r.a.createElement("div",{className:"field-static",ref:this.fieldRef},r.a.createElement("div",{className:"field-chipsShell field-chipsShell_game"},this.renderGameCells())))}}]),t}(a.Component),A=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).onClick=function(){return n.props.onClick&&n.props.onClick()},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.color;return r.a.createElement("div",{className:"chip ".concat(w[e]),onClick:this.onClick})}}]),t}(a.PureComponent),x=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).goToChangeName=function(){return n.props.actions&&n.props.actions.goToChangeName?n.props.actions.goToChangeName():null},n.goToChangeColor=function(){return n.props.actions&&n.props.actions.goToChangeColor?n.props.actions.goToChangeColor():null},n.classes=function(){return n.props.classes?n.props.classes:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.color;return r.a.createElement("div",{className:"viewPlayer ".concat(this.classes())},t&&r.a.createElement("h2",{className:"titlePlayerName",onClick:this.goToChangeName},t),null!==n&&r.a.createElement(A,{color:n,onClick:this.goToChangeColor}))}}]),t}(a.PureComponent),R=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).actions=function(){return n.props.actions&&n.props.actions()},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.color,a=e.actions;return r.a.createElement("div",{className:"wrapTopName"},r.a.createElement(x,{name:t,color:n,actions:a}))}}]),t}(a.PureComponent),L=n(19),_=n.n(L),D=n(8),G=function(){function e(){Object(l.a)(this,e)}return Object(s.a)(e,null,[{key:"getGameField",value:function(){return _.a.get("http://".concat(D.address,":").concat(D.port,"/game")).then(function(e){console.log(e)})}},{key:"addToSinglePlayer",value:function(e,t,n){var a={name:e,color:t,difficulty:n};return _.a.post("http://".concat(D.address,":").concat(D.port,"/singlePlayer"),a).then(function(e){return Promise.resolve(e.data)}).catch(function(e){return Promise.reject(e)})}},{key:"addToMultiplayer",value:function(e,t){var n={name:e,color:t};return _.a.post("http://".concat(D.address,":").concat(D.port,"/multiplayer"),n).then(function(e){return Promise.resolve(e.data)}).catch(function(e){return Promise.reject(e)})}},{key:"deleteSinglePlayer",value:function(e){var t={id:e};return _.a.post("http://".concat(D.address,":").concat(D.port,"/deleteSinglePlayer"),t).then(function(e){return Promise.resolve(e.data)}).catch(function(e){return Promise.reject(e)})}},{key:"playAgain",value:function(e){var t={id:e};return _.a.post("http://".concat(D.address,":").concat(D.port,"/playAgainSinglePlayer"),t).then(function(e){return Promise.resolve(e.data)}).catch(function(e){return Promise.reject(e)})}},{key:"move",value:function(e,t){var n={index:e,id:t};return _.a.post("http://".concat(D.address,":").concat(D.port,"/move"),n).then(function(e){return Promise.resolve(e.data)}).catch(function(e){return Promise.reject(e)})}}]),e}(),F=n(72),I=n(33),W=n.n(I),Y=n(43);var H=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).translateOnFocus=function(){n.props.disableAnimation||n.state.waiting||(n.setState({waiting:!0}),n.timer=setTimeout(function(){return n.setState({focus:!0})},3e3))},n.returnOriginal=function(){n.props.disableAnimation||(clearTimeout(n.timer),n.setState({focus:!1,waiting:!1}))},n.state={focus:!1,waiting:!1},n.timer=null,n.duration=400,n.defaultStyle={transition:"".concat(n.duration,"ms linear"),opacity:0},n.transitionStyles={entering:{opacity:0,paddingTop:0,marginBottom:50},entered:{opacity:1},exiting:{opacity:0,paddingTop:20,marginBottom:30},exited:{opacity:1}},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(g.Transition,{in:this.state.focus,timeout:200},function(t){return r.a.createElement("h2",{className:"title",style:Object(c.a)({},e.defaultStyle,e.transitionStyles[t]),onMouseEnter:e.translateOnFocus,onMouseLeave:e.returnOriginal},function(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?Y[e].ru:Y[e].en}(e.props.text,"exiting"===t||"entered"===t))})}}]),t}(a.PureComponent),U=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).click=function(){return n.props.onClick()},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"largeButton",onClick:this.click},r.a.createElement("div",{className:"largeButton_submit"},this.props.text))}}]),t}(a.PureComponent),z=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).enableLoading=function(){return n.setState({loading:!0})},n.disableLoading=function(){return n.setState({loading:!1})},n.goToSelectGameMode=function(){return n.props.goToSelectGameMode()},n.playAgain=function(){return n.props.playAgain()},n.state={loading:!1},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.state;return r.a.createElement(W.a,{ariaHideApp:!1,closeTimeoutMS:400,isOpen:e,contentLabel:"modal",onRequestClose:function(){}},r.a.createElement(H,{text:"finish_game"}),r.a.createElement("div",{className:"largeButtonsWrap"},r.a.createElement(U,{onClick:this.playAgain,text:"Play again"}),r.a.createElement(U,{onClick:this.goToSelectGameMode,text:"Go to select mode"})))}}]),t}(a.PureComponent),B=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).animate=function(e){var t=performance.now();requestAnimationFrame(function n(a){var r=(a-t)/e.duration;r>1&&(r=1);var o=e.timing(r);e.draw(o),r<1&&requestAnimationFrame(n)})},n.makeEaseOut=function(e){return function(t){return 1-e(1-t)}},n.bounce=function(e){for(var t=0,n=1;;t+=n,n/=2)if(e>=(7-4*t)/11)return-Math.pow((11-6*t-11*e)/4,2)+Math.pow(n,2)},n.bounceEaseOut=function(){return n.makeEaseOut(n.bounce)},n.getHeightForChipFall=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.state.selectedColumn;return n.state.topLineRefs[0].offsetHeight/.8*(n.state.field[e].lastIndexOf(0)+1)+10},n.animateCell=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.state.selectedColumn,t=arguments.length>1?arguments[1]:void 0;return new Promise(function(a){var r=n.state.topLineRefs,o=r[e],i=n.getHeightForChipFall(e);t&&(r[e].style.backgroundColor="blue"),n.animate({duration:1400,timing:n.bounceEaseOut(),draw:function(e){o.style.top=e*i+"px",1===e&&a()}})})},n.returnChipAfterAnimation=function(e){var t=n.state.topLineRefs;t[e].style.backgroundColor="transparent",t[e].style.top=0},n.finishGame=function(){return n.setState({finishGame:!0})},n.resetGame=function(){return n.setState({finishGame:!1})},n.getTopLineRefs=function(e){return n.setState({topLineRefs:e})},n.getFieldRef=function(e){return n.setState({fieldRef:e})},n.updateField=function(e){return n.setState({field:e})},n.updateFieldAfterYourMove=function(e){var t=Object(j.a)(n.state.field),a=t[e].lastIndexOf(0);t[e][a]=1,n.updateField(t),n.returnChipAfterAnimation(e)},n.youShouldMove=function(){return n.setState({yourMove:!0})},n.rivalShouldMove=function(){return n.setState({yourMove:!1})},n.enableHighlight=function(){var e=Object(O.a)(E.a.mark(function e(t){var a,r,o;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState(function(){return{selectedColumn:t}});case 2:a=n.state,r=a.selectedColumn,o=a.topLineRefs,n.playerData.color,o[r].style.backgroundColor="red";case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.disableHighlight=function(){return n.setState({selectedColumn:null})},n.enterToColumn=function(){var e=Object(O.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.yourMove||n.isFullStack(t)){e.next=4;break}return e.next=4,n.enableHighlight(t);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.leaveColumn=function(){var e=Object(O.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.yourMove){e.next=5;break}return n.returnChipAfterAnimation(t),e.next=5,n.disableHighlight(t);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.dropChip=function(){var e=Object(O.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.isFullStack(t)){e.next=8;break}if(!n.state.yourMove){e.next=8;break}return e.next=5,n.rivalShouldMove();case 5:return e.next=7,n.enableHighlight(t);case 7:n.animateCell().then(function(){return n.updateFieldAfterYourMove(t),G.move(t,n.props.playerData.id)}).then(function(e){console.log(e);var t=e.statusGame,a=e.column,r=e.field;r?n.animateCell(a,!0).then(function(){n.updateField(r),n.returnChipAfterAnimation(a),n.youShouldMove(),t!==F.STATUS_GAME.CONTINUE&&n.finishGame()}):n.finishGame()});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.clearGameState=function(){n.disableHighlight(),n.updateField(n.generateField()),n.youShouldMove(),n.resetGame()},n.deleteSinglePlayer=function(){var e=Object(O.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.deleteSinglePlayer(t);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.playAgain=Object(O.a)(E.a.mark(function e(){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.playerData.id,e.next=3,G.playAgain(t);case 3:n.clearGameState();case 4:case"end":return e.stop()}},e)})),n.goToSelectGameMode=Object(O.a)(E.a.mark(function e(){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.playerData.id,n.clearGameState(t),e.next=4,n.deleteSinglePlayer(t);case 4:n.navigateTo("/mode");case 5:case"end":return e.stop()}},e)})),n.generateField=function(){for(var e=[],t=0;t<7;t++){e.push([]);for(var n=0;n<6;n++)e[t].push(0)}return e},n.navigateTo=function(e){return n.props.history.push(e)},n.isFullStack=function(e){return-1===n.state.field[e].lastIndexOf(0)},n.redirect=function(){n.props.playerData.activeGame||n.redirected||(n.redirected=!0)},n.state={field:Object(j.a)(n.generateField()),yourMove:!0,rival:null,topLineRefs:null,fieldRef:null,selectedColumn:null,finishGame:!1},n.playerData=n.props.playerData,n.redirected=!1,n.passProps={getTopLineRefs:n.getTopLineRefs,field:n.state.field,playerData:n.playerData,enableHighlight:n.enterToColumn,disableHighlight:n.leaveColumn,selectedColumn:n.state.selectedColumn,dropChip:n.dropChip,getFieldRef:n.getFieldRef},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.field,n=e.finishGame;return r.a.createElement("div",{className:"wrapPage"},r.a.createElement(R,{name:"maxim",color:1}),r.a.createElement(M,{localProps:this.passProps,field:t}),r.a.createElement(z,{state:n,goToSelectGameMode:this.goToSelectGameMode,playAgain:this.playAgain}))}}]),t}(a.Component),q=n(73),J=n.n(q),K=(n(166),n(167),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).updateWindowDimensions=function(){n.setState({width:window.innerWidth})},n.selectColor=function(e){n.props.selectColor(e)},n.setWidthSlider=function(){return n.state.width>500?{width:400}:{width:230}},n.state={width:0},n.settings={className:"center",centerMode:!0,infinite:!0,centerPadding:"0px",slidesToShow:3,speed:300,afterChange:function(e){return n.selectColor(e)}},n.slider=r.a.createRef(),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"render",value:function(){var e=this.setWidthSlider();return r.a.createElement("div",{style:e,className:this.props.classes},r.a.createElement(J.a,Object.assign({},this.settings,{ref:this.slider}),r.a.createElement("div",null,r.a.createElement("div",{className:"chip chipColor_red"})),r.a.createElement("div",null,r.a.createElement("div",{className:"chip chipColor_blue"})),r.a.createElement("div",null,r.a.createElement("div",{className:"chip chipColor_black"})),r.a.createElement("div",null,r.a.createElement("div",{className:"chip chipColor_pink"})),r.a.createElement("div",null,r.a.createElement("div",{className:"chip chipColor_yellow"})),r.a.createElement("div",null,r.a.createElement("div",{className:"chip chipColor_green"}))))}}]),t}(a.PureComponent)),Q=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).click=function(){return n.props.click()},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{className:"button ".concat(this.props.classes),onClick:this.click},this.props.children)}}]),t}(a.PureComponent),V=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).selectColor=function(e){n.setState({selectedColor:e})},n.submitColor=function(){n.props.submitPlayerData({color:n.state.selectedColor})},n.actions=function(){return{goToChangeName:function(){return n.props.history.push("/name")}}},n.activeLink=function(){return console.log(n.props),n.props.playerData.name?"/mode":"/name"},n.state={selectedColor:0},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.playerData,t=e.name,n=e.color;return r.a.createElement("div",{className:"wrapPage"},r.a.createElement(R,{name:t,color:n,actions:this.actions()}),r.a.createElement(H,{text:"select_color_chip"}),r.a.createElement(K,{classes:"wrapCarousel",selectColor:this.selectColor}),r.a.createElement(y.b,{to:this.activeLink()},r.a.createElement(Q,{click:this.submitColor,classes:"button_submit"},"Select color")))}}]),t}(a.Component),X=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{onClick:this.props.onClick},r.a.createElement("div",{className:"sk-fading-circle"},r.a.createElement("div",{className:"sk-circle1 sk-circle"}),r.a.createElement("div",{className:"sk-circle2 sk-circle"}),r.a.createElement("div",{className:"sk-circle3 sk-circle"}),r.a.createElement("div",{className:"sk-circle4 sk-circle"}),r.a.createElement("div",{className:"sk-circle5 sk-circle"}),r.a.createElement("div",{className:"sk-circle6 sk-circle"}),r.a.createElement("div",{className:"sk-circle7 sk-circle"}),r.a.createElement("div",{className:"sk-circle8 sk-circle"}),r.a.createElement("div",{className:"sk-circle9 sk-circle"}),r.a.createElement("div",{className:"sk-circle10 sk-circle"}),r.a.createElement("div",{className:"sk-circle11 sk-circle"}),r.a.createElement("div",{className:"sk-circle12 sk-circle"})),r.a.createElement(H,{text:"loading"}))}}]),t}(a.PureComponent),Z=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).enableLoading=function(){return n.setState({loading:!0})},n.offLoading=function(){return n.setState({loading:!1})},n.startGame=function(e){n.enableLoading(),n.props.startGame(e)},n.renderContentForSinglePlayer=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,{text:"select_difficult"}),r.a.createElement("div",{className:"largeButtonsWrap"},r.a.createElement(U,{onClick:function(){return n.startGame(P.EASY)},text:"Weak in the head"}),r.a.createElement(U,{onClick:function(){return n.startGame(P.HARD)},text:"The God"})))},n.renderContentForMultiplayer=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,{text:"my_advice"}),r.a.createElement(U,{onClick:function(){return n.startGame(P.EASY)},text:"Search a player"}))},n.renderContent=function(){switch(n.props.gameMode){case N.SINGLE_PLAYER:return n.renderContentForSinglePlayer();case N.MULTIPLAYER:return n.renderContentForMultiplayer();default:return null}},n.state={loading:!1},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){console.log(this.props);var e=this.props,t=e.close,n=e.state,a=this.state.loading;return r.a.createElement(W.a,{ariaHideApp:!1,closeTimeoutMS:400,isOpen:n,contentLabel:"modal",onRequestClose:function(){return t()}},a?r.a.createElement(X,{onClick:null}):this.renderContent())}}]),t}(a.PureComponent),$=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).openModalSinglePlayer=function(){return n.setState({showModal:!0,gameMode:N.SINGLE_PLAYER})},n.openModalMultiplayer=function(){return n.setState({showModal:!0,gameMode:N.MULTIPLAYER})},n.closeModal=function(){return n.setState({showModal:!1,gameMode:null})},n.startSinglePlayer=function(){var e=Object(O.a)(E.a.mark(function e(t){var a,r,o,i;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props.playerData,r=a.name,o=a.color,e.next=3,G.addToSinglePlayer(r,o,t);case 3:i=e.sent,n.props.submitPlayerData({id:i.id,activeGame:!0}),n.closeModal(),n.props.history.push("/game");case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.startMultiplayer=Object(O.a)(E.a.mark(function e(){var t,a,r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.playerData,a=t.name,r=t.color,e.next=3,G.addToMultiplayer(a,r);case 3:e.sent;case 4:case"end":return e.stop()}},e)})),n.selectedGameType=function(){switch(n.state.gameMode){case N.SINGLE_PLAYER:return n.startSinglePlayer;case N.MULTIPLAYER:return n.startMultiplayer;default:return n.closeModal}},n.actions=function(){return{goToChangeColor:function(){return n.props.history.push("/color")},goToChangeName:function(){return n.props.history.push("/name")}}},n.redirect=function(){var e=n.props.playerData,t=e.name,a=e.color;return console.log(a),t||n.redirected?null!==a||n.redirected?void 0:(n.redirected=!0,r.a.createElement(v.a,{to:"/color"})):(n.redirected=!0,r.a.createElement(v.a,{to:"/name"}))},n.state={showModal:!1,gameMode:null},n.redirected=!1,n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.playerData,t=e.name,n=e.color,a=this.state,o=a.showModal,i=a.gameMode;return r.a.createElement("div",{className:"wrapPage"},this.redirect(),r.a.createElement(R,{name:t,color:n,actions:this.actions()}),r.a.createElement(H,{text:"select_game_type"}),r.a.createElement("div",{className:"largeButtonsWrap"},r.a.createElement(U,{onClick:this.openModalSinglePlayer,text:"single player"}),r.a.createElement(U,{onClick:this.openModalMultiplayer,text:"multiplayer"})),r.a.createElement(Z,{close:this.closeModal,state:o,startGame:this.selectedGameType(),gameMode:i}))}}]),t}(a.Component),ee=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).onChangeText=function(e){return n.setState({inputText:e,notification:!1})},n.saveName=function(){n.state.inputText?n.props.submitPlayerData({name:n.state.inputText}):n.setState({notification:!0})},n.activeLink=function(){var e=n.state.inputText,t=n.props.playerData.color;return e?null!==t?"/mode":"/color":"/name"},n.changeClassNameNotification=function(){return n.state.notification?"input-notification_show input-notification":"input-notification_transparent input-notification"},n.actions=function(){return{goToChangeColor:function(){return n.props.history.push("/color")}}},n.state={inputText:"",notification:!1},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.playerData,n=t.name,a=t.color;return r.a.createElement("div",{className:"wrapPage"},r.a.createElement(R,{name:n,color:a,actions:this.actions()}),r.a.createElement(H,{text:"enter_name"}),r.a.createElement("input",{className:"input",type:"text",onChange:function(t){return e.onChangeText(t.target.value)}}),r.a.createElement("p",{className:this.changeClassNameNotification()},"Enteeeeer NAAAAMEEE!!1"),r.a.createElement(y.b,{to:this.activeLink(),params:this.state},r.a.createElement(Q,{click:this.saveName,classes:"button_submit"},"Save name")))}}]),t}(a.Component),te=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).submitPlayerData=function(e){return n.setState(Object(c.a)({},e))},n.state={name:null,color:null,id:null,activeGame:!1},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){if(window.innerWidth<1200){var e=f()("http://192.168.0.109:3001/room");e.on("get",function(e){console.log(e)}),e.emit("post",{post:"post"})}else{var t=f()("http://192.168.0.109:3001/room1");t.on("get",function(e){console.log(e)}),t.emit("post",{post:"post"})}}},{key:"render",value:function(){var e=this,t=this.state;t.name,t.color;return r.a.createElement(y.a,null,r.a.createElement("div",{className:"App"},ne.map(function(t){var n=t.path,a=t.Component;return r.a.createElement(v.b,{key:n,exact:!0,path:n},function(t){var n=t.match,o=t.history;return r.a.createElement(g.CSSTransition,{in:null!=n,timeout:300,classNames:"page",unmountOnExit:!0},r.a.createElement("div",{className:"page"},r.a.createElement(a,{history:o,submitPlayerData:e.submitPlayerData,playerData:e.state})))})})))}}]),t}(a.Component),ne=[{path:"/",name:"Start",Component:b},{path:"/name",name:"Name",Component:ee},{path:"/color",name:"Color",Component:V},{path:"/mode",name:"GameMode",Component:$},{path:"/game",name:"Game",Component:B}],ae=te;i.a.render(r.a.createElement(ae,null),document.getElementById("root"))},43:function(e){e.exports={title:{en:"4 in Row",ru:"\u0427\u0435\u0442\u044b\u0440\u0435 \u0432 \u0440\u044f\u0434"},enter_name:{en:"Enter your name",ru:"\u0412\u0432\u0435\u0434\u0438 \u0441\u0432\u043e\u0435 \u0438\u043c\u044f \u0438\u043b\u0438 \u0447\u0435 \u0442\u0430\u043c"},select_color_chip:{en:"Select color your chip",ru:"\u0412\u044b\u0431\u0435\u0440\u0438 \u0446\u0432\u0435\u0442 \u0444\u0438\u0448\u0435\u0447\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0431\u0443\u0434\u0435\u0448\u044c \u0445\u043e\u0434\u0438\u0442\u044c"},select_game_type:{en:"Select game type",ru:"\u0421\u043e\u043f\u0435\u0440\u043d\u0438\u0447\u0430\u0442\u044c \u0431\u0443\u0434\u0435\u0448\u044c \u0441 \u0431\u043e\u0442\u043e\u043c \u0438\u043b\u0438 \u043a\u0442\u043e \u0435\u0449\u0435 \u0440\u0435\u0448\u0438\u043b \u043f\u043e\u0438\u0433\u0440\u0443\u043b\u044c\u043a\u0430\u0442\u044c?"},start_game:{en:"Start game",ru:"\u041f\u043e\u0448\u043b\u0430 \u0438\u0433\u0440\u0430"},select_difficult:{en:"Who will we play with?",ru:"\u0421 \u043a\u0435\u043c \u0431\u0443\u0434\u0435\u043c \u0431\u043e\u0440\u043e\u0442\u044c\u0441\u044f?"},loading:{en:"Loading",ru:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c"},finish_game:{en:"Finish game",ru:"\u041a\u043e\u043d\u0435\u0446 \u0438\u0433\u0440\u044b"},my_advice:{en:"My advice - send link on this game to your friend / colleague / pet for play together",ru:"\u042f \u0434\u0443\u043c\u0430\u044e, \u0447\u0442\u043e \u0441\u0435\u0439\u0447\u0430\u0441 \u0432 \u044d\u0442\u043e \u043d\u0438\u043a\u0442\u043e \u043d\u0435 \u0438\u0433\u0440\u0430\u0435\u0442, \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0438 \u0434\u0440\u0443\u0433\u0443 \u0441\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044e"}}},72:function(e,t,n){"use strict";t.__esModule=!0,t.STATUS_GAME=Object.freeze({WIN_FIRST_PLAYER:"WIN_FIRST_PLAYER",WIN_SECOND_PLAYER:"WIN_SECOND_PLAYER",DRAW:"DRAW",CONTINUE:"CONTINUE"})},74:function(e,t,n){e.exports=n(168)},79:function(e,t,n){},8:function(e){e.exports={address:"http://3.120.191.85",port:"3001"}}},[[74,1,2]]]);
//# sourceMappingURL=main.d1cafffe.chunk.js.map