async function getNews() {
  try {
    const res = await fetch(
      "https://api.allorigins.win/raw?url=https://rsshub.app/twitter/user/deitaone",
      {
        cache: "no-store"
      }
    );

    const text = await res.text();

    return text.slice(0, 3000);
  } catch (e) {
    return "ERROR LOADING";
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

      <div
        style={{
          marginTop: 20,
          color: "#888"
        }}
      >
        REALTIME TERMINAL
      </div>

      <pre
        style={{
          marginTop: 30,
          whiteSpace: "pre-wrap",
          fontSize: 14,
          lineHeight: 1.8
        }}
      >
        {news}
      </pre>
    </main>
  );
}
