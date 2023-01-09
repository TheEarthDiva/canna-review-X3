<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$storeName = $_POST['storeName'];
$storeCity = $_POST['storeCity'];
$visitDate = $_POST['visitDate'];
$difLvlToFind = $_POST['difLvlToFind'];
$difLvlToUse = $_POST['difLvlToUse'];
$disabledSpaces = $_POST['disabledSpaces'];
$parkingKeywords = $_POST['parkingKeywords'];
$lobbyAesthetic = $_POST['lobbyAesthetic'];
$lobbySize = $_POST['lobbySize'];
$lobbySpeed = $_POST['lobbySpeed'];
$lobbyAtmos = $_POST['lobbyAtmos'];
$lobbyLighting = $_POST['lobbyLighting'];
$lobbyDisplays = $_POST['lobbyDisplays'];
$lobbyKeywords = $_POST['lobbyKeywords'];
$btDesc = $_POST['btDesc'];
$btComfort = $_POST['btComfort'];
$btKnowledge = $_POST['btKnowledge'];
$btQuestion = $_POST['btQuestion'];
$btKeywords = $_POST['btKeywords'];
$cOpkgDesc = $_POST['cOpkgDesc'];
$coPmt = $_POST['coPmt'];
$coKeywords = $_POST['coKeywords'];
$unboxDiff = $_POST['unboxDiff'];
$strain = $_POST['strain'];
$unboxRateClr = $_POST['unboxRateClr'];
$unboxAppeal = $_POST['unboxAppeal'];
$unboxColors = $_POST['unboxColors'];
$unboxOdorInt = $_POST['unboxOdorInt'];
$unboxOdorNotes = $_POST['unboxOdorNotes'];
$unboxKeywords = $_POST['unboxKeywords'];
$prepOdorNotes = $_POST['prepOdorNotes'];
$prepMoisture = $_POST['prepMoisture'];
$prepTasteNotes = $_POST['prepTasteNotes'];
$prepKeywords = $_POST['prepKeywords'];
$finalTasteRate = $_POST['finalTasteRate'];
$finalTasteNotes = $_POST['finalTasteNotes'];
$finalEven = $_POST['finalEven'];
$finalAshClr = $_POST['finalAshClr'];
$finalMed = $_POST['finalMed'];
$finalKeywords = $_POST['finalKeywords'];


$email_from = 'gstevegreen@yahoo.com';//<== update the email address
$email_subject = "New Dispensary Review";
$email_body = "Write a creative store review essay with at least 9 robust paragraphs about a store called $storeName in $storeCity visted on $visitDate. Include an introduction and conclusion paragraph. The parking was $difLvlToFind to find and $difLvlToUse to use. There are $disabledSpaces disable parking spaces. $parkingKeywords. When I went into the dispensary, it had a $lobbyAesthetic aesthetic. The size of the lobby was $lobbySize. The speed of check-in was $lobbySpeed. The atmosphere was $lobbyAtmos and the lighting was $lobbyLighting. The display cases were $lobbyDisplays. $lobbyKeywords. The budtender was $btDesc. I felt $btComfort asking this person about the medical use of their cannabis. They were $btKnowledge. If they didn't know the answer to one of my questions, they $btQuestion. $btKeywords. The packaging was $cOpkgDesc. The shop accepted $coPmt. $coKeywords. When I got home, I started opening the product. The package has to be child-resistant, but it was $unboxDiff to open for someone with dexterity problems. The strain was called $strain I would rate the color a $unboxRateClr on a 5-point scale and the cannabis was $unboxAppeal. Colors that were present on the bud were $unboxColors. The smell was $unboxOdorInt and had notes of $unboxOdorNotes. $unboxKeywords. I prepared the cannabis by grinding it and rolling it into a joint. During the grind, I could smell notes of $prepOdorNotes. The moisture content was $prepMoisture. When it was ready, I took a dry hit. I could taste notes of $prepTasteNotes. $prepKeywords. Finally I fired up the joint. Overall, the taste was $finalTasteRate on a 5-point scale with notes of $finalTasteNotes. The joint burned $finalEven with a $finalAshClr ash. The medicinal effects I felt were $finalMed. $finalKeywords.",


$to = "theearthdiva@gmail.com";//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $email_from \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);