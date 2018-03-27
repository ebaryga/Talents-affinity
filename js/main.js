function openNav() {
    document.getElementById("myNav").style.height = "80%";
    document.getElementById("btn_navigation").onclick = closeNav;
    document.getElementById("btn_navigation").innerHTML = "close";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("btn_navigation").onclick = openNav;
    document.getElementById("btn_navigation").innerHTML = "menu";
}

// Cacher le header au scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    lastScrollTop = st;
}

//Afficher des div
function cacherDivSection2() {
    $('#Collectif_deuxiemeChoix').css("visibility", "hidden");
    $('#Individuel_deuxiemeChoix').css("visibility", "hidden");

    $('#Individuel_deuxiemeChoix').css("display", "block");
    $('#Collectif_deuxiemeChoix').css("display", "none");

    document.getElementById("LevierMotivationChecked").checked = false;
    document.getElementById("RoleChecked").checked = false;
    document.getElementById("FormationsChecked").checked = false;
    document.getElementById("CarthographieChecked").checked = false;
    $('#sectionContact').css("visibility", "hidden");
}

function cacherDivSection3() {
    $('#p_LevierMotivation').css("visibility", "hidden");
    $('#p_RoleEquipe').css("visibility", "hidden");
    $('#p_AnticipationFormation').css("visibility", "hidden");
    $('#p_Carthographie').css("visibility", "hidden");

    $('#p_LevierMotivation').css("display", "block");
    $('#p_RoleEquipe').css("display", "none");
    $('#p_AnticipationFormation').css("display", "none");
    $('#p_Carthographie').css("display", "none");
    $('#sectionContact').css("visibility", "hidden");
}


function affichageDivSection2() {
  if(document.getElementById('collectif').checked) {
    cacherDivSection3();
    cacherDivSection2();
    $('#Individuel_deuxiemeChoix').css("display", "none");
    $('#Collectif_deuxiemeChoix').css("display", "block");
    $('#Collectif_deuxiemeChoix').css("visibility", "visible");
    $('html, body').animate({
        scrollTop:$(Collectif_deuxiemeChoix).offset().top
    }, 'slow');
} else if(document.getElementById('individuel').checked){
    cacherDivSection3();
    cacherDivSection2();
    $('#Individuel_deuxiemeChoix').css("visibility", "visible");
    $('html, body').animate({
        scrollTop:$(Individuel_deuxiemeChoix).offset().top
    }, 'slow');
}
}

function affichageDivSection3() {
  if(document.getElementById('LevierMotivationChecked').checked) {
    cacherDivSection3();
    $('#p_LevierMotivation').css("visibility", "visible");
    $('html, body').animate({
        scrollTop:$(p_LevierMotivation).offset().top
    }, 'slow');
} else if(document.getElementById('RoleChecked').checked) {
    cacherDivSection3();
    $('#p_LevierMotivation').css("display", "none");
    $('#p_RoleEquipe').css("display", "block");
    $('#p_RoleEquipe').css("visibility", "visible");
    $('html, body').animate({
        scrollTop:$(p_RoleEquipe).offset().top
    }, 'slow');
} else if(document.getElementById('FormationsChecked').checked) {
    cacherDivSection3();
    $('#p_LevierMotivation').css("display", "none");
    $('#p_AnticipationFormation').css("display", "block");
    $('#p_AnticipationFormation').css("visibility", "visible");
    $('html, body').animate({
        scrollTop:$(p_AnticipationFormation).offset().top
    }, 'slow');
} else if(document.getElementById('CarthographieChecked').checked) {
    cacherDivSection3();
    $('#p_LevierMotivation').css("display", "none");
    $('#p_Carthographie').css("display", "block");
    $('#p_Carthographie').css("visibility", "visible");
    $('html, body').animate({
        scrollTop:$(p_Carthographie).offset().top
    }, 'slow');
}
}

function init(){
    $('#ActiveSlide').fullpage({
              anchors: ['choix', 'menu_GPEC', 'menu_Formations', 'menu_Experience', 'menu_RH', 'contact'],
              menu: '#menu',
    });
          $(document).ready(function() {
    $('select').material_select();
  });
}

