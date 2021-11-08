import {
  subscriptionRequest,
  subscriptionFailure,
  subscriptionSuccess,
} from "../subscription/actions";

// Подписка на новости
export const subscriptionFetch = (email) => async (dispatch) => {
  dispatch(subscriptionRequest());
  try {
    const response = await fetch(
      `https://fe-diplom.herokuapp.com/subscribe?email=${email}`
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    if (data) {
      dispatch(subscriptionSuccess());
    }
  } catch (e) {
    dispatch(subscriptionFailure(e.message));
  }
};
