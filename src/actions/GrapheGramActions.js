import GrapheGramReducer from '../reducers/GrapheGramReducer';

export default class GrapheGramActions {
	static signIn(name, privateKey) {
		return dispatch => new Promise((resolve) => {

			//auth
			dispatch(GrapheGramReducer.actions.signIn(true));
			resolve();
		});
	}
}
