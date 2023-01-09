import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import { Configuration, OpenAIApi } from 'openai'

dotenv.config()

console.log(process.env.OPENAI_API_KEY)

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
  res.status(200).send({
    message: 'Hello from Maria!'
  })
})

app.post('/', async (req, res) => {
  try {
    const storeName = req.body.storeName;
    const storeCity = req.body.storeCity;
    const visitDate = req.body.visitDate;
    const difLvlToFind = req.body.difLvlToFind;
    const difLvlToUse = req.body.difLvlToUse;
    const disabledSpaces = req.body.disabledSpaces;
    const parkingKeywords = req.body.parkingKeywords;
    const lobbyAesthetic = req.body.lobbyAesthetic;
    const lobbySize = req.body.lobbySize;
    const lobbySpeed = req.body.lobbySpeed;
    const lobbyAtmos = req.body.lobbyAtmos;
    const lobbyLighting = req.body.lobbyLighting;
    const lobbyDisplays = req.body.lobbyDisplays;
    const lobbyKeywords = req.body.lobbyKeywords;
    const btDesc = req.body.btDesc;
    const btComfort = req.body.btComfort;
    const btKnowledge = req.body.btKnowledge;
    const btQuestion = req.body.btQuestion;
    const btKeywords = req.body.btKeywords;
    const cOpkgDesc = req.body.cOpkgDesc;
    const coPmt = req.body.coPmt;
    const coKeywords = req.body.coKeywords;
    const unboxDiff = req.body.unboxDiff;
    const strain = req.body.strain;
    const unboxRateClr = req.body.unboxRateClr;
    const unboxAppeal = req.body.unboxAppeal;
    const unboxColors = req.body.unboxColors;
    const unboxOdorInt = req.body.unboxOdorInt;
    const unboxOdorNotes = req.body.unboxOdorNotes;
    const unboxKeywords = req.body.unboxKeywords;
    const prepOdorNotes = req.body.prepOdorNotes;
    const prepMoisture = req.body.prepMoisture;
    const prepTasteNotes = req.body.prepTasteNotes;
    const prepKeywords = req.body.prepKeywords;
    const finalTasteRate = req.body.finalTasteRate;
    const finalTasteNotes = req.body.finalTasteNotes;
    const finalEven = req.body.finalEven;
    const finalAshClr = req.body.finalAshClr;
    const finalMed = req.body.finalMed;
    const finalKeywords = req.body.finalKeywords;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Write a creative store review essay with at least 9 robust paragraphs about a store called ${storeName} in ${storeCity} visted on ${visitDate}. Include an introduction and conclusion paragraph. The parking was ${difLvlToFind} to find and ${difLvlToUse} to use. There are ${disabledSpaces} disable parking spaces. ${parkingKeywords}. When I went into the dispensary, it had a ${lobbyAesthetic} aesthetic. The size of the lobby was ${lobbySize}. The speed of check-in was ${lobbySpeed}. The atmosphere was ${lobbyAtmos} and the lighting was ${lobbyLighting}. The display cases were ${lobbyDisplays}. ${lobbyKeywords}. The budtender was ${btDesc}. I felt ${btComfort} asking this person about the medical use of their cannabis. They were ${btKnowledge}. If they didn't know the answer to one of my questions, they ${btQuestion}. ${btKeywords}. The packaging was ${cOpkgDesc}. The shop accepted ${coPmt}. ${coKeywords}. When I got home, I started opening the product. The package has to be child-resistant, but it was ${unboxDiff} to open for someone with dexterity problems. The strain was called ${strain} I would rate the color a ${unboxRateClr} on a 5-point scale and the cannabis was ${unboxAppeal}. Colors that were present on the bud were ${unboxColors}. The smell was ${unboxOdorInt} and had notes of ${unboxOdorNotes}. ${unboxKeywords}. I prepared the cannabis by grinding it and rolling it into a joint. During the grind, I could smell notes of ${prepOdorNotes}. The moisture content was ${prepMoisture}. When it was ready, I took a dry hit. I could taste notes of ${prepTasteNotes}. ${prepKeywords}. Finally I fired up the joint. Overall, the taste was ${finalTasteRate} on a 5-point scale with notes of ${finalTasteNotes}. The joint burned ${finalEven} with a ${finalAshClr} ash. The medicinal effects I felt were ${finalMed}. ${finalKeywords}.`,
      temperature: 0.7, // Higher values means the model will take more risks.
      max_tokens: 2000, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
      top_p: 1, // alternative to sampling with temperature, called nucleus sampling
      frequency_penalty: 0.7, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
      presence_penalty: 0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
    });

    res.status(200).send({
      bot: response.data.choices[0].text
    });

  } catch (error) {
    console.error(error)
    res.status(500).send(error || 'Something went wrong');
  }
})

app.listen(3000, () => console.log('AI server started on http://localhost:3000'))