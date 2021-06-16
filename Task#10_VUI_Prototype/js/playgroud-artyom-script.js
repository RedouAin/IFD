window.onload=function(){
document.querySelector("#meinId").addEventListener("click", function () {
    var artyom = new Artyom();
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
        }
    });
    var noCommandMatched = "NOT_COMMAND_MATCHED";
    artyom.when(noCommandMatched,function(){
    artyom.say("Sorry, das kann ich dir leider nicht beantworten. Aber ich kann dir Informationen zu den  verschiedenen Energiegewinnungsmethoden der einzelnen Bundesländer geben. Stelle dafür eine der unten stehenden Fragen.");
    document.getElementById('sagen').innerHTML = "Sorry, das kann ich dir leider nicht beantworten. Aber ich kann dir Informationen zu den  verschiedenen Energiegewinnungsmethoden der einzelnen Bundesländer geben. Stelle dafür eine der unten stehenden Fragen.";
});
artyom.addCommands([
//Energiegewinnungsmethoden
{
    indexes: ["Hey Buddy, kannst du mir Informationen zu folgender Frage geben?", "Frage", "Informationen"],
    action: function(i){
        document.getElementById('sagen').innerHTML = "Na klar, was ist dein Anliegen?";
        artyom.say("Na klar, was ist dein Anliegen");
    }
},
  {
      indexes: ["Hey Buddy, welche Energiegewinnungsmethoden gibt es alles?","Energie Gewinnungsmethoden", "Energiegewinnung Methoden", "Hey Buddy, welche Energiegewinnungs gibt es?"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Es gibt folgende Energiemethoden: Wind, Wasser, Atom, Kohle, Solar, Geothermal, Recycling, Biomasse und Öl. Möchtest du wissen, welche davon fossil und welche erneuerbar sind?";
          artyom.say("Es gibt folgende Energiemethoden: Wind, Wasser, Atom, Kohle, Solar, Geothermal, Recycling, Biomasse und Öl. Möchtest du wissen, welche davon fossil und welche erneuerbar sind?");
      }
  },
  {
      indexes: ["Ja, möchte ich", "Ja"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Als fossile Energien zählen Atomkraftwerke, Ölpumpen und Kohlekraftwerke. Erneuerbare Energien sind Windkraftwerke, Solarpanels, Wasserkraftwerke, die Geothermie, Recycling und Biomasse";
          artyom.say("Als fossile Energien zählen Atomkraftwerke, Ölpumpen und Kohlekraftwerke. Erneuerbare Energien sind Windkraftwerke, Solarpanels, Wasserkraftwerke, die Geothermie, Recycling und Biomasse");
      }
  },
  //schmutzigsten
  {
      indexes: ["Hey Buddy, welche sind die schmutzigsten Bundesländer?", "schmutzigsten"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Die schmutzigsten Bundesländer sind Sachsen, Niedersachsen, Nordrhein-Westfalen und Rheinland-Pfalz. Willst du wissen warum?";
          artyom.say("Die schmutzigsten Bundesländer sind Sachsen, Niedersachsen, Nordrhein-Westfalen und Rheinland-Pfalz. Willst du wissen warum?");
      }
  },
  {
      indexes: ["Das möchte ich wissen", "Wissen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Das liegt daran, dass diese Bundesländer im Vergleich zu viele konventionelle Methoden der Energiegewinnung nutzen und gleichzeitig zu wenig erneuerbare Energiemethoden wie Windkraft nutzen. Eine visuelle Darstellung findest du hier, unter Filter 'Conventional': https://f8lqu3.axshare.com/#id=ysp6dm&p=page_1&sc=2";
          artyom.say("Das liegt daran, dass diese Bundesländer im Vergleich zu viele konventionelle Methoden der Energiegewinnung nutzen und gleichzeitig zu wenig erneuerbare Energiemethoden wie Windkraft nutzen. Eine visuelle Darstellung findest du hier, unter Filter 'Conventional': https://f8lqu3.axshare.com/#id=ysp6dm&p=page_1&sc=2");
      }
  },
  //saubersten
  {
      indexes: ["Hey Buddy, welche sind die saubersten Bundesländer?", "saubersten"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Die saubersten Bundesländer sind Berlin, Schleswig-Holstein, Brandenburg, Bayern, Baden-Würrtemberg und Saarland. Willst du wissen warum?";
          artyom.say("Die saubersten Bundesländer sind Berlin, Schleswig-Holstein, Brandenburg, Bayern, Baden-Würrtemberg und Saarland. Willst du wissen warum?");
      }
  },
  {
      indexes: ["Sehr gerne", "sehr"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Das liegt daran das diese Bundesländer zu einem sehr großen Teil erneuerbare Energien benutzen und nur wenige bis garkeine konventionellen bzw. fossilen. Eine visuelle Darstellung findest du hier, unter Filter 'Sustainable': https://f8lqu3.axshare.com/#id=ysp6dm&p=page_1&sc=2.";
          artyom.say("Das liegt daran das diese Bundesländer zu einem sehrgroßen Teil erneuerbare Energien benutzen und nur wenige bis garkeine konventionellen bzw. fossilen. Eine visuelle Darstellung findest du hier, unter Filter 'Sustainable': https://f8lqu3.axshare.com/#id=ysp6dm&p=page_1&sc=2.");
      }
  },
  //Bundesländer Methoden
  {
      indexes: ["Hey Buddy, mit welchen Methoden gewinnt Bayern seine Energie?", "mit welchen Methoden gewinnt Bayern"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Bayern gewinnt seine Energie durch Solarpanel zu 80%, durch Windenergie zu 80% und durch Atomkraftwerke zu 50%";
          artyom.say("Bayern gewinnt seine Energie durch Solarpanel zu 80%, durch Windenergie zu 80% und durch Atomkraftwerke zu 50%");
      }
  },
  {
      indexes: ["Hey Buddy, mit welchen Methoden gewinnt Baden-Württemberg seine Energie?", "mit welchen Methoden gewinnt Baden-Württemberg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Baden-Würrtemberg gewinnt seine Energie durch Recycling zu 60%, durch Windenergie zu 80% und durch Biomasse zu 80%";
          artyom.say("Baden-Würrtemberg gewinnt seine Energie durch Recycling zu 60%, durch Windenergie zu 80% und durch Biomasse zu 80%");
      }
  },
  {
      indexes: ["Hey Buddy, mit welchen Methoden gewinnt Saarland seine Energie?", "mit welchen Methoden gewinnt Saarland"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Saarland gewinnt seine Energie durch Solarpanels zu 90%, durch Atomkraftwerke zu 20% und durch Biomasse zu 80%";
          artyom.say("Baden-Würrtemberg gewinnt seine Energie durch Recycling zu 60%, durch Windenergie zu 80% und durch Biomasse zu 80%");
      }
  },
  {
      indexes: ["Hey Buddy, mit welchen Methoden gewinnt Rheinland-Pfalz seine Energie?", "mit welchen Methoden gewinnt Rheinland-Pfalz"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Rheinland-Pfalz gewinnt seine Energie durch Öl zu 50%, durch Atomkraftwerke zu 30% und durch Wasserkraftwerke zu 70%";
          artyom.say("Rheinland-Pfalz gewinnt seine Energie durch Öl zu 50%, durch Atomkraftwerke zu 30% und durch Wasserkraftwerke zu 70%");
      }
  },
  {
      indexes: ["Hey Buddy, mit welchen Methoden gewinnt Hessen seine Energie?", "mit welchen Methoden gewinnt Hessen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Hessen gewinnt seine Energie durch Biomasse zu 80%, durch Atomkraftwerke zu 10% und durch Geothermie zu 70%";
          artyom.say("Hessen gewinnt seine Energie durch Biomasse zu 80%, durch Atomkraftwerke zu 10% und durch Geothermie zu 70%");
      }
  },
  {
      indexes: ["Hey Buddy, mit welchen Methoden gewinnt Thüringen seine Energie?", "mit welchen Methoden gewinnt Thüringen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Thüringen gewinnt seine Energie durch Solarpanels zu 50%, durch Windkraftwerke zu 80% und durch Atomkraftwerke zu 10%";
          artyom.say("Thüringen gewinnt seine Energie durch Solarpanels zu 50%, durch Windkraftwerke zu 80% und durch Atomkraftwerke zu 10%");
      }
  },
  {
      indexes: ["Hey Buddy, mit welchen Methoden gewinnt Sachsen seine Energie?", "mit welchen Methoden gewinnt Sachsen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Sachsen gewinnt seine Energie durch Geothermie zu 50%, durch Öl zu 90% und durch Atomkraftwerke zu 90%";
          artyom.say("Sachsen gewinnt seine Energie durch Geothermie zu 50%, durch Öl zu 90% und durch Atomkraftwerke zu 90%");
      }
  },
  {
      indexes: ["Hey Buddy, mit welchen Methoden gewinnt Brandenburg seine Energie?", "mit welchen Methoden gewinnt Brandenburg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Brandenburg gewinnt seine Energie durch Solarpanels zu 50%, durch Windkraftwerke zu 80% und durch Recycling zu 80%";
          artyom.say("Brandenburg gewinnt seine Energie durch Solarpanels zu 50%, durch Windkraftwerke zu 80% und durch Recycling zu 80%");
      }
  },
  {
      indexes: ["Hey Buddy, mit welchen Methoden gewinnt Berlin seine Energie?", "mit welchen Methoden gewinnt Berlin"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Berlin gewinnt seine Energie durch Solarpanels zu 100%, durch Windkraftwerke zu 100% und durch Recycling zu 100%";
          artyom.say("Berlin gewinnt seine Energie durch Solarpanels zu 100%, durch Windkraftwerke zu 100% und durch Recycling zu 100%");
      }
  },
  {
      indexes: ["Hey Buddy, mit welchen Methoden gewinnt Mecklenburg-Vorpommern seine Energie?", "mit welchen Methoden gewinnt Mecklenburg-Vorpommern"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Mecklenburg-Vorpommern gewinnt seine Energie durch Wasserkraftwerke zu 70%, durch Atomkraftwerke zu 10% und durch Öl zu 70%";
          artyom.say("Mecklenburg-Vorpommern gewinnt seine Energie durch Wasserkraftwerke zu 70%, durch Atomkraftwerke zu 10% und durch Öl zu 70%");
      }
  },
  {
      indexes: ["Hey Buddy, mit welchen Methoden gewinnt Schleswig-Holstein seine Energie?", "mit welchen Methoden gewinnt Schleswig-Holstein"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Schleswig-Holstein gewinnt seine Energie durch Biomasse zu 50%, durch Wasserkraftwerke zu 80% und durch Geothermie zu 70%";
          artyom.say("Schleswig-Holstein gewinnt seine Energie durch Biomasse zu 50%, durch Wasserkraftwerke zu 80% und durch Geothermie zu 70%");
      }
  },
  {
      indexes: ["Hey Buddy, mit welchen Methoden gewinnt Hamburg seine Energie?", "mit welchen Methoden gewinnt Hamburg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Hamburg gewinnt seine Energie durch Biomasse zu 10%, durch Wasserkraftwerke zu 100% und durch Windkraftwerke zu 80%";
          artyom.say("Hamburg gewinnt seine Energie durch Biomasse zu 10%, durch Wasserkraftwerke zu 100% und durch Windkraftwerke zu 80%");
      }
  },
  {
      indexes: ["Hey Buddy, mit welchen Methoden gewinnt Niedersachsen seine Energie?", "mit welchen Methoden gewinnt Niedersachsen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Niedersachsen gewinnt seine Energie durch Kohlekraftwerke zu 50%, durch Solarpanels zu 50% und durch Windkraftwerke zu 10%";
          artyom.say("Niedersachsen gewinnt seine Energie durch Kohlekraftwerke zu 50%, durch Solarpanels zu 50% und durch Windkraftwerke zu 10%");
      }
  },
  {
      indexes: ["Hey Buddy, mit welchen Methoden gewinnt Bremen seine Energie?", "mit welchen Methoden gewinnt Bremen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Bremen gewinnt seine Energie durch Recycling zu 10%, durch Solarpanels zu 80% und durch Atomkraftwerke zu 70%";
          artyom.say("Bremen gewinnt seine Energie durch Recycling zu 10%, durch Solarpanels zu 80% und durch Atomkraftwerke zu 70%");
      }
  },
  {
      indexes: ["Hey Buddy, mit welchen Methoden gewinnt Nordrhein-Westfalen seine Energie?", "mit welchen Methoden gewinnt Nordrhein-Westfalen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Nordrhein-Westfalen gewinnt seine Energie durch Kohlekraftwerke zu 100%, durch Öl zu 90% und durch Atomkraftwerke zu 100%";
          artyom.say("Nordrhein-Westfalen gewinnt seine Energie durch Kohlekraftwerke zu 100%, durch Öl zu 90% und durch Atomkraftwerke zu 100%");
      }
  },
  {
      indexes: ["Hey Buddy, mit welchen Methoden gewinnt Sachsen-Anhalt seine Energie?", "mit welchen Methoden gewinnt Sachsen-Anhalt"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Sachsen-Anhalt gewinnt seine Energie durch Solarpanels zu 30%, durch Recycling zu 50% und durch Atomkraftwerke zu 30%";
          artyom.say("Nordrhein-Westfalen gewinnt seine Energie durch Kohlekraftwerke zu 100%, durch Öl zu 90% und durch Atomkraftwerke zu 100%");
      }
  },
  //meiste wenigste
  {
      indexes: ["Hey Buddy, welches Bundesland benutzt am meisten Solarenergie?", "meiste Solarenergie"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Die meiste Energie aus Solarpanels ziehen Bayern (80%), Saarland (90%), Bremen (80%) und Berlin (100%).";
          artyom.say("Die meiste Energie aus Solarpanels ziehen Bayern (80%), Saarland (90%), Bremen (80%) und Berlin (100%).");
      }
  },
  {
      indexes: ["Hey Buddy, welches Bundesland benutzt am wenigsten Solarenergie?", "wenigste Solarenergie"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Das sind Thüringen mit 60%, SachsenAnhalt mit 30% und Niedersachsen mit 50%";
          artyom.say("Das sind Thüringen mit 60%, SachsenAnhalt mit 30% und Niedersachsen mit 50%.");
      }
  },
  {
      indexes: ["Hey Buddy, welches Bundesland benutzt am meisten Öl?", "meistes Öl"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Die meiste Energie aus Öl ziehen Sachsen (90%), Mecklenburg-Vorpommern (60%) und Nordrhein-Westfalen (90%).";
          artyom.say("Die meiste Energie aus Öl ziehen Sachsen (90%), Mecklenburg-Vorpommern (60%) und Nordrhein-Westfalen  (90%).");
      }
  },
  {
      indexes: ["Hey Buddy, welches Bundesland benutzt am wenigsten Öl?", "wenigsten Öl"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Das sind Rheinland-Pfalz mit 50% und Mecklenburg-Vorpommern mit 60%.";
          artyom.say("Das sind Rheinland-Pfalz mit 50% und Mecklenburg-Vorpommern mit 60%");
      }
  },
  {
      indexes: ["Hey Buddy, welches Bundesland benutzt am meisten Atomkraftwerke?", "meiste Atomkraftwerke"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Die meiste Energie aus Atomkraftwerken ziehen Bayern (60%), Sachsen (80%), Sachsen-Anhalt (40%), Bremen (70%)  und Nordrhein-Westfalen (100%).";
          artyom.say("Die meiste Energie aus Atomkraftwerken ziehen Bayern (60%), Rheinland-Pfalz (40%), Sachsen (80%), Sachsen-Anhalt (40%), Bremen (70%)  und Nordrhein-Westfalen (100%).");
      }
  },
  {
      indexes: ["Hey Buddy, welches Bundesland benutzt am wenigsten Atomkraftwerke?", "wenigste Atomkraftwerke"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Das sind Saarland mit 10%,  Hessen mit 10%,  Thüringen mit 20%, Mecklenburg-Vorpommern mit 10%, Rheinland-Pfalz mit 40% und Sachsen-Anhalt mit 40%.";
          artyom.say("Das sind Saarland mit 10%,  Hessen mit 10%,  Thüringen mit 20%, Mecklenburg-Vorpommern mit 10%, Rheinland-Pfalz mit 40% und Sachsen-Anhalt mit 40%.");
      }
  },
  {
      indexes: ["Hey Buddy, welches Bundesland benutzt am meisten Windkraftwerke?", "meiste Windkraftwerke"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Die meiste Energie aus Windkraftwerke ziehen Bayern (80%), Baden-Württemberg (80%), Thüringen (70%), Brandenburg (70%), Berlin (100%) und Hamburg (70%).";
          artyom.say("Die meiste Energie aus Atomkraftwerken ziehen Bayern (80%), Baden-Württemberg (80%), Thüringen (70%), Brandenburg (70%), Berlin (100%) und Hamburg (70%).");
      }
  },
  {
      indexes: ["Hey Buddy, welches Bundesland benutzt am wenigsten Windkraftwerke?", "wenigste Windkraftwerke"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Das ist Niedersachsen mit 10%";
          artyom.say("Das ist Niedersachsen mit 10%");
      }
  },
  {
      indexes: ["Hey Buddy, welches Bundesland benutzt am meisten Geothermie?", "meiste Geothermie"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Die meiste Energie aus Geothermie ziehen Sachsen (50%) und  Schleswig-Holstein (60%)";
          artyom.say("Die meiste Energie aus Geothermie ziehen Sachsen (50%) und  Schleswig-Holstein (60%)");
      }
  },
  {
      indexes: ["Hey Buddy, welches Bundesland benutzt am wenigsten Geothermie?", "wenigste Geothermie"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Das ist Hessen mit 30%";
          artyom.say("Das ist Hessen mit 30%");
      }
  },
  {
      indexes: ["Hey Buddy, welches Bundesland benutzt am meisten Biomasse?", "meiste Biomasse"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Die meiste Energie aus Biomasse ziehen Baden-Württemberg (80%), Saarland (80%) und Hessen (90%)";
          artyom.say("Die meiste Energie aus Biomasse ziehen Baden-Württemberg (80%), Saarland (80%) und Hessen (90%)");
      }
  },
  {
      indexes: ["Hey Buddy, welches Bundesland benutzt am wenigste Biomasse?", "wenigste Biomasse"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Das ist Hamburg mit 10% und Schleswig-Holstein mit 50%";
          artyom.say("Das ist Hamburg mit 10% und Schleswig-Holstein mit 50%");
      }
  },
  {
      indexes: ["Hey Buddy, welches Bundesland benutzt am meisten Recycling?", "Recycelt am meisten"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Die meiste Energie aus Recycling ziehen Brandenburg (80%) und Berlin (100%)";
          artyom.say("Die meiste Energie aus Recycling ziehen Brandenburg (80%) und Berlin (100%)");
      }
  },
  {
      indexes: ["Hey Buddy, welches Bundesland benutzt am wenigsten Recycling?", "Recycelt am wenigsten"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Das ist Bremen mit 10% Sachsen-Anhalt mit 50% und Baden-Württemberg mit 60%";
          artyom.say("Das ist Bremen mit 10% Sachsen-Anhalt mit 50% und Baden-Württemberg mit 60%");
      }
  },
  {
      indexes: ["Hey Buddy, welches Bundesland benutzt am meisten Kohlekraftwerke?", "meisten Kohlekraftwerke"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Die meiste Energie aus Kohlekraftwerken ziehen Niedersachsen (70%) und Nordrhein-Westfalen (100%)";
          artyom.say("Die meiste Energie aus Kohlekraftwerken ziehen Niedersachsen (70%) und Nordrhein-Westfalen (100%)");
      }
  },
  {
      indexes: ["Hey Buddy, welches Bundesland benutzt am meisten Wasserkraftwerke?", "meiste Wasserkraftwerke"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Die meiste Energie aus Wasserkraftwerken ziehen Rheinland-Pfalz (70%), Mecklenburg-Vorpommern (70%), Schleswig-Holstein (80%) und Hamburg (100%)";
          artyom.say("Die meiste Energie aus Wasserkraftwerken ziehen Rheinland-Pfalz (70%), Mecklenburg-Vorpommern (70%), Schleswig-Holstein (80%) und Hamburg (100%)");
      }
  },
  //Bundesländer welche Methode
  {
      indexes: ["Hey Buddy, welche Bundesländer benutzen noch Atomkraftwerke zur Energiegewinnung", "Atomkraftwerk", "Atomenergie"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Aus Atomkraftwerke ziehen Bayern, Rheinland-Pfalz, Saarland, Sachsen, Thüringen, Hessen, Nordrhein-Westfalen, Sachsen-Anhalt,Bremen und Mecklenburg-Vorpommern ihre Energie";
          artyom.say("Aus Atomkraftwerke ziehen Bayern, Rheinland-Pfalz, Saarland, Sachsen, Thüringen, Hessen, Nordrhein-Westfalen, Sachsen-Anhalt, Bremen und Mecklenburg-Vorpommern ihre Energie");
      }
  },
  {
      indexes: ["Hey Buddy, welche Bundesländer benutzen noch Solarpanels zur Energiegewinnung", "Solarpanels", "Solarenergie"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Aus Solarpanels ziehen Bayern, Saarland, Thüringen, Hessen, Nordrhein-Westfalen, Sachsen-Anhalt, Brandenburg, Berlin, Niedersachsen und Bremen ihre Energie";
          artyom.say("Aus Solarpanels ziehen Bayern, Saarland, Thüringen, Hessen, Nordrhein-Westfalen, Sachsen-Anhalt, Brandenburg, Berlin, Niedersachsen und Bremen ihre Energie");
      }
  },
  {
      indexes: ["Hey Buddy, welche Bundesländer benutzen noch Wasserkraftwerke zur Energiegewinnung", "Wasserkraftwerke"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Aus Wasserkraftwerken ziehen Rheinland-Pfalz, Mecklenburg-Vorpommern, Schleswig-Holstein und Hamburg ihre Energie";
          artyom.say("Aus Wasserkraftwerken ziehen Rheinland-Pfalz, Mecklenburg-Vorpommern, Schleswig-Holstein und Hamburg ihre Energie");
      }
  },
  {
      indexes: ["Hey Buddy, welche Bundesländer benutzen noch Windkraftwerke zur Energiegewinnung", "Windkraftwerke", "Windenergie", "Windräder"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Aus Windkraftwerken ziehen Bayern, Baden-Württemberg, Thüringen, Brandenburg, Berlin, Niedersachsen und Hamburg ihre Energie";
          artyom.say("Aus Windkraftwerken ziehen Bayern, Baden-Württemberg, Thüringen, Brandenburg, Berlin, Niedersachsen und Hamburg ihre Energie");
      }
  },
  {
      indexes: ["Hey Buddy, welche Bundesländer benutzen noch Recycling zur Energiegewinnung", "Recycling", "Recyceln"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Aus Recycling ziehen Baden-Württemberg, Sachsen-Anhalt, Brandenburg, Berlin, und Bremen ihre Energie";
          artyom.say("Aus Recycling ziehen Baden-Württemberg, Sachsen-Anhalt, Brandenburg, Berlin, und Bremen ihre Energie");
      }
  },
  {
      indexes: ["Hey Buddy, welche Bundesländer benutzen noch Öl zur Energiegewinnung", "Öl", "Ölpumpen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Aus Öl ziehen Rheinland-Pfalz, Sachsen, Mecklenburg-Vorpommern und Nordrhein-Westfalen ihre Energie";
          artyom.say("Aus Öl ziehen Rheinland-Pfalz, Sachsen, Mecklenburg-Vorpommern und Nordrhein-Westfalen ihre Energie");
      }
  },
  {
      indexes: ["Hey Buddy, welche Bundesländer benutzen noch Biomasse zur Energiegewinnung", "Biomasse", "Biomüll"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Aus Biomasse ziehen Baden-Württemberg, Saarland, Hessen, Schleswig-Holstein und Hamburg ihre Energie";
          artyom.say("Aus Biomasse ziehen Baden-Württemberg, Saarland, Hessen, Schleswig-Holstein und Hamburg ihre Energie");
      }
  },
  {
      indexes: ["Hey Buddy, welche Bundesländer benutzen noch Kohlekraftwerke zur Energiegewinnung", "Kohle", "Kohleabbau", "Kohleenergie"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Aus Kohlekraftwerke ziehen Nordrhein-Westfalen und Niedersachsen ihre Energie";
          artyom.say("Aus Kohlekraftwerke ziehen Nordrhein-Westfalen und Niedersachsen ihre Energie");
      }
  },
  //Vergleich
  {
      indexes: ["Hey Buddy, vergleiche Saarland und Bayern?", "Vergleich Bayern und Saarland", "Vergleich Saarland und Bayern"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Bayern hat im Vergleich zu Saarland einen höheren Energiegewinn durch Atomkraftwerke (Bayern 50%, Saarland 20%). Im Bereich Solarenergie sind beide auf einem gleichen Niveau, jeweils 80%. Im Gegensatz zu Bayern gewinnt Saarland seine Energie noch aus Biomasse zu 80%, Bayern aus der Windkraft zu 80%.";
          artyom.say("Bayern hat im Vergleich zu Saarland einen höheren Energiegewinn durch Atomkraftwerke (Bayern 50%, Saarland 20%). Im Bereich Solarenergie sind beide auf einem gleichen Niveau, jeweils 80%. Im Gegensatz zu Bayern gewinnt Saarland seine Energie noch aus Biomasse zu 80%, Bayern aus der Windkraft zu 80%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Saarland und Baden-Württemberg?", "Vergleich Baden-Württemberg und Saarland", "Vergleich Saarland und Baden-Württemberg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Saarland hat im Vergleich zu Baden-Württemberg einen höheren Energiegewinn durch Atomkraftwerke (Baden-Württemberg 0%, Saarland 20%). Im Bereich Biomasse sind beide auf einem gleichen Niveau, jeweils 80%. Im Gegensatz zu Baden-Württemberg gewinnt Saarland seine Energie noch aus Solarpanels zu 80%, Baden-Württemberg aus der Windkraft zu 80% und aus Recycling zu 60%.";
          artyom.say("Saarland hat im Vergleich zu Baden-Württemberg einen höheren Energiegewinn durch Atomkraftwerke (Baden-Württemberg 0%, Saarland 30%). Im Bereich Biomasse sind beide auf einem gleichen Niveau, jeweils 80%. Im Gegensatz zu Baden-Württemberg gewinnt Saarland seine Energie noch aus Solarpanels zu 80%, Baden-Württemberg aus der Windkraft zu 80% und aus Recycling zu 60%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Saarland und Rheinland-Pfalz?", "Vergleich Rheinland-Pfalz und Saarland", "Vergleich Saarland und Rheinland-Pfalz"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Rheinland-Pfalz hat im Vergleich zu Saarland einen höheren Energiegewinn durch Atomkraftwerke (Rheinland-Pfalz 40%, Saarland 20%). Saarland gewinnt seine Energie mehr aus erneuerbaren Energien als Rheinland-Pfalz (Solarpanels zu 80% und Biomasse zu 70%). Im Gegensatz dazu gewinnt Rheinland-Pfalz seine Energie nur aus Wasserkraftwerken zu 70% und aus fossilen Brennstoffen wie Öl zu 50%.";
          artyom.say("Rheinland-Pfalz hat im Vergleich zu Saarland einen höheren Energiegewinn durch Atomkraftwerke (Rheinland-Pfalz 40%, Saarland 20%). Saarland gewinnt seine Energie mehr aus erneuerbaren Energien als Rheinland-Pfalz (Solarpanels zu 80% und Biomasse zu 70%). Im Gegensatz dazu gewinnt Rheinland-Pfalz seine Energie nur aus Wasserkraftwerken zu 70% und aus fossilen Brennstoffen wie Öl zu 50%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Saarland und Sachsen-Anhalt?", "Vergleich Sachsen-Anhalt und Saarland", "Vergleich Saarland und Sachsen-Anhalt"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Sachsen-Anhalt hat im Vergleich zu Saarland einen höheren Energiegewinn durch Atomkraftwerke (Sachsen-Anhalt 30%, Saarland 20%). Saarland gewinnt seine Energie mehr aus erneuerbaren Energien als Rheinland-Pfalz (Solarpanels zu 80% und Biomasse zu 70%). Im Gegensatz dazu gewinnt Sachsen-Anhalt seine Energie nur aus Solarpanels zu 30% und aus Recycling zu 50%.";
          artyom.say("Sachsen-Anhalt hat im Vergleich zu Saarland einen höheren Energiegewinn durch Atomkraftwerke (Sachsen-Anhalt 30%, Saarland 20%). Saarland gewinnt seine Energie mehr aus erneuerbaren Energien als Rheinland-Pfalz (Solarpanels zu 80% und Biomasse zu 70%). Im Gegensatz dazu gewinnt Sachsen-Anhalt seine Energie nur aus Solarpanels zu 30% und aus Recycling zu 50%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Saarland und Hessen?", "Vergleich Hessen und Saarland", "Vergleich Saarland und Hessen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Saarland hat im Vergleich zu Hessen einen höheren Energiegewinn durch Atomkraftwerke (Hessen 10%, Saarland 20%). Im Bereich Biomasse sind beide auf einem gleichen Niveau, jeweils 80%. Im Gegensatz zu Hessen gewinnt Saarland seine Energie noch aus Solarpanels zu 90%, Hessen aus der Geothermie zu 30%.";
          artyom.say("Saarland hat im Vergleich zu Hessen einen höheren Energiegewinn durch Atomkraftwerke (Hessen 10%, Saarland 20%). Im Bereich Biomasse sind beide auf einem gleichen Niveau, jeweils 80%. Im Gegensatz zu Hessen gewinnt Saarland seine Energie noch aus Solarpanels zu 90%, Hessen aus der Geothermie zu 30%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Saarland und Thüringen?", "Vergleich Thüringen und Saarland", "Vergleich Saarland und Thüringen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Saarland hat im Vergleich zu Thüringen einen höheren Energiegewinn durch Solarpanels (Thüringen 50%, Saarland 90%). Im Bereich Atomenergie sind beide auf einem gleichen Niveau, jeweils 20%. Im Gegensatz zu Thüringen gewinnt Saarland seine Energie noch aus Biomasse zu 80%, Hessen aus  Windkraftwerken zu 80%.";
          artyom.say("Saarland hat im Vergleich zu Thüringen einen höheren Energiegewinn durch Solarpanels (Thüringen 50%, Saarland 90%). Im Bereich Atomenergie sind beide auf einem gleichen Niveau, jeweils 20%. Im Gegensatz zu Thüringen gewinnt Saarland seine Energie noch aus Biomasse zu 80%, Hessen aus  Windkraftwerken zu 80%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Saarland und Sachsen?", "Vergleich Sachsen und Saarland", "Vergleich Saarland und Sachsen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Sachsen hat im Vergleich zu Sachsen einen höheren Energiegewinn durch Atomkraftwerke (Sachsen 80%, Saarland 20%). Saarland gewinnt seine Energie mehr aus erneuerbaren Energien als Rheinland-Pfalz (Solarpanels zu 80% und Biomasse zu 70%). Im Gegensatz dazu gewinnt Rheinland-Pfalz seine Energie nur aus Geothermie zu 50% und aus fossilen Brennstoffen wie Öl zu 80%.";
          artyom.say("Sachsen hat im Vergleich zu Sachsen einen höheren Energiegewinn durch Atomkraftwerke (Sachsen 80%, Saarland 20%). Saarland gewinnt seine Energie mehr aus erneuerbaren Energien als Rheinland-Pfalz (Solarpanels zu 80% und Biomasse zu 70%). Im Gegensatz dazu gewinnt Rheinland-Pfalz seine Energie nur aus Geothermie zu 50% und aus fossilen Brennstoffen wie Öl zu 80%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Saarland und Brandenburg?", "Vergleich Brandenburg und Saarland", "Vergleich Saarland und Brandenburg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Saarland hat im Vergleich zu Brandenburg einen höheren Energiegewinn durch Solarpanels (Brandenburg 60%, Saarland 80%). Brandenburg gewinnt seine Energie mehr aus erneuerbaren Energien als Saarland (Windkraftwerke zu 80% und Recycling zu 80%). Im Gegensatz dazu gewinnt Saarland seine Energie nur aus Biomasse zu 70% und aus der Atomenergie zu 20%.";
          artyom.say("Saarland hat im Vergleich zu Brandenburg einen höheren Energiegewinn durch Solarpanels (Brandenburg 60%, Saarland 80%). Brandenburg gewinnt seine Energie mehr aus erneuerbaren Energien als Saarland (Windkraftwerke zu 80% und Recycling zu 80%). Im Gegensatz dazu gewinnt Saarland seine Energie nur aus Biomasse zu 70% und aus der Atomenergie zu 20%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Saarland und Berlin?", "Vergleich Berlin und Saarland", "Vergleich Saarland und Berlin"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Berlin hat im Vergleich zu Saarland einen höheren Energiegewinn durch Solarpanels (Berlin 100%, Saarland 80%). Berlin gewinnt seine Energie mehr aus erneuerbaren Energien als Saarland (Windkraftwerke zu 100% und Recycling zu 100%). Im Gegensatz dazu gewinnt Saarland seine Energie nur aus Biomasse zu 70% und aus der Atomenergie zu 20%.";
          artyom.say("Berlin hat im Vergleich zu Saarland einen höheren Energiegewinn durch Solarpanels (Berlin 100%, Saarland 80%). Berlin gewinnt seine Energie mehr aus erneuerbaren Energien als Saarland (Windkraftwerke zu 100% und Recycling zu 100%). Im Gegensatz dazu gewinnt Saarland seine Energie nur aus Biomasse zu 70% und aus der Atomenergie zu 20%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Saarland und Mecklenburg-Vorpommern?", "Vergleich Mecklenburg-Vorpommern und Saarland", "Vergleich Saarland und Mecklenburg-Vorpommern"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Saarland hat im Vergleich zu Mecklenburg-Vorpommern einen höheren Energiegewinn durch Atomkraftwerke (Mecklenburg-Vorpommernn 10%, Saarland 20%). Saarland gewinnt seine Energie mehr aus erneuerbaren Energien als Mecklenburg-Vorpommern (Solarenergie zu 80% und Biomasse zu 80%). Im Gegensatz dazu gewinnt Mecklenburg-Vorpommern seine Energie nur aus Wasserkraftwerken zu 70% und aus fossilen Energieträgern wie Öl zu 70%.";
          artyom.say("Saarland hat im Vergleich zu Mecklenburg-Vorpommern einen höheren Energiegewinn durch Atomkraftwerke (Mecklenburg-Vorpommernn 10%, Saarland 20%). Saarland gewinnt seine Energie mehr aus erneuerbaren Energien als Mecklenburg-Vorpommern (Solarenergie zu 80% und Biomasse zu 80%). Im Gegensatz dazu gewinnt Mecklenburg-Vorpommern seine Energie nur aus Wasserkraftwerken zu 70% und aus fossilen Energieträgern wie Öl zu 70%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Saarland und Schleswig-Holstein?", "Vergleich Schleswig-Holstein und Saarland", "Vergleich Saarland und Schleswig-Holstein"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Saarland hat im Vergleich zu Schleswig-Holstein einen höheren Energiegewinn durch Biomasse (Schleswig-Holstein 50%, Saarland 80%). Schleswig-Holstein gewinnt seine Energie mehr aus erneuerbaren Energien als Saarland (Geothermie zu 60% und Wasserkraftwerke zu 80%). Im Gegensatz dazu gewinnt Saarland seine Energie nur aus Solarpanels zu 80% und aus Atomenergie zu 20%.";
          artyom.say("Saarland hat im Vergleich zu Schleswig-Holstein einen höheren Energiegewinn durch Biomasse (Schleswig-Holstein 50%, Saarland 80%). Schleswig-Holstein gewinnt seine Energie mehr aus erneuerbaren Energien als Saarland (Geothermie zu 60% und Wasserkraftwerke zu 80%). Im Gegensatz dazu gewinnt Saarland seine Energie nur aus Solarpanels zu 80% und aus Atomenergie zu 20%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Saarland und Hamburg?", "Vergleich Hamburg und Saarland", "Vergleich Saarland und Hamburg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Saarland hat im Vergleich zu Hamburg einen höheren Energiegewinn durch Biomasse (Hamburg 10%, Saarland 80%). Hamburg gewinnt seine Energie mehr aus erneuerbaren Energien als Saarland (Windenergie zu 80% und Wasserkraftwerke zu 100%). Im Gegensatz dazu gewinnt Saarland seine Energie nur aus Solarpanels zu 80% und aus Atomenergie zu 20%.";
          artyom.say("Saarland hat im Vergleich zu Hamburg einen höheren Energiegewinn durch Biomasse (Hamburg 10%, Saarland 80%). Hamburg gewinnt seine Energie mehr aus erneuerbaren Energien als Saarland (Windenergie zu 80% und Wasserkraftwerke zu 100%). Im Gegensatz dazu gewinnt Saarland seine Energie nur aus Solarpanels zu 80% und aus Atomenergie zu 20%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Saarland und Bremen?", "Vergleich Bremen und Saarland", "Vergleich Saarland und Bremen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Bremen hat im Vergleich zu Saarland einen höheren Energiegewinn durch Atomkraftwerke (Bremen 60%, Saarland 20%). Jedoch im Bereich der Solarenergie liegt Saarland vor Bremen mit 80% zu 70%. Zusätzlich gewinnt Saarland sein Energie aus Biomasse zu 80%, Bremen aus Recycling zu 10%.";
          artyom.say("Bremen hat im Vergleich zu Saarland einen höheren Energiegewinn durch Atomkraftwerke (Bremen 60%, Saarland 20%). Jedoch im Bereich der Solarenergie liegt Saarland vor Bremen mit 80% zu 70%. Zusätzlich gewinnt Saarland sein Energie aus Biomasse zu 80%, Bremen aus Recycling zu 10%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Saarland und Niedersachsen?", "Vergleich Niedersachsen und Saarland", "Vergleich Saarland und Niedersachsen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Saarland hat im Vergleich zu Niedersachsen einen höheren Energiegewinn durch Solarpanels (Niedersachsen 50%, Saarland 80%). Niedersachsen gewinnt seine Energie zusätzlich aus Windenergie zu 10% und Kohlekraftwerke  zu 60%. Im Gegensatz dazu gewinnt Saarland seine Energie nur aus Biomasse zu 80% und aus Atomenergie zu 20%.";
          artyom.say("Saarland hat im Vergleich zu Niedersachsen einen höheren Energiegewinn durch Solarpanels (Niedersachsen 50%, Saarland 80%). Niedersachsen gewinnt seine Energie zusätzlich aus Windenergie zu 10% und Kohlekraftwerke  zu 60%. Im Gegensatz dazu gewinnt Saarland seine Energie nur aus Biomasse zu 80% und aus Atomenergie zu 20%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Saarland und Nordrhein-Westfalen?", "Vergleich Nordrhein-Westfalen und Saarland", "Vergleich Saarland und Nordrhein-Westfalen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Nordrhein-Westfalen hat im Vergleich zu Saarland einen höheren Energiegewinn durch Atomkraftwerke (Nordrhein-Westfalen 100%, Saarland 20%). Nordrhein-Westfalen gewinnt seine Energie zusätzlich aus Ölpumpen zu 80% und Kohlekraftwerke  zu 100%. Im Gegensatz dazu gewinnt Saarland seine Energie nur aus Biomasse zu 80% und aus Atomenergie zu 20%.";
          artyom.say("Nordrhein-Westfalen hat im Vergleich zu Saarland einen höheren Energiegewinn durch Atomkraftwerke (Nordrhein-Westfalen 100%, Saarland 20%). Nordrhein-Westfalen gewinnt seine Energie zusätzlich aus Ölpumpen zu 80% und Kohlekraftwerke  zu 100%. Im Gegensatz dazu gewinnt Saarland seine Energie nur aus Biomasse zu 80% und aus Atomenergie zu 20%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Bayern und Baden-Württemberg?", "Vergleich Baden-Württemberg und Bayern", "Vergleich Bayern und Baden-Württemberg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Im Bereich Windenergie sind beide auf einem gleichen Niveau, jeweils 80%. Baden-Württemberg gewinnt seine Energie zusätzlich aus Recycling zu 60% und Biomasse  zu 80%. Im Gegensatz dazu gewinnt Bayern seine Energie nur aus Solarpanels zu 80% und aus Atomenergie zu 50%. Damit ist Baden-Württemberg sauberer als Bayern.";
          artyom.say("Im Bereich Windenergie sind beide auf einem gleichen Niveau, jeweils 80%. Baden-Württemberg gewinnt seine Energie zusätzlich aus Recycling zu 60% und Biomasse  zu 80%. Im Gegensatz dazu gewinnt Bayern seine Energie nur aus Solarpanels zu 80% und aus Atomenergie zu 50%. Damit ist Baden-Württemberg sauberer als Bayern.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Rheinland-Pfalz und Baden-Württemberg?", "Vergleich Baden-Württemberg und Rheinland-Pfalz", "Vergleich Rheinland-Pfalz und Baden-Württemberg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Baden-Württemberg sauberer, das es nur erneuerbare Energieträger nutzt (Biomasse zu 80%, Windenergie zu 80% und Recycling zu 60%). Rheinland-Pfalz hingegen nutzt Ölpumpen zu 50%, Atomkraftwerke zu 30% und nur eine erneuerbare Energie, die Wasserkraftwerke zu 70%.";
          artyom.say("Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Baden-Württemberg sauberer, das es nur erneuerbare Energieträger nutzt (Biomasse zu 80%, Windenergie zu 80% und Recycling zu 60%). Rheinland-Pfalz hingegen nutzt Ölpumpen zu 50%, Atomkraftwerke zu 30% und nur eine erneuerbare Energie, die Wasserkraftwerke zu 70%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Hessen und Baden-Württemberg?", "Vergleich Baden-Württemberg und Hessen", "Vergleich Hessen und Baden-Württemberg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Im Bereich Biomasse sind beide auf einem gleichen Niveau, jeweils 80%. Baden-Württemberg gewinnt seine Energie zusätzlich aus Recycling zu 60% und Biomasse  zu 80%. Im Gegensatz dazu gewinnt Hessen seine Energie nur aus Geothermie zu 30% und aus Atomenergie zu 10%. Damit ist Baden-Württemberg sauberer als Bayern.";
          artyom.say("Im Bereich Biomasse sind beide auf einem gleichen Niveau, jeweils 80%. Baden-Württemberg gewinnt seine Energie zusätzlich aus Recycling zu 60% und Biomasse  zu 80%. Im Gegensatz dazu gewinnt Hessen seine Energie nur aus Geothermie zu 30% und aus Atomenergie zu 10%. Damit ist Baden-Württemberg sauberer als Hessen.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Thüringen und Baden-Württemberg?", "Vergleich Baden-Württemberg und Thüringen", "Vergleich Thüringen und Baden-Württemberg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Im Bereich Windenergie sind beide auf einem gleichen Niveau, jeweils 80%. Baden-Württemberg gewinnt seine Energie zusätzlich aus Recycling zu 60% und Biomasse zu 80%. Im Gegensatz dazu gewinnt Thüringen seine Energie nur aus Solarpanels zu 50% und aus Atomenergie zu 10%. Damit ist Baden-Württemberg sauberer als Bayern.";
          artyom.say("Im Bereich Windenergie sind beide auf einem gleichen Niveau, jeweils 80%. Baden-Württemberg gewinnt seine Energie zusätzlich aus Recycling zu 60% und Biomasse  zu 80%. Im Gegensatz dazu gewinnt Thüringen seine Energie nur aus Solarpanels zu 50% und aus Atomenergie zu 10%. Damit ist Baden-Württemberg sauberer als Thüringen.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Sachsen und Baden-Württemberg?", "Vergleich Baden-Württemberg und Sachsen", "Vergleich Sachsen und Baden-Württemberg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Baden-Württemberg sauberer, das es nur erneuerbare Energieträger nutzt (Biomasse zu 80%, Windenergie zu 80% und Recycling zu 60%). Sachsen hingegen nutzt Ölpumpen zu 80%, Atomkraftwerke zu 80% und nur eine erneuerbare Energie, die Geothermie zu 50%.";
          artyom.say("Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Baden-Württemberg sauberer, das es nur erneuerbare Energieträger nutzt (Biomasse zu 80%, Windenergie zu 80% und Recycling zu 60%). Sachsen hingegen nutzt Ölpumpen zu 80%, Atomkraftwerke zu 80% und nur eine erneuerbare Energie, die Geothermie zu 50%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Sachsen-Anhalt und Baden-Württemberg?", "Vergleich Baden-Württemberg und Sachsen-Anhalt ", "Vergleich Sachsen-Anhalt und Baden-Württemberg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Baden-Württembergn hat im Vergleich zu Sachsen-Anhalt einen höheren Energiegewinn durch Recycling (Baden-Württemberg 60%, Sachsen-Anhalt 50%). Baden-Württemberg gewinnt seine Energie zusätzlich aus Windkraftwerken zu 80% und Biomasse zu 80%. Im Gegensatz dazu gewinnt Sachsen-Anhalt seine Energie nur aus Solarpanels zu 30% und aus Atomenergie zu 30%. Damit ist Baden-Württemberg sauberer als Sachsen-Anhalt.";
          artyom.say("Baden-Württembergn hat im Vergleich zu Sachsen-Anhalt einen höheren Energiegewinn durch Recycling (Baden-Württemberg 60%, Sachsen-Anhalt 50%). Baden-Württemberg gewinnt seine Energie zusätzlich aus Windkraftwerken zu 80% und Biomasse zu 80%. Im Gegensatz dazu gewinnt Sachsen-Anhalt seine Energie nur aus Solarpanels zu 30% und aus Atomenergie zu 30%. Damit ist Baden-Württemberg sauberer als Sachsen-Anhalt.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Brandenburg und Baden-Württemberg?", "Vergleich Baden-Württemberg und Brandenburg", "Vergleich Brandenburg und Baden-Württemberg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Brandenburg hat im Vergleich zu Baden-Württemberg einen höheren Energiegewinn durch Recycling (Baden-Württemberg 60%, Brandenburg 80%). Im Bereich Windenergie sind beide auf einem gleichen Niveau, jeweils 80%. Zusätzlich gewinnt Brandenburg seine Energie aus Solarpanels zu 60%, Baden-Württemberg aus Biomasse zu 80%. Damit sind diese beiden Länder gleich sauber.";
          artyom.say("Brandenburg hat im Vergleich zu Baden-Württemberg einen höheren Energiegewinn durch Recycling (Baden-Württemberg 60%, Brandenburg 80%). Im Bereich Windenergie sind beide auf einem gleichen Niveau, jeweils 80%. Zusätzlich gewinnt Brandenburg seine Energie aus Solarpanels zu 60%, Baden-Württemberg aus Biomasse zu 80%. Damit sind diese beiden Länder gleich sauber.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Berlin und Baden-Württemberg?", "Vergleich Baden-Württemberg und Berlin", "Vergleich Berlin und Baden-Württemberg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Berlin hat im Vergleich zu Baden-Württemberg einen höheren Energiegewinn durch Recycling und durch Windräder (Berlin hat bei beiden Methoden 100%). Zusätzlich gewinnt Berlin seine Energie aus Solarpanels zu 100%, Baden-Württemberg aus Biomasse zu 80%. Somit ist Berlin sauberer als Baden-Württemberg.";
          artyom.say("Berlin hat im Vergleich zu Baden-Württemberg einen höheren Energiegewinn durch Recycling und durch Windräder (Berlin hat bei beiden Methoden 100%). Zusätzlich gewinnt Berlin seine Energie aus Solarpanels zu 100%, Baden-Württemberg aus Biomasse zu 80%. Somit ist Berlin sauberer als Baden-Württemberg.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Mecklenburg-Vorpommern und Baden-Württemberg?", "Vergleich Baden-Württemberg und Mecklenburg-Vorpommern", "Vergleich Mecklenburg-Vorpommern und Baden-Württemberg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Baden-Württemberg sauberer, da es nur erneuerbare Energieträger nutzt (Biomasse zu 80%, Windenergie zu 80% und Recycling zu 60%). Mecklenburg-Vorpommern hingegen nutzt Ölpumpen zu 70%, Atomkraftwerke zu 10% und nur eine erneuerbare Energie, die Wasserkraftwerke zu 70%.";
          artyom.say("Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Baden-Württemberg sauberer, das es nur erneuerbare Energieträger nutzt (Biomasse zu 80%, Windenergie zu 80% und Recycling zu 60%). Mecklenburg-Vorpommern hingegen nutzt Ölpumpen zu 70%, Atomkraftwerke zu 10% und nur eine erneuerbare Energie, die Wasserkraftwerke zu 70%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Schleswig-Holstein und Baden-Württemberg?", "Vergleich Baden-Württemberg und Schleswig-Holstein", "Vergleich Schleswig-Holstein und Baden-Württemberg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Baden-Württemberg hat im Vergleich zu Schleswig-Holstein einen höheren Energiegewinn durch Biomasse (Baden-Württemberg 80%, Schleswig-Holstein 50%). Baden-Württemberg gewinnt seine Energie zusätzlich aus Recycling zu 60% und Windrädern zu 80%. Im Gegensatz dazu gewinnt Schleswig-Holstein seine Energie nur aus Geothermie zu 50% und aus Wasserkraftwerken zu 80%. Damit ist Baden-Württemberg etwas sauberer als Schleswig-Holstein.";
          artyom.say("Baden-Württemberg hat im Vergleich zu Schleswig-Holstein einen höheren Energiegewinn durch Biomasse (Baden-Württemberg 80%, Schleswig-Holstein 50%). Baden-Württemberg gewinnt seine Energie zusätzlich aus Recycling zu 60% und Windrädern zu 80%. Im Gegensatz dazu gewinnt Schleswig-Holstein seine Energie nur aus Geothermie zu 50% und aus Wasserkraftwerken zu 80%. Damit ist Baden-Württemberg etwas sauberer als Schleswig-Holstein.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Hamburg und Baden-Württemberg?", "Vergleich Baden-Württemberg und Hamburg", "Vergleich Hamburg und Baden-Württemberg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Baden-Württemberg hat im Vergleich zu Hamburg einen höheren Energiegewinn durch Biomasse (Baden-Württemberg 80%, Hamburg 10%). Im Bereich Windenergie sind beide auf dem selben Niveau (jeweils 80%). Baden-Württemberg gewinnt zusätzlich seine Energie aus Recycling zu 60%. Im Gegensatz dazu gewinnt Hamburg seine Energie aus Wasserkraftwerken zu 100%. Damit ist Baden-Württemberg etwas sauberer als Hamburg.";
          artyom.say("Baden-Württemberg hat im Vergleich zu Hamburg einen höheren Energiegewinn durch Biomasse (Baden-Württemberg 80%, Hamburg 10%). Im Bereich Windenergie sind beide auf dem selben Niveau (jeweils 80%). Baden-Württemberg gewinnt zusätzlich seine Energie aus Recycling zu 60%. Im Gegensatz dazu gewinnt Hamburg seine Energie aus Wasserkraftwerken zu 100%. Damit ist Baden-Württemberg etwas sauberer als Hamburg.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Bremen und Baden-Württemberg?", "Vergleich Baden-Württemberg und Bremen", "Vergleich Bremen und Baden-Württemberg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Baden-Württemberg hat im Vergleich zu Bremen einen höheren Energiegewinn durch Recycling (Baden-Württemberg 60%, Bremen 10%). Baden-Württemberg gewinnt zusätzlich seine Energie aus Biomasse zu 80% und aus Windkraftwerken zu 80%. Im Gegensatz dazu gewinnt Bremen seine Energie aus Solarpanelsn zu 80% und aus Atomenergie zu 60%. Damit ist Baden-Württemberg sauberer als Bremen.";
          artyom.say("Baden-Württemberg hat im Vergleich zu Bremen einen höheren Energiegewinn durch Recycling (Baden-Württemberg 60%, Bremen 10%). Baden-Württemberg gewinnt zusätzlich seine Energie aus Biomasse zu 80% und aus Windkraftwerken zu 80%. Im Gegensatz dazu gewinnt Bremen seine Energie aus Solarpanelsn zu 80% und aus Atomenergie zu 60%. Damit ist Baden-Württemberg sauberer als Bremen.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Niedersachsen und Baden-Württemberg?", "Vergleich Baden-Württemberg und Niedersachsen", "Vergleich Niedersachsen und Baden-Württemberg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Baden-Württemberg hat im Vergleich zu Niedersachsen einen höheren Energiegewinn durch Windenergie (Baden-Württemberg 80%, Niedersachsen 10%). Baden-Württemberg gewinnt zusätzlich seine Energie aus Biomasse zu 80% und aus Windkraftwerken zu 80%. Im Gegensatz dazu gewinnt Niedersachsen seine Energie aus Solarpanelsn zu 50% und aus kohlekraftwerken zu 60%. Damit ist Baden-Württemberg sauberer als Bremen.";
          artyom.say("Baden-Württemberg hat im Vergleich zu Niedersachsen einen höheren Energiegewinn durch Windenergie (Baden-Württemberg 80%, Niedersachsen 10%). Baden-Württemberg gewinnt zusätzlich seine Energie aus Biomasse zu 80% und aus Windkraftwerken zu 80%. Im Gegensatz dazu gewinnt Niedersachsen seine Energie aus Solarpanelsn zu 50% und aus kohlekraftwerken zu 60%. Damit ist Baden-Württemberg sauberer als Bremen.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Nordrhein-Westfalen und Baden-Württemberg?", "Vergleich Baden-Württemberg und Nordrhein-Westfalen", "Vergleich Nordrhein-Westfalen und Baden-Württemberg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Baden-Württemberg sauberer, da es nur erneuerbare Energieträger nutzt (Biomasse zu 80%, Windenergie zu 80% und Recycling zu 60%). Nordrhein-Westfalen hingegen nutzt nur konventionelle Energieträger, wie Ölpumpen zu 80%, Atomkraftwerke zu 100% und Kohlekraftwerke zu 100%.";
          artyom.say("Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Baden-Württemberg sauberer, da es nur erneuerbare Energieträger nutzt (Biomasse zu 80%, Windenergie zu 80% und Recycling zu 60%). Nordrhein-Westfalen hingegen nutzt nur konventionelle Energieträger, wie Ölpumpen zu 80%, Atomkraftwerke zu 100% und Kohlekraftwerke zu 100%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Bayern und Rheinland-Pfalz?", "Vergleich Rheinland-Pfalz und Bayern", "Vergleich Bayern und Rheinland-Pfalz"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Bayern hat im Vergleich zu Rheinland-Pfalz einen höheren Energiegewinn durch Atomkraftwerke (Bayern 50%, Rheinland-Pfalz 30%). Bayern gewinnt zusätzlich seine Energie aus Solarpanels zu 80% und aus Windkraftwerken zu 80%. Im Gegensatz dazu gewinnt Rheinland-Pfalz seine Energie aus Ölpumpen zu 50% und aus Wasserkraftwerken zu 70%. Damit ist Bayern sauberer als Rheinland-Pfalz, da es mehr erneuerbare Energien benutzt.";
          artyom.say("Bayern hat im Vergleich zu Rheinland-Pfalz einen höheren Energiegewinn durch Atomkraftwerke (Bayern 50%, Rheinland-Pfalz 30%). Bayern gewinnt zusätzlich seine Energie aus Solarpanels zu 80% und aus Windkraftwerken zu 80%. Im Gegensatz dazu gewinnt Rheinland-Pfalz seine Energie aus Ölpumpen zu 50% und aus Wasserkraftwerken zu 70%. Damit ist Bayern sauberer als Rheinland-Pfalz, da es mehr erneuerbare Energien benutzt.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Bayern und Hessen?", "Vergleich Hessen und Bayern", "Vergleich Bayern und Hessen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Bayern hat im Vergleich zu Hessen einen höheren Energiegewinn durch Atomkraftwerke (Bayern 50%, Hessen 10%). Bayern gewinnt zusätzlich seine Energie aus Solarpanels zu 80% und aus Windkraftwerken zu 80%. Im Gegensatz dazu gewinnt Hessen seine Energie aus Biomasse zu 80% und aus Geothermie zu 30%.";
          artyom.say("Bayern hat im Vergleich zu Hessen einen höheren Energiegewinn durch Atomkraftwerke (Bayern 50%, Hessen 10%). Bayern gewinnt zusätzlich seine Energie aus Solarpanels zu 80% und aus Windkraftwerken zu 80%. Im Gegensatz dazu gewinnt Hessen seine Energie aus Biomasse zu 80% und aus Geothermie zu 30%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Bayern und Thüringen?", "Vergleich Thüringen und Bayern", "Vergleich Bayern und Thüringen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer benutzen die selben Energiegewinnungsmethoden, haben aber nur bei der Windkraft die selben Prozentwerte, nämlich 80%. Im Berecih Solarenergie und Atomenergie liegt Bayern mit 80% und 50% vor Thüringen. Dort sind es 50% und 10%.";
          artyom.say("Beide Bundesländer benutzen die selben Energiegewinnungsmethoden, haben aber nur bei der Windkraft die selben Prozentwerte, nämlich 80%. Im Berecih Solarenergie und Atomenergie liegt Bayern mit 80% und 50% vor Thüringen. Dort sind es 50% und 10%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Bayern und Sachsen-Anhalt?", "Vergleich Sachsen-Anhalt und Bayern", "Vergleich Bayern und Sachsen-Anhalt"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer benutzen Solarpanels und Atomkraftwerke zur Energiegewinnung. Aus beiden Methoden zieht Bayern mehr seine Energie als Sachsen-Anhalt. In Bayern sind es bei der Solarenergie 80%, bei der Atomenergie 50%. In Sachsen-Anhalt 20% und 30%. Zusätzlich zieht Sachsen-Anhalt seine Energie aus Recycling zu 40%, Bayern aus Windrädern zu 80%.";
          artyom.say("Beide Bundesländer benutzen Solarpanels und Atomkraftwerke zur Energiegewinnung. Aus beiden Methoden zieht Bayern mehr seine Energie als Sachsen-Anhalt. In Bayern sind es bei der Solarenergie 80%, bei der Atomenergie 50%. In Sachsen-Anhalt 20% und 30%. Zusätzlich zieht Sachsen-Anhalt seine Energie aus Recycling zu 40%, Bayern aus Windrädern zu 80%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Bayern und Brandenburg?", "Vergleich Brandenburg und Bayern", "Vergleich Bayern und Brandenburg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer benutzen Solarpanels und Windkraftwerke zur Energiegewinnung. Nur aus den Solarpanels zieht Bayern mit 80% mehr Energie als Brandenburg mit 50%. Aus der Windkraft ziehen beide 80%. Zusätzlich zieht Brandenburg seine Energie aus Recycling zu 80%, Bayern aus Atomkraftwerken zu 50%. Damit ist Brandenburg sauberer als Bayern.";
          artyom.say("Beide Bundesländer benutzen Solarpanels und Windkraftwerke zur Energiegewinnung. Nur aus den Solarüanels zieht Bayern mit 80% mehr Energie als Brandenburg mit 50%. Aus der Windkraft ziehen beide 80%. Zusätzlich zieht Brandenburg seine Energie aus Recycling zu 80%, Bayern aus Atomkraftwerken zu 50%. Damit ist Brandenburg sauberer als Bayern.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Bayern und Sachsen?", "Vergleich Sachsen und Bayern", "Vergleich Bayern und Sachsen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Sachsen hat im Vergleich zu Bayern einen höheren Energiegewinn durch Atomkraftwerke (Bayern 50%, Sachsen 80%). Bayern gewinnt zusätzlich seine Energie aus Solarpanels zu 80% und aus Windkraftwerken zu 80%. Im Gegensatz dazu gewinnt Sachsen seine Energie aus Ölpumpen zu 80% und aus Geothermie zu 30%. Damit ist Sachsen schmutziger als Bayern, da es mehr fossile Energien benutzt.";
          artyom.say("Sachsen hat im Vergleich zu Bayern einen höheren Energiegewinn durch Atomkraftwerke (Bayern 50%, Sachsen 80%). Bayern gewinnt zusätzlich seine Energie aus Solarpanels zu 80% und aus Windkraftwerken zu 80%. Im Gegensatz dazu gewinnt Sachsen seine Energie aus Ölpumpen zu 80% und aus Geothermie zu 30%. Damit ist Sachsen schmutziger als Bayern, da es mehr fossile Energien benutzt.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Bayern und Berlin?", "Vergleich Berlin und Bayern", "Vergleich Bayern und Berlin"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer benutzen Solarpanels und Windkraftwerke zur Energiegewinnung. Aus beiden Methoden zieht Berlin mehr Energie, nämlich 100%. Zusätzlich zieht Berlin seine Energie aus Recycling zu 100%, Bayern aus Atomkraftwerken zu 50%. Damit ist Berlin sauberer als Bayern.";
          artyom.say("Beide Bundesländer benutzen Solarpanels und Windkraftwerke zur Energiegewinnung. Nur aus den Solarüanels zieht Bayern mit 80% mehr Energie als Brandenburg mit 50%. Aus der Windkraft ziehen beide 80%. Zusätzlich zieht Brandenburg seine Energie aus Recycling zu 80%, Bayern aus Atomkraftwerken zu 50%. Damit ist Brandenburg sauberer als Bayern.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Bayern und Mecklenburg-Vorpommern?", "Vergleich Mecklenburg-Vorpommern und Bayern", "Vergleich Bayern und Mecklenburg-Vorpommern"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Bayern hat im Vergleich zu Mecklenburg-Vorpommern einen höheren Energiegewinn durch Atomkraftwerke (Bayern 50%, Mecklenburg-Vorpommern 10%). Bayern gewinnt zusätzlich seine Energie aus Solarpanels zu 80% und aus Windkraftwerken zu 80%. Im Gegensatz dazu gewinnt Mecklenburg-Vorpommern seine Energie aus Ölpumpen zu 70% und aus Wasserkraftwerken zu 70%.";
          artyom.say("Bayern hat im Vergleich zu Mecklenburg-Vorpommern einen höheren Energiegewinn durch Atomkraftwerke (Bayern 50%, Mecklenburg-Vorpommern 10%). Bayern gewinnt zusätzlich seine Energie aus Solarpanels zu 80% und aus Windkraftwerken zu 80%. Im Gegensatz dazu gewinnt Mecklenburg-Vorpommern seine Energie aus Ölpumpen zu 70% und aus Wasserkraftwerken zu 70%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Bayern und Schleswig-Holstein?", "Vergleich Schleswig-Holstein und Bayern", "Vergleich Bayern und Schleswig-Holstein"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Schleswig-Holstein sauberer, da es nur erneuerbare Energieträger nutzt (Biomasse zu 50%, Wasserenergie zu 80% und Geothermie zu 60%). Bayern hingegen nutzt zwar Solarpanels und Windräder zu 80%, jedoch auch die konventionelle Methode der Atomkraftwerke zu 60%.";
          artyom.say("Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Schleswig-Holstein sauberer, da es nur erneuerbare Energieträger nutzt (Biomasse zu 50%, Wasserenergie zu 80% und Geothermie zu 60%). Bayern hingegen nutzt zwar Solarpanels und Windräder zu 80%, jedoch auch die konventionelle Methode der Atomkraftwerke zu 60%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Bayern und Hamburg?", "Vergleich Hamburg und Bayern", "Vergleich Bayern und Hamburg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Im Bereich Windenergie sind beide auf einem gleichen Niveau, jeweils 80%. Bayern gewinnt seine Energie zusätzlich aus Solarpanels zu 80% und Atomenergie zu 50%. Im Gegensatz dazu gewinnt Hamburg seine Energie nur aus Biomasse zu 10% und aus Wasserkraftwerken zu 100%.";
          artyom.say("Im Bereich Windenergie sind beide auf einem gleichen Niveau, jeweils 80%. Bayern gewinnt seine Energie zusätzlich aus Solarpanels zu 80% und Atomenergie zu 50%. Im Gegensatz dazu gewinnt Hamburg seine Energie nur aus Biomasse zu 10% und aus Wasserkraftwerken zu 100%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Bayern und Bremen?", "Vergleich Bremen und Bayern", "Vergleich Bayern und Bremen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer benutzen gleich viel Solarpanels (80%) und Atomkraftwerke (50%) zur Energiegewinnung. Zusätzlich benutzt Bremen Recycling zu 10% und Bayern Windenergie zu 80% als Energieträger.";
          artyom.say("Beide Bundesländer benutzen gleich viel Solarpanels (80%) und Atomkraftwerke (50%) zur Energiegewinnung. Zusätzlich benutzt Bremen Recycling zu 10% und Bayern Windenergie zu 80% als Energieträger.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Bayern und Niedersachsen?", "Vergleich Niedersachsen und Bayern", "Vergleich Bayern und Niedersachsen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer benutzen Solarpanels und Windräder zur Energiegewinnung. Beide Methoden nutzt Bayern mit 80% mehr als Niedersachsen, dort sind es bei der Solarenergie nur 50%, bei der Windenergie 10%. Außerdem nutz Niedersachsen noch Kohlekraftwerke zu 60%, Bayern Atomkraftwerke zu 50% als fossile Energiemethoden.";
          artyom.say("Beide Bundesländer benutzen gleich viel Solarpanels und Windräder zur Energiegewinnung. Beide Methoden nutzt Bayern mit 80% mehr als Niedersachsen, dort sind es bei der Solarenergie nur 50%, bei der Windenergie 10%. Außerdem nutz Niedersachsen noch Kohlekraftwerke zu 60%, Bayern Atomkraftwerke zu 50% als fossile Energiemethoden.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleiche Bayern und Nordrhein-Westfalen?", "Vergleich Nordrhein-Westfalen und Bayern", "Vergleich Bayern und Nordrhein-Westfalen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Nordrhein-Westfalen hat im Vergleich zu Bayern einen höheren Energiegewinn durch Atomkraftwerke (Bayern 50%, Nordrhein-Westfalen 100%). Bayern gewinnt zusätzlich seine Energie aus Solarpanels zu 80% und aus Windkraftwerken zu 80%. Im Gegensatz dazu gewinnt Nordrhein-Westfalen seine Energie aus Ölpumpen zu 80% und aus Kohlekraftwerken zu 100%. Somit ist Bayern grüner als Nordrhein-Westfalen, da es weniger fossile Energiegewinnungsmethoden nutzt.";
          artyom.say("Nordrhein-Westfalen hat im Vergleich zu Bayern einen höheren Energiegewinn durch Atomkraftwerke (Bayern 50%, Nordrhein-Westfalen 100%). Bayern gewinnt zusätzlich seine Energie aus Solarpanels zu 80% und aus Windkraftwerken zu 80%. Im Gegensatz dazu gewinnt Nordrhein-Westfalen seine Energie aus Ölpumpen zu 80% und aus Kohlekraftwerken zu 100%. Somit ist Bayern grüner als Nordrhein-Westfalen, da es weniger fossile Energiegewinnungsmethoden nutzt.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Rheinland-Pfalz und Hessen?", "Vergleich Hessen und Rheinland-Pfalz", "Vergleich Rheinland-Pfalz und Hessen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Rheinland-Pfalz hat im Vergleich zu Hessen einen höheren Energiegewinn durch Atomkraftwerke (Rheinland-Pfalz 40%, Hessen 10%). Rheinland-Pfalz gewinnt zusätzlich seine Energie aus Wasserkraftwerken zu 80% und aus Ölpumpen zu 50%. Im Gegensatz dazu gewinnt Hessen seine Energie aus Biomasse zu 90% und aus Geothermie zu 30%." ;
          artyom.say("Rheinland-Pfalz hat im Vergleich zu Hessen einen höheren Energiegewinn durch Atomkraftwerke (Rheinland-Pfalz 40%, Hessen 10%). Rheinland-Pfalz gewinnt zusätzlich seine Energie aus Wasserkraftwerken zu 80% und aus Ölpumpen zu 50%. Im Gegensatz dazu gewinnt Hessen seine Energie aus Biomasse zu 90% und aus Geothermie zu 30%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Rheinland-Pfalz und Thüringen?", "Vergleich Thüringen und Rheinland-Pfalz", "Vergleich Rheinland-Pfalz und Thüringen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Rheinland-Pfalz hat im Vergleich zu Hessen einen höheren Energiegewinn durch Atomkraftwerke (Rheinland-Pfalz 40%, Thüringen 10%). Rheinland-Pfalz gewinnt zusätzlich seine Energie aus Wasserkraftwerken zu 80% und aus Ölpumpen zu 50%. Im Gegensatz dazu gewinnt Thüringen seine Energie aus Solarenergie zu 50% und aus Windenergie zu 80%. Somit ist Thüringen sauberer, da es mehr erneuerbare Energieträger nutzt." ;
          artyom.say("Rheinland-Pfalz hat im Vergleich zu Hessen einen höheren Energiegewinn durch Atomkraftwerke (Rheinland-Pfalz 40%, Thüringen 10%). Rheinland-Pfalz gewinnt zusätzlich seine Energie aus Wasserkraftwerken zu 80% und aus Ölpumpen zu 50%. Im Gegensatz dazu gewinnt Thüringen seine Energie aus Solarenergie zu 50% und aus Windenergie zu 80%. Somit ist Thüringen sauberer, da es mehr erneuerbare Energieträger nutzt.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Rheinland-Pfalz und Sachsen-Anhalt?", "Vergleich Sachsen-Anhalt und Rheinland-Pfalz", "Vergleich Rheinland-Pfalz und Sachsen-Anhalt"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer sind im Bereich der Atomenergie auf einem gleichen Niveau, 40%. Rheinland-Pfalz gewinnt zusätzlich seine Energie aus Wasserkraftwerken zu 80% und aus Ölpumpen zu 50%. Im Gegensatz dazu gewinnt Sachsen-Anhalt seine Energie aus Solarpanels zu 20% und aus Recycling zu 50%. Somit ist Sachsen-Anhalt sauberer, da es mehr erneuerbare Energieträger nutzt." ;
          artyom.say("Rheinland-Pfalz hat im Vergleich zu Hessen einen höheren Energiegewinn durch Atomkraftwerke (Rheinland-Pfalz 40%, Thüringen 10%). Rheinland-Pfalz gewinnt zusätzlich seine Energie aus Wasserkraftwerken zu 80% und aus Ölpumpen zu 50%. Im Gegensatz dazu gewinnt Thüringen seine Energie aus Solarenergie zu 50% und aus Windenergie zu 80%. Somit ist Thüringen sauberer, da es mehr erneuerbare Energieträger nutzt.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Rheinland-Pfalz und Sachsen?", "Vergleich Sachsen und Rheinland-Pfalz", "Vergleich Rheinland-Pfalz und Sachsen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer benutzen Ölpumpen und Atomreaktor zur Energiegewinnung. Beide Methoden nutzt Sachsen mit 80% mehr als Rheinland-Pfalz, dort sind es bei der Atomenergie 'nur' die Hälfte, bei den Ölpumpen 50%. Außerdem nutz Rheinland-Pfalz noch Wasserkraftwerke zu 60%, Sachsen Geothermie zu 50% als erneuerbare Energiemethode." ;
          artyom.say("Beide Bundesländer benutzen Ölpumpen und Atomreaktor zur Energiegewinnung. Beide Methoden nutzt Sachsen mit 80% mehr als Rheinland-Pfalz, dort sind es bei der Atomenergie 'nur' die Hälfte, bei den Ölpumpen 50%. Außerdem nutz Rheinland-Pfalz noch Wasserkraftwerke zu 60%, Sachsen Geothermie zu 50% als erneuerbare Energiemethode.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Rheinland-Pfalz und Brandenburg?", "Vergleich Brandenburg und Rheinland-Pfalz", "Vergleich Rheinland-Pfalz und Brandenburg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Brandenburg sauberer, da es nur erneuerbare Energieträger nutzt (Solarenergie zu 50%, Windkraft zu 80% und Recycling zu 80%).  Rheinland-Pfalz hingegen nutzt zwar Wasserkraftwerke zu 70%, jedoch auch die konventionellen Methoden der Energiegewinnung, Atomkraftwerke zu 40% und Ölpumpen zu 40%." ;
          artyom.say("Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Brandenburg sauberer, da es nur erneuerbare Energieträger nutzt (Solarenergie zu 50%, Windkraft zu 80% und Recycling zu 80%).  Rheinland-Pfalz hingegen nutzt zwar Wasserkraftwerke zu 70%, jedoch auch die konventionellen Methoden der Energiegewinnung, Atomkraftwerke zu 40% und Ölpumpen zu 40%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Rheinland-Pfalz und Berlin?", "Vergleich Berlin und Rheinland-Pfalz", "Vergleich Rheinland-Pfalz und Berlin"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Berlin sauberer, da es nur erneuerbare Energieträger nutzt, zu 100% (Solarenergie, Windkraft und Recycling). Rheinland-Pfalz hingegen nutzt zwar Wasserkraftwerke zu 70%, jedoch auch die konventionellen Methoden der Energiegewinnung, Atomkraftwerke zu 40% und Ölpumpen zu 40%." ;
          artyom.say("Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Berlin sauberer, da es nur erneuerbare Energieträger nutzt, zu 100% (Solarenergie, Windkraft und Recycling). Rheinland-Pfalz hingegen nutzt zwar Wasserkraftwerke zu 70%, jedoch auch die konventionellen Methoden der Energiegewinnung, Atomkraftwerke zu 40% und Ölpumpen zu 40%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Rheinland-Pfalz und Mecklenburg-Vorpommern?", "Vergleich Mecklenburg-Vorpommern und Rheinland-Pfalz", "Vergleich Rheinland-Pfalz und Mecklenburg-Vorpommern"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer benutzen die selben Energiegewinnungsmethoden, haben aber nur bei der Wasserkraft die selben Prozentwerte, nämlich 70%. Im Bereich Atomenergie liegt Rheinland-Pfalz mit 40% vor Mecklenburg-Vorpommern, 10%, jedoch bei den Ölpumpen hat Mecklenburg-Vorpommern die Nase vorne mit 60% zu 50%." ;
          artyom.say("Beide Bundesländer benutzen die selben Energiegewinnungsmethoden, haben aber nur bei der Wasserkraft die selben Prozentwerte, nämlich 70%. Im Bereich Atomenergie liegt Rheinland-Pfalz mit 40% vor Mecklenburg-Vorpommern, 10%, jedoch bei den Ölpumpen hat Mecklenburg-Vorpommern die Nase vorne mit 60% zu 50%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Rheinland-Pfalz und Schleswig-Holstein?", "Vergleich Schleswig-Holstein und Rheinland-Pfalz", "Vergleich Rheinland-Pfalz und Schleswig-Holstein"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Schleswig-Holstein hat im Vergleich zu Rheinland-Pfalz einen höheren Energiegewinn durch Wasserräder (Rheinland-Pfalz 70%, Schleswig-Holstein 80%). Rheinland-Pfalz gewinnt zusätzlich seine Energie aus Wasserkraftwerken zu 80% und aus Ölpumpen zu 50%. Im Gegensatz dazu gewinnt Schleswig-Holstein seine Energie aus Biomasse zu 50% und aus Geothermie zu 50%. Somit ist Schleswig-Holstein sauberer, da es keine fossilen Energieträger nutzt." ;
          artyom.say("Schleswig-Holstein hat im Vergleich zu Rheinland-Pfalz einen höheren Energiegewinn durch Wasserräder (Rheinland-Pfalz 70%, Schleswig-Holstein 80%). Rheinland-Pfalz gewinnt zusätzlich seine Energie aus Wasserkraftwerken zu 80% und aus Ölpumpen zu 50%. Im Gegensatz dazu gewinnt Schleswig-Holstein seine Energie aus Biomasse zu 50% und aus Geothermie zu 50%. Somit ist Schleswig-Holstein sauberer, da es keine fossilen Energieträger nutzt.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Rheinland-Pfalz und Hamburg?", "Vergleich Hamburg und Rheinland-Pfalz", "Vergleich Rheinland-Pfalz und Hamburg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Hamburg hat im Vergleich zu Rheinland-Pfalz einen höheren Energiegewinn durch Wasserräder (Rheinland-Pfalz 70%, Hamburg 100%). Rheinland-Pfalz gewinnt zusätzlich seine Energie aus Wasserkraftwerken zu 80% und aus Ölpumpen zu 50%. Im Gegensatz dazu gewinnt Hamburg seine Energie aus Biomasse zu 10% und aus Windkraft zu 80%. Somit ist Hamburg sauberer, da es nur erneuerbare Energieträger nutzt." ;
          artyom.say("Schleswig-Holstein hat im Vergleich zu Rheinland-Pfalz einen höheren Energiegewinn durch Wasserräder (Rheinland-Pfalz 70%, Schleswig-Holstein 80%). Rheinland-Pfalz gewinnt zusätzlich seine Energie aus Wasserkraftwerken zu 80% und aus Ölpumpen zu 50%. Im Gegensatz dazu gewinnt Schleswig-Holstein seine Energie aus Biomasse zu 50% und aus Geothermie zu 50%. Somit ist Schleswig-Holstein sauberer, da es keine fossilen Energieträger nutzt.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Rheinland-Pfalz und Bremen?", "Vergleich Bremen und Rheinland-Pfalz", "Vergleich Rheinland-Pfalz und Bremen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Bremen hat im Vergleich zu Rheinland-Pfalz einen höheren Energiegewinn durch Atomenergie (Rheinland-Pfalz 40%, Bremen 60%). Rheinland-Pfalz gewinnt zusätzlich seine Energie aus Wasserkraftwerken zu 80% und aus Ölpumpen zu 50%. Im Gegensatz dazu gewinnt Bremen seine Energie aus Recycling zu 10% und aus Sonnenstrahlen zu 80%. Somit ist Rheinland-Pfalz weniger Grün als Bremen, da es zuviele fossile Methoden nutzt." ;
          artyom.say("Bremen hat im Vergleich zu Rheinland-Pfalz einen höheren Energiegewinn durch Atomenergie (Rheinland-Pfalz 40%, Bremen 60%). Rheinland-Pfalz gewinnt zusätzlich seine Energie aus Wasserkraftwerken zu 80% und aus Ölpumpen zu 50%. Im Gegensatz dazu gewinnt Bremen seine Energie aus Recycling zu 10% und aus Sonnenstrahlen zu 80%. Somit ist Rheinland-Pfalz weniger Grün als Bremen, da es zuviele fossile Methoden nutzt.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Rheinland-Pfalz und Niedersachsen?", "Vergleich Niedersachsen und Rheinland-Pfalz", "Vergleich Rheinland-Pfalz und Niedersachsen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Niedersachsen etwas sauberer, da es mehr erneuerbare Energieträger nutzt (Solarenergie zu 50%, Windkraft zu 10%  und Kohlekraftwerke zu 70%). Rheinland-Pfalz hingegen nutzt zwar Wasserkraftwerke zu 70%, jedoch auch die konventionellen Methoden der Energiegewinnung, Atomkraftwerke zu 40% und Ölpumpen zu 40%." ;
          artyom.say("Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Niedersachsen etwas sauberer, da es mehr erneuerbare Energieträger nutzt (Solarenergie zu 50%, Windkraft zu 10%  und Kohlekraftwerke zu 70%). Rheinland-Pfalz hingegen nutzt zwar Wasserkraftwerke zu 70%, jedoch auch die konventionellen Methoden der Energiegewinnung, Atomkraftwerke zu 40% und Ölpumpen zu 40%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Rheinland-Pfalz und Nordrhein-Westfalen?", "Vergleich Nordrhein-Westfalen und Rheinland-Pfalz", "Vergleich Rheinland-Pfalz und Nordrhein-Westfalen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer benutzen Ölpumpen und Atomreaktoren zur Energiegewinnung. Beide Methoden nutzt Nordrhein-Westfalen jedoch mit 100% und 90% mehr als Rheinland-Pfalz, dort sind es bei der Atomenergie 'nur' 40%, bei den Ölpumpen 50%. Außerdem nutz Rheinland-Pfalz noch Wasserkraftwerke zu 60%, Nordrhein-Westfalen den Kohleabbau zu 100%, als weiteren fossilen Brennstoff." ;
          artyom.say("Beide Bundesländer benutzen Ölpumpen und Atomreaktor zur Energiegewinnung. Beide Methoden nutzt Nordrhein-Westfalen jedoch mit 100% und 90% mehr als Rheinland-Pfalz, dort sind es bei der Atomenergie 'nur' 40%, bei den Ölpumpen 50%. Außerdem nutz Rheinland-Pfalz noch Wasserkraftwerke zu 60%, Nordrhein-Westfalen den Kohleabbau zu 100%, als weiteren fossilen Brennstoff.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Hessen und Thüringen?", "Vergleich Hessen und Thüringen", "Vergleich Thüringen und Hessen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Im Bereich Atomenergie sind beide auf einem gleichen Niveau, jeweils 10%. Hessen gewinnt seine Energie zusätzlich aus Biomasse zu 80% und Geothermie zu 40%. Im Gegensatz dazu gewinnt Thüringen seine Energie nur aus Solarpanels zu 50% und aus Windrädern zu 80%." ;
          artyom.say("Im Bereich Atomenergie sind beide auf einem gleichen Niveau, jeweils 10%. Hessen gewinnt seine Energie zusätzlich aus Biomasse zu 80% und Geothermie zu 40%. Im Gegensatz dazu gewinnt Thüringen seine Energie nur aus Solarpanels zu 50% und aus Windrädern zu 80%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Hessen und Sachsen-Anhalt", "Vergleich Hessen und Sachsen-Anhalt", "Vergleich Sachsen-Anhalt und Hessen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Sachsen-Anhalt hat im Vergleich zu Hessen einen höheren Energiegewinn durch Atomenergie (Sachsen-Anhalt 40%, Hessen 10%). Sachsen-Anhalt gewinnt zusätzlich seine Energie aus Solarenergie zu 40% und aus Recycling zu 50%. Im Gegensatz dazu gewinnt Hessen seine Energie aus Geothermie zu 40% und aus Biomasse zu 80%. Somit ist Hessen grüner als Sachsen-Anhalt, da es prozentual mehr erneuerbare Energieträger nutzt und weniger fossile." ;
          artyom.say("Sachsen-Anhalt hat im Vergleich zu Hessen einen höheren Energiegewinn durch Atomenergie (Sachsen-Anhalt 40%, Hessen 10%). Sachsen-Anhalt gewinnt zusätzlich seine Energie aus Solarenergie zu 40% und aus Recycling zu 50%. Im Gegensatz dazu gewinnt Hessen seine Energie aus Geothermie zu 40% und aus Biomasse zu 80%. Somit ist Hessen grüner als Sachsen-Anhalt, da es prozentual mehr erneuerbare Energieträger nutzt und weniger fossile.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Hessen und Sachsen", "Vergleich Hessen und Sachsen", "Vergleich Sachsen und Hessen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer benutzen Geothermie und Atomreaktoren zur Energiegewinnung. In beiden Bereichen übertrifft Sachsen Hessen. Sachsen benutzt Geothermie zu 50% und Atomreaktoren zu 80%, Hessen zu 30% und 10%. Zusätzlich gewinnt Sachsen seine Energie aus Öl zu 80%, Hessen aus Biomasse zu 80%, und ist damit 'schmutziger' als Hessen" ;
          artyom.say("Beide Bundesländer benutzen Geothermie und Atomreaktoren zur Energiegewinnung. In beiden Bereichen übertrifft Sachsen Hessen. Sachsen benutzt Geothermie zu 50% und Atomreaktoren zu 80%, Hessen zu 30% und 10%. Zusätzlich gewinnt Sachsen seine Energie aus Öl zu 80%, Hessen aus Biomasse zu 80%, und ist damit 'schmutziger' als Hessen");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Hessen und Brandenburg", "Vergleich Hessen und Brandenburg", "Vergleich Brandenburg und Hessen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Brandenburg sauberer, da es mehr erneuerbare Energieträger nutzt (Solarenergie zu 60%, Windkraft zu 80%  und Recycling zu 80%). Hessen hingegen nutzt zwar Biomasse zu 80% und Geothermie zu 30%, jedoch auch die konventionelle Methoden der Energiegewinnung, Atomkraftwerke zu 10%." ;
          artyom.say("Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Brandenburg sauberer, da es mehr erneuerbare Energieträger nutzt (Solarenergie zu 60%, Windkraft zu 80%  und Recycling zu 80%). Hessen hingegen nutzt zwar Biomasse zu 80% und Geothermie zu 30%, jedoch auch die konventionelle Methoden der Energiegewinnung, Atomkraftwerke zu 10%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Hessen und Berlin", "Vergleich Hessen und Berlin", "Vergleich Berlin und Hessen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Berlin sauberer, da es nur erneuerbare Energieträger nutzt, zu 100%. (Solarenergie, Windkraft und Recycling). Hessen hingegen nutzt zwar Biomasse zu 80% und Geothermie zu 30%, jedoch auch die konventionelle Methoden der Energiegewinnung, Atomkraftwerke zu 10%." ;
          artyom.say("Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Berlin sauberer, da es nur erneuerbare Energieträger nutzt, zu 100%. (Solarenergie, Windkraft und Recycling). Hessen hingegen nutzt zwar Biomasse zu 80% und Geothermie zu 30%, jedoch auch die konventionelle Methoden der Energiegewinnung, Atomkraftwerke zu 10%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Hessen und Mecklenburg-Vorpommern", "Vergleich Hessen und Mecklenburg-Vorpommern", "Vergleich Mecklenburg-Vorpommern und Hessen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Im Bereich Atomenergie sind beide auf einem gleichen Niveau, jeweils 10%. Hessen gewinnt seine Energie zusätzlich aus Biomasse zu 80% und Geothermie zu 40%. Im Gegensatz dazu gewinnt Mecklenburg-Vorpommern seine Energie nur aus Wasserkraftwerken zu 60% und aus Ölpumpen zu 60%. Somit ist Hessen grüner, da es weniger fossile Brennstoffe nutzt." ;
          artyom.say("Im Bereich Atomenergie sind beide auf einem gleichen Niveau, jeweils 10%. Hessen gewinnt seine Energie zusätzlich aus Biomasse zu 80% und Geothermie zu 40%. Im Gegensatz dazu gewinnt Mecklenburg-Vorpommern seine Energie nur aus Wasserkraftwerken zu 60% und aus Ölpumpen zu 60%. Somit ist Hessen grüner, da es weniger fossile Brennstoffe nutzt.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Hessen und Schleswig-Holstein", "Vergleich Hessen und Schleswig-Holstein", "Vergleich Schleswig-Holstein und Hessen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer benutzen Geothermie und Biomasse zur Energiegewinnung. Im Bereich Biomasse übertrifft Hessen Schleswig-Holstein, 80% zu 50%. Bei der Geothermie aber liegt Schleswig-Holstein mit 50% zu 30% vorne. Zusätzlich gewinnt Schleswig-Holstein seine Energie aus Wasser zu 80%, Hessen aus Biomasse zu 80%, und ist damit 'sauberer' als Hessen" ;
          artyom.say("Beide Bundesländer benutzen Geothermie und Biomasse zur Energiegewinnung. Im Bereich Biomasse übertrifft Hessen Schleswig-Holstein, 80% zu 50%. Bei der Geothermie aber liegt Schleswig-Holstein mit 50% zu 30% vorne. Zusätzlich gewinnt Schleswig-Holstein seine Energie aus Wasser zu 80%, Hessen aus Biomasse zu 80%, und ist damit 'sauberer' als Hessen");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Hessen und Hamburg", "Vergleich Hessen und Hamburg", "Vergleich Hamburg und Hessen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Hessen hat im Vergleich zu Hamburg einen höheren Energiegewinn durch Biomasse (Hamburg 10%, Hessen 80%). Hamburg gewinnt zusätzlich seine Energie aus Windkraft zu 80% und aus Wasserkraftwerken zu 100%. Im Gegensatz dazu gewinnt Hessen seine Energie aus Geothermie zu 40% und aus Biomasse zu 80%. Somit ist Hessen weniger Grün als Hamburg, da es prozentual mehr fossile Energieträger nutzt als erneuerbare." ;
          artyom.say("Hessen hat im Vergleich zu Hamburg einen höheren Energiegewinn durch Biomasse (Hamburg 10%, Hessen 80%). Hamburg gewinnt zusätzlich seine Energie aus Windkraft zu 80% und aus Wasserkraftwerken zu 100%. Im Gegensatz dazu gewinnt Hessen seine Energie aus Geothermie zu 40% und aus Biomasse zu 80%. Somit ist Hessen weniger Grün als Hamburg, da es prozentual mehr fossile Energieträger nutzt als erneuerbare.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Hessen und Bremen", "Vergleich Hessen und Bremen", "Vergleich Bremen und Hessen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Bremen hat im Vergleich zu Hessen einen höheren Energiegewinn durch Atomenergie (Hessen 10%, Bremen 70%). Bremen gewinnt zusätzlich seine Energie aus Sonnenstrahlen zu 80% und aus Recycling zu 10%. Im Gegensatz dazu gewinnt Hessen seine Energie aus Geothermie zu 40% und aus Biomasse zu 80%. Im Vergleich sind beide ungefähr gleich gut bzw. schlecht." ;
          artyom.say("Bremen hat im Vergleich zu Hessen einen höheren Energiegewinn durch Atomenergie (Hessen 10%, Bremen 70%). Bremen gewinnt zusätzlich seine Energie aus Sonnenstrahlen zu 80% und aus Recycling zu 10%. Im Gegensatz dazu gewinnt Hessen seine Energie aus Geothermie zu 40% und aus Biomasse zu 80%. Im Vergleich sind beide ungefähr gleich gut bzw. schlecht.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Hessen und Niedersachsen", "Vergleich Hessen und Niedersachsen", "Vergleich Niedersachsen und Hessen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Hessen sauberer, da es ein bisschen mehr erneuerbare Energieträger nutzt und viel weniger fossile Brennstoffe. (Biomasse zu 80%, Geothermie zu 30% und Atomenergie zu 10%). Niedersachsen hingegen nutzt zwar Windenergie zu 10% und Solarenergie zu 50%, jedoch auch die konventionelle Methode der Energiegewinnung, den Kohleabbau zu 70%." ;
          artyom.say("Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Hessen sauberer, da es ein bisschen mehr erneuerbare Energieträger nutzt und viel weniger fossile Brennstoffe. (Biomasse zu 80%, Geothermie zu 30% und Atomenergie zu 10%). Niedersachsen hingegen nutzt zwar Windenergie zu 10% und Solarenergie zu 50%, jedoch auch die konventionelle Methode der Energiegewinnung, den Kohleabbau zu 70%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Hessen und Nordrhein-Westfalen", "Vergleich Hessen und Nordrhein-Westfalen", "Vergleich Nordrhein-Westfalen und Hessen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Nordrhein-Westfalen hat im Vergleich zu Hessen einen höheren Energiegewinn durch Atomenergie (Hessen 10%, Nordrhein-Westfalen 100%). Nordrhein-Westfalen gewinnt zusätzlich seine Energie aus Ölpumpen zu 80% und aus Kohlekraftwerken zu 100%. Im Gegensatz dazu gewinnt Hessen seine Energie aus Geothermie zu 40% und aus Biomasse zu 80%. Damit ist Nordrhein-Westfalen weniger klimaneutral als Hessen." ;
          artyom.say("Nordrhein-Westfalen hat im Vergleich zu Hessen einen höheren Energiegewinn durch Atomenergie (Hessen 10%, Nordrhein-Westfalen 100%). Nordrhein-Westfalen gewinnt zusätzlich seine Energie aus Ölpumpen zu 80% und aus Kohlekraftwerken zu 100%. Im Gegensatz dazu gewinnt Hessen seine Energie aus Geothermie zu 40% und aus Biomasse zu 80%. Damit ist Nordrhein-Westfalen weniger klimaneutral als Hessen.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Thüringen und Sachsen-Anhalt", "Vergleich Thüringen und Sachsen-Anhalt", "Vergleich Sachsen-Anhalt und Thüringen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer benutzen Solarpanels und Atomenergie zur Energiegewinnung. Im Bereich Solarenergie übertrifft Thüringen Sachsen-Anhalt, 50% zu 30%. Bei der Atomenergie aber liegt Sachsen-Anhalt mit 40% zu 20% vorne. Zusätzlich gewinnt Sachsen-Anhalt seine Energie aus Recycling zu 50%, Thüringen aus Windkraft zu 80%, und ist damit 'sauberer' als Sachsen-Anhalt" ;
          artyom.say("Beide Bundesländer benutzen Solarpanels und Atomenergie zur Energiegewinnung. Im Bereich Solarenergie übertrifft Thüringen Sachsen-Anhalt, 50% zu 30%. Bei der Atomenergie aber liegt Sachsen-Anhalt mit 40% zu 20% vorne. Zusätzlich gewinnt Sachsen-Anhalt seine Energie aus Recycling zu 50%, Thüringen aus Windkraft zu 80%, und ist damit 'sauberer' als Sachsen-Anhalt");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Thüringen und Sachsen", "Vergleich Thüringen und Sachsen", "Vergleich Sachsen und Thüringen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Sachsen hat im Vergleich zu Thüringen einen höheren Energiegewinn durch Atomenergie (Sachsen 80%, Thüringen 40%). Sachsen gewinnt zusätzlich seine Energie aus Ölpumpen zu 80% und aus Geothermie zu 50%. Im Gegensatz dazu gewinnt Thüringen seine Energie aus Solarpanels zu 50% und aus Windrädern zu 80%. Damit ist Sachsen weniger klimaneutral als Thüringen." ;
          artyom.say("Sachsen hat im Vergleich zu Thüringen einen höheren Energiegewinn durch Atomenergie (Sachsen 80%, Thüringen 40%). Sachsen gewinnt zusätzlich seine Energie aus Ölpumpen zu 80% und aus Geothermie zu 50%. Im Gegensatz dazu gewinnt Thüringen seine Energie aus Solarpanels zu 50% und aus Windrädern zu 80%. Damit ist Sachsen weniger klimaneutral als Thüringen.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Thüringen und Brandenburg", "Vergleich Thüringen und Brandenburg", "Vergleich Brandenburg und Thüringen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer benutzen Solarpanels und Windräder zur Energiegewinnung und bei beiden Methoden sind sie auf dem selben Niveau, 50% und 80%. Zusätzlich gewinnt aber Brandenburg seine Energie aus Recycling zu 80% und ist damit grüner als Thüringen, welches noch Atomkraftwerke zu 10% nutzt." ;
          artyom.say("Beide Bundesländer benutzen Solarpanels und Windräder zur Energiegewinnung und bei beiden Methoden sind sie auf dem selben Niveau, 50% und 80%. Zusätzlich gewinnt aber Brandenburg seine Energie aus Recycling zu 80% und ist damit grüner als Thüringen, welches noch Atomkraftwerke zu 10% nutzt.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Thüringen und Berlin", "Vergleich Thüringen und Berlin", "Vergleich Berlin und Thüringen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer benutzen Solarpanels und Windräder zur Energiegewinnung, jedoch liegt Berlin mit 100% bei beiden Methoden deutlich vor Thüringen mit 50% und 80%. Zusätzlich gewinnt Berlin seine Energie noch aus Recycling zu 100% und ist damit grüner als Thüringen, welches noch Atomkraftwerke zu 10% nutzt." ;
          artyom.say("Beide Bundesländer benutzen Solarpanels und Windräder zur Energiegewinnung, jedoch liegt Berlin mit 100% bei beiden Methoden deutlich vor Thüringen mit 50% und 80%. Zusätzlich gewinnt Berlin seine Energie noch aus Recycling zu 100% und ist damit grüner als Thüringen, welches noch Atomkraftwerke zu 10% nutzt.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Thüringen und Mecklenburg-Vorpommern", "Vergleich Thüringen und Mecklenburg-Vorpommern", "Vergleich Mecklenburg-Vorpommern und Thüringen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer benutzen Atomenergie zur Energiegewinnung und sind dort auf dem selben Niveau, 10%. Außerdem nutzt Mecklenburg-Vorpommern Wasserkraftwerke zu 80% und Ölpumpen zu 60%. Im Gegensatz dazu nutzt Thüringen die erneuerbaren Energieträger Solarpanels zu 50% und Windräder zu 80% und ist dammit sauberer.";
          artyom.say("Beide Bundesländer benutzen Atomenergie zur Energiegewinnung und sind dort auf dem selben Niveau, 10%. Außerdem nutzt Mecklenburg-Vorpommern Wasserkraftwerke zu 80% und Ölpumpen zu 60%. Im Gegensatz dazu nutzt Thüringen die erneuerbaren Energieträger Solarpanels zu 50% und Windräder zu 80% und ist dammit sauberer.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Thüringen und Schleswig-Holstein", "Vergleich Thüringen und Schleswig-Holstein", "Vergleich Schleswig-Holstein und Thüringen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Schleswig-Holstein sauberer, da es  mehr erneuerbare Energieträger nutzt (Biomasse zu 50%, Geothermal zu 50% und Wasserenergie zu 80%). Thüringen hingegen nutzt zwar Windenergie zu 80% und Solarenergie zu 50%, jedoch auch die konventionelle Methode der Energiegewinnung, die Atomreaktoren zu 10%.";
          artyom.say("Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Schleswig-Holstein sauberer, da es  mehr erneuerbare Energieträger nutzt (Biomasse zu 50%, Geothermal zu 50% und Wasserenergie zu 80%). Thüringen hingegen nutzt zwar Windenergie zu 80% und Solarenergie zu 50%, jedoch auch die konventionelle Methode der Energiegewinnung, die Atomreaktoren zu 10%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Thüringen und Hamburg", "Vergleich Thüringen und Hamburg", "Vergleich Hamburg und Thüringen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer benutzen Windenergie zur Energiegewinnung und sind dort auf dem selben Niveau, 80%. Außerdem nutzt Hamburg Wasserkraftwerke zu 100% und Biomasse zu 10%. Im Gegensatz dazu nutzt Thüringen den erneuerbaren Energieträger Solarpanels zu 50% und den fossilen, Atomenergie zu 10%. Damit ist Hamburg etwas grüner als Thüringen.";
          artyom.say("Beide Bundesländer benutzen Windenergie zur Energiegewinnung und sind dort auf dem selben Niveau, 80%. Außerdem nutzt Hamburg Wasserkraftwerke zu 100% und Biomasse zu 10%. Im Gegensatz dazu nutzt Thüringen den erneuerbaren Energieträger Solarpanels zu 50% und den fossilen, Atomenergie zu 10%. Damit ist Hamburg etwas grüner als Thüringen.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Thüringen und Bremen", "Vergleich Thüringen und Bremen", "Vergleich Bremen und Thüringen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer benutzen Solarpanels und Atomreaktoren zur Energiegewinnung und in beiden Fällen liegt Bremen vor Thüringen. Bei den Solarpanels ist es 80% zu 50% und bei der Atomenergie 70% zu 10%. Zusätzlich zieht Bremen seine Energie aus Recycling zu 10%, Thüringen aus Windrädern zu 80%. Damit sind beide Bundesländer relativ ausgeglichen, was die Energiegewinnungsmethoden angeht.";
          artyom.say("Beide Bundesländer benutzen Solarpanels und Atomreaktoren zur Energiegewinnung und in beiden Fällen liegt Bremen vor Thüringen. Bei den Solarpanels ist es 80% zu 50% und bei der Atomenergie 70% zu 10%. Zusätzlich zieht Bremen seine Energie aus Recycling zu 10%, Thüringen aus Windrädern zu 80%. Damit sind beide Bundesländer relativ ausgeglichen, was die Energiegewinnungsmethoden angeht.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Thüringen und Niedersachsen", "Vergleich Thüringen und Niedersachsen", "Vergleich Niedersachsen und Thüringen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer benutzen Solarpanels und Windräder zur Energiegewinnung. Bei der Solarenergie sind beide auf dem selben Niveau, 50%, jedoch bei den Windrädern liegt Thüringen mit 80% vor Niedersachsen mit 10%. Zusätzlich zieht Niedersachsen seine Energie aus dem Kohleabbau zu 70%, Thüringen aus Atomkraftwerken zu 10%. Somit ist Thüringen grüner als Niedersachsen.";
          artyom.say("Beide Bundesländer benutzen Solarpanels und Windräder zur Energiegewinnung. Bei der Solarenergie sind beide auf dem selben Niveau, 50%, jedoch bei den Windrädern liegt Thüringen mit 80% vor Niedersachsen mit 10%. Zusätzlich zieht Niedersachsen seine Energie aus dem Kohleabbau zu 70%, Thüringen aus Atomkraftwerken zu 10%. Somit ist Thüringen grüner als Niedersachsen.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Thüringen und Nordrhein-Westfalen", "Vergleich Thüringen und Nordrhein-Westfalen", "Vergleich Nordrhein-Westfalen und Thüringen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer benutzen Atomenergie zur Energiegewinnung. Dort liegt Nordrhein-Westfalen deutlich vor Thüringen mit 100% zu 10%. Zusätzlich zieht Nordrhein-Westfalen seine Energie aus weiteren fossilen Brennstoffen wie dem Kohleabbau zu 100% und den Ölpumpen zu 80%. Thüringen hingegen nutzt zusätzlich erneuerbare Energieträger wie Solarpanels zu 50% und Windräder zu 80% und ist damit sauberer als Nordrhein-Westfalen.";
          artyom.say("Beide Bundesländer benutzen Atomenergie zur Energiegewinnung. Dort liegt Nordrhein-Westfalen deutlich vor Thüringen mit 100% zu 10%. Zusätzlich zieht Nordrhein-Westfalen seine Energie aus weiteren fossilen Brennstoffen wie dem Kohleabbau zu 100% und den Ölpumpen zu 80%. Thüringen hingegen nutzt zusätzlich erneuerbare Energieträger wie Solarpanels zu 50% und Windräder zu 80% und ist damit sauberer als Nordrhein-Westfalen.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Sachsen-Anhalt und Sachsen", "Vergleich Sachsen-Anhalt und Sachsen", "Vergleich Sachsen und Sachsen-Anhalt"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer benutzen Atomenergie zur Energiegewinnung, Sachsen liegt dort aber mit 80% vor Sachsen-Anhalt mit 40%. Zusätzlich benutzt Sachsen Ölpumpen zu 80% und Geothermie zu 50% zur Energiegewinnung. Im Vergleich dazu zieht Sachsen-Anhalt seine Energie aus Solarpanels zu 30% und aus Recycling zu 50%. Damit ist Sachsen-Anhalt sauberer als Sachsen.";
          artyom.say("Beide Bundesländer benutzen Atomenergie zur Energiegewinnung, Sachsen liegt dort aber mit 80% vor Sachsen-Anhalt mit 40%. Zusätzlich benutzt Sachsen Ölpumpen zu 80% und Geothermie zu 50% zur Energiegewinnung. Im Vergleich dazu zieht Sachsen-Anhalt seine Energie aus Solarpanels zu 30% und aus Recycling zu 50%. Damit ist Sachsen-Anhalt sauberer als Sachsen.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Sachsen-Anhalt und Brandenburg", "Vergleich Sachsen-Anhalt und Brandenburg", "Vergleich Brandenburg und Sachsen-Anhalt"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer benutzen Solarenergie und Recyceln Müll zur Energiegewinnung. Beide Methoden nutzt Brandenburg mehr als Sachsen-Anhalt, 60% zu 30% und 80% zu 50%. Zusätzlich benutzt Brandenburg Windräder zu 80% zur Energiegewinnung. Im Vergleich dazu zieht Sachsen-Anhalt seine Energie noch aus der konventionellen Methode der Atomkraftwerke zu 40% und ist damit weniger klimaneutral als Brandenburg.";
          artyom.say("Beide Bundesländer benutzen Solarenergie und Recyceln Müll zur Energiegewinnung. Beide Methoden nutzt Brandenburg mehr als Sachsen-Anhalt, 60% zu 30% und 80% zu 50%. Zusätzlich benutzt Brandenburg Windräder zu 80% zur Energiegewinnung. Im Vergleich dazu zieht Sachsen-Anhalt seine Energie noch aus der konventionellen Methode der Atomkraftwerke zu 40% und ist damit weniger klimaneutral als Brandenburg.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Sachsen-Anhalt und Berlin", "Vergleich Sachsen-Anhalt und Berlin", "Vergleich Berlin und Sachsen-Anhalt"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer benutzen Solarenergie und Recyceln Müll zur Energiegewinnung. Beide Methoden nutzt Berlin aber mehr als Sachsen-Anhalt, 100% zu 30% und 100% zu 50%. Zusätzlich benutzt Berlin Windräder zu 100% zur Energiegewinnung. Im Vergleich dazu zieht Sachsen-Anhalt seine Energie noch aus der konventionellen Methode der Atomkraftwerke zu 40% und ist damit weniger klimaneutral als Berlin.";
          artyom.say("Beide Bundesländer benutzen Solarenergie und Recyceln Müll zur Energiegewinnung. Beide Methoden nutzt Berlin aber mehr als Sachsen-Anhalt, 100% zu 30% und 100% zu 50%. Zusätzlich benutzt Berlin Windräder zu 100% zur Energiegewinnung. Im Vergleich dazu zieht Sachsen-Anhalt seine Energie noch aus der konventionellen Methode der Atomkraftwerke zu 40% und ist damit weniger klimaneutral als Berlin.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Sachsen-Anhalt und Mecklenburg-Vorpommern", "Vergleich Sachsen-Anhalt und Mecklenburg-Vorpommern", "Vergleich Mecklenburg-Vorpommern und Sachsen-Anhalt"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer benutzen Atomenergie zur Energiegewinnung, Sachsen-Anhalt liegt dort aber mit 30% vor Mecklenburg-Vorpommern mit 10%. Zusätzlich benutzt Mecklenburg-Vorpommern Ölpumpen zu 70% und Wasser zu 70% zur Energiegewinnung. Im Vergleich dazu zieht Sachsen-Anhalt seine Energie aus Solarpanels zu 30% und aus Recycling zu 50%.";
          artyom.say("Beide Bundesländer benutzen Atomenergie zur Energiegewinnung, Sachsen-Anhalt liegt dort aber mit 30% vor Mecklenburg-Vorpommern mit 10%. Zusätzlich benutzt Mecklenburg-Vorpommern Ölpumpen zu 70% und Wasser zu 70% zur Energiegewinnung. Im Vergleich dazu zieht Sachsen-Anhalt seine Energie aus Solarpanels zu 30% und aus Recycling zu 50%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Sachsen-Anhalt und Schleswig-Holstein", "Vergleich Sachsen-Anhalt und Schleswig-Holstein", "Vergleich Schleswig-Holstein und Sachsen-Anhalt"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Schleswig-Holstein sauberer, da es  mehr erneuerbare Energieträger nutzt (Biomasse zu 50%, Geothermal zu 50% und Wasserenergie zu 80%). Sachsen-Anhalt hingegen nutzt zwar Solarpanels zu 30% und Recycling zu 50%, jedoch auch die konventionelle Methode der Energiegewinnung, die Atomreaktoren zu 30%.";
          artyom.say("Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Schleswig-Holstein sauberer, da es  mehr erneuerbare Energieträger nutzt (Biomasse zu 50%, Geothermal zu 50% und Wasserenergie zu 80%). Sachsen-Anhalt hingegen nutzt zwar Solarpanels zu 30% und Recycling zu 50%, jedoch auch die konventionelle Methode der Energiegewinnung, die Atomreaktoren zu 30%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Sachsen-Anhalt und Hamburg", "Vergleich Sachsen-Anhalt und Hamburg", "Vergleich Hamburg und Sachsen-Anhalt"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Hamburg sauberer, da es  mehr erneuerbare Energieträger nutzt (Biomasse zu 10%, Windkraft zu 80% und Wasserenergie zu 100%). Sachsen-Anhalt hingegen nutzt zwar Solarpanels zu 30% und Recycling zu 50%, jedoch auch die konventionelle Methode der Energiegewinnung, die Atomreaktoren zu 30%.";
          artyom.say("Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Hamburg sauberer, da es  mehr erneuerbare Energieträger nutzt (Biomasse zu 10%, Windkraft zu 80% und Wasserenergie zu 100%). Sachsen-Anhalt hingegen nutzt zwar Solarpanels zu 30% und Recycling zu 50%, jedoch auch die konventionelle Methode der Energiegewinnung, die Atomreaktoren zu 30%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Sachsen-Anhalt und Bremen", "Vergleich Sachsen-Anhalt und Bremen", "Vergleich Bremen und Sachsen-Anhalt"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben die selben Energiegewinnungsmethoden. Bei den Methoden Solarenergie und Atomenergie liegt Bremen mit jeweils 80% bzw. 70% vor Sachsen-Anhalt mit 30% bzw. 40%. Im Bereich Müll recyceln liegt aber Sachsen-Anhalt mit 50% vor Bremen mit 10%. Damit sind beide Bundesländer ungefähr gleich klimaneutral.";
          artyom.say("Beide Bundesländer haben die selben Energiegewinnungsmethoden. Bei den Methoden Solarenergie und Atomenergie liegt Bremen mit jeweils 80% bzw. 70% vor Sachsen-Anhalt mit 30% bzw. 40%. Im Bereich Müll recyceln liegt aber Sachsen-Anhalt mit 50% vor Bremen mit 10%. Damit sind beide Bundesländer ungefähr gleich klimaneutral.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Sachsen-Anhalt und Niedersachsen", "Vergleich Sachsen-Anhalt und Niedersachsen", "Vergleich Niedersachsen und Sachsen-Anhalt"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Niedersachsen liegt mit 50% prozentual vor Sachsen-Anhalt mit 30% bei der Solarenergie. Zusätzlich gewinnt Niedersachsen seine Energie aus Windkraft zu 10% und aus dem konventionellen Energieträger dem Kohleabbau zu 70%. Im Gegensatz dazu gewinnt Sachsen-Anhalt seine Energie aus Recycling zu 50% und aus der Atomenergie zu 40%. Damit ist Sachsen-Anhalt etwas grüner als Niedersachsen.";
          artyom.say("Niedersachsen liegt mit 50% prozentual vor Sachsen-Anhalt mit 30% bei der Solarenergie. Zusätzlich gewinnt Niedersachsen seine Energie aus Windkraft zu 10% und aus dem konventionellen Energieträger dem Kohleabbau zu 70%. Im Gegensatz dazu gewinnt Sachsen-Anhalt seine Energie aus Recycling zu 50% und aus der Atomenergie zu 40%. Damit ist Sachsen-Anhalt etwas grüner als Niedersachsen.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Sachsen-Anhalt und Nordrhein-Westfalen", "Vergleich Sachsen-Anhalt und Nordrhein-Westfalen", "Vergleich Nordrhein-Westfalen und Sachsen-Anhalt"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Nordrhein-Westfalen liegt mit 100% prozentual vor Sachsen-Anhalt mit 30% bei der Atomenergie. Zusätzlich gewinnt Nordrhein-Westfalen seine Energie aus fossilen Brennstoffen wie Kohl (100%) und Öl (80%). Im Gegensatz dazu gewinnt Sachsen-Anhalt seine Energie aus Recycling zu 50% und aus der Atomenergie zu 40%. Damit ist Sachsen-Anhalt grüner als Nordrhein-Westfalen.";
          artyom.say("Nordrhein-Westfalen liegt mit 100% prozentual vor Sachsen-Anhalt mit 30% bei der Atomenergie. Zusätzlich gewinnt Nordrhein-Westfalen seine Energie aus fossilen Brennstoffen wie Kohl (100%) und Öl (80%). Im Gegensatz dazu gewinnt Sachsen-Anhalt seine Energie aus Recycling zu 50% und aus der Atomenergie zu 40%. Damit ist Sachsen-Anhalt grüner als Nordrhein-Westfalen.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Sachsen und Brandenburg", "Vergleich Sachsen und Brandenburg", "Vergleich Brandenburg und Sachsen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Brandenburg sauberer, da es  mehr erneuerbare Energieträger nutzt (Solarenergie zu 60%, Windkraft zu 80% und Recycling zu 80%). Sachsen hingegen nutzt zwar Geothermie zu 40%, jedoch auch die konventionellen Methoden, die Atomreaktoren zu 80% und Ölpumpen zu 80%.";
          artyom.say("Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Brandenburg sauberer, da es  mehr erneuerbare Energieträger nutzt (Solarenergie zu 60%, Windkraft zu 80% und Recycling zu 80%). Sachsen hingegen nutzt zwar Geothermie zu 40%, jedoch auch die konventionellen Methoden, die Atomreaktoren zu 80% und Ölpumpen zu 80%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Sachsen und Berlin", "Vergleich Sachsen und Berlin", "Vergleich Berlin und Sachsen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Brandenburg sauberer, da es  mehr erneuerbare Energieträger nutzt (Solarenergie zu 100%, Windkraft zu 100% und Recycling zu 100%). Sachsen hingegen nutzt zwar Geothermie zu 40%, jedoch auch die konventionellen Methoden, die Atomreaktoren zu 80% und Ölpumpen zu 80%.";
          artyom.say("Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Brandenburg sauberer, da es  mehr erneuerbare Energieträger nutzt (Solarenergie zu 100%, Windkraft zu 100% und Recycling zu 100%). Sachsen hingegen nutzt zwar Geothermie zu 40%, jedoch auch die konventionellen Methoden, die Atomreaktoren zu 80% und Ölpumpen zu 80%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Sachsen und Mecklenburg-Vorpommern", "Vergleich Sachsen und Mecklenburg-Vorpommern", "Vergleich Mecklenburg-Vorpommern und Sachsen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Sowohl Mecklenburg-Vorpommern, als auch Sachsen nutzen die konventionellen Energieträger Atomenergie und Ölpumpen zur Energiegewinnung. In beiden Fällen liegt Sachsen vor Mecklenburg-Vorpommern. Bei den Atomreaktoren 80% zu 10%, den Ölpumpen 80% zu 70%. Zusätzlich bekommt Sachsen seine Energie Geothermal zu 40%, Mecklenburg-Vorpommern aus dem Wasser zu 80%. Somit ist Mecklenburg-Vorpommern etwas sauberer.";
          artyom.say("Sowohl Mecklenburg-Vorpommern, als auch Sachsen nutzen die konventionellen Energieträger Atomenergie und Ölpumpen zur Energiegewinnung. In beiden Fällen liegt Sachsen vor Mecklenburg-Vorpommern. Bei den Atomreaktoren 80% zu 10%, den Ölpumpen 80% zu 70%. Zusätzlich bekommt Sachsen seine Energie Geothermal zu 40%, Mecklenburg-Vorpommern aus dem Wasser zu 80%. Somit ist Mecklenburg-Vorpommern etwas sauberer.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Sachsen und Schleswig-Holstein", "Vergleich Sachsen und Schleswig-Holstein", "Vergleich Schleswig-Holstein und Sachsen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Sachsen hat im Vergleich zu Schleswig-Holstein einen niedrigeren Energiegewinn durch Geothermie (Sachsen 40%, Schleswig-Holstein 60%). Sachsen gewinnt zusätzlich seine Energie aus Ölpumpen zu 80% und aus Atomkraftwerken zu 80%. Im Gegensatz dazu gewinnt Schleswig-Holstein seine Energie aus Biomasse zu 50% und aus Wasserkraftwerken zu 80%. Damit ist Sachsen weniger klimaneutral als Schleswig-Holstein.";
          artyom.say("Sachsen hat im Vergleich zu Schleswig-Holstein einen niedrigeren Energiegewinn durch Geothermie (Sachsen 40%, Schleswig-Holstein 60%). Sachsen gewinnt zusätzlich seine Energie aus Ölpumpen zu 80% und aus Atomkraftwerken zu 80%. Im Gegensatz dazu gewinnt Schleswig-Holstein seine Energie aus Biomasse zu 50% und aus Wasserkraftwerken zu 80%. Damit ist Sachsen weniger klimaneutral als Schleswig-Holstein.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Sachsen und Hamburg", "Vergleich Sachsen und Hamburg", "Vergleich Hamburg und Sachsen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Hamburg sauberer, da es  mehr erneuerbare Energieträger nutzt (Wasserkraft zu 100%, Windkraft zu 80% und Biomasse zu 10%). Sachsen hingegen nutzt zwar Geothermie zu 40%, jedoch auch die konventionellen Methoden, die Atomreaktoren zu 80% und Ölpumpen zu 80%.";
          artyom.say("Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Hamburg sauberer, da es  mehr erneuerbare Energieträger nutzt (Wasserkraft zu 100%, Windkraft zu 80% und Biomasse zu 10%). Sachsen hingegen nutzt zwar Geothermie zu 40%, jedoch auch die konventionellen Methoden, die Atomreaktoren zu 80% und Ölpumpen zu 80%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Sachsen und Bremen", "Vergleich Sachsen und Bremen", "Vergleich Bremen und Sachsen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Sachsen hat im Vergleich zu Bremen einen höheren Energiegewinn durch Atomenergie (Sachsen 80%, Bremen 60%). Sachsen gewinnt zusätzlich seine Energie aus Ölpumpen zu 80% und aus Geothermie zu 40%. Im Gegensatz dazu gewinnt Bremen seine Energie aus Solarpanels zu 80% und aus Recycling zu 10%. Damit ist Sachsen weniger klimaneutral als Bremen, da es mehr fossile Brennstoffe nutzt.";
          artyom.say("Sachsen hat im Vergleich zu Bremen einen höheren Energiegewinn durch Atomenergie (Sachsen 80%, Bremen 60%). Sachsen gewinnt zusätzlich seine Energie aus Ölpumpen zu 80% und aus Geothermie zu 40%. Im Gegensatz dazu gewinnt Bremen seine Energie aus Solarpanels zu 80% und aus Recycling zu 10%. Damit ist Sachsen weniger klimaneutral als Bremen, da es mehr fossile Brennstoffe nutzt.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Sachsen und Niedersachsen", "Vergleich Sachsen und Niedersachsen", "Vergleich Niedersachsen und Sachsen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Niedersachsen etwas sauberer, da es  zum Teil mehr erneuerbare Energieträger nutzt (Kohlekraftwerke zu 70%, Windkraft zu 10% und Solarpanels zu 50%). Sachsen hingegen nutzt zwar Geothermie zu 40%, jedoch auch die konventionellen Methoden, die Atomreaktoren zu 80% und Ölpumpen zu 80%.";
          artyom.say("Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Niedersachsen etwas sauberer, da es  zum Teil mehr erneuerbare Energieträger nutzt (Kohlekraftwerke zu 70%, Windkraft zu 10% und Solarpanels zu 50%). Sachsen hingegen nutzt zwar Geothermie zu 40%, jedoch auch die konventionellen Methoden, die Atomreaktoren zu 80% und Ölpumpen zu 80%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Sachsen und Nordrhein-Westfalen", "Vergleich Sachsen und Nordrhein-Westfalen", "Vergleich Nordrhein-Westfalen und Sachsen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Nordrhein-Westfalen hat im Vergleich zu Sachsen einen höheren Energiegewinn durch Atomenergie (Sachsen 80%, Nordrhein-Westfalen 100%). Im Bereich der Ölpumpen liegen beide auf dem selben Niveau, 80%. Zusätzlich gewinnt Nordrhein-Westfalen seine Energie aus dem Kohleabbau zu 100%, Sachsen Geothermal zu 40%. Somit ist Sachsen zum Teil grüner als Nordrhein-Westfalen, da es zumindest eine erneuerbare Energiegewinnungsmethode nutzt.";
          artyom.say("Nordrhein-Westfalen hat im Vergleich zu Sachsen einen höheren Energiegewinn durch Atomenergie (Sachsen 80%, Nordrhein-Westfalen 100%). Im Bereich der Ölpumpen liegen beide auf dem selben Niveau, 80%. Zusätzlich gewinnt Nordrhein-Westfalen seine Energie aus dem Kohleabbau zu 100%, Sachsen Geothermal zu 40%. Somit ist Sachsen zum Teil grüner als Nordrhein-Westfalen, da es zumindest eine erneuerbare Energiegewinnungsmethode nutzt.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Brandenburg und Berlin", "Vergleich Brandenburg und Berlin", "Vergleich Berlin und Brandenburg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer nutzen die selben Energieträger, jedoch liegt Berlin bei allen vor Brandenburg, mit jeweils 100%, und ist damit grüner als Brandenburg.";
          artyom.say("Beide Bundesländer nutzen die selben Energieträger, jedoch liegt Berlin bei allen vor Brandenburg, mit jeweils 100%, und ist damit grüner als Brandenburg.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Brandenburg und Mecklenburg-Vorpommern", "Vergleich Brandenburg und Mecklenburg-Vorpommern", "Vergleich Mecklenburg-Vorpommern und Brandenburg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben keine Gemeinsamkeiten, was die Energieträger angeht. Brandenburg nutzt nur erneuerbare Energien wie Solarpanels zu 60%, Windkraft zu 80% und Recycling zu 80%. Mecklenburg-Vorpommern nutzt zwar auch Wasser zu 70% als erneuerbare Energie, aber auch die fossilen Brennstoffe wie Atomenergie zu 10% und Öl zu 70%. Damit ist Brandenburg sauberer als Mecklenburg-Vorpommern.";
          artyom.say("Beide Bundesländer haben keine Gemeinsamkeiten, was die Energieträger angeht. Brandenburg nutzt nur erneuerbare Energien wie Solarpanels zu 60%, Windkraft zu 80% und Recycling zu 80%. Mecklenburg-Vorpommern nutzt zwar auch Wasser zu 70% als erneuerbare Energie, aber auch die fossilen Brennstoffe wie Atomenergie zu 10% und Öl zu 70%. Damit ist Brandenburg sauberer als Mecklenburg-Vorpommern.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Brandenburg und Schleswig-Holstein", "Vergleich Brandenburg und Schleswig-Holstein", "Vergleich Schleswig-Holstein und Brandenburg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben keine Gemeinsamkeiten, was die Energieträger angeht. Brandenburg nutzt nur erneuerbare Energien wie Solarpanels zu 60%, Windkraft zu 80% und Recycling zu 80%. Schleswig-Holstein nutzt ebenso nur erneuerbare Energien wie Wasser zu 80%, Geothermie zu 60% und Biomasse zu 50%, jedoch zu einem geringeren Anteil, wodurch Brandenburg grüner ist als Schleswig-Holstein.";
          artyom.say("Beide Bundesländer haben keine Gemeinsamkeiten, was die Energieträger angeht. Brandenburg nutzt nur erneuerbare Energien wie Solarpanels zu 60%, Windkraft zu 80% und Recycling zu 80%. Mecklenburg-Vorpommern nutzt ebenso nur erneuerbare Energien wie Wasser zu 80%, Geothermie zu 60% und Biomasse zu 50%, jedoch zu einem geringeren Anteil, wodurch Brandenburg grüner ist als Schleswig-Holstein.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Brandenburg und Hamburg", "Vergleich Brandenburg und Hamburg", "Vergleich Hamburg und Brandenburg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Im Bereich der Windkraft sind beide auf einem gleichen Niveau, 80%. Brandenburg nutzt zusätzlich Solarpanels zu 60% und Recycling zu 80% zur Energiegewinnung, Hamburg Wasser zu 100% und Biomasse zu 10%. Damit ist Brandenburg grüner als Hamburg.";
          artyom.say("Im Bereich der Windkraft sind beide auf einem gleichen Niveau, 80%. Brandenburg nutzt zusätzlich Solarpanels zu 60% und Recycling zu 80% zur Energiegewinnung, Hamburg Wasser zu 100% und Biomasse zu 10%. Damit ist Brandenburg grüner als Hamburg.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Brandenburg und Bremen", "Vergleich Brandenburg und Bremen", "Vergleich Bremen und Brandenburg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Brandenburg hat im Vergleich zu Bremen einen höheren Energiegewinn durch Recycling (Brandenburg 80%, Bremen 10%), jedoch liegt Brandenburg hinter Bremen wenn es um Solarpanels geht. Dort steht es 60% zu 80%. Nichtsdestotrotz ist Brandenburg grüner, da es eine weitere erneuerbare Energiegewinnungsmethode nutzt, die Windkraft zu 80%. Bremen nutzt die fossile Methode der Atomenergie zu 70%.";
          artyom.say("Brandenburg hat im Vergleich zu Bremen einen höheren Energiegewinn durch Recycling (Brandenburg 80%, Bremen 10%), jedoch liegt Brandenburg hinter Bremen wenn es um Solarpanels geht. Dort steht es 60% zu 80%. Nichtsdestotrotz ist Brandenburg grüner, da es eine weitere erneuerbare Energiegewinnungsmethode nutzt, die Windkraft zu 80%. Bremen nutzt die fossile Methode der Atomenergie zu 70%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Brandenburg und Niedersachsen", "Vergleich Brandenburg und Niedersachsen", "Vergleich Niedersachsen und Brandenburg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer nutzten zwar Wind und Solar als Energieträger, jedoch nutzt Niedersachsen diese mit 10% und 50% nicht so viel wie Brandenburg mit 80% und 60%. Zusätzlich zieht Brandenburg seine Energie aus dem recyceln von Müll zu 80%, Niedersachsen aus der konventionellen Art des Kohleabbau zu 70%. Somit ist Brandenburg klimaneutraler als Niedersachsen.";
          artyom.say("Beide Bundesländer nutzten zwar Wind und Solar als Energieträger, jedoch nutzt Niedersachsen diese mit 10% und 50% nicht so viel wie Brandenburg mit 80% und 60%. Zusätzlich zieht Brandenburg seine Energie aus dem recyceln von Müll zu 80%, Niedersachsen aus der konventionellen Art des Kohleabbau zu 70%. Somit ist Brandenburg klimaneutraler als Niedersachsen.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Brandenburg und Nordrhein-Westfalen", "Vergleich Brandenburg und Nordrhein-Westfalen", "Vergleich Nordrhein-Westfalen und Brandenburg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben keine Gemeinsamkeiten, was die Energieträger angeht. Brandenburg nutzt nur erneuerbare Energien wie Solarpanels zu 60%, Windkraft zu 80% und Recycling zu 80%. Nordrhein-Westfalen nutzt keine einzige erneuerbare Energie, wodurch Brandenburg grüner ist als Nordrhein-Westfalen. Nordrhein-Westfalen nutzt Öl zu 80%, Atomenergie und Kohle zu 100%.";
          artyom.say("Beide Bundesländer haben keine Gemeinsamkeiten, was die Energieträger angeht. Brandenburg nutzt nur erneuerbare Energien wie Solarpanels zu 60%, Windkraft zu 80% und Recycling zu 80%. Nordrhein-Westfalen nutzt keine einzige erneuerbare Energie, wodurch Brandenburg grüner ist als Nordrhein-Westfalen. Nordrhein-Westfalen nutzt Öl zu 80%, Atomenergie und Kohle zu 100%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Berlin und Mecklenburg-Vorpommern", "Vergleich Berlin und Mecklenburg-Vorpommern", "Vergleich Mecklenburg-Vorpommern und Berlin"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben keine Gemeinsamkeiten, was die Energieträger angeht. Berlin nutzt nur erneuerbare Energien wie Solarpanels, Windkraft und Recycling zu jeweils 100%. Mecklenburg-Vorpommern nutzt nur eine erneuerbare Energie, Wasserkraft zu 70%. Der Rest sind konventionelle Energieträger wie Atomenergie zu 10% und Öl zu 70%. Dadurch ist Berlin klimaneutraler als Mecklenburg-Vorpommern.";
          artyom.say("Beide Bundesländer haben keine Gemeinsamkeiten, was die Energieträger angeht. Berlin nutzt nur erneuerbare Energien wie Solarpanels, Windkraft und Recycling zu jeweils 100%. Mecklenburg-Vorpommern nutzt nur eine erneuerbare Energie, Wasserkraft zu 70%. Der Rest sind konventionelle Energieträger wie Atomenergie zu 10% und Öl zu 70%. Dadurch ist Berlin klimaneutraler als Mecklenburg-Vorpommern.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Berlin und Schleswig-Holstein", "Vergleich Berlin und Schleswig-Holstein", "Vergleich Schleswig-Holstein und Berlin"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben keine Gemeinsamkeiten, was die Energieträger angeht. Berlin nutzt nur erneuerbare Energien wie Solarpanels, Windkraft und Recycling zu jeweils 100%. Schleswig-Holstein nutzt ebenso nur erneuerbare Energien wie Wasser zu 80%, Geothermie zu 60% und Biomasse zu 50%, jedoch zu einem geringeren Anteil, wodurch Berlin grüner ist als Schleswig-Holstein.";
          artyom.say("Beide Bundesländer haben keine Gemeinsamkeiten, was die Energieträger angeht. Berlin nutzt nur erneuerbare Energien wie Solarpanels, Windkraft und Recycling zu jeweils 100%. Schleswig-Holstein nutzt ebenso nur erneuerbare Energien wie Wasser zu 80%, Geothermie zu 60% und Biomasse zu 50%, jedoch zu einem geringeren Anteil, wodurch Berlin grüner ist als Schleswig-Holstein.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Berlin und Hamburg", "Vergleich Berlin und Hamburg", "Vergleich Hamburg und Berlin"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Berlin hat im Vergleich mit Hamburg einen höheren Energiegewinn durch Windkraftwerke, nämlich 100% zu 80%. Zusätzlich zieht Berlin seine Energie zu jeweils 100% aus Sonnenstrahlen und Müll recyceln. Nur bei den Wasserkraftwerken hat Hamburg auch 100%, ansonsten gewinnt Hamburg seine Energie noch aus Biomasse zu 10%. Nichtsdestotrotz ist Berlin durch den prozentualen Vorteil grüner als Hamburg";
          artyom.say("Berlin hat im Vergleich mit Hamburg einen höheren Energiegewinn durch Windkraftwerke, nämlich 100% zu 80%. Zusätzlich zieht Berlin seine Ergie zu jeweils 100% aus Sonnenstrahlen und Müll recyceln. Nur bei den Wasserkraftwerken hat Hamburg auch 100%, ansonsten gewinnt Hamburg seine Energie noch aus Biomasse zu 10%. Nichtsdestotrotz ist Berlin durch den prozentualen Vorteil grüner als Hamburg");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Berlin und Bremen", "Vergleich Berlin und Bremen", "Vergleich Bremen und Berlin"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Berlin hat im Vergleich mit Bremen einen höheren Energiegewinn durch Solarpanels und Recycling, nämlich jeweils 100% zu 80% bzw. 10%. Zusätzlich zieht Berlin seine Energie zu 100% aus Windkraft. Bremen zieht zusätzlich seine Energie aus der konventionellen Art der Atomreaktoren zu 70% und ist damit 'schmutziger' als Berlin";
          artyom.say("Berlin hat im Vergleich mit Hamburg einen höheren Energiegewinn durch Solarpanels und Recycling, nämlich jeweils 100% zu 80% bzw. 10%. Zusätzlich zieht Berlin seine Ergie zu 100% aus Windkraft. Bremen zieht zusätzlich seine Energie aus der konventionellen Art der Atomreaktoren zu 70% und ist damit 'schmutziger' als Berlin");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Berlin und Niedersachsen", "Vergleich Berlin und Niedersachsen", "Vergleich Niedersachsen und Berlin"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Berlin hat im Vergleich mit Niedersachsen einen höheren Energiegewinn durch Solarpanels und Windkraftwerken, nämlich jeweils 100% zu 50% bzw. 10%. Zusätzlich zieht Berlin seine Energie zu 100% aus Recycling. Niedersachsen zieht zusätzlich seine Energie aus der konventionellen Art der Kohle zu 70% und ist damit 'schmutziger' als Berlin";
          artyom.say("Berlin hat im Vergleich mit Niedersachsen einen höheren Energiegewinn durch Solarpanels und Windkraftwerken, nämlich jeweils 100% zu 50% bzw. 10%. Zusätzlich zieht Berlin seine Energie zu 100% aus Recycling. Niedersachsen zieht zusätzlich seine Energie aus der konventionellen Art der Kohle zu 70% und ist damit 'schmutziger' als Berlin");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Berlin und Nordrhein-Westfalen", "Vergleich Berlin und Nordrhein-Westfalen", "Vergleich Nordrhein-Westfalen und Berlin"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben keine Gemeinsamkeiten, was die Energieträger angeht. Berlin nutzt jedoh nur erneuerbare Energien wie Solarpanels, Windkraft und Recycling zu jeweils 100%. Nordrhein-Westfalen nutzt dagegen keine einzigeerneuerbare Energien sondern nur konventionelle, wodurch Berlin grüner ist als Nordrhein-Westfalen.";
          artyom.say("Beide Bundesländer haben keine Gemeinsamkeiten, was die Energieträger angeht. Berlin nutzt jedoh nur erneuerbare Energien wie Solarpanels, Windkraft und Recycling zu jeweils 100%. Nordrhein-Westfalen nutzt dagegen keine einzigeerneuerbare Energien sondern nur konventionelle, wodurch Berlin grüner ist als Nordrhein-Westfalen.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Mecklenburg-Vorpommern und Schleswig-Holstein", "Vergleich Mecklenburg-Vorpommern und Schleswig-Holstein", "Vergleich Schleswig-Holstein und Mecklenburg-Vorpommern"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Schleswig-Holstein hat einen höheren Energiegewinn durch Wasserkraftwerke als Mecklenburg-Vorpommern, nämlich 80% zu 70%. Zusätzlich nutzt Schleswig-Holstein Biomasse zu 50% und Geothermie zu 60% zur Energiegewinnung. Im Gegensatz dazu nutzt Mecklenburg-Vorpommern die fossilen Brennstoffe Atomenergie (10%) und Öl (70%) und ist damit weniger klimaneutral als Schleswig-Holstein.";
          artyom.say("Schleswig-Holstein hat einen höheren Energiegewinn durch Wasserkraftwerke als Mecklenburg-Vorpommern, nämlich 80% zu 70%. Zusätzlich nutzt Schleswig-Holstein Biomasse zu 50% und Geothermie zu 60% zur Energiegewinnung. Im Gegensatz dazu nutzt Mecklenburg-Vorpommern die fossilen Brennstoffe Atomenergie (10%) und Öl (70%) und ist damit weniger klimaneutral als Schleswig-Holstein.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Mecklenburg-Vorpommern und Hamburg", "Vergleich Mecklenburg-Vorpommern und Hamburg", "Vergleich Hamburg und Mecklenburg-Vorpommern"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Hamburg hat einen höheren Energiegewinn durch Wasserkraftwerke als Mecklenburg-Vorpommern, nämlich 100% zu 70%. Zusätzlich nutzt Hamburg Biomasse zu 10% und Windkraftwerke zu 80% zur Energiegewinnung. Im Gegensatz dazu nutzt Mecklenburg-Vorpommern die fossilen Brennstoffe Atomenergie (10%) und Öl (70%) und ist damit weniger klimaneutral als Hamburg.";
          artyom.say("Hamburg hat einen höheren Energiegewinn durch Wasserkraftwerke als Mecklenburg-Vorpommern, nämlich 100% zu 70%. Zusätzlich nutzt Hamburg Biomasse zu 10% und Windkraftwerke zu 80% zur Energiegewinnung. Im Gegensatz dazu nutzt Mecklenburg-Vorpommern die fossilen Brennstoffe Atomenergie (10%) und Öl (70%) und ist damit weniger klimaneutral als Hamburg.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Mecklenburg-Vorpommern und Bremen", "Vergleich Mecklenburg-Vorpommern und Bremen", "Vergleich Bremen und Mecklenburg-Vorpommern"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Bremen hat einen höheren Energiegewinn durch Atomreaktoren als Mecklenburg-Vorpommern, nämlich 70% zu 10%. Zusätzlich nutzt Bremen Recycling zu 10% und Solarenergie zu 80% zur Energiegewinnung. Im Gegensatz dazu nutzt Mecklenburg-Vorpommern den fossilen Brennstoff Öl (70%) und Wasserkraftwerke (70%) als Energieträger. Somit sind beide Bundesländer ungefähr gleich was die Klimaneutralität betrifft.";
          artyom.say("Bremen hat einen höheren Energiegewinn durch Atomreaktoren als Mecklenburg-Vorpommern, nämlich 70% zu 10%. Zusätzlich nutzt Bremen Recycling zu 10% und Solarenergie zu 80% zur Energiegewinnung. Im Gegensatz dazu nutzt Mecklenburg-Vorpommern den fossilen Brennstoff Öl (70%) und Wasserkraftwerke (70%) als Energieträger. Somit sind beide Bundesländer ungefähr gleich was die Klimaneutralität betrifft.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Mecklenburg-Vorpommern und Niedersachsen", "Vergleich Mecklenburg-Vorpommern und Niedersachsen", "Vergleich Niedersachsen und Mecklenburg-Vorpommern"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiegewinnungsmethoden. Mecklenburg-Vorpommern gewinnt seine Energie aus den beiden fossilen Methoden Atomenergie (10%) und Ölpumpen (70%), sowie der erneuerbaren Methode der Wasserkraftwerke (70%). Im Gegensatz dazu nutzt Niedersachsen nur einen fossilen Brennstoff, Kohle zu 70%, und 2 erneuerbare Methoden, Windkraftwerke zu 10% und Solarpanels zu 50%. Damit ist Niedersachsen teilweise grüner als Mecklenburg-Vorpommern.";
          artyom.say("Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiegewinnungsmethoden. Mecklenburg-Vorpommern gewinnt seine Energie aus den beiden fossilen Methoden Atomenergie (10%) und Ölpumpen (70%), sowie der erneuerbaren Methode der Wasserkraftwerke (70%). Im Gegensatz dazu nutzt Niedersachsen nur einen fossilen Brennstoff, Kohle zu 70%, und 2 erneuerbare Methoden, Windkraftwerke zu 10% und Solarpanels zu 50%. Damit ist Niedersachsen teilweise grüner als Mecklenburg-Vorpommern.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Mecklenburg-Vorpommern und Nordrhein-Westfalen", "Vergleich Mecklenburg-Vorpommern und Nordrhein-Westfalen", "Vergleich Nordrhein-Westfalen und Mecklenburg-Vorpommern"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer nutzen die konventionelle Art der Energiegewinnung durch Atomenergie und Kohleabbau. Nordrhein-Westfalen benutzt diese aber zu 100%, Mecklenburg-Vorpommern nur zu 10% bzw. 70%. Zusätzlich benutzt Mecklenburg-Vorpommern noch Wasserkraftwerke zu 70% als erneuerbarer Energieträger, Nordrhein-Westfalen Öl (80%) als weiteren fossilen Brennstoff und ist damit weniger klimaneutral als Mecklenburg-Vorpommern.";
          artyom.say("Beide Bundesländer nutzen die konventionelle Art der Energiegewinnung durch Atomenergie und Kohleabbau. Nordrhein-Westfalen benutzt diese aber zu 100%, Mecklenburg-Vorpommern nur zu 10% bzw. 70%. Zusätzlich benutzt Mecklenburg-Vorpommern noch Wasserkraftwerke zu 70% als erneuerbarer Energieträger, Nordrhein-Westfalen Öl (80%) als weiteren fossilen Brennstoff und ist damit weniger klimaneutral als Mecklenburg-Vorpommern.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Schleswig-Holstein und Hamburg", "Vergleich Schleswig-Holstein und Hamburg", "Vergleich Hamburg und Schleswig-Holstein"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Schleswig-Holstein hat im Bereich der Biomasse einen höheren Energiegewinn als Hamburg, 50% zu 10%. Dafür hat Hamburg mit 100% einen höheren Energiegewinn als Schleswig-Holstein mit 80%. Die dritte Energiemethode von Hamburg sind die Windräder zu 80%, bei Schleswig-Holstein die Geothermie 60%. Somit sind beide gleich grün und klimaneutral.";
          artyom.say("Schleswig-Holstein hat im Bereich der Biomasse einen höheren Energiegewinn als Hamburg, 50% zu 10%. Dafür hat Hamburg mit 100% einen höheren Energiegewinn als Schleswig-Holstein mit 80%. Die dritte Energiemethode von Hamburg sind die Windräder zu 80%, bei Schleswig-Holstein die Geothermie 60%. Somit sind beide gleich grün und klimaneutral.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Schleswig-Holstein und Bremen", "Vergleich Schleswig-Holstein und Bremen", "Vergleich Bremen und Schleswig-Holstein"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Schleswig-Holstein sauberer, da es  mehr erneuerbare Energieträger nutzt (Wasserkraftwerke zu 80%, Biomasse zu 50% und Geothermie zu 50%). Bremen hingegen nutzt zwar Solarpanels zu 40% und Recycling zu 10%, jedoch auch die konventionelle Methode, die Atomreaktoren zu 60%.";
          artyom.say("Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Schleswig-Holstein sauberer, da es  mehr erneuerbare Energieträger nutzt (Wasserkraftwerke zu 80%, Biomasse zu 50% und Geothermie zu 50%). Bremen hingegen nutzt zwar Solarpanels zu 40% und Recycling zu 10%, jedoch auch die konventionelle Methode, die Atomreaktoren zu 60%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Schleswig-Holstein und Niedersachsen", "Vergleich Schleswig-Holstein und Niedersachsen", "Vergleich Niedersachsen und Schleswig-Holstein"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Schleswig-Holstein sauberer, da es  mehr erneuerbare Energieträger nutzt (Wasserkraftwerke zu 80%, Biomasse zu 50% und Geothermie zu 50%). Niedersachsen hingegen nutzt zwar Solarpanels zu 50% und Windenergie zu 10%, jedoch auch die konventionelle Methode, die Kohlekraftwerke zu 60%.";
          artyom.say("Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Schleswig-Holstein sauberer, da es  mehr erneuerbare Energieträger nutzt (Wasserkraftwerke zu 80%, Biomasse zu 50% und Geothermie zu 50%). Niedersachsen hingegen nutzt zwar Solarpanels zu 50% und Windenergie zu 10%, jedoch auch die konventionelle Methode, die Kohlekraftwerke zu 60%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Schleswig-Holstein und Nordrhein-Westfalen", "Vergleich Schleswig-Holstein und Nordrhein-Westfalen", "Vergleich Nordrhein-Westfalen und Schleswig-Holstein"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Schleswig-Holstein sauberer, da es  mehr erneuerbare Energieträger nutzt (Wasserkraftwerke zu 80%, Biomasse zu 50% und Geothermie zu 50%). Nordrhein-Westfalen hingegen gewinnt nur durch konventionelle Methoden, Kohlekraftwerke (100%), Atomenergie (100%) und Ölpumpen (80%), seine Energie.";
          artyom.say("Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Schleswig-Holstein sauberer, da es  mehr erneuerbare Energieträger nutzt (Wasserkraftwerke zu 80%, Biomasse zu 50% und Geothermie zu 50%). Nordrhein-Westfalen hingegen gewinnt nur durch konventionelle Methoden, Kohlekraftwerke (100%), Atomenergie (100%) und Ölpumpen (80%), seine Energie.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Hamburg und Bremen", "Vergleich Hamburg und Bremen", "Vergleich Bremen und Hamburg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Hamburg sauberer, da es  mehr erneuerbare Energieträger nutzt (Wasserkraftwerke zu 100%, Biomasse zu 10% und Windkraft zu 80%). Bremen hingegen nutzt zwar Solarpanels zu 80% und Recycling zu 10%, jedoch auch die konventionelle Methode, die Atomkraftwerke zu 70%.";
          artyom.say("Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Hamburg sauberer, da es  mehr erneuerbare Energieträger nutzt (Wasserkraftwerke zu 100%, Biomasse zu 10% und Windkraft zu 80%). Bremen hingegen nutzt zwar Solarpanels zu 80% und Recycling zu 10%, jedoch auch die konventionelle Methode, die Atomkraftwerke zu 70%.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Hamburg und Niedersachsen", "Vergleich Hamburg und Niedersachsen", "Vergleich Niedersachsen und Hamburg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Hamburg hat im Bereich der Windkraft eine höhere Energiegewinnung als Niedersachsen, 80% zu 10%. Zusätzlich gewinnt Hamburg seine Energie aus Wasserkraft zu 100% und Biomasse zu 10%. Im Gegensatz dazu nutzt Niedersachsen Solarpanels zu 50% und Kohlekraftwerke zu 70% als Energieträger. Damit ist Hamburg klimaneutraler als Niedersachsen.";
          artyom.say("Hamburg hat im Bereich der Windkraft eine höhere Energiegewinnung als Niedersachsen, 80% zu 10%. Zusätzlich gewinnt Hamburg seine Energie aus Wasserkraft zu 100% und Biomasse zu 10%. Im Gegensatz dazu nutzt Niedersachsen Solarpanels zu 50% und Kohlekraftwerke zu 70% als Energieträger. Damit ist Hamburg klimaneutraler als Niedersachsen.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Hamburg und Nordrhein-Westfalen", "Vergleich Hamburg und Nordrhein-Westfalen", "Vergleich Nordrhein-Westfalen und Hamburg"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Hamburg sauberer, da es  mehr erneuerbare Energieträger nutzt (Wasserkraftwerke zu 100%, Biomasse zu 10% und Windräder zu 80%). Nordrhein-Westfalen hingegen gewinnt nur durch konventionelle Methoden, Kohlekraftwerke (100%), Atomenergie (100%) und Ölpumpen (80%), seine Energie.";
          artyom.say("Beide Bundesländer haben keine Gemeinsamkeiten bei den Energiemethode, jedoch ist Hamburg sauberer, da es  mehr erneuerbare Energieträger nutzt (Wasserkraftwerke zu 100%, Biomasse zu 10% und Windräder zu 80%). Nordrhein-Westfalen hingegen gewinnt nur durch konventionelle Methoden, Kohlekraftwerke (100%), Atomenergie (100%) und Ölpumpen (80%), seine Energie.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Bremen und Niedersachsen", "Vergleich Bremen und Niedersachsen", "Vergleich Niedersachsen und Bremen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Bremen hat im Bereich der Solarpanels einen höheren Energiegewinn als Niedersachsen, 80% zu 50%. Zusätzlich gewinnt Bremen seine Energie aus Atomreaktoren zu 60% und aus Recycling zu 10%. Niedersachsen auf der anderen Seite nutzt die Windräder (10%) und den fossilen Brennstoff Kohle zu 70% als Enegieträger. Damit sind beide gleich gut bzw. schlecht für das Klima.";
          artyom.say("Bremen hat im Bereich der Solarpanels einen höheren Energiegewinn als Niedersachsen, 80% zu 50%. Zusätzlich gewinnt Bremen seine Energie aus Atomreaktoren zu 60% und aus Recycling zu 10%. Niedersachsen auf der anderen Seite nutzt die Windräder (10%) und den fossilen Brennstoff Kohle zu 70% als Enegieträger. Damit sind beide gleich gut bzw. schlecht für das Klima.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Bremen und Nordrhein-Westfalen", "Vergleich Bremen und Nordrhein-Westfalen", "Vergleich Nordrhein-Westfalen und Bremen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Bremen hat im Bereich der Atomkraftwerke einen niedrigeren Energiegewinn als Nordrhein-Westfalen, 100% zu 60%. Zusätzlich gewinnt Bremen seine Energie aus Solarenergie zu 80% und aus Recycling zu 10%. Nordrhein-Westfalen auf der anderen Seite nutzt weitere fossile Brennstoffe wie Öl (80%) und Kohle (100%) und ist damit klimaschädlicher als Bremen.";
          artyom.say("Bremen hat im Bereich der Atomkraftwerke einen niedrigeren Energiegewinn als Nordrhein-Westfalen, 100% zu 60%. Zusätzlich gewinnt Bremen seine Energie aus Solarenergie zu 80% und aus Recycling zu 10%. Nordrhein-Westfalen auf der anderen Seite nutzt weitere fossile Brennstoffe wie Öl (80%) und Kohle (100%) und ist damit klimaschädlicher als Bremen.");
      }
  },
  {
      indexes: ["Hey Buddy, vergleich Niedersachsen und Nordrhein-Westfalen", "Vergleich Niedersachsen und Nordrhein-Westfalen", "Vergleich Nordrhein-Westfalen und Niedersachsen"],
      action: function(i){
          document.getElementById('sagen').innerHTML = "Niedersachsen hat im Bereich des Kohleabbau einen niedrigeren Energiegewinn als Nordrhein-Westfalen, 80% zu 100%. Zusätzlich gewinnt Niedersachsen seine Energie aus Solarenergie zu 50% und aus Windenergie zu 10%. Nordrhein-Westfalen auf der anderen Seite nutzt weitere fossile Brennstoffe wie Öl (80%) und Kohle (100%) und ist damit klimaschädlicher als Niedersachsen.";
          artyom.say("Niedersachsen hat im Bereich des Kohleabbau einen niedrigeren Energiegewinn als Nordrhein-Westfalen, 80% zu 100%. Zusätzlich gewinnt Niedersachsen seine Energie aus Solarenergie zu 50% und aus Windenergie zu 10%. Nordrhein-Westfalen auf der anderen Seite nutzt weitere fossile Brennstoffe wie Öl (80%) und Kohle (100%) und ist damit klimaschädlicher als Niedersachsen.");
      }
  },
]);

artyom.redirectRecognizedTextOutput(function(text,isFinal) {
  var span = document.getElementById ('output');
    span.innerHTML = text;

});
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});
function show_elements()
 {
  var elementNames = show_elements.arguments;
  for (var i=0; i<elementNames.length; i++)
   {
     var elementName = elementNames[i];
     document.getElementById(elementName).style.display='block';
   }
 }
function hide_elements()
 {
  var elementNames = hide_elements.arguments;
  for (var i=0; i<elementNames.length; i++)
   {
     var elementName = elementNames[i];
     document.getElementById(elementName).style.display='none';
   }
 }
}
//# sourceMappingURL=playgroud-artyom-script.js.map
