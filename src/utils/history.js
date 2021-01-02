export const onNavigate = (path, state = {}) => {
  window.history.pushState(
    state,
    null,
    path
  );

  const popStateEvent = new PopStateEvent('popstate', { state: state });
  dispatchEvent(popStateEvent);
};

export const loginGoogle = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth().signInWithRedirect(provider);
}