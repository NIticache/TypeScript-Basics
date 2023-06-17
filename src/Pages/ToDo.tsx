import { useState, useRef, useEffect } from "react";
import ItemList from "../Components/ItemList";
const ToDo = () => {
	const [toDoList, setToDoList] = useState<Array<string | undefined>>([]);
	const [newToDoItem, setNewToDoItem] = useState<string>("");

	const textRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		console.log(toDoList);
	}, [toDoList]);
	// const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	setNewToDoItem(e?.target?.value);
	const deleteItem = (id: number) => {
		const updateToDoList = toDoList.filter((_, index) => index !== id);
		setToDoList(updateToDoList);
	}; // };

	const addToList = () => {
		// console.log(textRef.current?.value);
		if (textRef.current && textRef.current?.value?.length > 0) {
			setToDoList([...toDoList, textRef.current?.value]);
			textRef.current.value = "";
		}
	};

	return (
		<div>
			<input type='text' className='form-control' ref={textRef} />
			<button onClick={addToList}>AddToList</button>
			<ItemList list={toDoList} deleteItem={deleteItem} />
		</div>
	);
};

export default ToDo;
