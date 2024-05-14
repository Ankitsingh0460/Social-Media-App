

const LoadingScreen = () => {
  return <div class="d-flex justify-content-center spinner">
    <div class="spinner-border" role="status" style={{ width: "4rem", height: "4rem" }}>
      <span class="visually-hidden  ">Loading...</span>
    </div>
  </div>
}


export default LoadingScreen;