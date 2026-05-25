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
      zh: "AI中文翻译开发中",
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
