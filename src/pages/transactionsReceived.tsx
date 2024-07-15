export default function PageTransactionsReceived() {
  return (
    <>
      <article className="flex flex-col flex-grow md:flex-grow-0 md:w-[300px] text-foreground mt-0 pb-2 md:max-h-screen overflow-scroll md:border-r"></article>
      <div className="bg-scaffold flex-grow place-content-center hidden md:grid">
        Select a Transaction
      </div>
    </>
  );
}
