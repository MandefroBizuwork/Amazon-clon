

import React from 'react'
import numeral from 'numeral'
const CurencyFormat = ({amount}) => {
const formatedCurency=numeral(amount).format("$0,0.00")
return <div>{formatedCurency}</div>
}

export default CurencyFormat
