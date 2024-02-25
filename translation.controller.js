import axios from "axios";

const translations = async (req, res) => {
    let text = req.query.text || req.params.text || req.body.text;
  if (!text) {
    return res.status(400).json({ error: "Text to translate is required" });
  }
  const apiKey = process.env.TRANSLATOR_API;
  const targetLang = "fr";
  const apiUrl = "https://api.mymemory.translated.net/get";

  try {
    const response = await axios.get(apiUrl, {
      params: {
        q: text,
        langpair: `en|${targetLang}`,
        key: apiKey,
      },
    });

    const translation = response.data.responseData.translatedText;
    res.json({ translation });
  } catch (error) {
    res.status(500).json({ error: "Failed to translate text" });
  }
};

export { translations };
