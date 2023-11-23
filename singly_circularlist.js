
class LinkedList
{
  
  constructor ()
  {
    this.list = null
  }

  create(ele)
  {
    var node=new newNode(ele)
    var temp=this.list
    if(temp==null)
    {
       this.list=node
       node.next=this.list
    }
    else
    {
     
      while(temp.next!=this.list)
      {
        temp=temp.next
      }
      temp.next=node
      node.next=this.list
    }
    
	}
	insert(ele,pos)
	{
	  var node=new newNode(ele)
	  var temp=this.list
		if(pos==1)
		{
			while(temp.next!=this.list)
			{
				temp=temp.next
			}
			node.next=this.list
			this.list=node
			temp.next=this.list
		}
		else
		{
			var i=2
			while((i!=pos)&&(temp.next!=this.list))
			{
				temp=temp.next
				i++
			}
			node.next=temp.next
			temp.next=node
			}
	}
	del(ele)
	{
	  var temp=this.list
		var prev=null

		while((temp.data!=ele)&&(temp.next!=list))
		{
			prev=temp
			temp=temp.next
		}
		if(temp.data==ele)
		{
			if(prev==null)
			{
				if(temp.next==this.list)
				{
					this.list=null
				}
				else
				{
					var t=this.list
					while(t.next!=this.list)
					{
						t=t.next
					}
					this.list=this.list.next
					t.next=this.list
				}
			}
			else
			{
				prev.next=temp.next
			}
			temp=null
		}
		else
		{
		  console.log("Element not present")
		}
	}
	display()
	{
		let temp=this.list
		if(temp!=null)
		{
			do
			{
				console.log(temp.data)
				temp=temp.next
			}while(temp!=this.list)
		}
		else
			console.log("List is empty")
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

var list = new LinkedList()
list.create(1)
list.create(2)
list.create(3)
list.insert(10,1)
list.insert(30,3)
list.insert(40,500)
list.del(3)
list.del(10)
list.del(40)
list.display()

