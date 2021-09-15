var versAdatok =[
    {
        cim: " Nyúliskola",
        szerző: "Romhányi József",
        vers: "<br>Erdőszélen nagy a móka, mulatság,<br>iskolába gyűlnek mind a nyulacská<br>A tanító ott középen az a nyúl,<br>kinek füle leghosszabbnak bizonyu<br>Kezdi az oktatást egy fej káposzt<br>Hallgatják is tátott szájjal.<br><br>- Az egymást tapasztó<br>táposztó<br>levelek képezte kápos<br>letépett<br>levelein belül tapasz<br>mely a kopasztott káp<br>úgy hívják, hogy torz<br>Ha most a torzsára<br>sorjába<br>visszatapasztjuk<br>a letépett táposztó k<br>a tapasztalt rendben,<br>akkor szakasztott, he<br>fejesen<br>szerkesztett káposztá<br><br>Ez a lecke! Megértett<br>Bólogattak a nebulók,<br>- Akkor rögtön felelt<br>Lapult a sok tapsifül<br>füllentettek, dehogy <br><br>- Nos felelj, te Nyus<br>mi történik, ha ízekr<br>- Jóllakok! - felelte<br>a kis káposzta-kopasztó ebugatta,<br>de a tanár megbuktatta.",
        kép: "kepek/kep1.jpg"
    },
    {
        cim:"Metró",
        szerző:"Varró Dániel",
        vers:"Hát elkapott ma, kiscicám,<br>az ellenőr a metrón.<br>Nem volt érvényes matricám,kívánom, bárha lett vón.<br>Leszállított – az alagút<br>most énelőttem ásít,<br>s eljutnom több mint bonyolult<br>a kívánt állomásig.<br>S míg kattog egyre távolabb<br>haladva lent a metró,<br>halkan kattog a bőr alatt<br>az ember szíve dettó.<br>Ó, bár ne kéne lógnia,<br>föladva minden elvét!<br>Ez itt egy allegória,<br>ha nem tűnt volna fel még.<br>Hisz látod, éppen így megyek<br>hogy földerítsem, úgy ám,<br>felszín alatti énedet<br>a lélek mélyvasútján.<br>De megvívnám bár érted, ó,<br>én héroszok tusáját,<br>nem jutok el hozzád a szó<br>szűk labirintusán át.<br>S a vágy metróján, hol az ok<br>zord ellenőre szétcsap,<br>mint potyautas utazok,<br>azt kell hogy mondjam, én csak.<br>Mert nincsen matricám, se más,<br>jegy, bérlet, bármi érvény,<br>a benned rejlő állomást<br>hogy egyszer is elérném.<br>S meglelve benned messzi, tág,<br>mély állomások mását,<br>meghallanám a bőrön át<br>a szíved kattogását.<br>",
        kép:"kepek/kep2.jpg",
    }
]

$(function(){
    $(".gomb").on("click",versek);
});

function versek(){
    $(".vers1").append("<div><h3>"+versAdatok[0].cim+"</h3><p>"+versAdatok[0].vers+"</p><p>"+versAdatok[0].szerző+"</p></div>");
    $(".vers2").append("<div><h3>"+versAdatok[1].cim+"</h3><p>"+versAdatok[1].vers+"</p><p>"+versAdatok[1].szerző+"</p></div>");
    $("header h1").text(versAdatok[0].szerző+" és "+versAdatok[1].szerző);

}