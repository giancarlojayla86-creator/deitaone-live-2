"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [news, setNews] = useState([]);

  async function loadNews() {
    try {
      const res = await fetch("/api/news");

      const data = await res.json();

      setNews(data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    loadNews();

    const timer = setInterval(() => {
      loadNews();
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main
  <div
  style={{
    marginTop: 30,
    marginBottom: 40
  }}
>
  <iframe
    src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_btc&symbol=BINANCE:BTCUSDT&interval=15&hidesidetoolbar=1&theme=dark"
    width="100%"
    height="500"
    style={{
      border: "1px solid #222"
    }}
  />
</div>
      style={{
        background: "#000",
        color: "#00ff99",
        minHeight: "100vh",
        padding: 20,
        fontFamily: "monospace"
      }}
    >
      <h1 style={{ fontSize: 38 }}>
        DEITAONE LIVE
      </h1>

      <div style={{ color: "#888", marginBottom: 30 }}>
        REALTIME AI NEWS TERMINAL
      </div>

      {news.map((item, i) => (
        <div
          key={i}
          style={{
            borderBottom: "1px solid #222",
            padding: "12px 0"
          }}
        >
          <div
            style={{
              color: "#666",
              fontSize: 12
            }}
          >
            {item.time}
          </div>

          <div style={{ marginTop: 5 }}>
            {item.en}
          </div>

          <div
            style={{
              color: "#00ffaa",
              marginTop: 6,
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
