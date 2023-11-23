class LinkedList {
  constructor () {
    this.list = null
  }

create(ele)
{
  if(!this.list)
  {
    this.list=new newNode(ele)
  }
  else
  {
    let temp=this.list
    while(temp.next!=null)
      temp=temp.next
    temp.next=new newNode(ele)
  }
}
insert(ele, pos)
{
  const n=new newNode(ele)
  if(pos==1)
  {
    n.next=this.list
    this.list=n
  }
  else
  {
    let temp=this.list
    let i=2
    while(i!=pos && temp.next!=null)
    {
      temp=temp.next
      i=i+1 
    }
    n.next=temp.next
    temp.next=n
  }
}

del(ele)
{
  let temp=this.list
	let prev=null
	
	while(temp.data!=ele && temp.next!=null)
	{
		prev=temp
		temp=temp.next
	}
	if(temp!=null)
		if(prev!=null)
			prev.next=temp.next
		else
			this.list=this.list.next
		temp=null
	
}


display()
{
  
    let temp=this.list
    while(temp!=null)
    {
      console.log(temp.data)
      temp=temp.next
    }
  }
}
class newNode {
  constructor (data, next) {
    this.data = data
    this.next = null
  }
}

const list = new LinkedList()
list.create(1)
list.create(2)
list.create(3)
list.insert(10,1)
list.insert(30,3)
list.insert(40,500)
list.del(3)
list.display()
