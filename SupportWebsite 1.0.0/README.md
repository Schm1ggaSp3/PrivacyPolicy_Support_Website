# Support Website - My little CookBook

Diese Support-Website enthält die Datenschutzrichtlinien für die My little CookBook App.

## Features

- ✅ Moderne, responsive UI mit Apple-Design-Sprache
- ✅ Dark Mode Support (automatisch)
- ✅ Zweisprachig (Deutsch/English) mit Sprachumschaltung
- ✅ Vollständige Datenschutzrichtlinien
- ✅ Kontaktinformationen
- ✅ Animierte Übergänge
- ✅ Mobile-optimiert

## Bereitstellung

### Option 1: GitHub Pages (Kostenlos)

1. Erstelle ein neues GitHub Repository
2. Lade die `index.html` Datei hoch
3. Gehe zu Repository Settings → Pages
4. Wähle "Deploy from a branch" → "main" → "/ (root)"
5. Die Website wird unter `https://yourusername.github.io/repository-name/` verfügbar sein

### Option 2: Netlify (Kostenlos)

1. Gehe zu [netlify.com](https://netlify.com)
2. Erstelle einen Account
3. Drag & Drop den `SupportWebsite` Ordner
4. Die Website wird sofort live sein
5. Du erhältst eine URL wie `https://random-name.netlify.app`
6. Optional: Füge eine Custom Domain hinzu

### Option 3: Vercel (Kostenlos)

1. Gehe zu [vercel.com](https://vercel.com)
2. Erstelle einen Account
3. Importiere das Projekt
4. Deploy mit einem Klick

### Option 4: iCloud (Einfachste Lösung)

1. Lade die `index.html` in einen öffentlichen iCloud Drive Ordner hoch
2. Klicke auf "Personen hinzufügen" und wähle "Link teilen"
3. Stelle sicher, dass "Jeder mit dem Link" ausgewählt ist
4. **WICHTIG**: Ändere die Berechtigung auf "Kann anzeigen"
5. Der Link sollte so aussehen: `https://www.icloud.com/iclouddrive/...`
6. Verwende diesen Link als Support URL in App Store Connect

**Empfehlung für professionelle Lösung**: Verwende Netlify oder GitHub Pages für eine eigene Domain wie `support.mylittlecookbook.app`

## Support URL für App Store Connect

Nachdem du die Website bereitgestellt hast, aktualisiere die Support URL in App Store Connect:

1. Gehe zu [App Store Connect](https://appstoreconnect.apple.com)
2. Wähle deine App aus
3. Gehe zu "App-Informationen"
4. Aktualisiere das Feld "Support-URL"
5. Verwende die neue URL (z.B. `https://yourusername.github.io/cookbook-support/`)

## URL Vorschläge

- `https://support.mylittlecookbook.app` (Custom Domain)
- `https://cookbook-support.netlify.app` (Netlify)
- `https://[username].github.io/cookbook-support/` (GitHub Pages)

## Kontakt-E-Mail

Stelle sicher, dass die E-Mail-Adresse `support@mylittlecookbook.app` existiert und funktioniert. Alternativ:
- Verwende eine bestehende E-Mail-Adresse
- Erstelle eine kostenlose E-Mail bei Gmail oder ProtonMail
- Leite sie an deine persönliche E-Mail weiter

## Anpassungen

Um die E-Mail-Adresse zu ändern, öffne `index.html` und suche nach:
```html
<a href="mailto:support@mylittlecookbook.app" class="contact-email">
```

Ersetze die E-Mail-Adresse durch deine eigene.

## Browser-Kompatibilität

Die Website funktioniert in allen modernen Browsern:
- ✅ Safari (iOS/macOS)
- ✅ Chrome
- ✅ Firefox
- ✅ Edge
- ✅ Opera

## Lizenz

© 2026 Mika Andreas Sperling. Alle Rechte vorbehalten.
