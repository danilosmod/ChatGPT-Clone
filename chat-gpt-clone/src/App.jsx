import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import OptionSelection from "./components/OptionSelection";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });

    setResult(res.data.data[0].url);
  };
  return (
    <>
      <div className="app-image">
        <h2>Gerar uma imagem usando Open AI API</h2>
        <input
          className="app-input"
          placeholder="Digite algo para gerar uma imagem..."
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button onClick={generateImage}>Gerar uma Imagem</button>
        {result.length > 0 ? (
          <img className="result-image" src={result} alt="result" />
        ) : (
          <></>
        )}
      </div>
      <OptionSelection />
    </>
  );
}

export default App;
