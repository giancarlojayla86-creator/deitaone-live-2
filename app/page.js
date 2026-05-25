async function getNews() {
  try {
    const res = await fetch(
      "https://deitaone-live-2.vercel.app/api/news",
      {
        cache: "no-store"
      }
    );

    return await res.json();
  } catch (e) {
    return [
      {
        en: "ERROR",
        zh: "加载失败",
        time: new Date().toLocaleTimeString()
      }
    ];
  }
}

export default async function Home() {
  const news = await getNews();

  return (
    <main
      style={{
        background: "#000",
        color: "#00ff99",
        minHeight: "100vh",
        padding: 20,
        fontFamily: "monospace"
      }}
    >
      <h1 style={{ fontSize: 36 }}>
        DEITAONE LIVE
      </h1>

      <div style={{ color: "#888", marginBottom: 30 }}>
        REALTIME MARKET NEWS
      </div>

      {news.map((item, i) => (
        <div
          key={i}
          style={{
            borderBottom: "1px solid #222",
            padding: "12px 0"
          }}
        >
          <div style={{ fontSize: 12, color: "#666" }}>
            {item.time}
          </div>

          <div style={{ marginTop: 5 }}>
            {item.en}
          </div>

          <div
            style={{
              marginTop: 6,
              color: "#00ffaa",
              fontSize: 14
            }}
          >
            中文：{item.zh}
          </div>
        </div>
      ))}
    </main>
  );
}
