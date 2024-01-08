/*Simply you can warp the input with the form tag and you can use the onSubmit function,
 In that case, onClick and press enter both will work.*/

const handleOnSubmit = () => {
    // write your function here
  
  }
  
  <form onSubmit={handleOnSubmit} className="input">
    <input
      type="text"
      placeholder="Type something..."
      id="myinput"
      onChange={(e) => setText(e.target.value)}
      value={text}
    />
    <div className="send">
      {/* <img src={Attach} alt="attach" /> */}
      <input
        type="file"
        style={{ display: 'none' }}
        id="file"
        onChange={(e) => setImg(e.target.files[0])}
      />
      <label htmlFor="file">
        <img src={Attach} alt="img" />
      </label>
      <button type="submit">Send</button>
    </div>
  </form>