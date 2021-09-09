var versTomb=[
    {
        cim:"Hegyi zsupsz",
        szerzo:"Keresztesi József",
        vers:"A Hegyi Zsupsz egy nagy, kövér,<br>nehézkes léptű, lomha lény,<br>és lenn a völgyben él szegény.<br>A hegyre nem megy föl soha.<br>A Kőszáli Puff rokona.<br>",
        kep:"kepek/hegyizsupsz.png",
    },
    {
        cim:"Metró",
        szerzo:"Varró Dániel",
        vers:"Hát elkapott ma, kiscicám,<br>az ellenőr a metrón.<br>Nem volt érvényes matricám,kívánom, bárha lett vón.<br>Leszállított – az alagút<br>most énelőttem ásít,<br>s eljutnom több mint bonyolult<br>a kívánt állomásig.<br>S míg kattog egyre távolabb<br>haladva lent a metró,<br>halkan kattog a bőr alatt<br>az ember szíve dettó.<br>Ó, bár ne kéne lógnia,<br>föladva minden elvét!<br>Ez itt egy allegória,<br>ha nem tűnt volna fel még.<br>Hisz látod, éppen így megyek<br>hogy földerítsem, úgy ám,<br>felszín alatti énedet<br>a lélek mélyvasútján.<br>De megvívnám bár érted, ó,<br>én héroszok tusáját,<br>nem jutok el hozzád a szó<br>szűk labirintusán át.<br>S a vágy metróján, hol az ok<br>zord ellenőre szétcsap,<br>mint potyautas utazok,<br>azt kell hogy mondjam, én csak.<br>Mert nincsen matricám, se más,<br>jegy, bérlet, bármi érvény,<br>a benned rejlő állomást<br>hogy egyszer is elérném.<br>S meglelve benned messzi, tág,<br>mély állomások mását,<br>meghallanám a bőrön át<br>a szíved kattogását.<br>",
        kep:"kepek/nyuliskola.jpg",
    },
]

$(function(){
    $("#cim1").on("click",versJelenit);
    $("#cim2").on("click",versJelenit2);
    $("#cim1").text(versTomb[0].cim);
    $("#cim2").text(versTomb[1].cim);
});

function versJelenit(){
    $("article").append("<div>");
    $("article div").append("<h3>"+versTomb[0].cim+"</h3>"+"<p>"+versTomb[0].vers+"</p>"+"<p>"+versTomb[0].szerzo+"</p>");
    $("header").text(versTomb[0].szerzo);
}
function versJelenit2(){
     $("article").append("<div>");
    $("article div").append("<h3>"+versTomb[1].cim+"</h3>"+"<p>"+versTomb[1].vers+"</p>"+"<p>"+versTomb[1].szerzo+"</p>");
    $("header").text(versTomb[1].szerzo);
}