 
# **Hungery: ruoan tilaussovellus**

Hungery-sovelluksesta pääsee tilamaan suosikkiravintoloiden makoisat ruoat suoraan kotiovelle. 
Sovellus on tehty OAMK:n Tieto- ja viestintätekniikan insinööriopiskelijoiden Web-Ohjelmoinnin sovellusprojektia varten.

## **Sovelluksen tekninen määrittely**
Sovelluksen frontendin koodi on luotu Visual Studio Code-sovelluksella käyttäen React-kirjastoa ja Javascript-ohjelmointikieltä. Backendin koodi on luotu IntelliJ IDEA Community Edition ohjelmalla käyttäen Spring Frameworkiä ja Java-ohjelmointikieltä. Sovellusta ajetaan Herokun verkkosovellusalustalla. Sovelluksella on käytössä Herokun PostgreSQL-tietokanta. Tietokantarakenteessa on neljä taulukkoa, jotka ovat nimeltään customer, menu, orderhistory ja restaurant.
REST-rajapinnan suunnittelu on tehty käyttäen Stoplightin verkkosivulla olevaa rajapintasuunnittelutyökalua.
Sovelluksen käyttöliittymäsuunnitelma on tehty Windowsin Paint-työkalulla.

## **Asiakkaan käyttöliittymä**
### **Sovelluksen käytön aloittaminen**
Asiakas kirjautuu Hungery-sovelluksen sivuille ”Kirjaudu sisään tästä” -painikkeesta, jossa kysytään käyttäjätunnus ja salasana. Jos tunnusta ei vielä ole luotu, sen pystyy tekemään ”Luo käyttäjä tästä”-painikkeen kautta. Jos käyttäjällä on sittenkin jo tunnus luotuna, hän pääsee takaisin kirjautumisvalikkoon ”Mene kirjautumaan tästä” -painikkeella. Käyttäjän luonnissa kysytään Etunimi, sukunimi, puhelinnumero, osoite, sähköposti ja salasana. Tämän jälkeen käyttäjän saa luotua ”Luo käyttäjä”-painikkeesta. Tämän jälkeen siirrytään suoraan kirjautumisikkunaan, josta pääsee kirjautumaan sisään juuri luodulla käyttäjätunnuksella.

### **Etusivu**
Kirjautumisen jälkeen etusivulla näkyy kaikki ravintolat ja ravintoloiden ruokakategorian, aukioloajan, osoitteen ja hintatason. Ravintoloita pystyy myös hakemaan hakusanalla ja ”Hae ravintolaa nimellä” -painikkeesta. Ruokia pystyy myös suodattamaan ruokakategorian mukaan painamalla ruokakategoriaa vastaavaa painiketta. Painikkeita tulee sitä myötä lisää, kun ravintola määrittelee uuden ruokakategorian. 
 		
### **Ravintolan menu ja ostoskori**
Kun käyttäjä klikkaa valittua ravintolaa, käyttäjä näkee ravintolan menun. ”Lisää ostoskoriin” -painikkeesta ruoka lisätään ostoskoriin, joka näkyy ruokalistan oikealla puolella. Ostoskorissa on erikseen ”+” ja ”-” -painikkeet, joista pääsee lisäämään kunkin ruoan määriä. Ostoskorissa myös näkyy kunkin ruoan hinta sekä kappalemäärä ja näiden jälkeen näkyy kuljetusmaksu sekä kokonaissumma. Ostoskorissa on myös tekstikenttä ”Osoite ja ohjeet lähetille”. Tässä pystyy lisäämään toimitusosoitteen ja kuljetusohjeet. Kun asiakas painaa ostoskorin ”Maksa tilaus” -painiketta, siirrytään tilauksen loppunäkymään, jossa kerrotaan, että tilaus on vastaanotettu ja tilausta valmistetaan. Lisäksi näkymässä on vielä uudelleen näkyvissä tilauksen hinta, tilauspäivämäärä, tuotteiden lukumäärä, ravintolan nimi, käyttäjälle jolle tilaukset ovat tulossa sekä toimitusosoite ja ohjeet lähetille.

