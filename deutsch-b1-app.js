(function(){
"use strict";

var AUDIO={
1:"https://bfu.goethe.de/medien/b1_m/audio1.mp4",
2:"https://bfu.goethe.de/medien/b1_m/audio2.mp4",
3:"https://bfu.goethe.de/medien/b1_m/audio3.mp4",
4:"https://bfu.goethe.de/medien/b1_m/audio4.mp4",
5:"https://bfu.goethe.de/medien/b1_m/audio5.mp4",
6:"https://bfu.goethe.de/medien/b1_m/audio6.mp4",
7:"https://bfu.goethe.de/medien/b1_m/audio7.mp4",
8:"https://bfu.goethe.de/medien/b1_m/audio8.mp4"
};

var H=[
["Teil 1 · Text 1",1,"Frau Stein bekommt einen anderen Termin als ursprünglich geplant.",[["Richtig","richtig"],["Falsch","falsch"]],"richtig"],
["Teil 1 · Text 1",1,"Was soll Frau Stein nach dem Gespräch tun?",[["die Chipkarte mitbringen","a"],["zehn Euro bezahlen","b"],["noch einmal anrufen","c"]],"c"],
["Teil 1 · Text 2",2,"Herr Thomas spricht Frau Brahms wegen eines neuen Versicherungstarifs an.",[["Richtig","richtig"],["Falsch","falsch"]],"falsch"],
["Teil 1 · Text 2",2,"Welche Unterlagen möchte Herr Thomas von Frau Brahms?",[["die Chipkarte","a"],["Zeugnisse","b"],["einen neuen Vertrag","c"]],"b"],
["Teil 1 · Text 3",3,"Die Radiosendung informiert über Veranstaltungen in München.",[["Richtig","richtig"],["Falsch","falsch"]],"falsch"],
["Teil 1 · Text 3",3,"Warum stockt der Verkehr auf der Autobahn?",[["wegen einer Baustelle","a"],["wegen des Berufsverkehrs","b"],["wegen eines Unfalls","c"]],"c"],
["Teil 1 · Text 4",4,"Die Durchsage richtet sich an Menschen, die gemeinsam unterwegs sind.",[["Richtig","richtig"],["Falsch","falsch"]],"falsch"],
["Teil 1 · Text 4",4,"Welcher Zug fährt nicht?",[["nach Bern","a"],["nach Genf","b"],["nach Lausanne","c"]],"b"],
["Teil 1 · Text 5",5,"Im Osten Deutschlands soll sich die Wetterlage verbessern.",[["Richtig","richtig"],["Falsch","falsch"]],"falsch"],
["Teil 1 · Text 5",5,"Welche Wettererscheinung wird für die Elbe angekündigt?",[["Gewitter","a"],["Temperaturen unter zehn Grad","b"],["starker Regen im Westen","c"]],"a"],
["Teil 2 · Museum",6,"Wie wirkt das Münchner Stadtmuseum zu Beginn des Rundgangs?",[["sehr voll","a"],["teilweise geschlossen","b"],["eher leer","c"]],"c"],
["Teil 2 · Museum",6,"Welchen Bereich zeigt der Museumsführer den Besuchern?",[["alle Bereiche","a"],["die Hauptausstellung","b"],["nur Sonderausstellungen","c"]],"b"],
["Teil 2 · Museum",6,"Wo sollen sich die Teilnehmer später treffen?",[["am Eingang","a"],["bei der Garderobe","b"],["im Café","c"]],"a"],
["Teil 2 · Museum",6,"Welches Thema steht im Mittelpunkt der Ausstellung?",[["das Oktoberfest","a"],["bayerisches Essen","b"],["die Geschichte Münchens","c"]],"c"],
["Teil 2 · Museum",6,"Welchen Ort empfiehlt der Führer für einen Besuch?",[["ein Restaurant","a"],["ein Café","b"],["einen Biergarten","c"]],"c"],
["Teil 3 · Gespräch",7,"Beim Fest wurde der Geburtstag von Annas Mann gefeiert.",[["Richtig","richtig"],["Falsch","falsch"]],"falsch"],
["Teil 3 · Gespräch",7,"Nadia findet das Haus der Gastgeber besonders schön.",[["Richtig","richtig"],["Falsch","falsch"]],"richtig"],
["Teil 3 · Gespräch",7,"Nadia hat beruflich mit Fernsehen zu tun.",[["Richtig","richtig"],["Falsch","falsch"]],"falsch"],
["Teil 3 · Gespräch",7,"Das Essen beim Fest wird von Nadia positiv bewertet.",[["Richtig","richtig"],["Falsch","falsch"]],"richtig"],
["Teil 3 · Gespräch",7,"Nadia hat gemeinsam mit dem Musiker musiziert.",[["Richtig","richtig"],["Falsch","falsch"]],"falsch"],
["Teil 3 · Gespräch",7,"Nadia hat auch Jazzmusik gespielt.",[["Richtig","richtig"],["Falsch","falsch"]],"falsch"],
["Teil 3 · Gespräch",7,"Die Feier endete erst nach Mitternacht.",[["Richtig","richtig"],["Falsch","falsch"]],"richtig"],
["Teil 4 · Diskussion",8,"Wer vertritt die Aussage, dass kleine Kinder erst später soziales Verhalten lernen?",[["der Moderator","a"],["Dana Schneider","b"],["Florian Bader","c"]],"b"],
["Teil 4 · Diskussion",8,"Wer meint, dass beruflicher Erfolg ständige Arbeit voraussetzt?",[["der Moderator","a"],["Dana Schneider","b"],["Florian Bader","c"]],"c"],
["Teil 4 · Diskussion",8,"Wer sagt, dass Beruf und Kinder miteinander vereinbar sind?",[["der Moderator","a"],["Dana Schneider","b"],["Florian Bader","c"]],"c"],
["Teil 4 · Diskussion",8,"Wer erklärt, dass Kinder in einer Krippe andere Erfahrungen als zu Hause machen?",[["der Moderator","a"],["Dana Schneider","b"],["Florian Bader","c"]],"a"],
["Teil 4 · Diskussion",8,"Wer spricht davon, dass Erzieherinnen mehrere Kinder gleichzeitig betreuen müssen?",[["der Moderator","a"],["Dana Schneider","b"],["Florian Bader","c"]],"b"],
["Teil 4 · Diskussion",8,"Wer findet es wichtig, dass Kinder sich auch selbst beschäftigen können?",[["der Moderator","a"],["Dana Schneider","b"],["Florian Bader","c"]],"c"],
["Teil 4 · Diskussion",8,"Wer erwähnt finanzielle Probleme mancher Kindertagesstätten?",[["der Moderator","a"],["Dana Schneider","b"],["Florian Bader","c"]],"c"],
["Teil 4 · Diskussion",8,"Wer betont, dass Kinder auch für Familien mit wenig Geld möglich sein sollen?",[["der Moderator","a"],["Dana Schneider","b"],["Florian Bader","c"]],"b"]
];

var L=[
{p:1,title:"Alltagsgeschichte",text:"Mara bemerkte am Nachmittag, dass ihr Rucksack fehlte. Sie war am Morgen mit dem Bus zur Arbeit gefahren und hatte ihn später im Büro nicht mehr gesehen. Ein Kollege erinnerte sie daran, dass sie ihn während der Mittagspause im kleinen Café neben dem Büro abgestellt hatte. Dort fand die Besitzerin den Rucksack und bewahrte ihn hinter der Theke auf. Mara war erleichtert, denn ihr Laptop und ihre Unterlagen waren noch vollständig.",qs:[
["Mara merkte den Verlust erst später am Tag.",[["Richtig","r"],["Falsch","f"]],"r"],["Mara war mit dem Zug zur Arbeit gefahren.",[["Richtig","r"],["Falsch","f"]],"f"],["Ein Kollege half ihr, sich an das Café zu erinnern.",[["Richtig","r"],["Falsch","f"]],"r"],["Der Rucksack wurde im Café gefunden.",[["Richtig","r"],["Falsch","f"]],"r"],["Im Rucksack fehlte der Laptop.",[["Richtig","r"],["Falsch","f"]],"f"],["Die Besitzerin des Cafés hatte den Rucksack aufgehoben.",[["Richtig","r"],["Falsch","f"]],"r"]
]},
{p:2,title:"Nachhaltige Energie",text:"Die kleine Gemeinde Sonnenfeld hat ihre alte Heizungsanlage ersetzt. Auf mehreren öffentlichen Gebäuden wurden Solarmodule installiert. Zusätzlich nutzt die Gemeinde eine Anlage, die aus organischen Resten Wärme erzeugt. Ein Teil der Energie wird selbst verbraucht, überschüssiger Strom wird ins Netz eingespeist. Die Gemeinde möchte damit langfristig Kosten senken und weniger fossile Brennstoffe benötigen. Für die Bewohner wurden außerdem Informationsabende organisiert.",qs:[
["Was ist das Hauptthema des Textes?",[["ein neues Wohngebiet","a"],["Energieversorgung einer Gemeinde","b"],["ein Schulprojekt","c"]],"b"],["Was wurde auf öffentlichen Gebäuden installiert?",[["Solarmodule","a"],["Windräder","b"],["neue Fenster","c"]],"a"],["Was passiert mit überschüssigem Strom?",[["Er wird gespeichert und nie verwendet.","a"],["Er wird verkauft an die Nachbargemeinde.","b"],["Er wird ins Stromnetz eingespeist.","c"]],"c"],["Welches Ziel verfolgt die Gemeinde?",[["mehr fossile Brennstoffe zu nutzen","a"],["Kosten und fossile Energie zu reduzieren","b"],["die Informationsabende abzuschaffen","c"]],"b"],["Für wen gibt es Informationsabende?",[["für Bewohner","a"],["nur für Touristen","b"],["nur für Techniker","c"]],"a"],["Die Gemeinde nutzt ausschließlich eine einzige Energiequelle.",[["Richtig","r"],["Falsch","f"]],"f"]
]},
{p:3,title:"Anzeige und Informationen",text:"Stadtbibliothek Nord – Neue Öffnungszeiten: Montag bis Freitag 9–19 Uhr, Samstag 10–15 Uhr. Die Rückgabe von Medien ist auch außerhalb der Öffnungszeiten über den Automaten neben dem Haupteingang möglich. Für neue Nutzer gibt es jeden ersten Mittwoch im Monat eine kurze Einführung. Die Teilnahme ist kostenlos, eine Anmeldung ist nicht nötig.",qs:[
["Wann ist die Bibliothek am Samstag geöffnet?",[["9–12 Uhr","a"],["10–15 Uhr","b"],["12–19 Uhr","c"]],"b"],["Wo können Medien außerhalb der Öffnungszeiten zurückgegeben werden?",[["am Haupteingang","a"],["über einen Automaten","b"],["im Lesesaal","c"]],"b"],["Wann findet die Einführung statt?",[["jeden ersten Mittwoch","a"],["jeden Montag","b"],["jeden letzten Samstag","c"]],"a"],["Was kostet die Einführung?",[["nichts","a"],["fünf Euro","b"],["die normale Jahresgebühr","c"]],"a"],["Muss man sich für die Einführung anmelden?",[["Ja, eine Woche vorher.","a"],["Nein.","b"],["Nur telefonisch.","c"]],"b"],["Die Rückgabe außerhalb der Öffnungszeiten ist nicht möglich.",[["Richtig","r"],["Falsch","f"]],"f"],["Die Bibliothek öffnet unter der Woche um neun Uhr.",[["Richtig","r"],["Falsch","f"]],"r"]
]},
{p:4,title:"Meinung",text:"Viele Menschen arbeiten heute teilweise von zu Hause. Für Anna bedeutet das weniger Zeit im Berufsverkehr und mehr Ruhe am Morgen. Sie findet jedoch wichtig, regelmäßig ins Büro zu kommen, weil spontane Gespräche mit Kollegen dort leichter entstehen. Ihr Kollege Daniel arbeitet lieber fast vollständig zu Hause. Er sagt, dass er sich dort besser konzentrieren kann. Beide sind sich einig, dass klare Absprachen im Team notwendig sind.",qs:[
["Warum gefällt Anna das Arbeiten zu Hause?",[["Sie hat keinen Arbeitsplatz im Büro.","a"],["Sie spart Zeit auf dem Arbeitsweg.","b"],["Sie möchte weniger mit Kollegen sprechen.","c"]],"b"],["Was vermisst Anna zu Hause?",[["spontane Gespräche mit Kollegen","a"],["Ruhe am Morgen","b"],["Zeit im Berufsverkehr","c"]],"a"],["Warum arbeitet Daniel gern zu Hause?",[["Er kann sich besser konzentrieren.","a"],["Er hat dort mehr Kollegen.","b"],["Er muss keine Aufgaben erledigen.","c"]],"a"],["Worüber sind beide einer Meinung?",[["Teams brauchen klare Absprachen.","a"],["Alle sollten im Büro arbeiten.","b"],["Homeoffice ist immer besser.","c"]],"a"],["Anna arbeitet ausschließlich von zu Hause.",[["Richtig","r"],["Falsch","f"]],"f"],["Daniel bevorzugt einen großen Arbeitsplatz im Büro.",[["Richtig","r"],["Falsch","f"]],"f"],["Beide sehen sowohl Vorteile als auch Herausforderungen beim Arbeiten zu Hause.",[["Richtig","r"],["Falsch","f"]],"r"]
]},
{p:5,title:"Kurze Mitteilungen",text:"A: Wegen einer technischen Störung beginnt der Kurs heute erst um 18 Uhr. B: Der Termin beim Zahnarzt wurde auf Dienstag um 11 Uhr verschoben. C: Das Paket kann ab morgen in der Filiale am Bahnhof abgeholt werden. D: Der Elternabend findet nicht im Klassenzimmer, sondern in der Aula statt.",qs:[
["Wann beginnt der Kurs?",[["17 Uhr","a"],["18 Uhr","b"],["19 Uhr","c"]],"b"],["Wann ist der neue Zahnarzttermin?",[["Montag 11 Uhr","a"],["Dienstag 11 Uhr","b"],["Dienstag 12 Uhr","c"]],"b"],["Wo kann das Paket abgeholt werden?",[["am Bahnhof","a"],["bei der Post zu Hause","b"],["im Kurszentrum","c"]],"a"],["Wo findet der Elternabend statt?",[["im Klassenzimmer","a"],["in der Aula","b"],["im Büro","c"]],"b"]
]}
];

var app=document.getElementById("app");
var error=document.getElementById("error");
var state={module:null,items:[],idx:0,answers:{},timer:null,start:0,mode:"exam",part:null};

function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(m){return({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[m]})}
function load(k,d){try{var x=localStorage.getItem(k);return x===null?d:JSON.parse(x)}catch(e){return d}}
function save(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
function hist(){return load("b1_history",[])}
function stop(){if(state.timer){clearInterval(state.timer);state.timer=null}}
function fmt(s){return Math.floor(s/60).toString().padStart(2,"0")+":"+Math.floor(s%60).toString().padStart(2,"0")}
function label(v){return({a:"A",b:"B",c:"C",r:"Richtig",f:"Falsch",richtig:"Richtig",falsch:"Falsch"}[v]||"keine Antwort")}
function top(t,sub){return '<div class="top"><button id="back">←</button><div class="brand">'+esc(t)+'<small>'+esc(sub||"")+'</small></div><button id="home">⌂</button></div>'}
function bindTop(){document.getElementById("back").onclick=home;document.getElementById("home").onclick=home}

function home(){
 stop();
 var h=hist(), last=h.length?h[0]:null;
 app.innerHTML='<div class="wrap"><section class="card hero"><div class="emoji">🇩🇪</div><h1>Deutsch B1</h1><p>Hören & Lesen Trainer – kompakt und direkt im Browser.</p><div class="pillrow"><span class="pill">🎧 Hören · 30 Aufgaben · 40 Min.</span><span class="pill">📖 Lesen · 30 Aufgaben · 65 Min.</span></div></section><div class="grid"><button class="btn" id="goH">🎧 HÖREN</button><button class="btn secondary" id="goL">📖 LESEN</button></div><div class="section">Werkzeuge</div><div class="grid"><button class="btn secondary" id="trH">🎯 Hören Training</button><button class="btn secondary" id="trL">🎯 Lesen Training</button><button class="btn secondary" id="res">📊 Ergebnisse</button><button class="btn secondary" id="notes">📝 Notizen</button></div><div class="section">Letztes Ergebnis</div><div class="card">'+(last?esc(last.module)+" · "+last.score+"/"+last.total:"Noch keine Versuche.")+'</div><div class="notice">Hören: Audio vom Goethe-Institut. Fragen und Antworten hier sind eigene Formulierungen.</div></div>';
 document.getElementById("goH").onclick=function(){startH()};
 document.getElementById("goL").onclick=function(){startL()};
 document.getElementById("trH").onclick=function(){training("Hören")};
 document.getElementById("trL").onclick=function(){training("Lesen")};
 document.getElementById("res").onclick=results;
 document.getElementById("notes").onclick=notes;
}

function startH(part){
 var items=part?H.filter(function(x){return x[0].indexOf("Teil "+part+" ·")===0}):H.slice();
 state={module:"Hören",items:items,idx:0,answers:{},timer:null,start:Date.now(),mode:part?"training":"exam",part:part||null};run()
}
function startL(part){
 var items=[];
 if(part){var p=L.filter(function(x){return x.p===part})[0];if(p)p.qs.forEach(function(q,i){items.push({p:p,qi:i,q:q})})}
 else L.forEach(function(p){p.qs.forEach(function(q,i){items.push({p:p,qi:i,q:q})})});
 state={module:"Lesen",items:items,idx:0,answers:{},timer:null,start:Date.now(),mode:part?"training":"exam",part:part||null};run()
}
function run(){
 stop();
 var limit=state.module==="Hören"?2400:3900;
 state.start=Date.now();
 state.timer=setInterval(function(){var left=Math.max(0,limit-Math.floor((Date.now()-state.start)/1000));var el=document.getElementById("timer");if(el)el.textContent=fmt(left);if(left<=0)finish()},500);
 renderQ()
}
function renderQ(){
 var it=state.items[state.idx],n=state.idx+1,total=state.items.length,q,opts,title,audio="";
 if(state.module==="Hören"){q=it[2];opts=it[3];title=it[0];audio='<div class="audio"><strong>🎧 '+esc(title)+'</strong><small>Originale Hörsequenz · Goethe-Institut</small><audio controls preload="none" src="'+AUDIO[it[1]]+'"></audio></div>'}
 else{q=it.q[0];opts=it.q[1];title="Teil "+it.p.p+" · "+it.p.title}
 var chosen=state.answers[n]||"";
 app.innerHTML=top(state.module,state.mode==="exam"?"Prüfung":"Training")+'<div class="wrap"><div class="card"><div style="display:flex;justify-content:space-between"><span class="qnum">Aufgabe '+n+" / "+total+'</span><span class="timer" id="timer">--:--</span></div><div class="progress"><i style="width:'+(n/total*100)+'%"></i></div><div class="muted">'+esc(title)+'</div>'+(state.module==="Lesen"?'<div class="textblock"><b>'+esc(it.p.title)+'</b><p>'+esc(it.p.text)+'</p></div>':"")+audio+'<div class="qtext">'+esc(q)+'</div><div class="choice-title">Antwort auswählen:</div><div id="options"></div><div class="navrow"><button class="btn gray" id="prev" '+(n===1?"disabled":"")+'>← Zurück</button><button class="btn" id="next">'+(n===total?"Auswertung":"Weiter →")+'</button></div></div></div>';
 var box=document.getElementById("options");
 opts.forEach(function(o){var lab=document.createElement("label");lab.className="option"+(chosen===o[1]?" selected":"");lab.innerHTML='<input type="radio" name="answer" value="'+esc(o[1])+'" '+(chosen===o[1]?"checked":"")+'><span>'+esc(o[0])+"</span>";lab.querySelector("input").onchange=function(e){state.answers[n]=e.target.value;Array.prototype.forEach.call(box.querySelectorAll(".option"),function(x){x.classList.remove("selected")});lab.classList.add("selected")};box.appendChild(lab)});
 bindTop();
 document.getElementById("prev").onclick=function(){if(state.idx>0){state.idx--;renderQ()}};
 document.getElementById("next").onclick=function(){if(n===total)finish();else{state.idx++;renderQ()}};
 var limit=state.module==="Hören"?2400:3900;document.getElementById("timer").textContent=fmt(Math.max(0,limit-Math.floor((Date.now()-state.start)/1000)))
}
function finish(){
 stop();var score=0,details=[];
 state.items.forEach(function(it,i){var key=state.module==="Hören"?it[4]:it.q[2],q=state.module==="Hören"?it[2]:it.q[0],ans=state.answers[i+1]||null;if(ans===key)score++;details.push({n:i+1,q:q,ans:ans,key:key})});
 var rec={module:state.module,score:score,total:state.items.length,date:Date.now(),details:details,mode:state.mode,part:state.part};var h=hist();h.unshift(rec);save("b1_history",h.slice(0,50));analysis(rec)
}
function analysis(rec){
 app.innerHTML=top("📊 Ergebnis",rec.module)+'<div class="wrap"><section class="card hero"><div class="resultBig">'+rec.score+" / "+rec.total+'</div><p>'+Math.round(rec.score/rec.total*100)+"% · "+esc(rec.module)+'</p></section>'+rec.details.map(function(d){return '<div class="card"><div class="qnum">Aufgabe '+d.n+'</div><div style="margin:6px 0 8px;font-weight:700">'+esc(d.q)+'</div><div class="answerbox">Deine Antwort: <b>'+esc(label(d.ans))+'</b><br>Richtige Antwort: <b>'+esc(label(d.key))+'</b><br><span class="'+(d.ans===d.key?"correct":"wrong")+'">'+(d.ans===d.key?"✓ Richtig":"✕ Falsch")+"</span></div></div>"}).join("")+'<div class="grid"><button class="btn" id="again">🔄 Noch einmal</button><button class="btn secondary" id="rh">📊 Verlauf</button></div></div>';
 bindTop();document.getElementById("again").onclick=function(){rec.module==="Hören"?startH(rec.part):startL(rec.part)};document.getElementById("rh").onclick=results
}
function training(module){
 stop();var count=module==="Hören"?4:5;
 app.innerHTML=top("🎯 "+module,"Teil auswählen")+'<div class="wrap">'+Array.from({length:count},function(_,i){return '<button class="btn secondary part" data-p="'+(i+1)+'" style="margin-bottom:8px;text-align:left">Teil '+(i+1)+" · Training →</button>"}).join("")+'<button class="btn gray" id="full">Kompletter Test</button></div>';
 bindTop();Array.prototype.forEach.call(document.querySelectorAll(".part"),function(b){b.onclick=function(){module==="Hören"?startH(Number(b.dataset.p)):startL(Number(b.dataset.p))}});document.getElementById("full").onclick=function(){module==="Hören"?startH():startL()}
}
function results(){
 stop();var h=hist();
 app.innerHTML=top("📊 Ergebnisse","Gespeicherte Versuche")+'<div class="wrap">'+(h.length?h.map(function(x){return '<div class="hist"><div><b>'+esc(x.module)+'</b><br><span class="muted">'+new Date(x.date).toLocaleString("de-DE")+'</span></div><div><b>'+x.score+"/"+x.total+'</b><br><span class="tag">'+Math.round(x.score/x.total*100)+"%</span></div></div>"}).join(""):'<div class="card">Noch keine Ergebnisse.</div>')+(h.length?'<button class="btn" id="clear">Verlauf löschen</button>':"")+"</div>";
 bindTop();var c=document.getElementById("clear");if(c)c.onclick=function(){save("b1_history",[]);results()}
}
function notes(){
 stop();var n=load("b1_notes","");
 app.innerHTML=top("📝 Notizen","Auf diesem Gerät gespeichert")+'<div class="wrap"><div class="card"><textarea class="textarea" id="nt">'+esc(n)+'</textarea><button class="btn" id="saveN" style="margin-top:8px">Speichern</button></div></div>';
 bindTop();document.getElementById("saveN").onclick=function(){save("b1_notes",document.getElementById("nt").value);alert("Gespeichert ✓")}
}

window.onerror=function(msg,src,line){error.style.display="block";error.innerHTML="<b>JavaScript-Fehler</b><br>"+esc(msg)+"<br><small>Zeile "+line+"</small>"};
document.getElementById("hBtn").onclick=function(){startH()};
document.getElementById("lBtn").onclick=function(){startL()};
home();
})();