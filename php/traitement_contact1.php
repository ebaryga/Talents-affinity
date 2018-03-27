<?php

$nom=$_POST['nomPrenom1'];
$email=$_POST['adresse1'];
$entreprise=$_POST['entreprise1'];
$sujet='test sujet';
$telephone=$_POST['telephone1'];
$message=$_POST['textarea2'];


/////voici la version Mine 
$headers = "MIME-Version: 1.0\r\n"; 

//////ici on détermine le mail en format text 
$headers .= "Content-type: text/plain; charset=iso-8859-1\r\n"; 

////ici on détermine l'expediteur et l'adresse de réponse 
$headers .= "From: $nom <$email>\r\nReply-to : $nom <$email>\nX-Mailer:PHP"; 

$subject="$sujet"; 
$destinataire="thomas.dutartre74@gmail.com";
$body="Mail envoyé par : $email \n Représentant l'entreprise : $entreprise \n $message"; 

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