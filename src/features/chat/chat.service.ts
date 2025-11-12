import { GoogleGenerativeAI } from '@google/generative-ai';

export abstract class ChatService {
  abstract send(message: string): Promise<string>;
}

export class ChatGeminiServiceImpl implements ChatService {
  private ASJA_PROMPT = `Vous êtes ASJABOT, assistant virtuel pour le site web de l'université ASJA.

**RÈGLES STRICTES :**
- N'utilisez JAMAIS les phrases "Je suis ASJABOT" ou "Je suis l'assistant virtuel" dans vos réponses
- Ne vous présentez PAS - l'utilisateur sait déjà qui vous êtes
- Pas de salutations comme "Bonjour" ou "Bonsoir"

Utilisez occasionnellement des emojis pour rendre la conversation plus vivante.

Votre mission : aider à naviguer sur le site, informations sur événements, adhésions, questions générales sur l'association.

Fournissez des réponses précises basées sur ASJA_DATA. Si vous ne connaissez pas la réponse, dites simplement : "Je ne peux pas vous aider avec cette demande pour le moment."`;

  private AJSA_DATA =
    "ASJA_DATA : L'Athénée Saint Joseph Antsirabe (ASJA) est une université catholique située à Antsirabe , Madagascar. Elle a pour mission l'excellence académique, la discipline, la foi et l'engagement social. Les diplômes sont reconnus par le MESupReS de Madagascar et suivent le système LMD. L'université dispose de cafétérias et propose des activités sportives. Pour s'inscrire, on peut aller au service de scolarité ou s'inscrire en ligne, en fournissant les documents nécessaires (copie légalisée des bulletins de notes, acte de naissance, photos, lettre de motivation, etc.). Les frais de scolarité sont de 190 000Ar,Les écolages varie selon les nievaux.Pour le nievaux L1: 1ère tranche 250 000Ar, 2ème tranche 200 000Ar et la 3ème tranche 200 000Ar aux totale ça vaut 650 000Ar .Le niveaux L2: 1ère tranche 250 000Ar , 2ème tranche 250 000Ar et la 3ème tranche 250 000Ar aux totale ça vaut 750 000Ar. Pour le niveaux en L3 1ère tranche 300 000Ar, 2ème tranche 250 000Ar et la 3ème tranche 250 000Ar aux totale ça vaut 800 000Ar.Pour le niveaux M1 1ère tranche 300 000Ar 2ème tranche 300 000Ar et la 3ème vaut 250 000Ar aux totale ça vaut 850 000Ar. Pour le niveaux M2 : 1ére tranche 300 000Ar, 2ème tranche 300 000Ar et le 3ème tranche 300 000Ar aux totale ça vaut 900 000Ar. Les frais de scolarité sont payer par virement bancaire depuis le compte BOA 141 374 400 17. Il ce peut que vous payer votre frais de scolariter hors d'Antsirabe, vous devez donc payer un frais de virement, pour eviter que la banque le retire depuis le montant notre compte.Exemple vous verssez 190 000Ar depuis une autre règion vous devrier donc payer une frais suplementaire de 6 000Ar, si non la banque le retire depuis notre compte que vous avez verssez 190 000Ar, ce qui fait que vous avez versser 184 000Ar, si vous ne comprener pas ou en cas de confusion veillez demander le sevice de la banque .On ce doit de raporter la photocopie de baurdereau de vérssement pour confirmer que l ont a bien payer nos frais de scolariter. Il y a deux cantines diponible ouvert tout les jours d'école pour y faire notre rapas ou gouter en tout genre. Pour ce qui sont adèpte du sport, l'ASJA dispose de 2 terrain de basket 1 terrain de foot 1 terrain de volley-ball. Vous venez d'une autre region ou vous vous situer loin de l'ASJA ? pas de panique l'ASJA dispose d'une hébergement pour les étuant. Et une spéciale pour les étudiantes citué dans l'anceinte de l'etablissement de l'ASJA elle même. Pour y acceder au logement il suffit d'emparler au respensable des service étudiant ou d'emparler dirèctemment au Père directeur. Pour les cas de perte de beaurdereaux vailler informaer les sérvices des etudiants ou l'administration de l'ASJA. L'université propose 6 mentions : SCIENCES AGRONOMIQUES (parcours : Production Animale, Production Végétale, Agroalimentaire), DROIT (parcours : Droit des Affaires, Droit Processuel), ECONOMIE ET COMMERCE (parcours : Economie et Développement, Gestion et commerces Internationaux), INFORMATIQUE (parcours : Génie Logiciel, Télécommunication, Génie Industriel), LANGUES ÉTRANGÈRES APPLIQUÉES, et SCIENCES DE LA TERRE (parcours : Hydrogéologie, Géologie Minière). Pour plus de détails sur les contacts: Tél: 034 49 483 19, Email: asja@moovgmail.com, Adresse: Antsaha, Antsirabe, Madagascar, Facebook: https://www.facebook.com/UniversiteASJA. ";

  async send(message: string): Promise<string> {
    const genAI = new GoogleGenerativeAI(
      import.meta.env.VITE_GEMINI_API_KEY ?? ''
    );
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      generationConfig: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 2048,
      },
    });
    const chat = model.startChat({
      generationConfig: {
        maxOutputTokens: 1000,
      },
    });
    const prompt =
      this.ASJA_PROMPT + '--- ' + this.AJSA_DATA + ' --- ' + message;
    const result = await chat.sendMessage(prompt);
    const response = result.response;
    const text = response.text();
    return text;
  }
}
