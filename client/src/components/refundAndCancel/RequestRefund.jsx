function RequestRefund() {
  return (
    <main className="min-h-[calc(100dvh-48px)]">
      <section className="bg-green-800 flex flex-col px-5 py-10 gap-5">
        <h3 className="text-white text-center">
          Your Request has been Submitted
        </h3>
        <p className="text-green-300 text-center">
          The cancellation is complete.
          <br /> You will receive an email with a detail and refund within 48
          hours.
        </p>
      </section>
      <section className="bg-green-700 flex flex-col">
        <div className="bg-green-500 p-5">
          for booking detail
        </div>
        <div className="flex flex-row justify-between border-t border-t-green-500 text-white p-5 m-5">
          <p>
            Total Refund
          </p>
          <p>
            THB 2,300.00
          </p>
        </div>
      </section>
      <section className="flex justify-center p-5 m-5">
        <button className="button-primary">Back to Home</button>
      </section>
    </main>
  );
}

export default RequestRefund;
