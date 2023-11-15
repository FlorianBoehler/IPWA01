import Background from "../components/background/Background";

function MainPage(props) {
  return (
    <div onClick={props.onMainPageClick}>
      <Background/>
    </div>
  );
}

export default MainPage;
