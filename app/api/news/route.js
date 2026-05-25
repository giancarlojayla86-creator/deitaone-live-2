export async function GET() {
  try {

    const res = await fetch(
      "https://r.jina.ai/http://nitter.net/DeItaone",
      {
        cache: "no-store"
      }
    );

    const text = await res.text();

    const lines = text
      .split("\n")
      .filter(
        line =>
          line.length > 40 &&
          !line.includes("pic.twitter") &&
          !line.includes("nitter")
      )
      .slice(0, 15);

    const news = lines.map((line) => ({
      en: line,

      zh:
        line
          .replace(/FED/g, "美联储")
          .replace(/Bitcoin/g, "比特币")
          .replace(/stocks/gi, "股票")
          .replace(/market/gi, "市场")
          .replace(/inflation/gi, "通胀"),

      time: new Date().toLocaleTimeString()
    }));

    return Response.json(news);

  } catch (e) {

    return Response.json([
      {
        en: "LIVE NEWS FAILED",
        zh: "实时新闻连接失败",
        time: new Date().toLocaleTimeString()
      }
    ]);
  }
}
