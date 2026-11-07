// Teksten van het eenvoudige contactformulier (/nl/contact/ en vertalingen)
// en van de verwijzing ernaar onder de keuzehulp.
// Berichten gaan via dezelfde verwerking als de keuzehulp (apps-script/Code.gs)
// naar het bouwbedrijf, met dienst "contact".

import type { Lang } from '../i18n';

export const contactTeksten: Record<Lang, {
  title: string;
  description: string;
  crumb: string;
  h1: string;
  lead: string;
  naam: string;
  email: string;
  telefoon: string;
  telPh: string;
  optional: string;
  bericht: string;
  berichtPh: string;
  hp: string;
  consent: string;
  privacy: string;
  submit: string;
  wizardHint: string;
  wizardLink: string;
  /** Regel onder de keuzehulp */
  fromWizard: string;
  fromWizardLink: string;
  /** Link in de footer */
  footer: string;
  msgs: { fill: string; thisField: string; consent: string; notLinked: string; sending: string; failed: string; keepCase?: boolean };
}> = {
  nl: {
    title: 'Contact: stel uw vraag aan Axarquía Home',
    description: 'Een vraag over uw huis in de Axarquía? Stuur ons een bericht. Binnen 24 uur antwoord van een Nederlandstalige collega.',
    crumb: 'Contact',
    h1: 'Neem contact op',
    lead: 'Heeft u een vraag of wilt u gewoon even overleggen? Stuur ons een bericht. Een Nederlandstalige collega reageert binnen 24 uur.',
    naam: 'Naam', email: 'E-mail', telefoon: 'Telefoon', telPh: '+31 6 … of +34 …', optional: '(optioneel)',
    bericht: 'Uw bericht', berichtPh: 'Waar kunnen we u mee helpen?',
    hp: 'Laat dit veld leeg',
    consent: 'Ik geef toestemming dat mijn bericht wordt doorgestuurd naar het bouwbedrijf van Axarquía Home, dat contact met mij opneemt. Zie de',
    privacy: 'privacyverklaring',
    submit: 'Verstuur bericht',
    wizardHint: 'Weet u al wat u wilt laten doen? Met de',
    wizardLink: 'keuzehulp',
    fromWizard: 'Liever gewoon een bericht sturen?',
    fromWizardLink: 'Gebruik het contactformulier',
    footer: 'Contactformulier',
    msgs: {
      fill: 'Vul {x} in.', thisField: 'dit veld',
      consent: 'Geef toestemming om uw bericht door te sturen.',
      notLinked: 'Het formulier is nog niet gekoppeld (testversie). Uw bericht is niet verstuurd.',
      sending: 'Bezig met versturen…',
      failed: 'Versturen is niet gelukt. Controleer uw internetverbinding of mail ons op info@axarquiahome.com.',
    },
  },
  en: {
    title: 'Contact: ask Axarquía Home your question',
    description: 'A question about your home in the Axarquía? Send us a message. Our English-speaking team replies within 24 hours.',
    crumb: 'Contact',
    h1: 'Get in touch',
    lead: 'Have a question, or just want to talk something through? Send us a message and a member of our English-speaking team will reply within 24 hours.',
    naam: 'Name', email: 'Email', telefoon: 'Phone', telPh: '+44 7… or +34 …', optional: '(optional)',
    bericht: 'Your message', berichtPh: 'How can we help?',
    hp: 'Leave this field empty',
    consent: 'I agree that my message is passed on to the Axarquía Home building company, who will contact me. See the',
    privacy: 'privacy policy',
    submit: 'Send message',
    wizardHint: 'Already know what you would like done? The',
    wizardLink: 'request form',
    fromWizard: 'Would you rather just send a message?',
    fromWizardLink: 'Use the contact form',
    footer: 'Contact form',
    msgs: {
      fill: 'Please fill in {x}.', thisField: 'this field',
      consent: 'Please give your consent so we can pass on your message.',
      notLinked: 'The form is not connected yet (test version). Your message has not been sent.',
      sending: 'Sending…',
      failed: 'Sending failed. Please check your connection or email us at info@axarquiahome.com.',
    },
  },
  de: {
    title: 'Kontakt: Ihre Frage an Axarquía Home',
    description: 'Eine Frage zu Ihrem Haus in der Axarquía? Schreiben Sie uns. Antwort innerhalb von 24 Stunden, auf Englisch oder Niederländisch.',
    crumb: 'Kontakt',
    h1: 'Kontakt aufnehmen',
    lead: 'Haben Sie eine Frage oder möchten Sie einfach etwas besprechen? Schreiben Sie uns. Wir antworten innerhalb von 24 Stunden, auf Englisch oder Niederländisch.',
    naam: 'Name', email: 'E-Mail', telefoon: 'Telefon', telPh: '+49 … oder +34 …', optional: '(optional)',
    bericht: 'Ihre Nachricht', berichtPh: 'Wobei können wir Ihnen helfen?',
    hp: 'Dieses Feld bitte leer lassen',
    consent: 'Ich bin einverstanden, dass meine Nachricht an das Bauunternehmen von Axarquía Home weitergeleitet wird, das sich bei mir meldet. Siehe die',
    privacy: 'Datenschutzerklärung',
    submit: 'Nachricht senden',
    wizardHint: 'Wissen Sie schon, was gemacht werden soll? Mit dem',
    wizardLink: 'Anfrageformular',
    fromWizard: 'Lieber einfach eine Nachricht schreiben?',
    fromWizardLink: 'Zum Kontaktformular',
    footer: 'Kontaktformular',
    msgs: {
      fill: 'Bitte füllen Sie das Feld „{x}“ aus.', thisField: 'dieses Feld', keepCase: true,
      consent: 'Bitte stimmen Sie der Weiterleitung Ihrer Nachricht zu.',
      notLinked: 'Das Formular ist noch nicht verbunden (Testversion). Ihre Nachricht wurde nicht gesendet.',
      sending: 'Wird gesendet…',
      failed: 'Das Senden ist fehlgeschlagen. Bitte prüfen Sie Ihre Internetverbindung oder schreiben Sie uns an info@axarquiahome.com.',
    },
  },
  sv: {
    title: 'Kontakt: ställ din fråga till Axarquía Home',
    description: 'En fråga om ditt hus i Axarquía? Skicka ett meddelande. Svar inom 24 timmar, på engelska eller nederländska.',
    crumb: 'Kontakt',
    h1: 'Kontakta oss',
    lead: 'Har du en fråga eller vill du bara bolla något? Skicka ett meddelande. Vi svarar inom 24 timmar, på engelska eller nederländska.',
    naam: 'Namn', email: 'E-post', telefoon: 'Telefon', telPh: '+46 … eller +34 …', optional: '(valfritt)',
    bericht: 'Ditt meddelande', berichtPh: 'Vad kan vi hjälpa dig med?',
    hp: 'Lämna det här fältet tomt',
    consent: 'Jag godkänner att mitt meddelande skickas vidare till Axarquía Homes byggföretag, som kontaktar mig. Se',
    privacy: 'integritetspolicyn',
    submit: 'Skicka meddelande',
    wizardHint: 'Vet du redan vad du vill få gjort? Med',
    wizardLink: 'förfrågningsformuläret',
    fromWizard: 'Vill du hellre bara skicka ett meddelande?',
    fromWizardLink: 'Använd kontaktformuläret',
    footer: 'Kontaktformulär',
    msgs: {
      fill: 'Fyll i {x}.', thisField: 'det här fältet',
      consent: 'Ge ditt samtycke så att vi kan skicka vidare ditt meddelande.',
      notLinked: 'Formuläret är inte kopplat än (testversion). Ditt meddelande har inte skickats.',
      sending: 'Skickar…',
      failed: 'Det gick inte att skicka. Kontrollera din anslutning eller mejla oss på info@axarquiahome.com.',
    },
  },
  es: {
    title: 'Contacto: envíe su pregunta a Axarquía Home',
    description: '¿Una pregunta sobre su casa en la Axarquía? Envíenos un mensaje. Le respondemos en menos de 24 horas, en español, inglés o neerlandés.',
    crumb: 'Contacto',
    h1: 'Contacte con nosotros',
    lead: '¿Tiene una pregunta o simplemente quiere comentar algo? Envíenos un mensaje y le respondemos en menos de 24 horas.',
    naam: 'Nombre', email: 'Correo electrónico', telefoon: 'Teléfono', telPh: '+34 6…', optional: '(opcional)',
    bericht: 'Su mensaje', berichtPh: '¿En qué podemos ayudarle?',
    hp: 'Deje este campo vacío',
    consent: 'Acepto que mi mensaje se envíe a la empresa constructora de Axarquía Home, que se pondrá en contacto conmigo. Consulte la',
    privacy: 'política de privacidad',
    submit: 'Enviar mensaje',
    wizardHint: '¿Ya sabe qué quiere hacer? Con el',
    wizardLink: 'formulario de solicitud',
    fromWizard: '¿Prefiere enviarnos simplemente un mensaje?',
    fromWizardLink: 'Use el formulario de contacto',
    footer: 'Formulario de contacto',
    msgs: {
      fill: 'Rellene {x}.', thisField: 'este campo',
      consent: 'Dé su consentimiento para que podamos enviar su mensaje.',
      notLinked: 'El formulario aún no está conectado (versión de prueba). Su mensaje no se ha enviado.',
      sending: 'Enviando…',
      failed: 'No se ha podido enviar. Compruebe su conexión o escríbanos a info@axarquiahome.com.',
    },
  },
};

/** Vervolg van de zin bij wizardHint, per taal. */
export const wizardHintEnd: Record<Lang, string> = {
  nl: 'krijgt u in twee minuten een gerichte aanvraag.',
  en: 'takes two minutes and asks only what matters for your job.',
  de: 'ist Ihre Anfrage in zwei Minuten erledigt.',
  sv: 'är din förfrågan klar på två minuter.',
  es: 'tiene su solicitud lista en dos minutos.',
};
