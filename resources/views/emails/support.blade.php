<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"> <!-- utf-8 works for most cases -->
	<meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine -->
  <title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->
  <style type="text/css">

  	/* What it does: Remove spaces around the email design added by some email clients. */
  	/* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
		html,
		body {
			margin: 0;
			padding: 0;
			height: 100% !important;
			width: 100% !important;
		}

		/* What it does: Stops email clients resizing small text. */
		* {
			-ms-text-size-adjust: 100%;
			-webkit-text-size-adjust: 100%;
		}

		/* What it does: Forces Outlook.com to display emails full width. */
		.ExternalClass {
			width: 100%;
		}

		/* What it does: Stops Outlook from adding extra spacing to tables. */
		table,
		td {
			mso-table-lspace: 0pt;
			mso-table-rspace: 0pt;
		}

    /* What it does: Fixes webkit padding issue. */
    table {
			border-spacing:0 !important;
    }

		/* What it does: Fixes Outlook.com line height. */
		.ExternalClass,
		.ExternalClass * {
    	line-height: 100%;
		}

		/* What it does: Fix for Yahoo mail table alignment bug. */
		table {
		  border-collapse: collapse;
		  margin: 0 auto;
		}

		/* What it does: Uses a better rendering method when resizing images in IE. */
		img {
			-ms-interpolation-mode:bicubic;
		}

    /* What it does: Overrides styles added when Yahoo's auto-senses a link. */
    .yshortcuts a {
			border-bottom: none !important;
    }

    /* What it does: Overrides blue, underlined link auto-detected by iOS Mail. */
    /* Create a class for every link style needed; this template needs only one for the link in the footer. */
    .mobile-link--footer a {
	    color: #666666 !important;
    }

		/* What it does: Overrides styles added images. */
		img {
			border:0 !important;
			outline:none !important;
			text-decoration:none !important;
		}

		/* Media Queries */
    @media screen and (max-device-width: 600px), screen and (max-width: 600px) {

			/* What it does: Overrides email-container's desktop width and forces it into a 100% fluid width. */
			.email-container {
				width: 100% !important;
			}

			/* What it does: Forces images to resize to the width of their container. */
			img[class="fluid"],
			img[class="fluid-centered"] {
				width: 100% !important;
				max-width: 100% !important;
				height: auto !important;
				margin: auto !important;
			}
			/* And center justify these ones. */
			img[class="fluid-centered"] {
				margin: auto !important;
			}

			/* What it does: Forces table cells into full-width rows. */
			td[class="stack-column"],
			td[class="stack-column-center"] {
				display: block !important;
				width: 100% !important;
				direction: ltr !important;
			}
			/* And center justify these ones. */
			td[class="stack-column-center"] {
				text-align: center !important;
			}

 			/* Data Table Styles */
 			/* What it does: Hides table headers */
 			td[class="data-table-th"] {
	 			display: none !important;
 			}
 			/* What it does: Change the look and layout of the remaining td's */
 			td[class="data-table-td"],
 			td[class="data-table-td-title"] {
				display: block !important;
				width: 100% !important;
				border: 0 !important;
 			}
 			/* What it does: Changes the appearance of the first td in each row */
 			td[class="data-table-td-title"] {
	 			font-weight: bold;
	 			color: #333333;
				padding: 10px 0 0 0 !important;
	 			border-top: 2px solid #eeeeee !important;
 			}
 			/* What it does: Changes the appearance of the other td's in each row */
 			td[class="data-table-td"] {
				padding: 5px 0 0 0 !important
 			}
 			/* What it does: Provides a visual divider between table rows. In this case, a bit of extra space. */
 			td[class="data-table-mobile-divider"] {
				display: block !important;
				height: 20px;
 			}
 			/* END Data Table Styles */

		}

  </style>
