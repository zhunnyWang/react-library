import { dispatch } from "./index";
export const order = (
  state = { list: [], loading: false, error: "" },
  action
) => {
  switch (action.type) {
    case "requestOrder":
      return { list: [], loading: true, error: "" };
    case "orderSuccess":
      return { list: action.result, loading: false, error: action.orderState };
    case "orderFailure":
      return { list: [], loading: false, error: action.error };
    default:
      return state;
  }
};

export function getList() {
  console.log("i am in getList");
  return { type: "getList" }
}
