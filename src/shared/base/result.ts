/**
 * RESOURCE: https://khalilstemmler.com/articles/enterprise-typescript-nodejs/handling-errors-result-class/
 */
export class Result<T> {
	public isSuccess: boolean;
	public isFailure: boolean;
	public error: string | undefined | null;
	private _value: T | any;

	private constructor(
		isSuccess: boolean,
		error?: string | undefined | null,
		value?: T | any
	) {
		if (isSuccess && error) {
			throw new Error(`InvalidOperation: A result cannot be 
          successful and contain an error`);
		}
		if (!isSuccess && !error) {
			throw new Error(`InvalidOperation: A failing result 
          needs to contain an error message`);
		}

		this.isSuccess = isSuccess;
		this.isFailure = !isSuccess;
		this.error = error;
		this._value = value;

		Object.freeze(this);
	}

	public getValue(): T {
		if (!this.isSuccess) {
			throw new Error('Cant retrieve the value from a failed result.');
		}

		return this._value;
	}

	public static ok<U>(value?: U): Result<U> {
		return new Result<U>(true, null, value);
	}

	public static fail<U>(error: string): Result<U> {
		return new Result<U>(false, error);
	}

	public static combine(results: Result<unknown>[]): Result<unknown> {
		for (const result of results) {
			if (result.isFailure) return result;
		}
		return Result.ok<unknown>();
	}
}
