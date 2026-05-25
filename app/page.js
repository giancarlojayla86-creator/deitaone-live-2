"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fakeNews = [
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
      },
      {
        en: "TESLA SURGES ON AI OPTIMISM",
        zh: "特斯拉因AI乐观预期上涨"
      }
    ];

    let index = 0;

    const addNews = () => {
      setNews((prev) => [
        {
          ...fakeNews[index % fakeNews.length],
          time: new Date().toLocaleTimeString()
        },
        ...prev
      ]);

      index++;
    };

    addNews();

    const interval = setInterval(addNews, 5000);

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
          LIVE TERMINAL
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
