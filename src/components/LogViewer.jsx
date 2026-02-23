export default function LogViewer({ lines }) {
  return (
    <pre className="logs">
      {(lines || []).map((l, i) => (
        <div key={i}>{typeof l === "string" ? l : (l.line || JSON.stringify(l))}</div>
      ))}
    </pre>
  );
}
