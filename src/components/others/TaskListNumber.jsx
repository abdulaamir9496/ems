
const TaskListNumber = () => {
    return (
        <div className="flex mt-5 justify-between gap-5 w-screen">
            <div className="rounded-xl p-10 w-[45%] px-9 py-6 bg-sky-400">
                <h2 className="text-3xl font-semibold">0</h2>
                <h3 className="text-xl font-medium">New Task</h3>
            </div>
            <div className="rounded-xl p-10 w-[45%] px-9 py-6 bg-indigo-400">
                <h2 className="text-3xl font-semibold">0</h2>
                <h3 className="text-xl font-medium">Accepted</h3>
            </div>
            <div className="rounded-xl p-10 w-[45%] px-9 py-6 bg-green-400">
                <h2 className="text-3xl font-semibold">0</h2>
                <h3 className="text-xl font-medium">Completed</h3>
            </div>
            <div className="rounded-xl p-10 w-[45%] px-9 py-6 bg-red-400">
                <h2 className="text-3xl font-semibold">0</h2>
                <h3 className="text-xl font-medium">Failed</h3>
            </div>
        </div>
    )
}

export default TaskListNumber
