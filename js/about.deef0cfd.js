"use strict";(self["webpackChunkactam"]=self["webpackChunkactam"]||[]).push([[443],{8764:function(l,o,t){t.r(o),t.d(o,{default:function(){return q}});var i=t(3396),e=t(7139),n=t.p+"img/synth_controls_legend.2c0044b6.png",s=t.p+"img/tone_routing.1e9b75c6.png",c=t.p+"img/osc_routing.e3877619.png";const r={class:"about"},a={class:"controls_section"},u=(0,i.uE)("<h3>Available Controls</h3><ul><li>Oscillator: <br><ul><li> Faders: <ul><li>[red]: osc gain</li><li>[green]: 48 steps pitch shift</li><li>[azure]: pink noise gain</li></ul></li><li> Buttons <ul><li>Activate routing to corresponding filter chain</li></ul></li></ul></li><br><li>Filters: <br><ul><li> [first] highpass: <ul><li>[horizontal]: cutoff</li><li>[vertical]: resonance</li></ul></li><li> [second] peaking: <ul><li>[horizontal]: frequency</li><li>[vertical]: Q</li></ul></li><li> [third] lowpass: <ul><li>[horizontal]: cutoff</li><li>[vertical]: resonance</li></ul></li><li> Buttons <ul><li>Activate routing to corresponding effects chain</li></ul></li></ul></li><br><li>Effects: <br><ul><li>Six effects and bypass: <ul><li>Reverb</li><li>Delay</li><li>Distortion</li><li>Vibrato</li><li>Pan</li><li>Chorus</li></ul></li><li> Chain volume: <ul><li>Post-effects gain control</li></ul></li></ul></li></ul><ul></ul>",3),_=[u],h=(0,i._)("img",{class:"controls_section_column controls_section_col_2",src:n,alt:""},null,-1),d=(0,i.uE)("<h3>Keyboard shortcuts</h3><ul><li>White notes mapping: <br> [C, D, E, F, G, A, B, C, D, E, F] <br> [A, S, D, F, G, H, J, K, L, ò, à] </li></ul><ul><li>Black notes mapping: <br> [C#, D#, _, F#, G#, A#, _, C#, D#] <br> [W , E , _, T , Y , U , _, O , P ] </li></ul><ul><li><pre>Octave Up:    [X] key</pre></li><li><pre>Octave Down:  [Z] key</pre></li></ul><ul><li>Shift-Click disable: <ul><li>Oscillators are removed</li><li>Effects are set to bypass</li><li>Envelope connections are removed</li></ul></li></ul>",5),p=[d],m={class:"controls_section"},b=(0,i._)("div",{class:"controls_section_col_2"},null,-1),g={class:"routing_section"},f=(0,i._)("br",null,null,-1),y=(0,i._)("ul",null,[(0,i._)("li",null," Any of the Envelopes and lfo can be activated or turned off trough the UI. Tonejs polyphony is not able to support that, so we implemented our own polyphony. "),(0,i._)("li",null," The damp node at the end of each osc can be connected or disconnected from each filter chain using the UI. This allows each osc to be routed into any or all the filter chains. "),(0,i._)("li",null," The last filter of each filter chain can be connected or disconnected from each effect chain using the UI. This allows each filter chain to be routed into any or all the effects chains. ")],-1),v=(0,i._)("br",null,null,-1),k=(0,i._)("br",null,null,-1),w=(0,i._)("img",{class:"routing_complete_img",src:s,alt:""},null,-1),C={class:"osc_routing"},T=(0,i._)("ul",null,[(0,i._)("li",null,[(0,i.Uk)(" We implemented polyphony from scratch in order o be able to work with evelopes."),(0,i._)("br")]),(0,i._)("li",null," Since each voice needs its own modulators, we create and connect them directly in initialization. The amount of modulation is initially set to zero and is changed when envelopes are connected trough the UI. "),(0,i._)("li",null," When a modulator is connected, a slot in the connection matrix is filled and the amount becomes settable trough the same interface. Each modulator can be connected up to nine parameters. "),(0,i._)("li",null," The only modulator that can't be rerouted is the first one in the UI, which is the adsr associated with the gain of each voice and its relative noise ")],-1),U=(0,i._)("br",null,null,-1),j=(0,i._)("br",null,null,-1),E=(0,i._)("img",{class:"routing_osc_img",src:c,alt:""},null,-1),A=(0,i._)("div",{class:"repo_description"},[(0,i.Uk)(" A live demo of the PolisinT is available "),(0,i._)("a",{href:"https://furiocolombo.github.io/"},"here"),(0,i.Uk)(", hosting provided by GitHub."),(0,i._)("br"),(0,i.Uk)(" All code is free and available "),(0,i._)("a",{href:"https://github.com/00sconosciuto00/actamVue"},"here"),(0,i.Uk)(". Feel free to fork the repository and play with it! ")],-1),D={class:"author"},F=(0,i._)("button",{class:"author_name"},"Colombo Marco Furio",-1),S=(0,i._)("br",null,null,-1),G=(0,i._)("button",{class:"author_code"},"10537094",-1),x={class:"author"},z=(0,i._)("button",{class:"author_name"},"Fratticioli Guglielmo",-1),O=(0,i._)("br",null,null,-1),B=(0,i._)("button",{class:"author_code"},"10821800",-1),H={class:"author"},I=(0,i._)("button",{class:"author_name"},"Pirrello Elia",-1),L=(0,i._)("br",null,null,-1),P=(0,i._)("button",{class:"author_code"},"10897020",-1),R=(0,i._)("div",{style:{height:"15%",width:"100%"}},null,-1);function W(l,o,t,n,s,c){return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("h1",{style:(0,e.j5)(c.titleComputedStyle)},"Controls",4),(0,i._)("div",a,[(0,i._)("div",{class:"controls_section_column controls_section_col_1",style:(0,e.j5)(c.controls_section_col_1_style)},_,4),h,(0,i._)("div",{class:"controls_section_column controls_section_col_3",style:(0,e.j5)(c.controls_section_col_3_style)},p,4)]),(0,i._)("h1",{style:(0,e.j5)(c.titleComputedStyle)},"Demo",4),(0,i._)("div",m,[(0,i._)("div",{class:"controls_section_col_1",style:(0,e.j5)(c.controls_section_col_1_style)},null,4),b,(0,i._)("div",{class:"controls_section_col_3",style:(0,e.j5)(c.controls_section_col_3_style)},null,4)]),(0,i._)("h1",{style:(0,e.j5)(c.titleComputedStyle)},"Routing",4),(0,i._)("div",g,[(0,i._)("div",{class:"routing_description",style:(0,e.j5)(c.routing_description_style)},[f,(0,i.Uk)(" Rerouting of the following elements is permitted: "),y,v,(0,i.Uk)(" Below we provide the Tonejs objects entire routing which is a complete representation of the initial synth state. "),k],4),w,(0,i._)("div",C,[(0,i._)("div",{class:"routing_osc_description",style:(0,e.j5)(c.routing_description_style)},[T,U,(0,i.Uk)(" On the right we provide the voice routing in detail. "),j],4),E])]),(0,i._)("h1",{style:(0,e.j5)(c.titleComputedStyle)},"Repository",4),A,(0,i._)("h1",{style:(0,e.j5)(c.titleComputedStyle)},"Authors",4),(0,i._)("div",D,[F,S,G,(0,i._)("button",{class:"author_mail",onClick:o[0]||(o[0]=l=>c.copyText("marcofurio.colombo@polimi.it"))},"| marcofurio.colombo@polimi.it | "),(0,i._)("button",{class:"author_github",onClick:o[1]||(o[1]=l=>c.openLink("https://github.com/FurioColombo"))},"GitHub")]),(0,i._)("div",x,[z,O,B,(0,i._)("button",{class:"author_mail",onClick:o[2]||(o[2]=l=>c.copyText("guglielmo.fratticioli@mail.polimi.it"))},"| guglielmo.fratticioli@mail.polimi.it | "),(0,i._)("button",{class:"author_github",onClick:o[3]||(o[3]=l=>c.openLink("https://github.com/guglielmofratticioli"))},"GitHub")]),(0,i._)("div",H,[I,L,P,(0,i._)("button",{class:"author_mail",onClick:o[4]||(o[4]=l=>c.copyText("elia.pirrello@mail.polimi.it"))},"| elia.pirrello@mail.polimi.it | "),(0,i._)("button",{class:"author_github",onClick:o[5]||(o[5]=l=>c.openLink("https://github.com/00sconosciuto00"))},"GitHub")]),R])}var K={computed:{titleComputedStyle(){return{backgroundColor:this.colors.orange.glow}},controls_section_col_1_style(){return{backgroundColor:this.colors.azure.glow}},controls_section_col_3_style(){return{backgroundColor:this.colors.green.glow}},routing_description_style(){return{backgroundColor:this.colors.yellow.glow}}},methods:{openLink(l){window.open(l)},async copyText(l){try{await navigator.clipboard.writeText(l),alert("Copied")}catch(o){alert("Cannot copy")}}}},V=t(89);const Z=(0,V.Z)(K,[["render",W]]);var q=Z}}]);
//# sourceMappingURL=about.deef0cfd.js.map