### **Käyttäjän tilaushistoria**
Loppunäkymästä pääsee takaisin etusivulle ”Etusivu”-painikkeesta. Etusivun oikeassa yläreunassa on ”Tilaushistoria”-painike, jota kautta pääsee näkemään tilaushistorian. Jos asiakkaan tilaushistoria ei jostain syystä näy, ”Näytä kaikki tilauksesi” -painikkeesta saa näkyviin koko tilaushistorian. Tilaushistoriasta näkyy tilauksen id, tilauksen päivämäärä, ravintolan sähköposti, tilaajan sähköposti, tuotteiden lukumäärä ja tilauksen kokonaishinta. Etusivulle pääsee takaisin vasemmassa yläreunassa olevasta ”Etusivu” -painikkeesta.

### **Käyttäjän muokkaus**
Käyttäjä pääsee muokkaamaan omia tietoja etusivu- ja tilaushistorianäkymistä ”Käyttäjä” -painikkeesta. Käyttäjäsivulla näkyy vasemmassa reunassa käyttäjän tiedot: etunimi, sukunimi, osoite ja puhelinnumero. Käyttäjäsivun oikealla puolella on mahdollisuus muokata käyttäjän tietoja ja ”Päivitä tiedot” -painikkeesta.
Käyttäjä pääsee kirjautumaan ulos etusivun vasemmassa yläreunassa olevasta ”Kirjaudu ulos” -painikkeesta.

## **Ravintolan käyttöliittymä**
### **Ravintolan sisäänkirjautuminen**
Ravintola pääsee kirjautumaan ”Siirry ravintolan kirjautumiseen tästä” -painikkeesta. Ravintolan sisäänkirjautumisessa kysytään ravintolan sähköposti ja salasana ja ”Kirjaudu”-painikkeesta pääsee kirjautumaan sisään. Jos ravintolalla ei vielä ole käyttäjätunnusta, ravintola pääsee luomaan sen ”Luo sellainen tästä” -painikkeesta. Ravintolan käyttäjätunnuksen luonnissa kysytään ravintolan nimi, sähköposti ja salasana ja käyttäjätunnus luodaan ”Luo käyttäjä”-painikkeesta. Tämän jälkeen siirrytään suoraan kirjautumisikkunaan, josta pääsee kirjautumaan sisään juuri luodulla käyttäjätunnuksella.

### **Ravintolan tietojen ja menun muokkaus**
Kirjautumisen jälkeen etusivun vasemmalla puolella näkyvät ravintolan nimi, ravintolan osoite, ravintolan tyyppi, ravintolan aukioloajat ja ravintolan hintataso. Oikealla puolella ravintola pääsee muokkaamaan näitä samoja tietoja ja ”Päivitä”-painikkeesta muokatut tiedot tallentuvat. Etusivun oikeassa yläreunassa näkyy ”Lisää menuun tuotteita”-painike, jonka kautta ravintola pääsee lisäämään uusia ruokia menuunsa. Menun lisäysnäkymässä kysytään ruoan nimi, kuvaus, tuotekategoria, ravintolan nimi ja hinta. ”Lisää tämä ruoka”-painikkeesta lisätty ruoka tallentuu ravintolan menuun. Ruoan lisäysvalikosta pääsee etusivulle ”Takaisin”-painikkeesta. 

### **Ravintolan tilaushistoria**
Ravintolan tilaushistoriaan pääsee ”Ravintolan tilaushistoria”-painikkeesta. Jos ravintolan tilaushistoria ei jostain syystä näy, ”Näytä kaikki tilauksesi”-painikkeesta saa näkyviin koko tilaushistorian. Tilaushistoriassa näkyy tilauksen id, päivämäärä, ravintolan sähköposti, tilaajan sähköposti, tuotteiden lukumäärä sekä tilauksen kokonaishinta. Tilaushistorian vasemmassa yläreunassa olevassa ”Takaisin”-painikkeesta pääsee takaisin ravintolan muokkausnäkymään. Ravintolan muokkausnäkymän vasemmassa yläreunassa olevasta ”Kirjaudu ulos” -painikkeella pääsee kirjautumaan ulos.


### **Tekijät**
Tekijöiden GitHub nimimerkit: ihju, TuomasMaeaettae, lpnik ja EliVeliS
### **Liitteet**
Linkki Herokussa olevaan sovellukseen: [Hungery](https://hungery.herokuapp.com/)


