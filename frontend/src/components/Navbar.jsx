import { useNavigate } from "react-router-dom"

export default function Navbar() {
    const navigate = useNavigate()
    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-teal-100">
            <h2 className="text-2xl font-bold text-teal-700">TaskFlow</h2>
            <div className="space-x-4">
                <button onClick={()=>window.open("https://github.com/keshavgit23/websocket-kanban-vitest-playwright-2026","_blank", "noopener", "noreferrer")}className="px-4 py-2 text-black text-lg rounded-lg hover:text-teal-800 hover:underline decoration-2 transition cursor-pointer">
                    Github
                </button>
                <button onClick={()=>navigate("/board")}className="px-4 py-2 text-black text-lg rounded-lg hover:text-white hover:bg-teal-600 transition duration-200">
                    Try Now
                </button>
            </div>
        </nav>
    )
}