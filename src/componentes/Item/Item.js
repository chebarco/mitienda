import {Link} from 'react-router-dom'

function Item({prod}) {
    console.log('item')
    return (
        <div 
            key={prod.id}
            className='col-md-4'
        >                        
            <div className="card w-100 mt-5" >
                <div className="card-header">
                    {`${prod.title} - ${prod.categoria}`}
                </div>
                <div className="card-body">
                    <img src={prod.imagenes} alt='' width="500px" />
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