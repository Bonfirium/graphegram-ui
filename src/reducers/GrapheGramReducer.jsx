import { createModule } from 'redux-modules';

export default createModule({
	name: 'signIn',
	initialState: {
		isAuth: false,
	},
	transformations: {
		signIn: {
			reducer: (state, {payload}) => ({...state, isAuth: payload})
		},
	},
});
