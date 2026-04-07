import kanban_board from "../assets/kanban_board.jpeg"

export default function Hero(){
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 gap-10">
            <div className="flex flex-col gap-8">
            <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl font-bold text-teal-600 leading-tight">Manage your tasks. <br /> Collaborate in real time</h1>
                {/* <p>A fast and collaborative Kanban board built with React and Socket.io</p> */}
            </div>
            <div className="mt-4 flex gap-8">
                <button className="text-xl text-black bg-teal-100 px-6 py-4 font-bold hover:bg-teal-600 hover:text-white rounded-lg cursor-pointer">
                    Try Now
                </button>
                <button className="text-lg text-black font-medium hover:text-teal-600  hover:underline decoration-2 transition duration-200">
                    Github
                </button>
            </div>
            </div>
            <div>
                <img src={kanban_board} alt="Kanban Board" className="w-full max-w-2xl rounded-xl shadow-2xl"></img>
            </div>
        </section>
    )
}