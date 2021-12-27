import {Link} from 'react-router-dom'
import "./item.css"

function Item({prod}) {
    console.log('item')

    return (
        <div 
            key={prod.id}
            className='col-md-4'
        >                        
            <div className="card w-100 mt-5" >
                <div className="card-header">
                    {`${prod.title} `}
                </div>
                <div className="img-fluid">
                    <img src={prod.imagenes} alt='' width="300" />
                                                                             
                </div>
                <div>
                {prod.price} 
                </div>
                <div className="card-footer">  
                <Link to={`/detalle/${prod.id}`}>
                    <button className="btn btn-outline-primary btn-block">
                       Comprar
                    </button>
                </Link>                                                      
                                                                                
                </div>
            </div>
        </div>
    )
}

export default Item