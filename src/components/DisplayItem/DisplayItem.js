import React from 'react'
import {connect} from 'react-redux'
import {Col , Container , Row} from 'reactstrap'

class DisplayItem extends React.Component {

    state = ({
        total : 0 
    })
    displayItem = () => {
        let total = 0
       return  this.props.list.list.map((el,index)=> {
            return <Row key={index}> 
                <Col md={3} >
                    {this.props.list.details[el].product}
                </Col>
                <Col md={3} >
                    {this.props.list.details[el].qty}
                </Col>
                <Col md={3} >
                    {this.props.list.details[el].price}
                </Col>
                <Col md={3} >
                    {this.props.list.details[el].price * this.props.list.details[el].qty}
                </Col>
             </Row> 
            
        })
        
    }

    total = () => {
        let total = 0
        this.props.list.list.map((el,index)=> {
            return <Row key={index}> 
                <Col md={3} >
                    {this.props.list.details[el].product}
                </Col>
                <Col md={3} >
                    {this.props.list.details[el].qty}
                </Col>
                <Col md={3} >
                    {this.props.list.details[el].price}
                </Col>
                <Col md={3} >
                    {this.props.list.details[el].price * this.props.list.details[el].qty}
                    {console.log(total = total +this.props.list.details[el].price * this.props.list.details[el].qty)}
                </Col>
             </Row> 
            
        })
        return total
    }

    render () {
        return (
            <Container className="Container">
                <h3>items</h3>
                <hr/>
                <Row  className='row'> 
                <Col md={3} >
                    Product Name
                </Col>
                <Col md={3} >
                    Quantity
                </Col>
                <Col md={3} >
                    Price
                </Col>
                <Col md={3} >
                    Total
                </Col>

             </Row> 
                {this.displayItem()}
                
                
                <h1>total : {this.total()}</h1>
            </Container>
        )
    }
}


const mapDispatchToProps = {
  
  }
  
  const mapStateToProps = (state) =>( {
    list : state.items.list ,
  
  
  })
  
  
  export default connect(mapStateToProps , mapDispatchToProps)(DisplayItem)
