//jsx, we need to enclose js inside {}

const Name='karishma'
const element= <p id="demo">Hello,{Name}</p>

let fruits = ['mango', 'banana']
let items=<ul>
   { fruits.map((value,index)=>{
        return <li key={value+index}>{value}</li>
    })
}
</ul>
let allItems=React.createElement('div',null,element,items)
ReactDOM.render(allItems,document.getElementById('container'))