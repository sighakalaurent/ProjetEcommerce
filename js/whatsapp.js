     // JavaScript pour la redirection vers WhatsApp avec le nom du produit personnalisé
     function redirigerVersWhatsApp() {
        // Numéro de téléphone WhatsApp (avec code pays, par exemple +1 pour les États-Unis)
        var numeroWhatsApp = "+23756999069";

        // Récupérer le nom du produit depuis le champ de texte
        var nomProduit = document.getElementById("titre").value;

        // Vérifier si un nom de produit a été saisi
        if (nomProduit === "") {
            alert("Veuillez saisir le nom du produit.");
            return;
        }

        // Message prérempli avec le nom du produit personnalisé
        var message = "Je souhaite commander le produit suivant : " + nomProduit;

        // Créer le lien WhatsApp
        var lienWhatsApp = "https://api.whatsapp.com/send?phone=" + numeroWhatsApp + "/?text=" + encodeURIComponent(message);

        // Rediriger l'utilisateur vers WhatsApp
        window.location.href = lienWhatsApp;
    }