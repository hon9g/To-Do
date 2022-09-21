import view from './presentation/index'

const data = [{
	id: 1,
	description: 'abc',
	isDone: false,
	category: 'general',
	tags: ['en', 'zZZ']
},{
	id: 2,
	description: 'ㄱㄴㄷ',
	isDone: true,
	category: 'general',
	tags: ['ko', 'zZZ']
}]

view(data)