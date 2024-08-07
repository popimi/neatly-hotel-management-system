function RequestRefund() {
  return (
    <main>
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
    </main>
  );
}

export default RequestRefund;
