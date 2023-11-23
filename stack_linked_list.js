class Stack
{
  constructor () 
  {
    this.top = null
  }

  push(ele)
  {
	  var node=new newNode(ele)
	  console.log(node)
	  node.next=this.top
	  this.top=node
  }

  pop()
  {
	  var temp=this.top
	  this.top=this.top.next
	  temp=null
  }

  display()
  {
    
      var temp=this.top
      while(temp!=null)
      {
        console.log(temp.data)
        temp=temp.next
      }
  }
  
}
  
class newNode 
{
  constructor (data, next) 
  {
    this.data = data
    this.next = null
  }

}
const top = new Stack()
top.push(10)
top.push(20)
top.push(30)
top.push(40)
top.push(50)
console.log("After PUSH...")
top.display()
top.pop()
console.log("After POP...")
top.display()
top.pop()
console.log("After POP...")
top.display()
