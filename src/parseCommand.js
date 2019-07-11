const keywords = ["templates", "help"];

function parseCommand(body) {
  const parts = body.text.split(";").map(p => p.trim());
  if (keywords.includes(parts[0])) {
    const keyword = parts[0];
    return {
      keyword,
      meme: undefined,
      topText: undefined,
      bottomText: undefined
    };
  } else {
    const meme = parts[0];
    const topText = parts[1] || "_";
    const bottomText = parts[2] || "_";
    return { keyword: undefined, meme, topText, bottomText };
  }
}

module.exports = parseCommand;
