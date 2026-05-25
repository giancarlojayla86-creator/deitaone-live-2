"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [news, setNews] = useState([]);

  async function loadNews() {
    const res = await fetch("/api/news");
    const data = await res.json();

    setNews(data);
  }

  useEffect(() => {
    loadNews();

    const interval = setInterval(loadNews, 5000);

    return () => clearInterval(interval);
  }, []);

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
      <h1 style={{ fontSize: 40 }}>
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
            borderBottom: "1px solid #111",
            padding: "25px 0"
          }}
        >
          <div
            style={{
              color: "#666",
              marginBottom: 10
            }}
          >
            {item.time}
          </div>

          <div
            style={{
              color: "#00ff99",
              fontSize: 18
            }}
          >
            {item.en}
          </div>

          <div
            style={{
              color: "#fff",
              marginTop: 12
            }}
          >
            {item.zh}
          </div>
        </div>
      ))}
    </main>
  );
}
