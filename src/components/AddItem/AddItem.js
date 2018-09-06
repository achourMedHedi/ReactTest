import React from 'react'
import {Form , Col , Input ,Button ,Container} from 'reactstrap'
import { addItem } from '../../Actions/addItem';
import {connect} from 'react-redux'
class AddItem extends React.Component {

    addNewItem = () => {
        let prodName = document.getElementById('prodName').value
        let quantity = document.getElementById('quantity').value
        let price = document.getElementById('price').value
        return this.props.addItem(prodName , quantity , price)
    }

    render () {
        return (
            <Container className="Container">
                <h1>add new item</h1>
                <Form inline>
                    <Col md={3} >
                        <Input type="text" placeholder='product name' id='prodName' />
                    </Col>
                    <Col md={3} >
                        <Input type="text" placeholder='quantity' id='quantity' required/>
                    </Col>
                    <Col md={3} >
                        <Input type="text" placeholder='price' id='price' required/>
                    </Col>
                    <Col md={3} >
                        <Button color='primary' onClick={()=>{return this.addNewItem()}} >ADD</Button>
                    </Col>
                </Form>
            </Container>
        )
    }
}


const mapDispatchToProps = {
    addItem,
  
  }
  
  const mapStateToProps = (state) =>( {
    list : state.items.list ,
  
  
  })

  export default connect(mapStateToProps , mapDispatchToProps)(AddItem)

