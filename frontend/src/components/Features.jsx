export default function Features() {
    return (
        <section className="px-8 md:px-20 py-16 gap-6 md:gap-10 bg-gray-50 text-center md:text-left">
            <h2 className="text-4xl font-bold text-teal-500">Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {/*all cards */}
                <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition hover:shadow-teal-200 max-w-auto max-w-sm"> {/*single card*/}
                    <h3 className="text-xl font-semibold">Real-time Sync</h3>
                    <p className="text-medium text-gray-700 mt-3">Tasks update instantly across multiple tabs</p>
                </div>

                <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition hover:shadow-teal-200">
                    <h3 className="text-xl font-semibold ">Drag and Drop Tasks</h3>
                    <p className="text-medium text-gray-700 mt-3">Move tasks by just dragging across kanban board</p>
                </div>

                <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition hover:shadow-teal-200">
                    <h3 className="text-xl font-semibold ">Collaborative Board</h3>
                    <p className="text-medium text-gray-700 mt-3">Upload Attachments to tasks</p>
                </div>
            </div>
        </section>
    )
}