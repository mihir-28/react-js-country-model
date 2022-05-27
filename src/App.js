
import './App.css';
import Images from './Images'


function TextHeader(props) {
  return (
    <div>
    <div className='Main-header'>
      <input
        type="checkbox"
        id="1"
        name="North-America"
        value="North-America"
      // checked={isChecked}
      // onChange={handleOnChange}
      />
      <h5 className='Header'>{props.name}</h5>
    </div>
    <hr style={{lineHeight:1.5}}/>
    </div>
  )
}

const NorthAmerica = () => {
  return (
    <>
      <TextHeader name='North America' />
      {Object.entries(Images.northAmerica).map((image, index) => {
        return (

          <div key={index} className='Text-header'>
            <input
              type="checkbox"
              id="1"
              name="North-America"
              value="North-America"
            // checked={isChecked}
            // onChange={handleOnChange}
            />
            <img src={image[1][0]} alt='Test Image' style={{ height: 20, width: 20, borderRadius: 3, marginLeft: 10 }} />
           <h6 className='List-text'>{image[1][1]}</h6>
          </div>
        )
      })}
    </>
  )
}
const CentralAmerica = () => {
  return (
    <>
      <TextHeader name='Central America' />
      {Object.entries(Images.centralAmerica).map((image, index) => {
        return (

          <div key={index} className='Text-header'>
            <input
              type="checkbox"
              id="1"
              name="North-America"
              value="North-America"
            // checked={isChecked}
            // onChange={handleOnChange}
            />
            <img src={image[1][0]} alt='Test Image' style={{ height: 20, width: 20, borderRadius: 3, marginLeft: 10 }} />
           <h6 className='List-text'>{image[1][1]}</h6>
          </div>
        )
      })}
    </>
  )
}
const SouthAmerica = () => {
  return (
    <>
      <TextHeader name='South America' />
      {Object.entries(Images.southAmerica).map((image, index) => {
        return (

          <div key={index} className='Text-header'>
            <input
              type="checkbox"
              id="1"
              name="North-America"
              value="North-America"
            // checked={isChecked}
            // onChange={handleOnChange}
            />
            <img src={image[1][0]} alt='Test Image' style={{ height: 20, width: 20, borderRadius: 3, marginLeft: 10 }} />
           <h6 className='List-text'>{image[1][1]}</h6>
          </div>
        )
      })}
    </>
  )
}
const Europe = () => {
  return (
    <>
      <TextHeader name='Europe' />
      {Object.entries(Images.europe).map((image, index) => {
        return (

          <div key={index} className='Text-header'>
            <input
              type="checkbox"
              id="1"
              name="North-America"
              value="North-America"
            // checked={isChecked}
            // onChange={handleOnChange}
            />
            <img src={image[1][0]} alt='Test Image' style={{ height: 20, width: 20, borderRadius: 3, marginLeft: 10 }} />
           <h6 className='List-text'>{image[1][1]}</h6>
          </div>
        )
      })}
    </>
  )
}
const Africa = () => {
  return (
    <>
      <TextHeader name='Africa' />
      {Object.entries(Images.Africa).map((image, index) => {
        return (

          <div key={index} className='Text-header'>
            <input
              type="checkbox"
              id="1"
              name="North-America"
              value="North-America"
            // checked={isChecked}
            // onChange={handleOnChange}
            />
            <img src={image[1][0]} alt='Test Image' style={{ height: 20, width: 20, borderRadius: 3, marginLeft: 10 }} />
           <h6 className='List-text'>{image[1][1]}</h6>
          </div>
        )
      })}
    </>
  )
}
const Asia = () => {
  return (
    <>
      <TextHeader name='Asia' />
      {Object.entries(Images.Asia).map((image, index) => {
        return (

          <div key={index} className='Text-header'>
            <input
              type="checkbox"
              id="1"
              name="North-America"
              value="North-America"
            // checked={isChecked}
            // onChange={handleOnChange}
            />
            <img src={image[1][0]} alt='Test Image' style={{ height: 20, width: 20, borderRadius: 3, marginLeft: 10 }} />
           <h6 className='List-text'>{image[1][1]}</h6>
          </div>
        )
      })}
    </>
  )
}
const Oceania = () => {
  return (
    <>
      <TextHeader name='Oceania' />
      {Object.entries(Images.oceania).map((image, index) => {
        return (

          <div key={index} className='Text-header'>
            <input
              type="checkbox"
              id="1"
              name="North-America"
              value="North-America"
            // checked={isChecked}
            // onChange={handleOnChange}
            />
            <img src={image[1][0]} alt='Test Image' style={{ height: 20, width: 20, borderRadius: 3, marginLeft: 10 }} />
           <h6 className='List-text'>{image[1][1]}</h6>
          </div>
        )
      })}
    </>
  )
}


function App() {
  return (
    <div class="modal-dialog modal-dialog-top modal-dialog modal-xl" role="document" >
      <div class="modal-content" >
        <div class="modal-header">
          <h5 class="modal-title">Select where to ship your product</h5>
          {/* <a href="#" class="close" data-bs-dismiss="modal" aria-label="Close"><em class="icon ni ni-cross"></em></a> */}
        </div>
        <div class="modal-body modal-body-sm" >
          <div className="App">
            <div style={{marginLeft:10,marginRight:10}}>
              <NorthAmerica />
              <CentralAmerica />
              <SouthAmerica />
            </div>
            <div style={{marginLeft:10,marginRight:10}}>
              <Europe />
            </div>
            <div style={{marginLeft:10,marginRight:10}}>
              <Africa />
            </div>
            <div style={{marginLeft:10,marginRight:10}}>
              <Asia />
              <Oceania />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default App;
