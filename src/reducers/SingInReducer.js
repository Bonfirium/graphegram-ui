import { createModule } from 'redux-modules';

export default createModule({
	name: 'some',
	initialState: {
		someField: Math.random(),
	},
	transformations: {
		setSomeField: { reducer: (state, { payload }) => ({ ...state, someField: payload }) },
	},
});
