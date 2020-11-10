/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
export class RepositoryBase<T> {
	public async save(data: T, entity: string): Promise<T> {
		return data;
	}

	public async find(query: unknown): Promise<T> {
		return <T>(<unknown>undefined);
	}
}
