import "./flex_figure.css";

const Flexbox_Grid = () => {
  return (
    <>
      {/* <!-- Row 1: One box per column --> */}

      <div className="row">
        <figure>
          <div class="one"></div>
          <figcaption>
            <h2> Abstract 1</h2>
            <p>Lorem ipsum</p>
          </figcaption>
        </figure>

        <figure>
          <div class="two"></div>
          <figcaption>
            <h2> Abstract 2</h2>
            <p>Lorem ipsum</p>
          </figcaption>
        </figure>

        <figure>
          <div class="three"></div>
          <figcaption>
            <h2> Abstract 3</h2>
            <p>Lorem ipsum</p>
          </figcaption>
        </figure>

        <figure>
          <div class="four"></div>
          <figcaption>
            <h2> Abstract 4</h2>
            <p>Lorem ipsum</p>
          </figcaption>
        </figure>
      </div>

      {/* <!-- Row 2: 2 boxes, each spanning 2 columns --> */}

      <div class="row">
        <figure className='stretch'>
          <div class="one"></div>

          <figcaption>
            <h2> Abstract 1</h2>
            <p>Lorem ipsum</p>
          </figcaption>
        </figure>

        <figure className='stretch'>
          <div class="three"></div>

          <figcaption>
            <h2> Abstract 3</h2>
            <p>Lorem ipsum</p>
          </figcaption>
        </figure>
      </div>

      {/* <!-- Row 3: One box spans 3 columns, one box spans 1 column --> */}

      <div className="row">
        <figure className='stretch1'>
          <div className="four"></div>

          <figcaption>
            <h2> Abstract 4</h2>
            <p>Lorem ipsum</p>
          </figcaption>
        </figure>

        <figure>
          <div className="two"></div>

          <figcaption>
            <h2> Abstract 2</h2>
            <p>Lorem ipsum</p>
          </figcaption>
        </figure>
        <figure>
          <div className="one"></div>

          <figcaption>
            <h2> Abstract 1</h2>
            <p>Lorem ipsum</p>
          </figcaption>
        </figure>


      </div>

      {/* <!-- Row 4: One box spans 4 columns --> */}

      <div className='row'>

      <figure className='stretch2'>
          <div className="three"></div>

          <figcaption>
            <h2> Abstract 3</h2>
            <p>Lorem ipsum</p>
          </figcaption>
        </figure>



      </div>

      {/* <!-- Row 5: 3 boxes, 1-2-1 distribution --> */}

      <div className='row'>

      <figure>
          <div className="one"></div>

          <figcaption>
            <h2> Abstract 1</h2>
            <p>Lorem ipsum</p>
          </figcaption>
        </figure>
      <figure>
          <div className="two"></div>

          <figcaption>
            <h2> Abstract 2</h2>
            <p>Lorem ipsum</p>
          </figcaption>
        </figure>
      <figure>
          <div className="three"></div>

          <figcaption>
            <h2> Abstract 3</h2>
            <p>Lorem ipsum</p>
          </figcaption>
        </figure>


      </div>




    </>
  );
};

export default Flexbox_Grid;
