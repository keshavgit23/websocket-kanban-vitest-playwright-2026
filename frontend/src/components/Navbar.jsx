export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-teal-100 text-white">
            <h2 className="text-2xl font-bold text-teal-700">TaskFlow</h2>
            <div className="space-x-4">
                <button className="px-4 py-2 text-black text-lg rounded-lg hover:text-teal-600 hover:font-bold transition cursor-pointer">
                    Github
                </button>
                <button className="px-4 py-2 text-black text-lg rounded-lg hover:text-black-100 hover:bg-teal-600 transition">
                    Try Now
                </button>
            </div>
        </nav>
    )
}