function CancelBooking (){
    return (
        <main className="bg-gray-100">
            <section className="pt-5 w-100dvw h-[calc(100dvh-48px)] xl:h-[calc(100dvh-100px)] flex flex-col items-center">
                <h3 className="text-green-700 p-5 self-start">
                    Cancel booking
                </h3>
                <div className="w-full h-[60%] bg-blue-400"> for room detail</div>
                <p className="self-start text-red font-bold p-5 text-[12px]">*Cancellation of the booking now will not be able to request a refund</p>
                <button className="button-primary m-3 w-full">cancel this booking</button>
                <button className="button-ghost m-3">cancel</button>

            </section>
        </main>
    )
}

export default CancelBooking;