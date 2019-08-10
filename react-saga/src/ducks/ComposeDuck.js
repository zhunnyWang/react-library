import { ComposableDuck } from "saga-duck";
import CountDuck from "./CountDuck";
import ExtendedDuck from "./ExtendedDuck";
import { takeEvery, put, select } from "redux-saga/effects";

export default class ComposedDuck extends ComposableDuck {
  get quickTypes() {
    return {
      ...super.quickTypes,
      PARENT: 1
    };
  }
  get quickDucks() {
    return {
      ...super.quickDucks,
      duck1: CountDuck,
      duck2: ExtendedDuck,
      duck3: ExtendedDuck
    };
  }
  *saga() {
    yield* super.saga();
    const {
      types,
      selector,
      ducks: { duck1, duck2, duck3 }
    } = this;
    yield takeEvery(types.PARENT, function*() {
      yield put({ type: duck1.types.INCREMENT });
      yield put(duck2.creators.more());
      yield put(duck3.creators.more());
    });
    // { parent, duck1: {count}, duck2: {count, more}, duck3: {count, more} }
    const state = selector(yield select());
    console.log('composeDuck:')
    console.log(state)
  }
}