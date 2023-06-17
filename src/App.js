
import './App.css';

function App() {
  return (

    <div id='main' >
      <div className='side_bar' >
        <h2>LOADGN</h2>
        <ul>
          <li><a href="#">Current Request</a></li>
          <li><a href="#">Ongoing Stay</a></li>
          <li><a href="#">Previous Stay</a></li>
          <li><a href="#">Report</a></li>
        </ul>

        <div className='sidebar_bottom' >
          <button className='sidebar_btn' >Log-Out</button>
          <p>Help-Desk</p>
          <p>786-874 9988</p>
        </div>
      </div>


      <h2 className='heading'>You currently have 3 requests</h2>
      <div className='right_content'>

        <div className='first'>
          <h3>St Judes Hospital <br /><span>sarasotaFL.33178</span> </h3>
          <h3 >10 - 17 <br /> <span className='oct'>October</span> <span>December</span> </h3>

          <h3>20 Rooms <br /> <span>10 singles 10 double</span></h3>
          <br />
        </div>

        <div className='input_content' >
          <input className='input1' type='submit' value="RECEIVED" style={{ borderRadius: 19, outline: "none" }} />
          <input className='input2' type='submit' value="NEGOTIATING" placeholder='' />
          <input className='input3' type='submit' value="COMPLETED" placeholder='' />
        </div>
      </div>


      <div className='right_content'>

        <div className='first'>
          <h3>St Judes Hospital <br /><span>sarasotaFL.33178</span> </h3>
          <h3 >10 - 17 <br /> <span className='oct'>October</span> <span>December</span> </h3>

          <h3>20 Rooms <br /> <span>10 singles 10 double</span></h3>
          <br />
        </div>

        <div className='input' >
          <input className='input_complete' type='submit' value="COMPLETED" />
        </div>

        <div className="row">
          <div className="column">
          <input className='rare_btn' type="submit" value="Rare Find " />
            <div className="card">
        

              <h3 className='empty_box' ></h3>
              <p className='discription'>1.5 mile away from job location</p>
              <p>Ssingle $120
                Double $145
              </p>
              <input className='box_btn' type="submit" value="Book now" />
            </div>
          </div>

          <div className="column">
            <div className="card">
            <h3 className='empty_box' ></h3>
              <p className='discription'>1.5 mile away from job location</p>
              <p>Ssingle $120
                Double $145
              </p>
              <input className='box_btn' type="submit" value="Book now" />
            </div>
          </div>

          <div className="column">
            <div className="card">
            <h3 className='empty_box' ></h3>
              <p >1.5 mile away from job location</p>
              <p>Ssingle $120
                Double $145
              </p>
              <input className='box_btn' type="submit" value="Book now" />
            </div>
          </div>

      </div>

      </div>

    </div>







  );
}

export default App;
