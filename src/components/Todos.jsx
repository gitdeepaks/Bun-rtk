import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

const Todos = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <>
            <div className="">Todos</div>
            {todos.map((todo) => (
                <div key={todo.id} className="flex justify-between items-center bg-gray-800 p-4 my-2 rounded-md">
                    <li
                    
                    className="text-white">{todo.title}</li>
                    <div>
                        <button onClick={() => dispatch(updateTodo({
                            id: todo.id,
                            changes: { done: !todo.done }
                        }))} className="bg-green-600 px-3 py-1 rounded-md mx-2">Update</button>
                        <button onClick={() => dispatch(removeTodo({
                            id: todo.id
                        }))} className="bg-red-600 px-3 py-1 rounded-md">Delete</button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Todos;
