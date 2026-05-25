const news = [
  {
    en: "FED'S KASHKARI: INFLATION STILL TOO HIGH",
    zh: "美联储卡什卡利：通胀仍然过高"
  },
  {
    en: "APPLE SHARES RISE AFTER EARNINGS",
    zh: "苹果财报后股价上涨"
  },
  {
    en: "BITCOIN MOVES ABOVE 100K",
    zh: "比特币突破10万美元"
  }
];

export default function Home() {
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
      <h1
        style={{
          fontSize: 40,
          marginBottom: 20
        }}
      >
        DEITAONE LIVE
      </h1>

      <div
        style={{
          color: "#666",
          marginBottom: 30
        }}
      >
        REALTIME MARKET TERMINAL
      </div>

      {news.map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: 40,
            borderBottom: "1px solid #222",
            paddingBottom: 20
          }}
        >
          <div
            style={{
              color: "#00ff99",
              fontSize: 18
            }}
          >
            EN: {item.en}
          </div>

          <div
            style={{
              color: "#ffffff",
              marginTop: 12,
              fontSize: 16
            }}
          >
            中文: {item.zh}
          </div>
        </div>
      ))}
    </main>
  );
}
