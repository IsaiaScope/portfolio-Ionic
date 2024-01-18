export const getObjKeys = <T extends string>(obj: Record<T, string>) => {
	return Reflect.ownKeys(obj) as T[];
};
