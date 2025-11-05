import { ApiSource } from '@/core/constant';
import { GoogleGenerativeAI } from '@google/generative-ai';
import type { AxiosInstance } from 'axios';

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
    "ASJA_DATA : L'Athénée Saint Joseph Antsirabe (ASJA) est une université catholique située à Antsirabe et Antsohihy, Madagascar. Elle a pour mission l'excellence académique, la discipline, la foi et l'engagement social. Les diplômes sont reconnus par le MESupReS de Madagascar et suivent le système LMD. L'université dispose de cafétérias et propose des activités sportives. Pour s'inscrire, on peut aller au service de scolarité ou s'inscrire en ligne, en fournissant les documents nécessaires (copie légalisée des bulletins de notes, acte de naissance, photos, lettre de motivation, etc.). Les frais de scolarité sont de 250 000 Ariary, mais peuvent varier selon le niveau d’études. Les créateurs du site sont Dera, Manda, et Santatra. L'université propose 6 mentions : SCIENCES AGRONOMIQUES (parcours : Production Animale, Production Végétale, Agroalimentaire), DROIT (parcours : Droit des Affaires, Droit Processuel), ECONOMIE ET COMMERCE (parcours : Economie et Développement, Gestion et commerces Internationaux), INFORMATIQUE (parcours : Génie Logiciel, Télécommunication, Génie Industriel), LANGUES ÉTRANGÈRES APPLIQUÉES, et SCIENCES DE LA TERRE (parcours : Hydrogéologie, Géologie Minière). Pour plus de détails sur les contacts: Tél: 034 49 483 19, Email: example@gmail.com, Adresse: Antsaha, Antsirabe, Madagascar, Facebook: https://www.facebook.com/UniversiteASJA.";

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

export class ChatN8NService implements ChatService {
  constructor(private axios: AxiosInstance) {}

  async send(message: string): Promise<string> {
    const response = await this.axios.post(`${ApiSource.botUrl}`, { message });
    console.log(response.data);
    if (response.status != 200) throw new Error();
    return response.data.output;
  }
}
