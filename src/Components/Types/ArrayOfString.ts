export default ArrayOfString;

type ArrayOfString = {
	list: Array<string | undefined>;
	deleteItem: (id: number) => void | React.MouseEvent;
};
