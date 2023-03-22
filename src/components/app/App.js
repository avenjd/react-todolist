import './App.css';
import { useState } from 'react';
function App() {
	const [list, setList] = useState([]);
	const [input, setInput] = useState('');

	const handleAdd = (todo) => {
		const newTodo = {
			id: Math.random(),
			todo: todo,
			done: false,
		};
		setList([...list, newTodo]);
		setInput('');
	};

	const deleteTodo = (id) => {
		const newList = list.filter((todo) => todo.id !== id);
		setList(newList);
	};

	return (
		<div className='App'>
			<div className='todo'>
				<div className='todo__header'>
					<h1>Todo List ReactJS</h1>
				</div>
				<div className='todo__body'>
					<div className='flex-group'>
						<input
							type='text'
							id='wpis'
							className='todo__body__input'
							onChange={(el) => setInput(el.target.value)}></input>
						<button
							className='todo__body--btn'
							onClick={() => handleAdd(input)}>
							Add
						</button>
					</div>
					<>
						{list.map((todo) => (
							<div className='todo__body__tasks'>
								<div key={todo.id} className='todo__task'>
									{todo.todo}
									<button
										className='btn-delete'
										onClick={() => deleteTodo(todo.id)}>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='15'
											height='15'
											fill='currentColor'
											class='bi bi-trash'
											viewBox='0 0 16 16'>
											{' '}
											<path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' />{' '}
											<path
												fill-rule='evenodd'
												d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'
											/>{' '}
										</svg>
									</button>
								</div>
							</div>
						))}
					</>
				</div>
			</div>
		</div>
	);
}

export default App;
