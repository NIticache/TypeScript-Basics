// https://timmousk.com/blog/typescript-utility-types/#nonnullabletype

type props = {
	data: {
		name: string;
		Grade: string;
		calculate: (a: number, b: number) => number;
	};
	// addon?: NonNullable<string >
	addon: string;
};

//Omit
// type user = Omit<props, "addon">;
//can't able to use addon by using the type "user" we omiting it

//Pick
// type user = Pick<props, "data">;
// able to use data only because we use pick data only

// Require
// type user = Required<props>;
//all the key in props object is required

//Partial
// type user = Partial<props>;
// the props keys  can be partiall used (may or may not be used with the same key type)

// Record
// type data = "name" | "Grade"; // setting up the key
// type user = Record<data, string>;// assigining type for data as string
// Record have only unique key value

//ReadOnly
// type nochange={
// "firstName" :string,
// "lastName":string
// }
// const test :Readonly<nochange> ={
// "firstName" :"Niti",
// "lastName":"Vijay"
// }
// test.firstName="hi"

// . ReturnType<Type>
// The ReturnType utility type lets you create a new type from the returned type of

const Calc = ({ data }: props) => {
	// const Calc = ({ name, Grade }: user) => { used for Record Utility type
	return (
		<div>
			Hi {data?.name} <span>Your grade is {data?.Grade}</span>
			{data?.calculate(5, 6)}
			{/* Hi {name} <span>Your grade is {Grade}</span>   used for Record Utility type*/}
		</div>
	);
};

export default Calc;
