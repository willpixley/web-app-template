export async function test(req, res) {
	try {
		res.status(200);
	} catch (error) {
		console.log('Server error', error);
		res.status(500).json({ message: 'Server error' });
	}
}
