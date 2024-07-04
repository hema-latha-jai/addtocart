import react,{useState} from "react"
import Navbar from './components/Navbar'
import Header from './components/Header'

function App() {
  let [cartvalue,setcartvalue] = useState(0);
  let [toggle,settoggle] = useState(true);
  return <>
    <Navbar cartvalue={cartvalue} />
    {/* <Header /> */}
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

              <Card setcartvalue={setcartvalue}/>
              <Card setcartvalue={setcartvalue}/>
              <Card setcartvalue={setcartvalue}/> 

          </div>
      </div>
    </section>
  </>
}

export default App;

function Card({setcartvalue}) {
  
  let [toggle,settoggle] = useState(true);
  return <>
 
      <div className="col mb-5">
          <div className="card h-100">         
            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                    <div className="card-body p-4">
                        <div className="text-center"> 
                            <h5 className="fw-bolder">Special Item</h5>
                            <div className="d-flex justify-content-center small text-warning mb-2">
                                       <span className="rating"><i class="fa-regular fa-star"></i></span>
                                       <span className="rating"><i class="fa-regular fa-star"></i></span>
                                       <span className="rating"><i class="fa-regular fa-star"></i></span>
                                       <span className="rating"><i class="fa-regular fa-star"></i></span>
                                       <span className="rating"><i class="fa-regular fa-star"></i></span>
                                    </div>
                            <span className="text-muted text-decoration-line-through">$20.00</span>
                            $18.00
                            
                        </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                        {
                        toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                          setcartvalue(prev=>prev+1)
                          settoggle(!toggle)
                        }}>Add to cart</button>
                        :
                        <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                          setcartvalue(prev=>prev-1)
                          settoggle(!toggle)
                        }}>Remove</button>
                      }
                        </div>
                    </div>
                </div>
            </div>
          
  </>
}


