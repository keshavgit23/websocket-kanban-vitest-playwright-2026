
export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-teal-100">
            <h2 className="text-2xl font-bold text-teal-700">TaskFlow</h2>
            <div className="space-x-4">
                <button className="px-4 py-2 text-black text-lg rounded-lg hover:text-teal-800 hover:underline decoration-2 transition cursor-pointer">
                    Github
                </button>
                <button className="px-4 py-2 text-black text-lg rounded-lg hover:text-white hover:bg-teal-600 transition duration-200">
                    Try Now
                </button>
            </div>
        </nav>
    )
}