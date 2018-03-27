<?php

$nom=$_POST['nomPrenom'];
$email=$_POST['adresse'];
$sujet='['.$nom.'] Prise de contact via le site TalentsAffinity';
$nbCollaborateur=$_POST['nbCollaborateur'];
$telephone=$_POST['telephone'];
$message=$_POST['textarea1'];
$choix1=$_POST['choix1'];
$choix2=$_POST['choix2'];
$choix3=$_POST['choix3'];


/////voici la version Mine 
$headers = "MIME-Version: 1.0\r\n"; 

//////ici on détermine le mail en format text 
$headers .= "Content-type: text/plain; charset=iso-8859-1\r\n"; 

////ici on détermine l'expediteur et l'adresse de réponse 
$headers .= "From: $nom <$email>\r\nReply-to : $nom <$email>\nX-Mailer:PHP"; 

$subject="$sujet"; 
$destinataire="thomas.dutartre74@gmail.com";
$body="Mail envoyé par : $email \nNombre de collaborateur concerné : $nbCollaborateur \n$message"; 

if(!empty($_POST['choix1']) and !empty($_POST['choix2']) and !empty($_POST['choix3']))
{
	$body="Mail envoyé par : $email \nNombre de collaborateur concerné : $nbCollaborateur \nIl est intéréssé par $choix1,$choix2,$choix3 \n$message"; 
}

if(empty($nom) or empty($email) OR empty($sujet) OR empty($message))
{
	echo $nom;
	echo $email;
	echo $sujet;
	echo $telephone;
	echo $message;
	echo "<p align=\"center\" style=\"color:red;\">Merci de remplir tout les champs";
}
else
{
	if (mail($destinataire,$subject,$body,$headers)) 
	{ 
		echo "<p align=\"center\" style=\"color:green;\">Votre mail a été envoyé<br>";
	}

	else 
	{ 
		echo "Une erreur s'est produite"; 
	} 
}
?>

<p align="center">Vous allez bientot etre redirigé vers la page d'acceuil<br>
Si vous n'etes pas redirigé au bout de 5 secondes cliquez <a href="talents-affinity.fr">ici </a></p>

<meta http-equiv="refresh" content="5;../index.html" />