//Affichage de la section contact sur la page RH
$('#btn_RH_CN1,#btn_RH_CN2,#btn_RH_CN3,#btn_RH_CN4,#btn_mobile1,#btn_mobile2,#btn_mobile3,#btn_mobile4').click(function(){
    if( $('#form_RH').length )   
    {
        console.log('ici il detecte que le formulaire existe deja');
        $.fn.fullpage.moveTo('contact');
    }
    else
    {
    console.log('sinon il va dans le else');
    $('#ActiveSlide').append('<div id="form_RH" class="section"><div id="sectionContact" style="visibility:visible;padding: 10%;"> <div class="row"> <form method="post" action="php/traitement_contact.php" class="col s12" id="form5"> <div class="row"> <div class="col s12 alignementFormulaire" > Vous êtes intéréssé par : <div id="interet"> </div></div><div class="col s12"> Pour combien de collaborateurs <div class="input-field inline"> <select name="nbCollaborateur"> <option value="2-15">2-15</option> <option value="15-50">15-50</option> <option value="50-250">50-250</option> </select> </div></div></div><div class="row"> <div class="col s12"> Vous vous appellez <div class="input-field inline"> <input id="nomPrenom" name="nomPrenom" placeholder="nom + prenom" class="validate"> </div>et vous êtes joigniable à l\'adresse <div class="input-field inline"> <input id="adresse" name="adresse" placeholder="Mail" type="email" class="validate"> </div><br>et/ou par téléphone <div class="input-field inline"> <input id="telephone" name="telepehone" placeholder="Téléphone" class="validate"> </div></div></div><div class="row"> <form class="col s12"> <div class="row"> <div class="input-field col s12"> <textarea id="textarea1" name="textarea1" class="materialize-textarea"></textarea> <label for="textarea1">Dites nous en plus</label> </div></div></form> </div></form> <button type="submit" form="form5" id="btn_Envois" value="Submit">Envoyez</button> </div></div></div>');
    
    //remembering the active section / slide
    var activeSectionIndex = $('.fp-section.active').index();
    var activeSlideIndex = $('.fp-section.active').find('.slide.active').index();
    
    $.fn.fullpage.destroy('all');
    
    //setting the active section as before
    $('.section').eq(activeSectionIndex).addClass('active');
    
    //were we in a slide? Adding the active state again
    if(activeSlideIndex > -1){
        $('.section.active').find('.slide').eq(activeSlideIndex).addClass('active');
    }
    init();
    $.fn.fullpage.moveTo('contact');
    }
});


//Gestion des localstorage
if (localStorage) {
    var obj={};
}

function creationLS_Manager() {  
    var affichage;
    j=JSON.parse(localStorage["lastname"])
    console.log(localStorage["lastname"]);
    affichage ='<input type="hidden" name="choix1" value="' + j.choix1 + '"><input type="hidden" name="choix2" value="' + j.choix2 + '"><input type="hidden" name="choix3" value="' + j.choix3 + '"><div class="chip">'+ j.choix1 +'<i class="close material-icons">close</i></div><div class="chip">'+ j.choix2 +'<i class="close material-icons">close</i></div><div class="chip">'+ j.choix3 +'<i class="close material-icons">close</i></div>';
    $('#interet').html(affichage);
    $('#sectionContact').css("visibility", "visible");
    $('html, body').animate({
        scrollTop:$(sectionContact).offset().top
    }, 'slow');
}

function sauvegardeManager1() {
    obj.choix1="Manager";
    obj.choix2="Individuel";
    obj.choix3="Levier de motivation";
    localStorage.setItem("lastname", JSON.stringify(obj));
    creationLS_Manager();
}

function sauvegardeManager2() {
    obj.choix1="Manager";
    obj.choix2="Individuel";
    obj.choix3="Rôle au sein de l'équipe";
    localStorage.setItem("lastname", JSON.stringify(obj));
    creationLS_Manager();
}

function sauvegardeManager3() {
    obj.choix1="Manager";
    obj.choix2="Collectif";
    obj.choix3="Anticipation des besoins en formations";
    localStorage.setItem("lastname", JSON.stringify(obj));
    creationLS_Manager();
}

function sauvegardeManager4() {
    obj.choix1="Manager";
    obj.choix2="Collectif";
    obj.choix3="Carthographie";
    localStorage.setItem("lastname", JSON.stringify(obj));
    creationLS_Manager();
}

function creationLS_RH() {  
    var affichage;
    j=JSON.parse(localStorage["lastname"])
    obj.choix1="RH";
    affichage ='<input type="hidden" name="choix1" value="' + j.choix1 + '"><input type="hidden" name="choix2" value="' + j.choix2 + '"><div class="chip">'+ j.choix1 +'<i class="close material-icons">close</i></div><div class="chip">'+ j.choix2 +'<i class="close material-icons">close</i></div>';
    $('#interet').html(affichage);
}

function sauvegardeRH1() {
    obj.choix2="GPEC et Carthographie";
    localStorage.setItem("lastname", JSON.stringify(obj));
    creationLS_RH();
}

function sauvegardeRH2() {
    obj.choix2="Formations";
    localStorage.setItem("lastname", JSON.stringify(obj));
    creationLS_RH();
}

function sauvegardeRH3() {
    obj.choix2="L'experience collaborateur";
    localStorage.setItem("lastname", JSON.stringify(obj));
    creationLS_RH();
}

function sauvegardeRH4() {
    obj.choix2="Rh de proximité";
    localStorage.setItem("lastname", JSON.stringify(obj));
    creationLS_RH();
}
