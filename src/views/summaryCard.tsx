import useStore from "../store";

export default function SummaryCard() {
  const values = useStore((slice): { [index: string]: number } => ({
    Total: slice.totalValue,
    Spent: slice.totalSpent,
    Received: slice.totalReceived,
  }));
  const styles = {
    layout: "flex md:flex-col min-h-fit items-center mx-4",
    card: "bg-accent text-white rounded-2xl",
    elevation: " shadow-2xl shadow-accent/40",
    item: "text-center py-6 md:py-4 grid flex-grow place-content-center",
  };

  return (
    <article className={`${styles.layout} ${styles.card} ${styles.elevation}`}>
      {Object.keys(values).map((label) => (
        <div key={label} className={styles.item}>
          <p className="text-xl">${values[label]}</p>
          <p>{label}</p>
        </div>
      ))}
    </article>
  );
}
