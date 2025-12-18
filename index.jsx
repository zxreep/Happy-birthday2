import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(to bottom, #4c1d95, #1e3a8a, #be185d)",
      color: "white",
      textAlign: "center"
    }}>
      <h1>Why just a single text message?</h1>
      <p>Here’s something special for you ✨</p>

      <button
        onClick={() => router.push("/app")}
        style={{
          marginTop: 20,
          padding: "12px 24px",
          borderRadius: 999,
          border: "none",
          background: "#facc15",
          color: "#000",
          fontWeight: "bold"
        }}
      >
        I am excited
      </button>
    </div>
  );
          }
