import CountDuck from './CountDuck'
import { put, select } from "redux-saga/effects";
export default class ExtendedDuck extends CountDuck {
  get quickTypes() {
    return {
      ...super.quickTypes,
      MORE: 1
    };
  }
  get reducers() {
    return {
      ...super.reducers,
      more: (state, action) => 1
    };
  }
  get rawSelectors() {
    return {
      ...super.rawSelectors,
      more(state) {
        return state.more;
      }
    };
  }
  get creators() {
    const { types } = this;
    return {
      ...super.creators,
      more() {
        return {
          type: types.MORE
        };
      }
    };
  }
  *saga() {
    yield* super.saga();
    const { types, selector, selectors, creators } = this;
    yield take([types.INCREMENT, types.MORE]);
    const { count, more } = selector(yield select());
    const _more = selectors.more(yield select());
    console.log('extendedDuck:')
    console.log(count, more, _more)
    yield put(creators.more());
  }
}
