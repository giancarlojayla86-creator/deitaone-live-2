export async function GET() {
  const news = [
    {
      en: "FED'S KASHKARI: INFLATION STILL TOO HIGH",
      zh: "美联储卡什卡利：通胀仍然过高",
      time: new Date().toLocaleTimeString()
    },
    {
      en: "BITCOIN MOVES ABOVE 100K",
      zh: "比特币突破10万美元",
      time: new Date().toLocaleTimeString()
    },
    {
      en: "TESLA SURGES ON AI OPTIMISM",
      zh: "特斯拉因AI乐观预期上涨",
      time: new Date().toLocaleTimeString()
    }
  ];

  return Response.json(news);
}
