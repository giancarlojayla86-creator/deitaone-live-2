const news = [
  {
    en: "FED'S KASHKARI: INFLATION STILL TOO HIGH",
    zh: "美联储卡什卡利：通胀仍然过高",
    time: "22:31:04"
  },
  {
    en: "APPLE SHARES RISE AFTER EARNINGS",
    zh: "苹果财报后股价上涨",
    time: "22:32:11"
  },
  {
    en: "BITCOIN MOVES ABOVE 100K",
    zh: "比特币突破10万美元",
    time: "22:33:09"
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid #222",
          paddingBottom: 20
        }}
      >
        <h1
          style={{
            fontSize: 38
          }}
        >
          DEITAONE LIVE
        </h1>

        <div
          style={{
            color: "#666"
          }}
        >
          MARKET TERMINAL
        </div>
      </div>

      <div
        style={{
          marginTop: 30
        }}
      >
        {news.map((item, index) => (
          <div
            key={index}
            style={{
              borderBottom: "1px solid #111",
              padding: "25px 0"
            }}
          >
            <div
              style={{
                color: "#666",
                marginBottom: 10,
                fontSize: 13
              }}
            >
              {item.time}
            </div>

            <div
              style={{
                color: "#00ff99",
                fontSize: 18,
                lineHeight: 1.7
              }}
            >
              {item.en}
            </div>

            <div
              style={{
                color: "#ffffff",
                marginTop: 12,
                fontSize: 16,
                lineHeight: 1.8
              }}
            >
              {item.zh}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
