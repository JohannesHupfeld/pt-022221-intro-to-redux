import { connect } from 'react-redux';
import { addToCart } from '../redux/actions';

function ItemsList(props) {
  console.log(props)
  return (
    <ul>
      {props.items.map(i => 
        <li key={i.id}>
          <button onClick={() => props.addToCart(i)}>{i.name} - {i.price}</button>
          {/* <button onClick={() => props.dispatchAddToCart(i)}>{i.name} - {i.price}</button> */}
          {/* above commented out code is if we  were using mapDispatchToProps function */}
        </li>
      )}
    </ul>
  )
}

const mapStateToProps = state => ({items: state.items})

// const mapDispatchToProps = dispatch => {   *** recommended when first creating project
//   return {
//     dispatchAddToCart: (item) => dispatch(addToCart(item))
//   }
// }

// export default commect(mapStateToProps, mapDispatchToProps)(ItemList)

export default connect(mapStateToProps, { addToCart })(ItemsList)
