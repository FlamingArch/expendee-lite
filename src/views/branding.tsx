export default function Branding(props: { className: string }) {
  return (
    <div className={"flex items-center py-2 gap-2 " + props.className}>
      <h1 className="text-2xl font-serif font-black">EXPENDEE</h1>
      <span className="font-mono rounded text-xs p-1 text-black bg-white">
        Lite
      </span>
    </div>
  );
}
