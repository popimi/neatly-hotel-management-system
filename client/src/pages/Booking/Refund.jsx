function Refund (){
    return (
        <main className="bg-gray-100">
            <section className="pt-5 w-100dvw h-[calc(100dvh-48px)] xl:h-[calc(100dvh-100px)] flex flex-col items-center">
                <h3 className="text-green-700 p-5 self-start">
                    Request a Refund
                </h3>
                <div className="w-full h-[60%] bg-blue-400"> for room detail</div>
                <button className="button-primary m-3 w-full">cancel and refund this booking</button>
                <button className="button-ghost m-3">cancel</button>

            </section>
        </main>
    )
}

export default Refund;