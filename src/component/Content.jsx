function Content() {
  return <><div className="mb-3">
    <label htmlFor="formGroupExampleInput" className="form-label">Example label</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
  </div><div className="mb-3">
      <label htmlFor="formGroupExampleInput2" className="form-label">Another label</label>
      <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
      <div className="col-auto">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </div></>
}


export default Content;