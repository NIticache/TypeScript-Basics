// type props = {
// 	list: Array<string | undefined>;
// };
import ArrayOfString from "./Types/ArrayOfString";
import { Box } from "@mui/material";
const ItemList = ({ list, deleteItem }: ArrayOfString) => {
	return (
		<div>
			{list.length > 0 &&
				list.map((item, key) => {
					return (
						<Box key={key} sx={{ display: "flex", gap: "5px" }}>
							{item}{" "}
							<Box
								sx={{ color: "red", cursor: "pointer" }}
								component='span'
								onClick={() => deleteItem(key)}>
								{" "}
								X
							</Box>
						</Box>
					);
				})}
		</div>
	);
};

export default ItemList;