</head>
<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" bgcolor="#222222" style="margin:0; padding:0; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
<table cellpadding="0" cellspacing="0" border="0" height="100%" width="100%" bgcolor="#222222" style="border-collapse:collapse;"><tr><td>

	<!-- Visually Hidden Preheader Text : BEGIN -->
	<div style="display:none;font-size:1px;color:#222222;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;mso-hide: all;">
		(Optional) This text will appear in the inbox preview, but not the email body.
	</div>
	<!-- Visually Hidden Preheader Text : END -->

  <!-- Email wrapper : BEGIN -->
  <table border="0" width="600" cellpadding="0" cellspacing="0" align="center" style="width:600px; margin: auto;" class="email-container">
    <tr>
    	<td>

        <!-- Logo + Links : BEGIN -->
        <table border="0" width="100%" cellpadding="0" cellspacing="0">
        	<tr><td height="5" style="font-size: 0; line-height: 0;">&nbsp;</td></tr>
          <tr>
            <td valign="middle" width="150" style="padding:5px 0; text-align:left; line-height: 1;" class="stack-column-center">
              <img src="http://www.stg.ma/site2/images/logo.png" alt="alt text" width="150" height="50" border="0" style="display: block; margin: auto;">
            </td>
            <td valign="middle" style="padding:5px 0; text-align:right; line-height:1.1; font-family: sans-serif; font-size: 13px; color: #999999;" class="stack-column-center">
              STG Support Technique
            </td>
          </tr>
        	<tr><td height="5" style="font-size: 0; line-height: 0;">&nbsp;</td></tr>
        </table>
        <!-- Logo + Links : END -->

        <!-- Main Email Body : BEGIN -->
        <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="#ffffff">

          <!-- Single Fluid Image, No Crop : BEGIN -->
          <tr>
            <td valign="middle" align="center">
              <img src="http://www.stg.ma/site2/images/hand_slide_background.jpg" alt="alt text" height="300" width="600" align="center" border="0" style="margin: auto;" class="fluid">
            </td>
          </tr>
          <!-- Single Fluid Image, No Crop : END -->

          <!-- Full Width, Fluid Column : BEGIN -->
          <tr>
            <td style="padding: 4%; font-family: sans-serif; font-size: 18px; line-height: 1.3; color: #666666;">
              <h4><b>Ticket #ID:</b> 8784451251</h4>
              <h4><b>Date d'ouverture:</b> 12-02-2018 16:44</h4>
              <h4><b>Responsable:</b> Aziz</h4>
              <h4><b>Sujet:</b> {{ $title }}</h4>
              <br>
              <h4>Historique d'intervention</h4>
              <br>
              <h6 style="font-weight: bold;"> TANGER MED TRANS<h6>
              <p>Veuillez envoyer la liste des matricules</p>
              <h6 style="font-weight: bold;"> STG SUPPORT TECHNIQUE<h6>
              <p>Voici la liste des matri qui la chese del lui de ne pas faire la vérité mais c ca</p>
            </td>
          </tr>
          <!-- Full Width, Fluid Column : END -->

      		<!-- 2 Columns -> Stacked Columns : BEGIN -->
          <tr>
            <td>
              <table border="0" width="100%" cellpadding="0" cellspacing="0" align="center">
                <tr>
	                <td style="padding: 0 4%;">
		                <table border="0" width="100%" cellpadding="0" cellspacing="0" align="center">
											<tr>
												<!-- First Column : BEGIN -->
												<td valign="top" width="48%" style="padding: 4% 0; font-family: sans-serif; font-size: 15px; line-height: 1.3; color: #666666; text-align: center;" class="stack-column">
                          <h6 style="font-weight: bold;"> Nombre de communications<h6>
                          <p>(11) Emails - (2) Appel téléphonique</p>
			                    <br><br>
													<table cellspacing="0" cellpadding="0" border="0" align="center" class="button" style="margin: auto;">
														<tr>
															<td style="border-radius: 3px; background: #222222; text-align: center;">
																<a href="http://www.google.com" style="background: #009efb; border: 15px solid #222222; padding: 0 10px;color: #ffffff; font-family: sans-serif; font-size: 15px; line-height: 1; text-align: center; text-decoration: none; display: block; border-radius: 3px;">
																	<b><!--[if mso]>&nbsp;&nbsp;&nbsp;&nbsp;<![endif]-->Voir toute la conversation<!--[if mso]>&nbsp;&nbsp;&nbsp;&nbsp;<![endif]--></b>
																</a>
															</td>
														</tr>
													</table>
			                  </td>
												<!-- First Column : END -->
												<!-- Spacer : BEGIN -->
												<td width="4%" height="4%" class="stack-column">&nbsp;</td>
												<!-- Spacer : END -->
												<!-- Second Column : BEGIN -->
												<td valign="top" width="48%" style="padding: 4% 0; font-family: sans-serif; font-size: 15px; line-height: 1.3; color: #666666; text-align: center;" class="stack-column">
			                    Statut ticket:<b>En cours de traitement</b>
			                    <br><br>
													<table cellspacing="0" cellpadding="0" border="0" align="center" class="button" style="margin: auto;">
														<tr>
															<td style="border-radius: 3px; background: #222222; text-align: center;">
																<a href="http://www.google.com" style="background: #ffb22b; border: 15px solid #222222; padding: 0 10px;color: #ffffff; font-family: sans-serif; font-size: 15px; line-height: 1; text-align: center; text-decoration: none; display: block; border-radius: 3px;">
																	<b><!--[if mso]>&nbsp;&nbsp;&nbsp;&nbsp;<![endif]-->Fermer le ticket<!--[if mso]>&nbsp;&nbsp;&nbsp;&nbsp;<![endif]--></b>
																</a>
															</td>
														</tr>
													</table>
			                  </td>
												<!-- Second Column : END -->
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
						</td>
		      </tr>
      		<!-- 2 Columns -> Stacked Columns : END -->

        </table>
        <!-- Main Email Body : END -->

      </td>
		</tr>

    <!-- Footer : BEGIN -->
    <tr>
      <td style="text-align:center; padding:4% 0; font-family:sans-serif; font-size:13px; line-height:1.2; color:#666666;">
        Vous avez reçu cet email parce que vous ête un client de STG MAROC.
        <br><br>
        STG MAROC &bull; <span class="mobile-link--footer">Angle place Moulay Abdelaziz Zalaka No 5, Résidence Annasser 6ème étage Apt 22. 90020 Tanger, Maroc</span> &bull; <span class="mobile-link--footer">+212 (0) 5 39 340 734</span>
        <br><br>
        <unsubscribe style="color:#666666; text-decoration:underline;">Se désabonner</unsubscribe>
      </td>
    </tr>
    <!-- Footer : END -->

  </table>
  <!-- Email wrapper : END -->

</td></tr></table>
</body>
</html>
