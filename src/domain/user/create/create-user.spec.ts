describe('Jest test', () => {
	it('Test One should work', () => {
		expect('test is working').toEqual('test is working');
	});

	it('Test Two should not work', () => {
		expect(new Promise((reject) => reject())).rejects.toThrow();
	});
});
