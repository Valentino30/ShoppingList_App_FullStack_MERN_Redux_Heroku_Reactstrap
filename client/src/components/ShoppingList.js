import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Input } from 'reactstrap'
import { connect } from 'react-redux';
import { getItems, postItem, deleteItem } from '../actions/itemActions';


class ShoppingList extends Component {

    state = {
        newItem: ''
    }

    componentDidMount() {
        this.props.getItems()
    }

    textInput = e => {
        this.setState({
            newItem: e.target.value
        })
    }

    postItem = e => {  
        if(e.key === 'Enter' && this.state.newItem !== '') {
            this.props.postItem(this.state.newItem)
            this.setState({
                newItem: ''
            })
        }
    }

    deleteItem = id => {
        this.props.deleteItem(id)
    }

    render() {   
        return (
            <Container>
                <Input 
                    placeholder="Enter Item"
                    style={{marginBottom: '2rem'}}
                    value={this.state.newItem}
                    onChange={this.textInput}
                    onKeyDown={this.postItem}>
                </Input>
                
                <ListGroup>
                    {this.props.items.map(item => (
                        <ListGroupItem key={item._id}> 
                            <Input 
                                addon type="checkbox" 
                                aria-label="Checkbox for following text input"
                                style={{marginRight: '1rem'}}
                                onClick={() => this.deleteItem(item._id)}/>
                            {item.name} 
                        </ListGroupItem>
                    ))}
                </ListGroup>           
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    getItems: () => dispatch(getItems()),
    postItem: payload => dispatch(postItem(payload)),
    deleteItem: payload => dispatch(deleteItem(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList)