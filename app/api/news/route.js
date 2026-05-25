export async function GET() {
  try {
    const res = await fetch(
      "https://r.jina.ai/http://rsshub.app/twitter/user/deitaone",
      {
        cache: "no-store"
      }
    );

    const text = await res.text();

    const lines = text
      .split("\n")
      .filter(line => line.length > 40)
      .slice(0, 10);

const news = lines.map((line) => ({
  en: line,

  zh:
    line
      .replace("FED", "美联储")
      .replace("inflation", "通胀")
      .replace("stocks", "股票")
      .replace("market", "市场")
      .replace("rates", "利率")
      .replace("oil", "原油")
      .replace("Bitcoin", "比特币"),

  time: new Date().toLocaleTimeString()
}));
    return Response.json(news);

  } catch (e) {
    return Response.json([
      {
        en: "ERROR LOADING NEWS",
        zh: "新闻加载失败",
        time: new Date().toLocaleTimeString()
      }
    ]);
  }
}
