import SomeReducer from '../reducers/SingInReducer';

export default class SomeActions {
	static setSomeField(maxNumber) {
		return dispatch => new Promise((resolve) => {
			dispatch(SomeReducer.actions.setSomeField(Math.random() * maxNumber));
			resolve();
		});
	}
}
