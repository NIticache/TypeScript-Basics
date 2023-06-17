import React from "react";

type props = {
	data: { body: string; id: number; title: string; userId: number };
};

const ApiComponent = ({ data }: Awaited<props>) => {
	return <div>{data?.id}</div>;
};

export default ApiComponent;
