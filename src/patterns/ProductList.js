import React from 'react'
import { FormatPrice }from './../utils/Core'
import ProductListItem from './ProductListItem'
import Table from './../modules/Table'

const returnTotalsText = (IsBundleOrder) => {
 return (IsBundleOrder) ? 'Bundle total' : 'Total'
}

const ProductList = (props) => (
  <section data-test-id="ProductListView">
    <table className="visually-hidden">
      <thead aria-hidden="false" className="visually-hidden">
        <tr>
          <th>Product name</th>
          <th>Status</th>
          <th>Cost</th>
          <th>Actions</th>
        </tr>
      </thead>
      </table>
      {props.items.map((item, index)  => (  
        <ProductListItem {...item} index={index} key={index} params={props.match.params} />
      ))}
      <table className="lined stack">
      <tfoot>
        <tr>
          <td className="four empty">&nbsp;</td>
          <td className="three">
            <p><span className="bold">{returnTotalsText(props.IsBundleOrder)} (all prices exclude VAT)</span></p>
          </td>
          <td className="two align-right">
            <p>
              <span className="price bold">&pound;{FormatPrice(props.TotalOneOffPrice)}</span> 
              <span className="price-text">one-off</span><br/>
              <span className="price bold">&pound;{FormatPrice(props.TotalMonthlyPrice)}</span> 
              <span className="price-text">monthly</span>
            </p>
          </td>
          <td className="three empty">&nbsp;</td>
        </tr>
      </tfoot>
    </table>
    <Table />
  </section>
);

export default ProductList

